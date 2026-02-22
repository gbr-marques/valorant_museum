import { Divider } from "primereact/divider";
import { Tag } from "primereact/tag";

const MapLayout = ({ itemInfo }) => {
  console.log(itemInfo);

  return (
    <>
      <h1 className="rubik text-2xl md:text-3xl w-full text-center md:text-start">
        {itemInfo.displayName}

        {/* {itemInfo.displayName} {itemInfo.backgroundGradientColors[1]} */}
      </h1>
      <section className="flex flex-col md:flex-row-reverse gap-3 md:gap-6">
        <aside className="md:min-w-[200px] lg:min-w-[250px]">
          <div className="flex flex-col gap-3 overflow-clip ">
            <div className="bg-linear-180 aspect-[3/4] rounded-lg relative box-content overflow-clip w-full max-h-[450px] flex flex-col justify-center">
              <img
                src={itemInfo.listViewIconTall}
                alt=""
                className="z-10 w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="bg-[var(--off-white)] w-full p-3 text-[14px] rounded-lg">
              <span className="rubik font-bold">Tactical description:</span>{" "}
              {itemInfo.tacticalDescription}
              {/* <ul className="text-start flex flex-col gap-1">
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
              </ul> */}
            </div>
          </div>
        </aside>
        <div>
          <div className="flex flex-col gap-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              culpa magnam sit beatae asperiores deserunt. Maxime iste pariatur
              a ut, perferendis nulla ratione earum tenetur, saepe ducimus qui
              culpa mollitia.
            </p>
            <Divider className="m-0!"></Divider>
            <h3 className="rubik text-2xl w-full">Map layout</h3>
            <div
              className="w-full rounded-2xl bg-cover max-h-[500px] flex justify-center items-center p-2"
              style={{
                background: `url(${itemInfo.premierBackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img src={itemInfo.displayIcon} className="max-h-[400px]"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapLayout;
