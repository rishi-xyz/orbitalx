import DashboardBanner from "@/components/DashboardBanner";
import DashboardActionButtons from "@/components/DashboardActionButtons";
import TokenSelectorModal from "@/src/modals/token-selector";
import PeopleSection from "@/components/People";
import BussinessSection from "@/components/Businesses";


const DashboardPage = async () => {
  return (
    <>
      <DashboardBanner/>
      <DashboardActionButtons/>
      <PeopleSection />
      <BussinessSection />
      <TokenSelectorModal/>
      
    </>
  );
};

export default DashboardPage;