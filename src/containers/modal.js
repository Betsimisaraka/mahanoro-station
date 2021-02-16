import React from 'react';
import Modal from 'react-modal';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleModal } from '../actions';

import{ ComfirmModal } from '../components';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border                :  '5px solid #E53170'
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
            <ComfirmModal>
                <ComfirmModal.CloseBtn onClick={() => dispatch(toggleModal(false))} type="button">X</ComfirmModal.CloseBtn>
                <ComfirmModal.Frame>
                    <ComfirmModal.Group>
                        <img src="../images/group.svg" alt="Vector" />
                        <ComfirmModal.Title>Booking confirmed</ComfirmModal.Title>
                    </ComfirmModal.Group>
                    <ComfirmModal.Description>Thank you for trusting our services. Your booking has been added to your account. You can review it there.</ComfirmModal.Description>
                    <Link to="/account/:accountId">
                        <ComfirmModal.ComfirmBtn onClick={() => dispatch(toggleModal(false))} type="button">Check your account</ComfirmModal.ComfirmBtn>
                    </Link>
                </ComfirmModal.Frame>
            </ComfirmModal>
            
        </Modal>
    )
}
