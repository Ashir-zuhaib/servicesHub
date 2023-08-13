import Footer from "./Footer/Footer";
import Header from "./Header/Header";
interface layout {
  children: any;
  isMobile: boolean;
}

const layout = ({ children }: any) => {
  return (
    <>
      <div className="page-height">
        <Header />
        <main>
          <div>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default layout;
