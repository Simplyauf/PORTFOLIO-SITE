import { validateEmail } from "../utils/emailRegexValidation";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export const ContactMe = () => {
  const formRef = useRef();

  const [btnText, setBtnText] = useState("Send message");

  // async send message
  const sendMessage = async (e) => {
    e.preventDefault();

    let gmailInputDOM = e.currentTarget.querySelector("input[type='email']");
    let submitBtnDOM = e.currentTarget.querySelector("button[type='submit']");

    if (!validateEmail(gmailInputDOM.value)) {
      gmailInputDOM.nextElementSibling.style.display = "block";
    } else {
      const loaderToastId = toast.loading("Sending message ...");
      setBtnText("Sending message ...");
      submitBtnDOM.disabled = true;

      emailjs.sendForm("auf_gmail", "auf_template", formRef.current, "2r3r5or96z83ZOCJF").then(
        (result) => {
          toast.update(loaderToastId, {
            type: "success",
            isLoading: false,
            render: "Message sucessfully sent",
            autoClose: 4000,
          });
          // clear input upon success
          formRef.current.reset();
          submitBtnDOM.disabled = false;
          setBtnText("Send message");
        },
        (error) => {
          toast.update(loaderToastId, {
            type: "error",
            isLoading: false,
            render: "Message not sent",
            autoClose: 4000,
          });

          setBtnText("Send message");
          submitBtnDOM.disabled = false;
        }
      );
    }
  };

  return (
    <>
      <section
        id="contactSection"
        className="flex justify-center items-center mt-16 w-full md:px-[5rem] lg:px-[10rem]   py-20  px-[6%]"
      >
        <form
          action=""
          className=" max-w-[360px] flex flex-col gap-4   w-full py-20"
          onSubmit={sendMessage}
          ref={formRef}
        >
          <div>
            {" "}
            <h2 className="font-bold text-2xl relative before:h-2 before:w-[80px] before:absolute before:left-0 before:translate-y-0 ">
              Contact Me
            </h2>
            <div className="bg-primaryColor  h-[10px] mt-[4px]  w-[60px] -skew-x-6"></div>
          </div>

          <p className="mb-4  mt-16">
            Submit the form below or send an email to{" "}
            <a
              href="mailto:azeezumarfaruk@gmail.com?subject=From%20Your%20Portfolio%20Website"
              className="gradientText cursor-pointer font-bold"
            >
              azeezumarfaruk@gmail.com
            </a>
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
              <span className="italic mt-1 font-bold text-primaryColor hidden">
                Please provide a valid email Address
              </span>
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
          <motion.button
            initial={{ opacity: 1 }}
            whileTap={{ opacity: 0.6 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            type="submit"
            className="my-4 w-[100%] flex justify-center items-center mx-auto h-[52px] bg-primaryColor text-white cursor-pointer font-medium rounded hover:bg-[hsl(0deg,87%,65%)] transition-colors"
          >
            <motion.span
              initial={{ opacity: 1 }}
              whileTap={{ opacity: 0.2 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {btnText}
            </motion.span>
          </motion.button>
        </form>
      </section>
      <ToastContainer position="top-right" />
    </>
  );
};
