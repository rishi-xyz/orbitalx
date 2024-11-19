import { FC } from "react";
import DashboradSearchBar from "./DashboradSearchBar";
import { SidebarTrigger } from "../ui/sidebar";


const DashboardNavbar: FC = () => {
    return (
        <header className="py-2 border-b border-white/15 md:border-none sticky top-1 bg-transparent z-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:border border-white/15 md:p-2 rounded-xl max-w-4xl mx-auto bg-black/50 backdrop-blur-sm">
                    <div className="flex flex-row items-center justify-between w-full md:w-auto">
                        <div className="flex-grow-0">
                            <DashboradSearchBar  />
                        </div>
                        <div className="flex items-center justify-center md:hidden">
                            <SidebarTrigger />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardNavbar;