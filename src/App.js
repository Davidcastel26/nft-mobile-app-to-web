//importing the files from the index components
import { Download, Features, SectionWrapper } from "./components";
import assets from './assets'

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="You own store of Nifty NFTs. Start Selling & Growing!"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ Million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design"
        showBtn
        mockupImg={assets.homeCards}
        // banner="banner"
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands."
        // showBtn
        mockupImg={assets.feature}
        // banner="banner"
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        // showBtn
        mockupImg={assets.mockup}
        banner="banner02"
        // reverse
      />
    </>
  );
}

export default App;
