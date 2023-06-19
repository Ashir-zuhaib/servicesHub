import Footer from "./Footer/Footer";
import Header from "./Header/Header";
interface layout {
  children: any;
  isMobile: boolean;
}

const layout = ({ children, isMobile }: any) => {
  return (
    <>
      <Header isMobile={false} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
