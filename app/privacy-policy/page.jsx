import Layout from "@/components/layout/Layout"
import Link from "next/link"

// Define content arrays
const PRIVACY_POLICY_CONTENT = [
  {
    title: 'Introduction',
    paragraphs: [
      'Welcome to ChipMakersHub. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.',
    ],
  },
  {
    title: '1. Important Information and Who We Are',
    paragraphs: [],
    subsections: [
      {
        title: 'Purpose of This Privacy Policy',
        paragraphs: [
          'This privacy policy aims to give you information on how ChipMakersHub collects and processes your personal data through your use of this website, including any data you may provide through this website when you sign up for our services, subscribe to our newsletter, or participate in our platform.',
        ],
      },
      {
        title: 'Controller',
        paragraphs: [
          'ChipMakersHub Inc. is the controller and responsible for your personal data (collectively referred to as "ChipMakersHub", "we", "us" or "our" in this privacy policy).',
        ],
      },
      {
        title: 'Contact Details',
        paragraphs: [
          '- Full name of legal entity: ChipMakersHub Inc.',
          '- Email address: privacy@chipmakershub.com',
          '- Postal address: 123 Silicon Valley Way, San Jose, CA 95134, United States',
          '- Telephone number: +1 (555) 123-4567',
        ],
      },
    ],
  },
  {
    title: '2. The Data We Collect About You',
    paragraphs: [
      'Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:',
    ],
    listItems: [
      'Identity Data includes first name, last name, username or similar identifier, title, and employment history.',
      'Contact Data includes billing address, delivery address, email address, and telephone numbers.',
      'Professional Data includes your educational background, work history, skills, portfolio, and professional certifications.',
      'Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.',
      'Profile Data includes your username and password, projects you\'ve worked on, client reviews, your interests, preferences, feedback, and survey responses.',
      'Usage Data includes information about how you use our website and services.',
      'Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.',
    ],
  },
  {
    title: '3. How We Collect Your Personal Data',
    paragraphs: [
      'We use different methods to collect data from and about you including through:',
    ],
    listItems: [
      'Direct interactions. You may give us your Identity, Contact, and Professional Data by filling in forms or by corresponding with us by mail, phone, email, or otherwise.',
      'Automated technologies or interactions. As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.',
      'Third parties or publicly available sources. We may receive personal data about you from various third parties and public sources, such as analytics providers, verification services, or professional networking sites.',
    ],
  },
  {
    title: '4. How We Use Your Personal Data',
    paragraphs: [
      'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:',
      'Where we need to perform the contract we are about to enter into or have entered into with you.',
      'Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.',
      'Where we need to comply with a legal obligation.',
    ],
    subsections: [
      {
        title: 'Purposes for Which We Will Use Your Personal Data',
        paragraphs: [
          '- To register you as a new customer',
          '- To process and deliver our services',
          '- To manage our relationship with you',
          '- To enable you to participate in a complete profile on our platform',
          '- To administer and protect our business and this website',
          '- To deliver relevant website content and advertisements to you',
          '- To use data analytics to improve our website, products/services, marketing, customer relationships, and experiences',
        ],
      },
    ],
  },
  {
    title: '5. Data Security',
    paragraphs: [
      'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.',
    ],
  },
  {
    title: '6. Data Retention',
    paragraphs: [
      'We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.',
    ],
  },
  {
    title: '7. Your Legal Rights',
    paragraphs: [
      'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:',
    ],
    listItems: [
      'Request access to your personal data',
      'Request correction of your personal data',
      'Request erasure of your personal data',
      'Object to processing of your personal data',
      'Request restriction of processing your personal data',
      'Request transfer of your personal data',
      'Right to withdraw consent',
    ],
  },
  {
    title: '8. Changes to the Privacy Policy',
    paragraphs: [
      'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.',
    ],
  },
  {
    title: '9. Contact Us',
    paragraphs: [
      'If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@chipmakershub.com.',
    ],
  },
];

export default function PrivacyPolicy() {
    return (
        <>
            <Layout breadcrumbTitle="Privacy Policy" backgroundImage="url(assets/gif/landscape/chip.gif)">
                <section className="contact-section">
                    <div className="pd_top_80" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="privacy-policy-content">
                                    <div className="last-modified mb-5">
                                        <p><strong>Last Updated:</strong> October 1, 2023</p>
                                    </div>

                                    {PRIVACY_POLICY_CONTENT.map((section, index) => (
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

                                            {index < PRIVACY_POLICY_CONTENT.length - 1 && <hr className="my-5" />}
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