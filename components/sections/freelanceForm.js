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
                <p style={{ color: '#0496de', marginTop: '15px' }}>Submitting your application...</p>
            </div>
        </Backdrop>
    );
};

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
        setForm(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : 
                     type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!form.name || !form.expertiseDomain || !form.yearsOfExperience || !form.contact || !form.email || !form.cv || !form.consent) {
            setDialogMessage("Please fill in all required fields and accept the terms");
            setShowDialog(true);
            return;
        }
        
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

            setDialogMessage("Thank you for submitting your application! Our team will review your details and get back to you soon.");
            setShowDialog(true);
            
            // Reset form after successful submission
            setForm({
                name: '',
                expertiseDomain: '',
                yearsOfExperience: '',
                contact: '',
                email: '',
                cv: null,
                consent: false
            });
            
            // Clear the file input by resetting its value
            const fileInput = document.querySelector('input[name="cv"]');
            if (fileInput) fileInput.value = '';
            
        } catch (err) {
            setDialogMessage(err.message || 'An error occurred while submitting your application');
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
                <h4 className="mb-4">Freelancer Application Form</h4>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Name <span style={{ color: 'red' }}>*</span></label>
                        <input 
                            type="text" 
                            name="name" 
                            value={form.name} 
                            onChange={handleChange} 
                            placeholder="Your Full Name" 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Expertise/Domain <span style={{ color: 'red' }}>*</span></label>
                        <input 
                            type="text" 
                            name="expertiseDomain" 
                            value={form.expertiseDomain} 
                            onChange={handleChange} 
                            placeholder="e.g., RTL Design, Physical Design, Verification" 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Years of Experience <span style={{ color: 'red' }}>*</span></label>
                        <input 
                            type="number" 
                            name="yearsOfExperience" 
                            value={form.yearsOfExperience} 
                            onChange={handleChange} 
                            min="0" 
                            placeholder="e.g., 5" 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label>Contact Number <span style={{ color: 'red' }}>*</span></label>
                        <input 
                            type="tel" 
                            name="contact" 
                            value={form.contact} 
                            onChange={handleChange} 
                            placeholder="Your Phone Number" 
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
                            placeholder="your.email@example.com" 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Upload CV/Resume <span style={{ color: 'red' }}>*</span></label>
                        <input 
                            type="file" 
                            name="cv" 
                            accept=".pdf,.doc,.docx" 
                            onChange={handleChange} 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                        <small className="text-muted">Upload your CV in PDF or Word format (Max 5MB)</small>
                        {form.cv && (
                            <div className="mt-1">
                                <small className="text-muted">
                                    Selected file: {form.cv.name}
                                </small>
                            </div>
                        )}
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <div className="form-check">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="consentCheck" 
                                name="consent" 
                                checked={form.consent} 
                                onChange={handleChange} 
                                required
                                disabled={isSubmitting}
                            />
                            <label className="form-check-label" htmlFor="consentCheck">
                                I agree to share my information with ChipMakersHub for freelance opportunities <span style={{ color: 'red' }}>*</span>
                            </label>
                        </div>
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-3">
                        <button 
                            type="submit" 
                            className="btn" 
                            disabled={!form.consent || isSubmitting} 
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
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
