import "./AddForm.css";
export default function Addform() {
  return (
    <>
      <h2>แบบฟอร์มจัดการงาน</h2>
      <form>
        <div className="form-control">
          <input type="text" className="text-input"></input>
          <button type="submit" className="submit-btn">
            เพิ่ม
          </button>
        </div>
      </form>
    </>
  );
}
