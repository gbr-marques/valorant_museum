import { Button } from "primereact/button";

const HeroSection = () => {
  return (
    <section className="bg-red-50 p-8 h-[90dvh] md:h-[80dvh] lg:h-[50dvh] flex flex-col lg:flex-row justify-end lg:justify-start lg:items-center bg-cover bg-center bg-[url('/img/bg/hero_mobile_bg.png')] md:bg-[url('/img/bg/hero_tablet_bg.png')] lg:bg-[url('/img/bg/hero_lg_bg.png')]">
      <div className="flex flex-col lg:w-[40%] lg:h-fit gap-4 text-center lg:text-start rounded-xl md:p-6 lg:p-0 md:bg-[var(--dark-steel)]/80 lg:bg-transparent">
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
