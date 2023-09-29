import "./css/theme.css";
import "./css/base.css";
import HomeLayout from "./components/Layout/HomeLayout";
import Hero from "./components/Sections/Hero";
import MenuSelection from "./components/Sections/MenuSelection";
import ChefProfile from "./components/Features/ChefProfile";
import ChefInfo from "./components/Sections/ChefInfo";
import Reviews from "./components/Sections/Reviews";
import Menus from "./components/Sections/Menus";

function App() {
  return (
    <HomeLayout>
      <Hero/>
      <MenuSelection/>
      <ChefInfo/>
      <Reviews/>
      <Menus/>
    </HomeLayout>
  );
}

export default App;
