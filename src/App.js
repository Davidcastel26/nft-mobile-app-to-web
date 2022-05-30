//importing the files from the index components
import { Download, Features, SectionWrapper } from "./components";
import assets from './assets'

const App = () => {
  return (
    <>
      <Download />
      <Features />
      <SectionWrapper 
        title="You own store of Nifty NFTs. Start Selling & Growing!"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ Million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
    </>
  );
}

export default App;
