import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LayoutApp from "./layout";
import { NextRouter, useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const privateRoutes = ["/", "/roles"];
  const router: NextRouter = useRouter();

  return (
    <div>
      <div>
        {privateRoutes.includes(router.pathname) ? (
          <LayoutApp>
            <Component {...pageProps} />
          </LayoutApp>
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    </div>
  );
}
