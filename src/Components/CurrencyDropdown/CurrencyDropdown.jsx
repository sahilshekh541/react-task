import { useEffect, useState } from "react";

const CurrencyDropdown = ({
  disable,
  callback,
  isreset,
  chkdisable,
  index,
  name,
  iscondition,
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
    callback(e, index);
  };

  useEffect(() => {
    if (isreset) {
      setSelectedValue("");
    }
  }, [isreset]);

  const clearSelection = () => {
    setSelectedValue("");
    callback({ target: { name: name, value: "" } });
  };

  return (
    <div
      className="col position-relative d-inline curr"
      style={{ minWidth: "170px", maxWidth: "170px" }}
    >
      <label htmlFor={name} className="">
        Currency <span className="text-danger">{iscondition ? "" : "*"}</span>
        <select
          name={name}
          id={name}
          onChange={handleChange}
          value={selectedValue}
          className={`p-1 d-block mt-1 w-100 small-input dis-chk chk-${index}`}
          style={{ fontSize: "14px", minWidth: "170px" }}
          required
          disabled={chkdisable || iscondition}
        >
          <option value="">Please Select</option>
          <option value="USD - Dollars ($)">USD - Dollars ($)</option>
          <option value="IND - Rupee (₹)">IND - Rupee (₹)</option>
        </select>
      </label>
      {selectedValue && !disable && (
        <div
          className="cur-clear-btn position-absolute"
          onClick={clearSelection}
          style={{ cursor: disable ? "not-allowed" : "pointer" }} // Change cursor based on disabled state
        >
          <i className="ri-close-fill"></i>
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
