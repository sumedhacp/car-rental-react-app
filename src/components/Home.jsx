import React from 'react'
import NavigationBar from './NavigationBar'


const Home = () => {
  return (
    
    <div
      style={{
        backgroundColor: "#f4f6f9",
        minHeight: "100vh"
      }}
    >
  


      <div
        style={{
          background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
          color: "white",
          padding: "50px",
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px"
        }}
      >
        <NavigationBar />
        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
                Rent Your Dream Car
              </h1>

              <br />

              <h4>
                Premium Cars • Affordable Prices • Safe Journey
              </h4>

              <br />

              <p style={{ fontSize: "18px" }}>
                Our cars know the roads better than your GPS.
                Just choose your ride, grab the keys,
                and let every mile become a beautiful memory.
              </p>

              <button
                className="btn btn-warning btn-lg"
                style={{
                  borderRadius: "30px",
                  padding: "10px 30px"
                }}
              >
                Book Your Ride
              </button>

            </div>

            <div className="col-md-6 text-center">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3I73l7Bgc4OXL9FKdiMP015hvPt8SLpdD8Vwn5fNjz2395zsTmxmfy92U&s=10"
                alt="Car"
                style={{
                  width: "100%",
                  maxWidth: "520px",
                  borderRadius: "20px",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.4)"
                }}
              />

            </div>

          </div>

        </div>
      </div>


      <div className="container mt-5">

        <h2
          className="text-center"
          style={{
            color: "#1e3a8a",
            fontWeight: "bold"
          }}
        >
          Why Choose Us?
        </h2>

        <br />

        <div className="row">

          <div className="col-md-4">

            <div
              className="card shadow border-0"
              style={{
                borderRadius: "20px"
              }}
            >
              <div className="card-body text-center">

                <h1>🚘</h1>

                <h4>Premium Fleet</h4>

                <p>
                  Luxury, Sedan, SUV and Sports Cars
                  for every occasion.
                </p>

              </div>
            </div>

          </div>

          <div className="col-md-4">

            <div
              className="card shadow border-0"
              style={{
                borderRadius: "20px"
              }}
            >
              <div className="card-body text-center">

                <h1>💰</h1>

                <h4>Affordable Pricing</h4>

                <p>
                  No hidden charges.
                  Transparent pricing for every booking.
                </p>

              </div>
            </div>

          </div>

          <div className="col-md-4">

            <div
              className="card shadow border-0"
              style={{
                borderRadius: "20px"
              }}
            >
              <div className="card-body text-center">

                <h1>🛡️</h1>

                <h4>Safe Journey</h4>

                <p>
                  Every vehicle is inspected
                  before it reaches you.
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>


      <div
        style={{
          marginTop: "70px",
          backgroundColor: "#0f172a",
          color: "white",
          textAlign: "center",
          padding: "30px"
        }}
      >

        <h4>🚗 Every Road Has a Story. Drive Yours With Style.</h4>

        <p>Happy Driving • Safe Journey • Premium Experience</p>

      </div>

    </div>
  )
}

export default Home