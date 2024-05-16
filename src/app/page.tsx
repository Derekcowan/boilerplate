"use client";

import { Button } from "@/components/ui/button";
import { useAction, useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const storeUser = useMutation(api.users.store);

  const upgrade = useAction(api.stripe.pay);
  const router = useRouter();

  // This is a placeholder. Replace this with your actual logic to check if a user is logged in.
  // const isLoggedIn = () => {
  //   // Check if user is logged in
  //   // This could be checking a token in local storage or a value in your state management
  //   return true; // or false
  // };

  // useEffect(() => {
  //   if (isLoggedIn()) {
  //     router.push("/protected");
  //   }
  //   if (!isLoggedIn()) {
  //     router.push("/");
  //   }
  // }, [router]);

  useEffect(() => {
    storeUser({});
  });

  const handleBuy = async () => {
    const url = await upgrade({});
    if (!url) return;
    router.push("/protected");
  };

  return (
    <section>
      <main className="flex min-h-screen flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-extrabold">Derek&apos;s Boilerplate</h1>
        <p>{/* <Button onClick={handleBuy}>Buy</Button> */}</p>
      </main>
    </section>
  );
}
