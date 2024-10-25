import Layout from "@/components/layout";
import WalletModal from "@/src/modals/wallet";
const TestingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      {children}
      <WalletModal />
    </Layout>
  )
}

export default TestingLayout