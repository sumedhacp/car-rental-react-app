import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark shadow"
            style={{
                background: "linear-gradient(90deg,#0f172a,#1e3a8a)",
            }}
        >
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPUywHzNX_1COT3EbW5BLVIh4n2Bqp0dBncw-FJ3KXxssVCVDFfUmoFs&s=10"
                        alt="Logo"
                        style={{
                            width: "55px",
                            height: "55px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid white",
                        }}
                    />
                    <span
                        className="ms-3 fw-bold"
                        style={{
                            fontSize: "1.4rem",
                            letterSpacing: "1px",
                        }}
                    >
                        Car Rental
                    </span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav gap-3">
                        <Link className="nav-link nav-custom" to="/">
                            Home
                        </Link>

                        <Link className="nav-link nav-custom" to="/add">
                            Add Car
                        </Link>

                        <Link className="nav-link nav-custom" to="/view">
                            View Cars
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;