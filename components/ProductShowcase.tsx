import Image from 'next/image'
import React, { useRef } from 'react'
import ProductScreen from "../public/product image.png"
import { motion, useScroll, useTransform } from 'framer-motion'

const ProductShowcase = () => {
    const ProductImage = useRef<HTMLImageElement>(null);
    const { scrollYProgress } = useScroll({
        target: ProductImage,
        offset: ["start end", "end end"],
    });
    const rotateX = useTransform(scrollYProgress,[0,1],[15,0]);
    const opacity = useTransform(scrollYProgress,[0,1],[.5,1]);
    return (
        <div className='bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px]'>
            <div className='container'>
                <h2 className='text-center text-5xl mb-6 mt-3 tracking-tighter md:leading-none font-semibold bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text'>
                    A Dashboard That Empowers Your Web3 Journey
                </h2>
                <div className='max-w-xl mx-auto'>
                    <p className='text-xl text-center text-white/70 mt-5'>
                        Control, Manage, and Simplify - Your Decentralized Finance Hub at a Glance. This combination highlights the functionality and user-friendliness of your dashboard while emphasizing its role in the Web3 ecosystem.
                    </p>
                </div>
                <motion.div
                    style={{
                        opacity: opacity,
                        rotateX: rotateX,
                        transformPerspective: "800px",
                    }}
                >
                    <Image
                        src={ProductScreen}
                        alt='The product image'
                        className='mt-14 mx-auto rounded-2xl'
                        ref={ProductImage}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default ProductShowcase