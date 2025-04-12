import React, { useState } from 'react'
import Form from '../../Components/Form/Form'
import { Button } from 'react-bootstrap'
import { supabase } from '../../Utils/config'
import "./auth.css"

const Registeration = () => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [number, setNumber] = useState('')


  const fields = [
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
      type: "password",
      value: password,
      update: setPassword,
      name: "password",
      require: true,
      id: "passwordInput",
    },
    {
      type: "password",
      value: confPassword,
      update: setConfPassword,
      name: "Confirm password",
      require: true,
      id: "confPasswordInput",
    },
    {
      type: "number",
      value: number,
      update: setNumber,
      name: "number",
      require: true,
      id: "numberInput",
    },
  ];

  const submitHandler = async (event) =>{
    event.preventDefault()
    let nameRegex = /^[A-Za-z]+ [A-Za-z]+$/
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRexex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let numberRegex = /^(?:\+92|0092|92|0)?3[0-9]{9}$/;




    if(nameRegex.test(name)){
      console.log("done")
      if(emailRegex.test(email)){
      console.log("done");
      if(passwordRexex.test(password)){
      console.log("done");
        if(password === confPassword){
      console.log("done");
          if(numberRegex.test(number)){
            console.log("finally done")
            try {
              const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                      })
                      if(error) throw error;
                      if(data) {
                        console.log(data)
                        const { data : newUserData , error : newUserDataError } = await supabase
                          .from("users")
                          .insert({  
                            name,
                            email,
                            password,
                            number,
                            })
                          .select();
                          if(newUserData){
                            console.log(newUserData)
                            window.location.assign("/login");
                          } else{
                            console.log(newUserDataError)
                          }
                      }
                  
            } catch (error) {
              console.log(error)
            }
          } else{
      console.log("number is incorrect formate");

          }
          
        } else{
      console.log("passwords did not match");

        }
      } else{
      console.log("password is incorrect formate");

      }

      } else{
      console.log("email is incorrect formate");

      }
    }else{
      console.log("name is incorrect formate")
    }
    // console.log(name,email,password,confPassword,number)
    // alert("submit hit")
    setEmail("")
    setName("")
    setPassword("")
    setConfPassword("")
    setNumber("")

  }

  return (
    <>
      <div className="form_Container container">
        <form className='form' onSubmit={submitHandler}>
          <h2 className="text-center">Sign Up Form</h2>
          {fields.map((field, index) => {
            // console.log(field)
            return (
              <Form field={field} index={index} key={index} />
              // <div className="form-group py-2" key={index}>
              //   <label className="text-capitalize" htmlFor={input.id}>
              //     {input.name} :
              //   </label>
              //   <input
              //   value={input.value}
              //   onChange={(e)=>{
              //     input.update(e.target.value)
              //   }}
              //     type={input.type}
              //     className="form-control"
              //     id={input.id}
              //     placeholder={input.name}
              //   />
              // </div>
            );
          })}

          {/* render the button component! */}
          <input
            type="submit"
            value={"Submit"}
            className="btn"
          />
        </form>
      </div>
    </>
  );
}

export default Registeration
