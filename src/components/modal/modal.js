import './modal.scss'


        function Modal(props) {
            return(
                <div className='modal-backdrop' onClick={props.onClick}>
                    <div className="custom-modal">
                        <div className="modal-content p-3 d-flex flex-column justify-content-around align-content-center ">
                            <h6 className=" h6 text-center">آیا مطمئن هستید؟</h6>
                            <div className="d-flex flex-row justify-content-around align-content-center">
                                <button className="btn btn-danger" onClick={props.onConfirm}> تایید </button>
                                <button className="btn btn-dark" onClick={props.onCancel}> انصراف</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }


export default Modal;
