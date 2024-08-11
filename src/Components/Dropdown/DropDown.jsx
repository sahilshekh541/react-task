import { useEffect, useState } from "react";

const DropDown = ({
  name,
  field,
  options,
  disable,
  isreset,
  callback,
  index,
  setPtalent,
  value,
}) => {
  const [selectedValue, setSelectedValue] = useState(value || null);

  useEffect(() => {
    if (value == "") {
      setSelectedValue("");
    }
    if (isreset) {
      setSelectedValue("");
      callback({ target: { name, value: "" } });
    }
  }, [isreset, value]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
    callback(e);
  };

  const clearSelection = () => {
    setSelectedValue("");
    document.querySelector(`#jobid${index}`).value = "";
    callback({ target: { name, value: "" } });

    setPtalent((prevPtalent) => {
      const updatedPtalent = [...prevPtalent];

      if (!updatedPtalent[index]) {
        updatedPtalent[index] = {
          contractduration: "",
          billrate: "",
          stdtimebr: "",
          overtimebr: "",
          checked: false,
        };
      } else {
        updatedPtalent[index] = {
          ...updatedPtalent[index],
          contractduration: "",
          billrate: "",
          stdtimebr: "",
          overtimebr: "",
          checked: false,
        };
      }

      return updatedPtalent;
    });
  };

  return (
    <div className="dropdown col position-relative">
      <label htmlFor={name} className="text-capitalize">
        {field} <span className="text-danger">*</span>
      </label>
      <select
        className="w-100 p-1 mt-1"
        name={name}
        id={name}
        required
        value={selectedValue}
        onChange={handleChange}
        disabled={disable}
      >
        <option value="">Select {field}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      {selectedValue && !disable && (
        <div
          className="clear-btn position-absolute"
          onClick={clearSelection}
          style={{ cursor: disable ? "not-allowed" : "pointer" }}
        >
          <i className="ri-close-fill"></i>
        </div>
      )}
    </div>
  );
};

export default DropDown;
