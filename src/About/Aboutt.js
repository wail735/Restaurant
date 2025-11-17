export default function Aboutt() {
  return (
    <div
      className="relative w-full h-[500px] mt-20 bg-cover bg-center grid grid-cols-1 md:grid-cols-2 items-center"
      style={{ backgroundImage: "url('./assets/images/section_bg03.png')" }}
    >
      <div></div>

      <div className="px-6 md:px-16 max-w-lg">
        <p className="text-orange-500 font-semibold">About Our Restaurant</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-snug mt-2">
          We Provide Good Food <br /> For Your Family!
        </h2>
        <p className="mt-4 text-gray-600">
          Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
          laboris nisi usfit aliquip ex ea commodo consequat is aute irure m,
          quis nostrud exer.
        </p>

        <div className="flex mt-6">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 w-full max-w-xs border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button className="bg-orange-500 text-white px-6 rounded-r-lg hover:bg-orange-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
