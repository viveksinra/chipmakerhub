import { useState } from "react"
import FreelanceForm from "./freelanceForm"

export default function Cta4() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => setShowForm(!showForm);

    return (
        <section className="section-box pd_top_10 pd_bottom_10">
            <div className="container">
                <div className="text-center d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 gap-md-4 mb-4">
                        <h2 style={{ 
                            color: '#1e4bb8', 
                            fontSize: '24px', 
                            margin: 0 
                        }}>
                            Ready to get started?
                        </h2>
                        <button 
                            className="theme-btn-1" 
                            onClick={toggleForm}
                            style={{
                                background: '#1e4bb8',
                                color: 'white',
                                padding: '10px 24px',
                                fontSize: '16px',
                                borderRadius: '8px',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease',
                                width: 'auto',
                                marginTop: '10px'
                            }}
                            onMouseOver={(e) => e.target.style.background = '#1a3f9d'}
                            onMouseOut={(e) => e.target.style.background = '#1e4bb8'}
                        >
                            {showForm ? 'Hide Form' : 'Apply as a Freelancer'}
                        </button>
                    </div>
                    
           
                </div>
                {showForm && (
                 <div >
                 <FreelanceForm />
                 </div>
           
         )}
            </div>
        </section>
    )
}
