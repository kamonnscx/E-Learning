import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "@/pages/components/Homepage";
import Sidebar from "./components/Sidebar";




export default function Home() {
  return (
    <main className=' font-mtsans overflow-hidden'>
    {/* <Homepage/> */}
    {/* <CardsFlip/> */}
    {/* <Course/> */}
    <Sidebar/>
    </main>
  );
}
