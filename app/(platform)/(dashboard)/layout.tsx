const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <h1>Dashboard Layout</h1>
      {children}
    </div>
  );
};

export default DashboardLayout;
