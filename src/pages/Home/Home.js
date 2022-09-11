import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import AddChallenge from "../../component/addChallenge/AddChallenge";
import ChllengeListItem from "../../component/challengeList/ChllengeListItem";
import { ECDContext } from "./../../GlobalContext";
import { sortingChallenge } from "./../../utils";
import "./home.scss";

export default function Home() {
  const ecdContext = useContext(ECDContext);
  const {
    listData: challangeLists,
    addChallenge,
    addRemoveRating,
    isLoggedIn,
    signOut,
  } = ecdContext;
  const [showModal, setShowModal] = useState(false);
  const [sortingMethod, setSortingMethod] = useState("date");
  const [sortedChallengeList, setSortedChallengeList] = useState(
    sortingChallenge(challangeLists, sortingMethod)
  );

  useEffect(() => {
    setSortedChallengeList(sortingChallenge(challangeLists, sortingMethod));
  }, [sortingMethod, challangeLists]);
  const hideModal = () => {
    setShowModal(false);
  };
  const addChallengeToContext = (newChallenge) => {
    addChallenge(newChallenge);
  };
  if (!isLoggedIn()) {
    return <Redirect to={"/"} />;
  }
  return (
    <div className='container challengeLists'>
      <div className='my-5 position-relative'>
        <h3 className='border-bottom border-info border-3'>Challenge</h3>
        <div className='position-absolute d-flex toolBox'>
          <div
            className='floatBtn shadow rounded-circle text-bg-info'
            data-bs-toggle='tooltip'
            data-bs-placement='bottom'
            data-bs-title='Tooltip on bottom'
            onClick={() => setShowModal((oldValue) => !oldValue)}
          >
            <i className='bi bi-plus-lg'></i>
          </div>
          <div
            className='floatBtn shadow rounded-circle text-bg-warning'
            data-bs-toggle='tooltip'
            data-bs-placement='bottom'
            data-bs-title='Tooltip on bottom'
            onClick={() => signOut()}
          >
            <i className='bi bi-box-arrow-right'></i>
          </div>
        </div>
      </div>
      {showModal && (
        <AddChallenge
          hideModal={hideModal}
          show={showModal}
          addChallenge={addChallengeToContext}
        />
      )}
      <nav className='navbar navbar-expand-lg bg-light px-2'>
        <select
          className='ms-auto  form-select'
          value={sortingMethod}
          onChange={(e) => setSortingMethod(e.target.value)}
        >
          <option value='date'>Date</option>
          <option value='rating'>Rating</option>
        </select>
      </nav>
      {sortedChallengeList &&
        sortedChallengeList.map((challengeItem) => {
          return (
            <ChllengeListItem
              key={challengeItem.id}
              addRemoveRating={addRemoveRating}
              challenge={challengeItem}
            />
          );
        })}
    </div>
  );
}
