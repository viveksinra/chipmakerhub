import { sendFreelancerApplication, sendFreelancerConfirmation } from '@/utils/mailService';

export async function POST(request) {
    try {
        const formData = await request.formData();
        
        // Extract form fields
        const name = formData.get('name');
        const email = formData.get('email');
        const contact = formData.get('contact');
        const expertiseDomain = formData.get('expertiseDomain');
        const yearsOfExperience = formData.get('yearsOfExperience');
        const cv = formData.get('cv');
        const consent = formData.get('consent') === 'true';

        // Validate required fields
        if (!name || !email || !contact || !expertiseDomain || !yearsOfExperience || !cv || !consent) {
            return new Response(JSON.stringify({ 
                success: false, 
                error: 'All required fields must be provided' 
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        // Create an object with all form data
        const freelancerData = {
            name, 
            email, 
            contact, 
            expertiseDomain, 
            yearsOfExperience, 
            cv
        };

        // Send notification email to admin
        await sendFreelancerApplication(freelancerData);
        
        // Send confirmation email to applicant
        await sendFreelancerConfirmation(email, name);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error processing freelancer application:', error);
        return new Response(JSON.stringify({ 
            success: false, 
            error: error.message || 'An error occurred while processing your application' 
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
} 