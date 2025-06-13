import { Divider } from "primereact/divider";
import { Tag } from "primereact/tag";

const AgentLayout = ({ itemInfo }) => {
  console.log(itemInfo);

  return (
    <>
      <h1 className="rubik text-2xl md:text-3xl w-full text-center md:text-start">
        {itemInfo.displayName}
      </h1>
      <section className="flex flex-col md:flex-row-reverse gap-3 md:gap-6">
        <aside className="md:min-w-[200px] lg:min-w-[250px]">
          <div className="flex flex-col gap-3 overflow-clip ">
            <div
              className={`bg-linear-180 aspect-[3/4] from-[#${itemInfo.backgroundGradientColors[0]}] to-[#${itemInfo.backgroundGradientColors[2]}] rounded-lg relative box-content overflow-clip`}
            >
              <img
                src={itemInfo.fullPortrait}
                alt=""
                className="absolute bottom-0 left-[50%] translate-x-[-50%] h-full z-10 min-w-fit"
              />
              <img
                src={itemInfo.background}
                className="opacity-20 scale-170"
                alt=""
              />
            </div>
            <div className="bg-[var(--off-white)] w-full p-3 text-[14px] rounded-lg">
              <ul className="text-start flex flex-col gap-1">
                <li>
                  <span className="rubik font-bold">Developer's name:</span>{" "}
                  {itemInfo.developerName}
                </li>
                <li>
                  <span className="rubik font-bold">Release date:</span>{" "}
                  {itemInfo.releaseDate}
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
            <p className="text-[14px] leading-tight">{itemInfo.description}</p>
            <Divider className="m-0!"></Divider>
            <h3 className="rubik text-2xl w-full">Abilities</h3>
            <ul className="grid grid-cols-1 lg:grid-cols-2 w-full gap-3">
              {itemInfo.abilities.map((ability) => {
                <>a</>;
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgentLayout;
