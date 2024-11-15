"use client"
import {Home, Settings,History,Contact} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { DashboardIcon } from "@radix-ui/react-icons"





export function AppSidebar() {
  return (
    <Sidebar  className="bg-transparent/70 md:bg-transparent ">
      <SidebarHeader className=" flex flex-row m-2 p-4">
        <div className="text-xl lg:text-4xl font-bold leading-tight lg:mb-auto bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text mr-6 transform transition-transform duration-200 hover:scale-110">
          OrbitalX
        </div>
        <div className="transform transition-transform duration-200 hover:scale-125 mr-6 mt-2">
               <UserButton />
          </div>
      </SidebarHeader>
      <SidebarContent className="flex flex-col justify-between h-full p-2">
        <div>
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm md:text-base font-bold leading-tight lg:mb-auto bg-purple-400 bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text mb-1 p-2">
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent className="flex items-center justify-center m-4 flex-wrap">
              <SidebarMenu >
                {items.slice(0, 3).map((item) => (
                  <SidebarMenuItem key={item.title} className="rounded-lg mb-3 ">
                    <SidebarMenuButton asChild className="flex gap-3 items-center p-6 hover:bg-purple-900/50 border border-purple-500/10 transform transition-transform duration-200 hover:scale-110">
                      <a href={item.url} className="flex items-center">
                        <item.icon className="mr-2" />
                        <span className="text-sm md:text-base">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm md:text-base font-bold leading-tight lg:mb-auto bg-purple-700 bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text p-2">
              Users
            </SidebarGroupLabel>
            <SidebarGroupContent className="flex items-center justify-center m-4 flex-wrap">
              <SidebarMenu>
                {items.slice(3).map((item) => (
                  <SidebarMenuItem key={item.title} className=" rounded-lg mb-3 mr-1">
                    <SidebarMenuButton asChild className="flex gap-3 items-center p-6  hover:bg-purple-900/50 border border-purple-500/10 transform transition-transform duration-200 hover:scale-110 ">
                      <a href={item.url} className="flex items-center">
                        <item.icon className="mr-2" />
                        <span className="text-sm md:text-base">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
        <SidebarFooter className="mb-4 p-2 flex md:hidden">
          <div className="text-sm md:text-base font-bold leading-tight lg:mb-auto bg-purple-400 bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text mb-4">
            Switch
          </div>
          <OrganizationSwitcher
            afterCreateOrganizationUrl={"/organization/:id"}
            afterLeaveOrganizationUrl="/organization/:id"
            afterSelectOrganizationUrl={"/organization/:id"}
            afterSelectPersonalUrl={"/organization/:id"}
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }
              }
            }}
          />
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: History,
  },
  {
    title: "Dashboard",
    url: "/",
    icon: DashboardIcon,
  },
  {
    title: "Contacts",
    url: "#",
    icon: Contact,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]