import React, { useEffect, useState } from "react";
import Commoninp from "../Commoninput/Commoninp";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";

const Talents = ({
  chkdisable,
  setChkdisable,
  name,
  handlechangeptalent,
  onchange,
  disable,
  isreset,
  index,
  value,
  checked,
  oneSelect,
  handleCheckboxChange,
}) => {
  useEffect(() => {
    setChkdisable(!checked);
  }, [checked]);

  const handleLocalCheckboxChange = (e) => {
    if (oneSelect) {
      handleCheckboxChange(e, index);
      if (!chkdisable || disable) {
        document.querySelectorAll(`.chk-${index}`).forEach((i) => {
          i.setAttribute("disabled", "true");
        });
      } else {
        handlechangeptalent(e, index);
        document
          .querySelectorAll(`.chk-${index}`)
          .forEach((i) => i.removeAttribute("disabled"));
      }
    } else {
      handlechangeptalent(e, index);
      if (chkdisable) {
        document.querySelectorAll(`.chk-${index}`).forEach((i) => {
          i.removeAttribute("disabled");
        });
      } else {
        document
          .querySelectorAll(`.chk-${index}`)
          .forEach((i) => i.setAttribute("disabled", "true"));
      }
    }
  };

  return (
    <div className="row col-md-10  col-lg-12">
      <h6>
        <label htmlFor={name} role="button">
          <input
            type="checkbox"
            className="mx-1"
            id={name}
            name="checked"
            checked={checked}
            onChange={(e) => handleLocalCheckboxChange(e)}
            disabled={disable}
          />
          {name}
        </label>
      </h6>
      <div className="mb-ft row">
        <Commoninp
          field="Contract Duration"
          name="contractduration"
          classname="md-input"
          index={index}
          w={"w-25 md-50"}
          type="text"
          choice="Months"
          disable={disable}
          chkdisable={chkdisable}
          onchange={handlechangeptalent}
          value={value.contractduration}
        />
        <Commoninp
          field="Bill Rate"
          name="billrate"
          index={index}
          classname="sm-input"
          w={"w-15"}
          type="number"
          choice="/hr"
          onchange={handlechangeptalent}
          disable={disable}
          chkdisable={chkdisable}
          value={value.billrate}
        />
        <CurrencyDropdown
          callback={onchange}
          disable={disable}
          isreset={isreset}
          chkdisable={chkdisable}
          index={index}
          iscondition={true}
          name={"currency1"}
          value={value.currency1}
          onchange={handlechangeptalent}
        />
        <Commoninp
          field="Standard Time BR"
          name="stdtimebr"
          index={index}
          placeholder="Std. Time BR"
          classname="sm-input"
          w={"w-15"}
          type="number"
          choice="/hr"
          disable={disable}
          onchange={handlechangeptalent}
          chkdisable={chkdisable}
          value={value.stdtimebr}
        />
        <CurrencyDropdown
          callback={onchange}
          disable={disable}
          isreset={isreset}
          chkdisable={chkdisable}
          iscondition={true}
          index={index}
          name={"currency2"}
          value={value.currency2}
          onchange={handlechangeptalent}
        />
        <Commoninp
          field="Over Time BR"
          name="overtimebr"
          index={index}
          classname="sm-input"
          w={"w-15"}
          type="number"
          choice="/hr"
          onchange={handlechangeptalent}
          disable={disable}
          chkdisable={chkdisable}
          value={value.overtimebr}
        />
        <CurrencyDropdown
          callback={onchange}
          disable={disable}
          isreset={isreset}
          chkdisable={chkdisable}
          iscondition={true}
          index={index}
          name={"currency3"}
          value={value.currency3}
          onchange={handlechangeptalent}
        />
      </div>
    </div>
  );
};

export default Talents;
