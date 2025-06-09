import ItemCard from "@/components/ItemCard";
import { categories } from "@/data/categories";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Panel } from "primereact/panel";
import { useEffect, useState } from "react";

const categoryPage = () => {
  const router = useRouter();

  const { slug } = router.query;

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const getItemList = async () => {
      const res = await fetch(`https://valorant-api.com/v1/${slug}`).then(
        (res) => res.json()
      );
      setItemList(res.data);
    };
    getItemList()
  }, []);

  const selectedCategory = categories.find(
    (category) => category.slug === router.query.slug
  );

  return (
    <section className="min-h-[90dvh] bg-red-50 p-6 pt-22 bg-[url('/img/bg/plain_bg.png')] bg-cover bg-center flex flex-col justify-center items-center">
      <div className="bg-white w-full p-4 flex flex-col gap-6 rounded-3xl items-center justify-center  ">
        <h1 className="text-2xl rubik">{selectedCategory?.name}</h1>
        <div className="w-full grid grid-cols-2 gap-4 justify-between">
          {itemList.map(item => <ItemCard item={item} type={slug}></ItemCard>)}
        </div>
      </div>
    </section>
  );
};

export default categoryPage;
