import "./Header.css";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
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
        <span>{theam === "light" ? "โหมดกลางวัน" : "โหมดกลางคืน "}</span>
        <span className="icon " onClick={toggletheam}>
          {theam === "light" ? <BsSun /> : <BsFillMoonFill />}
        </span>
      </div>
    </header>
  );
}
