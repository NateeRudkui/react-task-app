import "./AddForm.css";
export default function Addform(props) {
  const { title, setTitle } = props;
  return (
    <>
      <h2>แบบฟอร์มจัดการงาน</h2>
      <form>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <button type="submit" className="submit-btn">
            เพิ่ม
          </button>
        </div>
      </form>
    </>
  );
}
