import { mdiMonitor, mdiCarEstate, mdiCarSearch } from '@mdi/js'

export default [
  {
    to: '/admin/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    label: 'Car Section',
    icon: mdiCarSearch,
    menu: [
      {
        to: '/admin/all-cars',
        label: 'All Cars',
        icon: mdiCarSearch,
      },
      {
        to: '/admin/add-car',
        label: 'Add car',
        icon: mdiCarEstate,
      },
    ],
  },
  {
    label: 'Inquery Section',
    icon: mdiCarSearch,
    menu: [
      {
        to: '/admin/all-inqueries',
        label: 'Inqueries',
        icon: mdiCarSearch,
      },
    ],
  },
]

/**
 * 
  {
    to: "/admin/tables",
    label: "Tables",
    icon: mdiTable,
  },
  {
    to: "/admin/forms",
    label: "Forms",
    icon: mdiSquareEditOutline,
  },
 * 
 */
