import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import { MyServices } from "./MyServices";

const Services = () => {
  const chunks = MyServices.reduce((acc, _, i) => (i % 3 ? acc : [...acc, MyServices.slice(i, i + 3)]), []);

  return (
    <div>
      <div id="Training">
        <h2 className="servicetitle">Tarifs de Services</h2>
        {chunks.map((chunk, rowIndex) => (
          <section className="flex section" key={rowIndex}>
            {chunk.map((s, index) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ type: "spring", damping: 8, stiffness: 80 }}
                key={index}
                className="card"
              >
                <img width={250} src={s.imgPath} alt={s.title} />
                <div style={{ width: "250px" }} className="box">
                  <h1 className="title">{s.title}</h1>
                  <p className="sub-title">
                    <span style={{ fontSize: "2rem", color: "orange" }}>{s.price}$</span><br />
                    {s.discountedPrice && (
                      <span style={{ position: "relative" }}>
                        <span s>{s.discountedPrice}$</span>
                        <span style={{ position: "absolute", top: "50%", left: "0", width: "100%", height: "1px", background: "black", transform: "rotate(-45deg)" }}></span>
                      </span>
                    )}
                  </p>
                </div>
                <button className="btnn">
                  voir plus
                </button>
              </motion.article>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;
