import { BiSolidAddToQueue } from "react-icons/bi";
import Modal from "./Modal";

const AddNewTask = () => {

  
  return (
    <div>
        <button className="btn btn-primary w-full">
            Add New Task <BiSolidAddToQueue size={18}/>
        </button>

        <Modal/>
    </div>
  )
}

export default AddNewTask