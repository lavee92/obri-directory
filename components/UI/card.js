

export default function Card({data}){
    return(
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
        aria-labelledby="pills-home-tab">

        <div class="row">
            <div class="col-lg-4 col-md-6 cil-sm-12 col-12">
                <div class="taxi-feature">
                    <div class="taxi-feature_icon"><img decoding="async"
                            src="https://themeholy.com/wordpress/taxiar/wp-content/uploads/2023/09/taxi_f_1_1-1-2-1.svg"
                            alt="taxi_f_1_1 1 2 1"/></div>
                    <h3 class="taxi-feature_title">Car Doors:</h3><span
                        class="taxi-feature_info">{data.carDoors}</span>
                </div>
                <div class="taxi-feature">
                    <div class="taxi-feature_icon"><img decoding="async"
                            src="https://themeholy.com/wordpress/taxiar/wp-content/uploads/2023/09/taxi_f_1_2-1-2-1.svg"
                            alt="taxi_f_1_2 1 2 1"/></div>
                    <h3 class="taxi-feature_title">Passengers:</h3><span
                        class="taxi-feature_info">{data.passengers}</span>
                </div>
                <div class="taxi-feature">
                    <div class="taxi-feature_icon"><img decoding="async"
                            src="https://themeholy.com/wordpress/taxiar/wp-content/uploads/2023/09/taxi_f_1_3-1-2-1.svg"
                            alt="taxi_f_1_3 1 2 1"/></div>
                    <h3 class="taxi-feature_title">Luggage Carry:</h3><span
                        class="taxi-feature_info">{data.luggageCarry}</span>
                </div>
                <div class="taxi-feature">
                    <div class="taxi-feature_icon"><img decoding="async"
                            src="https://themeholy.com/wordpress/taxiar/wp-content/uploads/2023/09/taxi_f_1_4-1-2-1.svg"
                            alt="taxi_f_1_4 1 2 1"/></div>
                    <h3 class="taxi-feature_title">Heated Seats:</h3><span
                        class="taxi-feature_info">{data.heatedSeats}</span>
                </div>
                <div class="taxi-feature">
                    <div class="taxi-feature_icon"><img decoding="async"
                            src="https://themeholy.com/wordpress/taxiar/wp-content/uploads/2023/09/taxi_f_1_5-1-2-1.svg"
                            alt="taxi_f_1_5 1 2 1"/></div>
                    <h3 class="taxi-feature_title">Air Condition:</h3><span
                        class="taxi-feature_info">{data.airCondition}</span>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 cil-sm-12 col-12">
                <div class="taxi-img"><img decoding="async" src={data.imagePath} alt="taxi_1_2 4 1"/>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 cil-sm-12 col-12">
                <div class="taxi-about"><span class="taxi-about_rate">{data.rate}</span>
                    <h4 class="taxi-about_title">{data.title}</h4>
                    <p class="taxi-about_text">{data.about}</p>
                    <div class="about-button-group">
                        <a href="#" class="btn btn-sm style-skew"><span>Book Taxi</span></a>
                        <div class="call-btn"><a href="tel:+468254762443" class="btn-icon ripple"><i
                                    class="fas fa-phone-alt"></i></a>
                            <a href="tel:+468254762443" class="btn-title">(+91)9825476243</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}