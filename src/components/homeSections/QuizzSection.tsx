import Image from "next/image";
import { Button } from "primereact/button";

const QuizzSection = () => {
  return (
    <section className="bg-red-50 p-8 flex flex-col">
      <Image></Image>
      <div className="flex flex-col gap-3 text-center">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. In mi amet donec curabitur
          lectus consectetur{" "}
        </p>
        <Button></Button>
      </div>
    </section>
  );
};

export default QuizzSection;
