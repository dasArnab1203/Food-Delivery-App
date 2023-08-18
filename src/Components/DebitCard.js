import React from "react";

function DebitCard() {
  return (
    <div className="cardGroup">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-86231.appspot.com/o/transparent-payments-logos-icon-visa-pay-logo-icon-visa-icon-5f62c6e45beb39.7676388716003089643765.png?alt=media&token=b44e0f6e-ae46-4cc2-b198-8e5116ee7e66"
        alt=""
        className="cardLogo"
      />

      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c"
        alt=""
        className="cardChip"
      />

      <div className="card_number">1234 567 8910 1112</div>
      <div className="card_name">Arnab Das</div>
      <div className="card_from">10/21</div>
      <div className="card_to">10/25</div>
      <div className="card_ring"></div>
    </div>
  );
}

export default DebitCard;
