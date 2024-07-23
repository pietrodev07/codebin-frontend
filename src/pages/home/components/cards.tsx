import { Card } from "@/components/core/card";

export const HomeCards = () => {
  return (
    <section className="flex flex-col gap-5">
      <h3 className="text-2xl font-bold">Why choose us?</h3>

      <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
        <Card
          title="Intuitive Interface"
          description="Sharing code is quick and easy thanks to our user-friendly interface designed for programmers of all levels."
          className="cursor-pointer hover:scale-105 hover:border-warning"
        />

        <Card
          title="Supports 126 Languages"
          description="Supports an impressive 126 programming languages, allowing you to share and view code seamlessly."
          className="cursor-pointer hover:scale-105 hover:border-warning"
        />

        <Card
          title="Completely Free"
          description="Completely free. There are no hidden costs or subscriptions: you can share your code without limits and without worries."
          className="cursor-pointer hover:scale-105 hover:border-warning"
        />
      </div>
    </section>
  );
};
