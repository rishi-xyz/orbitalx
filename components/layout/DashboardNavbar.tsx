import { OrganizationSwitcher,} from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { FC } from "react";
import DashboradSearchBar from "./DashboradSearchBar";


const DashboardNavbar: FC = () => {
    return (
        <header className="py-4 border-b border-white/15 md:border-none sticky top-0 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:border border-white/15 md:p-4 rounded-xl max-w-4xl mx-auto bg-black/50 backdrop-blur-sm">
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