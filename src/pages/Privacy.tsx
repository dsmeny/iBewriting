import { useEffect } from "react";
import classes from "./Privacy.module.css";

const Privacy = ({ clearBtnHandler }) => {
  useEffect(() => {
    clearBtnHandler(false);
  }, []);

  return (
    <section className={classes.container}>
      <div className={classes["container-inner"]}>
        <h3>Privacy Policy for Spinelesstwits</h3>
        <p>
          At Spinelesstwits, we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and safeguard your
          personal information when you use our application.{" "}
        </p>
      </div>
      <div className={classes["container-inner"]}>
        <h3>Information We Collect </h3>
        <p>
          When you use Spinelesstwits, we do not collect any personal
          information from you, such as your name or email address. However, we
          may collect non-personal information such as your browser type,
          language preference, and the date and time of your visit. We may also
          collect information about your use of our application, such as the
          features you use and the content you create.
        </p>
      </div>
      <div className={classes["container-inner"]}>
        <h3>How We Use Your Information</h3>
        <p>
          We use the non-personal information we collect to improve the
          functionality and usability of Spinelesstwits. This includes allowing
          for local data storage within your browser, eliminating highlighted
          backgrounds when copying and pasting, and letting you easily
          duplicate, edit, and copy/paste your content. We also use this
          information to understand how our users interact with our application
          and to analyze usage patterns.
        </p>
      </div>
      <div className={classes["container-inner"]}>
        <h3>How We Protect Your Information</h3>
        <p>
          We take appropriate measures to protect your non-personal information
          from unauthorized access, use, and disclosure. We use
          industry-standard security technologies to safeguard your information,
          such as secure servers and encryption. We also limit access to your
          non-personal information to those employees who need it to perform
          their job duties.
        </p>
      </div>
      <div className={classes["container-inner"]}>
        <h3>Third-Party Services</h3>
        <p>
          Spinelesstwits may use third-party services to help us operate our
          application and provide you with the best possible user experience.
          These services may collect and use information about your use of our
          application. We do not control these third-party services, and their
          use of your information is governed by their own privacy policies.
        </p>
      </div>
      <div className={classes["container-inner"]}>
        <h3>Changes to Our Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. If we make
          material changes to our policy, we will notify you by posting a notice
          on our website or by sending you an email. We encourage you to review
          this Privacy Policy periodically to stay informed about how we are
          protecting your information.
        </p>
      </div>
      <div className={classes["container-inner"]}>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at spinelesstwits@gmail.com.
        </p>
      </div>
    </section>
  );
};

export default Privacy;
