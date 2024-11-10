import { OrganizationList } from "@clerk/nextjs";

export default function SelectCreateOrg() {
    return (
        <div className="flex flex-col items-center mt-4 gap-6 w-full max-w-lg mx-auto px-4 sm:px-6 lg:px-8 border border-gray-700 rounded-lg p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
            <OrganizationList
                afterSelectPersonalUrl={"/organization/:id"}
                afterCreateOrganizationUrl={"/organization/:id"}
                afterSelectOrganizationUrl={"/organization/:id"} 
            />
        </div>
    );
};