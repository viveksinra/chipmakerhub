import Layout from "@/components/layout/Layout"
import Link from "next/link"

// Define content array
const TERMS_CONDITIONS_CONTENT = [
  {
    title: 'Introduction',
    paragraphs: [
      'Welcome to ChipMakersHub. These terms and conditions ("Terms") govern your use of our website located at www.chipmakershub.com (the "Service") operated by ChipMakersHub Inc. ("us", "we", or "our").',
      'By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.',
    ],
  },
  {
    title: '1. Accounts',
    paragraphs: [
      'When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.',
      'You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.',
      'You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.',
    ],
  },
  {
    title: '2. Intellectual Property',
    paragraphs: [],
    subsections: [
      {
        title: '2.1 Service Content',
        paragraphs: [
          'Our Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of ChipMakersHub Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.',
        ],
      },
      {
        title: '2.2 User Content',
        paragraphs: [
          'By posting content on the platform, including but not limited to text, designs, projects, code, or other materials ("Content"), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute your content in connection with the Service.',
        ],
      },
      {
        title: '2.3 Client Projects',
        paragraphs: [
          'For freelancers accepting projects from clients, intellectual property rights for deliverables are governed by the specific project agreements between freelancers and clients. By default, unless otherwise specified in the project agreement, intellectual property rights for work created by freelancers are transferred to the client upon full payment.',
        ],
      },
    ],
  },
  {
    title: '3. Project Agreements',
    paragraphs: [],
    subsections: [
      {
        title: '3.1 Formation of Agreements',
        paragraphs: [
          'When a company posts a project and a freelancer accepts it, they enter into a direct contract with each other. ChipMakersHub provides the platform for these parties to connect but is not a party to any agreements between freelancers and clients.',
        ],
      },
      {
        title: '3.2 Our Role',
        paragraphs: [
          'We act as a facilitator providing a platform for connecting freelancers and companies. We may provide tools to help ensure agreements are fulfilled, but we are not responsible for the performance of either party.',
        ],
      },
      {
        title: '3.3 Payment Processing',
        paragraphs: [
          'We process payments on behalf of freelancers. Companies pay us, and we pay freelancers after deducting our service fee. Payments are subject to our Payment Terms.',
        ],
      },
    ],
  },
  {
    title: '4. Conduct Guidelines',
    paragraphs: [
      'Users of our Service shall not:',
    ],
    listItems: [
      'Use the Service in any way that violates any applicable national or international law or regulation',
      'Engage in any conduct that restricts or inhibits anyone\'s use or enjoyment of the Service',
      'Use the Service to impersonate any person or misrepresent identity or affiliation with any person or organization',
      'Engage in any harassing, abusive, or harmful conduct toward other users',
      'Attempt to gain unauthorized access to our systems or networks',
      'Post false, inaccurate, misleading, deceptive, or fraudulent content',
      'Transmit any material that contains viruses, trojan horses, or any other malicious code',
    ],
  },
  {
    title: '5. Fees and Payments',
    paragraphs: [],
    subsections: [
      {
        title: '5.1 Service Fees',
        paragraphs: [
          'We charge service fees for using our platform. Fees may vary based on the type of service, project size, and other factors. All applicable fees are displayed to you when you use the relevant service.',
        ],
      },
      {
        title: '5.2 Payment Terms',
        paragraphs: [
          'Companies must fund projects before work begins. Payments to freelancers are released according to the milestone schedule or upon project completion as agreed in the project agreement.',
        ],
      },
      {
        title: '5.3 Taxes',
        paragraphs: [
          'Users are responsible for paying all taxes associated with their use of the Service. Freelancers are responsible for reporting and paying any income taxes or other taxes on their earnings from the platform.',
        ],
      },
    ],
  },
  {
    title: '6. Termination',
    paragraphs: [
      'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.',
      'Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    paragraphs: [
      'In no event shall ChipMakersHub Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:',
      '- Your use of or inability to use the Service',
      '- Any unauthorized access to or use of our servers and/or any personal information stored therein',
      '- Any interruption or cessation of transmission to or from the Service',
      '- Any bugs, viruses, trojan horses, or the like, which may be transmitted to or through the Service by any third party',
    ],
  },
  {
    title: '8. Governing Law',
    paragraphs: [
      'These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.',
    ],
  },
  {
    title: '9. Changes',
    paragraphs: [
      'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days\' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.',
    ],
  },
  {
    title: '10. Contact Us',
    paragraphs: [
      'If you have any questions about these Terms, please contact us at legal@chipmakershub.com.',
    ],
  },
];

export default function TermsConditions() {
    return (
        <>
            <Layout breadcrumbTitle="Terms & Conditions" backgroundImage="url(assets/gif/landscape/chip.gif)">
                <section className="contact-section">
                    <div className="pd_top_80" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="terms-conditions-content">
                                    <div className="last-modified mb-5">
                                        <p><strong>Last Updated:</strong> October 1, 2023</p>
                                    </div>

                                    {TERMS_CONDITIONS_CONTENT.map((section, index) => (
                                        <div key={index} className="mb-5">
                                            <h3 className="mb-4">{section.title}</h3>

                                            {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
                                                <p key={pIndex} className="mb-3">{paragraph}</p>
                                            ))}

                                            {section.subsections && (
                                                <div className="subsections mt-4">
                                                    {section.subsections.map((subsection, sIndex) => (
                                                        <div key={sIndex} className="ps-4 mb-4">
                                                            <h4 className="mb-3">{subsection.title}</h4>
                                                            {subsection.paragraphs.map((paragraph, pIndex) => (
                                                                <p key={pIndex} className="mb-2">{paragraph}</p>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {section.listItems && (
                                                <ul className="list-unstyled ps-4 mt-3">
                                                    {section.listItems.map((item, lIndex) => (
                                                        <li key={lIndex} className="mb-2 d-flex">
                                                            <span className="me-2">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {index < TERMS_CONDITIONS_CONTENT.length - 1 && <hr className="my-5" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pd_bottom_40" />
                </section>
            </Layout>
        </>
    )
}