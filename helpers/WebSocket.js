import { channelId, updatePrice } from "../store/actions/coinPair";
import { store } from "../store/store";

const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

export const sendWs = (pair) => {
  if (ws.readyState === 1) {
    let msg = JSON.stringify({
      event: "subscribe",
      channel: "ticker",
      symbol: `t${pair}`,
    });
    ws.send(msg);
  }
};

ws.addEventListener("message", function (event) {
  console.log(event.data);
  let messageObj = JSON.parse(event.data);
  if (messageObj.event === "subscribed") {
    store.dispatch(channelId(messageObj));
  }
  if (Array.isArray(messageObj)) {
    if (typeof messageObj[1][6] === "number") store.dispatch(updatePrice(messageObj));
  }
  console.log("Message from server ");
});

ws.onerror = (e) => {
  // an error occurred
  console.log(e.message);
};

ws.onclose = (e) => {
  // connection closed
  console.log(e.code, e.reason);
};

/* get pairs :  https://api-pub.bitfinex.com/v2/conf/pub:list:pair:exchange  */
