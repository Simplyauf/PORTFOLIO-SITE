export const ContactMe = () => {
  return (
    <section className="flex justify-center items-center mt-16 w-full mt-20 py-20  px-[6%]">
      <form action="" className=" max-w-[360px] flex flex-col gap-4   w-full py-20">
        <h2 className="font-bold text-2xl mb-16">Contact Me</h2>
        <p className="mb-4">
          Submit the form below or send an email to <b>azeezumarfaruk@gmail.com</b>
        </p>
        <div>
          <label htmlFor="">
            Name
            <input type="text" name="" className="border pl-4 focus:outline-none rounded w-full mt-2 h-[52px]" id="" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Email
            <input type="text" name="" className="border pl-4 focus:outline-none rounded w-full mt-2 h-[52px]" id="" />
          </label>
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea
            className="border p-4 focus:outline-none mt-2 border- rounded w-full"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button
          type="submit"
          className="my-4 w-[100%] mx-auto block h-[52px] bg-primaryColor text-white cursor-none font-medium rounded"
        >
          Send message
        </button>
      </form>
    </section>
  );
};
