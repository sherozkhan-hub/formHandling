import { useState } from "react";
import GenForm from "./GenForm";

function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    address: "",
  });
  const [forms, setForms] = useState([formData]);

  const [secondData, setSecondData] = useState({
    degree: "",
    university: "",
    location: "",
  });

  const [obj, setObj] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDelete = (index) => {
    const array = [...forms];
    array.splice(index, 1);
    setForms(array);
  };

  const handleForm = () => {
    setForms([...forms, { degree: "", university: "", location: "" }]);
    console.log(forms);
  };

  const isValid = () => {
    if (
      formData.firstname.trim() !== "" &&
      formData.firstname.length > 4 &&
      formData.lastname.trim() !== "" &&
      formData.lastname.length > 4 &&
      formData.age >= 15 &&
      (secondData.degree.length >= 4 || secondData.degree.length == "") &&
      formData.address.trim() !== ""
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      console.log("Form data submitted:", obj);
      alert("Form submitted successfully");
    } else {
      console.log("Form data is incomplete");
      alert("Form is incomplete or invalid");
    }
  };

  return (
    <div className="form-container">
      <h2>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            onChange={handleChange}
            id="firstname"
            name="firstname"
            required
          />
          <p>
            {formData.firstname && formData.firstname.length < 4
              ? "Firstname should be greater than 4 chareacters"
              : ""}
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            onChange={handleChange}
            name="lastname"
            required
          />
          <p>
            {formData.lastname && formData.lastname.length < 4
              ? "Lastname should be greater than 4 chareacters"
              : ""}
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            onChange={handleChange}
            id="age"
            name="age"
            required
          />
          <p>{formData.age < 15 ? "Age should be greater than 15" : ""}</p>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            onChange={handleChange}
            name="address"
            rows="4"
            required
          />
        </div>
        <div>
          <div className="form-group">
            <button type="button" onClick={handleForm}>
              Add Education
            </button>
          </div>
          {forms.map((item, index) => {
            if (index === 0) return null;

            return (
              <GenForm
                key={index}
                secondData={secondData}
                setSecondData={setSecondData}
                setObj={setObj}
                formData={formData}
                onDel={() => handleDelete(index)}
              />
            );
          })}
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
