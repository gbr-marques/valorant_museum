import BigNumbers from "@/components/homeSections/BigNumbersSection";
import CategoriesSection from "@/components/homeSections/CategoriesSection";
import EndingSection from "@/components/homeSections/EndingSection";
import HeroSection from "@/components/homeSections/HeroSection";
import QuizzSection from "@/components/homeSections/QuizzSection";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <BigNumbers></BigNumbers>
      <QuizzSection></QuizzSection>
      <CategoriesSection></CategoriesSection>
      <EndingSection></EndingSection>
    </>
  );
}
