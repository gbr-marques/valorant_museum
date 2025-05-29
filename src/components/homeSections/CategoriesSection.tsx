import Image from "next/image";
import { Card } from "primereact/card";

const CategoriesSection = () => {
  return (
    <section className="bg-[var(--off-white)] p-8 min-h-fit flex flex-col justify-end gap-6 text-center">
      <h1 className="text-2xl">Explore different categories</h1>
      <div className="flex gap-5 flex-wrap justify-between">
        <Card className="w-[46%] bg-[var(--light-steel)]!" >
          <Image></Image>
          <h3 className="text-white!">Agents</h3>
        </Card>
        <Card className="w-[46%]  bg-[var(--light-steel)]!">
          <Image></Image>
          <h3 className="text-white!">Tiers</h3>
        </Card>
        <Card className="w-[46%]  bg-[var(--light-steel)]!">
          <Image></Image>
          <h3 className="text-white!">Maps</h3>
        </Card>
        <Card className="w-[46%]  bg-[var(--light-steel)]!">
          <Image></Image>
          <h3 className="text-white!">Bundles</h3>
        </Card>
        <Card className="w-[46%]  bg-[var(--light-steel)]!">
          <Image></Image>
          <h3 className="text-white!">Player cards</h3>
        </Card>
        <Card className="w-[46%]  bg-[var(--light-steel)]!">
          <Image></Image>
          <h3 className="text-white!">Sprays</h3>
        </Card>
        <Card className="w-[46%]  bg-[var(--light-steel)]!">
          <Image></Image>
          <h3 className="text-white!">Weapons</h3>
        </Card>
        <Card className="w-[46%]  bg-[var(--light-steel)]!">
          <Image></Image>
          <h3 className="text-white!">Gamemodes</h3>
        </Card>
      </div>
    </section>
  );
};

export default CategoriesSection;
