import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Banner1() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    
    const nextSlide = () => {
        setCurrentSlide(current => (current === 1 ? 0 : current + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(current => (current === 0 ? 1 : current - 1));
    };

    useEffect(() => {
        // Auto slide every 5 seconds
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    // Text animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.7,
                ease: "easeOut"
            }
        })
    };

    // Button pulse animation
    const buttonPulse = {
        pulse: {
            scale: [1, 1.05, 1],
            boxShadow: [
                "0px 0px 0px rgba(30, 75, 184, 0.4)",
                "0px 0px 15px rgba(30, 75, 184, 0.6)",
                "0px 0px 0px rgba(30, 75, 184, 0.4)"
            ],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
            }
        }
    };

    const sliderStyles = {
        sliderContainer: {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
        },
        slider: {
            position: 'relative',
            height: '100%',
        },
        slide: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0,
            transition: 'opacity 0.5s ease-in-out',
        },
        activeSlide: {
            opacity: 1,
            position: 'relative',
        },
        controls: {
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            display: 'flex',
            gap: '10px',
        },
        controlBtn: {
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#174EA6',
        }
    };

    return (
        <>
            <section className="single_banner style_one" 
            style={{ backgroundColor: 'rgba(23, 78, 166, 0.1)' }}
            >
                <div className="image_bg" >
                    <img style={{ paddingBottom: '120px' }} src="/assets/images/slider/banner-1-bg.jpg" className="img-fluid" alt="img" height="600px" />
                </div>
                <div className="content_box" style={{ marginTop: '-120px', paddingLeft: '20px' }}>
                    <div className="large-container">
                        <div className="row align-items-center">
                        <div className="col-lg-6" >
                                <div className="section_title type_one">
                                    <motion.div 
                                        className="title_whole"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <motion.h2 
                                            className="title"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8 }}
                                            style={{ 
                                                position: 'relative', 
                                                fontSize: '3.5rem',
                                                fontWeight: '800',
                                                lineHeight: '1.1',
                                                marginBottom: '30px',
                                                background: 'linear-gradient(90deg, #0a2456, #1e4bb8)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                textShadow: '0px 3px 5px rgba(0,0,0,0.1)'
                                            }}
                                        >
                                            Hire the World's Top VLSI Freelancer                                          
                                         
                                        </motion.h2>
                                    </motion.div>
                                    
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        custom={1}
                                        variants={textVariants}
                                        style={{ 
                                            background: 'rgba(235, 242, 255, 0.9)',
                                            padding: '20px 25px',
                                            borderRadius: '16px',
                                            marginTop: '25px',
                                            marginBottom: '25px',
                                            boxShadow: '0 8px 20px rgba(30, 75, 184, 0.08)',
                                            borderLeft: '5px solid #1e4bb8'
                                        }}
                                    >
                                        <p style={{
                                            fontSize: '18px',
                                            margin: 0,
                                            fontWeight: '500'
                                        }}>
                                            Welcome to <span style={{ 
                                                fontWeight: '700', 
                                                color: '#1e4bb8', 
                                                fontSize: '20px'
                                            }}>ChipMakersHub</span> — the premier platform for VLSI freelancing excellence.
                                        </p>
                                    </motion.div>
                                    
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        custom={2}
                                        variants={textVariants}
                                        style={{
                                            lineHeight: '1.7',
                                            fontSize: '17px',
                                            color: '#344054',
                                            marginBottom: '20px',
                                            padding: '0 5px'
                                        }}
                                    >
                                        <p>
                                            ChipMakersHub connects forward-thinking companies with top-tier semiconductor professionals specializing in RTL design, verification, DFT, physical design, and the full spectrum of chip development expertise.
                                        </p>
                                    </motion.div>
                                    
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        custom={3}
                                        variants={textVariants}
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: '600',
                                            color: '#0f2c69',
                                            marginBottom: '30px',
                                            borderBottom: '2px dashed rgba(30, 75, 184, 0.2)',
                                            paddingBottom: '25px',
                                            background: 'linear-gradient(135deg, rgba(30, 75, 184, 0.05), rgba(30, 75, 184, 0.02))',
                                            padding: '15px 20px',
                                            borderRadius: '10px',
                                            boxShadow: '0 3px 10px rgba(30, 75, 184, 0.05)'
                                        }}
                                    >
                                        <p>
                                            Power your projects with the industry's most trusted freelance 
                                     
                                                 VLSI  
                                            
                                             talent.
                                        </p>
                                    </motion.div>
                               
                                    <motion.div
                                        initial="hidden"
                                        animate={["visible", "pulse"]}
                                        variants={{
                                            ...textVariants,
                                            ...buttonPulse
                                        }}
                                        custom={4}
                                        style={{ marginTop: '15px', display: 'inline-block', background: 'linear-gradient(135deg, #1e4bb8, #174EA6)', borderRadius: '12px' }}
                                    >
                                        <Link href="/hireATalent">
                                            <motion.button 
                                                className="theme-btn-1" 
                                                whileHover={{ 
                                                    scale: 1.05,
                                                    backgroundColor: '#1a3f9d',
                                                    transition: { duration: 0.2 }
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                style={{
                                                    background: 'linear-gradient(135deg, #1e4bb8, #174EA6)',
                                                    color: 'white',
                                                    padding: '15px 36px',
                                                    fontSize: '17px',
                                                    fontWeight: '600',
                                                    borderRadius: '12px',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    boxShadow: '0px 8px 15px rgba(30, 75, 184, 0.25)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    width: 'auto',
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                <span style={{ color: 'white' }}>Hire Top VLSI Talent</span>
                                                <motion.span
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                    style={{
                                                        fontSize: '20px',
                                                        fontWeight: 'bold'
                                                    }}
                                                >
                                                    →
                                                </motion.span>
                                            </motion.button>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                            {/* <div className="col-lg-1" /> */}
                            <div className="col-lg-6">
                                <motion.div 
                                    className="image slider-container" 
                                    style={sliderStyles.sliderContainer}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    <div className="slider" style={sliderStyles.slider}>
                                        <img src="/assets/images/chipMaker/menchip.jpg" 
                                            style={{
                                                ...sliderStyles.slide,
                                                ...(currentSlide === 0 ? sliderStyles.activeSlide : {})
                                            }}
                                            className="img-fluid" 
                                            alt="img" />
                                        <img src="/assets/images/chipMaker/women.jpg" 
                                            style={{
                                                ...sliderStyles.slide,
                                                ...(currentSlide === 1 ? sliderStyles.activeSlide : {})
                                            }}
                                            className="img-fluid" 
                                            alt="img" />
                                    </div>
                                    <div className="slider-controls" style={sliderStyles.controls}>
                                        <motion.button 
                                            style={sliderStyles.controlBtn} 
                                            onClick={prevSlide}
                                            aria-label="Previous slide"
                                            whileHover={{ 
                                                scale: 1.1, 
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)' 
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                        >&lt;</motion.button>
                                        <motion.button 
                                            style={sliderStyles.controlBtn} 
                                            onClick={nextSlide}
                                            aria-label="Next slide"
                                            whileHover={{ 
                                                scale: 1.1, 
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)' 
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                        >&gt;</motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
   
            </section>

        </>
    )
}
