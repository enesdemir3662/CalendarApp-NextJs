import "../styles/App.css";
import '../styles/Modal.css'

import { Toaster } from "react-hot-toast";
import { React } from "react";
import Layout from "../components/Layout";

function app({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default app;
