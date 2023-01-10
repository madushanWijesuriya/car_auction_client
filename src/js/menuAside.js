import {
  mdiCarEstate,
  mdiCarSearch,
  mdiViewList,
  mdiPlusCircle,
  mdiCloudUpload,
  mdiFileDocument,
  mdiContentCopy,
  mdiCash,
} from '@mdi/js'

export default [
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
        icon: mdiPlusCircle,
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
        icon: mdiContentCopy,
      },
      // {
      //   to: '/admin/add-car',
      //   label: 'Add car',
      //   icon: mdiCarEstate,
      // },
    ],
  },
  {
    label: 'News Letter',
    icon: mdiViewList,
    menu: [
      {
        to: '/admin/news-letter',
        label: 'News Letter',
        icon: mdiCarSearch,
      },
      {
        to: '/admin/create-news-letter',
        label: 'Add News Letter',
        icon: mdiPlusCircle,
      },
    ],
  },
  {
    label: 'Shipping Docs',
    icon: mdiViewList,
    menu: [
      {
        to: '/admin/all-documents',
        label: 'All Documentations',
        icon: mdiFileDocument,
      },
      {
        to: '/admin/add-docs',
        label: 'Add Documentation',
        icon: mdiCloudUpload,
      },
    ],
  },
  {
    label: 'Payments',
    icon: mdiViewList,
    menu: [
      {
        to: '/admin/view-all-payments',
        label: 'All Payments',
        icon: mdiCash,
      },
      {
        to: '/admin/add-payment',
        label: 'Add Payments',
        icon: mdiPlusCircle,
      },
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
