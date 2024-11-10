const DashboardBanner = () => {
    return (
        <section className="flex items-center justify-center p-6 h-auto">
            {/**Banner */}
            <div className="mx-auto max-w-7xl w-full bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 transition-all duration-500 hover:bg-purple-900/50 border border-purple-500/10">
                <div className="mb-10 lg:mb-16 flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div className="relative w-full text-center lg:text-left lg:w-2/4">
                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight lg:mb-auto bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
                            0% transaction fee on your first Transfer with OrbitalX
                        </h2>
                    </div>
                    <div className="relative w-full text-center lg:text-left lg:w-2/4">
                        <p className="text-base lg:text-lg font-normal text-gray-400 m-1">
                            Bill Payments, Swap, Transfer with ease using OrbitalX.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashboardBanner