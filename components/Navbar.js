"use client";
import React from "react";
import { useEffect,useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

 useEffect(() => {
   setProgress(30)
   setTimeout(() => {
    setProgress(70)
   }, 100);
 setTimeout(() => {
  setProgress(100)
 }, 800);
 setTimeout(()=>{
  setProgress(0)
 },900)
 
 }, [pathname])

 
  return (
    <nav className="bg-background-50 sticky z-10 top-0 border-b  backdrop-blur p-4">
         <LoadingBar
        color='purple'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className=" container mx-auto flex justify-between  items-center">
        <Link href={"/"}>
          <div className=" text-lg font-bold">Ozar Blog</div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
        <Link href="/" className="relative inline-block font-normal hover:font-bold hover:text-blue-500 hover:scale-105 transition duration-500">
  Home
</Link>
<Link href="/about" className="relative inline-block font-normal hover:font-bold hover:text-blue-500 hover:scale-105 transition duration-500">
  About
</Link>
<Link href="/blog" className="relative inline-block font-normal hover:font-bold hover:text-blue-500 hover:scale-105 transition duration-500">
  Blog
</Link>
<Link href="/contact" className="relative inline-block font-normal hover:font-bold hover:text-blue-500 hover:scale-105 transition duration-500">
  Contact
</Link>





          <div>
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              Signup
            </Button>
          </div>
          <ModeToggle/>
        </div>
        <div className="flex items-center md:hidden ">
        <Sheet><span className="mx-4"><ModeToggle/></span>
  <SheetTrigger>  
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            
          </SheetTrigger>
          
  <SheetContent>
    <SheetHeader>
      <SheetTitle><div className=" text-lg my-4 font-bold">Ozar Blog</div></SheetTitle>
      <SheetDescription>
      <div className="flex flex-col gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>

          <div>
            <Button className="mx-1 text-xs" variant="outline">
              Login
            </Button>
            <Button className="mx-1 text-xs" variant="outline">
              Signup
            </Button>
          </div>
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        
        </div>

      </div>
      
    </nav>
  );
};

export default Navbar;
