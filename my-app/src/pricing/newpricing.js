import React from "react";
import './pricing.css'
import { Link } from "react-router-dom";
export default function Newpricing() {
  return (
    <div>
      <div className="pricingTable">
        <h2 className="pricingTable-title">Find a pricing that's right for you.</h2>
        <h3 className="pricingTable-subtitle">
          Every plan comes with a 3-day free trial.
        </h3>

        <ul className="pricingTable-firstTable">
          
          <li className="pricingTable-firstTable_table">
            <h1 className="pricingTable-firstTable_table__header">Monthly Packege</h1>
            <p className="pricingTable-firstTable_table__pricing">
              <span>General </span>
              <span>1000</span>
              <span> per Month</span>
            </p>
            <ul className="pricingTable-firstTable_table__options">
              <li>Admission Charge:Admission Charge: Rs.2,000 (One-time payment)</li>
              <li>Monthly Fee (Including T-shirt):Monthly Fee: Rs. 1,000</li>
              <li>White test match jersey set provided as part of the Admission fee.</li>
              <li>Rs.150 per weekly Game fees</li>
              <li>24/7 Support Service</li>
            </ul>
           <Link to='/contact'> <button className="pricingTable-firstTable_table__getstart">
              Get Started Now
            </button></Link>
          </li>
        
        </ul>
      </div>
    </div>
  );
}
