import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TaskItem from './TaskItem';

function TopBar() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(-1);

  const [editId, setEditId] = useState(-1);
  const [allValue, setAllValue] = useState([]);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskIdCounter, setTaskIdCounter] = useState(0);

  const [isHidden, setIsHidden] = useState(false);

  const [showButton, setShowButton] = useState(true);

  const [tag1, setTag1] = useState();
  const [tag2, setTag2] = useState();
  const [tag3, setTag3] = useState();
  const [tag4, setTag4] = useState();

  const add1 = () => {
    setTag1(!tag1)
  }
  const add2 = () => {
    setTag2(!tag2)
  }
  const add3 = () => {
    setTag3(!tag3)
  }
  const add4 = () => {
    setTag4(!tag4)
  }



  const handleHideTask = (e) => {
    const checked = e.target.checked;
    const doneTask = allValue.filter(f => f.isDone);
    setData(doneTask)
    setIsHidden(checked);
  };
  const filteredTasks = () => {
    setData(d => d.filter(f => f.isDone))
  }

  const handleChecked = (i) => {
    const currentIsDone = [...allValue];
    currentIsDone[i] = { ...currentIsDone[i], isDone: !currentIsDone[i].isDone };
    setAllValue(currentIsDone);
  }

  const addTask = () => {
    if (title && description) {
      const newTask = {
        id: taskIdCounter,
        title,
        description,
        tags: [],
        isDone: false,

      };
      setAllValue([...allValue, newTask]);
      setTaskIdCounter(taskIdCounter + 1)
      setTitle("");
      setDescription("");
      if (tag1) newTask.tags.push("p1");
      if (tag2) newTask.tags.push("p2");
      if (tag3) newTask.tags.push("p3");
      if (tag4) newTask.tags.push("p4");

      setTag1(false);
      setTag2(false);
      setTag3(false);
      setTag4(false);
    }
  };

  const deleteItem = id => {
    const deletedTask = allValue.filter(task => task.id !== id);
    setAllValue(deletedTask);
  };

  const editItem = () => {
    if (editId === -1)
      return;
    setAllValue((p) => {
      const copy = [...p];
      copy[editId] = {
        title,
        description,
        tags: [
          tag1 ? "p1" : "",
          tag2 ? "p2" : "",
          tag3 ? "p3" : "",
          tag4 ? "p4" : "",
        ].filter((tag) => tag !== ""),
        id: editId,

      }
      return copy
    })
    setTitle('');
    setDescription('');
    setShowButton(true);
    setEditId(-1);
  };
  console.log(allValue);

  return (
    <section>
      <div className="todo">
        <div className="topbar">
          <div className="logo">
            <h1>todo</h1>
          </div>
          <div>
            <TodoForm
              addTask={addTask}
              setTitle={setTitle}
              setDescription={setDescription}
              title={title}
              description={description}
              toggle={toggle}
              setToggle={setToggle}
              showButton={showButton}
              editItem={editItem}
              editItemId={show}
              filteredTasks={filteredTasks}
              tag1={tag1}
              tag2={tag2}
              tag3={tag3}
              tag4={tag4}
              add1={add1}
              add2={add2}
              add3={add3}
              add4={add4}
            /></div>

        </div>
        <div className="content-section">
          <div className="list-section">
            <div className="work">
              <p></p>
              <a href="#">work</a>
            </div>
            <div className="study">
              <p></p>
              <a href="#" >study</a>
            </div>
            <div className="entertainment">
              <p></p>
              <a href="#" >entertainment</a>
            </div>
            <div className="family">
              <p></p>
              <a href="#" >family</a>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name=""
                id=""
                className="hide-checkbox"
                onChange={handleHideTask}
              />
              <span>Hide Done Tasks</span>
            </div>
          </div>
          <div className="task-section">
            <ListRender data={isHidden ? data : allValue}
              setShow={setShow}
              show={show}
              setToggle={setToggle}
              setTitle={setTitle}
              setDescription={setDescription}
              setShowButton={setShowButton}
              deleteItem={deleteItem}
              editItem={editItem}
              setEditId={setEditId}
              handleChecked={handleChecked}
              handleHideTask={handleHideTask}
              isHidden={isHidden}
              filteredTasks={filteredTasks}
              tag1={tag1}
              tag2={tag2}
              tag3={tag3}
              tag4={tag4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const ListRender = ({ tag1, tag2, tag3, tag4, data, setShow, show, setToggle, setTitle, setDescription, setShowButton, deleteItem, editItem, setEditId, handleChecked, handleHideTask, isHidden, filteredTasks }) => {
  return (
    data.map((task, i) => (
      <TaskItem
        key={task.id}
        task={task}
        i={i}
        setShow={setShow}
        show={show}
        setToggle={setToggle}
        setTitle={setTitle}
        setDescription={setDescription}
        setShowButton={setShowButton}
        deleteItem={deleteItem}
        editItem={editItem}
        setEditId={setEditId}
        handleChecked={handleChecked}
        handleHideTask={handleHideTask}
        done={task.isDone}
        isHidden={isHidden}
        filteredTasks={filteredTasks}
        tag1={tag1}
        tag2={tag2}
        tag3={tag3}
        tag4={tag4}

      />
    )))
}

export default TopBar;