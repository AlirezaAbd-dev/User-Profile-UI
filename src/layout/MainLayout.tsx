"use client";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center items-start w-screen h-screen overflow-auto bg-background">
      {children}
    </main>
  );
}
