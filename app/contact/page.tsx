"use client";

import { Mail, Phone, SendHorizontal } from "lucide-react";
import { useState, useActionState } from "react";
import { FormAction } from "@/lib/mail";
import Link from "next/link";
import Image from "next/image";
import { socials } from "@/constant/constant";

export default function Contact() {
  const [form, formAction, isPending] = useActionState(FormAction, {
    success: false,
  });

  return (
    <div className="w-full h-fit md:h-screen p-5 md:p-15 pt-30 md:pt-30  md:flex justify-between items-center">
      <div className="">
        <div className="text-white">
          <h2 className="text-8xl mb-5">Let's talk </h2>
          <p className="text-lg">Ask us anything or just say hi...</p>
        </div>
        <div className="text-white my-10">
          <div className="flex items-center my-2 ">
            <Phone className="text-(--highlightColor)" />{" "}
            <p className=" ml-3">+91 7033077384</p>
          </div>
          <div className="flex items-center my-2">
            <Mail className="text-(--highlightColor)" />{" "}
            <p className=" ml-3">codeac200@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] ">
        <form action={formAction} className="md:mt-20 ">
          <div className="flex justify-center">
            <div className="w-[50%] m-2 mr-1">
              <label htmlFor="name" className="text-white">
                Name
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder="Rahul Raj"
                className="w-full py-2 border-b-2 text-sm"
                name="name"
                required
              />
            </div>
            <div className="w-[50%]  m-2 mr-1">
              <label htmlFor="name" className="text-white">
                Email
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder="email01@domail.com"
                className="w-full py-2 border-b-2  text-sm"
                name="email"
                required
              />
            </div>
          </div>
          <div className="m-2 my-5">
            <label htmlFor="phone" className="text-white">
              Phone
            </label>{" "}
            <br />
            <input
              name="phone"
              placeholder="+919402947599"
              type="text"
              maxLength={14}
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full py-2 border-b-2  text-sm"
              required
              onChange={(e) => {
                let value = e.currentTarget.value.replace(/[^0-9+]/g, "");
                if (value.includes("+")) {
                  value = "+" + value.replace(/\+/g, "").replace(/^\+/, "");
                }
                e.currentTarget.value = value;
              }}
            />
          </div>
          <div className="m-2">
            <label htmlFor="message" className="text-white">
              Message
            </label>{" "}
            <br />
            <textarea
              name="message"
              id=""
              placeholder="Hi there"
              className="w-full h-30 resize-none border-b-2  text-sm"
              required
            ></textarea>
          </div>
          <button className=" w-30 h-10 m-2 my-5 border submit bg-white text-black flex items-center justify-center rounded-md cursor-pointer ">
            <p className="font-bold mr-2">
              {isPending ? "SENDING... " : "SEND"}
            </p>
            <SendHorizontal />
          </button>
        </form>
        <div className="">
          <div className="flex justify-end items-end  mr-8">
            {socials.map((logo, index) => {
              return (
                <Link key={index} href={`${logo.link}`}>
                  <div className="w-10 h-10 rounded-sm m-1  bg-(--highlightColor) relative cursor-pointer">
                    <Image
                      src={`/images/${logo.imgSrc}`}
                      fill
                      sizes="10vw"
                      alt="sociallogo"
                      className="p-2 fill-current"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
