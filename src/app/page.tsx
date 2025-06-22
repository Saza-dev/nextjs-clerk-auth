import Link from "next/link";


export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/sign-in"> Sign in</Link>     
      <Link href="/sign-up"> Sign up</Link>  
    </div>
  );
}
