import React, { useState } from "react";
import { BookingData } from "@/assets/data/dummyData";
import Card from "../UI/card";

export default function Booking() {
    const [selectedCategory, setSelectedCategory] = useState('STANDARD TAXI');
    
    const filterData = (category) => {
        setSelectedCategory(category);
    };

    return (
        <section className="available">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hh">
                            <span className="small-text">Book Taxi</span>
                            <h2>Available Taxi</h2>
                            <p>Seamlessly visualize leading-edge action items without timely leadership. Conveniently
                                visualize exceptional value vis-a-vis.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="tab-buttons">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link style-skew fw-semibold ${selectedCategory === 'STANDARD TAXI' ? 'active' : ''}`} onClick={() => filterData('STANDARD TAXI')}>
                                <span>STANDARD TAXI</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link style-skew fw-semibold ${selectedCategory === 'MINIVAN TAXI' ? 'active' : ''}`} onClick={() => filterData('MINIVAN TAXI')}>
                                <span>MINIVAN TAXI</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link style-skew fw-semibold ${selectedCategory === 'BUSINESS CLASS' ? 'active' : ''}`} onClick={() => filterData('BUSINESS CLASS')}>
                                <span>BUSINESS CLASS</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link style-skew fw-semibold ${selectedCategory === 'SUV TAXI' ? 'active' : ''}`} onClick={() => filterData('SUV TAXI')}>
                                <span>SUV TAXI</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link style-skew fw-semibold ${selectedCategory === 'EXPENSIVE TAXI' ? 'active' : ''}`} onClick={() => filterData('EXPENSIVE TAXI')}>
                                <span>EXPENSIVE TAXI</span>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="available-wrap">
                    <div className="tab-content" id="pills-tabContent">
                        {BookingData.filter(item => item.category === selectedCategory).map((item) => (
                            <Card data={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    
    );
}
