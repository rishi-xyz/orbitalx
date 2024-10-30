"use client"
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import HomeButton from "./HomeButton";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div className="flex items-center">
            <div className="border h-10 w-10 rounded-lg flex justify-center items-center border-white/15">
              <LogoIcon className="w-6 h-6" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#Home" className=" text-white/70 hover:text-white transition">Home</a>
              <a href="#Features" className=" text-white/70 hover:text-white transition">Features</a>
              <a href="#Contact" className=" text-white/70 hover:text-white transition">Contact</a>
            </nav>
          </div>
          {/* Button and Menu */}
          <div className="flex gap-4 items-center">
            <HomeButton onClick={() => {
              router.push("/transfer")
            }}>Try Now</HomeButton>
            {/* Menu Icon */}
            <MenuIcon className="w-6 h-6 md:hidden" /> {/* Ensure icon size fits */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
