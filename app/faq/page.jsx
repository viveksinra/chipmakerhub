"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function Faq() {
    // FAQ data for each tab
    const generalFaqs = [
        {
            question: "What is ChipMakersHub?",
            answer: "ChipMakersHub connects forward-thinking companies with top-tier semiconductor professionals specializing in RTL design, verification, DFT, physical design, and the full spectrum of chip development expertise."
        },
        {
            question: "What sets ChipMakersHub apart from traditional freelance marketplaces?",
            answer: "Unlike general freelancing platforms, ChipMakersHub is purpose-built for the semiconductor industry. We understand the complexities of the chip design lifecycle — from architecture, RTL design, and verification to DFT, physical design, STA, AMS, and FPGA development. Our platform connects you with pre-vetted experts and enables seamless collaboration tailored to the unique demands of chip development."
        },
        {
            question: "Is ChipMakersHub a global platform?",
            answer: "Yes, ChipMakersHub is a global platform, connecting semiconductor professionals and companies worldwide to enable seamless international collaboration and access to top-tier talent across borders."
        },
        {
            question: "How do I get paid?",
            answer: "Once your engagement begins, you'll be paid based on the agreed payment schedule—whether hourly, weekly, or monthly. Payments are processed securely after services are rendered, and all transactions are handled with complete confidentiality and compliance."
        }
    ];
    const freelancerFaqs = [
        {
            question: "How do I sign up as a freelancer?",
            answer: "Click on “Apply as a Freelancer” on our homepage, complete your profile with professional details and portfolio, and submit your application. Our team will review it through a multi-step verification process including technical evaluation and live screening. Once approved, you’ll join our global network of verified VLSI freelancers."
        },
    
        {
            question: "How does the verification process work?",
            answer: "Our verification process involves a thorough evaluation of your technical background, including your experience, portfolio, and proficiency with industry-standard EDA tools. It also includes live technical screening by experienced VLSI professionals, assessment of communication and soft skills, and an evaluation of your team spirit and professional behavior to ensure alignment with our quality standards."
        },
        {
            question: "How do I get paid for my work?",
            answer: "All payments on ChipMakersHub are handled securely through our platform. Once your work is approved, you get paid based on the agreed terms—either weekly or on a fixed monthly schedule—for the duration of your engagement."
        }
    ];
    const companyFaqs = [
        {
            question: "How do I hire a freelancer on ChipMakersHub?",
            answer: "Consult with our VLSI specialists to assess your needs, access pre-vetted talent from our network, and collaborate directly with selected experts for efficient project execution."
        },
        {
            question: "How are freelancers vetted on ChipMakersHub?",
            answer: "Freelancers on ChipMakersHub undergo a thorough vetting process, which includes a review of their technical background, portfolio, and experience with industry-standard tools. They also go through live technical screenings, communication assessments, and evaluations of their team collaboration skills to ensure they meet our quality standards. Only top-tier professionals are approved to join our platform."
        }
    ];

    const tabList = [
        { key: 'general', label: 'General', faqs: generalFaqs },
        { key: 'freelancer', label: 'For Freelancers', faqs: freelancerFaqs },
        { key: 'company', label: 'For Companies', faqs: companyFaqs },
    ];

    const [activeTab, setActiveTab] = useState('general');
    const [isActive, setIsActive] = useState({ status: false, key: 0 });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false, key: 0 });
        } else {
            setIsActive({ status: true, key });
        }
    };

    const currentFaqs = tabList.find(tab => tab.key === activeTab).faqs;

    return (
        <>
            <Layout breadcrumbTitle="FAQs" backgroundImage="url(assets/images/chipMaker/faqbg.jpg)">
                <section className="faq-section">
                    <div className="pd_top_90" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> FAQs</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Frequently Asked Questions!</h2>
                                    </div>
                                    <p> ChipMakersHub is your trusted partner for semiconductor talent and solutions.</p>
                                </div>
                                <div className="pd_bottom_40" />
                                <div className="theme_btn_all">
                                    <Link href="/contact" className="theme_btn big rotate">
                                        Contact Us <span> <i className=" fi-rr-arrow-small-up" /></span>
                                    </Link>
                                </div>
                                <div className="pd_bottom_30" />
                            </div>
                            <div className="col-lg-7">
                                <div style={{ marginBottom: 30 }}>
                                    <ul className="nav nav-tabs links trans" style={{ borderBottom: '1px solid #eee', marginBottom: 24 }}>
                                        {tabList.map(tab => (
                                            <li key={tab.key} className="nav-item" style={{ display: 'inline-block', marginRight: 16 }}>
                                                <button
                                                    className={activeTab === tab.key ? "nav-link active" : "nav-link"}
                                                    style={activeTab === tab.key ? { background: '#0d6efd', color: '#fff', borderRadius: 7 } : { background: '#f8f9fa', color: '#222', borderRadius: 7 }}
                                                    onClick={() => { setActiveTab(tab.key); setIsActive({ status: false, key: 0 }); }}
                                                >
                                                    {tab.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <section className="block_faq">
                                    <div className="accordion-box">
                                        {currentFaqs.map((faq, idx) => (
                                            <div key={idx} className={isActive.key === idx ? "accordion active-block" : "accordion"}>
                                                <div
                                                    className={isActive.key === idx ? "question faq_header active" : "question faq_header"}
                                                    onClick={() => handleToggle(idx)}
                                                >
                                                    <div className="question_box ">
                                                        <div className="title_no_a_18 trans">{faq.question}</div>
                                                        <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                    </div>
                                                </div>
                                                <div
                                                    className="answer accordion-content"
                                                    style={{ display: isActive.key === idx ? "block" : "none" }}
                                                >
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="pd_bottom_40" />
                </section>
            </Layout>
        </>
    );
}