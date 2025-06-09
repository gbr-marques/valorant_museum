import { categories } from "@/data/categories";
import { useRouter } from "next/router";
import { Card } from "primereact/card";
import { useEffect, useState } from "react";

const categoryPage = () => {
  const router = useRouter();

  const { slug } = router.query;

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const getItemList = async () => {
      const res =await fetch(`https://valorant-api.com/v1/${slug}`)
        .then((res) => res.json())
      setItemList(res.data)
      console.log(itemList);
    };
    getItemList()
  }, []);

  const selectedCategory = categories.find(
    (category) => category.slug === router.query.slug
  );

  return (
    <section className="min-h-[90dvh] bg-red-50 p-6 pt-22 bg-[url('/img/bg/plain_bg.png')] bg-cover bg-center flex flex-col justify-center items-center">
      <Card className="flex flex-col items-center text-center w-[90dvw] h-[2000px]">
        <h1 className="text-2xl">{selectedCategory?.name}</h1>
      </Card>
    </section>
  );
};

export default categoryPage;
