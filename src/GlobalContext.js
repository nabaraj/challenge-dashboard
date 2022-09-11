import React, { createContext, useState } from "react";
import { generate_token } from "./utils";
export const ECDContext = createContext();
const listsDataConst = [
  {
    id: "631de1d0a301e020b3d5406c",
    title: "PLAYCE",
    description:
      "Ea dolor minim duis do do enim ipsum Lorem consequat cupidatat. Occaecat do laboris occaecat excepteur ut id sint eu nulla sit Lorem ullamco. Minim sunt exercitation deserunt fugiat dolore et nisi. Veniam qui qui pariatur ea nostrud labore qui anim qui adipisicing aliquip. Do excepteur adipisicing ullamco aliqua veniam tempor nostrud ea tempor est. Consectetur laborum voluptate officia tempor adipisicing fugiat sint ex consectetur ullamco consequat incididunt irure.\r\n",
    rating: 14,
    registered: 1089589325175.3094,
    tags: ["cillum", "fugiat", "Lorem", "id", "amet", "velit", "laborum"],
  },
  {
    id: "631de1d0c7453f624a9a995b",
    title: "ZILLAR",
    description:
      "Dolore occaecat sunt consectetur aliquip culpa anim duis adipisicing ut culpa nulla nisi. Reprehenderit exercitation culpa amet ex non exercitation aute. Nostrud elit do mollit qui ipsum voluptate. Veniam laborum ut anim duis tempor.\r\n",
    rating: 32,
    registered: 1651379053910.9229,
    tags: ["voluptate", "dolore", "sit", "sit", "irure", "quis", "culpa"],
  },
  {
    id: "631de1d002024f678dd14874",
    title: "PROVIDCO",
    description:
      "Dolore cupidatat exercitation elit non voluptate in ea nostrud cupidatat veniam aliqua officia esse. Sit cillum ex culpa do cillum ex. Pariatur eiusmod pariatur laborum anim incididunt et reprehenderit eu ad. Sint cupidatat nulla excepteur est aliquip elit fugiat.\r\n",
    rating: 3,
    registered: 666157597867.0438,
    tags: [
      "excepteur",
      "incididunt",
      "eu",
      "irure",
      "ullamco",
      "irure",
      "sunt",
    ],
  },
  {
    id: "631de1d0f75422b239be0114",
    title: "ORBIFLEX",
    description:
      "Ad id proident officia ullamco eu laboris. Eiusmod tempor id reprehenderit ullamco sit dolore mollit deserunt deserunt consequat adipisicing laboris sint. Excepteur esse esse velit fugiat sit. Voluptate quis cillum excepteur reprehenderit commodo ea sunt deserunt eiusmod excepteur. Occaecat ad commodo aliquip adipisicing quis ut amet eiusmod ea nisi Lorem aliqua ipsum.\r\n",
    rating: 33,
    registered: 816573938972.981,
    tags: [
      "exercitation",
      "pariatur",
      "qui",
      "dolore",
      "proident",
      "dolore",
      "Lorem",
    ],
  },
  {
    id: "631de1d0261be48b47474f7d",
    title: "VELITY",
    description:
      "Consequat nisi aute fugiat dolor esse. Tempor commodo anim quis consequat eu. Dolore commodo aliquip velit enim velit. Incididunt culpa proident pariatur dolore tempor.\r\n",
    rating: 27,
    registered: 1167724558984.6707,
    tags: ["do", "officia", "labore", "ullamco", "aute", "dolore", "proident"],
  },
  {
    id: "631de1d07593725b2056452d",
    title: "AEORA",
    description:
      "Do irure cupidatat deserunt labore et consectetur. Voluptate quis cillum laborum cupidatat esse non deserunt do id incididunt. Dolore cillum mollit voluptate est laborum ipsum cillum irure cupidatat aliquip ipsum eu non. Culpa culpa pariatur adipisicing aliqua est.\r\n",
    rating: 7,
    registered: 1441974568699.6975,
    tags: ["minim", "tempor", "culpa", "irure", "cillum", "ut", "fugiat"],
  },
  {
    id: "631de1d0e542c78d6ffe3803",
    title: "DRAGBOT",
    description:
      "Nisi labore incididunt velit consectetur aute. Reprehenderit ex deserunt cillum non sunt amet. Proident ex ea laboris aliqua reprehenderit dolor non anim laboris. Cupidatat reprehenderit cupidatat nostrud aute sit id.\r\n",
    rating: 27,
    registered: 1515047875432.5347,
    tags: ["elit", "quis", "nulla", "sint", "veniam", "dolore", "ea"],
  },
];
function GlobalContext({ children }) {
  const [listData, setListData] = useState(listsDataConst);
  const [loggedIn, setLoggedInId] = useState("");
  const addChallenge = (challenge) => {
    let registered = Date.now();
    challenge = {
      ...challenge,
      id: generate_token(20),
      rating: 0,
      registered: registered,
    };

    setListData((cList) => {
      return [...cList, challenge];
    });
  };
  const addRemoveRating = (updateType, id) => {
    const listDataTemp = [...listData];
    for (let i = 0; i < listDataTemp.length; i++) {
      if (listDataTemp[i].id === id) {
        listDataTemp[i].rating =
          updateType === "up"
            ? listDataTemp[i].rating + 1
            : listDataTemp[i].rating - 1;
      }
    }
    setListData(listDataTemp);
  };
  const isLoggedIn = () => {
    return Boolean(loggedIn);
  };
  const signIn = (empId) => {
    setLoggedInId(empId);
  };
  const signOut = (empId) => {
    setLoggedInId("");
  };
  const providerValue = {
    listData: listData,
    addChallenge,
    addRemoveRating,
    isLoggedIn,
    signIn,
    signOut,
  };

  return (
    <ECDContext.Provider value={providerValue}>{children}</ECDContext.Provider>
  );
}

export default GlobalContext;
