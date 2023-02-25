import { validateEmail } from "../utils/emailRegexValidation";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const ContactMe = () => {
  const formRef = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();

    let gmailInputDOM = e.currentTarget.querySelector("input[type='email']");

    if (!validateEmail(gmailInputDOM.value)) {
      gmailInputDOM.nextElementSibling.style.display = "block";
    } else {
      emailjs.sendForm("auf_gmail", "auf_template", formRef.current, "2r3r5or96z83ZOCJF").then(
        (result) => {
          // clear input upon success
          formRef.current.reset();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  return (
    <section className="flex justify-center items-center mt-16 w-full  py-20  px-[6%]">
      <form
        action=""
        className=" max-w-[360px] flex flex-col gap-4   w-full py-20"
        onSubmit={sendMessage}
        ref={formRef}
      >
        <div>
          {" "}
          <h2 className="font-bold text-2xl relative before:h-2 before:w-[80px] before:absolute before:left-0 before:translate-y-0">
            Contact Me
          </h2>
          <div className="bg-primaryColor h-2 w-[60px] -skew-x-6"></div>
        </div>

        <p className="mb-4  mt-16">
          Submit the form below or send an email to <b>azeezumarfaruk@gmail.com</b>
        </p>
        <div>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="user_name"
              required
              className="border pl-4 focus:outline-none rounded w-full mt-2 h-[52px]"
              id=""
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Email
            <input
              type="email"
              name="user_email"
              required
              className="border pl-4 focus:outline-none rounded w-full mt-2 h-[52px]"
              id=""
              onChange={(e) => {
                // on validation,make the email error text disappear
                if (validateEmail(e.target.value)) {
                  e.target.nextElementSibling.style.display = "none";
                }
              }}
            />
            <span className="italic mt-1 font-bold text-primaryColor hidden">Please provide a valid email Address</span>
          </label>
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea
            required
            className="border resize-none border-darkSecondaryColor  p-4 focus:outline-none mt-2 border- rounded w-full"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button
          type="submit"
          className="my-4 w-[100%] mx-auto block h-[52px] bg-primaryColor text-white cursor-pointer font-medium rounded"
        >
          Send message
        </button>
      </form>
    </section>
  );
};
