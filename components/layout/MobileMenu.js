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
                        <form role="search" method="get" action="#">
                            <input type="search" className="search" placeholder="Search..." name="s" title="Search" />
                            <button type="submit" className="sch_btn">
                                <i className="fa fa-search" />
                            </button>
                        </form>
                        <div className="menu-outer">
                            <div className="navigation_menu">
                                <Sidebar />
                            </div>
                        </div>
                        <div className="mobile-header-info-wrap">
                            <div className="single-mobile-header-info">
                                <Link href="tel:+91 8848009689" className="cnt">
                                    <i className="fi-rs-headphones" />+91 8848009689 </Link>
                            </div>
                            <div className="single-mobile-header-info cont_over">
                                <Link href="mailto:contact@chipmakerhub.com" className="cnt">
                                    <i className="fi-rs-envelope" />contact@chipmakerhub.com </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="#" className="theme_btn tp_one">Contact</Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="#" className="theme_btn">Service</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
