import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <SignIn path="/sign-in" />
    </div>
  );
};

export default SignInPage;
