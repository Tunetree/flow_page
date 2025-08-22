import Header from "@/components/Header"
import Hore from "@/components/KRA_hero"
import KRAheader from "@/components/KRA_header"
import Body from "@/components/emptybody"
import Flitersidebar from "@/components/FilterSidebar"

export default function AboutPage() {
  return (
    <>
    <Header />
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-white rounded-4xl md:outline-2 md:outline-purple-300"
    >
      <Hore />
      <div className="flex flex-col md:flex-row gap-6 mt-6">
         {/* Sidebar - 30% width */}
          <aside className="w-full md:w-[30%]">
            <Flitersidebar />
          </aside>

          {/* Right content - 70% width */}
          <div className="w-full md:w-[70%]">
            <KRAheader />
             <Body />
            </div>
      </div>
    </section>
    
    </>
  );
}