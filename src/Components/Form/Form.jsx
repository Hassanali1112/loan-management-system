import React from "react";

const Form = ({ field, index  }) => {
  return (



    // props data
    // fields, submitHandler, formText, btnText
    // <div className="form_Container">
    //   <form onSubmit={submitHandler}>
    //     <h2>{formText}</h2>
    //     {fields.map((input, index) => {
    //       console.log(input)
    //       return (

    //           <div className="form-group py-2" key={index}>
    //             <label className="text-capitalize" htmlFor={input.id}>
    //               {input.name} :
    //             </label>
    //             <input
    //             value={input.value}
    //             onChange={(e)=>{
    //               input.update(e.target.value)
    //             }}
    //               type={input.type}
    //               className="form-control"
    //               id={input.id}
    //               placeholder={input.name}
    //             />
    //           </div>

    //       );
    //     })}

    //     {/* render the button component! */}
    //     <input type="submit" value={btnText} className="btn btn-success" />
    //   </form>
    // </div>
    

    <div className="form-group py-2" key={index}>
      <label className="text-capitalize" htmlFor={field.id}>
        {field.name} :
      </label>
      <input
        onChange={(e)=>{field.update(e.target.value)}}
        value={field.value}
        required={field.require}
        type={field.type}
        className="form-control"
        id={field.id}
        placeholder={field.name}
      />
    </div>
  );
};

export default Form;
