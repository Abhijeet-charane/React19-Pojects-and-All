import { useState } from "react";

// const users = 

export const DerivedState = () => {
  const [users, setUsers] = useState([
  
    { name: "Alice", age: 35 },
    { name: "Bob", age: 41 },
    { name: "Nik", age: 22 },
    { name: "Shirley", age: 14 },
   
  ]);

  console.log(users);
  const userCount = users.length;
  const averageAge =
  userCount > 0
    ? (users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount).toFixed(2)
    : 0;


  return(
    <div className="main-div">
      <h1>User List</h1>
      <ul>
        {
          users.map((curElem, index) =>{
            return(
              <li key={index}>
                {curElem.name}  {curElem.age} years old
              </li>
            )
          })
        }
      </ul>
      <p>Total Users: {userCount}</p>
      <p>Average Age: {averageAge}</p>
    </div>
  )
}