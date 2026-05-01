type Props = {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
};

export default function FeatureCard({ title, description, color, icon }: Props) {
  return (
    <div className="bg-white shadow-xl p-6 text-center rounded-xl">
      <div
        style={{ background: color }}
        className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg -translate-y-12"
      >
        {icon}
      </div>

      <h1 className="font-medium text-xl mb-3 px-4 text-gray-800">
        {title}
      </h1>

      <p className="px-4 text-gray-500">{description}</p>
    </div>
  );
}