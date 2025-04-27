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
            answer: "To sign up as a freelancer, click on the 'Sign Up as a Freelancer' button on our homepage, complete your profile with your professional details, skills, and portfolio, and submit for verification. Our team will review your application and guide you through the verification process."
        },
    
        {
            question: "How does the verification process work?",
            answer: "Our verification process includes a review of your professional background, portfolio, and skills assessment. Depending on your specialization, this may include technical interviews, reference checks, or skill-specific tests to ensure quality standards."
        },
        {
            question: "How do I get paid for my work?",
            answer: "ChipMakersHub handles all payment transactions securely. Once a project is completed and approved, payments are released based on agreed terms."
        }
    ];
    const companyFaqs = [
        {
            question: "How do I hire a freelancer on ChipMakersHub?",
            answer: "Register your company, post a detailed project description specifying your requirements, review proposals from qualified freelancers, select the best match, and begin collaboration through our secure platform."
        },
        {
            question: "How are freelancers vetted on ChipMakersHub?",
            answer: "All freelancers undergo a comprehensive verification process that includes professional background checks, portfolio review, skill assessments, and for certain specializations, technical interviews. Only professionals who meet our quality standards are approved."
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
                                    <Link href="#" className="theme_btn big rotate">
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