import React, { useState } from 'react'
import Form from '../../Components/Form/Form'

const PersonalData = () => {

  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [dob, setDob] = useState('')
    // const [confPassword, setConfPassword] = useState('')
    const [nationalId, setNationalId] = useState('')

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
        value: name,
        update: setName,
        name: "current address",
        requrire: true,
        id: "nameInput",
      },
      {
        type: "text",
        value: email,
        update: setEmail,
        name: "City",
        require: true,
        id: "emailInput",
      },
      {
        type: "number",
        value: number,
        update: setNumber,
        name: "postal code",
        require: true,
        id: "numberInput",
      },
      {
        type: "text",
        value: dob,
        update: setDob,
        name: "your country",
        require: true,
        id: "dobInput",
      },
      // {
      //   type: "number",
      //   value: nationalId,
      //   update: setNationalId,
      //   name: "Cnic number",
      //   require: true,
      //   id: "nationalIdInput",
      // },
    ],
    [
      {
        type: "text",
        value: name,
        update: setName,
        name: "employment status",
        requrire: true,
        id: "nameInput",
      },
      {
        type: "text",
        value: email,
        update: setEmail,
        name: "job title / professional",
        require: true,
        id: "emailInput",
      },
      {
        type: "text",
        value: number,
        update: setNumber,
        name: "company name",
        require: true,
        id: "numberInput",
      },
      {
        type: "number",
        value: dob,
        update: setDob,
        name: "monthy income",
        require: true,
        id: "dobInput",
      },
      {
        type: "text",
        value: nationalId,
        update: setNationalId,
        name: "other income sources",
        require: true,
        id: "nationalIdInput",
      },
    ],
  ];


  const formTitles = ["Personal Information Form", "Location Form", "Emploment Information Form", "Loan Amount Form"];
  let formNum = 0;


  // console.log(formsData.map())
   const submitHandler = ()  =>{

   }

  return (
    // <>
    //   <div className="form_Container container">
    //     <form onSubmit={submitHandler}>
    //       <h2 className="text-center">Personal Information Form</h2>
    //       {fields.map((field, index) => {
    //         // console.log(field)
    //         return <Form field={field} index={index} key={index} />;
    //       })}

    //       {/* render the button component! */}
    //       {/* <input type="submit" value={"Submit"} className="btn" /> */}
    //     </form>
    //   </div>
    // </>
      
    <>
    
    {
      formsData.map((fields,index)=>{
        return (
          <div className="form_Container container" key={index}>
            <form onSubmit={submitHandler}>
              <h2 className="text-center">{formTitles[formNum]}</h2>
              {fields.map((field, index) => {
                // console.log(field)
                return <Form field={field} index={index} key={index} />;
              })}
              <p className='d-none'>{formNum++}</p>
              {/* render the button component! */}
              {/* <input type="submit" value={"Submit"} className="btn" /> */}
            </form>
          </div>
        );
      })
    }
    
    </>


  );
}

export default PersonalData