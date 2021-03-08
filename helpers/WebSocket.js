import React from "react";

var ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
let msg = JSON.stringify({
  event: "subscribe",
  channel: "ticker",
  symbol: "tBTCUSD",
});
ws.onopen = () => {
  // connection opened
  ws.send(msg); // send a message
};

ws.addEventListener("message", function (event) {
  console.log("Message from server ", event);
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