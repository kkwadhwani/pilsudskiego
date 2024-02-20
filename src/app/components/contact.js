"use client";
import { useState } from "react";

export default function ContactForm() {
  let [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUrl = e.target.action;
    console.log(e.target.action);
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    fetch(formUrl, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    }).then(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    });
  };

  return (
    <div className="w-auto h-auto bg-black">
      <h1 className="text-center text-4xl pt-5 font-sans font-normal text-slate-50">
        Get in touch
      </h1>
      <br></br> <br></br>
      <div className="flex-col  sm:flex md:flex md:flex-row w-full">
        <div className="md:w-1/2  w-full ">
          <form
            acceptCharset="UTF-8"
            onSubmit={handleSubmit}
            action="https://www.formbackend.com/f/1774c134e1908d71"
            method="POST"
          >
            <div className="mb-6 mt-6 mx-5">
              <input
                placeholder="Full Name "
                type="text"
                required
                className="bg-slate-50  p-3 rounded-lg md:mb-0 w-full "
                name="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
            </div>
            <div className="mb-6 mx-5">
              <input
                placeholder="Email address"
                type="email"
                required
                className="bg-slate-50 w-full p-3 rounded-lg "
                name="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </div>
            <div className="mb-6 mx-5">
              <textarea
                type="textarea"
                className="rounded-lg bg-slate-50 w-full placeholder:p-1 h-20 p-2"
                placeholder="Type your message here"
                name="message"
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                }}
              />
            </div>
            <div className="mb-6 flex justify-center">
              <button className=" bg-slate-50 text-center h-12 w-1/2 rounded-lg text-2xl font-semibold">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className=" md:w-1/2 w-full  my-auto h-auto">
          <div className="text-white text-center my-auto">
            You can also reach out on
          </div>
          <div className="text-white text-center my-auto">+48 786 80 458</div>
          <div className="text-white text-center my-auto mb-4">
            or you can email at traveltalksforever@gmail.com
          </div>
        </div>
      </div>
      <div className="w-full border bg-white h-px"></div>
      <div className="bg-black w-full h-9 text-slate-50 text-sm text-center mt-5">
        <span className="h-3 text-slate-50">© </span>Copyright. All rights
        reserved.{" "}
      </div>
    </div>
  );
}
