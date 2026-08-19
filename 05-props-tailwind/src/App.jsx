import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div>
        <Card title={'BDO India'} description={'BDO is the 6th largest service firm in the world'} btnText={'Click Me'} />
        <Card title={'SFR Medial'} description={'SFR medical is the forensic firm, which prepares legal reports for UK police'} />
      </div>
    </>
  );
}

export default App;
