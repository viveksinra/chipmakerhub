import Link from "next/link"

export default function Cta3() {
    return (
        <section className="section-box pd_top_10 pd_bottom_10">
            <div className="container">
                <div className="text-center d-flex align-items-center justify-content-center gap-4">
                    <h2 style={{ 
                        color: '#1e4bb8', 
                        fontSize: '24px', 
                        margin: 0 
                    }}>
                        Ready to get started?
                    </h2>
                    <Link href="/hireATalent">
                        <button 
                            className="theme-btn-1" 
                            style={{
                                background: '#1e4bb8',
                                color: 'white',
                                padding: '12px 32px',
                                fontSize: '16px',
                                borderRadius: '8px',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease'
                            }}
                            onMouseOver={(e) => e.target.style.background = '#1a3f9d'}
                            onMouseOut={(e) => e.target.style.background = '#1e4bb8'}
                        >
                            Hire Top VLSI Talent
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
