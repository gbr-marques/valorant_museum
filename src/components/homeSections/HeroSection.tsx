import { Button } from "primereact/button";

const HeroSection = () => {
  return (
    <section className="bg-red-50 p-8 min-h-[90dvh] flex flex-col justify-end">
      <div className="flex flex-col gap-3 text-center">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. In mi amet donec curabitur
          lectus consectetur leo maecenas. Risus id mi cras fusce vulputate.
        </p>
        <Button></Button>
      </div>
    </section>
  );
};

export default HeroSection;
