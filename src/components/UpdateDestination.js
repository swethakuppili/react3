import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function UpdateEmployee(props) {


    const params = useParams();

   
    const [batch, setBatch] = useState(params.batch);
    const [showAlert, setShowAlert] = useState(false);


    const updateDestination = (batch) => {
        console.log({ batch });
        
        fetch("http://localhost:3000/employees/" + params.id , {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({batch }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setShowAlert(true);
          });
      };

      

   

    return (
      <>
        <div>
            <h2>Update details</h2>
            {showAlert && <div class="alert alert-success" role="alert">
                Successfully updated destination!
            </div>}
           
            
           
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> Batch</span>
            <input type="text" onChange={(e)=> setBatch(e.target.value)} value={batch} class="form-control" placeholder="Enter batch" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <button className= "btn btn-primary" onClick={()=>updateDestination ( batch)}>Update details</button>
        </div>
        </>
      
    )
    }

export default UpdateEmployee
