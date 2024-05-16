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

  useEffect(() => {
    storeUser({});
  });

  const handleBuy = async () => {
    const url = await upgrade({});
    if (!url) return;
    router.push(url);
  };

  return (
    <section>
      <main className="flex min-h-screen flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-extrabold">Derek&apos;s Boilerplate</h1>
        <p>
          <Button onClick={handleBuy}>Buy</Button>
        </p>
      </main>
    </section>
  );
}
