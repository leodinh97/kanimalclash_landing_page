import FooterComponent from "./components/FooterComponent";
import KCHeader from "./components/KCHeader";
import KCSection1Main from "./components/KCSection1Main";
import KCSection2Video from "./components/KCSection2Video";
import KCSection3Parallax from "./components/KCSection3Parallax";
import KCSection4Background from "./components/KCSection4Background";
import KCSection5Cards from "./components/KCSection5Cards";
import KCSection6Text from "./components/KCSection6Text";
import KCSection7Modal from "./components/KCSection7Modal";

function App() {
  return (
    <div className="layout">
        {/*<HeaderComponent/>*/}
        <KCHeader/>
        <KCSection1Main/>
        <KCSection2Video/>
        <KCSection3Parallax/>
        <KCSection4Background/>
        <KCSection5Cards/>
        <KCSection6Text/>
        <KCSection7Modal/>
        {/*<SectionOneComponent/>*/}
        {/*<SectionTwoComponent/>*/}
        {/*<SectionThreeComponent/>*/}
        {/*<SectionFourComponent/>*/}
        {/*<SectionFiveComponent/>*/}
        {/*<SectionSixComponent/>*/}
        {/*<SectionSevenComponent/>*/}
        <FooterComponent/>
    </div>
  );
}

export default App;