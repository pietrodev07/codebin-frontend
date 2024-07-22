import clsx from "clsx";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export const Card = ({ title, description, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "card border border-border transition-all max-sm:max-w-full",
        className,
      )}
    >
      <div className="card-body">
        <h2 className="card-header">{title}</h2>
        <p className="text-content2">{description}</p>
      </div>
    </div>
  );
};
