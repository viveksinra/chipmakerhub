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
                {/* Join Our Team Section */}
                <section style={{ padding: "100px 0" }}>
                    <div className="container">
                        <motion.div 
                            className="row align-items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerChildren}
                        >
                            <motion.div 
                                className="col-lg-6"
                                variants={fadeInUp}
                            >
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    style={{ position: "relative" }}
                                >
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
                            
                            <motion.div 
                                className="col-lg-6"
                                variants={fadeInUp}
                            >
                                <h2 style={{ fontSize: "2.5rem", fontWeight: 600, marginBottom: "20px", color: "#2f2f2f" }}>
                                    Join Our Team at ChipMakersHub
                                </h2>
                                <div style={{ width: "80px", height: "4px", backgroundColor: "#2f55d4", marginBottom: "30px" }}></div>
                                
                                <p style={{ fontSize: "16px", color: '#333', marginBottom: "20px", lineHeight: 1.7 }}>
                                    We are actively seeking talented <b>Sales & Marketing Engineers</b> and enthusiastic <b>Interns</b> to join our growing team. If you're passionate about the semiconductor industry and eager to contribute to an innovative freelancing platform, we want to hear from you!
                                </p>
                                
                                <p style={{ fontSize: "16px", color: '#333', marginBottom: "25px", lineHeight: 1.7 }}>
                                    Whether you're an experienced professional or just starting your career, ChipMakersHub offers exciting opportunities to grow, learn, and make an impact.
                                </p>
                                
                                <div className="d-flex align-items-center gap-4 mb-4">
                                    <div style={{ 
                                        minWidth: "50px", 
                                        height: "50px", 
                                        backgroundColor: "rgba(47, 85, 212, 0.1)", 
                                        borderRadius: "50%", 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center"
                                    }}>
                                        <FaRegHandshake size={24} color="#2f55d4" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.2rem", marginBottom: "5px", color: "#2f2f2f" }}>Join a Growing Industry</h4>
                                        <p style={{ margin: 0, color: "#6c757d" }}>Be part of a rapidly expanding semiconductor ecosystem</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Application Form Section */}
                <section id="apply-now" style={{ 
                    padding: "100px 0", 
                    backgroundColor: "#f8f9fa",
                    position: "relative",
                    overflow: "hidden"
                }}>
                    <div className="container">
                        <motion.div 
                            className="text-center mb-5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 style={{ fontSize: "2.5rem", fontWeight: 600, marginBottom: "15px", color: "#2f2f2f" }}>
                                Apply Now
                            </h2>
                            <div style={{ width: "80px", height: "4px", backgroundColor: "#2f55d4", margin: "0 auto 30px" }}></div>
                            <p style={{ fontSize: "16px", color: '#333', maxWidth: "700px", margin: "0 auto 15px", lineHeight: 1.7 }}>
                                Please fill out the form below to apply for a position with us:
                            </p>
                        </motion.div>

                        <motion.div 
                            className="row justify-content-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="col-lg-8">
                                <div style={{
                                    backgroundColor: "#fff",
                                    borderRadius: "10px",
                                    padding: "40px",
                                    boxShadow: "0 15px 30px rgba(0,0,0,0.08)"
                                }}>
                                    <CareerForm />
                                </div>
                            </div>
                        </motion.div>
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