import {useEffect,useState} from "react";
import axios from "axios";

export const ShowStudents = () => {
  const [showStudents,setShowStudents]=useState([]);

  useEffect(()=>{
    getStudentDetailes()
  },[])

  const getStudentDetailes=()=>{
    axios.get('http://localhost:8080/students')
    .then(function(responce){
      setShowStudents(responce.data)
    })
    .catch(function(error){
      console.log(error)
    })
    .then(function (){

    });
  }

  const sortWhat=()=>{
    axios.get('http://localhost:8080/students')
    .then(function (responce){
      console.log(responce);
      setShowStudents(responce.data)
    })
    .catch(function(error){
      console.log(error)
    })
    .then(function (){

    });
  }





  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option onClick={()=>{
              sortWhat("first_name")
            }}
            value="first_name" >First Name</option>
            <option  onClick={()=>{
              sortWhat("first_name")
            }}
            value="gender">Gender</option>
            <option onClick={()=>{
              sortWhat("age")
            }}
            value="age">Age</option>
            <option onClick={()=>{
              sortWhat("tenth_score")
            }}
            value="tenth_score">10th Score</option>
            <option onClick={()=>{
              sortWhat("twelth_score")
            }}
            value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {showStudents.map((e,i)=>{
            
            return <tr key={i} className="row">

          
          
            <td className="first_name">{e.first_name}</td>
            <td className="last_name">{e.last_name}</td>
            <td className="email">{e.email}</td>
            <td className="gender">{e.gender}</td>
            <td className="age">{e.age}</td>
            <td className="tenth_score">{e.tenth_score}</td>
            <td className="twelth_score">{e.twelth_score}</td>
            <td className="preferred_branch">{e.preferred_branch}</td>
          </tr>
          })
          }
        </tbody>
      </table>
    </div>
  );
};