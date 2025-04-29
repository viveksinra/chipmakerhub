"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { FaLinkedin, FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6"
import { useState } from "react"

// Notification Popup Component
const NotificationPopup = ({ isVisible, message, onClose }) => {
    return (
        <div className={`notification-popup ${isVisible ? "popup-visible" : ""}`}>
            <div className="overlay-layer" onClick={onClose}></div>
            <div className="popup-content">
                <div className="close-notification" onClick={onClose}>
                    <i className="fa fa-times"></i>
                </div>
                <div className="notification-inner">
                    <img src="/assets/images/check-circle.png" alt="Success" className="success-icon" />
                    <h4>{message}</h4>
                    <button className="theme_btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
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
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");

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
            setNotificationMessage("Please fill in all required fields");
            setShowNotification(true);
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
                setNotificationMessage("Thank you! We have received your message and will get back to you soon.");
                setShowNotification(true);
                
                // Reset form after successful submission
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            } else {
                setNotificationMessage(result.error || "Something went wrong. Please try again.");
                setShowNotification(true);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setNotificationMessage("Something went wrong. Please try again.");
            setShowNotification(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeNotification = () => {
        setShowNotification(false);
    };

    return (
        <>
            <Layout breadcrumbTitle="Contact Us" backgroundImage="url(assets/images/chipMaker/skyscrapper.jpg)">
                {/*-contact*/}
                <section className="contact-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                         
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="contact_box_content" style={{ minHeight: "180px" }}>
                                    <div className="icon trans">
                                        <img src="/assets/images/cont-2.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="contact-infor">
                                        <h6 className="title_no_a_24">Email</h6>
                                        <Link href="mailto:contact@chipmakershub.com">contact@chipmakershub.com
                                        </Link>
                                        {/* <Link href="mailto:infoinsurace.com">infoinsurace.com</Link> */}
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="contact_box_content" style={{ minHeight: "180px" }}>
                                    <div className="icon trans">
                                        <img src="/assets/images/cont-3.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="contact-infor">
                                        <h6 className="title_no_a_24">Call Us</h6>
                                        <Link href="tel:+91 8848009689">+91 8848009689
                                        </Link>
                                        <Link href="tel:+91 9709733933">+91 9709733933
                                        </Link>
                                        <Link href="tel:+33 752158205">+33 752158205</Link>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                </section>
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
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label htmlFor="message" className="form-label">Message</label>
                                                            <textarea 
                                                                id="message"
                                                                name="message" 
                                                                placeholder="Additional Information... (Optional)" 
                                                                rows={3} 
                                                                required="required" 
                                                                data-error="Please, leave us a message."
                                                                value={formData.message}
                                                                onChange={handleChange}
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

                {/* Notification Popup */}
                <NotificationPopup 
                    isVisible={showNotification} 
                    message={notificationMessage} 
                    onClose={closeNotification} 
                />
            </Layout>

            {/* Custom CSS for notification popup */}
            <style jsx>{`
                .notification-popup {
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 9999999999;
                    visibility: hidden;
                    opacity: 0;
                    overflow: auto;
                    background: rgba(0, 0, 0, 0.5);
                    transition: all 500ms ease;
                }
                
                .notification-popup.popup-visible {
                    visibility: visible;
                    opacity: 1;
                }
                
                .notification-popup .overlay-layer {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                }
                
                .notification-popup .popup-content {
                    position: relative;
                    background: white;
                    border-radius: 8px;
                    max-width: 500px;
                    margin: 100px auto;
                    padding: 40px 30px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                    z-index: 10;
                    text-align: center;
                }
                
                .notification-popup .close-notification {
                    position: absolute;
                    right: 15px;
                    top: 15px;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    cursor: pointer;
                    z-index: 10;
                    transition: all 500ms ease;
                }
                
                .notification-popup .close-notification i {
                    font-size: 20px;
                    color: #333;
                }
                
                .notification-popup .notification-inner {
                    padding: 10px;
                }
                
                .notification-popup .notification-inner h4 {
                    margin: 15px 0;
                    color: #333;
                }
                
                .notification-popup .success-icon {
                    width: 70px;
                    height: 70px;
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    )
}