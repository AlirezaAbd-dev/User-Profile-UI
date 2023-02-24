"use client";

export default function CardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center mt-10 md:mt-20 max-w-xs sm:max-w-sm md:max-w-md bg-white p-10 shadow-lg shadow-blueAccent/20 rounded-2xl">
      {children}
    </div>
  );
}
