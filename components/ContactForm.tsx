"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          setIsLoading(false);
          setMessage("Thanks for leaving a message, I'll be sure to respond!");
          console.log(result.text);
        },
        (error) => {
          setIsLoading(false);
          setMessage("Something went wrong, please try again");

          console.log(error.text);
        }
      );
  };

  return (
    <section className="bg-red-300 flex flex-col justify-center items-center">
      <h1 className="mb-4 text-2xl">Say hello!</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-[400px] p-4  bg-white border"
      >
        <label className="mt-4">Name</label>
        <input
          type="text"
          name="user_name"
          className="border-2 border-black p-2"
        />
        <label className="mt-4">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="border-2 border-black p-2"
        />
        <label className="mt-4">Message</label>
        <textarea
          name="message"
          required
          className="border-2 border-black p-2"
        />

        {message && <p>{message}</p>}
        <input
          type="submit"
          value="Send"
          className={`mt-4  py-2 cursor-pointer ${
            isLoading ? "bg-red-100" : "bg-red-200"
          }`}
          disabled={isLoading}
        />
      </form>
    </section>
  );
};
