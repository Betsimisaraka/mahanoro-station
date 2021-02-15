import React from 'react';
import Modal from 'react-modal';
import {useDispatch, useSelector} from 'react-redux';
import { toggleModal } from '../actions';

import{ ComfirmModal } from '../components';

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
            <ComfirmModal>
                <ComfirmModal.CloseBtn onClick={() => dispatch(toggleModal(false))} type="button">X</ComfirmModal.CloseBtn>
                <ComfirmModal.Frame>
                    <ComfirmModal.Title>Booking confirmed</ComfirmModal.Title>
                    <ComfirmModal.Description>Thank you for trusting our services. Your booking has been added to your account. You can review it there.</ComfirmModal.Description>
                    <ComfirmModal.ComfirmBtn type="button">Check your account</ComfirmModal.ComfirmBtn>
                </ComfirmModal.Frame>
            </ComfirmModal>
            
        </Modal>
    )
}
