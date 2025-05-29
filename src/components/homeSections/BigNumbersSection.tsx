import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";

const AgentsSection = () => {
  return (
    <section className="bg-[var(--off-white)] p-8 min-h-fit flex flex-col justify-end gap-6 text-center">
      <div className="flex flex-col items-center gap-6">
        <div className="w-70">
          <span className="text-6xl rubik font-bold">25</span>
          <p>milhões de jogadores ativos mensalmente em 2025</p>
        </div>
        <div className="w-70">
          <span className="text-6xl rubik font-bold">700</span>
          <p>
            mil jogadores ativos diariamente, com picos de até 500 mil
            simultâneos
          </p>
        </div>
        <div className="w-70">
          <span className="text-6xl rubik font-bold text-white">160+</span>
          <p>países com jogadores ativos</p>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
