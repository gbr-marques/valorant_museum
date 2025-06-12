import { Divider } from "primereact/divider";
import { Tag } from "primereact/tag";

const AgentLayout = () => {
  return (
    <>
      <h1 className="rubik text-2xl md:text-3xl w-full text-center md:text-start ">Gekko</h1>
      <section className="flex flex-col md:flex-row-reverse gap-3 md:gap-6">
        <aside className="md:min-w-[200px]">
          {" "}
          <div className="flex flex-col gap-3">
            {" "}
            <div className="bg-linear-180 aspect-[3/4] from-[#C7F458] to-[#D56324] rounded-lg relative box-content">
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
            <div className="bg-[var(--off-white)] w-full p-3 text-[14px] rounded-lg">
              <ul className="text-start flex flex-col gap-1">
                <li>
                  <span className="rubik font-bold">Developer's name:</span>{" "}
                  Aggrobot
                </li>
                <li>
                  <span className="rubik font-bold">Release date:</span>{" "}
                  01/01/2018
                </li>
                <li className="flex flex-wrap gap-2 items-center">
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
        </aside>
        <div>
          <div className="flex flex-col gap-3">
            <p className="text-[14px] leading-tight">
              Gekko the Angeleno leads a tight-knit crew of calamitous
              creatures. His buddies bound forward, scattering enemies out of
              the way, with Gekko chasing them down to regroup and go again.
            </p>
            <Divider className="m-0!"></Divider>
            <h3 className="rubik text-2xl w-full">Abilities</h3>
            <ul className="grid grid-cols-1 lg:grid-cols-2 w-full gap-3">
              <li className="bg-[var(--off-white)] p-3 rounded-lg flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <img
                    className="h-[28px] bg-linear-45 from-[var(--dark-red)] to-[var(--bright-red)] rounded-sm p-1"
                    src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ultimate/displayicon.png"
                    alt=""
                  />
                  <h3 className="rubik text-lg">Wingman</h3>
                </div>
                <p className="text-[14px] leading-tight">
                  EQUIP Wingman. FIRE to send Wingman forward seeking enemies.
                  Wingman unleashes a concussive blast toward the first enemy he
                  sees. ALT FIRE when targeting a Spike site or planted Spike to
                  have Wingman defuse or plant the Spike. To plant, Gekko must
                  have the Spike in his inventory. When Wingman expires he
                  reverts into a dormant globule. INTERACT to reclaim the
                  globule and gain another Wingman charge after a short
                  cooldown.
                </p>
              </li>
              <li className="bg-[var(--off-white)] p-3 rounded-lg flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <img
                    className="h-[28px] bg-linear-45 from-[var(--dark-red)] to-[var(--bright-red)] rounded-sm p-1"
                    src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ultimate/displayicon.png"
                    alt=""
                  />
                  <h3 className="rubik text-lg">Wingman</h3>
                </div>
                <p className="text-[14px] leading-tight">
                  EQUIP Wingman. FIRE to send Wingman forward seeking enemies.
                  Wingman unleashes a concussive blast toward the first enemy he
                  sees. ALT FIRE when targeting a Spike site or planted Spike to
                  have Wingman defuse or plant the Spike. To plant, Gekko must
                  have the Spike in his inventory. When Wingman expires he
                  reverts into a dormant globule. INTERACT to reclaim the
                  globule and gain another Wingman charge after a short
                  cooldown.
                </p>
              </li>
              <li className="bg-[var(--off-white)] p-3 rounded-lg flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <img
                    className="h-[28px] bg-linear-45 from-[var(--dark-red)] to-[var(--bright-red)] rounded-sm p-1"
                    src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ultimate/displayicon.png"
                    alt=""
                  />
                  <h3 className="rubik text-lg">Wingman</h3>
                </div>
                <p className="text-[14px] leading-tight">
                  EQUIP Wingman. FIRE to send Wingman forward seeking enemies.
                  Wingman unleashes a concussive blast toward the first enemy he
                  sees. ALT FIRE when targeting a Spike site or planted Spike to
                  have Wingman defuse or plant the Spike. To plant, Gekko must
                  have the Spike in his inventory. When Wingman expires he
                  reverts into a dormant globule. INTERACT to reclaim the
                  globule and gain another Wingman charge after a short
                  cooldown.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgentLayout;
