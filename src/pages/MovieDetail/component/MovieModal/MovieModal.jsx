import React from 'react'
import { useState } from 'react';
import { Modal} from 'react-bootstrap';
import ModalWatch from '../MovieWatch/MovieWatch'
import './MovieModal.style.css'

const MovieModal = ({video}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <button className="video-btn" onClick={handleShow}>
            예고편 확인하기
        </button>
        <div
        style={{ display: 'block', position: 'initial' }}
        >
        <Modal show={show}
            onHide={handleClose}
            animation={false}
            dialogClassName='modal-90w'
            contentClassName='modal-style'
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <ModalWatch video={video}/>
            </Modal.Body>
        </Modal>
        </div>
    </>
  )
}

export default MovieModal