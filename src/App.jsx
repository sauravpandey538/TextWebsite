import React from "react";
import Main from "../Pages/Main";
import ChooseSemister from "../Pages/Buy/ChooseSemister";
import Footer from "../Components/Footer";
import GetSellerInfo from "../Pages/Buy/GetSellerInfo";
export default function App() {
  return (
    <>
      <Main />
      <ChooseSemister />
      <GetSellerInfo />
    </>
  );
}

// import Header from "../Components/Header";
// import Bodytext from "../Components/Bodytext";
// import Body2text from "../Components/Body2text";
// import Body3text from "../Components/Body3text";
// import Body4text from "../Components/Body4text";
// import Body5text from "../Components/Body5text";
// import Footer from "../Components/Footer";
// import Company from "../Components/Company";
// import React from "react";
// import { Flex, Button } from "@chakra-ui/react";
// import Lottie from "lottie-react";
// import trade_animation from "./trade_animation.json";
// export default function App() {
//   return (
//     // <div>
//     //   <div
//     //     style={{
//     //       height: "150vh",
//     //       backgroundColor: "#2A0134",
//     //       overflow: "hidden",
//     //     }}
//     //   >
//     //     <Bodytext />
//     //   </div>
//     <Flex>
//       <Lottie animationData={trade_animation} style={{ height: "200px" }} />
//       <Button></Button>
//     </Flex>
//     // <Body2text />
//     // <Body3text />
//     // <Body4text />
//     // <Body5text />
//     // </div>
//   );
// }
