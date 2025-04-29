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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState("");
    const [muiLoaded, setMuiLoaded] = useState(false);

    // Set MUI loaded after hydration to avoid SSR issues
    useEffect(() => {
        setMuiLoaded(true);
    }, []);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!form.name || !form.email || !form.position || !form.resume || !form.message) {
            setDialogMessage("Please fill in all required fields");
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

            const response = await fetch('/api/career', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit application');
            }

            setDialogMessage("Thank you for applying! We have received your application and will get back to you soon.");
            setShowDialog(true);
            
            // Reset form after successful submission
            setForm({
                name: '',
                email: '',
                phone: '',
                position: '',
                linkedin: '',
                resume: null,
                message: '',
                hearAbout: ''
            });
            
            // Clear the file input by resetting its value
            const fileInput = document.querySelector('input[name="resume"]');
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
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={form.name} 
                            onChange={handleChange} 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={form.email} 
                            onChange={handleChange} 
                            required 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Phone Number:</label>
                        <input 
                            type="text" 
                            name="phone" 
                            value={form.phone} 
                            onChange={handleChange} 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Position Applying For: (Sales & Marketing Engineer / Intern)</label>
                        <select 
                            name="position" 
                            value={form.position} 
                            onChange={handleChange} 
                            required 
                            className="form-control"
                            disabled={isSubmitting}
                        >
                            <option value="">Select Position</option>
                            <option value="Sales & Marketing Engineer">Sales & Marketing Engineer</option>
                            <option value="Intern">Intern</option>
                        </select>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>LinkedIn Profile (optional):</label>
                        <input 
                            type="url" 
                            name="linkedin" 
                            value={form.linkedin} 
                            onChange={handleChange} 
                            className="form-control" 
                            disabled={isSubmitting}
                        />
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
                            disabled={isSubmitting}
                        />
                        {form.resume && (
                            <small className="text-muted">
                                Selected file: {form.resume.name}
                            </small>
                        )}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>Cover Letter / Message: (Tell us why you're interested and how you can contribute)</label>
                        <textarea 
                            name="message" 
                            value={form.message} 
                            onChange={handleChange} 
                            required 
                            className="form-control" 
                            rows={4}
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <label>How did you hear about us?</label>
                        <input 
                            type="text" 
                            name="hearAbout" 
                            value={form.hearAbout} 
                            onChange={handleChange} 
                            className="form-control"
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
                            {isSubmitting ? "Submitting..." : "Submit Application"}
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
