import Header from "@/components/Header"
import Hore from "@/components/KRA_hero"
import Body from "@/components/emptybody"

export default function AboutPage() {
  return (
    <>
    <Header />
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-white rounded-4xl md:outline-2 md:outline-purple-300"
    >
      <Hore />
    </section>
    <Body />
    </>
  );
}
