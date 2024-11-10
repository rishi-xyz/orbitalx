import DashboardBanner from "@/components/DashboardBanner";
import DashboardActionButtons from "@/components/DashboardActionButtons";
import TokenSelectorModal from "@/src/modals/token-selector";

const DashboardPage = async () => {
  return (
    <>
      <DashboardBanner/>
      <DashboardActionButtons/>
      <TokenSelectorModal/>
    </>
  );
};

export default DashboardPage;