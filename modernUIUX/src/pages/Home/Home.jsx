import React from "react";
import styles from "../../style";
import {
  Stats,
  Hero,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
} from "./parts";

function Home() {
  return (
    <div className="bg-primary overflow-hidden w-full ">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing /> 
          <CardDeal /> 
          <Testimonials /> 
          <Clients /> 
          <CTA />
        </div>
      </div>
    </div>
  );
}

export default Home;
