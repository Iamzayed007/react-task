import React, { useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import Modal from './Modal';
import ModalContent from './Modal';
const Problem2 = () => {
    const [modalType, setModalType] = useState('')
    const [contactList, setContactList] = useState([])
    const history = createBrowserHistory();
    const [show, setShow] = useState(false);
    const [showEven, setShowEvens] = useState(false)
    const [search, setSearch] = useState('')
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const handleCheckboxChange = () => {
        setShowEvens(!showEven);
    };
    const handleClose = () => {
        setShow(false)
        history.push('/problem-2')
    }
    const handleShow = () => setShow(true);



    const handleAllCountry = (type) => {
        setModalType(type)
        setShow(true);
        history.push('/problem-2/all-contacts')
    }
    const handleUsCountry = (type) => {
        setModalType(type)
        setShow(true);
        history.push('/problem-2/us-country')
    }
    useEffect(() => {

        if (modalType === 'usContacts') {
            if (search != '') {
                fetch(`https://contact.mediusware.com/api/country-contacts/United%20States/?search=${search}`, {
                    'accept': 'application/json',
                    'X-CSRFToken': 'YvCDfARkKzXcEaYi5quaYhgCZO06Wg3RIo5mEtQAT0Uu8S23X2xjjhTh8xXW3aqe',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (showEven) {
                            const filteredData = data.results.filter(contact => contact.id % 2 === 0);
                            setContactList({ ...data, results: filteredData })
                        }
                        else {
                            setContactList(data)
                        }
                    })
            }
         else  { fetch('https://contact.mediusware.com/api/country-contacts/United%20States/', {
                'accept': 'application/json',
                'X-CSRFToken': 'YvCDfARkKzXcEaYi5quaYhgCZO06Wg3RIo5mEtQAT0Uu8S23X2xjjhTh8xXW3aqe',
            })
                .then(res => res.json())
                .then(data => {
                    if (showEven) {
                        const filteredData = data.results.filter(contact => contact.id % 2 === 0);
                        setContactList({ ...data, results: filteredData })
                    }
                    else {
                        setContactList(data)
                    }
                })}
        }
        if (modalType === 'allContacts') {
            if (search != '') {
                fetch(`https://contact.mediusware.com/api/contacts/?search=${search}`, {
                'accept': 'application/json',
                'X-CSRFToken': 'YvCDfARkKzXcEaYi5quaYhgCZO06Wg3RIo5mEtQAT0Uu8S23X2xjjhTh8xXW3aqe',
            })
                .then(res => res.json())
                .then(data => {
                    if (showEven) {
                        const filteredData = data.results.filter(contact => contact.id % 2 === 0);
                        setContactList({ ...data, results: filteredData })
                    }
                    else {
                        setContactList(data)
                    }
                })
            }
          else{
            fetch('https://contact.mediusware.com/api/contacts/', {
                'accept': 'application/json',
                'X-CSRFToken': 'YvCDfARkKzXcEaYi5quaYhgCZO06Wg3RIo5mEtQAT0Uu8S23X2xjjhTh8xXW3aqe',
            })
                .then(res => res.json())
                .then(data => {
                    if (showEven) {
                        const filteredData = data.results.filter(contact => contact.id % 2 === 0);
                        setContactList({ ...data, results: filteredData })
                    }
                    else {
                        setContactList(data)
                    }
                })
          }
        }
    }, [modalType, showEven,search])

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-md text-white" style={{ backgroundColor: '#46139f' }} type="button" onClick={() => handleAllCountry('allContacts')} data-bs-toggle="modal" data-bs-target="#exampleModal" >All Contacts</button>
                    <button className="btn btn-md text-white" style={{ backgroundColor: '#ff7f50' }} type="button" onClick={() => handleUsCountry('usContacts')} >US Contacts</button>
                </div>

            </div>
            <ModalContent show={show} handleClose={handleClose}
                handleUsCountry={handleUsCountry}
                handleAllCountry={handleAllCountry}
                contactList={contactList}
                showEven={showEven}
                handleCheckboxChange={handleCheckboxChange}
                handleSearch={handleSearch}
            />
        </div>
    );
};

export default Problem2;