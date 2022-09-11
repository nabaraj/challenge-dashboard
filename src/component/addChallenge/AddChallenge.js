import Multiselect from "multiselect-react-dropdown";
import React, { useState } from "react";

export default function AddChallenge({ show, hideModal, addChallenge }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: ["adipisicing", "tempor"],
  });
  const handleTags = (data) => {
    let selectedTags = [];
    if (data.length > 0) {
      selectedTags = data.map((item) => item.name);
    }
    let updatedFormData = Object.assign(formData, { tags: selectedTags });
    setFormData(updatedFormData);
  };
  const updateFormData = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setFormData({ ...formData, [name]: val });
  };
  const submitForm = () => {
    addChallenge(formData);
    hideModal();
  };
  const options = [
    {
      name: "adipisicing",
      value: "adipisicing",
    },
    {
      name: "tempor",
      value: "tempor",
    },
    {
      name: "eu",
      value: "eu",
    },
    {
      name: "proident",
      value: "proident",
    },
    {
      name: "excepteur",
      value: "excepteur",
    },
  ];
  return (
    <div
      className='modal show'
      style={{ display: show ? "block" : "none" }}
      tabIndex='-1'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Add Challenge</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={hideModal}
            ></button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='mb-3'>
                <label htmlFor='addChallengeTitle'>Title</label>
                <input
                  className='form-control'
                  id='addChallengeTitle'
                  name='title'
                  type='text'
                  placeholder='Add challenge title'
                  data-sb-validations=''
                  value={formData.title}
                  onChange={updateFormData}
                />
              </div>
              <div class='mb-3'>
                <label htmlFor='floatingTextarea'>Description</label>
                <textarea
                  class='form-control'
                  placeholder='Add challenge details'
                  id='floatingTextarea'
                  name='description'
                  value={formData.description}
                  onChange={updateFormData}
                ></textarea>
              </div>
              <div className='mb-3'>
                <label htmlFor='newField2'>Tags</label>
                <Multiselect
                  customCloseIcon={<i className='bi bi-x-circle px-1'></i>}
                  onKeyPressFn={function noRefCheck() {}}
                  name='tags'
                  onRemove={handleTags}
                  onSearch={() => {}}
                  onSelect={handleTags}
                  options={options}
                  displayValue='name'
                  style={{
                    chips: {
                      background: "#0dcaf0",
                      color: "black",
                    },
                  }}
                />
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button type='button' onClick={submitForm} className='btn btn-info'>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
