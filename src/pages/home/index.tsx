import { useState } from "react";

import { HomeHero } from "./components/hero";
import { HomeCards } from "./components/cards";
import { HomeNavbar } from "./components/navbar";
import { ContactModal } from "./components/contact-modal";

export const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="mx-auto max-w-screen-xl">
      <HomeNavbar />
      <HomeHero handleContactModal={setIsOpen} />
      <HomeCards />

      <ContactModal isOpen={isOpen} closeOverlayAction={setIsOpen} />
    </main>
  );
};
