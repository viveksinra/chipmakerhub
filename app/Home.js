import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
// import Service4 from "@/components/sections/Service4";
import ServiceStyle6 from "@/myComponent/ServiceStyle6";


export default function Home() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={2}>
        <Banner1 />
        <ServiceStyle6 />
    </Layout>
    </>
  );
}
