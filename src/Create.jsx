import { useState } from "react";
import PropTypes from "prop-types";
function Create({ onAddItem }) {
    const [inputValue, setInputValue] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddItem(inputValue);
      setInputValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
  Create.propTypes = {
    onAddItem: PropTypes.func.isRequired,
};
  export default Create;