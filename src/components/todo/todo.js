import './todo.scss'
import {useState} from "react";
import Modal from "../modal/modal";
import Backdrop from "../backdrop/backdrop";

function Todo(props) {
    const [isModalFlag , setModalFlag] = useState(false)

    function deleteHandler() {
        setModalFlag(true);
    }
    function closeModalHandler() {
        setModalFlag(false);

    }

    return (
        <div>
            <div className='card  px-4 py-2 mb-2 '>
                <h4 className="my-2">{props.text? props.text :''}</h4>
                <div className='action text-end'>
                    <button className='btn btn-danger' onClick={deleteHandler}> حذف</button>
                </div>
            </div>
            {isModalFlag && <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler}/>}
            {isModalFlag && <Backdrop onClick={closeModalHandler}/>}
        </div>


    )
}
 export  default  Todo;
