"use client"
import Layout from "@/components/layout/Layout"
import { useEffect, useState } from "react"

export default function AboutUs() {
    // Array of feature data for mapping
    const features = [
        {
            icon: "flaticon-development",
            title: "A marketplace for VLSI freelancers",
            description: "Connect with specialized semiconductor talent in our dedicated VLSI freelance marketplace.",
            delay: "0.5s"
        },
        {
            icon: "flaticon-system",
            title: "On-demand VLSI talent for companies",
            description: "Access skilled engineers when needed without long-term commitments or extensive hiring processes.",
            delay: "0.7s"
        },
        {
            icon: "flaticon-teamwork",
            title: "Seamless project collaboration and management",
            description: "Utilize our integrated tools for efficient communication, milestone tracking, and secure deliverables.",
            delay: "0.9s"
        },
        {
            icon: "flaticon-chip",
            title: "Expertise in full-spectrum ASIC, FPGA, and SoC development",
            description: "Find specialized skills across the entire semiconductor design and verification workflow.",
            delay: "1.1s"
        }
    ];

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
            <Layout breadcrumbTitle="About Us" backgroundImage="url(assets/images/chipMaker/aboutus.jpg)">
                {/*-about*/}
                <section className="about-section position-relative">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <div className="about-text text-center animate-on-scroll fadeInUp" style={{ animation: 'fadeInUp 1s ease forwards' }}>
                                    <h2 className="mb-4 animate-on-scroll" style={{ color: '#2f55d4', fontWeight: '700', animation: 'fadeInUp 0.8s ease forwards' }}>
                                        Revolutionizing the Semiconductor Industry
                                    </h2>
                                    <p className="mb-4 animate-on-scroll" style={{ fontSize: '18px', lineHeight: '1.8', animation: 'fadeInUp 1s ease forwards', opacity: 0.9 }}>
                                        At Chip Makers Hub, we empower the global semiconductor industry with a seamless freelancing marketplace tailored for VLSI. Our mission is to revolutionize chip design by connecting top-tier freelance engineers with companies seeking flexible, efficient, and expert-driven hiring solutions.
                                        From startups to enterprises, we enable smarter resourcing and accelerate innovation across the entire semiconductor design spectrum.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pd_top_60" />

                        <div className="row">
                            {features.map((feature, index) => (
                                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" key={index}>
                                    <div className="about-feature-box text-center p-4 animate-on-scroll" 
                                        style={{ 
                                            border: "none", 
                                            borderRadius: "15px", 
                                            height: "100%", 
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)", 
                                            transition: "all 0.3s ease",
                                            background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
                                            animation: `fadeInUp ${feature.delay} ease forwards`,
                                            transform: 'translateY(20px)',
                                            opacity: 0
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        <div className="icon-box mb-4">
                                            <i className={feature.icon} style={{ fontSize: '50px', color: '#2f55d4' }}></i>
                                        </div>
                                        <h4 className="mb-3" style={{ fontWeight: '600' }}>{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <style jsx>{`
                            @keyframes fadeInUp {
                                from {
                                    opacity: 0;
                                    transform: translateY(20px);
                                }
                                to {
                                    opacity: 1;
                                    transform: translateY(0);
                                }
                            }
                            
                            .animated {
                                animation: fadeInUp 0.8s ease forwards;
                            }
                            
                            .about-feature-box:hover {
                                transform: translateY(-10px);
                                box-shadow: 0 15px 35px rgba(0,0,0,0.12);
                            }
                        `}</style>
                    </div>
                </section>
            </Layout>
        </>
    )
}