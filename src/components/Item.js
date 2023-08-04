import "./Item.css";
export default function Item(props) {
  const { data } = props;
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <button>ลบ</button>
        <button>แก้ไข</button>
      </div>
    </div>
  );
}
