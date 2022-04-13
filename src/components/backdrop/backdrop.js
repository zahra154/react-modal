import './backdrop.scss'


    function Backdrop(props) {
        return <div className="modal-backdrop" onClick={props.onClick}/>
    }

    export default Backdrop;
