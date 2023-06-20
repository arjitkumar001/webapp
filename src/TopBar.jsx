import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TaskItem from './TaskItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './Action/Action';

function TopBar() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(-1);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const allValue = useSelector((state) => state.allValue) || [];
  const dispatch = useDispatch();




  console.log(allValue);

  // Add task here=============================
  const addTask = () => {
    if (title && description) {
      const newTask = {
        id: allValue.length + 1,
        title,
        description,

      };
      dispatch(addItem(newTask))
      // setAllValue((prevTasks) => [...prevTasks, newTask]);
      // setTaskIdCounter((prevCounter) => prevCounter + 1);
      setTitle('');
      setDescription('');

    }
  };

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
                    setToggle={setToggle}
                    setTitle={setTitle}
                    setDescription={setDescription}
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