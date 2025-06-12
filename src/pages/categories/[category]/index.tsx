// pages/[category].tsx
import ItemCard from "@/components/ItemCard";
import { useCategories } from "@/hooks/useCategories";
import { useRouter } from "next/router";
import { useMemo } from "react";

const categoryPage = ({ data, category }) => {
  const items = data;
  const categories = useCategories();

  const selectedCategory = useMemo(() => {
    if (!categories || categories.length === 0) return null;
    return categories.find((cat) => cat.slug === category);
  }, [categories, category]);

  return (
    <section className="min-h-[90dvh] bg-red-50 p-6 lg:p-12 pt-22 lg:pt-30 bg-[url('/img/bg/plain_bg.png')] bg-cover bg-center bg-fixed flex flex-col justify-center items-center">
      <div className="bg-white w-full lg:max-w-[1000px] p-4 lg:p-8 flex flex-col gap-6 rounded-3xl items-center justify-center">
        <h1 className="text-2xl rubik">
          {selectedCategory?.name || "Categoria"}
        </h1>
        <p className="text-center">{selectedCategory?.description}</p>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center align-items-center">
          {items.map((item) => (
            <ItemCard key={item.uuid} item={item} categoryType={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default categoryPage;

// Ignora certificados inválidos apenas em ambiente de desenvolvimento
if (process.env.NODE_ENV === "development") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;

  try {
    const res = await fetch(`https://valorant-api.com/v1/${category}`);
    const { data } = await res.json();

    return {
      props: {
        data,
        category,
      },
    };
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    return {
      props: {
        data: [],
        category,
      },
    };
  }
}
