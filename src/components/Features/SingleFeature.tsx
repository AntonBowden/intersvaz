import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="bg-light w-full shadow ring-1 ring-black ring-opacity-5 dark:bg-dark sm:rounded-lg">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="m-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="text-blue-2 mx-6 text-xl font-bold dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="mx-6 mb-6 pr-[10px] text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
