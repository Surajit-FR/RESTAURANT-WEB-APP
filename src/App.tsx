import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import PanelCart from "./components/core/PanelCart";
import PanelMobile from "./components/core/PanelMobile";
import AnimationRoutes from "./routes/AnimationRoutes";


const App = (): JSX.Element => {

  return (
    <>
      {/* <!-- Header --> */}
      <Header />

      {/* AnimationRoutes */}
      <AnimationRoutes />

      {/* <!-- Panel Cart --> */}
      <PanelCart />

      {/* <!-- Panel Mobile --> */}
      <PanelMobile />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}

export default App;
