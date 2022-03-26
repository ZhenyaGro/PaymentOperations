import React, { Component } from "react";

/*
let cardNumber = React.createRef();
let expMonth = React.createRef();
let expYear = React.createRef();
let cvv = React.createRef();
let amount = React.createRef();

function setResult() {
  let resultObj = {
    cardNumber: cardNumber.current.value,
    expMonth: expMonth.current.value,
    expYear: expYear.current.value,
    cvv: cvv.current.value,
    amount: amount.current.value
  };
  console.log(resultObj.cardNumber);
  console.log(resultObj.expMonth + " / " + resultObj.expYear);
  console.log(resultObj.cvv);
  console.log(resultObj.amount);
  return resultObj;
}
*/

export default class Requisite extends Component {
  /*
  constructor(props) {
    super(props);
    this.cardNumber = null;
    this.expMonth = null;
    this.expYear = null;
    this.cvv = null;
    this.amount = null;
  }
  */

  render() {
    return (
      <div>
        <p>
          <label id={this.props.id}>{this.props.name}</label>
        </p>
        <p>
          <input
            /*
            ref={
              (this.props.id === "cardNumber" &&
                ((ref) => (this.cardNumber = ref))) ||
              (this.props.id === "expMonth" &&
                ((ref) => (this.expMonth = ref))) ||
              (this.props.id === "cvv" && ((ref) => (this.cvv = ref))) ||
              (this.props.id === "amount" && ((ref) => (this.amount = ref)))
            }
            */
            required="true"
            type={(this.props.id === "cvv" && "password") || "tel"}
            inputMode="numeric"
            id={this.props.id}
            placeholder={
              (this.props.id === "cardNumber" && "0000 0000 0000 0000") ||
              (this.props.id === "expMonth" && "MM") ||
              (this.props.id === "cvv" && "3-digit CVV")
            }
            autoComplete={this.props.id === "cardNumber" && "cc-number"}
            onKeyPress={onlyNumbers}
            onChange={
              (this.props.id === "cardNumber" && formatCardNumber) || null
            }
            maxlength={
              (this.props.id === "expMonth" && "2") ||
              (this.props.id === "cvv" && "3")
            }
            minLength={this.props.id === "cvv" && "3"}
            size={
              (this.props.id === "cardNumber" && "17") ||
              (this.props.id === "cvv" && "12") ||
              (this.props.id === "expMonth" && "2") ||
              (this.props.id === "amount" && "12")
            }
          />
          {this.props.id === "expMonth" && <span> / </span>}
          {this.props.id === "expMonth" && (
            <input
              ref={(ref) => (this.expYear = ref)}
              required="true"
              type="tel"
              inputMode="numeric"
              id="expYear"
              placeholder="YYYY"
              size="2"
              maxlength="4"
              minLength="4"
              onKeyPress={onlyNumbers}
            />
          )}
        </p>
      </div>
    );
  }
}

const onlyNumbers = (pressedKey) => {
  if (!/[0-9]/.test(pressedKey.key)) {
    pressedKey.preventDefault();
  }
};

const formatCardNumber = (event) => {
  const { value } = event.target;
  event.target.value = replaceCardNumber(value);
};
const replaceCardNumber = (value) => {
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};
