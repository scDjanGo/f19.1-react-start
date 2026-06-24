import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  memo,
} from "react";
import ThemeProvider  from "./context/themeContext";
import HeaderMain from "./components/header/HeaderMain";
import LatestEpisodesContainer from "./components/main/latest-episodes/LatestEpisodesContainer";
export default function App() {




  return <div>
    <ThemeProvider >
      <HeaderMain />

      <LatestEpisodesContainer />
    </ThemeProvider>
  </div>;
}
