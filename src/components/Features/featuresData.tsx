import { Feature } from "@/types/feature";
import { FaFileSignature, FaCashRegister, FaDownload } from "react-icons/fa";
import { BiSolidReport, BiSolidBank } from "react-icons/bi";
import { RiAuctionFill } from "react-icons/ri";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaFileSignature size="3em" />,
    title: "ЭП для физических лиц",
    paragraph: `ООО "ИнтерСвязь" является лицензированной точкой выдачи УКЭП (Усиленной Квалифицированной Электронной Подписи) по всей России.`,
  },
  {
    id: 1,
    icon: <FaCashRegister size="3em" />,
    title: "Online Кассы и ОФД",
    paragraph: `Мы можем поставить Вам Online кассу на Ваш выбор, а также поставить и настроить Квалифицированную цифровую подпись и средства криптографической защиты информации`,
  },
  {
    id: 1,
    icon: <BiSolidReport size="3em" />,
    title: "Электронная отчетность",
    paragraph: `ООО "ИнтерСвязь" представляет Вам программный комплекс «СБиС++ Электронная отчетность»`,
  },
  {
    id: 1,
    icon: <RiAuctionFill size="3em" />,
    title: "Электронные торги",
    paragraph: `Предлагаем Вам получить Электронную подпись для участия в аукционах на электронных торговых площадках.`,
  },
  {
    id: 1,
    icon: <BiSolidBank size="3em" />,
    title: "Банковская гарантия",
    paragraph: `ООО "ИнтерСвязь" на данный момент может обеспечить выпуск банковских гарантий по 44-ФЗ, 223-ФЗ, 615-ФЗ до 50 млн. руб в СБЕРБАНКЕ.`,
  },
  {
    id: 1,
    icon: <FaDownload size="3em" />,
    title: "Cкачать ПО",
    paragraph: "",
  },
];
export default featuresData;
