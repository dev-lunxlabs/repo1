import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={Styles.black}>
        <div className={Styles.footer}>
          <div className={Styles.prodname}>
            LUNX LABS
            <div className={Styles.footertext}>
              When you build on Lunx Labs, you’re joining 5000 serious experts,
              entrepreneurs and influencers around the world — you know, people
              like you.
            </div>
          </div>
          <div className={Styles.product}>
            <div className={Styles.contentDiv}>
              <p className={Styles.title}>Company</p>
              <p className={Styles.content}>Start free trial</p>
              <p className={Styles.content}>How it works</p>
              <p className={Styles.content}>Request a demo</p>
              <p className={Styles.content}>Features</p>
            </div>
          </div>
          <div className={Styles.resources}>
            <div className={Styles.contentDiv}>
              <p className={Styles.title}>Help Center</p>
              <p className={Styles.content}>Start free trial</p>
              <p className={Styles.content}>How it works</p>
              <p className={Styles.content}>Request a demo</p>
              <p className={Styles.content}>Features</p>
            </div>
          </div>
          <div className={Styles.company}>
            <div className={Styles.contentDiv}>
              <p className={Styles.title}>Contac for Enquiry</p>
              <p className={Styles.content}>NU 101A,</p>
              <p className={Styles.content}>Pitampura Delhi,</p>
              <p className={Styles.content}> India - 110034</p>
              <p className={Styles.content}>hello@lunxlabs</p>
            </div>
          </div>
        </div>
        <div className={Styles.lastDiv}>
          <p className={Styles.lastText}>© 2018 - 2022 NFTSTUBS, LLC.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
