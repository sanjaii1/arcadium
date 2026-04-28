import styles from "./page.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Awards from "./components/Awards";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      {/* <Team /> */}
      <Testimonials />
      {/* <Pricing /> */}
      <FAQ />
      <Awards />
      <CTABanner />
      <Footer />
    </main>
  );
}
