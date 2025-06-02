import Image from "next/image";
import { Button } from "primereact/button";

const QuizzSection = () => {
  return (
    <section className="p-8 md:py-[3rem] flex flex-col lg:flex-row items-center justify-center h-fit lg:max-h-[512px]  bg-[var(--bright-red)]">
      <div className=" max-w-[1000px] flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-8">
        <Image
          height={500}
          width={400}
          src={"/img/quiz.png"}
          alt="Quix imagez"
        ></Image>
        <div className="flex flex-col gap-5 text-center lg:text-end">
          <h1 className="text-2xl text-white!">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-white!">
            Lorem ipsum dolor sit amet consectetur. In mi amet donec curabitur
            lectus consectetur{" "}
          </p>
          <Button
            className="bg-[var(--light-steel)]!"
            label="Take quiz"
            raised
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default QuizzSection;
