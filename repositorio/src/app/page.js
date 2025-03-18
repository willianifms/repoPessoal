

import Header from "@/components/Header/page";
import Animation from "@/components/Animation/page";
import About from "@/components/About/page";
import Skills from "@/components/Skills/page";
import ContactUs from "@/components/ContactUs/page";
import Footer from "@/components/Footer/page";
// import CardProject from "@/components/CardProject/page";


export default function Home() {
  return (
<>
<Header/>
<Animation/>
<About/>
<Skills/>
{/* <CardProject/> */}
<ContactUs/>
<Footer/>
</>
  );
}
