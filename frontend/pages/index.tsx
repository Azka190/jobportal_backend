import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Body from "@/components/Body";
import TrandingJob from "@/components/TrandingJob";
import Work from "@/components/Work";
import Career from "@/components/Career";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
   <Navbar />
   <Landing />
   <Body />
   <TrandingJob />
   <Work />
   <Career />
   <Footer />
   </div>
  );
}
