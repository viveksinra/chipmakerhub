"use client"
import Layout from "@/components/layout/Layout"
import Content1 from "@/components/sections/Content1"
import Cta3 from "@/components/sections/Cta3"
import { useEffect } from "react"
import { motion } from "framer-motion"

export default function ForCompany() {
    return (
        <>
            <Layout breadcrumbTitle="Hire Top VLSI Talent" backgroundImage="url(assets/images/chipMaker/motherboard.jpg)">
                <section className="about-section position-relative">
                    <div className="pd_top_90" />
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-center mb-5"
                                >
                                    <h2 className="mb-4" style={{ 
                                        color: '#2f55d4', 
                                        fontWeight: '700',
                                        fontSize: '2.5rem'
                                    }}>
                                        Accelerate your Semiconductor Projects
                                    </h2>
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-10">
                                                <p style={{ 
                                                    fontSize: '18px', 
                                                    lineHeight: '1.8', 
                                                    opacity: 0.9,
                                                    color: '#4a4a4a'
                                                }}>
                                                    ChipMakersHub connects you with pre-vetted VLSI freelance experts worldwide, ready to contribute across the entire VLSI design lifecycle—from RTL to physical design and beyond.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        
                        <div className="pd_top_10" />
                        
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="card" style={{
                                    borderRadius: '15px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                                    border: 'none',
                                    padding: '40px',
                                    background: 'linear-gradient(135deg, #ffffff 0%, #f5f7ff 100%)'
                                }}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="text-center"
                                    >
                                        <h2 className="mb-3" style={{ 
                                            color: '#2f55d4', 
                                            fontWeight: '700',
                                            fontSize: '2.2rem'
                                        }}>
                                            Plug-and-Play VLSI Talent
                                        </h2>
                                        <p style={{ 
                                            fontSize: '20px', 
                                            lineHeight: '1.8', 
                                            opacity: 0.9,
                                            fontWeight: '500',
                                            color: '#333'
                                        }}>
                                            Flexible hiring. Scalable teams. On your terms.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pd_top_60" />
                    <Content1 />
                    <Cta3 />
                </section>
            </Layout>
        </>
    )
}