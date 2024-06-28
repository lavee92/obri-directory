import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, hideLayout }) => {

   return (
   <>
      {!hideLayout && <Header />}
      <main style={{ minHeight: "100vh" }}>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;
