import { useState, useEffect } from "react";

import "./index.css";
import Purchaseview from "./Views/Purchaseview";

import "./index.css";
import { ClearTalent } from "./Controlls/ClearTalent";

const App = () => {
  const [disable, setDisable] = useState(false);
  const [isreset, setIsreset] = useState(false);
  const [showaddbutton, setShowaddbutton] = useState(false);
  const [chkdisable, setChkdisable] = useState(true);
  const [oneSelect, setOneSelect] = useState(false);

  const [formdata, setFormdata] = useState({
    clientname: "",
    purchaseordertype: "",
    purchaseordernumber: "",
    recieveddate: "",
    recievedname: "",
    recievedemail: "",
    postartdate: "",
    poenddate: "",
    budget: "",
    currency: "",
  });
  const [ptalent, setPtalent] = useState([
    // {
    //   checked: false,
    //   contractduration: "",
    //   billrate: "",
    //   currency1: "",
    //   stdtimebr: "",
    //   currency2: "",
    //   overtimebr: "",
    //   currency3: "",
    // },
  ]);
  const [talentdata, setTalentdata] = useState([{ jobtitle: "", jobid: "" }]);

  const joboptions = [
    { value: "Application Development" },
    { value: "Web Development" },
  ];

  const handleaddanother = () => {
    setTalentdata((prevdata) => [...prevdata, { jobtitle: "", jobid: "" }]);
  };

  const handlejobtitlechange = (e, index) => {
    const { name, value } = e.target;

    const updatedTalentdata = [...talentdata];

    updatedTalentdata[index] = { ...updatedTalentdata[index], [name]: value };

    if (updatedTalentdata[index].jobtitle === "Application Development") {
      document.querySelector(`#jobid${index}`).value = "OWNAI_234";
      setTalentdata(updatedTalentdata);
    }
    if (updatedTalentdata[index].jobtitle === "Web Development") {
      document.querySelector(`#jobid${index}`).value = "OWNAI_899";
      setTalentdata(updatedTalentdata);
    }
    if (updatedTalentdata[index].jobtitle === "") {
      document.querySelector(`#jobid${index}`).value = "";
      setTalentdata(updatedTalentdata);
    }
  };

  const onchange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  useEffect(() => {
    if (formdata.purchaseordertype === "Individual PO") {
      if (ptalent.length === 1) {
        setOneSelect(true);
      }
    } else {
      setOneSelect(false);
    }
  }, [formdata.purchaseordertype]);

  const hanldesubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formdata || !formdata.purchaseordertype) {
      alert("Purchase order type is required");
      return;
    }

    if (!ptalent || ptalent.length === 0) {
      alert("Please select at least one talent");
      return;
    }

    // Handling Group PO
    if (formdata.purchaseordertype === "Group PO") {
      if (ptalent.length < 2) {
        alert("Select at least 2 talents for Group PO");
        return;
      } else {
        setDisable(true);
        setChkdisable(true);
      }
    }
    // Handling Group PO
    if (formdata.purchaseordertype === "Individual PO") {
      if (ptalent.length < 1) {
        alert("Select at least 1 talents for Individual PO");
        return;
      }
      if (ptalent.length > 2) {
        alert("Select Only 1 talents for Individual PO");
        return;
      } else {
        setDisable(true);
        setChkdisable(true);
      }
    }
  };

  const handleDelete = (index) => {
    if (talentdata.length === 1) {
      const resetTalent = [{ jobtitle: "", jobid: "" }];
      setTalentdata(resetTalent);
      document.querySelector(`#jobid${index}`).value = "";
      ClearTalent(setPtalent, index);
      console.log(resetTalent);
    } else {
      const updatedAccordions = talentdata.filter((_, i) => i !== index);
      document.querySelector(`#jobid${index}`).value = "";
      setTalentdata(updatedAccordions);
      ClearTalent(setPtalent, index);
    }
  };

  return (
    <form onSubmit={hanldesubmit} className="d-grid p-3">
      {/* noValidate={true} */}
      <Purchaseview
        onchange={onchange}
        disable={disable}
        setDisable={setDisable}
        isreset={isreset}
        setIsreset={setIsreset}
        formdata={formdata}
        talentdata={talentdata}
        showaddbutton={showaddbutton}
        setShowaddbutton={setShowaddbutton}
        joboptions={joboptions}
        handleaddanother={handleaddanother}
        handleDelete={handleDelete}
        handlejobtitlechange={handlejobtitlechange}
        chkdisable={chkdisable}
        setChkdisable={setChkdisable}
        ptalent={ptalent}
        setPtalent={setPtalent}
        oneSelect={oneSelect}
      />
    </form>
  );
};

export default App;
