import { useState } from "react";
import Inputs from "./Components/Inputs";
import "./App.css";

function App() {
  const [bigNum, setBigNum] = useState<string>("0000 0000 0000 0000");
  const [name, setname] = useState<string>("JANE APPLESEED");
  const [dateM, setdateM] = useState<string>("00");
  const [dateY, setdateY] = useState<string>("00");
  const [cvc, setcvc] = useState<string>("000");

  return (
    <>
      <div className="left">
        <div className="front">
          <p>{bigNum}</p>
          <ul>
            <li>{name}</li>
            <li>
              {dateM}/{dateY}
            </li>
          </ul>
        </div>
        <div className="back">
          <p>{cvc}</p>
        </div>
      </div>
      <div className="right">
        <Inputs
          input1={(event: string) => setname(event.target.value)}
          input2={(event: React.ChangeEvent<HTMLInputElement>) =>
            setBigNum(
              !event.target.value.replace(/[^0-9.]/g, "")
                ? "Type numbers only!"
                : event.target.value.replace(/\d{4}(?=.)/g, "$& ")
            )
          }
          input3={(event: React.ChangeEvent<HTMLInputElement>) =>
            setdateM(!event.target.value.replace(/[^0-9.]/g, "")
            ? "!!"
            : event.target.value.replace(/\d{4}(?=.)/g, "$& "))
          }
          input4={(event: React.ChangeEvent<HTMLInputElement>) =>
            setdateY(!event.target.value.replace(/[^0-9.]/g, "")
            ? "!!"
            : event.target.value.replace(/\d{4}(?=.)/g, "$& "))
          }
          input5={(event: React.ChangeEvent<HTMLInputElement>) =>
            setcvc(!event.target.value.replace(/[^0-9.]/g, "")
            ? "!!"
            : event.target.value.replace(/\d{4}(?=.)/g, "$& "))
          }
        />
      </div>
    </>
  );
}

export default App;
