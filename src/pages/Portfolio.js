import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <div className="col-sm-6 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = ({ variants }) => {
  return (
    <motion.div
      key="portfolio"
      exit="exit"
      transition="transition"
      variants={variants}
      className="container"
    >
      <div className="row">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </motion.div>
  );
};

export default Portfolio;
