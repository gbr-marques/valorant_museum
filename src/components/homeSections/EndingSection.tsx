import Image from "next/image";
import { Button } from "primereact/button";

const EndingSection = () => {
  return (
    <section
  className="p-8 flex flex-col bg-gradient-to-r"
  style={{
    '--tw-gradient-from': 'var(--light-steel)',
    '--tw-gradient-to': 'var(--dark-steel)',
    '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
  } as React.CSSProperties}
>
  <div className="flex flex-col gap-3 text-center">
    <h1 className="text-white! text-2xl">Lorem ipsum dolor sit amet consectetur.</h1>
    <p className="text-white!">
      Lorem ipsum dolor sit amet consectetur. In mi amet donec curabitur
      lectus consectetur
    </p>
  </div>
  <Image />
</section>
  );
};

export default EndingSection;
