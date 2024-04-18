import Breadcrumb from "@/components/Common/Breadcrumb";
import Order from "@/components/Order";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const OrderPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Заявка"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Order />
    </>
  );
};

export default OrderPage;
