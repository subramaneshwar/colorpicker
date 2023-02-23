import './App.css';
import Card from './components/comp';
function App() {
  return (
    <div className="App">
      <Card hex="#FF6663" colors="PINK"/>
      <Card hex="#333333" colors="GRAY"/>
      <Card hex="#000000" colors="BLACk"/>
      <Card hex="#38BB14" colors="GREEN"/>
      <Card hex="#C90B0B" colors="RED"/>
      <Card hex="#FF8000" colors="ORANGE"/>
      <Card hex="#FFF500" colors="YELLOW"/>
      <Card hex="#CCCCCC" colors="LIGHTGREY"/>
      <Card hex="#7E41A2" colors="PURPLE"/>
      <Card hex="#C14911" colors="BROWN"/>
      
    </div>
  );
}

export default App;
