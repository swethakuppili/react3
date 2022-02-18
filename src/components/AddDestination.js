import React, { useState } from 'react'

function AddEmployee(props) {

    const [name, setName] = useState('');
    const [batch, setBatch] = useState('');
    const [showAlert, setShowAlert] = useState(false);


    const handleNameChange = (event) => {
        console.log('handle name changed called..')
        console.log(event.target.value);
        setName(event.target.value);
    }

    const addDestination = (name, batch) => {
        console.log({ name, batch });
        
        fetch("http://localhost:3000/employees", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ employee: name, batch }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setShowAlert(true);
          });
      };

      

   

    return (
        <div>
            <h2>Add Employee</h2>
            {showAlert && <div className="alert alert-success" role="alert">
                Successfully added the batch!
            </div>}

            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1"> Name</span>
            <input type="text" onChange={handleNameChange} value={name} className="form-control" placeholder="Enter employee name" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Batch</span>
            <input type="text" onChange={(e)=> setBatch(e.target.value)} value={batch} className="form-control" placeholder="Enter batch" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <button classNameName= "btn btn-primary" onClick={()=>addDestination(name, batch)}>Add details</button>
        </div>
    )
}

export default AddEmployee
