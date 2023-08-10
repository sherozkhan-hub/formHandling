/* eslint-disable react/prop-types */
function GenForm({ secondData, setSecondData, onDel, setObj, formData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSecondData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setObj({ ...formData, ...secondData });
    // console.log(secondData);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission on Enter key
    }
  };

  return (
    <div className="form-container">
      <h2>Education Information</h2>
      <div className="form-group">
        <label>Degree:</label>
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          name="degree"
          type="text"
          required
        />
        <p>
          {secondData.degree.length <= 4 ? "Must be at least 4 characters" : ""}
        </p>
      </div>
      <div className="form-group">
        <label>University:</label>
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          name="university"
          type="text"
          required
        />
      </div>
      <div className="form-group">
        <label>Location:</label>
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          name="location"
          type="text"
          required
        />
        <p>
          {secondData.location.length > 10
            ? "Address should contain more detail "
            : ""}
        </p>
      </div>
      <button onClick={onDel}>Delete</button>
    </div>
  );
}

export default GenForm;
