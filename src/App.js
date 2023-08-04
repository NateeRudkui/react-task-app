import "./App.css";
import Header from "./components/Header";
import Addform from "./components/AddForm";
import Item from "./components/Item";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "แก้บั๊คโปรแกรม",
    },
    {
      id: 2,
      title: "กดเงิน",
    },
    {
      id: 3,
      title: "เลี้ยงปลา",
    },
  ]);
  function deleattaks(id) {
    console.log(id);
  }
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Addform />
        <section>
          {tasks.map((data) => (
            <Item key={data.id} data={data} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
