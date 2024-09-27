export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main className="flex size-full flex-col justify-center items-center p-4 ">
      <h1>HOME</h1>
    </main>
  );
}
