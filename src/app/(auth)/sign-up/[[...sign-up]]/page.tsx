import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <SignUp path="/sign-up" />
    </div>
  );
};

export default SignUpPage;
