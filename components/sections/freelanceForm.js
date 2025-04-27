import { useState } from "react"

export default function FreelanceForm() {
    const [form, setForm] = useState({
        name: '',
        expertiseDomain: '',
        yearsOfExperience: '',
        contact: '',
        email: '',
        cv: null,
        consent: false
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, files, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : 
                     type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        
        try {
            const formData = new FormData();
            
            // Append all form fields to FormData
            Object.entries(form).forEach(([key, value]) => {
                if (value !== null) {
                    formData.append(key, value);
                }
            });

            const response = await fetch('/api/freelancer', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit your application');
            }

            setSubmitted(true);
        } catch (err) {
            setError(err.message || 'An error occurred while submitting your application');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contentbox">
        {submitted ? (
            <div style={{ textAlign: 'center', color: '#2f55d4', fontWeight: 600, fontSize: 20 }}>
                Thank you for submitting your application! Our team will review your details and get back to you soon.
            </div>
        ) : (
            <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                {error && (
                    <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
                        {error}
                    </div>
                )}
                <h4 className="mb-4">Freelancer Application Form</h4>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Name <span style={{ color: 'red' }}>*</span></label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Full Name" required className="form-control" />
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Expertise/Domain <span style={{ color: 'red' }}>*</span></label>
                        <input type="text" name="expertiseDomain" value={form.expertiseDomain} onChange={handleChange} placeholder="e.g., RTL Design, Physical Design, Verification" required className="form-control" />
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Years of Experience <span style={{ color: 'red' }}>*</span></label>
                        <input type="number" name="yearsOfExperience" value={form.yearsOfExperience} onChange={handleChange} min="0" placeholder="e.g., 5" required className="form-control" />
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Contact Number <span style={{ color: 'red' }}>*</span></label>
                        <input type="tel" name="contact" value={form.contact} onChange={handleChange} placeholder="Your Phone Number" required className="form-control" />
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Email Address <span style={{ color: 'red' }}>*</span></label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your.email@example.com" required className="form-control" />
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Upload CV/Resume <span style={{ color: 'red' }}>*</span></label>
                        <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleChange} required className="form-control" />
                        <small className="text-muted">Upload your CV in PDF or Word format (Max 5MB)</small>
                    </div>
                    
            
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-3">
                        <button type="submit" className="btn" disabled={!form.consent || isSubmitting} style={{ background: '#2f55d4', color: '#fff', padding: '10px 32px', borderRadius: 4, fontWeight: 600, fontSize: 18 }}>
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </div>
                </div>
            </form>
        )}
    </div>
    )
}
