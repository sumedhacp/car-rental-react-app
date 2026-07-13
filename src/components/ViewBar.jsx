import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewBar = () => {
const[data,changeData] =useState([])

const fetchData =() => {
    axios.get("https://host-demo-app.onrender.com/api/cars").then(
        (response) => {
            changeData(response.data)
        }
    ).catch()
}

useEffect(
    ()=> {
        fetchData()
    },[]
)
  return (

<div>
      
<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                            <div className="card" >
                                               
                                                <div className="card-body">
                                                    <div>
                                                        <strong>ID :</strong> {value.id} <br />
                                                        <strong>Registration Number :</strong> {value.registration_number} <br />
                                                        <strong>Brand :</strong> {value.brand} <br />
                                                        <strong>Model : </strong> {value.model} <br />
                                                        <strong>Vehicle Type : </strong> {value.vehicle_type} <br />
                                                        <strong>Fuel Type : </strong> {value.fuel_type} <br />
                                                        <strong>Transmission : </strong> {value.transmission} <br />
                                                        <strong>Seating capacity : </strong> {value.seating_capacity} <br />
                                                        <strong>Rent per day : </strong> {value.rent_per_day} <br />
                                                        <strong>City : </strong> {value.city} <br />
                                                        <strong>Available status : </strong> {value.availability_status} <br />
                                                        
                                                       
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>
                </div>
            </div>
</div>

  )
}

export default ViewBar