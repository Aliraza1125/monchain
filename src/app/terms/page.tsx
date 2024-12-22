// app/terms/page.tsx
"use client";
import React from "react";

export default function Page() {
  const sections = [
    { id: "overview", title: "Overview" },
    { id: "introduction", title: "Introduction" },
    { id: "account", title: "Account Terms" },
    { id: "payment", title: "Payment Terms" },
    { id: "usage", title: "Usage Guidelines" },
    { id: "privacy", title: "Privacy & Data" },
    { id: "termination", title: "Termination" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "changes", title: "Changes to Terms" },
    { id: "contact", title: "Contact Information" },
  ];

  return (
    <>
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        {/* Header Section */}
        <div className="bg-[#2F7BD3] text-white py-8 rounded-2xl ">
          <div className="max-w-[1200px] mx-auto px-8">
            <h1 className="text-3xl  text-center mb-4">Terms of Services</h1>
            <p className="text-center text-white/80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1200px] mx-auto px-8 py-12">
          <div className="flex gap-8">
            {/* Sidebar Navigation */}
            <aside className="w-64 shrink-0">
              <div className="sticky top-8">
                <h2 className="font-semibold mb-4 text-[#1A1A1A]">
                  Terms of Services
                </h2>
                <nav className="flex flex-col gap-3">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-[#666666] hover:text-[#0066FF] text-sm transition-colors"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-white rounded-2xl  shadow-sm">
              <section id="overview" className="mb-12">
                <h2 className="text-xl font-semibold mb-4 text-[#1A1A1A]">
                  Terms of Services
                </h2>
                <p className="text-[#666666] mb-6 leading-relaxed">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p className="text-[#666666] mb-6 leading-relaxed">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source.
                </p>
              </section>

              <section id="introduction" className="mb-12">
                <h2 className="text-xl font-semibold mb-4 text-[#1A1A1A]">
                  Introduction
                </h2>
                <p className="text-[#666666] mb-6 leading-relaxed">
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
                  Good and Evil) by Cicero, written in 45 BC.
                </p>
              </section>

              {sections.slice(2).map((section) => (
                <section key={section.id} id={section.id} className="mb-12">
                  <h2 className="text-xl font-semibold mb-4 text-[#1A1A1A]">
                    {section.title}
                  </h2>
                  <p className="text-[#666666] mb-6 leading-relaxed">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p className="text-[#666666] mb-6 leading-relaxed">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages.
                  </p>
                </section>
              ))}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
