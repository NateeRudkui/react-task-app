import "./Header.css";
export default function Header(props) {
  const { theam, setTheam } = props;
  function toggletheam() {
    if (theam === "light") return setTheam("dark");
    else return setTheam("light");
  }
  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span>{theam === "light" ? "โหมดกลางวัน" : "โหมดกลางคืน"}</span>
        <span onClick={toggletheam}> สลับ</span>
      </div>
    </header>
  );
}
