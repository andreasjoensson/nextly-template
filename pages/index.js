import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Faq from "../components/faq";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import Testimonials from "../components/testimonials";
import Video from "../components/video";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      <SectionTitle pretitle="Demo" title="Video Demo">
        Oprettelse af en chatbot til Product Hunt ved at kravle på websitet og
        træne AI'en på dets indhold. Jeg kan derefter integrere chatbotten på
        hjemmesiden!
      </SectionTitle>
      <Video />

      <SectionTitle
        pretitle="Nextly Benefits"
        title="En Chatbot, Der Er Unikt Din"
      >
        Vores AI chatbots trænes på dine data, hvilket sikrer, at de forstår
        nuancerne i din virksomhed og kan levere unikt personlige
        kundeinteraktioner.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
