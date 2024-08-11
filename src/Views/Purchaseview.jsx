import DropDown from "../Components/Dropdown/DropDown";
import OrderDropdown, {
  PurchaseNumber,
} from "../Components/Dropdown/OrderDropdown";
import "../index.css";
import InputWithdate from "../Components/Input/InputWithdate";
import InputContainer from "../Components/Input/InputContainer";
import Smallinputdate from "../Components/Input/Smallinputdate";
import Smallinput from "../Components/Input/Smallinput";
import CurrencyDropdown from "../Components/CurrencyDropdown/CurrencyDropdown";
import Talents from "../Components/talents/Talents";
import Accordion from "../Components/Accordion/Accordion";
import { talents } from "../data/talents";
const Purchaseview = ({
  onchange,
  disable,
  isreset,
  formdata,
  setIsreset,
  setDisable,
  showaddbutton,
  setShowaddbutton,
  talentdata,
  joboptions,
  handleaddanother,
  handleDelete,
  handlejobtitlechange,
  chkdisable,
  setChkdisable,
  ptalent,
  setPtalent,
  oneSelect,
}) => {
  const options = [
    { value: "Collabera - Collabera inc", label: "Collabera - Collabera inc" },
    { value: "MNC - MNC inc", label: "MNC - MNC inc" },
  ];

  const handleCheckboxChange = (e, index) => {
    const isChecked = e.target.checked;
    const updatedPtalent = ptalent.map((item, i) => ({
      ...item,
      checked: i === index ? isChecked : oneSelect ? false : item.checked,
    }));
    setPtalent(updatedPtalent);
  };

  const handlechangeptalent = (e, index) => {
    const { name, value, checked } = e.target;

    const updatedPtalent = [...ptalent];

    if (name === "checked" && !checked) {
      // Remove the entry if the checkbox is unchecked
      updatedPtalent.splice(index, 1);
    } else {
      //update the entry
      const newValue = name === "checked" ? checked : value || "false";
      updatedPtalent[index] = {
        ...updatedPtalent[index],
        [name]: newValue,
      };
    }

    // Update state
    setPtalent(updatedPtalent);
  };

  const handlereset = () => {
    setIsreset(true);
    document.querySelector("#postartdate").type = "text";
    document.querySelector("#poenddate").type = "text";
    document.querySelector(`.cal1`).style.opacity = "100";
    document.querySelector(`.cal-i1`).style.opacity = "100";
    document.querySelector(`.cal2`).style.opacity = "100";
    document.querySelector(`.cal-i2`).style.opacity = "100";
    setPtalent([]);
    console.log(ptalent);
    setTimeout(() => {
      setIsreset(false);
      setDisable(false);
    }, 500);
  };

  return (
    <>
      <div className="row rown1">
        <DropDown
          callback={onchange}
          name={"clientname"}
          disable={disable}
          field={"Client Name"}
          isreset={isreset}
          options={options}
        />
        <OrderDropdown
          callback={onchange}
          disable={disable}
          isreset={isreset}
          setShowaddbutton={setShowaddbutton}
        />
        <PurchaseNumber
          callback={onchange}
          formdata={formdata}
          disable={disable}
          isreset={isreset}
        />
        <InputWithdate
          field="Recieved On"
          placeholder="Received On"
          name="recieveddate"
          callback={onchange}
          disable={disable}
          formdata={formdata}
          isreset={isreset}
        />
      </div>
      <div className="row rown3 col-12 lg-s">
        <div className="responsive-r col d-flex">
          {" "}
          <InputContainer
            name="recievedname"
            field="Recieved From"
            placeholder={"Recived From Name"}
            type={"text"}
            callback={onchange}
            disable={disable}
            value={formdata.recievedname}
            formdata={formdata}
            isreset={isreset}
          />
          <InputContainer
            name="recievedemail"
            field=""
            placeholder={"Recived From Email"}
            type={"email"}
            callback={onchange}
            disable={disable}
            formdata={formdata}
            isreset={isreset}
          />
        </div>
        <Smallinputdate
          name="postartdate"
          field="PO Start Date"
          placeholder="Start Date"
          callback={onchange}
          k="1"
          formdata={formdata}
          disable={disable}
          isreset={isreset}
        />
        <Smallinputdate
          name="poenddate"
          field="PO End Date"
          placeholder="End Date"
          callback={onchange}
          k="2"
          formdata={formdata}
          disable={disable}
        />
        <Smallinput
          name="budget"
          field="Budget"
          placeholder="Budget"
          callback={onchange}
          formdata={formdata}
          disable={disable}
          isreset={isreset}
        />
        <CurrencyDropdown
          callback={onchange}
          formdata={formdata}
          name={"currency"}
          disable={disable}
          isreset={isreset}
          iscondition={false}
        />
      </div>

      {/* save and reset button */}
      <div className="footer position-fixed bottom-0 end-0 p-4">
        <button
          type="reset"
          className="btnsub mt-2 py-1 px-3 mx-2 border-1 rounded-pill text-capitalize"
          onClick={() => handlereset()}
        >
          reset
        </button>
        <button
          type="submit"
          className="btnsub mt-2 py-1 px-2 border-1 rounded-pill text-capitalize"
          disabled={disable}
        >
          save
        </button>
      </div>
      {/* save and reset button over here*/}

      <div className="talent-section mt-3">
        <div className="head d-flex align-items-center justify-content-between ">
          <h6 className="p-1">Talent Detail</h6>
          {showaddbutton ? (
            <fieldset
              className="border border-dark py-1 px-4 rounded-pill addbtn"
              role="button"
              style={{ fontSize: "13px", backgroundColor: "transparent" }}
              onClick={() => {
                if (!disable) {
                  handleaddanother(); // Only call the function if it's not disabled
                }
              }}
              disabled={disable}
            >
              + Add Another
            </fieldset>
          ) : (
            ""
          )}
        </div>

        {talentdata.map((tl, index) => {
          const currenttalent = talents.filter((t) => t.talent === tl.jobtitle);
          return (
            <Accordion
              key={index}
              title={
                <div className="job-desc row p-1">
                  <DropDown
                    field={"Job title/REQ Name"}
                    name={`jobtitle`}
                    options={joboptions}
                    index={index}
                    callback={(e) => handlejobtitlechange(e, index)}
                    isreset={isreset}
                    disable={disable}
                    setPtalent={setPtalent}
                    value={talentdata[index].jobtitle}
                  />
                  <InputContainer
                    name={`jobid${index}`}
                    disable={true}
                    field={"Job ID/REQ ID"}
                  />
                </div>
              }
              onDelete={() => handleDelete(index)}
            >
              <div className="talents mt-2 d-flex flex-column gap-4 row3">
                {currenttalent.map((t, tIndex) => {
                  const talent = ptalent[tIndex] || {};
                  return (
                    <Talents
                      key={tIndex}
                      chkdisable={chkdisable}
                      setChkdisable={setChkdisable}
                      name={t.name}
                      index={tIndex}
                      handlechangeptalent={handlechangeptalent}
                      onchange={handlechangeptalent}
                      setPtalent={setPtalent}
                      ptalent={ptalent}
                      handleCheckboxChange={handleCheckboxChange}
                      disable={disable}
                      isreset={isreset}
                      value={talent}
                      checked={talent.checked || false}
                      oneSelect={oneSelect}
                    />
                  );
                })}
              </div>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default Purchaseview;
