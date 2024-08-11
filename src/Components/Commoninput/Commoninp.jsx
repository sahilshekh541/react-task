import { useState, useEffect } from "react";

const Commoninp = ({
  w,
  field,
  type,
  classname,
  choice,
  placeholder,
  chkdisable,
  disable,
  handlechangeptalent,
  index,
  onchange,
  name,
  isreset,
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (isreset) {
      setSelectedValue("");
    }
  }, [isreset]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
    onchange(e, index);
  };

  return (
    <div className={`${w}`}>
      <span>{field}</span>
      <div className={`input-row d-flex border border-black p-1 mt-1 `}>
        <input
          name={name}
          id={name}
          type={type}
          className={`${classname} px-1 text-primary border-0 chk-${index} `}
          placeholder={placeholder ? placeholder : field}
          value={selectedValue}
          required
          disabled={true || disable}
          onChange={handleChange}
        />
        <span className="text-secondary me-1">{choice}</span>
      </div>
    </div>
  );
};

export default Commoninp;
