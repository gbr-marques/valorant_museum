import { Button } from "primereact/button";
import { Card } from "primereact/card";

const ItemCard = ({ item, type }) => {
  return (
    <Card className="bg-gray-200! [&>div>div]:p-0! rounded-2xl! w-[150px]">
      <div className="flex flex-col gap-3 items-center">
        <div
            className="bg-red-50"
        >
          <img src={item.displayIcon} className={`rounded-md bg-linear-45 from-[var(--dark-red)] to-[var(--bright-red)] h-[110px] object-contain p-2`} alt="a" />
        </div>
        <h3>{item.displayName}</h3>
        <Button
          className="w-full bg-[var(--light-steel)]! text-sm!"
          label="See more"
        ></Button>
      </div>
    </Card>
  );
};

export default ItemCard;
