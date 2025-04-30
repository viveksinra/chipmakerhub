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

// Company information to include in all emails
const companyInfo = {
  name: 'ChipMakersHub',
  logo: '/assets/images/logo/ChipMakersHub.png', // Local path
  website: 'https://chipmakershub.com',
  email: 'contact@chipmakershub.com',
};

// Social media links
const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/chipmakershub/', icon: '&#xf08c;' },
  { name: 'Instagram', url: 'https://www.instagram.com/chipmakershub?igsh=MWU4cXFncmx3d2ttYg==', icon: '&#xf16d;' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/16MfwxpGA4/', icon: '&#xf09a;' },
  { name: 'X', url: 'https://x.com/chipmakershub?t=wr4ulZeX_w4P5cSrDHAsiA&s=09', icon: '&#xf099;' }
];

// Enhanced modern email template parts
const emailHeader = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${companyInfo.name}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    body { font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    .social-icon {
      display: inline-block;
      margin: 0 8px;
      width: 36px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      background-color: #2f55d4;
      color: white !important;
      border-radius: 50%;
      font-size: 18px;
      text-decoration: none;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; background-color: #f9f9f9;">
  <div style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
    <!-- Header with logo -->
    <div style="padding: 25px 0; text-align: center; background-color: #2564eb;">
      <img src="${companyInfo.website}/assets/images/logo/ChipMakersHubWhite.png" alt="${companyInfo.name}" style="max-width: 220px; height: auto;" />
    </div>
    <!-- Content Area -->
    <div style="padding: 30px 40px; line-height: 1.6;">
`;

const emailFooter = `
    </div>
    <!-- Company Info Section -->
    <div style="background-color: #f5f7fd; padding: 25px 40px; border-top: 1px solid #e6e9f0;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <h3 style="margin: 0 0 15px; color: #2f55d4; font-size: 18px; font-weight: 600;">${companyInfo.name}</h3>
            <p style="margin: 4px 0; color: #555;">
              <a href="mailto:${companyInfo.email}" style="color: #2f55d4; text-decoration: none; font-weight: 500;">${companyInfo.email}</a>
            </p>
          
            <p style="margin: 4px 0; color: #555;">
              <a href="${companyInfo.website}" style="color: #2f55d4; text-decoration: none; font-weight: 500;">${companyInfo.website}</a>
            </p>
          </td>
        </tr>
      </table>
    </div>
    
    <!-- Social Links Section -->
    <div style="background-color: #ffffff; padding: 20px; text-align: center; border-top: 1px solid #e6e9f0;">
      <p style="margin: 0 0 15px; font-size: 15px; color: #555; font-weight: 600;">Connect with us</p>
      <div>
        ${socialLinks.map(social => 
          `<a href="${social.url}" target="_blank" class="social-icon" title="${social.name}" style="display: inline-block; margin: 0 8px; width: 36px; height: 36px; line-height: 36px; text-align: center; background-color: #2f55d4; color: white !important; border-radius: 50%; font-size: 18px; text-decoration: none;">
            <i class="fab fa-${social.name.toLowerCase()}"></i>
          </a>`
        ).join('')}
      </div>
      <p style="margin-top: 30px; font-size: 12px; color: #888;">
        This email was sent from an automated system. Please do not reply to this message.
      </p>
    </div>
  </div>
</body>
</html>
`;

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
      mailOptions.from = `"${companyInfo.name}" <${companyInfo.email}>`;
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
    html: emailHeader + messageBody + emailFooter
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
    to: companyInfo.email,
    subject: `New Career Application: ${position}`,
    html: `
      ${emailHeader}
      <div style="padding: 5px 0 20px; border-bottom: 2px solid #f0f4ff;">
        <h1 style="color: #2f55d4; font-size: 24px; margin: 0 0 12px;">New Career Application</h1>
        <p style="color: #666; font-size: 16px; margin: 0;">A new candidate has applied for the ${position} position.</p>
      </div>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 12px 10px; width: 30%; font-weight: 600; color: #333;">Applicant Name:</td>
          <td style="padding: 12px 10px; color: #555;">${name}</td>
        </tr>
        <tr style="background-color: #f9fafd;">
          <td style="padding: 12px 10px; width: 30%; font-weight: 600; color: #333;">Email Address:</td>
          <td style="padding: 12px 10px; color: #555;"><a href="mailto:${email}" style="color: #2f55d4; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 12px 10px; width: 30%; font-weight: 600; color: #333;">Phone Number:</td>
          <td style="padding: 12px 10px; color: #555;">${phone || 'Not provided'}</td>
        </tr>
        <tr style="background-color: #f9fafd;">
          <td style="padding: 12px 10px; width: 30%; font-weight: 600; color: #333;">Position:</td>
          <td style="padding: 12px 10px; color: #555;">${position}</td>
        </tr>
        <tr>
          <td style="padding: 12px 10px; width: 30%; font-weight: 600; color: #333;">LinkedIn:</td>
          <td style="padding: 12px 10px; color: #555;">${linkedin ? `<a href="${linkedin}" style="color: #2f55d4; text-decoration: none;">View Profile</a>` : 'Not provided'}</td>
        </tr>
        <tr style="background-color: #f9fafd;">
          <td style="padding: 12px 10px; width: 30%; font-weight: 600; color: #333;">Source:</td>
          <td style="padding: 12px 10px; color: #555;">${hearAbout || 'Not specified'}</td>
        </tr>
      </table>
      
      <div style="margin-top: 25px; background-color: #f9fafd; padding: 20px; border-radius: 6px;">
        <h3 style="color: #333; margin: 0 0 15px; font-size: 18px;">Applicant Message</h3>
        <p style="margin: 0; color: #555; line-height: 1.6;">${message || 'No message provided'}</p>
      </div>
      
      <div style="margin-top: 25px; text-align: center;">
        ${resume ? '<p style="margin: 0; color: #555;"><i>✅ A resume file was attached to this application</i></p>' : '<p style="margin: 0; color: #ff5630;"><i>⚠️ No resume was attached to this application</i></p>'}
      </div>
      ${emailFooter}
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
  const messageBody = `
    <div style="text-align: center; padding-bottom: 25px;">
      <h1 style="color: #2f55d4; font-size: 28px; margin: 0 0 15px;">Application Received</h1>
      <div style="display: inline-block; background-color: #eef2ff; border-radius: 50%; width: 80px; height: 80px; line-height: 80px; margin-bottom: 20px;">
        <span style="font-size: 38px;">✓</span>
      </div>
    </div>
    
    <div style="background-color: #f9fafd; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
      <p style="margin: 0 0 15px; font-size: 17px;">Dear <strong>${name}</strong>,</p>
      <p style="margin: 0 0 15px; font-size: 16px; color: #444; line-height: 1.7;">
        Thank you for applying for the <strong style="color: #2f55d4;">${position}</strong> position at ${companyInfo.name}. We've received your application and appreciate your interest in joining our team.
      </p>
      <p style="margin: 0 0 15px; font-size: 16px; color: #444; line-height: 1.7;">
        Our hiring team will review your application carefully and will be in touch if your qualifications match our requirements for the role.
      </p>
      <p style="margin: 0; font-size: 16px; color: #444; line-height: 1.7;">
        In the meantime, feel free to visit our <a href="${companyInfo.website}" style="color: #2f55d4; text-decoration: none; font-weight: 500;">website</a> to learn more about our company and what we do in the semiconductor industry.
      </p>
    </div>
    
    <div style="text-align: center; margin-top: 30px;">
      <p style="margin: 0 0 8px; color: #555; font-size: 16px;">Questions about your application?</p>
      <a href="mailto:${companyInfo.email}" style="display: inline-block; padding: 10px 24px; background-color: #2f55d4; color: white; text-decoration: none; border-radius: 5px; font-weight: 500; font-size: 15px;">Contact Us</a>
    </div>
  `;
  
  const mailOptions = {
    to,
    subject: `Application Received - ${position} at ${companyInfo.name}`,
    html: emailHeader + messageBody + emailFooter
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
    to: companyInfo.email,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      ${emailHeader}
      <div style="padding: 5px 0 20px; border-bottom: 2px solid #f0f4ff;">
        <h1 style="color: #2f55d4; font-size: 24px; margin: 0 0 12px;">New Contact Form Submission</h1>
        <p style="color: #666; font-size: 16px; margin: 0;">A new message has been received through the contact form.</p>
      </div>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 12px 10px; width: 30%; font-weight: 600; color: #333;">Name:</td>
          <td style="padding: 12px 10px; color: #555;">${name}</td>
        </tr>
        <tr style="background-color: #f9fafd;">
          <td style="padding: 12px 10px; width: 30%; font-weight: 600; color: #333;">Email Address:</td>
          <td style="padding: 12px 10px; color: #555;"><a href="mailto:${email}" style="color: #2f55d4; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 12px 10px; width: 30%; font-weight: 600; color: #333;">Phone Number:</td>
          <td style="padding: 12px 10px; color: #555;">${phone || 'Not provided'}</td>
        </tr>
        <tr style="background-color: #f9fafd;">
          <td style="padding: 12px 10px; width: 30%; font-weight: 600; color: #333;">Subject:</td>
          <td style="padding: 12px 10px; color: #555;">${subject}</td>
        </tr>
      </table>
      
      <div style="margin-top: 25px; background-color: #f9fafd; padding: 20px; border-radius: 6px;">
        <h3 style="color: #333; margin: 0 0 15px; font-size: 18px;">Message</h3>
        <p style="margin: 0; color: #555; line-height: 1.6;">${message}</p>
      </div>
      ${emailFooter}
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
  const messageBody = `
    <div style="text-align: center; padding-bottom: 25px;">
      <h1 style="color: #2f55d4; font-size: 28px; margin: 0 0 15px;">Message Received</h1>
      <div style="display: inline-block; background-color: #eef2ff; border-radius: 50%; width: 80px; height: 80px; line-height: 80px; margin-bottom: 20px;">
        <span style="font-size: 38px;">✓</span>
      </div>
    </div>
    
    <div style="background-color: #f9fafd; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
      <p style="margin: 0 0 15px; font-size: 17px;">Dear <strong>${name}</strong>,</p>
      <p style="margin: 0 0 15px; font-size: 16px; color: #444; line-height: 1.7;">
        Thank you for reaching out to ${companyInfo.name}. We've received your message and a member of our team will get back to you as soon as possible.
      </p>
      <p style="margin: 0 0 15px; font-size: 16px; color: #444; line-height: 1.7;">
        At ${companyInfo.name}, we connect VLSI talent with opportunities in the semiconductor industry. Our platform helps engineers and companies collaborate on cutting-edge chip design projects.
      </p>
      <p style="margin: 0; font-size: 16px; color: #444; line-height: 1.7;">
        In the meantime, feel free to explore our <a href="${companyInfo.website}" style="color: #2f55d4; text-decoration: none; font-weight: 500;">website</a> to learn more about our services.
      </p>
    </div>
    

  `;
  
  const mailOptions = {
    to,
    subject: `Thank You for Contacting ${companyInfo.name}`,
    html: emailHeader + messageBody + emailFooter
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
      return `<span style="display: inline-block; background-color: #eef2ff; color: #2f55d4; padding: 5px 12px; margin: 4px; border-radius: 20px; font-size: 14px;">${formatted}</span>`;
    });
  
  if (requiredSkills.others) {
    skillsList.push(`<span style="display: inline-block; background-color: #eef2ff; color: #2f55d4; padding: 5px 12px; margin: 4px; border-radius: 20px; font-size: 14px;">Others: ${requiredSkills.others}</span>`);
  }
  
  const skillsHtml = skillsList.length > 0 
    ? `<div style="margin-top: 10px;">${skillsList.join('')}</div>` 
    : '<p style="margin: 0; color: #888; font-style: italic;">No specific skills selected</p>';
  
  const mailOptions = {
    to: companyInfo.email,
    subject: `New Project Requirement: ${projectTitle}`,
    html: `
      ${emailHeader}
      <div style="padding: 5px 0 20px; border-bottom: 2px solid #f0f4ff;">
        <h1 style="color: #2f55d4; font-size: 24px; margin: 0 0 12px;">New Project Requirement</h1>
        <p style="color: #666; font-size: 16px; margin: 0;">${companyName} has submitted a new project requirement.</p>
      </div>
      
      <div style="background-color: #f5f7fd; border-radius: 8px; padding: 20px; margin: 25px 0 15px;">
        <h2 style="color: #2f55d4; font-size: 20px; margin: 0 0 15px;">Company Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 10px; width: 40%; font-weight: 600; color: #333;">Company Name:</td>
            <td style="padding: 8px 10px; color: #555;">${companyName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 10px; width: 40%; font-weight: 600; color: #333;">Contact Person:</td>
            <td style="padding: 8px 10px; color: #555;">${contactPersonName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 10px; width: 40%; font-weight: 600; color: #333;">Email:</td>
            <td style="padding: 8px 10px; color: #555;"><a href="mailto:${email}" style="color: #2f55d4; text-decoration: none;">${email}</a></td>
          </tr>
        </table>
      </div>
      
      <div style="margin: 25px 0; border-radius: 8px; border: 1px solid #e6e9f0; padding: 20px;">
        <h2 style="color: #2f55d4; font-size: 20px; margin: 0 0 15px;">Project Details</h2>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #333; margin: 0 0 10px; font-size: 18px;">Project Title</h3>
          <p style="margin: 0; padding: 12px 16px; background-color: #f9fafd; border-radius: 6px; color: #444; font-size: 16px;">${projectTitle}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #333; margin: 0 0 10px; font-size: 18px;">Project Description</h3>
          <div style="padding: 12px 16px; background-color: #f9fafd; border-radius: 6px; color: #444; font-size: 16px; line-height: 1.6;">
            ${projectDescription}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #333; margin: 0 0 10px; font-size: 18px;">Required Skills</h3>
          ${skillsHtml}
        </div>
        
        <h3 style="color: #333; margin: 20px 0 15px; font-size: 18px;">Engagement Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
          <tr>
            <td style="padding: 8px 10px; width: 40%; font-weight: 600; color: #333;">Project Duration:</td>
            <td style="padding: 8px 10px; color: #555;">${projectDuration}</td>
          </tr>
          <tr style="background-color: #f9fafd;">
            <td style="padding: 8px 10px; width: 40%; font-weight: 600; color: #333;">Engagement Type:</td>
            <td style="padding: 8px 10px; color: #555;">${engagementType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 10px; width: 40%; font-weight: 600; color: #333;">Start Date:</td>
            <td style="padding: 8px 10px; color: #555;">${startDate}</td>
          </tr>
          <tr style="background-color: #f9fafd;">
            <td style="padding: 8px 10px; width: 40%; font-weight: 600; color: #333;">Engineers Needed:</td>
            <td style="padding: 8px 10px; color: #555;">${engineersNeeded}</td>
          </tr>
          <tr>
            <td style="padding: 8px 10px; width: 40%; font-weight: 600; color: #333;">Work Location:</td>
            <td style="padding: 8px 10px; color: #555;">${workLocation}</td>
          </tr>
          <tr style="background-color: #f9fafd;">
            <td style="padding: 8px 10px; width: 40%; font-weight: 600; color: #333;">City/Region:</td>
            <td style="padding: 8px 10px; color: #555;">${workLocationCity || 'Not specified'}</td>
          </tr>
        </table>
        
        <h3 style="color: #333; margin: 20px 0 15px; font-size: 18px;">Additional Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 10px; width: 40%; font-weight: 600; color: #333;">NDA Requirements:</td>
            <td style="padding: 8px 10px; color: #555;">${ndaRequirements || 'None specified'}</td>
          </tr>
          <tr style="background-color: #f9fafd;">
            <td style="padding: 8px 10px; width: 40%; font-weight: 600; color: #333;">Budget Range:</td>
            <td style="padding: 8px 10px; color: #555;">${budgetRange || 'Not specified'}</td>
          </tr>
        </table>
      </div>
      
      ${additionalNotes ? `
      <div style="margin: 25px 0; background-color: #f9fafd; padding: 20px; border-radius: 6px;">
        <h3 style="color: #333; margin: 0 0 15px; font-size: 18px;">Additional Notes</h3>
        <p style="margin: 0; color: #555; line-height: 1.6;">${additionalNotes}</p>
      </div>
      ` : ''}
      
      <div style="margin-top: 25px; text-align: center;">
        ${ndaFile || attachments ? '<p style="margin: 0; color: #555;"><i>✅ Files have been attached to this submission</i></p>' : '<p style="margin: 0; color: #888;"><i>No files were attached to this submission</i></p>'}
      </div>
      ${emailFooter}
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
  const messageBody = `
    <div style="text-align: center; padding-bottom: 25px;">
      <h1 style="color: #2f55d4; font-size: 28px; margin: 0 0 15px;">Project Submission Received</h1>
      <div style="display: inline-block; background-color: #eef2ff; border-radius: 50%; width: 80px; height: 80px; line-height: 80px; margin-bottom: 20px;">
        <span style="font-size: 38px;">✓</span>
      </div>
    </div>
    
    <div style="background-color: #f9fafd; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
      <p style="margin: 0 0 15px; font-size: 17px;">Dear <strong>${contactPersonName}</strong>,</p>
      <p style="margin: 0 0 15px; font-size: 16px; color: #444; line-height: 1.7;">
        Thank you for submitting your project requirements for <strong style="color: #2f55d4;">${projectTitle}</strong> from ${companyName}. We've received your submission and are excited about the opportunity to connect you with the right talent.
      </p>
      <p style="margin: 0 0 15px; font-size: 16px; color: #444; line-height: 1.7;">
        At ${companyInfo.name}, we specialize in connecting companies with top VLSI talent for semiconductor design projects. Our network includes experienced engineers specialized in various aspects of chip design and verification.
      </p>
      <p style="margin: 0; font-size: 16px; color: #444; line-height: 1.7;">
        Our team will review the details and get back to you shortly to discuss how we can assist with your project needs. We're committed to finding the best talent match for your requirements.
      </p>
    </div>
    
    <div style="margin-top: 20px; padding: 20px; background-color: #fff; border: 1px solid #e6e9f0; border-radius: 8px; text-align: center;">
      <h3 style="color: #2f55d4; margin: 0 0 15px; font-size: 18px;">Have Questions or Need to Update Your Requirements?</h3>
      <p style="margin: 0 0 15px; color: #555; font-size: 16px;">Our team is ready to assist you with any questions about your project submission.</p>
      <a href="mailto:${companyInfo.email}" style="display: inline-block; padding: 10px 24px; background-color: #2f55d4; color: white; text-decoration: none; border-radius: 5px; font-weight: 500; font-size: 15px;">Contact Us</a>
    </div>
  `;
  
  const mailOptions = {
    to,
    subject: `Project Requirements Received - ${projectTitle}`,
    html: emailHeader + messageBody + emailFooter
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
    to: companyInfo.email,
    subject: `New Freelancer Application: ${expertiseDomain}`,
    html: `
      ${emailHeader}
      <div style="padding: 5px 0 20px; border-bottom: 2px solid #f0f4ff;">
        <h1 style="color: #2f55d4; font-size: 24px; margin: 0 0 12px;">New Freelancer Application</h1>
        <p style="color: #666; font-size: 16px; margin: 0;">A new freelancer has applied to join the ${companyInfo.name} network.</p>
      </div>
      
      <div style="background-color: #f5f7fd; border-radius: 8px; padding: 25px; margin: 25px 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; width: 35%; font-weight: 600; color: #333;">Name:</td>
            <td style="padding: 10px; color: #555;">${name}</td>
          </tr>
          <tr style="background-color: #ffffff;">
            <td style="padding: 10px; width: 35%; font-weight: 600; color: #333;">Email Address:</td>
            <td style="padding: 10px; color: #555;"><a href="mailto:${email}" style="color: #2f55d4; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; width: 35%; font-weight: 600; color: #333;">Contact Number:</td>
            <td style="padding: 10px; color: #555;"><a href="tel:${contact}" style="color: #2f55d4; text-decoration: none;">${contact}</a></td>
          </tr>
          <tr style="background-color: #ffffff;">
            <td style="padding: 10px; width: 35%; font-weight: 600; color: #333;">Expertise/Domain:</td>
            <td style="padding: 10px; color: #555;">
              <span style="display: inline-block; background-color: #eef2ff; color: #2f55d4; padding: 5px 12px; border-radius: 20px; font-size: 14px;">${expertiseDomain}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; width: 35%; font-weight: 600; color: #333;">Years of Experience:</td>
            <td style="padding: 10px; color: #555;">${yearsOfExperience}</td>
          </tr>
        </table>
      </div>
      
      <div style="margin-top: 25px; text-align: center;">
        ${cv ? '<p style="margin: 0; color: #555;"><i>✅ A CV/resume file was attached to this application</i></p>' : '<p style="margin: 0; color: #ff5630;"><i>⚠️ No CV/resume was attached to this application</i></p>'}
      </div>
      ${emailFooter}
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
  const messageBody = `
    <div style="text-align: center; padding-bottom: 25px;">
      <h1 style="color: #2f55d4; font-size: 28px; margin: 0 0 15px;">Application Received</h1>
      <div style="display: inline-block; background-color: #eef2ff; border-radius: 50%; width: 80px; height: 80px; line-height: 80px; margin-bottom: 20px;">
        <span style="font-size: 38px;">✓</span>
      </div>
    </div>
    
    <div style="background-color: #f9fafd; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
      <p style="margin: 0 0 15px; font-size: 17px;">Dear <strong>${name}</strong>,</p>
      <p style="margin: 0 0 15px; font-size: 16px; color: #444; line-height: 1.7;">
        Thank you for applying to join our freelancer network at ${companyInfo.name}. We've received your application and are excited about the possibility of working with you.
      </p>
      <p style="margin: 0 0 15px; font-size: 16px; color: #444; line-height: 1.7;">
        ${companyInfo.name} is a leading platform connecting VLSI professionals with semiconductor companies worldwide. We help talented engineers find exciting projects and help companies access specialized expertise for their chip design needs.
      </p>
      <p style="margin: 0; font-size: 16px; color: #444; line-height: 1.7;">
        Our team will review your expertise and experience, and we'll get back to you shortly about potential opportunities that match your skill set.
      </p>
    </div>
    
    <div style="margin: 30px 0; text-align: center;">
      <div style="display: inline-block; max-width: 500px;">
        <h3 style="color: #2f55d4; margin: 0 0 15px; font-size: 18px;">What Happens Next?</h3>
        <div style="display: flex; align-items: flex-start; margin-bottom: 15px; text-align: left;">
          <div style="background-color: #2f55d4; color: white; width: 24px; height: 24px; border-radius: 50%; text-align: center; line-height: 24px; margin-right: 15px; flex-shrink: 0;">1</div>
          <div>
            <p style="margin: 0; color: #555; font-size: 15px;">Our team reviews your application and expertise</p>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; margin-bottom: 15px; text-align: left;">
          <div style="background-color: #2f55d4; color: white; width: 24px; height: 24px; border-radius: 50%; text-align: center; line-height: 24px; margin-right: 15px; flex-shrink: 0;">2</div>
          <div>
            <p style="margin: 0; color: #555; font-size: 15px;">We match you with relevant project opportunities</p>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; text-align: left;">
          <div style="background-color: #2f55d4; color: white; width: 24px; height: 24px; border-radius: 50%; text-align: center; line-height: 24px; margin-right: 15px; flex-shrink: 0;">3</div>
          <div>
            <p style="margin: 0; color: #555; font-size: 15px;">We contact you to discuss specific projects and next steps</p>
          </div>
        </div>
      </div>
    </div>
    
    <div style="text-align: center; margin-top: 20px;">
      <p style="margin: 0 0 8px; color: #555; font-size: 16px;">Questions about your application?</p>
      <a href="mailto:${companyInfo.email}" style="display: inline-block; padding: 10px 24px; background-color: #2f55d4; color: white; text-decoration: none; border-radius: 5px; font-weight: 500; font-size: 15px;">Contact Us</a>
    </div>
  `;
  
  const mailOptions = {
    to,
    subject: `Freelancer Application Received - ${companyInfo.name}`,
    html: emailHeader + messageBody + emailFooter
  };
  
  return sendMail(mailOptions);
};