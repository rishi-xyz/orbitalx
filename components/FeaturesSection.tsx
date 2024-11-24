"use client"
import { Grid, Layout, ShieldCheck, Shuffle, Send, Scan, DivideCircle, UserCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const features = [
    {
        title: "All-in-One Platform",
        description: "Your go-to solution for all decentralized payment needs in one place.",
        icon: <Grid />
    },
    {
        title: "Intuitive Interface",
        description: "Designed for simplicity, ensuring an effortless user experience.",
        icon: <Layout />
    },
    {
        title: "Top-Notch Security",
        description: "Ensuring your transactions are safe, secure, and private.",
        icon: <ShieldCheck />
    },
    {
        title: "Cross-Chain Swapping",
        description: "Easily exchange cryptocurrencies across different blockchains.",
        icon: <Shuffle />
    },
    {
        title: "Cross-Chain Transfers",
        description: "Send funds seamlessly across multiple blockchain networks.",
        icon: <Send />
    },
    {
        title: "Scan to Pay",
        description: "Instantly pay others by scanning their OrbitalX QR code—no wallet address needed.",
        icon: <Scan />
    },
    {
        title: "Simplified Bill Splitting",
        description: "Easily divide and settle expenses with friends or colleagues.",
        icon: <DivideCircle />
    },
    {
        title: "Pay Your Contacts",
        description: "Quickly send payments to friends, family, or employees with ease.",
        icon: <UserCheck />
    },
];

const FeatureItem = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
    const offsetx = useMotionValue(-100);
    const offsety = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 1100px at ${offsetx}px ${offsety}0px, black, transparent)`
    const border = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return;
            const borderRect = border.current.getBoundingClientRect();
            offsetx.set(e.x - borderRect.x);
            offsety.set(e.y - borderRect.y);
        };
        window.addEventListener("mousemove", updateMousePosition);
        return ()=>{
            window.removeEventListener("mousemove",updateMousePosition);
        }
    }, [offsetx, offsety]);
    return (<div className="border border-white/30 px-5 py-10 text-center rounded-xl flex-1 relative bg-black hover:scale-105 transition-transform duration-300">
        <motion.div className="absolute inset-0 border-4 border-purple-400 rounded-xl" style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage
        }}
        ref={border}
        >
        </motion.div>
        <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg transition-transform duration-300 hover:scale-125">
            {icon}
        </div>
        <h3 className="mt-6 font-bold">{title}</h3>
        <p className="mt-2 text-white/70">{description}</p>
    </div>
    );
}

const FeaturesSection = () => {
    return (
        <section className="bg-transparent text-white py-[72px]" id="features">
            <div className="container">
                <h2 className="text-center text-5xl mb-6 mt-3 tracking-tighter md:leading-none font-semibold  bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">Decentralized Payment & Unified Experience</h2>
                <p className="text-lg tracking-tight text-white/70 mt-5 text-center md:text-xl max-w-xl mx-auto">Everything You Need for Seamless Decentralized finance Experience</p>
                <div className="mt-16 flex flex-col gap-4">
                    <div className="flex flex-row gap-4" >
                        {features.slice(0, 3).map(({ title, description }) => (
                            <div key={title}>
                                <FeatureItem title={title} description={description} icon={<Grid />} />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row gap-4">
                        {features.slice(3, 6).map(({ title, description, icon }) => (
                            <FeatureItem key={title} title={title} description={description} icon={icon} />
                        ))}
                    </div>
                    <div className="flex flex-row gap-4">
                        {features.slice(6).map(({ title, description, icon }) => (
                            <FeatureItem key={title} title={title} description={description} icon={icon} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;