import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      Nav
      <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
      <section className="padding">Popular products</section>
      <section className="padding">Super quality</section>
      <section className="padding-x py-10">Services</section>
      <section className="padding">Speical offer</section>
      <section className="bg-pale-blue padding">customReviews</section>
      <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
      <section className="bg-black padding-x padding-t pb-8">Footer</section>
    </main>
  );
}
