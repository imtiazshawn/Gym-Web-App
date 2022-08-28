import React from 'react';
import {plansData} from '../../data/plansData';
import './Plans.css';
import whiteTick from '../../assets/whiteTick.png';

function Plans() {
  return (
    <div className="plans-container">



                {/* Blur Effect */}
        <div className="blur plans-blur1"></div>
        <div className="blur plans-blur2"></div>
        


                {/* Plans Header */}

        <div className="programs-header" style={{gap: "2rem"}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span>
        </div>


                {/* Plans Cards */}

        <div className="plans">
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    {/* Features Div */}

                    <div className="features">
                        {plan.features.map((feature, i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>See more benefits -></span>
                        <button className='btn plans-btn'>Join Now</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans;