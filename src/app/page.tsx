import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero></Hero>
      <FeaturedCourses></FeaturedCourses>
      <UpcomingWebinars></UpcomingWebinars>
      <Instructor></Instructor>
    </main>
  );
}
