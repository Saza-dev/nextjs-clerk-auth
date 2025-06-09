import { SignInButton } from "@clerk/nextjs";
import { auth,currentUser } from "@clerk/nextjs/server";


export default async function Home() {
    const {userId } = await auth();


   if (!userId) {
    return <div>Sign in to view this page
      <SignInButton/>
    </div>
  }

   const user = await currentUser()

  return (
    <div>
      <h1>Home Page</h1>
      <div>Welcome,  {user?.fullName}</div>
    </div>
  );
}
