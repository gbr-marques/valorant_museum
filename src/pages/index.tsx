import BigNumbers from "@/components/sections/BigNumbersSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import EndingSection from "@/components/sections/EndingSection";
import HeroSection from "@/components/sections/HeroSection";
import QuizSection from "@/components/sections/QuizSection";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <BigNumbers></BigNumbers>
      <QuizSection></QuizSection>
      <CategoriesSection></CategoriesSection>
      <EndingSection></EndingSection>
    </>
  );
}
