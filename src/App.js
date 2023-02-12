import CardInformation from "./components/Card/CardInformation";
import EditButton from "./components/EditButton/EditButton";
import GroupButtons from "./components/GroupButtons/GroupButtons";
import LogoAndTittle from "./components/LogoAndTittle/LogoAndTittle";

function App() {
  return (
    <>
      <LogoAndTittle/>
      <EditButton/>
      <GroupButtons/>
      <CardInformation/>
    </>
  );
}

export default App;
