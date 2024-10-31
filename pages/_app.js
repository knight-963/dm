import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  const isAbout = router.pathname === '/Navbar';

  return (
    <div>
      {!isAbout && <Navbar />}
      <Component {...pageProps} />
    </div>
  );
}
