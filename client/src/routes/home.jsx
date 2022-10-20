import React, { useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div>
      <div className="home">
        <h1>HealthLine</h1>
      </div>
      <div>
        <button>Patients</button>
        <button>Booking</button>
        <button>Maintenance</button>
      </div>
    </div>
  );
}
