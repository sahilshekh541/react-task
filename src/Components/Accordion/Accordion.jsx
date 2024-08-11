import { useState } from "react";
import "../../index.css";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const Accordion = ({ title, children, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion mt-1">
      <div
        className="accordion-header d-flex justify-content-between align-items-center"
        onClick={toggleAccordion}
      >
        {title}
        <div className="icons d-flex align-items-center">
          <span className="delete-icon mx-2 deletebtn" onClick={onDelete}>
            <FaTrash />
          </span>
          <span className="me-2 ">{isOpen ? <FaMinus /> : <FaPlus />}</span>
        </div>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
