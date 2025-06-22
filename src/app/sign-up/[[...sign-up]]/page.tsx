import { SignUp } from "@clerk/nextjs";

export default function page(){
    return <SignUp  routing='path' path='/sign-up' redirectUrl="/dashboard"/>
}