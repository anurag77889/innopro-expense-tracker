import Image from "next/image";

function Hero() {
  return (
    <section className="bg-white h-screen overflow-hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 px-4 sm:px-6 lg:px-8">
      {/* Left: Text Content */}
      <div className="mx-auto max-w-screen-md text-center lg:text-left max-h-[50vh] overflow-hidden">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
          Try <strong className="text-indigo-600">InnoPro</strong> – Because
          Every Expense Matters!
        </h1>

        <p className="mt-4 text-base text-gray-700 sm:text-lg dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi.
          Natus, provident accusamus impedit minima harum corporis iusto.
        </p>

        <div className="mt-6 flex justify-center lg:justify-start gap-4">
          <a
            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
            href="/sign-in"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center lg:justify-end">
        <Image
          src="/dashboard.png"
          alt="Dashboard"
          width={1000}
          height={700}
          priority
          className="rounded-xl border-2 shadow-lg max-h-[80vh] object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;
