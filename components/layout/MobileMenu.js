import Link from 'next/link'
import Sidebar from './Sidebar'
export default function MobileMenu({ handleMobileMenu, isMobileMenu }) {

    return (
        <>
            <div className={isMobileMenu ? "mobile_menu_box-visible" : ""}>
                <div className="mobile_menu_box">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />
                    <nav className="menu-box scrollbarcolor">
                        <div className="close-btn" onClick={handleMobileMenu}>
                            <i className="fi-rr-cross" />
                        </div>
                        {/* <form role="search" method="get" action="#">
                            <input type="search" className="search" placeholder="Search..." name="s" title="Search" />
                            <button type="submit" className="sch_btn">
                                <i className="fa fa-search" />
                            </button>
                        </form> */}
                        <div className="menu-outer">
                            <div className="navigation_menu">
                                <Sidebar />
                            </div>
                        </div>
                        <div className="mobile-header-info-wrap">
                            {/* <div className="single-mobile-header-info">
                                <Link href="tel:+91 8848009689" className="cnt">
                                    <i className="fi-rs-headphones" />+91 8848009689 </Link>
                            </div> */}
                            <div className="single-mobile-header-info cont_over">
                                <Link href="mailto:contact@chipmakershub.com" className="cnt">
                                    <i className="fi-rs-envelope" />contact@chipmakershub.com </Link>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '15px',
                                marginTop: '20px'
                            }}>
                                <div className="button">
                                    <Link href="/forFreelancer" style={{
                                        background: '#ffffff',
                                        color: '#174ea6',
                                        border: '2px solid #174ea6',
                                        fontWeight: 600,
                                        borderRadius: '12px',
                                        minWidth: '160px',
                                        lineHeight: '26px',
                                        fontSize: '16px',
                                        padding: '8px 20px',
                                        transition: '0.5s',
                                        display: 'inline-block',
                                        textAlign: 'center',
                                        textDecoration: 'none'
                                    }}>
                                        Apply as a Freelancer
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="#174ea6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="button">
                                    <Link href="/forCompany" className="theme_btn">
                                        Hire Top VLSI Talent
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
