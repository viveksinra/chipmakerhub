"use client"
import Layout from "@/components/layout/Layout"
import Content6 from "@/components/sections/Content6"
import Cta4 from "@/components/sections/Cta4"
import Service8 from "@/components/sections/Service8"
import { useEffect } from "react"

export default function ForFreelancer() {


    return (
        <>
            <Layout breadcrumbTitle="Apply as a Freelancer" backgroundImage="url(assets/images/chipMaker/applyfreelancer.jpg)">
                {/*-about*/}
                <section className="about-section position-relative">
                    {/*-============spacing==========-*/}
                    {/* <div className="pd_top_90" /> */}
                    {/*-============spacing==========-*/}
                    {/* <Service8 /> */}
                    <Content6 />
                    <Cta4 />
                </section>
            </Layout>
        </>
    )
}