import Header from "../Components/Header";
import Bodytext from "../Components/Bodytext";
import Body2text from "../Components/Body2text";
import Body3text from "../Components/Body3text";
import Body4text from "../Components/Body4text";
import Body5text from "../Components/Body5text";
import Footer from "../Components/Footer";

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          height: "150vh",
          backgroundColor: "#2A0134",
          overflow: "hidden",
        }}
      >
        <Bodytext />
      </div>
      <Body2text />
      <Body3text />
      <Body4text />
      <Body5text />
      <Footer />
    </>
  );
}
export default App;
