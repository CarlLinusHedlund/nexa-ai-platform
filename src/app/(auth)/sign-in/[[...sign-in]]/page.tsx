import { SignIn } from "@clerk/nextjs";
import {dark} from "@clerk/themes"
 
export default function Page() {
  return (
  <div className="flex items-center justify-center w-full h-screen py-20 ">
    <SignIn />
  </div>);
}