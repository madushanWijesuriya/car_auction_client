import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact,
  mdiCarEstate,
  mdiCarSearch,
} from '@mdi/js'

export default [
  {
    to: '/admin/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    label: 'Dropdown',
    icon: mdiViewList,
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
