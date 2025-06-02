import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";

const AgentsSection = () => {
  return (
    <section className="bg-[var(--off-white)] p-8 min-h-fit lg:max-h-[292px] flex justify-center items-center gap-2 text-center">
      <div className="bg-[var(--bright-red)] h-[150px] min-w-[3px]"></div>
      <div className="w-fit max-w-[90%] h-fit p-5 md:p-8 flex flex-col md:flex-row items-center gap-8 lg:gap-2 border-[1rem] border-[var(--bright-red)]">
        <div className="w-70 md:w-[30] max-w-fit ">
          <span className="text-6xl rubik font-bold">25</span>
          <p>milhões de jogadores ativos mensalmente em 2025</p>
        </div>
        <div className="w-70 md:w-[30] max-w-fit">
          <span className="text-6xl rubik font-bold">700</span>
          <p>
            mil jogadores ativos diariamente, com picos de até 500 mil
            simultâneos
          </p>
        </div>
        <div className="w-70 md:w-[30] max-w-fit">
          <span className="text-6xl rubik font-bold text-white">160+</span>
          <p>países com jogadores ativos</p>
        </div>
      </div>
      <div className="bg-[var(--bright-red)] h-[150px] min-w-[3px]"></div>
    </section>
  );
};

export default AgentsSection;
