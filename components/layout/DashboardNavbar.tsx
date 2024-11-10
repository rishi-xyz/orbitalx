import { OrganizationSwitcher,} from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { FC } from "react";
import DashboradSearchBar from "./DashboradSearchBar";


const DashboardNavbar: FC = () => {
    return (
        <header className="py-4 border-b border-white/15 md:border-none sticky top-0 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:border border-white/15 md:p-4 rounded-xl max-w-4xl mx-auto bg-black/50 backdrop-blur-sm">
                    <h3 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-4 md:mb-0 text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">OrbitalX</h3>
                    {/*Search bar */}
                    <DashboradSearchBar/>
                    {/*Organization switcher by clerk */}
                    <div className="flex flex-row items-center gap-x-2 mr-4">
                        <OrganizationSwitcher
                            afterCreateOrganizationUrl={"/organization/:id"}
                            afterLeaveOrganizationUrl="/organization/:id"
                            afterSelectOrganizationUrl={"/organization/:id"}
                            afterSelectPersonalUrl={"/organization/:id"}
                            appearance={{
                                elements:{
                                    rootBox:{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                    }
                                }
                            }}
                        />
                        <UserButton 
                        appearance={{
                            elements:{
                                avatarBox:{
                                    height:"30",
                                    width:"30",
                                }
                            }
                        }}
                        /> 
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardNavbar;