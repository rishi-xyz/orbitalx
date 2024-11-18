"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import ContactsDialog from "./ContactsDialog";

// Define the Contact type
type Contact = {
  id: string;
  name: string;
  icon: string;
  imageUrl: string;
};

export default function BussinessSection() {
  const [visibleCount, setVisibleCount] = useState(9);
  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 1024 ?5 : 3);
    };

    updateVisibleCount(); // Initial setup
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);
  
  return (
    <div className="mx-auto max-w-7xl w-full mt-11 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold leading-tight lg:mb-auto bg-[radial-gradient(100%_100%_at_top_left,#8c45ff,white,#4a208a)] text-transparent bg-clip-text mt-24 text-center mb-7">
        People
      </h2>
      <div className="flex overflow-x-auto space-x-4 justify-center mt-40 gap-x-6">
        {contacts.slice(0, visibleCount).map((contact: Contact, index) => (
          <Dialog key={index}>
            <DialogTrigger className="flex flex-col items-center">
              <Avatar className="h-17 w-14 mb-2 transform transition-transform duration-200 hover:scale-125 hover:shadow-[0_0_15px_rgb(140,69,255)]">
                <AvatarImage src={contact.imageUrl} alt={contact.name} />
                <AvatarFallback>{contact.icon}</AvatarFallback>
              </Avatar>
              <p className="text-xs text-gray-300 text-center">{contact.name}</p>
            </DialogTrigger>
            <DialogContent>
              <ContactsDialog UserName={contact.name} UserId={contact.id} />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
const contacts = [
  { id: "1", name: "Tech Innovations", icon: "TI", imageUrl: "/alliance.png" },
  { id: "2", name: "Green Solutions", icon: "GS", imageUrl: "/businessman.png" },
  { id: "3", name: "Creative Designs", icon: "CD", imageUrl: "/coaching.png" },
  { id: "4", name: "Future Enterprises", icon: "FE", imageUrl: "/hacker.png" },
  { id: "5", name: "Global Ventures", icon: "GV", imageUrl: "/target.png" },
  { id: "6", name: "NextGen Technologies", icon: "NG", imageUrl: "/pp.jpg" },
  { id: "7", name: "Innovative Systems", icon: "IS", imageUrl: "/p5.png" },
  { id: "8", name: "Dynamic Solutions", icon: "DS", imageUrl: "/ppp.jpg" },
  { id: "9", name: "Visionary Concepts", icon: "VC", imageUrl: "/p7.jpg" },
  { id: "10", name: "Synergy Corp", icon: "SC", imageUrl: "/p7.jpg" },
  { id: "11", name: "Pinnacle Group", icon: "PG", imageUrl: "/p9.jpg" },
  { id: "12", name: "Summit Enterprises", icon: "SE", imageUrl: "/pp.jpg" },
  { id: "13", name: "Nexus Innovations", icon: "NI", imageUrl: "/ppp.jpg" },
  { id: "14", name: "Vertex Solutions", icon: "VS", imageUrl: "/p4.jpg" },
  { id: "15", name: "Catalyst Partners", icon: "CP", imageUrl: "/p7.jpg" },
  { id: "16", name: "Apex Technologies", icon: "AT", imageUrl: "/p4.jpg" },
  { id: "17", name: "Infinity Group", icon: "IG", imageUrl: "/pppp.jpg" },
  { id: "18", name: "Horizon Ventures", icon: "HV", imageUrl: "/pp.jpg" },
  { id: "19", name: "Eclipse Innovations", icon: "EI", imageUrl: "/ppp.jpg" },
  { id: "20", name: "Atlas Solutions", icon: "AS", imageUrl: "/pp.jpg" },
  { id: "21", name: "Quantum Corp", icon: "QC", imageUrl: "/p9.jpg" },
  { id: "22", name: "Elemental Designs", icon: "ED", imageUrl: "/p8.jpg" },
  { id: "23", name: "Unity Systems", icon: "US", imageUrl: "/p7.jpg" },
  { id: "24", name: "Radiant Technologies", icon: "RT", imageUrl: "/p6.jpg" },
];