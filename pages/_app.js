import Layout from "@/components/common/Layout";
import "@/assets/css/style.css";
import "@/assets/css/animate.css";
import "@/assets/css/jquery.datetimepicker.css";
import Head from "next/head";

export default function App({ Component, pageProps: { session, ...pageProps } }){
    console.log("components",Component)
    return(
        <>
     <Head>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

       <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

    {/* <script src="js/jquery.datetimepicker.full.min.js"></script>

    <script src="js/WOW.js"></script>
    <script src="js/wow.min.js"></script> */}
     </Head>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </>

    );

}