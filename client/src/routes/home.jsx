import React, { useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
import Search from "../components/search";
//import Filter from "../components/filter";
import Modal from "../components/modal";
import Availability from "../components/availability";

// Import the Hero Image
import HeroImage from './img/HeroImage.jpg';

export default function Home() {
  return (
    // This where the code for the homepage content is located
    <div>
        <h1>Home</h1>
      <img className="HeroImage" src={HeroImage} alt="A picture to amaze the first time a user logs in"/>
    </div>
  );
} 
