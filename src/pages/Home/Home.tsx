import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import Newsletter from "@/components/Newsletter";
import Vision from "@/components/Vision";
import Layout from "../../layout/Layout";

function Home() {
  return (
    <>
    <Layout>
      {/* <Carousel/> */}
      <HowItWorks />
      <Vision />
      {/* <Services /> */}
      {/* <Hero /> */}
      {/* <Sponsors /> */} 
      {/* <About /> */}
      <Features />
      {/* <Cta /> */}
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      <Newsletter />
      <FAQ />
    </Layout>
    </>
  );
}

export default Home;
