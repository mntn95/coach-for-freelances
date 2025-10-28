'use client';

import { useState } from "react";


import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Services } from "./components/pages/Services";
import { Workshops } from "./components/pages/Workshops";
import { Testimonials } from "./components/pages/Testimonials";
import { Booking } from "./components/pages/Booking";
import { Legal } from "./components/pages/Legal";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { Toaster } from "./components/ui/sonner";

export type Page =
  | "home"
  | "about"
  | "services"
  | "workshops"
  | "testimonials"
  | "booking"
  | "legal";

export default function AppPage() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "about":
        return <About />;
      case "services":
        return <Services onNavigate={setCurrentPage} />;
      case "workshops":
        return <Workshops onNavigate={setCurrentPage} />;
      case "testimonials":
        return <Testimonials />;
      case "booking":
        return <Booking />;
      case "legal":
        return <Legal />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      <main className="pt-20">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <Toaster />
    </div>
  );
}
