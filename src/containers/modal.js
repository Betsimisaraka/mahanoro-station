import React from 'react';
import Modal from 'react-modal';
import {useDispatch, useSelector} from 'react-redux';
import { toggleModal } from '../actions';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export default function ModalContainer() {
    const displayModal = useSelector(state => state.displayModal);
    const dispatch = useDispatch();

    return (
        <Modal
            isOpen={displayModal}
            style={customStyles}
            contentLabel="Modal example"
        >
            <div>
                <button onClick={() => dispatch(toggleModal(false))} type="button">X</button>
                <div>
                    <h3>Booking confirmed</h3>
                    <p>Thank you for trusting our services. Your booking has been added to your account. You can review it there.</p>
                    <button type="button">Check your account</button>
                </div>
            </div>
            
        </Modal>
    )
}
