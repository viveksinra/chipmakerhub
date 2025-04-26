import { sendCareerApplication, sendCareerConfirmation } from '@/utils/mailService';

export async function POST(request) {
    try {
        const formData = await request.formData();
        
        // Extract form fields
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const position = formData.get('position');
        const linkedin = formData.get('linkedin');
        const message = formData.get('message');
        const hearAbout = formData.get('hearAbout');
        const resume = formData.get('resume');

        // Create an object with all form data
        const applicationData = {
            name, email, phone, position, linkedin, message, hearAbout, resume
        };

        // Send notification email to admin
        await sendCareerApplication(applicationData);
        
        // Send confirmation email to applicant
        await sendCareerConfirmation(email, name, position);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error processing application:', error);
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
} 