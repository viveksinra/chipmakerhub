"use client"
import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import Content1 from "@/components/sections/Content1";
import Cta1 from "@/components/sections/Cta1";
import Cta2 from "@/components/sections/Cta2";
import Cta3 from "@/components/sections/Cta3";
import Process1 from "@/components/sections/Process1";
import Process2 from "@/components/sections/Process2";
import Process3 from "@/components/sections/Process3";
// import Service4 from "@/components/sections/Service4";
import ServiceStyle6 from "@/myComponent/ServiceStyle6";


export default function Home() {
  return (
    <>
    <Layout headerStyle={2} footerStyle={2}>
        <Banner1 />
        <ServiceStyle6 />
        <Content1 />
        <Process3 />
        <Process2 />
        <Cta3 />

    </Layout>
    </>
  );
}
