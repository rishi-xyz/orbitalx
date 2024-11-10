import { ClerkProvider } from "@clerk/nextjs";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider
        afterSignOutUrl={"/"}
        >
            {children}
        </ClerkProvider>
    );
};

export default RootLayout;
