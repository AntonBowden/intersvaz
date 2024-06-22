import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    name: "Facebook",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="mt-10 bg-light dark:bg-dark">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link target="_blank" href="https://vk.com/intersvaz62">
            <Image
              width="30"
              height="30"
              alt="VK logo"
              src="/images/logo/vk-logo.svg"
            ></Image>
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="leading-5text-body-color text-center text-xs dark:text-body-color-dark">
            &copy; 2024 ООО ИнтерСвязь. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
