import Providers from "@/app/(platform)/(root)/provider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Providers>
            {children}
        </Providers>
    );
};

export default RootLayout;
