import Breadcrumb from "@/components/Common/Breadcrumb";
import Order from "@/components/Order";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ООО ИнтерСвязь",
  description: "Обратная связь",
  keywords:
    "ИнтерСвязь, Рязань, Электронная подпись, СБИС, Электронные торги, Online кассы",
};

const OrderPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Заявка"
        description="Отправьте нам сообщение и наш менеджер свяжется с Вами."
      />

      <Order />
    </>
  );
};

export default OrderPage;
