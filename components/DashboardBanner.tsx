"use client"

const DashboardBanner = () => {
  return (
    <section className="flex flex-col items-center justify-center p-0 m-0 h-64">
      {/* <GlareCard className="mx-auto max-w-full w-full bg-gradient-to-r from-purple-900 to-indigo-900 backdrop-blur-md rounded-2xl p-6 hover:from-purple-700 hover:to-indigo-700 border border-purple-500/10 transform transition-transform duration-200 hover:scale-105"> */}
          <div className="mb-4 lg:mb-6 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="relative w-full text-center lg:text-left lg:w-1/2 ">
              <h2 className="text-xl lg:text-3xl font-bold tracking-tight bg-[radial-gradient(100%_100%_at_top_left,#8c45ff,white,#4a208a)] text-transparent/30 bg-clip-text ">
                0% transaction fee on your first Transfer
              </h2>
            </div>
            <div className="relative w-full text-center lg:text-left lg:w-1/2">
              <p className="text-base lg:text-xl text-gray-500 m-0">
                Bill Payments, Swap, Transfer with ease using OrbitalX.
              </p>
            </div>
          </div>
     {/*  </GlareCard> */}
    </section>
  );
};

export default DashboardBanner;