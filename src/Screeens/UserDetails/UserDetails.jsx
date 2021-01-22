import React, { useState } from 'react';
import Modal from 'react-modal';
import './UserDetails.css';

export default function UserDetails({ username = 'tahir' }) {
  const [modalIsOpen, setIsOpen] = useState(true);
  const [userData, setUserData] = useState({
    school: '',
    degree: '',
    field: '',
    start_year: '',
    end_year: '',
    grade: '',
  });

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: 500,
      width: 500,
    },
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleInput = (event) => {
    let tempData = userData;
    tempData[event.target.name] = event.target.value;
    setUserData(tempData);
  };

  const handleSubmit = () => {
    localStorage.setItem('userData', userData);
  };

  return (
    <div className="mt-5">
      <h4 className="home-heading mb-3">Welcome to {username}'s education page.</h4>
      <div className="mt-3">
        <button className="add-button" onClick={openModal}>
          Add New Education
        </button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
          <div className="float-right close-icon" onClick={closeModal}>
            Close
          </div>
          <div className="mt-5">
            <div>
              <input
                className="modal-inputfield"
                type="text"
                name="school"
                onChange={handleInput}
                placeholder="School Name"
              />
            </div>
            <input
              className="modal-inputfield"
              type="text"
              name="degree"
              onChange={handleInput}
              placeholder="Degree Name"
            />
            <input
              className="modal-inputfield"
              type="text"
              name="field"
              onChange={handleInput}
              placeholder="Field Name"
            />
            <input
              className="modal-inputfield"
              type="text"
              name="start_year"
              onChange={handleInput}
              placeholder="Your name"
            />
            <input
              className="modal-inputfield"
              type="text"
              name="end_year"
              onChange={handleInput}
              placeholder="End Year"
            />
            <input className="modal-inputfield" type="text" name="grade" onChange={handleInput} placeholder="Grade" />
          </div>

          <div className="text-right" style={{ position: 'absolute', bottom: 0, right: 0, margin: 10 }}>
            <button onClick={handleSubmit} className="button btn-primary" style={{ borderRadius: 7 }}>
              Save
            </button>
          </div>
        </Modal>
      </div>
      <div className="row container-fluid mt-5">
        <div className="col-md-4">
          <div style={{ backgroundColor: '#e5e5e5', padding: 15, borderRadius: 7 }}>
            <h3 className="text-left">Showwcase University</h3>
            <p className="text-left">Forward Bootcamp</p>
          </div>
        </div>
        <div className="col-md-8">
          <div style={{ backgroundColor: '#e5e5e5', padding: 15, borderRadius: 7 }}>
            <h3 className="text-left">Graduate Computer Science @Showwcase University</h3>
            <p className="text-left">August 2019 - Present</p>

            <div className="text-left">
              <ul>
                <li>"Not all those who are lost"</li>
                <li>"Not all those who are lost"</li>
                <li>"Not all those who are lost"</li>
              </ul>
            </div>
          </div>
          <div className="mt-3" style={{ backgroundColor: '#e5e5e5', padding: 15, borderRadius: 7 }}>
            <h3 className="text-left">Graduate Computer Science @Showwcase University</h3>
            <p className="text-left">August 2019 - Present</p>

            <div className="text-left">
              <ul>
                <li>"Not all those who are lost"</li>
                <li>"Not all those who are lost"</li>
                <li>"Not all those who are lost"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
