"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import ContactsDialog from "./ContactsDialog";

export default function PeopleSection() {
  const [visibleCount, setVisibleCount] = useState(9);
  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 9 : 4);
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
        {contacts.slice(0, visibleCount).map((contact, index) => (
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
  { id: "1", name: "ADAM", icon: "JD", imageUrl: "/ppp.jpg" },
  { id: "2", name: "KETH", icon: "JD", imageUrl: "/p4.jpg" },
  { id: "3", name: "MAVI", icon: "JD", imageUrl: "/p9.jpg" },
  { id: "4", name: "JOHN", icon: "JD", imageUrl: "/pppp.jpg" },
  { id: "5", name: "SNOW", icon: "JD", imageUrl: "/p5.png" },
  { id: "6", name: "WHITE", icon: "JS", imageUrl: "/p4.jpg" },
  { id: "7", name: "SNOW", icon: "JD", imageUrl: "/p5.png" },
  { id: "8", name: "JIM", icon: "JD", imageUrl: "/p6.jpg" },
  { id: "9", name: "TOM", icon: "JD", imageUrl: "/p7.jpg" },
  { id: "10", name: "John Doe", icon: "JD", imageUrl: "/p8.jpg" },
  { id: "11", name: "John Doe", icon: "JD", imageUrl: "/p9.jpg" },
  { id: "12", name: "Jane Smith", icon: "JS", imageUrl: "/pp.jpg" },
  { id: "13", name: "John Doe", icon: "JD", imageUrl: "/ppp.jpg" },
  { id: "14", name: "John Doe", icon: "JD", imageUrl: "/p4.jpg" },
  { id: "15", name: "John Doe", icon: "JD", imageUrl: "/p7.jpg" },
  { id: "16", name: "John Doe", icon: "JD", imageUrl: "/p4.jpg" },
  { id: "17", name: "John Doe", icon: "JD", imageUrl: "/pppp.jpg" },
  { id: "18", name: "Jane Smith", icon: "JS", imageUrl: "/pp.jpg" },
  { id: "19", name: "John Doe", icon: "JD", imageUrl: "/ppp.jpg" },
  { id: "20", name: "John Doe", icon: "JD", imageUrl: "/pp.jpg" },
  { id: "21", name: "John Doe", icon: "JD", imageUrl: "/p9.jpg" },
  { id: "22", name: "John Doe", icon: "JD", imageUrl: "/p8.jpg" },
  { id: "23", name: "John Doe", icon: "JD", imageUrl: "/p7.jpg" },
  { id: "24", name: "Jane Smith", icon: "JS", imageUrl: "/p6.jpg" },
];
