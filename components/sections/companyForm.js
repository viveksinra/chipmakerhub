import { useState } from "react"

export default function CompanyForm() {
    const [form, setForm] = useState({
        companyName: '',
        contactPersonName: '',
        email: '',
        projectTitle: '',
        projectDescription: '',
        requiredSkills: {
            rtlDesign: false,
            functionalVerification: false,
            uvm: false,
            dft: false,
            physicalDesign: false,
            sta: false,
            ams: false,
            fpga: false,
            socIntegration: false,
            scripting: false,
            others: ''
        },
        projectDuration: '',
        engagementType: '',
        startDate: '',
        engineersNeeded: '',
        workLocation: '',
        workLocationCity: '',
        ndaRequirements: '',
        ndaFile: null,
        budgetRange: '',
        attachments: null,
        additionalNotes: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, files, checked } = e.target;
        
        if (name.startsWith('requiredSkills.')) {
            const skillName = name.split('.')[1];
            setForm(prev => ({
                ...prev,
                requiredSkills: {
                    ...prev.requiredSkills,
                    [skillName]: checked
                }
            }));
        } else {
            setForm(prev => ({
                ...prev,
                [name]: type === 'file' ? files[0] : 
                         type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        
        try {
            const formData = new FormData();
            
            // Append all non-nested form fields to FormData
            Object.entries(form).forEach(([key, value]) => {
                if (key !== 'requiredSkills' && value !== null) {
                    formData.append(key, value);
                }
            });
            
            // Append requiredSkills fields
            Object.entries(form.requiredSkills).forEach(([key, value]) => {
                formData.append(`requiredSkills.${key}`, value);
            });

            const response = await fetch('/api/company', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit project requirements');
            }

            setSubmitted(true);
        } catch (err) {
            setError(err.message || 'An error occurred while submitting your project requirements');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contentbox">
        {submitted ? (
            <div style={{ textAlign: 'center', color: '#2f55d4', fontWeight: 600, fontSize: 20 }}>
                Thank you for submitting your project requirements! Our team will review the details and get back to you soon.
            </div>
        ) : (
            <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                {error && (
                    <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
                        {error}
                    </div>
                )}
                <h4 className="mb-4">Project Requirement Submission Form</h4>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Company Name <span style={{ color: 'red' }}>*</span></label>
                        <input type="text" name="companyName" value={form.companyName} onChange={handleChange} placeholder="Your Company Name" required className="form-control" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Contact Person Name <span style={{ color: 'red' }}>*</span></label>
                        <input type="text" name="contactPersonName" value={form.contactPersonName} onChange={handleChange} placeholder="Primary point of contact" required className="form-control" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Email Address <span style={{ color: 'red' }}>*</span></label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="contact@company.com" required className="form-control" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Project Title</label>
                        <input type="text" name="projectTitle" value={form.projectTitle} onChange={handleChange} placeholder="Brief title for the project" className="form-control" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Project Description</label>
                        <textarea name="projectDescription" value={form.projectDescription} onChange={handleChange} placeholder="Describe project scope, goals, and technical context" className="form-control" rows={4} />
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label className="fw-bold mb-3">Required Skills / Domains <span style={{ color: 'red' }}>*</span></label>
                        <div className="row ps-2">
                            {[
                                { id: "rtlDesign", label: "RTL Design" },
                                { id: "functionalVerification", label: "Functional Verification" },
                                { id: "uvm", label: "UVM" },
                                { id: "dft", label: "DFT" },
                                { id: "physicalDesign", label: "Physical Design" },
                                { id: "sta", label: "STA" },
                                { id: "ams", label: "AMS" },
                                { id: "fpga", label: "FPGA" },
                                { id: "socIntegration", label: "SoC Integration" },
                                { id: "scripting", label: "Scripting (Python/TCL/Perl)" },
                                { id: "others", label: "Others" },
                            ].map((skill) => (
                                <div className="col-lg-4 col-md-6 mb-3" key={skill.id}>
                                    <div 
                                        className={`skill-box p-2 rounded ${form.requiredSkills[skill.id] ? 'selected' : ''}`}
                                        style={{
                                            background: form.requiredSkills[skill.id] ? '#e8efff' : '#f8f9fa',
                                            border: `1px solid ${form.requiredSkills[skill.id] ? '#2f55d4' : '#dee2e6'}`,
                                            borderRadius: '8px',
                                            transition: 'all 0.2s ease',
                                            cursor: 'pointer',
                                            boxShadow: form.requiredSkills[skill.id] ? '0 2px 5px rgba(47, 85, 212, 0.15)' : 'none',
                                            textAlign: 'center',
                                            paddingTop: '8px',
                                            paddingBottom: '8px'
                                        }}
                                        onClick={() => {
                                            const e = {
                                                target: {
                                                    name: `requiredSkills.${skill.id}`,
                                                    type: 'checkbox',
                                                    checked: !form.requiredSkills[skill.id]
                                                }
                                            };
                                            handleChange(e);
                                        }}
                                    >
                                        <label 
                                            htmlFor={skill.id}
                                            style={{ 
                                                fontWeight: form.requiredSkills[skill.id] ? '500' : 'normal',
                                                color: form.requiredSkills[skill.id] ? '#2f55d4' : '#495057',
                                                cursor: 'pointer',
                                                margin: 0
                                            }}
                                        >
                                            {skill.label}
                                        </label>
                                        <input 
                                            type="checkbox" 
                                            id={skill.id} 
                                            name={`requiredSkills.${skill.id}`} 
                                            checked={form.requiredSkills[skill.id]} 
                                            onChange={handleChange}
                                            style={{ display: 'none' }}
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className="col-lg-12 col-md-12 mt-2">
                                <label>Others (if any)</label>
                                <input 
                                    type="text" 
                                    name="requiredSkills.others" 
                                    value={form.requiredSkills.others} 
                                    onChange={handleChange} 
                                    placeholder="Any other required skills" 
                                    className="form-control"
                                    style={{
                                        border: '1px solid #dee2e6',
                                        borderRadius: '8px',
                                        padding: '10px 15px'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Project Duration <span style={{ color: 'red' }}>*</span></label>
                        <select name="projectDuration" value={form.projectDuration} onChange={handleChange} required className="form-control">
                            <option value="">Select Duration</option>
                            <option value="3 months">3 months</option>
                            <option value="6 months">6 months</option>
                            <option value="1 year">1 year</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="TBD">To Be Determined</option>
                        </select>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Engagement Type <span style={{ color: 'red' }}>*</span></label>
                        <select name="engagementType" value={form.engagementType} onChange={handleChange} required className="form-control">
                            <option value="">Select Type</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Milestone-Based">Milestone-Based</option>
                        </select>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Start Date <span style={{ color: 'red' }}>*</span></label>
                        <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required className="form-control" />
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Number of Engineers Needed <span style={{ color: 'red' }}>*</span></label>
                        <input type="number" name="engineersNeeded" value={form.engineersNeeded} onChange={handleChange} min="1" placeholder="1" required className="form-control" />
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Work Location <span style={{ color: 'red' }}>*</span></label>
                        <select name="workLocation" value={form.workLocation} onChange={handleChange} required className="form-control">
                            <option value="">Select Location Type</option>
                            <option value="Remote">Remote</option>
                            <option value="Onsite">Onsite</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>City/Region (Optional)</label>
                        <input type="text" name="workLocationCity" value={form.workLocationCity} onChange={handleChange} placeholder="e.g., San Jose, CA" className="form-control" />
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>NDA or Compliance Requirements</label>
                        <input type="text" name="ndaRequirements" value={form.ndaRequirements} onChange={handleChange} placeholder="Specify any compliance expectations" className="form-control" />
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Upload NDA (Optional)</label>
                        <input type="file" name="ndaFile" accept=".pdf,.doc,.docx" onChange={handleChange} className="form-control" />
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Budget Range (Optional)</label>
                        <input type="text" name="budgetRange" value={form.budgetRange} onChange={handleChange} placeholder="Expected monthly or project-based budget" className="form-control" />
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Attachments (Optional)</label>
                        <input type="file" name="attachments" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip" onChange={handleChange} className="form-control" />
                        <small className="text-muted">Upload any additional specs, block diagrams, or SOW docs.</small>
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Additional Notes</label>
                        <textarea name="additionalNotes" value={form.additionalNotes} onChange={handleChange} placeholder="Add any other info that would help us understand your needs" className="form-control" rows={3} />
                    </div>
                    
        
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-3">
                        <button type="submit" className="btn" disabled={isSubmitting} style={{ background: '#2f55d4', color: '#fff', padding: '10px 32px', borderRadius: 4, fontWeight: 600, fontSize: 18 }}>
                            {isSubmitting ? 'Submitting...' : 'Submit Requirements'}
                        </button>
                    </div>
                </div>
            </form>
        )}
    </div>
    )
}
