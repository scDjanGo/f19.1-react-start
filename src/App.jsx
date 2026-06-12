
import HeaderMain from "./components/header/HeaderMain"
import LatestEpisodesHeader from "./components/main/latest-episodes/LatestEpisodesHeader"
import LatestEpisodesContainer from "./components/main/latest-episodes/LatestEpisodesContainer"



function App() {
// hello world
  return (
    <div id="main-container" className="bg-[#191919] px-12.5 min-h-dvh" >
      <HeaderMain />

      {/* Latest Episodes block */}
      <LatestEpisodesHeader />
      <LatestEpisodesContainer />
      {/*  */}

    </div>
  )
}

export default App
