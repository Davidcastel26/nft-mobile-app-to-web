//importing the files from the index components
import { Download, Features, SectionWrapper } from "./components";

const App = () => {
  return (
    <>
      <Download />
      <Features />
      <SectionWrapper 
        title="You own store of Nifty NFTs. Start Selling & Growing!"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ Million people using ProNef Marketplace."
      />
    </>
  );
}

export default App;
