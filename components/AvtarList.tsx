
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Adjust the import path as needed

export default function AvtarList() {
  const contacts = [    { name: "John Doe", icon: "JD", imageUrl: "https://github.com/shadcn.png" },
    { name: "John Doe", icon: "JD", imageUrl: "/p1.jpg" },

    { name: "John Doe", icon: "JD", imageUrl: "/p2.jpg" },
    { name: "John Doe", icon: "JD", imageUrl: "https://github.com/shadcn.png" },

    { name: "John Doe", icon: "JD", imageUrl: "https://github.com/shadcn.png" },
    { name: "Jane Smith", icon: "JS", imageUrl: "https://github.com/shadcn.png" },
    // Add more contacts as needed
  ];

  return (
    <div className="mx-auto max-w-7xl w-full mt-11 space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight lg:mb-auto bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text mt-24 text-center mb-7 ">People</h2>

    
      <div className="flex overflow-x-auto space-x-4 justify-center mt-40 space gap-x-6 ">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col items-center">
            <Avatar className="h-15 w-12  mb-2 ">
              <AvatarImage src={contact.imageUrl} alt={contact.name} />
              <AvatarFallback>{contact.icon}</AvatarFallback>
            </Avatar>
            <p className="text-xs text-center">{contact.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
