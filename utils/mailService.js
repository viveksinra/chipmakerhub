import nodemailer from 'nodemailer';

// Configure mail transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: true,
    auth: {
      user: 'contact@chipmakershub.com',
      pass: 'Chip#2025'
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false
    }
  });
};

/**
 * Send an email
 * @param {Object} mailOptions - Email options (from, to, subject, html, attachments)
 * @returns {Promise} - Resolves when email is sent
 */
export const sendMail = async (mailOptions) => {
  try {
    const transporter = createTransporter();
    
    // Set default from if not provided
    if (!mailOptions.from) {
      mailOptions.from = '"ChipMakersHub" <contact@chipmakershub.com>';
    }
    
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

/**
 * Send an automated response to the user
 * @param {string} to - Recipient email
 * @param {string} name - Recipient name
 * @param {string} subject - Email subject
 * @param {string} messageBody - HTML content for the email body
 * @returns {Promise} - Resolves when email is sent
 */
export const sendAutoResponse = async (to, name, subject, messageBody) => {
  const mailOptions = {
    to,
    subject,
    html: messageBody
  };
  
  return sendMail(mailOptions);
};

/**
 * Send career application notification to admin
 * @param {Object} formData - Application form data
 * @returns {Promise} - Resolves when email is sent
 */
export const sendCareerApplication = async (formData) => {
  const { name, email, phone, position, linkedin, message, hearAbout, resume } = formData;
  
  const mailOptions = {
    to: 'contact@chipmakershub.com',
    subject: `New Career Application: ${position}`,
    html: `
      <h2>New Career Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Position:</strong> ${position}</p>
      <p><strong>LinkedIn:</strong> ${linkedin || 'Not provided'}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>How they heard about us:</strong> ${hearAbout || 'Not provided'}</p>
    `,
    attachments: resume ? [{
      filename: resume.name,
      content: Buffer.from(await resume.arrayBuffer())
    }] : []
  };
  
  return sendMail(mailOptions);
};

/**
 * Send confirmation email to applicant
 * @param {string} to - Applicant email
 * @param {string} name - Applicant name
 * @param {string} position - Position applied for
 * @returns {Promise} - Resolves when email is sent
 */
export const sendCareerConfirmation = async (to, name, position) => {
  const mailOptions = {
    to,
    subject: `Application Received - ${position} at ChipMakersHub`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2f55d4;">Thank You for Your Application</h2>
        <p>Dear ${name},</p>
        <p>We have received your application for the <strong>${position}</strong> position at ChipMakersHub.</p>
        <p>Our team will review your application and get back to you shortly. If you have any questions in the meantime, feel free to contact us at contact@chipmakershub.com.</p>
        <p>Best regards,</p>
        <p>The ChipMakersHub Team</p>
      </div>
    `
  };
  
  return sendMail(mailOptions);
};

/**
 * Send contact form submission to admin
 * @param {Object} formData - Contact form data
 * @returns {Promise} - Resolves when email is sent
 */
export const sendContactNotification = async (formData) => {
  const { name, email, subject, message, phone } = formData;
  
  const mailOptions = {
    to: 'contact@chipmakershub.com',
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };
  
  return sendMail(mailOptions);
};

/**
 * Send confirmation email to contact form submitter
 * @param {string} to - Submitter email
 * @param {string} name - Submitter name
 * @returns {Promise} - Resolves when email is sent
 */
export const sendContactConfirmation = async (to, name) => {
  const mailOptions = {
    to,
    subject: `Thank You for Contacting ChipMakersHub`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2f55d4;">Thank You for Contacting Us</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>In the meantime, feel free to explore our website for more information about our products and services.</p>
        <p>Best regards,</p>
        <p>The ChipMakersHub Team</p>
      </div>
    `
  };
  
  return sendMail(mailOptions);
};

/**
 * Send company project requirement notification to admin
 * @param {Object} formData - Project requirement form data
 * @returns {Promise} - Resolves when email is sent
 */
export const sendCompanyProjectNotification = async (formData) => {
  const { 
    companyName, contactPersonName, email, projectTitle, 
    projectDescription, requiredSkills, projectDuration, 
    engagementType, startDate, engineersNeeded, 
    workLocation, workLocationCity, ndaRequirements,
    ndaFile, budgetRange, attachments, additionalNotes
  } = formData;
  
  // Format required skills for email
  let skillsList = Object.entries(requiredSkills)
    .filter(([key, value]) => key !== 'others' && value === true)
    .map(([key]) => {
      // Convert camelCase to readable format
      const formatted = key.replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
      return `<li>${formatted}</li>`;
    });
  
  if (requiredSkills.others) {
    skillsList.push(`<li>Others: ${requiredSkills.others}</li>`);
  }
  
  const skillsHtml = skillsList.length > 0 
    ? `<ul>${skillsList.join('')}</ul>` 
    : '<p>No specific skills selected</p>';
  
  const mailOptions = {
    to: 'contact@chipmakershub.com',
    subject: `New Project Requirement: ${projectTitle}`,
    html: `
      <h2>New Project Requirement Submission</h2>
      <h3>Company Information</h3>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Contact Person:</strong> ${contactPersonName}</p>
      <p><strong>Email:</strong> ${email}</p>
      
      <h3>Project Details</h3>
      <p><strong>Project Title:</strong> ${projectTitle}</p>
      <p><strong>Project Description:</strong> ${projectDescription}</p>
      
      <h3>Required Skills</h3>
      ${skillsHtml}
      
      <h3>Engagement Details</h3>
      <p><strong>Project Duration:</strong> ${projectDuration}</p>
      <p><strong>Engagement Type:</strong> ${engagementType}</p>
      <p><strong>Start Date:</strong> ${startDate}</p>
      <p><strong>Engineers Needed:</strong> ${engineersNeeded}</p>
      <p><strong>Work Location:</strong> ${workLocation}</p>
      <p><strong>City/Region:</strong> ${workLocationCity || 'Not specified'}</p>
      
      <h3>Additional Information</h3>
      <p><strong>NDA Requirements:</strong> ${ndaRequirements || 'None specified'}</p>
      <p><strong>Budget Range:</strong> ${budgetRange || 'Not specified'}</p>
      <p><strong>Additional Notes:</strong> ${additionalNotes || 'None'}</p>
    `,
    attachments: []
  };

  // Add NDA file if provided
  if (ndaFile) {
    mailOptions.attachments.push({
      filename: ndaFile.name,
      content: Buffer.from(await ndaFile.arrayBuffer())
    });
  }

  // Add other attachments if provided
  if (attachments) {
    mailOptions.attachments.push({
      filename: attachments.name,
      content: Buffer.from(await attachments.arrayBuffer())
    });
  }
  
  return sendMail(mailOptions);
};

/**
 * Send confirmation email to company
 * @param {string} to - Company email
 * @param {string} companyName - Company name
 * @param {string} contactPersonName - Contact person name
 * @param {string} projectTitle - Project title
 * @returns {Promise} - Resolves when email is sent
 */
export const sendCompanyProjectConfirmation = async (to, companyName, contactPersonName, projectTitle) => {
  const mailOptions = {
    to,
    subject: `Project Requirements Received - ${projectTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2f55d4;">Thank You for Your Project Submission</h2>
        <p>Dear ${contactPersonName},</p>
        <p>We have received your project requirements for <strong>${projectTitle}</strong> from ${companyName}.</p>
        <p>Our team will review the details and get back to you shortly to discuss how ChipMakersHub can assist with your project needs.</p>
        <p>If you have any immediate questions or would like to provide additional information, please contact us at contact@chipmakershub.com.</p>
        <p>Best regards,</p>
        <p>The ChipMakersHub Team</p>
      </div>
    `
  };
  
  return sendMail(mailOptions);
};

/**
 * Send freelancer application notification to admin
 * @param {Object} formData - Freelancer application form data
 * @returns {Promise} - Resolves when email is sent
 */
export const sendFreelancerApplication = async (formData) => {
  const { name, email, contact, expertiseDomain, yearsOfExperience, cv } = formData;
  
  const mailOptions = {
    to: 'contact@chipmakershub.com',
    subject: `New Freelancer Application: ${expertiseDomain}`,
    html: `
      <h2>New Freelancer Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact Number:</strong> ${contact}</p>
      <p><strong>Expertise/Domain:</strong> ${expertiseDomain}</p>
      <p><strong>Years of Experience:</strong> ${yearsOfExperience}</p>
    `,
    attachments: cv ? [{
      filename: cv.name,
      content: Buffer.from(await cv.arrayBuffer())
    }] : []
  };
  
  return sendMail(mailOptions);
};

/**
 * Send confirmation email to freelancer applicant
 * @param {string} to - Applicant email
 * @param {string} name - Applicant name
 * @returns {Promise} - Resolves when email is sent
 */
export const sendFreelancerConfirmation = async (to, name) => {
  const mailOptions = {
    to,
    subject: `Freelancer Application Received - ChipMakersHub`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2f55d4;">Thank You for Your Freelancer Application</h2>
        <p>Dear ${name},</p>
        <p>We have received your application to join our freelancer network at ChipMakersHub.</p>
        <p>Our team will review your expertise and experience, and we'll get back to you shortly if there's a good match for your skills.</p>
        <p>If you have any questions in the meantime, feel free to contact us at contact@chipmakershub.com.</p>
        <p>Best regards,</p>
        <p>The ChipMakersHub Team</p>
      </div>
    `
  };
  
  return sendMail(mailOptions);
}; 