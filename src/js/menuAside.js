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
} from "@mdi/js";

export default [
  {
    to: "/admin/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  // {
  //   to: "/admin/tables",
  //   label: "Tables",
  //   icon: mdiTable,
  // },
  {
    to: "/admin/add-car",
    label: "Add car",
    icon: mdiCarEstate,
  },
  {
    to: "/admin/forms",
    label: "Forms",
    icon: mdiSquareEditOutline,
  },
  {
    to: "/admin/ui",
    label: "UI",
    icon: mdiTelevisionGuide,
  },
  {
    to: "/admin/responsive",
    label: "Responsive",
    icon: mdiResponsive,
  },
  {
    to: "/",
    label: "Styles",
    icon: mdiPalette,
  },
  {
    to: "/admin/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    to: "/admin/login",
    label: "Login",
    icon: mdiLock,
  },
  {
    to: "/admin/error",
    label: "Error",
    icon: mdiAlertCircle,
  },
  {
    label: "Dropdown",
    icon: mdiViewList,
    menu: [
      {
        label: "Item One",
      },
      {
        label: "Item Two",
      },
    ],
  },
  {
    href: "https://github.com/justboil/admin-one-vue-tailwind",
    label: "GitHub",
    icon: mdiGithub,
    target: "_blank",
  },
  {
    href: "https://github.com/justboil/admin-one-react-tailwind",
    label: "React version",
    icon: mdiReact,
    target: "_blank",
  },
];
