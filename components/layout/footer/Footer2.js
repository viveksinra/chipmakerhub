import Link from "next/link"
import { FaLinkedin, FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6"

export default function Footer2({ }) {
    const socialLinks = [
        { 
            icon: FaLinkedin, 
            url: "https://www.linkedin.com/company/chipmakershub/", 
            label: "LinkedIn" 
        },
        { 
            icon: FaInstagram, 
            url: "https://www.instagram.com/chipmakershub?igsh=MWU4cXFncmx3d2ttYg==", 
            label: "Instagram" 
        },
        { 
            icon: FaFacebook, 
            url: "https://www.facebook.com/share/16MfwxpGA4/", 
            label: "Facebook" 
        },
        { 
            icon: FaXTwitter, 
            url: "https://x.com/chipmakershub?t=wr4ulZeX_w4P5cSrDHAsiA&s=09", 
            label: "Twitter" 
        }
    ];

    return (
        <>
            <footer className="footer style_one style_two">
                <div className="patter_top">
                    <img src="/assets/images/shape/wave-pattern-2.png" className="img-fluid" alt="img" />
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_top_100" />
                {/*-============spacing==========-*/}
                <section className="md_content position-relative z_99">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pd_right_70">
                                <div className="footer_widgets_box pd_bottom_30">
                                    <div className="logo_box" >
                                        <Link href="#" className="logo navbar-brand">
                                            <img src="/assets/images/logo/ChipMakersHubWhite.png" alt="ChipMakersHub" className="logo_default" />
                                        </Link>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_35" />
                                    {/*-============spacing==========-*/}
                                    <div className="position-relative color_white">
                                    Your one-stop VLSI freelancing platform connecting companies with skilled semiconductor professionals specializing in RTL design, verification, DFT, physical design, and more.
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_25" />
                                    {/*-============spacing==========-*/}
                                    <div className="fwidget_title">
                                        <h2 className="title color_white"> Follow Us </h2>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_25" />
                                        {/*-============spacing==========-*/}
                                    </div>
                                    <div className="social-icons">
                                        <ul>
                                            {socialLinks.map((social, index) => (
                                                <li key={index}>
                                                    <Link href={social.url} target="_blank" className="m_icon" aria-label={social.label}>
                                                        {<social.icon />}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="footer_widgets_box pd_bottom_30">
                                            <div className="fwidget_title">
                                                <h2 className="title color_white"> Hire Talent </h2>
                                                {/*-============spacing==========-*/}
                                                <div className="pd_bottom_25" />
                                                {/*-============spacing==========-*/}
                                            </div>
                                            <div className="position-relative">
                                                <ul className="list_box list">
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/hireATalent">
                                                                ASIC & FPGA Design
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/hireATalent">
                                                                RTL Development & Verification
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/hireATalent">
                                                                DFT (Design For Testability)
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/hireATalent">
                                                                Physical Design & Signoff
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/hireATalent">
                                                                Analog & Mixed-Signal Design
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/hireATalent">
                                                                Embedded System & SoC Development
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/hireATalent">
                                                                Semiconductor Consulting & Training
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/hireATalent">
                                                                Chip Architect
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="footer_widgets_box pd_bottom_30">
                                            <div className="fwidget_title">
                                                <h2 className="title color_white"> Other Pages </h2>
                                                {/*-============spacing==========-*/}
                                                <div className="pd_bottom_25" />
                                                {/*-============spacing==========-*/}
                                            </div>
                                            <div className="position-relative">
                                                <ul className="list_box list">
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/about-us">
                                                                About Us
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/contact">
                                                                Contact Us
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/faq">
                                                                FAQs
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/forFreelancer">
                                                                Apply as a Freelancer
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/forCompany">
                                                                Hire Top VLSI Talent
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/terms-conditions">
                                                                Terms and Conditions
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/privacy-policy">
                                                                Privacy Policy
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="footer_widgets_box pd_bottom_30">
                                    <div className="fwidget_title">
                                        <h2 className="title color_white"> Hear Back from Us </h2>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_25" />
                                        {/*-============spacing==========-*/}
                                    </div>
                                    <div className="bottom_content">
                                   
                                        {/*-============spacing==========-*/}
                                   
                                        {/*-============spacing==========-*/}
                                        <div className="d-flex align-items-center contact_header_one">
                                                    <div className="icon_s">
                                                        <i className=" fi-rr-envelope" /></div>
                                            <div className="content">
                                            {/* <div className="content">
                                                <h6 className="tite color_white">Need Help?</h6>
                                           
                                            </div> */}
                                            <div className="title_20" style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                                                    <Link href="mailto:contact@chipmakershub.com" className="color_white">contact@chipmakershub.com
                                                    </Link>
                                                </div>
                                            </div>
                                       
                                        </div>
                                             {/*-============spacing==========-*/}
                                             <div className="pd_bottom_25" />
                                        {/*-============spacing==========-*/}
                                        <div className="d-flex align-items-center contact_header_one">
                                            {/* <div className="icon_s">
                                                <i className=" fi-rr-headphones" /></div> */}
                                            <div className="content">
                                            {/* <div className="content">
                                                <h6 className="tite color_white">Need Help?</h6>
                                           
                                            </div> */}
                                            {/* <div className="title_20" style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                                            <Link href="tel:+33 752158205" className="color_white">+33 752158205</Link>
                                                    <Link href="tel:+91 8848009689" className="color_white">+91 8848009689</Link>
                                                    <Link href="tel:+91 9709733933" className="color_white">+91 9709733933</Link>
                                                  
                                                </div> */}
                                            </div>
                                       
                                        </div>
                                            {/*-============spacing==========-*/}
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_50" />
                    {/*-============spacing==========-*/}
                </section>
                <section className="mottom_content  position-relative z_99">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="position-relative">
                                    <ul className="list_box linline">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="icon trans">
                                                    <img src="/assets/images/shield.svg" className="img-fluid" alt="img" />
                                                </div>
                                                <Link className="links color_white" href="#">
                                                    Copyright {new Date().getFullYear()}, ChipMakersHub. All Rights Reserved
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 text-md-end">
                                <div className="position-relative">
                                    <ul className="list_box color_one linline">
                                        <li>
                                            <div className="d-flex align-items-center">
                                           
                                                <Link className="links color_white" href="#">
                                               Hire the World's Top VLSI Freelancer
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_50" />
                {/*-============spacing==========-*/}
                <div className="patter_bottom">
                    <img src="/assets/images/shape/wave-pattern-1.png" className="img-fluid" alt="img" />
                </div>
            </footer>

        </>
    )
}
