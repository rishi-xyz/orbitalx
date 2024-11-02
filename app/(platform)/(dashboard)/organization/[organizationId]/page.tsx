import { auth } from "@clerk/nextjs/server";
import { OrganizationProfile, UserButton } from "@clerk/nextjs";

const DashboardPage = async () => {
  const { userId, orgId } = await auth();
  return (
    <div>
      <h1>Organization Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
