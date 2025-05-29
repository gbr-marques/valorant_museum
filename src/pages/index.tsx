import BigNumbers from "@/components/sections/BigNumbersSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import EndingSection from "@/components/sections/EndingSection";
import HeroSection from "@/components/sections/HeroSection";
import QuizzSection from "@/components/sections/QuizzSection";

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
