import '@/styles/globals.css';
import Layout from "@/component/layout";
import { SectorProvider } from '@/context/useFetchSectors';

export default function App({ Component, pageProps }) {
  return (
    <SectorProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SectorProvider>
  )
}
