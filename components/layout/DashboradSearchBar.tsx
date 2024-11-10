import { Search } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"

const DashboradSearchBar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <div className="flex flex-col items-center max-w-sm mx-auto">
                    <div className=" relative w-full m-2 gap-2">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="w-5 h-5 text-gray-400" />
                        </div>
                        <Input
                            type="text"
                            className=" w-full py-2 pl-10 pr-3 bg-gray-800 rounded-lg text-white focus:outline-none"
                            placeholder="transfer by name or Wallet Address"
                        />
                    </div>
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <div className="flex flex-col items-center max-w-sm mx-auto m-2">
                        <div className=" relative w-full m-2 gap-2">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <Search className="w-5 h-5 text-gray-400" />
                            </div>
                            <Input
                                type="text"
                                className=" w-full py-2 pl-10 pr-3 bg-gray-800 rounded-lg text-white focus:outline-none"
                                placeholder="transfer by name or Wallet Address"
                            />
                        </div>
                    </div>
                </SheetHeader>
                <SheetTitle>Saved Contacts & People</SheetTitle>
                <SheetDescription>
                    <ScrollArea className="h-[650px] w-full rounded-lg border mt-3">
                        mapping the Contacts  in this Scroll area
                    </ScrollArea>
                </SheetDescription>
            </SheetContent>
        </Sheet>

    )
}

export default DashboradSearchBar