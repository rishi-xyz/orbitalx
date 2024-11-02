const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-background">
      <div className="w-full max-w-[700px] p-4 md:p-8">
        <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ClerkLayout;
