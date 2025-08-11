import DefaultLayout from "@/components/Layout/DefaultLayout";
import { Metadata } from "next";
import Index from "@/components/dashboard/index";
export const metadata: Metadata = {
  title: "Protein Bind: a leading research platform for drug dicovery",
  description: "This is a desccription for protein bind",
};
import { SessionProvider } from "next-auth/react";
export default function Home() {
  return (
    <>
      {/* <SessionProvider> */}
      <DefaultLayout>
        <Index />
      </DefaultLayout>
      {/* </SessionProvider> */}
    </>
  );
}
