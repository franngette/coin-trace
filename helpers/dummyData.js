const pairs = [
  { primary: "ada", secondary: "btc", id: 1 },
  { primary: "ada", secondary: "usd", id: 2 },
  { primary: "ada", secondary: "ust", id: 3 },
  { primary: "amp", secondary: "btc", id: 4 },
  { primary: "amp", secondary: "usd", id: 5 },
  { primary: "amp", secondary: "ust", id: 6 },
  { primary: "ant", secondary: "btc", id: 7 },
  { primary: "ant", secondary: "eth", id: 8 },
  { primary: "ant", secondary: "usd", id: 9 },
  { primary: "ast", secondary: "usd", id: 10 },
  { primary: "bal", secondary: "usd", id: 15 },
  { primary: "bal", secondary: "ust", id: 16 },
  { primary: "bat", secondary: "btc", id: 17 },
  { primary: "bat", secondary: "eth", id: 18 },
  { primary: "bat", secondary: "usd", id: 19 },
  { primary: "bnt", secondary: "usd", id: 21 },
  { primary: "bsv", secondary: "btc", id: 23 },
  { primary: "bsv", secondary: "usd", id: 24 },
  { primary: "btc", secondary: "eur", id: 25 },
  { primary: "btc", secondary: "gbp", id: 26 },
  { primary: "btc", secondary: "jpy", id: 27 },
  { primary: "btc", secondary: "usd", id: 28 },
  { primary: "btc", secondary: "ust", id: 29 },
  { primary: "btg", secondary: "btc", id: 31 },
  { primary: "btg", secondary: "usd", id: 32 },
  { primary: "cnd", secondary: "usd", id: 37 },
  { primary: "dai", secondary: "btc", id: 41 },
  { primary: "dai", secondary: "eth", id: 42 },
  { primary: "dai", secondary: "usd", id: 43 },
  { primary: "dat", secondary: "btc", id: 44 },
  { primary: "dat", secondary: "usd", id: 45 },
  { primary: "dgb", secondary: "usd", id: 46 },
  { primary: "dot", secondary: "btc", id: 51 },
  { primary: "dot", secondary: "usd", id: 52 },
  { primary: "dot", secondary: "ust", id: 53 },
  { primary: "dta", secondary: "usd", id: 57 },
  { primary: "edo", secondary: "btc", id: 59 },
  { primary: "edo", secondary: "eth", id: 60 },
  { primary: "edo", secondary: "usd", id: 61 },
  { primary: "enj", secondary: "usd", id: 62 },
  { primary: "eos", secondary: "btc", id: 63 },
  { primary: "eos", secondary: "eth", id: 64 },
  { primary: "eos", secondary: "eur", id: 65 },
  { primary: "eos", secondary: "gbp", id: 66 },
  { primary: "eos", secondary: "jpy", id: 67 },
  { primary: "eos", secondary: "usd", id: 68 },
  { primary: "eos", secondary: "ust", id: 69 },
  { primary: "etc", secondary: "btc", id: 71 },
  { primary: "etc", secondary: "usd", id: 72 },
  { primary: "eth", secondary: "btc", id: 73 },
  { primary: "eth", secondary: "eur", id: 74 },
  { primary: "eth", secondary: "gbp", id: 75 },
  { primary: "eth", secondary: "jpy", id: 76 },
  { primary: "eth", secondary: "usd", id: 77 },
  { primary: "eth", secondary: "ust", id: 78 },
  { primary: "etp", secondary: "btc", id: 79 },
  { primary: "etp", secondary: "eth", id: 80 },
  { primary: "etp", secondary: "usd", id: 81 },
  { primary: "fil", secondary: "usd", id: 89 },
  { primary: "fil", secondary: "ust", id: 90 },
  { primary: "fun", secondary: "usd", id: 93 },
  { primary: "gno", secondary: "usd", id: 95 },
  { primary: "gnt", secondary: "btc", id: 96 },
  { primary: "gnt", secondary: "eth", id: 97 },
  { primary: "gnt", secondary: "usd", id: 98 },
  { primary: "hot", secondary: "usd", id: 105 },
  { primary: "knc", secondary: "btc", id: 120 },
  { primary: "knc", secondary: "usd", id: 121 },
  { primary: "leo", secondary: "btc", id: 124 },
  { primary: "leo", secondary: "eos", id: 125 },
  { primary: "leo", secondary: "eth", id: 126 },
  { primary: "leo", secondary: "usd", id: 127 },
  { primary: "leo", secondary: "ust", id: 128 },
  { primary: "lrc", secondary: "btc", id: 129 },
  { primary: "lrc", secondary: "usd", id: 130 },
  { primary: "ltc", secondary: "btc", id: 131 },
  { primary: "ltc", secondary: "usd", id: 132 },
  { primary: "ltc", secondary: "ust", id: 133 },
  { primary: "mkr", secondary: "btc", id: 137 },
  { primary: "mkr", secondary: "eth", id: 138 },
  { primary: "mkr", secondary: "usd", id: 139 },
  { primary: "mln", secondary: "usd", id: 140 },
  { primary: "neo", secondary: "btc", id: 147 },
  { primary: "neo", secondary: "eth", id: 148 },
  { primary: "neo", secondary: "eur", id: 149 },
  { primary: "neo", secondary: "gbp", id: 150 },
  { primary: "neo", secondary: "jpy", id: 151 },
  { primary: "neo", secondary: "usd", id: 152 },
  { primary: "omg", secondary: "btc", id: 158 },
  { primary: "omg", secondary: "eth", id: 159 },
  { primary: "omg", secondary: "usd", id: 160 },
  { primary: "pax", secondary: "usd", id: 166 },
  { primary: "pax", secondary: "ust", id: 167 },
  { primary: "poa", secondary: "usd", id: 171 },
  { primary: "rcn", secondary: "usd", id: 177 },
  { primary: "rep", secondary: "btc", id: 178 },
  { primary: "rep", secondary: "usd", id: 179 },
  { primary: "req", secondary: "usd", id: 180 },
  { primary: "san", secondary: "btc", id: 185 },
  { primary: "san", secondary: "eth", id: 186 },
  { primary: "san", secondary: "usd", id: 187 },
  { primary: "snt", secondary: "usd", id: 189 },
  { primary: "tkn", secondary: "usd", id: 198 },
  { primary: "trx", secondary: "btc", id: 200 },
  { primary: "trx", secondary: "eth", id: 201 },
  { primary: "trx", secondary: "eur", id: 202 },
  { primary: "trx", secondary: "usd", id: 203 },
  { primary: "uni", secondary: "usd", id: 208 },
  { primary: "uni", secondary: "ust", id: 209 },
  { primary: "ust", secondary: "usd", id: 215 },
  { primary: "utk", secondary: "usd", id: 216 },
  { primary: "vet", secondary: "btc", id: 218 },
  { primary: "vet", secondary: "usd", id: 219 },
  { primary: "wax", secondary: "usd", id: 222 },
  { primary: "wpr", secondary: "usd", id: 225 },
  { primary: "wtc", secondary: "usd", id: 226 },
  { primary: "xlm", secondary: "btc", id: 231 },
  { primary: "xlm", secondary: "eth", id: 232 },
  { primary: "xlm", secondary: "usd", id: 233 },
  { primary: "xlm", secondary: "ust", id: 234 },
  { primary: "xmr", secondary: "btc", id: 235 },
  { primary: "xmr", secondary: "usd", id: 236 },
  { primary: "xmr", secondary: "ust", id: 237 },
  { primary: "xrp", secondary: "btc", id: 239 },
  { primary: "xrp", secondary: "usd", id: 240 },
  { primary: "xrp", secondary: "ust", id: 241 },
  { primary: "xtz", secondary: "btc", id: 243 },
  { primary: "xtz", secondary: "usd", id: 244 },
  { primary: "xvg", secondary: "usd", id: 245 },
  { primary: "yfi", secondary: "usd", id: 246 },
  { primary: "yfi", secondary: "ust", id: 247 },
  { primary: "zec", secondary: "btc", id: 252 },
  { primary: "zec", secondary: "usd", id: 253 },
  { primary: "zil", secondary: "usd", id: 254 },
  { primary: "zrx", secondary: "btc", id: 255 },
  { primary: "zrx", secondary: "eth", id: 256 },
  { primary: "zrx", secondary: "usd", id: 257 },
];

export default pairs;
