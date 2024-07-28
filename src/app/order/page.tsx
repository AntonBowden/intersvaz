import Breadcrumb from "@/components/Common/Breadcrumb";
import Order from "@/components/Order";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Page | ИнтерСвязь",
  description: "This is Order Page",
  // other metadata
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
