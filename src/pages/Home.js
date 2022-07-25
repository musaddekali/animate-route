import React from "react";
import { motion } from "framer-motion";

const scrollVarients = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Card = ({ label, icon }) => {
  return (
    <article className="home-card">
      <h2>{label}</h2>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={scrollVarients}
        viewport={{ once: true, amount: 0.2 }}
        className="home-card-body"
      >
        {icon}
      </motion.div>
    </article>
  );
};

const Home = ({ frutes, variants }) => {
  return (
    <motion.div
      key="home"
      exit='exit'
      transition='transition'
      variants={variants}
      className="container"
    >
      {frutes.map((item) => (
        <Card key={item.label} {...item} />
      ))}
    </motion.div>
  );
};

export default Home;
