"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { FaLinkedin, FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6"
import { useState, useEffect } from "react"
import dynamic from 'next/dynamic'

// Dynamically import MUI components
const Dialog = dynamic(() => import('@mui/material/Dialog'), { ssr: false })
const DialogTitle = dynamic(() => import('@mui/material/DialogTitle'), { ssr: false })
const DialogContent = dynamic(() => import('@mui/material/DialogContent'), { ssr: false })
const DialogActions = dynamic(() => import('@mui/material/DialogActions'), { ssr: false })
const Button = dynamic(() => import('@mui/material/Button'), { ssr: false })
const CircularProgress = dynamic(() => import('@mui/material/CircularProgress'), { ssr: false })
const Backdrop = dynamic(() => import('@mui/material/Backdrop'), { ssr: false })

// Loading Overlay Component
const LoadingOverlay = ({ isVisible }) => {
    if (!isVisible) return null;
    
    return (
        <Backdrop
            sx={{ 
                color: '#fff', 
                zIndex: 9999,
                backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}
            open={isVisible}
        >
            <div className="spinner-container">
                <CircularProgress color="primary" />
                <p style={{ color: '#0496de', marginTop: '15px' }}>Sending your message...</p>
            </div>
        </Backdrop>
    );
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState("");
    const [muiLoaded, setMuiLoaded] = useState(false);

    // Set MUI loaded after hydration to avoid SSR issues
    useEffect(() => {
        setMuiLoaded(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            setDialogMessage("Please fill in all required fields");
            setShowDialog(true);
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const result = await response.json();
            
            if (result.success) {
                setDialogMessage("Thank you! We have received your message and will get back to you soon.");
                setShowDialog(true);
                
                // Reset form after successful submission
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            } else {
                setDialogMessage(result.error || "Something went wrong. Please try again.");
                setShowDialog(true);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setDialogMessage("Something went wrong. Please try again.");
            setShowDialog(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    return (
        <>
            <Layout breadcrumbTitle="Contact Us" backgroundImage="url(assets/images/chipMaker/skyscrapper.jpg)">
                {/*-contact*/}

                {/*-contact end*/}
                {/*map*/}
             
                {/*map*/}
                {/*form*/}
                <section className="form-section bg_light_1 position-relative">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> Get In Touch</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Need Any Help?
                                           </h2>
                                    </div>
                                    <p> We're here to help you navigate the world of VLSI freelancing</p>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                                <div className="social-icons">
                                    <ul>
                                        <li><Link href="https://www.linkedin.com/company/chipmakershub/" target="_blank" className="m_icon"> 
                                            <FaLinkedin />
                                        </Link></li>
                                        <li><Link href="https://www.instagram.com/chipmakershub?igsh=MWU4cXFncmx3d2ttYg==" target="_blank" className="m_icon"> 
                                            <FaInstagram />
                                        </Link></li>
                                        <li><Link href="https://www.facebook.com/share/16MfwxpGA4/" target="_blank" className="m_icon"> 
                                            <FaFacebook />
                                        </Link></li>
                                        <li><Link href="https://x.com/chipmakershub?t=wr4ulZeX_w4P5cSrDHAsiA&s=09" target="_blank" className="m_icon"> 
                                            <FaXTwitter />
                                        </Link></li>
                                    </ul>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <section className="contact_form_box_all">
                                    <div className="contact_form_shortcode">
                                        <form id="contact-form" onSubmit={handleSubmit}>
                                            <div className="messages" />
                                            <div className="controls">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label htmlFor="fullName" className="form-label">Full Name</label>
                                                            <input 
                                                                id="fullName"
                                                                type="text" 
                                                                name="name" 
                                                                placeholder="Your Name *" 
                                                                required="required" 
                                                                data-error="Enter Your Name" 
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                disabled={isSubmitting}
                                                            />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label htmlFor="email" className="form-label">Email Address</label>
                                                            <input 
                                                                id="email"
                                                                type="email" 
                                                                name="email" 
                                                                required="required" 
                                                                placeholder="Email *" 
                                                                data-error="Enter Your Email Id" 
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                disabled={isSubmitting}
                                                            />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label htmlFor="subject" className="form-label">Subject</label>
                                                            <input 
                                                                id="subject"
                                                                type="text" 
                                                                name="subject" 
                                                                placeholder="Subject (Optional)" 
                                                                value={formData.subject}
                                                                onChange={handleChange}
                                                                disabled={isSubmitting}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label htmlFor="message" className="form-label">Message</label>
                                                            <textarea 
                                                                id="message"
                                                                name="message" 
                                                                placeholder="Additional Information..." 
                                                                rows={3} 
                                                                required="required" 
                                                                data-error="Please, leave us a message."
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                                disabled={isSubmitting}
                                                            />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="form-group mg_top apbtn">
                                                            <button 
                                                                className="theme_btn" 
                                                                type="submit"
                                                                style={{ position: 'relative', zIndex: 10 }}
                                                                disabled={isSubmitting}
                                                            >
                                                                {isSubmitting ? "Sending..." : "Send Message"}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="ab_img_left_bottom z_0 mr_top_minus_150" style={{ zIndex: 0, pointerEvents: 'none' }}>
                        <img src="/assets/images/bg-1.png" className="img-fluid" alt="img" />
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_90" />
                    {/*-============spacing==========-*/}
                </section>
                {/*form*/}

                {/* Loading Overlay */}
                {muiLoaded && <LoadingOverlay isVisible={isSubmitting} />}
                
                {/* MUI Dialog */}
                {muiLoaded && (
                    <Dialog
                        open={showDialog}
                        onClose={closeDialog}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        PaperProps={{
                            style: {
                                borderRadius: '8px',
                                maxWidth: '500px',
                                width: '90%',
                            }
                        }}
                    >
                        <DialogTitle 
                            id="alert-dialog-title"
                            sx={{ 
                                backgroundColor: '#2574de', 
                                color: 'white',
                                padding: '10px 24px',
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <Button onClick={closeDialog} sx={{ color: 'white', minWidth: 'unset', padding: '0 8px', fontSize: '20px' }}>
                                ✕
                            </Button>
                        </DialogTitle>
                        <DialogContent sx={{ padding: '30px 24px', textAlign: 'center' }}>
                            <h4 style={{ margin: '15px 0 25px', color: '#2574de', fontSize: '20px' }}>{dialogMessage}</h4>
                        </DialogContent>
                        <DialogActions sx={{ justifyContent: 'center', padding: '0 24px 24px' }}>
                            <button className="theme_btn" onClick={closeDialog} style={{ minWidth: '120px' }}>
                                Close
                            </button>
                        </DialogActions>
                    </Dialog>
                )}
            </Layout>

            {/* Custom CSS */}
            <style jsx>{`
                .spinner-container {
                    text-align: center;
                }
            `}</style>
        </>
    )
}