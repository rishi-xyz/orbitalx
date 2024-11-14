"use client"
import { Search } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { FC, useState } from "react"
import { Dialog, DialogTrigger,DialogContent } from "../ui/dialog"
import ContactsDialog from "../ContactsDialog"


const DashboradSearchBar: FC = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.userId.includes(searchTerm)
    );

    return (
        <Sheet>
            <SheetTrigger>
                <div className="flex flex-col items-center max-w-sm mx-auto">
                    <div className="relative w-72 m-2 gap-2">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="w-5 h-5 text-gray-400" />
                        </div>
                        <Input
                            type="text"
                            className="w-full py-2 pl-10 pr-3 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)] rounded-lg text-white focus:outline-none"
                            placeholder="Transfer by name or Wallet Address"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <div className="flex flex-col items-center max-w-sm mx-auto m-2">
                        <div className="relative w-72 m-2 gap-2">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <Search className="w-5 h-5 text-gray-400" />
                            </div>
                            <Input
                                type="text"
                                className="w-full py-2 pl-10 pr-3 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)] rounded-lg text-white focus:outline-none"
                                placeholder="Transfer by name or Wallet Address"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </SheetHeader>
                <SheetTitle>Saved Contacts & People</SheetTitle>
                <SheetDescription>
                    <ScrollArea className="h-[650px] w-full rounded-lg border mt-3">
                        <div className="flex flex-col m-5 space-y-4 justify-center">
                            {filteredContacts.map((contact, index) => (
                                <Dialog key={index}>
                                    <DialogTrigger >
                                        <div className="flex items-center justify-start m-1 space-x-3">
                                            <Avatar className="h-10 w-10 mr-2">
                                                <AvatarImage src={contact.imageUrl} alt={contact.name} />
                                                <AvatarFallback>{contact.icon}</AvatarFallback>
                                            </Avatar>
                                            <div className="justify-start items-start">
                                                <p className="text-sm font-medium text-white">{contact.name}</p>
                                                <p className="text-xs text-start text-gray-400">{contact.userId}</p>
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent>
                                            <ContactsDialog UserName={contact.name} UserId={contact.userId} />
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </ScrollArea>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
};

export default DashboradSearchBar;

const contacts = [
    { name: "Alice Johnson", icon: "AJ", imageUrl: "/p1.jpg", userId: "1" },
    { name: "Bob Smith", icon: "BS", imageUrl: "/p2.jpg", userId: "2" },
    { name: "Charlie Brown", icon: "CB", imageUrl: "/p1.jpg", userId: "3" },
    { name: "Diana Prince", icon: "DP", imageUrl: "/p2.jpg", userId: "4" },
    { name: "Ethan Hunt", icon: "EH", imageUrl: "/p1.jpg", userId: "5" },
    { name: "Fiona Gallagher", icon: "FG", imageUrl: "/p2.jpg", userId: "6" },
    { name: "George Costanza", icon: "GC", imageUrl: "/p1.jpg", userId: "7" },
    { name: "Hannah Baker", icon: "HB", imageUrl: "/p2.jpg", userId: "8" },
    { name: "Ian Malcolm", icon: "IM", imageUrl: "/p1.jpg", userId: "9" },
    { name: "Jack Sparrow", icon: "JS", imageUrl: "/p2.jpg", userId: "10" },
    { name: "Katherine Pierce", icon: "KP", imageUrl: "/p1.jpg", userId: "11" },
    { name: "Liam Neeson", icon: "LN", imageUrl: "/p2.jpg", userId: "12" },
    { name: "Mia Wallace", icon: "MW", imageUrl: "/p1.jpg", userId: "13" },
    { name: "Nina Simone", icon: "NS", imageUrl: "/p2.jpg", userId: "14" },
    { name: "Oscar Isaac", icon: "OI", imageUrl: "/p1.jpg", userId: "15" },
    { name: "Peter Parker", icon: "PP", imageUrl: "/p2.jpg", userId: "16" },
];