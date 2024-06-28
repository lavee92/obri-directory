import React from "react"

const Header = () => {
    const [isSticky, setIsSticky] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <section className="top-header">
                <div className="container">
                    <div className="row align-items-center justify-content-sm-between">
                        <div className="col-12">
                            <div className="top-col-1">
                                <div className="col iconss">
                                    <p><i className="fas fa-map-marker-alt"></i> 25 Street, City Road, Delhi, IN</p>
                                </div>
                                <div className="col iconss">
                                    <p><i className="fas fa-phone-alt"></i> (+91) 9825476243</p>
                                </div>
                                <div className="col iconss">
                                    <p><i className="fas fa-envelope"></i> info@anob-taxi.com</p>
                                </div>
                                <div className="col">
                                    <div className="top-icon">
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-instagram"></i>
                                        <i className="fab fa-linkedin-in"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <header className="header"> */}
            <header className={`header ${isSticky ? 'navbar-fixed' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="#">
                                    <img src="/img/logo.svg" alt="" height="50" />TaxiOnline 
                                    {/* <img src="" alt="" height="50" />TaxiOnline  */}
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="fas fa-bars"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarCollapse">
                                    <ul className="navbar-nav mx-auto">
                                        <li><a className="nav-item nav-link active" href="#">Home</a></li>
                                        <li><a className="nav-item nav-link" href="#">Services</a></li>
                                        <li><a className="nav-item nav-link" href="#">About</a></li>
                                        <li><a className="nav-item nav-link" href="#">Contact</a></li>
                                        <li><a className="nav-item nav-link" href="#">Gallery</a></li>
                                        <div className="phone-number">
                                            <li style={{ color: '#f7c033', listStyle: 'none' }}>Call Us
                                                <a href="#" style={{ color: '#1b1b1b', textDecoration: 'none' }}> +1 123456789</a>
                                            </li>
                                        </div>
                                    </ul>
                                </div> 
                                <div className="buttons">
                                    <a href="#" className="btn btn-sm style-skew" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal-1"><span>Book Taxi</span></a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
           
            </div>
    );
};

export default Header;
