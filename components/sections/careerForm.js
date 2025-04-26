import { useState } from "react"

export default function CareerForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        linkedin: '',
        resume: null,
        message: '',
        hearAbout: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            const formData = new FormData();
            
            // Append all form fields to FormData
            Object.entries(form).forEach(([key, value]) => {
                if (value !== null) {
                    formData.append(key, value);
                }
            });

            const response = await fetch('/api/career', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit application');
            }

            setSubmitted(true);
        } catch (err) {
            setError(err.message || 'An error occurred while submitting your application');
        }
    };

    return (
        <div className="contentbox">
        {submitted ? (
            <div style={{ textAlign: 'center', color: '#2f55d4', fontWeight: 600, fontSize: 20 }}>
                Thank you for applying! We will review your application and get back to you soon.
            </div>
        ) : (
            <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                {error && (
                    <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
                        {error}
                    </div>
                )}
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Name:</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Email:</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Phone Number:</label>
                        <input type="text" name="phone" value={form.phone} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Position Applying For: (Sales & Marketing Engineer / Intern)</label>
                        <select name="position" value={form.position} onChange={handleChange} required className="form-control">
                            <option value="">Select Position</option>
                            <option value="Sales & Marketing Engineer">Sales & Marketing Engineer</option>
                            <option value="Intern">Intern</option>
                        </select>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>LinkedIn Profile (optional):</label>
                        <input type="url" name="linkedin" value={form.linkedin} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Upload Resume/CV:</label>
                        <input 
                            type="file" 
                            name="resume" 
                            accept=".pdf,.doc,.docx" 
                            onChange={handleChange} 
                            required 
                            className="form-control" 
                        />
                        {form.resume && (
                            <small className="text-muted">
                                Selected file: {form.resume.name}
                            </small>
                        )}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Cover Letter / Message: (Tell us why you're interested and how you can contribute)</label>
                        <textarea name="message" value={form.message} onChange={handleChange} required className="form-control" rows={4} />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>How did you hear about us?</label>
                        <input type="text" name="hearAbout" value={form.hearAbout} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-4">
                        <button type="submit" className="btn" style={{ background: '#2f55d4', color: '#fff', padding: '10px 32px', borderRadius: 4, fontWeight: 600, fontSize: 18 }}>
                            Submit Application
                        </button>
                    </div>
                </div>
            </form>
        )}
    </div>
    )
}
