import { Divider } from "primereact/divider";
import { Tag } from "primereact/tag";

const AgentLayout = () => {
  return (
    <>
      <h1 className="rubik text-3xl w-full text-center">Gekko</h1>
      <div className="flex flex-col gap-3">
        {" "}
        <div className="bg-linear-180 from-[#C7F458] to-[#D56324] rounded-lg relative box-content">
          <img
            src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png"
            alt=""
            className="absolute bottom-0 left-[50%] translate-x-[-50%] h-full z-10 min-w-fit"
          />
          <img
            src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/background.png"
            className="opacity-20"
            alt=""
          />
        </div>
        <div className="bg-[var(--off-white)] w-full p-3 text-[12px] rounded-lg">
          <ul className="text-start flex flex-col gap-1">
            <li>
              <span className="rubik font-bold">Developer's name:</span>{" "}
              Aggrobot
            </li>
            <li>
              <span className="rubik font-bold">Release date:</span> 01/01/2018
            </li>
            <li className="flex flex-wrap gap-1 items-center">
              <span className="rubik font-bold">Tags:</span>{" "}
              <Tag
                value={"Duelist"}
                className="bg-[var(--light-steel)]! [&>span]:text-white! [&>span]:text-[10px]"
              ></Tag>
              <Tag
                value={"Initiator"}
                className="bg-[var(--light-steel)]! [&>span]:text-white! [&>span]:text-[10px]"
              ></Tag>
              <Tag
                value={"Sentinel"}
                className="bg-[var(--light-steel)]! [&>span]:text-white! [&>span]:text-[10px]"
              ></Tag>
              <Tag
                value={"Controller"}
                className="bg-[var(--light-steel)]! [&>span]:text-white! [&>span]:text-[10px]"
              ></Tag>
              <Tag
                value={"Aggressive"}
                className="bg-[var(--light-steel)]! [&>span]:text-white! [&>span]:text-[10px]"
              ></Tag>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="leading-tight">
          Gekko the Angeleno leads a tight-knit crew of calamitous creatures.
          His buddies bound forward, scattering enemies out of the way, with
          Gekko chasing them down to regroup and go again.
        </p>
        <Divider className="m-0!"></Divider>
        <h3 className="rubik text-2xl w-full">Abilities</h3>
        <ul className="grid grid-cols-1 w-full">
          <li className="bg-[var(--off-white)] p-3 rounded-lg flex flex-col gap-3">
            <div className="flex gap-3">
              <img src="" alt="" />
              <h3 className="rubik">Wingman</h3>
            </div>
            <p className="text-[12px] leading-tight">
              EQUIP Wingman. FIRE to send Wingman forward seeking enemies.
              Wingman unleashes a concussive blast toward the first enemy he
              sees. ALT FIRE when targeting a Spike site or planted Spike to
              have Wingman defuse or plant the Spike. To plant, Gekko must have
              the Spike in his inventory. When Wingman expires he reverts into a
              dormant globule. INTERACT to reclaim the globule and gain another
              Wingman charge after a short cooldown.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AgentLayout;
