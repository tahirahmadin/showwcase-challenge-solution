import React, { useState, para } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';
import './UserDetails.css';

const namesUrl = 'http://universities.hipolabs.com/search?country=turkey&name=';

export default function UserDetails() {
  let { username } = useParams();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState([]);

  const [userData, setUserData] = useState([]);
  const [singleData, setSingleData] = useState({
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
    let tempData = singleData;
    tempData[event.target.name] = event.target.value;
    setSingleData(tempData);
  };

  const handleSubmit = () => {
    userData.unshift(singleData);
    console.log(userData);
    setUserData(userData);
    closeModal();
  };

  const handleSearch = (event) => {
    getNames(event.target.value);
  };

  const getNames = async (word) => {
    let result = await axios.get(`${namesUrl}${word}`);
    setCountries(result);
  };
  let timer;
  const debouncedCall = (func, delay) => {
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  return (
    <div className="mt-5 container">
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
            <input
              className="modal-inputfield"
              type="text"
              name="school"
              onChange={debouncedCall(handleSearch, 500)}
              placeholder="School Name"
            />
            <div class="dropdown">
              <div id="myDropdown" class="dropdown-content">
                <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()" />
                <a href="#about">About</a>
                <a href="#base">Base</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
                <a href="#custom">Custom</a>
                <a href="#support">Support</a>
                <a href="#tools">Tools</a>
              </div>
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
              type="number"
              name="start_year"
              onChange={handleInput}
              placeholder="Start year"
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
      {userData.length === 0 ? (
        <div className="mt-3" style={{ height: 150, backgroundColor: '#e5e5e5', padding: 15, borderRadius: 7 }}>
          Data Not Added
        </div>
      ) : (
        <div className="row container-fluid mt-5">
          <div className="col-md-4">
            <div style={{ backgroundColor: '#e5e5e5', padding: 15, borderRadius: 7 }}>
              <h3 className="text-left">{userData[0].school}</h3>
              <p className="text-left">{userData[0].degree}</p>
            </div>
          </div>
          <div className="col-md-8">
            {userData.map((experience) => {
              return (
                <div style={{ backgroundColor: '#e5e5e5', padding: 15, borderRadius: 7 }}>
                  <h3 className="text-left">
                    {experience.degree} @{experience.school}
                  </h3>
                  <p className="text-left">
                    {experience.start_year} - {experience.end_year}
                  </p>
                  <p className="text-left">
                    <strong>Grades:</strong> {experience.grade}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
