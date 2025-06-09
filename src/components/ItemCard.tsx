import { Button } from "primereact/button";
import { Card } from "primereact/card";

const ItemCard = () => {
  return (
    <Card className="bg-gray-200! [&>div>div]:p-0! rounded-xl! w-[150px]">
      <div className="flex flex-col gap-3 items-center">
        <img
          src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png"
          className="bg-red-50 rounded-sm"
          alt=""
        />
        <h3>Name</h3>
        <Button
          className="w-full bg-[var(--bright-red)]! text-sm!"
          label="See more"
        ></Button>
      </div>
    </Card>
  );
};

export default ItemCard;
