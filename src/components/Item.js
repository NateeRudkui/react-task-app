import "./Item.css";
import { TiTimes, TiEdit } from "react-icons/ti";
export default function Item(props) {
  const { data, deleteTask, editTask } = props;
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <TiTimes className="btn" onClick={() => deleteTask(data.id)} />
        <TiEdit className="btn" onClick={() => editTask(data.id)} />
      </div>
    </div>
  );
}
