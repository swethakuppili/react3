import React, { useEffect, useState } from 'react'
import Card from './Card'

function ViewEmployee() {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/employees")
  .then((res) => res.json())
  .then((data) => {
    setDestinations(data)
  })
   
}, [])


    let destinationsList = destinations.map((destination, i) => {
        return (
          <Card key={i} destination={destination} />
        )
      })
    return (
        <>
        <h2>View Employees</h2>
        <div className="row">
            {destinationsList}
      </div>
      </>
    )
}

export default ViewEmployee
