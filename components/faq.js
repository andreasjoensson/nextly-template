import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl grid grid-cols-2 gap-4">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Hvor let er det at integrere chatbotten på min hjemmeside?",
    answer:
      "Det er meget let. Du kan integrere chatbotten på din hjemmeside med enten en enkelt linje kode eller gennem et API.",
  },
  {
    question: "Hvordan træner chatbotten på mine specifikke forretningsdata?",
    answer:
      "Du kan uploade dine forretningsdokumenter eller andre relevante data til vores platform, og vores AI vil bruge disse data til at træne din chatbot.",
  },
  {
    question: "Er min data sikker?",
    answer:
      "Ja, datasikkerhed er vores højeste prioritet. Vi følger alle de nødvendige protokoller for at sikre, at din data forbliver sikker og privat.",
  },
  {
    question: "Hvad hvis jeg har brug for hjælp til at bruge denne tjeneste?",
    answer:
      "Vi tilbyder teknisk support for at hjælpe dig med at få mest muligt ud af vores SaaS AI chatbot løsning. Du kan kontakte os via e-mail eller vores supportportal.",
  },
  {
    question: "Kan chatbotten håndtere flere samtaler på én gang?",
    answer:
      "Ja, vores AI chatbot er i stand til at håndtere et ubegrænset antal samtaler samtidig, hvilket sikrer, at alle dine kunder får øjeblikkelig respons.",
  },
  {
    question: "Kan chatbotten håndtere spørgsmål på forskellige sprog?",
    answer:
      "Ja, vores AI chatbot har flersproget support og kan håndtere spørgsmål på flere populære sprog.",
  },
  {
    question: "Skal jeg konstant opdatere chatbotten?",
    answer:
      "Nej, vores AI chatbot lærer og tilpasser sig løbende fra de samtaler, den har med dine kunder, så du behøver ikke konstant at opdatere den.",
  },
  {
    question: "Hvad er omkostningerne ved at bruge jeres AI chatbot løsning?",
    answer:
      "Vores prisstruktur er fleksibel og designet til at imødekomme virksomheder af forskellig størrelse. For mere detaljeret information, venligst kontakt os eller besøg vores pris side.",
  },
];

export default Faq;
