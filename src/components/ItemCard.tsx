import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const ItemCard = ({ item, categoryType }) => {
  const router = useRouter();

  return (
    <Card className="bg-[var(--off-white)]! [&>div>div]:p-0! rounded-2xl! w-[150px] lg:w-full">
      <div className="flex flex-col gap-3 items-center">
          <img
            src={item.splash || item.displayIcon}
            className={`w-full rounded-md bg-linear-45 from-[var(--dark-red)] to-[var(--bright-red)] object-contain rat aspect-[1/1] ${
              ["agents", "sprays", "bundles", "maps"].includes(categoryType) ? "p-0" : "p-2"
            } ${["bundles", "maps"].includes(categoryType) ? "object-cover" : ""}`}
            alt="a"
          />
        <h3 className="rubik text-center">{item.displayName}</h3>
        <Button
          className="w-full bg-[var(--light-steel)]! text-sm!"
          label="See more"
          onClick={() => router.push(`${categoryType}/${item.uuid}`)}
        ></Button>
      </div>
    </Card>
  );
};

export default ItemCard;
