import fill from 'lodash/fill'
import zipObject from 'lodash/zipObject'
import { MenuItem } from 'primevue/menuitem'

const arrayToBooleanObject = (array: string[]) => {
  return zipObject(array, fill(Array(array.length), true))
}

const findKeysByURL = (data: MenuItem[] | undefined, url: string): string[] => {
  if (!data) return []

  const keysRecursive = data.reduce((result: string[], item: MenuItem) => {
    // Use 'result.length' to check if a match is found
    if (result.length > 0) {
      return result // If a match is found, stop further iterations
    }

    const key = item.key || ''
    if (item.url === url) {
      return [key]
    }

    if (item.items) {
      const keysInSubItems = findKeysByURL(item.items, url)
      if (keysInSubItems.length > 0) {
        return [key, ...keysInSubItems]
      }
    }

    return []
  }, [])

  return keysRecursive
}

export const SideBarUtils = {
  arrayToBooleanObject,
  findKeysByURL
}
