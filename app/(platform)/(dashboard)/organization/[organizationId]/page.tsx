import DashboardBanner from "@/components/DashboardBanner";
import DashboardActionButtons from "@/components/DashboardActionButtons";
import TokenSelectorModal from "@/src/modals/token-selector";
import AvtarList from "@/components/AvtarList";

const DashboardPage = async () => {
  return (
    <>
      <DashboardBanner/>
      <DashboardActionButtons/>
      <AvtarList/>
      <TokenSelectorModal/>
    </>
  );
};

export default DashboardPage;