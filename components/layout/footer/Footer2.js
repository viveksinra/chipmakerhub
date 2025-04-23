import Link from "next/link"

export default function Footer2({ }) {
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
                                    <div className="logo_box" style={{backgroundColor: 'white'}}>
                                        <Link href="#" className="logo navbar-brand">
                                            <img src="/assets/images/logo/ChipMakerHub.png" alt="ChipMakerHub" className="logo_default" />
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
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-facebook" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-skype" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="footer_widgets_box pd_bottom_30">
                                            <div className="fwidget_title">
                                                <h2 className="title color_white"> Services </h2>
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
                                                            <Link className="links color_white" href="/service-details">
                                                                ASIC & FPGA Design
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/service-details">
                                                                RTL Development & Verification
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/service-details">
                                                                DFT (Design For Testability)
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/service-details">
                                                                Physical Design & Signoff
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/service-details">
                                                                Analog & Mixed-Signal Design
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/service-details">
                                                                Embedded System & SoC Development
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/service-details">
                                                                Semiconductor Consulting & Training
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/service-details">
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
                                                            <Link className="links color_white" href="/contact-us">
                                                                Contact Us
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/faqs">
                                                                FAQs
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/join-freelancer">
                                                                Join as Freelancer
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="/hire-freelancer">
                                                                Hire a Freelancer
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
                                        <div className="color_white position_p_relative">
                                            We're here to help! Reach out to us through our contact form or email.
                                        </div>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_25" />
                                        {/*-============spacing==========-*/}
                                        <div className="newsteller_simple button_style_one">
                                            <div className="input_group">
                                                <form method="post">
                                                    <div className="mc4wp-form-fields">
                                                        <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                        <input type="submit" value="Contact Us" />
                                                    </div>
                                                </form>
                                            </div>
                                            {/*-============spacing==========-*/}
                                            <div className="pd_bottom_25" />
                                            {/*-============spacing==========-*/}
                                        </div>
                                        <div className="d-flex align-items-center contact_header_one">
                                            <div className="icon_s">
                                                <i className=" fi-rr-headphones" /></div>
                                            <div className="content">
                                                <h6 className="tite color_white">Need Help?</h6>
                                                <div className="title_20"><Link href="tel:+000(123)45688" className="color_white">+33 752158205</Link>
                                                </div>
                                            </div>
                                        </div>
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
                                                    Copyright {new Date().getFullYear()}, ChipMakerHub. All Rights Reserved
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
                                                Where the world connects for VLSI work
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
