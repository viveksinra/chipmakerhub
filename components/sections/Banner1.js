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
            <section className="single_banner style_one" style={{ backgroundColor: 'rgba(23, 78, 166, 0.1)' }}>
                <div className="image_bg" >
                    <img style={{ paddingBottom: '120px' }} src="/assets/images/slider/banner-1-bg.jpg" className="img-fluid" alt="img" height="600px" />
                </div>
                <div className="content_box" style={{ marginTop: '-120px', paddingLeft: '20px' }}>
                    <div className="large-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
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
                                            style={{ position: 'relative' }}
                                        >
                                            Hire the World's Top <span style={{ 
                                                color: '#1e4bb8',
                                                position: 'relative',
                                                display: 'inline-block'
                                            }}>
                                                VLSI
                                                <motion.span 
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: '2px',
                                                        left: 0,
                                                        width: '100%',
                                                        height: '4px',
                                                        backgroundColor: 'rgba(30, 75, 184, 0.3)',
                                                        borderRadius: '2px'
                                                    }}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '100%' }}
                                                    transition={{ duration: 0.8, delay: 1 }}
                                                />
                                            </span> Freelancer
                                        </motion.h2>
                                    </motion.div>
                                    
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        custom={1}
                                        variants={textVariants}
                                        style={{ 
                                            background: 'rgba(255, 255, 255, 0.7)',
                                            padding: '15px 20px',
                                            borderRadius: '8px',
                                            marginTop: '20px',
                                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.03)'
                                        }}
                                    >
                                        <p>
                                            Welcome to <span style={{ fontWeight: 'bold', color: '#1e4bb8' }}>ChipMakersHub</span> — the premier platform for VLSI freelancing excellence.
                                        </p>
                                    </motion.div>
                                    
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        custom={2}
                                        variants={textVariants}
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
                                    >
                                        <p>
                                            Power your projects with the industry's most trusted freelance VLSI talent.
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
                                        style={{ marginTop: '25px', display: 'inline-block' }}
                                    >
                                        <Link href="/contact">
                                            <motion.button 
                                                className="theme-btn-1" 
                                                whileHover={{ 
                                                    scale: 1.05,
                                                    backgroundColor: '#1a3f9d',
                                                    transition: { duration: 0.2 }
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                style={{
                                                    background: '#1e4bb8',
                                                    color: 'white',
                                                    padding: '12px 32px',
                                                    fontSize: '16px',
                                                    borderRadius: '8px',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    boxShadow: '0px 4px 10px rgba(30, 75, 184, 0.3)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    width: 'auto'
                                                }}
                                            >
                                                <span>Hire Top VLSI Talent</span>
                                                <motion.span
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
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
