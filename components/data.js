import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/chat.json";
import benefitTwoImg from "../public/img/chatbot.json";

const benefitOne = {
  title: "Dybdegående tilpasning",
  desc: "Med vores løsning har du mulighed for at træne din chatbot på dine specifikke forretningsdata. Dette sikrer, at din AI chatbot kan tilbyde nøjagtige og relevante svar til dine kunder.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Øg din kundeengagement",
      desc: "Ved at bruge vores AI chatbot kan du tilbyde kunderne hurtige og præcise svar, hvilket øger deres engagement og forbedrer deres oplevelse med din virksomhed.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Forbedr din kundeanskaffelse",
      desc: "Vores AI chatbot gør det muligt at håndtere et ubegrænset antal kundeinteraktioner samtidigt, hvilket effektivt øger din evne til at anskaffe nye kunder.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Styrk kundeloyaliteten",
      desc: "En hurtig og effektiv kundeservice, som vores AI chatbot tilbyder, kan hjælpe med at øge kundetilfredsheden og styrke kundeloyaliteten.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Yderligere fordele ved vores løsning",
  desc: "Vores AI chatbot er designet til at være enkel at integrere på din hjemmeside. Den er fuldt mobilvenlig og understøtter flere sprog, hvilket betyder at du kan betjene et bredere kundegrundlag.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobilvenlig løsning",
      desc: "Vores AI chatbot er designet til at være fuldt kompatibel med mobile enheder, så dine kunder kan få adgang til det uanset hvilken enhed de bruger.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Drevet af den seneste teknologi",
      desc: "Vores chatbot er drevet af avancerede teknologier og værktøjer, hvilket sikrer at den altid er på forkant med den nyeste udvikling inden for AI chatbots.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Understøtter både mørk og lys tilstand",
      desc: "Vores AI chatbot kommer med en nem-at-bruge lys og mørk tilstand, så den kan passe perfekt ind i designet på din hjemmeside.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
