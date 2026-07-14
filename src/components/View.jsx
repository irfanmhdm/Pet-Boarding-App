import axios from "axios";
import React, { useEffect, useState } from "react";

const View = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:3001/pet_view")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4 mb-5">
      <h2 className="text-center mb-4 fw-bold text-success">
         Pet Boarding Bookings
      </h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Booking ID</th>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Breed</th>
              <th>Age</th>
              <th>Weight (kg)</th>
              <th>Vaccination</th>
              <th>Owner Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Kennel No.</th>
            </tr>
          </thead>

          <tbody>
            {data.map((pet) => (
              <tr key={pet._id}>
                <td>{pet.booking_id}</td>
                <td>{pet.pet_name}</td>
                <td>{pet.pet_type}</td>
                <td>{pet.breed}</td>
                <td>{pet.age}</td>
                <td>{pet.weight}</td>
                <td>{pet.vaccination_status}</td>
                <td>{pet.owner_name}</td>
                <td>{pet.owner_phone}</td>
                <td>{pet.owner_email}</td>
                <td>{pet.check_in_date}</td>
                <td>{pet.check_out_date}</td>
                <td>{pet.kennel_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;