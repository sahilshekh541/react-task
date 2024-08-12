import "../../index.css";
import { useEffect } from "react";
const InputContainer = ({
  name,
  type,
  placeholder,
  disable,
  callback,
  field,
  isreset,
  classname,
  value,
}) => {
  const isFieldEmpty = field === "";

  useEffect(() => {
    if (isreset) {
      callback({ target: { name: `${name}`, value: "" } });
    }
  }, [isreset]);

  const handleChange = (e) => {
    const { value } = e.target;
    callback(e);
  };

  return (
    <div className="col">
      <label htmlFor={name} className="md">
        {field}{" "}
        <span
          className="text-danger"
          style={{ opacity: isFieldEmpty ? "0" : "1" }}
        >
          *
        </span>
        <input
          className={`d-block px-2 mt-1 h-10 inp ${classname}`}
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={disable}
          required
        />
      </label>
    </div>
  );
};

export default InputContainer;
