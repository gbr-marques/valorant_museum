import Image from "next/image";
import { Button } from "primereact/button";

const EndingSection = () => {
  return (
    <section className="bg-red-50 p-8 flex flex-col">
      <div className="flex flex-col gap-3 text-center">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. In mi amet donec curabitur
          lectus consectetur
        </p>
      </div>
      <Image></Image>
    </section>
  );
};

export default EndingSection;
