export default function About(){
    return(
        <>
        <section className="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="about-wrap">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="about-wrap-images">
                                        <div className="about-wrap-info">
                                            <h2>1996</h2>
                                            <p>STARTED <br /> JOURNEY</p>
                                        </div>
                                        <div className="about-img-1">
                                            <img src="img/skill-img.png" alt="Skill Image" />
                                        </div>

                                        <div className="overlay_play">
                                            <div className="video-play-btn ripple">
                                                <a href="#" className="play-btn">
                                                    <i className="far fa-play-circle" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="about-wrap-text">
                                        <span className="small-text">About Me</span>
                                        <h2>Personal Information</h2>

                                        <div className="about-list-wrapper">
                                            <table className="about-list">
                                                <tbody>
                                                    <tr>
                                                        <td className="title">Full Name</td>
                                                        <td>: David Jhon</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="title">Age</td>
                                                        <td>: 32 Years</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="title">Language</td>
                                                        <td>: English</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="about-line"></div>
                                            <table className="about-list">
                                                <tbody>
                                                    <tr>
                                                        <td className="title">Address</td>
                                                        <td>: New York</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="title">Phone</td>
                                                        <td>: +350 254 3564</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="title">Email</td>
                                                        <td>: david@gmail.com</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="about-counter-wrap">
                                            <div className="about-counter wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                                <h3 className="about-counter_number"><span className="counter-number">26</span><span className="text">+</span></h3>
                                                <p className="about-counter_text">Years of Experience</p>
                                            </div>
                                            <div className="about-counter wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                                <h3 className="about-counter_number"><span className="counter-number">65.2</span><span className="text">k</span></h3>
                                                <p className="about-counter_text">Happy Customers</p>
                                            </div>
                                            <div className="about-counter wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                                <h3 className="about-counter_number">9<span className="text">/</span>10<span className="text"></span></h3>
                                                <p className="about-counter_text">Personal Rating</p>
                                            </div>
                                        </div>

                                        <div className="about-button-group">
                                            <a href="#" className="btn btn-sm style-skew-1"><span>Download CV <i className="fas fa-download"></i></span></a>
                                            <div className="call-btn">
                                                <a href="tel:+468254762443" className="btn-icon ripple"><i className="fas fa-phone-alt"></i></a>
                                                <a href="tel:+468254762443" className="btn-title">(+91)9825476243</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
}