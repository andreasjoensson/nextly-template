import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Faq from "../components/faq";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import Benefits from "../components/benefits";
import Testimonials from "../components/testimonials";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";

const Home = () => {
  return (
    <>
      <Head>
        <title>ChatbotAI - Tilpasset chatbot til din virksomhed!</title>
        <meta
          name="description"
          content="Tilpasset chatbot til din virksomhed"
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

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle pretitle="FAQ" title="Ofte Stillede Spørgsmål">
        Besvar dine kunders mulige spørgsmål her, det vil øge konverteringsraten
        samt support- eller chatanmodninger.
      </SectionTitle>

      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
