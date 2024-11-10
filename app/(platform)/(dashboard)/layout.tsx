import DashboardNavbar from "@/components/layout/DashboardNavbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <DashboardNavbar/>
      {children}
    </div>
  );
};

export default DashboardLayout;
