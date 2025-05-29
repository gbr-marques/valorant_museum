import { Button } from "primereact/button";

const HeroSection = () => {
  return (
    <section className="bg-red-50 p-8 h-[90dvh] md:h-[80dvh] flex flex-col justify-end bg-cover bg-center bg-[url('/img/bg/hero_mobile_bg.png')] md:bg-[url('/img/bg/hero_tablet_bg.png')]">
      <div className="flex flex-col gap-4 text-center rounded-xl md:p-6 md:bg-[var(--dark-steel)]/80">
        <h1 className="text-2xl text-white!">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="text-white!">
          Lorem ipsum dolor sit amet consectetur. In mi amet donec curabitur
          lectus consectetur leo maecenas. Risus id mi cras fusce vulputate.
        </p>
        <Button
          className="bg-[var(--bright-red)]!"
          label="Browse categories"
          raised
        ></Button>
      </div>
    </section>
  );
};

export default HeroSection;
