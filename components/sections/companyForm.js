import { useState, useEffect } from "react"
import dynamic from 'next/dynamic'

// Dynamically import MUI components
const Dialog = dynamic(() => import('@mui/material/Dialog'), { ssr: false })
const DialogTitle = dynamic(() => import('@mui/material/DialogTitle'), { ssr: false })
const DialogContent = dynamic(() => import('@mui/material/DialogContent'), { ssr: false })
const DialogActions = dynamic(() => import('@mui/material/DialogActions'), { ssr: false })
const Button = dynamic(() => import('@mui/material/Button'), { ssr: false })
const CircularProgress = dynamic(() => import('@mui/material/CircularProgress'), { ssr: false })
const Backdrop = dynamic(() => import('@mui/material/Backdrop'), { ssr: false })

// Loading Overlay Component
const LoadingOverlay = ({ isVisible }) => {
    if (!isVisible) return null;
    
    return (
        <Backdrop
            sx={{ 
                color: '#fff', 
                zIndex: 9999,
                backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}
            open={isVisible}
        >
            <div className="spinner-container">
                <CircularProgress color="primary" />
                <p style={{ color: '#0496de', marginTop: '15px' }}>Submitting your project requirements...</p>
            </div>
        </Backdrop>
    );
};

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState("");
    const [muiLoaded, setMuiLoaded] = useState(false);
    
    // Set MUI loaded after hydration to avoid SSR issues
    useEffect(() => {
        setMuiLoaded(true);
    }, []);

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
        
        if(!form.companyName || !form.contactPersonName || !form.email || !form.projectDuration || 
           !form.engagementType || !form.startDate || !form.engineersNeeded) {
            setDialogMessage("Please fill in all required fields");
            setShowDialog(true);
            return;
        }
        
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

            setDialogMessage("Thank you for submitting your project requirements! Our team will review the details and get back to you soon.");
            setShowDialog(true);
            
            // Reset form after successful submission
            setForm({
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
            
            // Clear the file inputs
            const fileInputs = document.querySelectorAll('input[type="file"]');
            fileInputs.forEach(input => {
                input.value = '';
            });
            
        } catch (err) {
            setDialogMessage(err.message || 'An error occurred while submitting your project requirements');
            setShowDialog(true);
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const closeDialog = () => {
        setShowDialog(false);
    };

    return (
        <div className="contentbox">
            <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h4 className="mb-4">Project Requirement Submission Form</h4>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Company Name <span style={{ color: 'red' }}>*</span></label>
                        <input 
                            type="text" 
                            name="companyName" 
                            value={form.companyName} 
                            onChange={handleChange} 
                            placeholder="Your Company Name" 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Contact Person Name <span style={{ color: 'red' }}>*</span></label>
                        <input 
                            type="text" 
                            name="contactPersonName" 
                            value={form.contactPersonName} 
                            onChange={handleChange} 
                            placeholder="Primary point of contact" 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Email Address <span style={{ color: 'red' }}>*</span></label>
                        <input 
                            type="email" 
                            name="email" 
                            value={form.email} 
                            onChange={handleChange} 
                            placeholder="contact@company.com" 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Project Title</label>
                        <input 
                            type="text" 
                            name="projectTitle" 
                            value={form.projectTitle} 
                            onChange={handleChange} 
                            placeholder="Brief title for the project" 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Project Description</label>
                        <textarea 
                            name="projectDescription" 
                            value={form.projectDescription} 
                            onChange={handleChange} 
                            placeholder="Describe project scope, goals, and technical context" 
                            className="form-control" 
                            rows={4} 
                            disabled={isSubmitting}
                        />
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
                                            cursor: isSubmitting ? 'default' : 'pointer',
                                            boxShadow: form.requiredSkills[skill.id] ? '0 2px 5px rgba(47, 85, 212, 0.15)' : 'none',
                                            textAlign: 'center',
                                            paddingTop: '8px',
                                            paddingBottom: '8px',
                                            opacity: isSubmitting ? 0.7 : 1
                                        }}
                                        onClick={() => {
                                            if (!isSubmitting) {
                                                const e = {
                                                    target: {
                                                        name: `requiredSkills.${skill.id}`,
                                                        type: 'checkbox',
                                                        checked: !form.requiredSkills[skill.id]
                                                    }
                                                };
                                                handleChange(e);
                                            }
                                        }}
                                    >
                                        <label 
                                            htmlFor={skill.id}
                                            style={{ 
                                                fontWeight: form.requiredSkills[skill.id] ? '500' : 'normal',
                                                color: form.requiredSkills[skill.id] ? '#2f55d4' : '#495057',
                                                cursor: isSubmitting ? 'default' : 'pointer',
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
                                            disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                        <select 
                            name="projectDuration" 
                            value={form.projectDuration} 
                            onChange={handleChange} 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        >
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
                        <select 
                            name="engagementType" 
                            value={form.engagementType} 
                            onChange={handleChange} 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        >
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
                        <input 
                            type="date" 
                            name="startDate" 
                            value={form.startDate} 
                            onChange={handleChange} 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Number of Engineers Needed <span style={{ color: 'red' }}>*</span></label>
                        <input 
                            type="number" 
                            name="engineersNeeded" 
                            value={form.engineersNeeded} 
                            onChange={handleChange} 
                            min="1" 
                            placeholder="1" 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Work Location <span style={{ color: 'red' }}>*</span></label>
                        <select 
                            name="workLocation" 
                            value={form.workLocation} 
                            onChange={handleChange} 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        >
                            <option value="">Select Location</option>
                            <option value="Remote">Remote</option>
                            <option value="Onsite">Onsite</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>City/Region (if not fully remote)</label>
                        <input 
                            type="text" 
                            name="workLocationCity" 
                            value={form.workLocationCity} 
                            onChange={handleChange} 
                            placeholder="e.g., Bangalore, India" 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>NDA Requirements</label>
                        <select 
                            name="ndaRequirements" 
                            value={form.ndaRequirements} 
                            onChange={handleChange} 
                            className="form-control" 
                            disabled={isSubmitting}
                        >
                            <option value="">Select NDA Requirement</option>
                            <option value="Required">Required</option>
                            <option value="Not Required">Not Required</option>
                        </select>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Upload NDA Template (if you have one)</label>
                        <input 
                            type="file" 
                            name="ndaFile" 
                            onChange={handleChange} 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Budget Range</label>
                        <select 
                            name="budgetRange" 
                            value={form.budgetRange} 
                            onChange={handleChange} 
                            className="form-control" 
                            disabled={isSubmitting}
                        >
                            <option value="">Select Budget Range</option>
                            <option value="Less than $5,000">Less than $5,000</option>
                            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                            <option value="$100,000+">$100,000+</option>
                            <option value="To be discussed">To be discussed</option>
                        </select>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Additional Attachments (Project Brief/Details)</label>
                        <input 
                            type="file" 
                            name="attachments" 
                            onChange={handleChange} 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Additional Notes</label>
                        <textarea 
                            name="additionalNotes" 
                            value={form.additionalNotes} 
                            onChange={handleChange} 
                            placeholder="Any other information that might be helpful for us to know" 
                            className="form-control" 
                            rows={3} 
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-4">
                        <button 
                            type="submit" 
                            className="btn" 
                            style={{ 
                                background: '#2f55d4', 
                                color: '#fff', 
                                padding: '10px 32px', 
                                borderRadius: 4, 
                                fontWeight: 600, 
                                fontSize: 18,
                                position: 'relative',
                                zIndex: 10
                            }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Project Requirements'}
                        </button>
                    </div>
                </div>
            </form>

            {/* Loading Overlay */}
            {muiLoaded && <LoadingOverlay isVisible={isSubmitting} />}
            
            {/* MUI Dialog */}
            {muiLoaded && (
                <Dialog
                    open={showDialog}
                    onClose={closeDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    PaperProps={{
                        style: {
                            borderRadius: '8px',
                            maxWidth: '500px',
                            width: '90%',
                        }
                    }}
                >
                    <DialogTitle 
                        id="alert-dialog-title"
                        sx={{ 
                            backgroundColor: '#2574de', 
                            color: 'white',
                            padding: '10px 24px',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Button onClick={closeDialog} sx={{ color: 'white', minWidth: 'unset', padding: '0 8px', fontSize: '20px' }}>
                            ✕
                        </Button>
                    </DialogTitle>
                    <DialogContent sx={{ padding: '30px 24px', textAlign: 'center' }}>
                        <h4 style={{ margin: '15px 0 25px', color: '#2574de', fontSize: '20px' }}>{dialogMessage}</h4>
                    </DialogContent>
                    <DialogActions sx={{ justifyContent: 'center', padding: '0 24px 24px' }}>
                        <button className="theme_btn" onClick={closeDialog} style={{ minWidth: '120px' }}>
                            Close
                        </button>
                    </DialogActions>
                </Dialog>
            )}

            {/* Custom CSS */}
            <style jsx>{`
                .spinner-container {
                    text-align: center;
                }
            `}</style>
        </div>
    )
}
