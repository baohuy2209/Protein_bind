import DefaultLayout from "@/components/Layout/DefaultLayout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Protein Bind: a leading research platform for drug dicovery",
  description: "this is a desccription for protein bind",
};
export default function Home() {
  return (
    <>
      <DefaultLayout>
        <h1>Home Page</h1>
      </DefaultLayout>
    </>
  );
}
