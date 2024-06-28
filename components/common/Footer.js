const Footer = () => {
    
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-col">
                                <h4 className="footer-heading">ABOUT COMPANY</h4>
                                <p>Centric applications productize front end portals visualize front end is results and value added</p>
                                <br />
                                <div className="footer-col-icon">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-whatsapp"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-col">
                                <h4 className="footer-heading">QUICK LINK</h4>
                                <ul className="menu-link">
                                    <li className="menu-list"><a href="#"><i className="fas fa-long-arrow-alt-right"></i>About Us</a></li>
                                    <li className="menu-list"><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Taxi Services</a></li>
                                    <li className="menu-list"><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Booking Taxi</a></li>
                                    <li className="menu-list"><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Our Team</a></li>
                                    <li className="menu-list"><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Our Services</a></li>
                                    <li className="menu-list"><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-col">
                                <h4 className="footer-heading">RECENT POSTS</h4>
                                <div className="footer-post">
                                    <div className="img-post">
                                        <img src="img/img-post.jpeg" alt="" />
                                    </div>
                                    <div className="post-content">
                                        <h5><a href="#">Give Your Small Car the Horn</a></h5>
                                        <p><a href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="footer-post">
                                    <div className="img-post">
                                        <img src="img/img-post-1.jpeg" alt="" />
                                    </div>
                                    <div className="post-content">
                                        <h5><a href="#">Car with Private and Discreet For</a></h5>
                                        <p><a href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-col">
                                <h4 className="footer-heading">CONTACT DETAILS</h4>
                                <div className="footer-contact">
                                    <p><b>PHONE NUMBER</b></p>
                                    <p><a href="tel:+468254762443"><i className="fas fa-phone-alt"></i> +468 254 762 443</a></p>
                                </div>
                                <div className="footer-contact">
                                    <p><b>EMAIL ADDRESS</b></p>
                                    <p><a href="mailto:Taxiarinfo@taxiar.com"><i className="fas fa-envelope"></i> Taxiarinfo@taxiar.com</a></p>
                                </div>
                                <div className="footer-contact">
                                    <p><b>OFFICE LOCATION</b></p>
                                    <p><a href="#"><i className="fas fa-map-marker-alt"></i> Taxiarinfo@taxiar.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <section className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-bottom-1">
                                <div className="footer-bottom-text">
                                    <p>Privacy Policy | All rights reserved</p>
                                </div>
                                <div className="footer-bottom-text-1">
                                    <p>Powered By <a href="https://inclusionsoft.com/" target="_blank"><img src="img/inclusion-logo-black.png" alt="" width="100" /></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
