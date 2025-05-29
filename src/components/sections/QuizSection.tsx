import Image from "next/image";
import { Button } from "primereact/button";

const QuizzSection = () => {
  return (
    <section className="p-8 md:py-[3rem] flex flex-col lg:flex-row items-center justify-center h-[70dvh] md:h-[70dvh] lg:h-fit gap-5 lg:gap-8 bg-[var(--bright-red)]">
      <Image height={500} width={400} src={'/img/quiz.png'} alt="Quix imagez"></Image>
      <div className="flex flex-col gap-5 text-center lg:text-end">
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
