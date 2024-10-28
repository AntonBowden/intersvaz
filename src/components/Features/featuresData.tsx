import { Feature } from "@/types/feature";
import { FaFileSignature, FaCashRegister, FaDownload } from "react-icons/fa";
import { BiSolidReport, BiSolidBank } from "react-icons/bi";
import { RiAuctionFill } from "react-icons/ri";

const featuresData: Feature[] = [
  {
    id: 1,
    url: "/e-signatures",
    icon: <FaFileSignature size="3em" />,
    title: "ЭП для физических лиц",
    paragraph: `ООО "ИнтерСвязь" является лицензированной точкой выдачи УКЭП (Усиленной Квалифицированной Электронной Подписи) по всей России.`,
  },
  {
    id: 1,
    url: "/online-registers",
    icon: <FaCashRegister size="3em" />,
    title: "Online Кассы и ОФД",
    paragraph: `Поможем подобрать, настроить и зарегистрировать online-кассу и необходимое Вам оборудование`,
  },
  {
    id: 1,
    url: "/e-reporting",
    icon: <BiSolidReport size="3em" />,
    title: "Электронная отчетность",
    paragraph: `ООО "ИнтерСвязь" представляет Вам программный комплекс «СБИС++ Электронная отчетность»`,
  },
  {
    id: 1,
    url: "/e-bidding",
    icon: <RiAuctionFill size="3em" />,
    title: "Электронные торги",
    paragraph: `Предлагаем Вам получить Электронную подпись для участия в аукционах на электронных торговых площадках.`,
  },
  {
    id: 1,
    url: "/bank-guarantee",
    icon: <BiSolidBank size="3em" />,
    title: "Банковская гарантия",
    paragraph: `ООО "ИнтерСвязь" на данный момент может обеспечить выпуск банковских гарантий по 44-ФЗ, 223-ФЗ, 615-ФЗ до 50 млн. руб в СБЕРБАНКЕ.`,
  },
  {
    id: 1,
    url: "/download",
    icon: <FaDownload size="3em" />,
    title: "Cкачать ПО",
    paragraph: "",
  },
];
export default featuresData;
