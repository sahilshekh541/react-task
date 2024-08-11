import { useState, useEffect } from "react";
const InputWithdate = ({ disable, isreset, callback, formdata }) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (isreset) {
      setSelectedValue("");
      callback({ target: { name: "recieveddate", value: "" } });
      document.querySelector(".cal").style.opacity = "100";
      document.querySelector(".cal-i").style.opacity = "100";
      document.querySelector("#receiveddate").type = "text";
    }
  }, [isreset]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
    callback(e);
  };

  const handlefocus = (e) => {
    document.querySelector(".cal").style.opacity = "0";
    document.querySelector(".cal-i").style.opacity = "0";
    e.target.type = "date";
    e.target.showPicker();
    //.style.display = "none";
  };

  const handleblur = (e) => {
    if (!e.target.value) {
      document.querySelector(".cal").style.opacity = "100";
      document.querySelector(".cal-i").style.opacity = "100";
      e.target.type = "text"; // Revert to "text" if no date is selected
    }
  };
  return (
    <div className="col ">
      <label htmlFor="receiveddate">
        Received On <span className="text-danger">*</span>
        <div className="input-d mt-1 border border-secondary position-relative ">
          <input
            className="d-block px-2 inp inp-o border-0"
            name="receiveddate"
            id="receiveddate"
            type="text"
            onFocus={handlefocus}
            onBlur={handleblur}
            value={selectedValue}
            onChange={handleChange}
            required
            disabled={disable}
          />
          <p
            style={{
              color: "#757575",
              pointerEvents: "none",
            }}
            className="cal position-absolute rec d-flex align-items-center justify-content-between"
          >
            Recived On
          </p>
          <i
            className="ri-calendar-todo-fill cal-i cal position-absolute  "
            style={{
              color: "#757575",
              pointerEvents: "none",
            }}
          ></i>
        </div>
      </label>
    </div>
  );
};

export default InputWithdate;
