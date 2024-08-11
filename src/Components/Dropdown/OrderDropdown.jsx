import "../../index.css";
import { useState, useEffect } from "react";
const OrderDropdown = ({ disable, isreset, callback, setShowaddbutton }) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (isreset) {
      setSelectedValue("");
      callback({ target: { name: "clientname", value: "" } });
      setShowaddbutton(false);
    }
  }, [isreset]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
    if (value === "Group PO") {
      setShowaddbutton(true);
      callback(e);
    } else {
      setShowaddbutton(false);
      callback(e);
    }
  };

  const clearSelection = () => {
    setSelectedValue("");
    setShowaddbutton(false);
    callback({ target: { name: "purchaseordertype", value: "" } });
  };
  return (
    <div className="dropdown col">
      <label htmlFor="purchaseordertype" className="text-capitalize">
        Purchase Order Type <span className="text-danger">*</span>
      </label>
      <select
        className="w-100 p-1 mt-1 position-relative"
        name="purchaseordertype"
        id="purchaseordertype"
        required
        value={selectedValue}
        onChange={handleChange}
        disabled={disable}
      >
        <option className="" value="">
          Select Order Type
        </option>

        <option className="" value="Group PO">
          Group PO
        </option>
        <option className="" value="Individual PO">
          Individual PO
        </option>
      </select>
      {selectedValue && !disable && (
        <div
          className="clear-btn position-absolute"
          onClick={clearSelection}
          style={{ cursor: disable ? "not-allowed" : "pointer" }} // Change cursor based on disabled state
        >
          <i className="ri-close-fill"></i>
        </div>
      )}
    </div>
  );
};

export const PurchaseNumber = ({ disable, isreset, callback, formdata }) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (isreset) {
      setSelectedValue("");
      callback({ target: { name: "purchaseordernumber", value: "" } });
    }
  }, [isreset]);
  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
    callback(e); // Pass the event to the parent component's callback
  };

  return (
    <div className="col">
      <label htmlFor="purchaseordernumber">
        Purchase Order Number <span className="text-danger">*</span>
        <input
          className="d-block px-2 mt-1 h-10 w-100 inp"
          name="purchaseordernumber"
          id="purchaseordernumber"
          placeholder="PO Number"
          value={selectedValue}
          onChange={handleChange}
          required
          disabled={disable}
        />
      </label>
    </div>
  );
};

export default OrderDropdown;
