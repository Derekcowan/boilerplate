import Image from "next/image";

export const Loading = () => {
  return (
    <main className="flex flex-col gap-10 w-full min-h-screen h-full items-center justify-center bg-primary">
      <Image
        src="/logo.svg"
        alt="Derek's Logo"
        width={200}
        height={200}
        className="animate-pulse duration-700 text-primary-foreground"
      />
    </main>
  );
};
