"use client";

import { Mail, Phone, SendHorizontal } from "lucide-react";
import { useRef, useActionState } from "react";
import { FormAction } from "@/app/actions/formaction";
import Link from "next/link";
import Image from "next/image";
import { socials } from "@/constant/constant";
import { gsap, useGSAP } from "@/gsapConfig";
import isMobile from "@/hook/windowResize";

export default function Contact() {
  const iconRef = useRef<HTMLDivElement>(null);
  const mobile = isMobile();

  const [form, formAction, isPending] = useActionState(FormAction, {
    success: false,
  });

  useGSAP(() => {
    if (!iconRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: iconRef.current,
        start: "top 80%",
        scrub: true,
        toggleActions: "play none none reset",
      },
    });
    tl.to(iconRef.current, {
      x: 0,
      duration: 0.5,
    });
  }, [mobile]);

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
                placeholder="Your name"
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
                type="email"
                placeholder="hello@domain.com"
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
              placeholder="+91xxxxxxx456"
              type="text"
              maxLength={15}
              inputMode="numeric"
              pattern="[0-9+]*"
              className="w-full py-2 border-b-2 text-sm"
              onChange={(e) => {
                let value = e.currentTarget.value.replace(/[^0-9+]/g, "");
                if (value.startsWith("+")) {
                  value = "+" + value.slice(1).replace(/\+/g, "");
                } else {
                  value = value.replace(/\+/g, "");
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
          <button
            disabled={isPending}
            className=" w-30 h-10 m-2 my-5 border submit bg-white text-black flex items-center justify-center rounded-md cursor-pointer "
          >
            <p className="font-bold mr-2">
              {isPending ? "SENDING... " : "SEND"}
            </p>
            <SendHorizontal />
          </button>
        </form>
        <div className="">
          <div
            ref={iconRef}
            className="socialIconContainer flex justify-end items-end "
          >
            {socials.map((logo, index) => {
              return (
                <Link
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${logo.link}`}
                >
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
