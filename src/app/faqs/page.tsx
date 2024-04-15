import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FAQs from "@/components/FAQs";
// import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const FAQsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Часто задаваемые вопросы"
        description="Мы рады предложить Вам ответы на самые часто задаваемые вопросы по использованию электронной отчетности и электронной подписи."
      />
      <FAQs />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default FAQsPage;
