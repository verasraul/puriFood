import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
export const Layout = (props) => {
  return (
    <div className="layout-container">
      <NavigationBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
