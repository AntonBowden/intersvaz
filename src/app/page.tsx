import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ООО ИнтерСвязь",
  description: "ООО ИнтерСвязь главная страница",
  keywords:
    "ИнтерСвязь, Рязань, Электронная подпись, СБИС, Электронные торги, Online кассы",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <Contact />
    </>
  );
}
