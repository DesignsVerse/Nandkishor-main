import Blog from "@/components/Blog";
// import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import AboutPandit from "@/components/AboutPandit";
import Services from "@/components/Services";
import BaglamukhiSection from "@/components/ExtraPage";
import CallNow from "@/components/Marquee";
export const metadata: Metadata = {
  title: "माँ बगलामुखी मंदिर | Pandit Nandkishor - Maa Baglamukhi Mandir",
  description: "माँ बगलामुखी मंदिर - संपूर्ण पूजा विधि, मंत्र जाप, तांत्रिक अनुष्ठान, एवं पंडित नंदकिशोर जी से संपर्क करें। Maa Baglamukhi Mandir for Puja Vidhi, Mantra Jaap & Anushthan by Pandit Nandkishor.",
};

export default function Home() {
  return (
    <>
      
      <Hero />
      <AboutPandit/>
      <Services/>
      <CallNow/>
      <BaglamukhiSection/>
      <Testimonials />
      <Blog />
      {/* <ScrollUp /> */}
    </>
  );
}
