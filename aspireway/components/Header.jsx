"use client";

import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const { isSignedIn, user, isLoaded } = useUser();

  // Debug logging — remove after testing
  console.log("Clerk: isLoaded:", isLoaded, "isSignedIn:", isSignedIn, "userId:", user?.id);

  return (
    <header className="p-3 fixed top-0 w-full border-b bg-background/95 flex items-center justify-between z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
          {/* Always-visible debug badge */}
          
          <SignedIn>
            <Link href="/dashboard">
              <Button className="flex items-center gap-2" variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                Industrial Insights
              </Button>
            </Link>
          

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <StarIcon className="h-4 w-4 mr-2" />
                <span className="hidden md:block">Growth Tools</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <Link href={"/resume"} className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Build Resume</span>
                </Link>
              </DropdownMenuLabel>
              <DropdownMenuItem>
                  <Link href={"/coverLetter"} className="flex items-center gap-2">
                  <PenBox className="h-4 w-4" />
                  <span>cover Letter</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                 <Link href={"/InterviewPrep"} className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Interview Prep</span>
                </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </SignedIn>
          <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton >
            <Button >Sign in</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
        </div>
      </nav>

      
    </header>
  );
}
