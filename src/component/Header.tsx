interface PageHeaderProps {
  badge?: string;
  title: string;
}

export default function Header({
  badge,
  title,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gray-800 py-32 lg:py-44">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full border border-cyan-400 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full border border-cyan-400 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-center lg:px-10">

        <div className="mb-6 flex items-center gap-3">
          <span className="text-xl text-white">
            Our Main
          </span>

          <div className="rounded-md bg-pink-500 px-4 py-1 text-lg font-semibold text-white shadow-lg">
            {badge} 🤩
          </div>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-7xl">
          {title}
        </h1>
      </div>
    </section>
  );
}