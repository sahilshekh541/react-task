import "../../index.css";
import { useState, useEffect } from "react";
const Smallinput = (props) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setSelectedValue(value);
      props.callback({ target: { name: `${props.name}`, value } });
    }
  };

  useEffect(() => {
    if (props.isreset) {
      setSelectedValue("");
      props.callback({ target: { name: `${props.name}`, value: "" } });
    }
  }, [props.isreset]);

  return (
    <div className="col mt-1 m-0 bud" style={{ maxWidth: "130px" }}>
      <label htmlFor={props.name} className="m-0">
        {props.field} <span className="text-danger">*</span>
        <input
          className="d-block small-inp"
          name={props.name}
          id={props.name}
          type="text"
          placeholder={props.placeholder}
          onChange={handleChange} // Use custom change handler
          maxLength="5"
          required
          inputMode="numeric"
          value={selectedValue}
          style={{ width: "120px" }}
          disabled={props.disable}
        />
      </label>
    </div>
  );
};

export default Smallinput;
