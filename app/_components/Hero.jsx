import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <section className="bg-white flex items-center flex-col justify-center ">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-prose">
          <h1 className="text-4xl leading-[3.5rem] font-bold text-gray-900 sm:text-5xl dark:text-white ">
            Try
            <strong className="text-indigo-600"> InnoPro </strong>– Because
            Every Expense Matters!
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            nisi. Natus, provident accusamus impedit minima harum corporis
            iusto.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="/sign-in"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <Image
        src={"/dashboard.png"}
        alt="Dashboard"
        width={1000}
        height={700}
        className="mt-5 rounded-xl border-2"
      />
    </section>
  );
}

export default Hero;
