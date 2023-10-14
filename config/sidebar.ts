import { MenuItem } from 'primevue/menuitem'

export const panelMenuConfig: MenuItem[] = [
  {
    key: '0',
    label: 'File',
    icon: 'pi pi-fw pi-file',
    url: '/admin'
  },
  {
    key: '1',
    label: 'Edit',
    icon: 'pi pi-fw pi-pencil',
    items: [
      {
        key: '1_0',
        label: 'Left',
        icon: 'pi pi-fw pi-align-left',
        items: [
          {
            key: '1_0',
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            key: '1_1',
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            key: '1_2',
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            key: '1_3',
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          }
        ]
      },
      {
        key: '1_1',
        label: 'Right',
        icon: 'pi pi-fw pi-align-right'
      },
      {
        key: '1_2',
        label: 'Center',
        icon: 'pi pi-fw pi-align-center'
      },
      {
        key: '1_3',
        label: 'Justify',
        icon: 'pi pi-fw pi-align-justify'
      }
    ]
  },
  {
    key: '2',
    label: 'Users',
    icon: 'pi pi-fw pi-user',
    items: [
      {
        key: '2_0',
        label: 'New',
        icon: 'pi pi-fw pi-user-plus'
      },
      {
        key: '2_1',
        label: 'Delete',
        icon: 'pi pi-fw pi-user-minus'
      },
      {
        key: '2_2',
        label: 'Search',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            key: '2_2_0',
            label: 'Filter',
            icon: 'pi pi-fw pi-filter',
            items: [
              {
                key: '2_2_0_0',
                label: 'Print',
                icon: 'pi pi-fw pi-print'
              }
            ]
          },
          {
            key: '2_2_1',
            icon: 'pi pi-fw pi-bars',
            label: 'List'
          }
        ]
      }
    ]
  },
  {
    key: '3',
    label: 'Events',
    icon: 'pi pi-fw pi-calendar',
    items: [
      {
        key: '3_0',
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            key: '3_0_0',
            label: 'Save',
            icon: 'pi pi-fw pi-calendar-plus'
          },
          {
            key: '3_0_0',
            label: 'Delete',
            icon: 'pi pi-fw pi-calendar-minus'
          }
        ]
      },
      {
        key: '3_1',
        label: 'Archieve',
        icon: 'pi pi-fw pi-calendar-times',
        items: [
          {
            key: '3_1_0',
            label: 'Remove',
            icon: 'pi pi-fw pi-calendar-minus'
          }
        ]
      }
    ]
  }
]
