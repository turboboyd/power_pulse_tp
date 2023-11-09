import { Link } from "react-router-dom";

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import css from "./SignUpPage.module.css";

const SignUpPage = () => {
  return (
    <>
      <section className={css.section}>
        <h2 className={css.title}>Sign Up</h2>
        <p className={css.text}>
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </p>
        <SignUpForm />
        <div className={css.textWrapper}>
          <p className={css.textHint}>Already have account?</p>
          <Link className={css.link} to="/signin">
            Sign In
          </Link>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
