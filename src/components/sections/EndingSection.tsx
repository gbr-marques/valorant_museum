import Image from "next/image";
import { Button } from "primereact/button";

const EndingSection = () => {
  return (
    <section
      className="p-8 md:pt-[3rem] pb-0 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 bg-gradient-to-r"
      style={
        {
          "--tw-gradient-from": "var(--light-steel)",
          "--tw-gradient-to": "var(--dark-steel)",
          "--tw-gradient-stops":
            "var(--tw-gradient-from), var(--tw-gradient-to)",
        } as React.CSSProperties
      }
    >
      <div className="flex flex-col gap-3 text-center lg:text-start">
        <h1 className="text-white! text-2xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-white!">
        Lorem ipsum dolor sit amet consectetur. Quis etiam pulvinar senectus cras tellus congue eros. In malesuada condimentum vitae sapien in pellentesque lectus lectus. Fusce euismod fringilla cursus bibendum ut.
        </p>
      </div>
      <Image className="lg:w-[50%]" height={300} width={500} src={"/img/jett.png"} alt={`Valorant's Agent Jett`}/>
    </section>
  );
};

export default EndingSection;
