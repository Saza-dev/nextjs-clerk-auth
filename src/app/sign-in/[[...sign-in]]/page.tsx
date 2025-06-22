import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex h-screen justify-center items-center'>
      <SignIn routing='path' path='/sign-in' redirectUrl="/dashboard"/>
    </div>
  )
}