import { useState, useEffect } from 'react';

export default function Banner1() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const nextSlide = () => {
        setCurrentSlide(current => (current === 1 ? 0 : current + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(current => (current === 0 ? 1 : current - 1));
    };

    useEffect(() => {
        // Auto slide every 5 seconds
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const sliderStyles = {
        sliderContainer: {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
        },
        slider: {
            position: 'relative',
            height: '100%',
        },
        slide: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0,
            transition: 'opacity 0.5s ease-in-out',
        },
        activeSlide: {
            opacity: 1,
            position: 'relative',
        },
        controls: {
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            display: 'flex',
            gap: '10px',
        },
        controlBtn: {
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#174EA6',
        }
    };

    return (
        <>
            <section className="single_banner style_one" style={{ backgroundColor: 'rgba(23, 78, 166, 0.1)' }}>
                <div className="image_bg" >
                    <img style={{ paddingBottom: '120px' }} src="/assets/images/slider/banner-1-bg.jpg" className="img-fluid" alt="img" height="600px" />
                </div>
                <div className="content_box" style={{ marginTop: '-120px' }}>
                    <div className="large-container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="section_title type_one">
                                    <div className="title_whole">
                                        <h2 className="title">
                                           Hire the World's Top VLSI Freelancers
                                        </h2>
                                    </div>
                                    <p>
                                    Welcome to ChipMakerHub - the premier platform for VLSI freelancing excellence
                                    </p>
                                </div>
                                <div className="newsteller_simple">
                                    <div className="input_group">
                                        <form method="post">
                                            <input type="email" name="EMAIL" placeholder="Your email address" required />
                                            <input type="submit" value="Contact Us" />
                                        </form>
                                    </div>
                                </div>
                                <div className="review_box d-flex align-items-center">
                                    <div className="rimage">
                                        <img src="/assets/images/slider/review-girls.png" className="img-fluid" alt="img" />
                                    </div>
                                    <div className="section_title type_one">
                                        <div className="title_whole">
                                            <h2 className="title"> Excellent 12,534+ reviews</h2>
                                        </div>
                                        <p>4.8 of 5 <small><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                            <div className="col-lg-6">
                                <div className="image slider-container" style={sliderStyles.sliderContainer}>
                                    <div className="slider" style={sliderStyles.slider}>
                                        <img src="/assets/images/chipMaker/men.jpeg" 
                                            style={{
                                                ...sliderStyles.slide,
                                                ...(currentSlide === 0 ? sliderStyles.activeSlide : {})
                                            }}
                                            className="img-fluid" 
                                            alt="img" />
                                        <img src="/assets/images/chipMaker/women.jpg" 
                                            style={{
                                                ...sliderStyles.slide,
                                                ...(currentSlide === 1 ? sliderStyles.activeSlide : {})
                                            }}
                                            className="img-fluid" 
                                            alt="img" />
                                    </div>
                                    <div className="slider-controls" style={sliderStyles.controls}>
                                        <button 
                                            style={sliderStyles.controlBtn} 
                                            onClick={prevSlide}
                                            aria-label="Previous slide"
                                        >&lt;</button>
                                        <button 
                                            style={sliderStyles.controlBtn} 
                                            onClick={nextSlide}
                                            aria-label="Next slide"
                                        >&gt;</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_title abso type_one">
                    <div className="title_whole" style={{fontSize: '10px'}}>
                        <h2 className="title" style={{fontSize: '100px'}}> CHIPMAKERHUB</h2>
                    </div>
                </div>
            </section>

        </>
    )
}
