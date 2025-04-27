import Link from "next/link"

export default function NavbarNav() {

    return (
        <>

            <ul className="navbar_nav">
                <li className="menu-item nav-item menu-item-has-children dropdown mennucolumn_full-six" style={{marginRight: '20px', padding: '25px 0px'}}>
                    <Link href="/" className="nav_link">
                        <span className="text-link" style={{fontSize: '16px'}}> Home </span>
                    </Link>
      
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_ nav-item" style={{marginRight: '20px', padding: '25px 0px'}}>
                    <Link href="/about-us" className="nav_link">
                        <span className="text-link" style={{fontSize: '16px'}}>
                           About Us
                        </span>
                    </Link>
                
                </li>
                
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_  nav-item" style={{marginRight: '20px', padding: '25px 0px'}}>
                    <Link href="#" className="nav_link">
                        <span className="text-link" style={{fontSize: '16px'}}>
                            Hire Talent
                        </span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/hireATalent?type=asic" className="nav_link">
                                <span className="text-link">
                                    ASIC & FPGA Design
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/hireATalent?type=rtl" className="nav_link">
                                <span className="text-link">
                                RTL Development & Verification
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/hireATalent?type=dft" className="nav_link">
                                <span className="text-link">
                                DFT (Design For Testability)
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/hireATalent?type=physical" className="nav_link">
                                <span className="text-link">
                                Physical Design & Signoff
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/hireATalent?type=analog" className="nav_link">
                                <span className="text-link">
                                Analog & Mixed-Signal Design
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/hireATalent?type=embedded" className="nav_link">
                                <span className="text-link">
                                Embedded System & SoC Development
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/hireATalent?type=consulting" className="nav_link">
                                <span className="text-link">
                                Semiconductor Consulting & Training
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/hireATalent?type=chipArchitect" className="nav_link">
                                <span className="text-link">
                                Chip Architect
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item  nav-item" style={{marginRight: '20px', padding: '25px 0px'}}>
                    <Link href="/contact" className="nav_link">
                        <span className="text-link" style={{fontSize: '16px'}}>
                            Contact
                        </span>
                    </Link>
                </li>
                <li className="menu-item  nav-item" style={{marginRight: '20px', padding: '25px 0px'}}>
                    <Link href="/career" className="nav_link">
                        <span className="text-link" style={{fontSize: '16px'}}>
                            Career
                        </span>
                    </Link>
                </li>
                <li className="menu-item  nav-item" style={{marginRight: '20px', padding: '25px 0px'}}>
                    <Link href="/faq" className="nav_link">
                        <span className="text-link" style={{fontSize: '16px'}}>
                            FAQs
                        </span>
                    </Link>
                </li>
         
            </ul>
        </>
    )
}
