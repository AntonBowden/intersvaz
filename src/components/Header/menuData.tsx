import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "О Нас",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Цены",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 3,
    title: "Контакты",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Инфо",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "ЭП для физических лиц",
        path: "/e-signatures",
        newTab: false,
      },
      {
        id: 52,
        title: "Online Кассы и ОФД",
        path: "/online-registers",
        newTab: false,
      },
      {
        id: 53,
        title: "Электронная отчетность",
        path: "/e-reporting",
        newTab: false,
      },
      {
        id: 54,
        title: "Электронные торги",
        path: "/e-bidding",
        newTab: false,
      },
      {
        id: 55,
        title: "Банковская гарантия",
        path: "/bank-guarantee",
        newTab: false,
      },
      {
        id: 56,
        title: "Cкачать ПО",
        path: "/download",
        newTab: false,
      },

      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
