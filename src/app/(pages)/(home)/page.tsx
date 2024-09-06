export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main className="w-full flex min-h-screen h-[150vh] flex-col justify-center items-center p-4 ">
      <h1>HOME</h1>
    </main>
  );
}
