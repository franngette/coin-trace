import React, { useState } from "react";
import CoinTraceNavigation from "./navigation/CoinTraceNavigation";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { init } from "./helpers/db";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import pairsReducer from "./store/reducers/coinPair";
import ReduxThunk from "redux-thunk";

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

const store = createStore(pairsReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

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
    <Provider store={store}>
      <CoinTraceNavigation />
    </Provider>
  );
}
