import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ThemeToggle";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="border-b bg-background h-[8vh] flex items-center w-full">
      <div className="container flex items-center justify-start">
        <Link href="/">
          <Image src="/logo.svg" alt="Derek's Logo" width={50} height={50} />
        </Link>
      </div>
      <div className="container flex justify-end gap-4">
        <ThemeToggle />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Button variant="default">
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </nav>
  );
};

export default NavBar;
