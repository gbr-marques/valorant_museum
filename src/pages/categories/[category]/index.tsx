import ItemCard from "@/components/ItemCard";
import { categories } from "@/data/categories";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Panel } from "primereact/panel";
import { useEffect, useState } from "react";

const categoryPage = () => {
  const router = useRouter();

  const { category } = router.query;

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const getItemList = async () => {
      const res = await fetch(`https://valorant-api.com/v1/${category}`).then(
        (res) => res.json()
      );
      setItemList(res.data);
    };
    getItemList()
  }, []);

  const selectedCategory = categories.find(
    (category) => category.slug === router.query.category
  );

  return (
    <section className="min-h-[90dvh] bg-red-50 p-6 lg:p-12 pt-22 lg:pt-30 bg-[url('/img/bg/plain_bg.png')] bg-cover bg-center bg-fixed flex flex-col justify-center items-center">
      <div className="bg-white w-full lg:max-w-[1000px] p-4 lg:p-8 flex flex-col gap-6  rounded-3xl items-center justify-center  ">
        <h1 className="text-2xl rubik">{selectedCategory?.name}</h1>
        <p className="text-center">{selectedCategory?.description}</p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center align-items-center">
          {itemList.map(item => <ItemCard item={item} categoryType={category}></ItemCard>)}
        </div>
      </div>
    </section>
  );
};

export default categoryPage;
