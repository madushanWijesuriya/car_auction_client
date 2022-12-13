import { mdiMonitor, mdiCarEstate, mdiCarSearch, mdiViewList } from '@mdi/js'

export default [
  {
    to: '/admin/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    label: 'Cars',
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
  {
    label: 'Inquery',
    icon: mdiCarSearch,
    menu: [
      {
        to: '/admin/all-inqueries',
        label: 'Inqueries',
        icon: mdiCarSearch,
      },
    ],
  },
  {
    label: 'Contents',
    icon: mdiViewList,
    menu: [
      {
        to: '/admin/content-mgt',
        label: 'Content-Managment',
        icon: mdiCarSearch,
      },
      // {
      //   to: '/admin/add-car',
      //   label: 'Add car',
      //   icon: mdiCarEstate,
      // },
    ],
  },
  // {
  //   label: 'Dropdown',
  //   icon: mdiViewList,
  //   menu: [
  //     {
  //       to: '/admin/content-mgt',
  //       label: 'Content Managment',
  //       icon: mdiCarSearch,
  //     },
  //     // {
  //     //   to: '/admin/add-car',
  //     //   label: 'Add car',
  //     //   icon: mdiCarEstate,
  //     // },
  //   ],
  // },
  {
    label: 'Clients',
    icon: mdiViewList,
    menu: [
      {
        to: '/admin/client-mgt',
        label: 'Client Managment',
        icon: mdiCarSearch,
      },
      // {
      //   to: '/admin/create-client',
      //   label: 'create client',
      //   icon: mdiCarSearch,
      // },
      // {
      //   to: '/admin/add-client',
      //   label: 'Add car',
      //   icon: mdiCarEstate,
      // },
    ],
  },
  {
    label: 'staff',
    icon: mdiViewList,
    menu: [
      {
        to: '/admin/user-mgt',
        label: 'User Managment',
        icon: mdiCarSearch,
      },
      {
        to: '/admin/create-user',
        label: 'Create User',
        icon: mdiCarSearch,
      },
      // {
      //   to: '/admin/add-client',
      //   label: 'Add car',
      //   icon: mdiCarEstate,
      // },
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
