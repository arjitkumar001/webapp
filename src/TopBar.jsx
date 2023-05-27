import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TaskItem from './TaskItem';

function TopBar() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(-1);

  const [allValue, setAllValue] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskIdCounter, setTaskIdCounter] = useState(0);

  const [isChecked, setIsChecked] = useState(false);
  const [isHideChecked, setIsHideChecked] = useState(false);

  const [showButton, setShowButton] = useState(true);

  // const handleButtonClicked = () => {
  //   console.log("Button Clicked");
  // };

  const handleHideChecked = () => {
    setIsHideChecked(!isHideChecked);
    if (isChecked) {
      setIsChecked(!isChecked);
    } else if (!isChecked) {
      setIsChecked(isChecked);
    }
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setIsHideChecked(isChecked);
    }
  };

  const addTask = () => {
    if (title && description) {
      const newTask = {
        id: taskIdCounter,
        title,
        description,
      };
      setAllValue([...allValue, newTask]);
      setTaskIdCounter(taskIdCounter +1)
      setTitle("");
      setDescription("");
    }
  };

  const deleteItem = id => {
    const deletedTask = allValue.filter(task => task.id !== id);
    setAllValue(deletedTask);
  };

  const editItem = id => {
    console.log(title, description);
    const updatedTask = allValue.map(task => {
      if (task.id === id) {
        return {
          ...task,
          title,
          description,
        };
      }
      return task;
    });
    setAllValue(updatedTask);
    setTitle('');
    setDescription('');
    setShowButton(true);
  };
  // console.log(addTask);

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
                onChange={handleHideChecked}
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
                isChecked={isChecked}
                handleChecked={handleChecked}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;