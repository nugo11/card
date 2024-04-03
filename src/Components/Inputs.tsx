import { useState } from "react";

interface props {
    input1: (event: React.ChangeEvent<HTMLInputElement>) => void;
    input2: (event: React.ChangeEvent<HTMLInputElement>) => void;
    input3: (event: React.ChangeEvent<HTMLInputElement>) => void;
    input4: (event: React.ChangeEvent<HTMLInputElement>) => void;
    input5: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function form(props: props) {
  const [show, setShow] = useState(true);

  function hendleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setShow(false);
  }

  return (
    <>
      {show ? (
        <form>
          <li>
            <label>Cardholder Name</label>
            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              onChange={props.input1}
              maxLength={30}
            />
          </li>
          <li>
            <label>Card Number</label>
            <input
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={props.input2}
              maxLength={16}
            />
          </li>
          <ul>
            <li>
              <label>Exp. Date (MM/YY)</label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="MM"
                  onChange={props.input3}
                  maxLength={2}
                />
                <input
                  type="text"
                  placeholder="YY"
                  onChange={props.input4}
                  maxLength={2}
                />
              </div>
            </li>
            <li>
              <label>CVC</label>
              <input
                type="text"
                placeholder="e.g. 123"
                onChange={props.input5}
                maxLength={3}
              />
            </li>
          </ul>
          <button onClick={hendleClick}>Confirm</button>
        </form>
      ) : (
        <>
          <div className="thanks">
            <div className="img"></div>
            <h1>Thank You!!</h1> <p>We’ve added your card details</p>
          </div>
        </>
      )}
    </>
  );
}
