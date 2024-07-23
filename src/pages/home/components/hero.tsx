import { NavLink } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface HomeHeroProps {
  handleContactModal: Dispatch<SetStateAction<boolean>>;
}

export const HomeHero = ({ handleContactModal }: HomeHeroProps) => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 px-3 py-24">
      <h1 className="flex flex-col text-center text-4xl font-extrabold md:text-6xl">
        <span className="text-content2">Share your</span>
        <span className="text-warning">code easily</span>
      </h1>

      <p className="flex flex-col text-balance text-center text-sm font-bold text-content2 max-sm:gap-2 md:text-lg">
        <span>
          Share code snippets with ease and security in a modern and intuitive
          interface.
        </span>
        <span>
          Discover how CodeBin can enhance your productivity and simplify your code
          management!
        </span>
      </p>

      <div className="flex gap-5 text-center">
        <NavLink
          to="/dashboard"
          className="btn btn-solid-warning border border-border"
        >
          Get started
        </NavLink>

        <button
          className="btn-solid btn border border-border"
          onClick={() => handleContactModal(true)}
        >
          Contact us
        </button>
      </div>
    </section>
  );
};
