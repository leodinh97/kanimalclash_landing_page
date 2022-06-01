import SectionFourComponent from './components/SectionFourComponent';
import SectionFiveComponent from "./components/SectionFiveComponent";
import SectionSixComponent from "./components/SectionSixComponent";
import SectionSevenComponent from "./components/SectionSevenComponent";
import FooterComponent from "./components/FooterComponent";
import KCHeader from "./components/KCHeader";
import KCSection1Main from "./components/KCSection1Main";
import KCSection2Video from "./components/KCSection2Video";
import KCSection3Parallax from "./components/KCSection3Parallax";

function App() {
  return (
    <div className="layout">
        {/*<HeaderComponent/>*/}
        <KCHeader/>
        <KCSection1Main/>
        <KCSection2Video/>
        <KCSection3Parallax/>
        {/*<SectionOneComponent/>*/}
        {/*<SectionTwoComponent/>*/}
        {/*<SectionThreeComponent/>*/}
        <SectionFourComponent/>
        <SectionFiveComponent/>
        <SectionSixComponent/>
        <SectionSevenComponent/>
        <FooterComponent/>
    </div>
  );
}

export default App;