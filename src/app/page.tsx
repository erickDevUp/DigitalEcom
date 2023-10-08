import Card from "@/components/cardsStore";
import CardSide from "@/components/cartSide";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-gray-100">
        <Hero />
        <CardSide show={false} />
        <Card />
        <Footer />
      </main>
    </>
  );
}
