import HeaderComponent from './components/HeaderComponent';
import SectionOneComponent from './components/SectionOneComponent';
import SectionTwoComponent from './components/SectionTwoComponent';
import SectionThreeComponent from './components/SectionThreeComponent';
import SectionFourComponent from './components/SectionFourComponent';
import SectionFiveComponent from "./components/SectionFiveComponent";
import SectionSixComponent from "./components/SectionSixComponent";
import SectionSevenComponent from "./components/SectionSevenComponent";
import FooterComponent from "./components/FooterComponent";
import KCHeader from "./components/KCHeader";
import KCSection1Main from "./components/KCSection1Main";

function App() {
  return (
    <div className="layout">
        {/*<HeaderComponent/>*/}
        <KCHeader/>
        <KCSection1Main/>
        {/*<SectionOneComponent/>*/}
        <SectionTwoComponent/>
        <SectionThreeComponent/>
        <SectionFourComponent/>
        <SectionFiveComponent/>
        <SectionSixComponent/>
        <SectionSevenComponent/>
        <FooterComponent/>
    </div>
  );
}

export default App;