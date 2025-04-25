"use client"
import Layout from "@/components/layout/Layout"
import CareerForm from "@/components/sections/careerForm";
import { useEffect } from "react"
import { motion } from "framer-motion"
import { FaUserTie, FaUserGraduate, FaRegHandshake, FaChevronDown } from "react-icons/fa";

export default function Career() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const heroSection = document.querySelector('.career-hero');
            if (heroSection) {
                heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <>
            <Layout breadcrumbTitle="Career" backgroundImage="url(assets/images/chipMaker/aboutus.jpg)">
                {/* Career Section - Text on top */}
                <section style={{ padding: "80px 0 40px" }}>
                    <div className="container">
                        <motion.div 
                            className="row justify-content-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerChildren}
                        >
                            <motion.div 
                                className="col-lg-8 text-center"
                                variants={fadeInUp}
                            >
                                <h2 style={{ fontSize: "2.5rem", fontWeight: 600, marginBottom: "20px", color: "#2f2f2f" }}>
                                    Join Our Team at ChipMakersHub
                                </h2>
                                <div style={{ width: "80px", height: "4px", backgroundColor: "#2f55d4", margin: "0 auto 30px" }}></div>
                                
                                <p style={{ fontSize: "16px", color: '#333', marginBottom: "20px", lineHeight: 1.7 }}>
                                    We are actively seeking talented <b>Sales & Marketing Engineers</b> and enthusiastic <b>Interns</b> to join our growing team. If you're passionate about the semiconductor industry and eager to contribute to an innovative freelancing platform, we want to hear from you!
                                </p>
                                
                                <p style={{ fontSize: "16px", color: '#333', marginBottom: "25px", lineHeight: 1.7 }}>
                                    Whether you're an experienced professional or just starting your career, ChipMakersHub offers exciting opportunities to grow, learn, and make an impact.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Image on left and Form on right Section */}
                <section style={{ 
                    padding: "60px 0 100px", 
                    backgroundColor: "#f8f9fa",
                    position: "relative",
                    overflow: "hidden"
                }}>
                    <div className="container">
                        <div className="row">
                            {/* Image Column - Left */}
                            <motion.div 
                                className="col-lg-5"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <motion.div style={{ position: "relative", height: "100%" }}>
                                    <img 
                                        src="/assets/images/about/man-1.png" 
                                        alt="Team member" 
                                        className="img-fluid mb-4 mb-lg-0" 
                                        style={{ 
                                            borderRadius: "10px",
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                            position: "relative",
                                            zIndex: 2
                                        }}
                                    />
                                    <div style={{
                                        position: "absolute",
                                        width: "80%",
                                        height: "80%",
                                        backgroundColor: "#2f55d4",
                                        borderRadius: "10px",
                                        bottom: "-20px",
                                        right: "-20px",
                                        zIndex: 1
                                    }}></div>
                                    
                        
                                </motion.div>
                            </motion.div>
                            
                            {/* Form Column - Right */}
                            <motion.div 
                                className="col-lg-7"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div style={{
                                    backgroundColor: "#fff",
                                    borderRadius: "10px",
                                    padding: "30px",
                                    boxShadow: "0 15px 30px rgba(0,0,0,0.08)"
                                }}>
                                    <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "10px", color: "#2f2f2f" }}>
                                        Apply Now
                                    </h3>
                                 
                                    <div style={{ width: "60px", height: "3px", backgroundColor: "#2f55d4", marginBottom: "25px" }}></div>
                                    <h6 style={{ fontSize: "1.8rem", fontWeight: 500, marginBottom: "20px", color: "#2f2f2f" }}>
                                    Please fill out the form below to apply for a position with us:
                                    </h6>
                                    <CareerForm />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div style={{
                        position: "absolute",
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(47, 85, 212, 0.05)",
                        top: "-150px",
                        left: "-150px",
                        zIndex: 1
                    }}></div>
                    
                    <div style={{
                        position: "absolute",
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(47, 85, 212, 0.05)",
                        bottom: "-100px",
                        right: "-100px",
                        zIndex: 1
                    }}></div>
                </section>
            </Layout>
        </>
    )
}