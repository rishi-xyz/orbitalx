"use client";
import { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import ContactsDialog from "./ContactsDialog";
import { ChevronDown } from "lucide-react";

export default function PeopleSection() {
  const [visibleCount, setVisibleCount] = useState(8); // Initially show 8 contacts
  const [expanded, setExpanded] = useState(false); // Track if expanded

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 8 : 4);
    };

    updateVisibleCount(); // Initial setup
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  // Determine the contacts to display
  const displayedContacts = expanded
    ? contacts // Show all contacts when expanded
    : contacts.slice(0, visibleCount);

  return (
    <div className="mx-auto max-w-full w-full mt-11 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold leading-tight bg-[radial-gradient(100%_100%_at_top_left,#8c45ff,white,#4a208a)] text-transparent bg-clip-text mt-24 text-center mb-7">
        People
      </h2>
      <div className="grid grid-cols-4 gap-4 justify-center mt-6">
        {displayedContacts.map((contact, index) => (
          <Dialog key={index}>
            <DialogTrigger className="flex flex-col items-center">
              <Avatar className="h-16 w-16 mb-2 transform transition-transform duration-200 hover:scale-110 hover:shadow-[0_0_15px_rgb(140,69,255)]">
                <AvatarImage src={contact.imageUrl} alt={contact.name} />
                <AvatarFallback>{contact.icon}</AvatarFallback>
              </Avatar>
              <p className="text-sm text-gray-300 text-center">{contact.name}</p>
            </DialogTrigger>
            <DialogContent>
              <ContactsDialog UserName={contact.name} />
            </DialogContent>
          </Dialog>
        ))}

        {/* Show More Avatar */}
        {!expanded && contacts.length > visibleCount && (
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={toggleExpand}
          >
            <Avatar className="h-16 w-16 mb-2 bg-gray-700 hover:bg-purple-800 transform transition-transform duration-200 hover:scale-110 hover:shadow-[0_0_15px_rgb(140,69,255)] items-center justify-center">
              <ChevronDown className="h-6 w-6 text-purple-500" />
            </Avatar>
            <p className="text-sm text-gray-300 text-center">Show More</p>
          </div>
        )}
      </div>

      {/* Show "Show Less" button when expanded */}
      {expanded && (
        <div className="text-center mt-4">
          <button
            onClick={toggleExpand}
            className="text-purple-500 hover:text-purple-700 text-sm font-medium"
          >
            Show Less
          </button>
        </div>
      )}
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
