import { Header } from "@/components/app/header";

export default function WorkPage() {
  return (
    <div className="flex flex-col size-full">
      <Header />
      <main className="flex flex-col flex-1 p-4 animate-fade-in">
        <h1 className="text-4xl font-bold">My Work</h1>
        <p className="mt-4">
          I am a software engineer with a passion for building web applications.
          I have experience in various technologies and frameworks, and I love
          learning new things.
        </p>
      </main>
    </div>
  );
}
