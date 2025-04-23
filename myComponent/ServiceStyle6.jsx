import Link from "next/link"
import { 
    FaMicrochip, 
    FaCode, 
    FaSearchPlus, 
    FaLayerGroup, 
    FaChartLine, 
    FaMemory, 
    FaLaptopCode, 
    FaUserTie
} from "react-icons/fa";

export default function ServiceStyle6() {
    const iconStyle = {
        position: 'relative',
        width: '110px',
        height: '130px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const iconBgStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#0088ff',
        borderRadius: '5px',
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        transform: 'perspective(10px) rotateY(-1deg)',
        zIndex: 1
    };

    const iconInnerStyle = {
        position: 'relative',
        zIndex: 2,
        color: '#fff'
    };

    return (
        <>
              <div className="container" style={{marginTop: '20px'}}>
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="section_title type_one">
                                    <div className="title_whole">
                                        <h2 className="title"> Need top-tier VLSI freelancers for your next project? </h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6">
                                <p className="mr_bottom_10">ChipMakersHub connects you with pre-vetted VLSI freelance experts worldwide, ready to contribute across the entire VLSI design lifecycle—from RTL to physical design and beyond. </p>
                                <p className="mr_bottom_10" style={{ fontWeight: 'bold' }}>Scale faster. Hire smarter. Tap into on-demand expertise — when and where you need it. </p>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_20" />
                        {/*-============spacing==========-*/}
                        <div className="service_post position-relative">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans" style={iconStyle}>
                                            <div style={iconBgStyle}></div>
                                            <FaMicrochip size={40} style={iconInnerStyle} />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                            <img src="/assets/images/chipMaker/men.jpeg"  className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">
                                                        ASIC & FPGA Design
                                                    </Link>
                                                </div>
                                                <p className="trans">
                                                    Expert ASIC and FPGA designers using cutting-edge methodologies and tools.
                                                </p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans" style={iconStyle}>
                                            <div style={iconBgStyle}></div>
                                            <FaCode size={40} style={iconInnerStyle} />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                        <img src="/assets/images/chipMaker/men.jpeg" className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">
                                                    RTL Development & Verification
                                                    </Link></div>
                                                <p className="trans">
                                                    Skilled RTL developers and verification experts using advanced design tools.
                                                </p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans" style={iconStyle}>
                                            <div style={iconBgStyle}></div>
                                            <FaSearchPlus size={40} style={iconInnerStyle} />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                        <img src="/assets/images/chipMaker/men.jpeg" className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">
                                                        DFT (Design For Testability)
                                                    </Link>
                                                </div>
                                                <p className="trans">
                                                    DFT specialists applying modern methodologies for testability solutions.
                                                </p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans" style={iconStyle}>
                                            <div style={iconBgStyle}></div>
                                            <FaLayerGroup size={40} style={iconInnerStyle} />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                        <img src="/assets/images/chipMaker/men.jpeg" className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">
                                                        Physical Design & Signoff
                                                    </Link>
                                                </div>
                                                <p className="trans">
                                                    Physical design experts delivering quality signoff using industry tools.
                                                </p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans" style={iconStyle}>
                                            <div style={iconBgStyle}></div>
                                            <FaChartLine size={40} style={iconInnerStyle} />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                        <img src="/assets/images/chipMaker/men.jpeg" className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">
                                                      Analog & Mixed-Signal Design
                                                    </Link>
                                                </div>
                                                <p className="trans">
                                                    Analog and mixed-signal designers creating innovative circuit solutions.
                                                </p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans" style={iconStyle}>
                                            <div style={iconBgStyle}></div>
                                            <FaMemory size={40} style={iconInnerStyle} />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                        <img src="/assets/images/chipMaker/men.jpeg" className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">
                                                      Embedded System & SoC Development
                                                    </Link>
                                                </div>
                                                <p className="trans">
                                                    Embedded system and SoC developers building complex integrated solutions.
                                                </p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans" style={iconStyle}>
                                            <div style={iconBgStyle}></div>
                                            <FaLaptopCode size={40} style={iconInnerStyle} />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                        <img src="/assets/images/chipMaker/men.jpeg" className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">
                                                   Semiconductor Consulting & Training
                                                    </Link>
                                                </div>
                                                <p className="trans">
                                                    Semiconductor consultants providing expert training and design guidance.
                                                </p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans" style={iconStyle}>
                                            <div style={iconBgStyle}></div>
                                            <FaUserTie size={40} style={iconInnerStyle} />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                        <img src="/assets/images/chipMaker/men.jpeg" className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">
                                                  Chip Architect
                                                    </Link>
                                                </div>
                                                <p className="trans">
                                                    Experienced chip architects designing efficient system architectures.
                                                </p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}