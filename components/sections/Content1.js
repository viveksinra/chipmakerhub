import Link from "next/link"


export default function Content1() {
    return (
        <>
            <section className="content-section bg_light_2">
                {/*-============spacing==========-*/}
                <div className="pd_top_95" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8  position-relative z_2">
                            <div className="row">
                                <div className="col-lg-9 pd_right_70">
                                    <div className="section_title type_two">
                                        <h4 className="sm_title"> </h4>
                                        <div className="title_whole">
                                            <h2 className="title"> Why Choose Us</h2>
                                        </div>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_5" />
                                        {/*-============spacing==========-*/}
                                        <p> ChipMakersHub provides unparalleled access to a global network of pre-vetted VLSI experts, ensuring your work with top-tier talent ready to deliver excellence across the entire chip design lifecycle. From RTL to physical design, we streamline your hiring process, minimize risks, and accelerate project success.</p>
                                    </div>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="icon_box_only trans type_one type_two">
                                        <div className="icon_box_in trans">
                                            <div className="icon">
                                                <i className=" flaticon-agile" /></div>
                                            <div className="title_18">
                                                <Link href="#">
                                                    Verified Freelancers </Link></div>
                                            <p>Hire Top-Tier Pre-Vetted VLSI Professionals</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="icon_box_only trans type_one type_two">
                                        <div className="icon_box_in trans">
                                            <div className="icon">
                                                <i className=" flaticon-process" /></div>
                                            <div className="title_18">
                                                <Link href="#">
                                                    Plug-and-Play VLSI Talent </Link></div>
                                            <p>Flexible hiring. Scalable teams. On your terms.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="icon_box_only trans type_one type_two">
                                        <div className="icon_box_in trans">
                                            <div className="icon">
                                                <i className=" flaticon-money-bag" /></div>
                                            <div className="title_18">
                                                <Link href="#">
                                                    Cost-Effective Solutions </Link></div>
                                            <p>Get high-quality work without the overhead costs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="icon_box_only trans type_one type_two">
                                        <div className="icon_box_in trans">
                                            <div className="icon">
                                                <i className=" flaticon-cyber-security" /></div>
                                            <div className="title_18">
                                                <Link href="#">
                                                    Global Talent Pool </Link></div>
                                            <p>Access VLSI experts from anywhere in the world</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mr_left_minus_240">
                            <div className="image_box_only  type_one  mr_top_minus_10">
                                <svg width={584} height={361} viewBox="0 0 584 361" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M511.94 27.9446C450.328 34.2751 426.172 86.6367 388.192 42.1471C376.849 28.8672 369.496 15.8049 356.881 7.85635C320.869 -14.8308 288.183 39.7147 254.098 21.6142C232.361 10.0692 201.495 -12.2949 160.749 11.4556C139.809 23.6643 131.75 43.9955 121.113 68.4992C98.9077 119.645 51.9621 120.301 18.0526 171.855C-10.8735 215.844 -1.72306 261.738 34.5651 282.861C76.3006 307.166 118.003 290.991 175.305 284.117C225.771 278.064 241.38 321.316 288.013 349.769C320.203 369.405 356.398 361.394 387.85 339.164C428.965 310.102 443.933 276.977 463.164 237.902C484.401 194.736 514.067 182.433 539.686 166.375C618.882 116.728 578.36 21.1282 511.94 27.9446Z" fill="#1a73e8" />
                                </svg>
                                <div className="image one">
                                <img 
                                  src="/assets/images/chipMaker/groupPic.png" 
                                  width={375} 
                                  height={490} 
                                  decoding="async" 
                                  data-src="/assets/images/chipMaker/men.jpeg" 
                                  alt="img" 
                                  data-ll-status="loaded" 
                                  className="entered litespeed-loaded" 
                                  style={{borderRadius: '20px'}}
                                /><noscript>&lt;img width="375" height="490"
                                        decoding="async"
                                        src="/assets/images/chipMaker/men.jpeg"
                                        alt="img" /&gt;</noscript></div>
                                <div className="image two">
                                    <img src="/assets/images/chipMaker/girlWithPc.png" width={648} height={648} decoding="async" data-src="/assets/images/chipMaker/women.jpg" alt="img" data-ll-status="loaded" className="entered litespeed-loaded" /><noscript>&lt;img width="648" height="648"
                                        decoding="async"
                                        src="/assets/images/chipMaker/women.jpg"
                                        alt="img" /&gt;</noscript></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_70" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
