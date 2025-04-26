import { sendCompanyProjectNotification, sendCompanyProjectConfirmation } from '@/utils/mailService';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const companyName = formData.get('companyName');
    const contactPersonName = formData.get('contactPersonName');
    const email = formData.get('email');
    const projectTitle = formData.get('projectTitle');
    const projectDescription = formData.get('projectDescription');
    const projectDuration = formData.get('projectDuration');
    const engagementType = formData.get('engagementType');
    const startDate = formData.get('startDate');
    const engineersNeeded = formData.get('engineersNeeded');
    const workLocation = formData.get('workLocation');
    const workLocationCity = formData.get('workLocationCity');
    const ndaRequirements = formData.get('ndaRequirements');
    const ndaFile = formData.get('ndaFile');
    const budgetRange = formData.get('budgetRange');
    const attachments = formData.get('attachments');
    const additionalNotes = formData.get('additionalNotes');
    
    // Extract all skill checkboxes
    const requiredSkills = {
      rtlDesign: formData.get('requiredSkills.rtlDesign') === 'true',
      functionalVerification: formData.get('requiredSkills.functionalVerification') === 'true',
      uvm: formData.get('requiredSkills.uvm') === 'true',
      dft: formData.get('requiredSkills.dft') === 'true',
      physicalDesign: formData.get('requiredSkills.physicalDesign') === 'true',
      sta: formData.get('requiredSkills.sta') === 'true',
      ams: formData.get('requiredSkills.ams') === 'true',
      fpga: formData.get('requiredSkills.fpga') === 'true',
      socIntegration: formData.get('requiredSkills.socIntegration') === 'true',
      scripting: formData.get('requiredSkills.scripting') === 'true',
      others: formData.get('requiredSkills.others') || ''
    };

    // Create an object with all form data
    const projectData = {
      companyName,
      contactPersonName,
      email,
      projectTitle,
      projectDescription,
      requiredSkills,
      projectDuration,
      engagementType,
      startDate,
      engineersNeeded,
      workLocation,
      workLocationCity,
      ndaRequirements,
      ndaFile,
      budgetRange,
      attachments,
      additionalNotes
    };

    // Send notification email to admin
    await sendCompanyProjectNotification(projectData);
    
    // Send confirmation email to company
    await sendCompanyProjectConfirmation(email, companyName, contactPersonName, projectTitle);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error processing project requirement:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 