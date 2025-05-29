import { Button } from "primereact/button";

const HeroSection = () => {
  return (
    <section className="bg-red-50 p-8 min-h-[90dvh] flex flex-col justify-end bg-[url('/img/bg/hero_mobile_bg.png')] bg-cover">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-2xl text-white!">Lorem ipsum dolor sit amet consectetur</h1>
        <p className="text-white!">
          Lorem ipsum dolor sit amet consectetur. In mi amet donec curabitur
          lectus consectetur leo maecenas. Risus id mi cras fusce vulputate.
        </p>
        <Button className="bg-[var(--bright-red)]!" label="Browse categories" raised></Button>
      </div>
    </section>
  );
};

export default HeroSection;
