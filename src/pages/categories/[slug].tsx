import { categories } from "@/data/categories";
import { useRouter } from "next/router";
import { Card } from "primereact/card";

const categoryPage = () => {
  const router = useRouter();

  console.log(router.query.slug);

  const selectedCategory = categories.find(
    (category) => category.slug === router.query.slug
  );

  return (
    <section className="min-h-[90dvh] bg-red-50 p-6">
      <Card className="flex flex-col items-center text-center">
        <h1 className="text-2xl">{selectedCategory?.name}</h1>
      </Card>
    </section>
  );
};

export default categoryPage;
