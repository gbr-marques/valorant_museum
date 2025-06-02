import { categories } from "@/data/categories";
import Image from "next/image";
import { useRouter } from "next/router";
import { Menubar } from "primereact/menubar";

const AppHeader = () => {
  const router = useRouter();

  const menuItems = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Features",
      icon: "pi pi-star",
    },
    {
      label: "Projects",
      icon: "pi pi-search",
      items: [
        {
          label: "Components",
          icon: "pi pi-bolt",
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
    },
  ];

  //   const menuItems = [
  //     {
  //       label: "Categorias",
  //       items: categories.map((category) => ({
  //         label: category.name,
  //         command: () => router.push(`/categories/${category.slug}`),
  //       })),
  //     },
  //     {
  //       label: "Quiz",
  //       command: () => router.push("/quiz"),
  //     },
  //     {
  //       label: "About",
  //       command: () => router.push("/about"),
  //     },
  //   ];

  return (
    <nav className="w-full flex items-center justify-center lg:justify-start xl:justify-center absolute h-fit p-8">
      <div className="lg:w-full lg:max-w-[1000px]">
        <Image
          className="max-h-[60px] lg:w-[200px]"
          width={100}
          height={100}
          src={"/img/app_logo.svg"}
          alt="Valorant Museum logo"
        ></Image>
      </div>
    </nav>
  );
};

export default AppHeader;
