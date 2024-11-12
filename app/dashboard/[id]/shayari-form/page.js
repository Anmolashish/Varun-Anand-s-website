import React from "react";

export default function page() {
  return (
    <div className="form-background">
      <div className="form-contanier-heading">Shayari form</div>
      <div className="form-container">
        <input type="text" placeholder="Heading" required />
        <input type="text" placeholder="Keywords" required />
        <textarea type="text" placeholder="Hindi Shayari" required />
        <textarea type="text" placeholder="Urdu Shayari" required />
        <div className="form-button shayari-form">
          <div className="form-button">Confirm</div>
        </div>
      </div>
    </div>
  );
}
