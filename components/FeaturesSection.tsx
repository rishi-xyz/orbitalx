import Image from "next/image";

const FeaturesSection = () => {
    return (
        <section className="py-12 sm:py-24 relative bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]" id="Features ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative  ">
                <div className="mb-12 sm:mb-20 lg:mb-16 flex flex-col sm:flex-row justify-center items-center gap-y-6 sm:gap-y-0 sm:justify-between max-md:max-w-lg max-md:mx-auto ">
                    <div className="relative w-full text-center sm:text-left sm:w-2/4">
                        <h2 className="text-3xl sm:text-4xl font-bold leading-[2.5rem] lg:mb-6 mx-auto max-w-max sm:max-w-md lg:mx-0 bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
                            Enjoy the finest features with our products
                        </h2>
                    </div>
                    <div className="relative w-full text-center sm:text-left sm:w-2/4">
                        <p className="text-base sm:text-lg font-normal text-gray-300 mb-5">
                            We provide all the advantages that can simplify all your transactions without any further requirements.
                        </p>
                        <div className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-purple-400 sm:justify-start hover:text-purple-300 transition-colors">
                            Our Products
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-28 p-4 sm:p-6">
                    {/* Swap Card */}
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 hover:border border-purple-400/10 transition-transform duration-200 hover:scale-110">
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">Swap</h3>
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-gray-700 p-2 rounded-lg w-24 text-center">
                                <div className="text-blue-400 font-semibold">EUCLID</div>

                            </div>
                            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <div className="bg-gray-700 p-2 rounded-lg w-24 text-center">
                                <div className="text-green-400 font-semibold">USDT</div>
                                <div className="text-sm text-gray-400"></div>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Swap your assets with ease using our intuitive platform, offering fast, secure, and hassle-free exchanges.
                        </p>
                    </div>

                    {/* Transfer Tokens Card */}
                    <div className="bg-gray-900/50 rounded-lg shadow-lg p-6 hover:border border-purple-400/10 transition-transform duration-200 hover:scale-110">
                        <h3 className="text-xl font-semibold mb-4">Transfer Tokens Easily</h3>

                        {/* Transfer Tokens Logo */}
                        <div className="flex justify-center mt-6">
                            <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-2xl">💸</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mt-4">
                            Effortlessly send tokens with our intuitive transfer feature, designed for speed and simplicity.
                        </p>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-6">

                        </div>
                    </div>


                    {/* Group Pay Card */}
                    <div className="bg-gray-900/50 rounded-lg shadow-lg p-6 bg-grey  hover: border border-purple-400/10 transition-transform duration-200 hover:scale-110">
                        <h3 className="text-xl font-semibold mb-4">Create Group Payment</h3>
                        <div className="w-full max-w-md bg-gray-900 text-white rounded-lg shadow-lg p-6">
                            <div className="text-xl font-semibold mb-4">Create Group Payment</div>

                            {/* Group Payment Logo */}
                            <div className="flex justify-center mt-6">
                                <div className="h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-2xl">👥</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Streamline shared expenses with our easy-to-use group payment feature, perfect for hassle-free transactions.
                            </p>
                        </div>
                    </div>

                    {/* Add Pay Address Card */}
                    <div className="bg-gray-900/50 rounded-lg shadow-lg p-6 bg-grey  hover: border border-purple-400/10 transition-transform duration-200 hover:scale-110">
                        <h3 className="text-xl font-semibold mb-4">Add Pay Address</h3>
                        <div className="flex justify-center mt-6">
                            <div className="h-16 w-16 bg-yellow-400 rounded-full flex items-center justify-center">
                                <span className="text-white text-2xl">🏠</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm p-4">
                            Manage your transactions effortlessly by adding and saving payment addresses securely.
                        </p>
                    </div>

                    {/* Scan QR Code Card */}
                    <div className="bg-gray-900/50 rounded-lg shadow-lg p-6 bg-grey  hover: border border-purple-400/10 transition-transform duration-200 hover:scale-110">
                        <h3 className="text-xl font-semibold mb-4">Scan QR Code</h3>
                        <div className="flex justify-center mb-4">
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <Image src="/Untitled.png" className="h-32 w-32" alt="QR Code" width={20} height={20} />
                            </div>
                        </div>
                        <p className="text-gray-400 text-center mb-6">
                            Point your camera at the QR code to scan for payment details.
                        </p>
                        <p className="text-gray-400 text-sm">
                            Make payments quickly by scanning QR codes, ensuring a smooth and efficient transaction process.
                        </p>
                    </div>

                    {/* Safe and Secure Card */}
                    <div className="bg-gray-900/50 rounded-lg shadow-lg p-6 bg-grey  hover: border border-purple-400/10 transition-transform duration-200 hover:scale-110">
                        <h3 className="text-xl font-semibold mb-4">Safe and Secure</h3>
                        <div className="flex justify-center mb-4">
                            <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-3xl">🔒</span>
                            </div>
                        </div>
                        <p className="text-center text-gray-400 mb-6">
                            Your payment details are encrypted and securely transmitted.
                        </p>
                        <p className="text-gray-400 text-sm">
                            Enjoy peace of mind with our secure payment system, ensuring your transactions are encrypted and safe.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;