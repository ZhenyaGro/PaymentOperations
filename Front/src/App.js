import React from "react";
import Requisite from "./components/requisite";
import PayButton from "./components/PayButton";

class App extends React.Component {
  checkInput = async (e) => {
    e.preventDefault();
    let cardNumber = document
      .getElementsByTagName("input")[0]
      .value.replace(/ /g, "");
    let expMonth = document.getElementsByTagName("input")[1].value;
    let expYear = document.getElementsByTagName("input")[2].value;
    let cvv = document.getElementsByTagName("input")[3].value;
    let amount = document.getElementsByTagName("input")[4].value;

    let expirationDate = `${expMonth}.${expYear}`;

    let currentDate = new Date();

    if (cardNumber.length !== 16) {
      return alert("Номер карты заполнен некорректно");
    }
    if (+expMonth > 12 || +expMonth < 1) {
      return alert("Месяц действия карты заполнен некорректно");
    }
    if (
      (+expYear === currentDate.getFullYear() &&
        +expMonth <= currentDate.getMonth() + 1) ||
      +expYear < currentDate.getFullYear()
    ) {
      return alert("Срок действия карты истек");
    }

    console.log(cardNumber);
    console.log(expMonth);
    console.log(expYear);
    console.log(cvv);
    console.log(amount);
    console.log(expirationDate);

    let payOp = {
      cardNumber: cardNumber,
      expirationDate: expirationDate,
      cvv: cvv,
      amount: amount
    };
    /*
    let res = await fetch(url, {
      method: "POST",
      mode: "CORS",
      body: {
        cardNumber: cardNumber,
        expirationDate: expirationDate,
        cvv: cvv,
        amount: amount
      }
    });
    */
    return alert(JSON.stringify(payOp));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.checkInput}>
          <Requisite name="Номер карты" id="cardNumber" />
          <Requisite name="Срок действия" id="expMonth" />
          <Requisite name="CVV" id="cvv" />
          <Requisite name="Сумма" id="amount" />
          <PayButton />
        </form>
      </div>
    );
  }
}

export default App;
