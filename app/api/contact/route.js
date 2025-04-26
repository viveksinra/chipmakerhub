import { sendContactNotification, sendContactConfirmation } from '@/utils/mailService';

export async function POST(request) {
  try {
    // Parse request body
    const data = await request.json();
    
    // Extract form data
    const { name, email, subject, message, phone } = data;
    
    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Name, email, and message are required' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Send notification to admin
    await sendContactNotification({ name, email, subject, message, phone });
    
    // Send confirmation to user
    await sendContactConfirmation(email, name);
    
    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'An error occurred while processing your request' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
} 