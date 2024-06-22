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
    ],
  },
];
export default menuData;
