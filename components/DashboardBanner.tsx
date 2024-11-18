const DashboardBanner = () => {
  return (
    <section className="flex items-center justify-center p-6 h-auto ml-9">
      <div className="mx-auto max-w-6xl w-full bg-gradient-to-r from-purple-900 to-indigo-900 backdrop-blur-md rounded-2xl p-4 hover:from-purple-700 hover:to-indigo-700 border border-purple-500/10 transform transition-transform duration-200 hover:scale-105">
        <div className="mb-10 lg:mb-16 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight lg:mb-auto bg-[radial-gradient(100%_100%_at_top_left,#8c45ff,white,#4a208a)] text-transparent bg-clip-text">
              0% transaction fee on your first Transfer
            </h2>
          </div>
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <p className="text-base lg:text-lg font-normal text-gray-300 m-1">
              Bill Payments, Swap, Transfer with ease using OrbitalX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardBanner;