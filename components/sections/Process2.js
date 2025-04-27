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
                                <div className="title_whole">
                                    <h2 className="title">How It Works: Access World's Top VLSI Talent</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="process_box type_two type_three color_two hover_1_get">
                                <div className="image_box hover_1">
                                    <img src="/assets/images/process/newhand.jpg" alt="img" className="img-fluid" />
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
                                                Consult with Our Industry Specialists</Link></div>
                                    </div>
                                    <p>Engage with one of our VLSI experts to thoroughly assess your objectives, technical requirements, and team dynamics.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
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
                                                Access Curated Talent</Link></div>
                                    </div>
                                    <p>We leverage our network of pre-vetted VLSI professionals to connect you with the ideal candidate for your project.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
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
                                                Direct Collaboration</Link></div>
                                    </div>
                                    <p>Connect directly with selected experts to ensure seamless communication and efficient project execution.</p>
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
