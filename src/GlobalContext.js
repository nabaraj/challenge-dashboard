import React, { createContext, useState } from "react";
import { generate_token, localStorageUse } from "./utils";

export const ECDContext = createContext();

function GlobalContext({ children }) {
  const [listData, setListData] = useState(localStorageUse.getItem("data"));
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
      let addedChallengeList = [...cList, challenge];
      localStorageUse.setItem("data", addedChallengeList);
      return addedChallengeList;
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
    localStorageUse.setItem("data", listDataTemp);
    setListData(listDataTemp);
  };
  const isLoggedIn = () => {
    return Boolean(loggedIn);
  };
  const signIn = (empId) => {
    setLoggedInId(empId);
  };
  const signOut = () => {
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
