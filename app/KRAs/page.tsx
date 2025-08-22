// app/about/page.tsx (or wherever your page is located)

import Header from "@/components/Header";
import Hore from "@/components/KRA_hero";
import HeadKRA from "@/components/KRA_header";
import FiltersSidebar from "@/components/FilterSidebar";
import Table from "@/components/KRAtable";

export default function AboutPage() {
  return (
    <>
      {/* Top Navigation */}
      <Header />

      {/* Main Section */}
      <section
        id="about"
        className="section-padding relative overflow-hidden bg-white rounded-4xl md:outline-2 md:outline-purple-300"
      >
        {/* Hero Section */}
        <Hore />

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* Sidebar - 30% width */}
          <aside className="w-full md:w-[30%]">
            <FiltersSidebar />
          </aside>

          {/* Right content - 70% width */}
          <div className="w-full md:w-[70%]">
            <HeadKRA />
          </div>
        </div>
      </section>

      {/* Table Section */}
      <div className="mt-10">
        <Table />
      </div>
    </>
  );
}
