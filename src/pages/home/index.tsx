import { useState } from "react";

import { HomeHero } from "./components/hero";
import { HomeNavbar } from "./components/navbar";

export const HomePage = () => {
  const [, setIsOpen] = useState(false);

  return (
    <main className="mx-auto max-w-screen-xl">
      <HomeNavbar />
      <HomeHero handleContactModal={setIsOpen} />
    </main>
  );
};
