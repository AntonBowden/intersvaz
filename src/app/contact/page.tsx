import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Обратная связь",
  keywords:
    "ИнтерСвязь, Рязань, Электронная подпись, СБИС, Электронные торги, Online кассы",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Контакты" description="" />
      <Contact />
    </>
  );
};

export default ContactPage;
