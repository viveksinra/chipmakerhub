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
        consent: false
    });
    const [submitted, setSubmitted] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the form submission, e.g., send to API or email
        console.log('Form submitted:', form);
        setSubmitted(true);
    };

    return (
        <div className="contentbox">
        {submitted ? (
            <div style={{ textAlign: 'center', color: '#2f55d4', fontWeight: 600, fontSize: 20 }}>
                Thank you for submitting your project requirements! Our team will review the details and get back to you soon.
            </div>
        ) : (
            <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
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
                        <label>Project Title <span style={{ color: 'red' }}>*</span></label>
                        <input type="text" name="projectTitle" value={form.projectTitle} onChange={handleChange} placeholder="Brief title for the project" required className="form-control" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Project Description <span style={{ color: 'red' }}>*</span></label>
                        <textarea name="projectDescription" value={form.projectDescription} onChange={handleChange} placeholder="Describe project scope, goals, and technical context" required className="form-control" rows={4} />
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Required Skills / Domains <span style={{ color: 'red' }}>*</span></label>
                        <div className="row ps-2">
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="rtlDesign" name="requiredSkills.rtlDesign" checked={form.requiredSkills.rtlDesign} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="rtlDesign">RTL Design</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="functionalVerification" name="requiredSkills.functionalVerification" checked={form.requiredSkills.functionalVerification} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="functionalVerification">Functional Verification</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="uvm" name="requiredSkills.uvm" checked={form.requiredSkills.uvm} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="uvm">UVM</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="dft" name="requiredSkills.dft" checked={form.requiredSkills.dft} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="dft">DFT</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="physicalDesign" name="requiredSkills.physicalDesign" checked={form.requiredSkills.physicalDesign} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="physicalDesign">Physical Design</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="sta" name="requiredSkills.sta" checked={form.requiredSkills.sta} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="sta">STA</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="ams" name="requiredSkills.ams" checked={form.requiredSkills.ams} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="ams">AMS</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="fpga" name="requiredSkills.fpga" checked={form.requiredSkills.fpga} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="fpga">FPGA</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="socIntegration" name="requiredSkills.socIntegration" checked={form.requiredSkills.socIntegration} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="socIntegration">SoC Integration</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="scripting" name="requiredSkills.scripting" checked={form.requiredSkills.scripting} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="scripting">Scripting (Python/TCL/Perl)</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 mt-2">
                                <label>Others (if any)</label>
                                <input type="text" name="requiredSkills.others" value={form.requiredSkills.others} onChange={handleChange} placeholder="Any other required skills" className="form-control" />
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
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="consent" name="consent" checked={form.consent} onChange={handleChange} required />
                            <label className="form-check-label" htmlFor="consent">
                                I agree to ChipMakersHub's terms of service <span style={{ color: 'red' }}>*</span>
                            </label>
                        </div>
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-3">
                        <button type="submit" className="btn" disabled={!form.consent} style={{ background: '#2f55d4', color: '#fff', padding: '10px 32px', borderRadius: 4, fontWeight: 600, fontSize: 18 }}>
                            Submit Requirements
                        </button>
                    </div>
                </div>
            </form>
        )}
    </div>
    )
}
