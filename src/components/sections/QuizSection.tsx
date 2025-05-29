import Image from "next/image";
import { Button } from "primereact/button";

const QuizzSection = () => {
  return (
    <section className="p-8 flex flex-col items-center justify-center min-h-[70dvh] gap-5 bg-[var(--bright-red)]">
      <Image height={300} width={300} src={'/img/quiz.png'}></Image>
      <div className="flex flex-col gap-5 text-center ">
        <h1 className="text-2xl text-white!">Lorem ipsum dolor sit amet consectetur.</h1>
        <p className="text-white!">
          Lorem ipsum dolor sit amet consectetur. In mi amet donec curabitur
          lectus consectetur{" "}
        </p>
        <Button className="bg-[var(--light-steel)]!" label="Take quiz" raised></Button>
      </div>
    </section>
  );
};

export default QuizzSection;
