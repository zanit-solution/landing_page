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
    <main className="container mx-auto">
      <HeroSection />
      <Support/>
      <Form/>
      <OurService/>
      <Transformation/>
      <Question/>
      <Blog/>
    </main>
  );
}
