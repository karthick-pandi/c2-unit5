import {useState} from "react";
import axios from "axios";





export const AddStudent = () => {
  const [user,setUser]=useState({
    first_name:"",
    last_name:"",
    email:"",
    gender0:"",
    age:"",
    tenth_score:"",
    twelth_score:"",
    preferred_branch:"",
  })


  const  gettinguser=(e)=>{
    let detailes=e.target.name==="gender" || e.target.name==="preferred_branch" ;
    setUser(detailes);
  }


  const postOnDataBase=(e)=>{
    e.preventDefault()
    for(var x in user){
      if(user[x].length===0){
        alert("empty");
        return
      }
    }
    axios.post('http://localhost:8080/students',{
      first_name:user.first_name,
      last_name:user.last_name,
      email:user.email,
      gender:user.gender,
      age:user.age,
      tenth_score:user.tenth_score,
      twelth_score:user.twelth_score,
      preferred_branch:user.preferred_branch,
    })
    .then(function(responce){
      console.log(responce);
      alert("successfully");
      document.getElementById("newform").repeat();
      setUser({
        first_name:"",
         last_name:"",
         email:"",
    gender:"",
    age:"",
    tenth_score:"",
    twelth_score:"",
    preferred_branch:"",
      })
    })
    .catch(function(error){
      console.log(error);
    })
    .then(function(){

    });
  }




  return (
    <form className="addstudent">
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          onChange={gettinguser}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onClick={gettinguser}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onClick={gettinguser}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={gettinguser}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          onChange={gettinguser}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={gettinguser}
        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={gettinguser}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input onClick={postOnDataBase} className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};