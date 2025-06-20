export function StepCard({ step, title, children }) {
  return (
    <div className="relative flex flex-col gap-2 rounded-3xl bg-zinc-800 px-8 py-12 before:absolute before:inset-0 before:-z-10 before:-m-0.5 before:rounded-3xl before:bg-conic-110 before:from-black before:from-30% before:via-purple-500 before:to-black before:to-100%">
      <h3 className="font-heading flex justify-between text-2xl font-semibold lg:text-4xl xl:text-5xl">
        {title} <span className="text-purple-300">{step}</span>
      </h3>
      <p className="text-lg text-zinc-300 md:w-2/3 xl:text-2xl">{children}</p>
    </div>
  );
}
