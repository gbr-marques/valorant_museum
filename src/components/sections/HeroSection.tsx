import { Button } from "primereact/button";

const HeroSection = () => {
  return (
    <section className="bg-red-50 p-8 h-[90dvh] md:h-[85dvh] md:max-h-[512px] lg:max-h-[720px] flex flex-col lg:flex-row justify-end lg:justify-start xl:justify-center lg:items-center bg-cover bg-center bg-[url('/img/bg/hero_mobile_bg.png')] md:bg-[url('/img/bg/hero_tablet_bg.png')] lg:bg-[url('/img/bg/hero_lg_bg.png')]">
      <div className="max-w-[1000px]">
        <div className="flex flex-col lg:w-[40%] lg:h-fit gap-4 text-center lg:text-start rounded-xl md:p-6 lg:p-0 md:bg-[var(--dark-steel)]/80 lg:bg-transparent xl:pt-10">
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
      </div>
    </section>
  );
};

export default HeroSection;
