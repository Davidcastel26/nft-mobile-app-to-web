//importing the files from the index components
import { Download, Features, SectionWrapper } from "./components";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold ">React Nft</h1>
      <Download />
      <Features />
      <SectionWrapper />
    </div>
  );
}

export default App;
