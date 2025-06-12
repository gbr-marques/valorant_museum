import AgentLayout from "@/components/layouts/AgentLayout";
import { useRouter } from "next/router";

const ItemPage = ({data, category}) => {
  const router = useRouter();

  // console.log(router.query);

  const getItemLayout = () => {
    // const categoryType = router.query.category;

    switch (category) {
      case "agents":
        return <AgentLayout itemInfo={data}/>;

      case "weapons":
        return <>Armas</>;

      case "maps":
        return <>Mapas</>;
    }
  };

  return (
    <section className="min-h-[92dvh] bg-red-50 p-6 lg:p-12 pt-22 lg:pt-30 bg-[url('/img/bg/plain_bg.png')] bg-cover bg-center bg-fixed flex flex-col justify-center items-center">
      <div className="bg-white w-full lg:max-w-[1000px] p-4 md:p-6 lg:p-8 flex flex-col gap-3  rounded-3xl items-center justify-center overflow-x-hidden">
        {getItemLayout()}
      </div>
    </section>
  );
};

export default ItemPage;


export async function getServerSideProps(context) {
  const { params } = context
  const { category } = params
  const { uuid } = params

  try {
    const res = await fetch(`https://valorant-api.com/v1/${category}/${uuid}`);
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