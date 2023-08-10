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
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("กรุณากรอกข้อมูล");
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }

  function editTask(id) {
    setEditId(id);
    const edidTask = tasks.find((item) => item.id === id);
    console.log(edidTask);
  }

  function deleteTask(id) {
    const result = tasks.filter((item) => item.id !== id);
    setTasks(result);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Addform title={title} setTitle={setTitle} saveTask={saveTask} />
        <section>
          {tasks.map((data) => (
            <Item
              key={data.id}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
