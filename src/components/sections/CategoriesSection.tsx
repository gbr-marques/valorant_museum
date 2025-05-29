import Image from "next/image";
import { Card } from "primereact/card";
import { categories } from "@/data/categories";
import { useRouter } from "next/router";
import Link from "next/link";

const CategoriesSection = () => {
  const router = useRouter();

  const onCategoryClick = (categorySlug: string) => {
    router.push(`/categorias/` + categorySlug);
  };

  return (
    <section className="bg-[var(--off-white)] p-8 md:py-[3rem] min-h-fit flex flex-col justify-end gap-6 text-center">
      <h1 className="text-2xl">Explore different categories</h1>
      <div className="flex flex-wrap justify-center gap-5 md:gap-10">
        {categories.map((category) => (
          <Link className="w-fit" href={`/categories/${category.slug}`}>
            <Card className="bg-[var(--light-steel)]! rounded-2xl! [&>div>div]:p-0!">
              <div className="flex flex-col gap-4">
                <Image
                  width={200}
                  height={100}
                  src={category.icon}
                  alt={category.name + " category icon"}
                ></Image>
                <h3 className="text-white!">{category.name}</h3>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
