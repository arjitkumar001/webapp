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

  const [isChecked, setIsChecked] = useState();
  const [isHideChecked, setIsHideChecked] = useState(false);

  const [showButton, setShowButton] = useState(true);

  const [tag1, setTag1] = useState(false);
  const [tag2, setTag2] = useState(false);
  const [tag3, setTag3] = useState(false);
  const [tag4, setTag4] = useState(false);

  const addtag1 = () => {
    setTag1(!tag1)
  }
  const addtag2 = () => {
    setTag2(!tag2)
  }
  const addtag3 = () => {
    setTag3(!tag3)
  }
  const addtag4 = () => {
    setTag4(!tag4)
  }


  const checkboxHandlers = {
    handleHideChecked: () => {

      setIsHideChecked(!isHideChecked);
      if (isChecked) {
        setIsChecked(!isChecked);
      } else if (!isChecked) { 
        setIsChecked(isChecked);
      }
    },
    handleChecked: (i) => {
      // console.log("current checked ", i )
      // console.log(allValue[i])
      // const currentIsDone = !allValue[i].isDone
      // console.log(currentIsDone);
      // return ;
      const currentIsDone = [...allValue];
      currentIsDone[i] = { ...currentIsDone[i], isDone: true };
      setAllValue(currentIsDone);
    
      setIsChecked(!isChecked);
      if (isChecked) {
        setIsHideChecked(!isChecked);
      }
    }
  };


  const addTask = () => {
    if (title && description) {
      const newTask = {
        id: taskIdCounter,
        title,
        description,
        isDone: false,
        tags:[tag1,tag2,tag3,tag4],
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
            addtag1={addtag1}
            addtag2={addtag2}
            addtag3={addtag3}
            addtag4={addtag4}
      
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
                // onChange={handleHideChecked}
                onChange={checkboxHandlers.handleHideChecked}
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
                // handleChecked={handleChecked}
                editItem={editItem}
                setEditId={setEditId}
                checkboxHandlers={checkboxHandlers}
                tag1={tag1}
                tag2={tag2}
                tag3={tag3}
                tag4={tag4}
             
            
                done={task.isDone}
               
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;