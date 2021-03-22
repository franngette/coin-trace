import React, { useState } from "react";
import CoinTraceNavigation from "./navigation/CoinTraceNavigation";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { init } from "./helpers/db";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { getPairs } from "./store/actions/coinPair";

init()
  .then(() => {
    console.log("Init DB");
  })
  .catch((err) => {
    console.log(err, "Init DB Failed.");
  });

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  store.dispatch(getPairs());

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <>
      <Provider store={store}>
        <CoinTraceNavigation />
      </Provider>
    </>
  );
}
