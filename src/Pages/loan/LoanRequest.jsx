import React, { useState } from "react";
import Form from "../../Components/Form/Form";
import MyNavbar from "../../Components/Navbar/MyNavbar";
import { Button } from "react-bootstrap";

const LoanRequestForm = () => {

  // personal data states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [dob, setDob] = useState("");
  const [nationalId, setNationalId] = useState("");

  // location data states
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [country, setCountry] = useState("")

  //  employment data states
  const [employmentStatus, setEmploymentStatus] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [companyName, setCompantName] = useState("")
  const [salary, setSalary] = useState("")
  const [otherIncomeSource, setOtherIncomeSource] = useState("")

  // loan amount states;
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [term, setTerm] = useState("");
  const [method, setMethod] = useState("");

  

  //  const fields = [
  //    {
  //      type: "text",
  //      value: name,
  //      update: setName,
  //      name: "full name",
  //      requrire: true,
  //      id: "nameInput",
  //    },
  //    {
  //      type: "email",
  //      value: email,
  //      update: setEmail,
  //      name: "email",
  //      require: true,
  //      id: "emailInput",
  //    },
  //    {
  //      type: "number",
  //      value: number,
  //      update: setNumber,
  //      name: "number",
  //      require: true,
  //      id: "numberInput",
  //    },
  //    {
  //      type: "date",
  //      value: dob,
  //      update: setDob,
  //      name: "date of birth",
  //      require: true,
  //      id: "dobInput",
  //    },
  //    {
  //      type: "number",
  //      value: nationalId,
  //      update: setNationalId,
  //      name: "Cnic number",
  //      require: true,
  //      id: "nationalIdInput",
  //    },
  //  ];

  const formsData = [
    [
      {
        type: "text",
        value: name,
        update: setName,
        name: "full name",
        requrire: true,
        id: "nameInput",
      },
      {
        type: "email",
        value: email,
        update: setEmail,
        name: "email",
        require: true,
        id: "emailInput",
      },
      {
        type: "number",
        value: number,
        update: setNumber,
        name: "number",
        require: true,
        id: "numberInput",
      },
      {
        type: "date",
        value: dob,
        update: setDob,
        name: "date of birth",
        require: true,
        id: "dobInput",
      },
      {
        type: "number",
        value: nationalId,
        update: setNationalId,
        name: "Cnic number",
        require: true,
        id: "nationalIdInput",
      },
    ],
    [
      {
        type: "text",
        value: address,
        update: setAddress,
        name: "current address",
        requrire: true,
        id: "addressInput",
      },
      {
        type: "text",
        value: city,
        update: setCity,
        name: "City",
        require: true,
        id: "cityInput",
      },
      {
        type: "number",
        value: postalCode,
        update: setPostalCode,
        name: "postal code",
        require: true,
        id: "numberInput",
      },
      {
        type: "text",
        value: country,
        update: setCountry,
        name: "your country",
        require: true,
        id: "countryInput",
      }
    ],
    [
      {
        type: "text",
        value: employmentStatus,
        update: setEmploymentStatus,
        name: "employment status",
        requrire: true,
        id: "employmentInput",
      },
      {
        type: "text",
        value: jobTitle,
        update: setJobTitle,
        name: "job title / professional",
        require: true,
        id: "employmentInput",
      },
      {
        type: "text",
        value: companyName,
        update: setCompantName,
        name: "company name",
        require: true,
        id: "companyInput",
      },
      {
        type: "text",
        value: salary,
        update: setSalary,
        name: "monthy income",
        require: true,
        id: "salaryInput",
      },
      {
        type: "text",
        value: otherIncomeSource,
        update: setOtherIncomeSource,
        name: "other income sources",
        require: true,
        id: "otherIncomeInput",
      },
    ],
    [
      {
        type: "text",
        value: amount,
        update: setAmount,
        name: "amount",
        requrire: true,
        id: "amounInput",
      },
      {
        type: "text",
        value: purpose,
        update: setPurpose,
        name: "loan purpose",
        require: true,
        id: "purposeInput",
      },
      {
        type: "text",
        value: term,
        update: setTerm,
        name: "loan term",
        require: true,
        id: "termInput",
      },
      {
        type: "text",
        value: method,
        update: setMethod,
        name: "loan method",
        require: true,
        id: "methodInput",
      }
    ],
  ];

  const formTitles = [
    "Personal Information Form",
    "Location Information Form",
    "Emploment Form",
    "Loan Amount Form",
  ];
  let formNum = 0;

  // console.log(formsData.map())
  const submitHandler = () => {
    event.preventDefault();
    console.log(" clicked");
  };

  return (
    <>
      <MyNavbar />
      <form className="container " onSubmit={submitHandler}>
        {formsData.map((fields, index) => {
          return (
            <div className="form_Container container" key={index}>
              <div className="form">
                <h3 className="text-center">{formTitles[formNum]}</h3>
                {fields.map((field, index) => {
                  // console.log(field)
                  return <Form field={field} index={index} key={index} />;
                })}
                <p className="d-none">{formNum++}</p>
                {/* render the button component! */}
                {/* <input type="submit" value={"Submit"} className="btn" /> */}
              </div>
            </div>
          );
        })}
        <div className="submitInp d-flex justify-content-center border">
          <Button type="submit" value={"Submit"} className="btn text-center ">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoanRequestForm;
