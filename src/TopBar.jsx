import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TaskItem from './TaskItem';

function TopBar() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(-1);

  const [editId, setEditId] = useState(-1);
  const [allValue, setAllValue] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskIdCounter, setTaskIdCounter] = useState(0);

  const [isHidden, setIsHidden] = useState(false);

  const [showButton, setShowButton] = useState(true);

  // const [tag1, setTag1] = useState(false);
  // const [tag2, setTag2] = useState(false);
  // const [tag3, setTag3] = useState(false);
  // const [tag4, setTag4] = useState(false);

  // const addtag1 = () => {
  //   setTag1(!tag1);
  // };

  // const addtag2 = () => {
  //   setTag2(!tag2);
  // };

  // const addtag3 = () => {
  //   setTag3(!tag3);
  // };

  // const addtag4 = () => {
  //   setTag4(!tag4);
  // };



  const handleHideTask = () => {
    const hasDoneTask = allValue.some(task => task.isDone);

    if (hasDoneTask) {
      setIsHidden(!isHidden);
      // alert("task hide")
    }
  }


  const handleChecked = (i) => {

    const currentIsDone = [...allValue];
    currentIsDone[i] = { ...currentIsDone[i], isDone: !currentIsDone[i].isDone };
    setAllValue(currentIsDone);
  }



  const addTask = (i) => {
    if (title && description) {
      const newTask = {
        id: taskIdCounter,
        title,
        description,
        isDone: false,
        tags: [],
      };

      setAllValue([...allValue, newTask]);
      setTaskIdCounter(taskIdCounter + 1)
      setTitle("");
      setDescription("");

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



          />
        </div>
        <div className="content-section">
          <div className="list-section">
            <div className="work">
              <p></p>
              <a href="#">work</a>
            </div>
            <div className="study">
              <p></p>
              <a href="#">study</a>
            </div>
            <div className="entertainment">
              <p></p> <a href="#">entertainment</a>
            </div>
            <div className="family">
              <p></p>
              <a href="#">family</a>
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

            {allValue.map((task, i) => (

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

              />

            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;