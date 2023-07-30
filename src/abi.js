export const sc_abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "int256", name: "", type: "int256" },
      { indexed: false, internalType: "int256", name: "", type: "int256" },
    ],
    name: "addEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "int256", name: "", type: "int256" },
    ],
    name: "initialEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "int256", name: "", type: "int256" },
    ],
    name: "resetEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "int256", name: "", type: "int256" },
      { indexed: false, internalType: "int256", name: "", type: "int256" },
    ],
    name: "subEvent",
    type: "event",
  },
  {
    inputs: [{ internalType: "int256", name: "_value", type: "int256" }],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "int256", name: "_value", type: "int256" }],
    name: "sub",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
