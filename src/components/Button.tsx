export default function Button({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group select-none hover:border-blueAccent text-blueAccent/70 w-full h-full p-2 border border-button/20 rounded-xl text-center font-bold">
      {icon}
      <p className="text-sm group-hover:scale-110">{name}</p>
    </div>
  );
}
