import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { url, icon, title, paragraph } = feature;
  return (
    <Link
      href={url}
      className="group w-full bg-light  shadow-three ring-1 ring-black ring-opacity-5 hover:shadow-one dark:bg-dark dark:shadow-two
dark:hover:shadow-gray-dark sm:rounded-lg"
    >
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="m-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary  group-hover:bg-opacity-20">
          {icon}
        </div>
        <h3 className="mx-6 text-xl font-bold text-black group-hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="mx-6 mb-6 pr-[10px] text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
          {paragraph}
        </p>
      </div>
    </Link>
  );
};

export default SingleFeature;
