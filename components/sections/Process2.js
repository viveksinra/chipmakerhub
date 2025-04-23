import Link from "next/link"


export default function Process2() {
    return (
        <>
            <section className="process-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="section_title text-center type_four">
                                <h4 className="sm_title">How It Works</h4>
                                <div className="title_whole">
                                    <h2 className="title">Access World's Top VLSI Talent</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="process_box type_two type_three color_two hover_1_get">
                                <div className="image_box hover_1">
                                    <img src="/assets/images/process/pro-h4-1-min.jpg" alt="img" className="img-fluid" />
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="icon trans" />
                                </div>
                                <div className="content_no">
                                    <div className="con_top">
                                        <p className="step">Step 01</p>
                                        <div className="title_22">
                                            <Link href="#">
                                                Initial Consultation</Link></div>
                                    </div>
                                    <p>Schedule a detailed discussion with our VLSI experts to understand your project requirements and team needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="process_box type_two type_three color_two hover_1_get">
                                <div className="image_box hover_1">
                                    <img src="/assets/images/process/pro-h4-2-min.jpg" alt="img" className="img-fluid" />
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="icon trans" />
                                </div>
                                <div className="content_no">
                                    <div className="con_top">
                                        <p className="step">Step 02</p>
                                        <div className="title_22">
                                            <Link href="#">
                                                Talent Matching</Link></div>
                                    </div>
                                    <p>Our team carefully selects and matches pre-vetted VLSI professionals from our global network to your specific needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="process_box type_two type_three color_two hover_1_get">
                                <div className="image_box hover_1">
                                    <img src="/assets/images/process/pro-h4-3-min.jpg" alt="img" className="img-fluid" />
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="icon trans" />
                                </div>
                                <div className="content_no">
                                    <div className="con_top">
                                        <p className="step">Step 03</p>
                                        <div className="title_22">
                                            <Link href="#">
                                                Technical Assessment</Link></div>
                                    </div>
                                    <p>Conduct thorough technical evaluations and interviews to ensure the perfect fit for your project requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="process_box type_two type_three color_two hover_1_get">
                                <div className="image_box hover_1">
                                    <img src="/assets/images/process/pro-h4-4-min.jpg" alt="img" className="img-fluid" />
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="icon trans" />
                                </div>
                                <div className="content_no">
                                    <div className="con_top">
                                        <p className="step">Step 04</p>
                                        <div className="title_22">
                                            <Link href="#">
                                                Project Onboarding</Link></div>
                                    </div>
                                    <p>Seamlessly integrate the selected talent into your team with our comprehensive onboarding and collaboration support.</p>
                                </div>
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
