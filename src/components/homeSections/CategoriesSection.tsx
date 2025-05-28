import Image from "next/image";
import { Card } from "primereact/card";

const CategoriesSection = () => {
  return (
    <section className="bg-red-100 p-8 min-h-fit flex flex-col justify-end gap-6 text-center">
      <h1>Explore different categories</h1>
      <div className="flex gap-3 flex-wrap justify-between">
        <Card className="w-[48%]">
          <Image></Image>
          <h3>Agents</h3>
        </Card>
        <Card className="w-[48%]">
          <Image></Image>
          <h3>Tiers</h3>
        </Card>
        <Card className="w-[48%]">
          <Image></Image>
          <h3>Maps</h3>
        </Card>
        <Card className="w-[48%]">
          <Image></Image>
          <h3>Bundles</h3>
        </Card>
        <Card className="w-[48%]">
          <Image></Image>
          <h3>Player Cards</h3>
        </Card>
        <Card className="w-[48%]">
          <Image></Image>
          <h3>Sprays</h3>
        </Card>
        <Card className="w-[48%]">
          <Image></Image>
          <h3>Weapons</h3>
        </Card>
        <Card className="w-[48%]">
          <Image></Image>
          <h3>Gamemodes</h3>
        </Card>
      </div>
    </section>
  );
};

export default CategoriesSection;
