import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TaskItem from './TaskItem';
import {useDispatch, useSelector } from 'react-redux';
import { addItem ,toggle} from './Action/Action';



function TopBar() {
  // const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(-1);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const allValue = useSelector((state) => state.allValue) || [];
  const toggleState = useSelector((state) => state.toggle);


  const handleToggle = () => {
    dispatch(!toggle);
  };
 
 
 


  // Add task here=============================
  const addTask = () => {

    if (title && description) {
      const newTask = {
        id: Date.now(),
        title,
        description,
      };
      dispatch(addItem(newTask));
      setTitle('');
      setDescription('');
    }

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
              // toggle={toggle}
              // setToggle={setToggle}
              toggle={toggleState}
              setToggle={handleToggle}

            />
          </div>
        </div>
        <div className="content-section">
          <div className="list-section">
            <div className="work">
              <p></p>
              <a href="#">work</a>
            </div>
            <div className="study" >
              <p></p>
              <a href="#">study</a>
            </div>
            <div className="entertainment">
              <p></p>
              <a href="#">entertainment</a>
            </div>
            <div className="family" >
              <p></p>
              <a href="#">family</a>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name=""
                id=""
                className="hide-checkbox"
              />
              <span>Show Done Tasks</span>
            </div>
          </div>
          <div className="task-section">
            {
              allValue.map((task, i) => {
                return (
                  <TaskItem
                    key={task.id}
                    task={task}
                    i={i}
                    setShow={setShow}
                    show={show}
                    // setToggle={setToggle}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    handleToggle={handleToggle}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};



export default TopBar;