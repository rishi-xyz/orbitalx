import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Settings() {
  const userPhotoURL = "/p8.jpg";
  return (
    <div className="bg-gradient-to-r from-[#1a1f33] to-[#00060c] text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        {/* Profile Section */}
        <div className="bg-gradient-to-b from-[#46285d] to-[#00060c] p-24 rounded-lg shadow-lg ml-40">
          <h2 className="text-2xl font-semibold mb-6 text-green-600">Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <Input
                type="text"
                placeholder="e.g., untitledui.com/olivia"
                className="bg-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Website</label>
              <Input
                type="text"
                placeholder="http://www.untitledui.com"
                className="bg-gray-700"
              />
            </div>
            <div className="flex items-center space-x-4 mt-4">
                {/* User Photo */}
                <img
                  src={userPhotoURL}
                  alt="User Photo"
                  className="w-12 h-12 rounded-full object-cover bg-gray-700"
                />
                <Button variant="outline">Update</Button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 mt-4">Your bio</label>
              <Textarea
                placeholder="Write a short introduction..."
                className="bg-gray-700"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 mt-4">Job Title</label>
              <Input
                type="text"
                placeholder="e.g., Product Designer"
                className="bg-gray-700"
              />
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 bg-gray-700 border-gray-600 rounded"
                />
                <label className="ml-2 text-sm text-gray-400 mt-4">
                  Show my job title in my profile
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 mt-4">
                Alternative Contact Email
              </label>
              <Input
                type="email"
                placeholder="example@example.com"
                className="bg-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    
  );
}