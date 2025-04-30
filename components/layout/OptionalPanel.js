import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
}


export default function OptionalPanel({ isOptionalPanel, handleOptionalPanel }) {
    return (
        <>
            <div className={`option_panel-popup ${isOptionalPanel ? "popup-visible" : ""}`}>
                <div className="sdmenu_overlay" onClick={handleOptionalPanel} />
                <div className="option_boxed scrollbarcolor">
                    <div className="close-option-pan" onClick={handleOptionalPanel}>
                        <i className="fi-rr-cross" />
                    </div>
                    <div className="option_content scrollbarcolor ">
                        <div className="log_bx">
                            <Link href="#" className="logo navbar-brand">
                                <img src="/assets/images/logo/ChipMakersHub.png" alt="ChipMakersHub" className="logo_default" />
                            </Link>
                            <div className="about_company"> ChipMakersHub connects you with pre-vetted VLSI freelance experts worldwide, ready to contribute across the entire VLSI design lifecycle—from RTL to physical design and beyond.  </div>
                        </div>
                        <div className="contnet_box">
                            <div className="post_contet_modal">
                                <h2 className="title_no_a_28"> What we offer </h2>
                                <div className="post_enable">
                                    <Swiper {...swiperOptions} className="theme_carousel">
                                        <SwiperSlide className="modal_post_grid">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-9-min.png" className="main_img  img-fluid" alt="img" />
                                                <h2 className="tit_ho title_no_a_20">
                                                    ASIC & FPGA Design
                                                </h2>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="modal_post_grid">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-8-min.png" className="main_img  img-fluid" alt="img" />
                                                <h2 className="tit_ho title_no_a_20">
                                                    RTL Development & Verification
                                                </h2>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="modal_post_grid">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-7-min.png" className="main_img  img-fluid" alt="img" />
                                                <h2 className="tit_ho title_no_a_20">
                                                    DFT (Design For Testability)
                                                </h2>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="modal_post_grid">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-6.png" className="main_img  img-fluid" alt="img" />
                                                <h2 className="tit_ho title_no_a_20">
                                                    Physical Design & Signoff
                                                </h2>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="modal_post_grid">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-5.png" className="main_img  img-fluid" alt="img" />
                                                <h2 className="tit_ho title_no_a_20">
                                                    Analog & Mixed-Signal Design
                                                </h2>
                                            </Link>
                                        </SwiperSlide>
                                        <div className="owl-nav">
                                            <button type="button" role="presentation" className="owl-prev">
                                                <i className="fi-rs-arrow-small-left" />
                                            </button>
                                            <button type="button" role="presentation" className="owl-next">
                                                <i className="fi-rs-arrow-small-right" />
                                            </button>
                                        </div>
                                    </Swiper>
                                </div>
                            </div>
                            <h2 className="title_no_a_28"> Need Any Help? </h2>
                            {/* <div className="contact_panel">
                                <div className="c_pan">
                                    <Link href="tel:+91 8848009689">
                                        <i className="fi-rr-phone-call" /> +91 8848009689 </Link>
                                </div>
                                <div className="c_pan">
                                    <Link href="mailto:contact@chipmakerhub.com">
                                        <i className="fi-rr-envelope" /> contact@chipmakerhub.com </Link>
                                </div>
                                <div className="c_pan">
                                    <a className="wk_hours">
                                        <i className="fi-rr-time-check" /> Working Hours : <span> Sun-monday, 09am-5pm </span>
                                    </a>
                                </div>
                            </div> */}
                            <div className="c_pan"> © {new Date().getFullYear()} ChipMakersHub. All Rights Reserved. </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
