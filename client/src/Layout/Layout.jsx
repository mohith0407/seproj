import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
export default function Layout({ children, hideBar, hideFooter }) {
  return (
    <>
      <main className="min-h-[100vh] bg-white dark:bg-base-200">
        <Sidebar hideBar={hideBar} />
        {children}
        {!hideFooter && <Footer />}
      </main>
    </>
  );
}
