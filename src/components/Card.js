import { useState } from "react";
import { Link } from "react-router-dom";

function Card(props){

    const [showAlert, setShowAlert] = useState(false);
    const deleteDestination = (id) => {
        fetch("http://localhost:3000/employees/" + props.destination.id , {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setShowAlert(true);
          });
    }

    return ( 
        <>
        
        <div className="card" style={{width: '18rem'}}>
        {showAlert && <div class="alert alert-danger" role="alert">
                This destination is deleted, refresh to remove!
        </div>}  
        <img src="https://picsum.photos/200" className="card-img-top" alt="No image available"/>
        <div className="card-body">
            <h5 className="card-title">{props.destination.employee}</h5>
            <p className="card-text">{props.destination.batch}</p>
            <Link className="btn btn-primary" to={'/updatedestination/' + props.destination.id + "/" + props.destination.batch}>Update Details</Link>
            <button onClick={deleteDestination} className="btn btn-danger"> X </button>
        </div>
        </div>
        </>
    )
}

export default Card;