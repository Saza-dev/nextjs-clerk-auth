import { auth } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const { userId } = await auth();

  return (
    <div className="text-[50px] text-center">
      <h1>Dashboard</h1>
      <p className="mt-10">user ID : {userId}</p>
    </div>
  );
}
