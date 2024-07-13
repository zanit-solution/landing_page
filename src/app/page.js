"use client"
import Blog from "@/components/Home/Blog";
import Form from "@/components/Home/Form";
import HeroSection from "@/components/Home/HeroSection";
import OurService from "@/components/Home/OurService";
import Question from "@/components/Home/Question";
 
import Support from "@/components/Home/Support";
 
import Transformation from "@/components/Home/Transformation";

export default function Home() {
  return (
    <main className=" bg-[#FEF6F3]">
      <div className="container mx-auto">
      <HeroSection />
      <Support/>
      <Form/>
      <OurService/>
      <Transformation/>
      <Question/>
      <Blog/>
      </div>
     
    </main>
  );
}
