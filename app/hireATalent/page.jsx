"use client"
import Layout from "@/components/layout/Layout"
import CareerForm from "@/components/sections/careerForm";
import CompanyForm from "@/components/sections/companyForm";
import Form1 from "@/components/sections/Form1";
import Form2 from "@/components/sections/Form2";
import Form3 from "@/components/sections/Form3";
import Form4 from "@/components/sections/Form4";
import Form5 from "@/components/sections/Form5";
import { useEffect } from "react"

export default function Career() {
    useEffect(() => {
        // Add animation class after component mounts
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
        
        return () => {
            animateElements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <>
            <Layout breadcrumbTitle="Hire a Talent" backgroundImage="url(assets/images/chipMaker/aboutus.jpg)">
                {/*-about*/}
                <section className="form-section bg_light_1 position-relative">
                    <div className="ab_img_left_top">
                        <img src="/assets/images/bg.png" className="img-fluid" alt="img" />
                    </div>
                    <div className="pd_top_90" />
                    <div className="container-fluid">
                    <div className="section_title text-center type_one">
                                    {/* <div className="title_whole">
                                        <h2 className="title">Hire a Talent</h2>
                                    </div> */}
                                </div>
                                <div className="pd_bottom_40" />
                                
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="image">
                                    <img src="/assets/images/about/man-1.png" className="img-fluid m-auto" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
              
                               
                                <CompanyForm />
                                <div className="pd_bottom_90" />
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="image">
                                    <img src="/assets/images/about/man-2.png" className="img-fluid m-auto" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                       

            </Layout>
        </>
    )
}