import { features } from "@/src/components/features";
const FeaturesSection = () => {
    return (
        <section className="py-24 relative" id="Features">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                    <div className="relative w-full text-center lg:text-left lg:w-2/4">
                        <h2 className="text-4xl font-bold leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0 bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
                            Enjoy the finest features with our products
                        </h2>
                    </div>
                    <div className="relative w-full text-center lg:text-left lg:w-2/4">
                        <p className="text-lg font-normal text-gray-400 mb-5">
                            We provide all the advantages that can simplify all your transactions without any further requirements.
                        </p>
                        <div className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-purple-400 lg:justify-start hover:text-purple-300 transition-colors">
                            Our Products 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group relative w-full bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 xl:p-7 xl:w-1/4 hover:bg-purple-900/50 border border-purple-500/10">
                            <div className="bg-purple-900/30 rounded-full flex justify-center items-center mb-5 w-14 h-14">
                                <feature.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" 
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-semibold text-white capitalize transition-all duration-500 line-clamp-2">
                                    {feature.title}
                                </h4>
                                <p className="text-sm font-normal text-gray-400 transition-all duration-500 leading-relaxed group-hover:text-gray-300 line-clamp-4">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;