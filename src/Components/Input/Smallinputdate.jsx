import { useState, useEffect } from "react";

const Smallinputdate = (props, { isreset }) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (isreset) {
      setSelectedValue("");
    }
  }, [isreset]);

  useEffect(() => {
    const poenddate = document.querySelector("#poenddate");
    poenddate.setAttribute("disabled", "true");
  }, []);

  useEffect(() => {
    const poenddate = document.querySelector("#poenddate");
    if (props.formdata.postartdate) {
      poenddate.removeAttribute("disabled");
    } else {
      poenddate.setAttribute("disabled", "true");
    }
  }, [props.formdata.postartdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "poenddate" && props.formdata.postartdate) {
      const startDate = new Date(props.formdata.postartdate);
      const endDate = new Date(value);

      if (endDate < startDate) {
        alert("End Date cannot be before Start Date");
        e.target.value = ""; // Reset the invalid end date
        return;
      }
    }

    setSelectedValue(value);
    props.callback(e); // Proceed with the update if the date is valid
  };

  const handlefocus = (e) => {
    document.querySelector(`.cal${props.k}`).style.opacity = "0";
    document.querySelector(`.cal-i${props.k}`).style.opacity = "0";
    e.target.type = "date";
    e.target.showPicker();
  };

  const handleblur = (e) => {
    if (!e.target.value) {
      document.querySelector(`.cal${props.k}`).style.opacity = "100";
      document.querySelector(`.cal-i${props.k}`).style.opacity = "100";
      e.target.type = "text"; // Revert to "text" if no date is selected
    }
  };

  return (
    <div className="col small-input">
      <label htmlFor={props.name}>
        {props.field} <span className="text-danger">*</span>
        <div className="input-d position-relative">
          <input
            style={{ width: "150px" }}
            className="d-block small-input"
            name={props.name}
            id={props.name}
            onFocus={handlefocus}
            onBlur={handleblur}
            type="text"
            onChange={handleChange}
            required
            disabled={props.disable}
          />
          <p
            style={{ color: "#757575", pointerEvents: "none" }}
            className={`cal cal${props.k} position-absolute rec d-flex align-items-center justify-content-between`}
          >
            {props.placeholder}
          </p>
          <i
            className={`ri-calendar-todo-fill cal-i cal-i${props.k} position-absolute`}
            style={{ color: "#757575", pointerEvents: "none" }}
          ></i>
        </div>
      </label>
    </div>
  );
};

export default Smallinputdate;
