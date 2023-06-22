import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TaskItem from './TaskItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteTask, doneTask,editTask} from './Action/Action';


function TopBar() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(-1);
  const [showButton, setShowButton] = useState(true);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskIdCounter, setTaskIdCounter] = useState(0)
  // const [editId, setEditId] = useState(-1)
  const [isHidden, setIsHidden] = useState(false)
  const [data,setData]=useState([])
  const dispatch = useDispatch();
  const allValue = useSelector((state) => state.todoReducer.allValue);
  

  // Done Task Here===========================

  const handleChecked = (i) => {
    const currentIsDone = [...allValue];
    currentIsDone[i] = {
      ...currentIsDone[i],
      isDone: !currentIsDone[i].isDone,
    };
    dispatch(doneTask(currentIsDone));
  };
  console.log(allValue);

  // Show done task here==========================
  const handleHideTask = (e) => {
    const checked = e.target.checked;
    const doneTask = allValue.filter(f => f.isDone);
    setData(doneTask)
    setIsHidden(checked);
  };

  
  // Add task here=============================
  const addTask = () => {
    if (title && description) {
      const newTask = {
        id: taskIdCounter,
        title,
        description,
        isDone: false
      };
      dispatch(addItem(newTask));
      setTaskIdCounter((prevCounter) => prevCounter + 1);
      setTitle('');
      setDescription('');
    }
  };

  // Delete Task here==========================
  const deleteItem = (id) => {
    dispatch(deleteTask(id));
  };


//edit item here======================
const editItem = () => {
  if (editId === -1) return;

  editTask(editId, title, description);

  // Additional logic if needed
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
              editItemId={show}
            // editItem={editItem}

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
                checked={isHidden}
                onChange={handleHideTask}
              />
              <span>Show Done Tasks</span>
            </div>
          </div>
          <div className="task-section">
            
       

          <ListRender  data={isHidden ? data:allValue} 
          setShow={setShow}
          show={show}
          setToggle={setToggle}
          setTitle={setTitle}
          setDescription={setDescription}
          setShowButton={setShowButton}
          deleteItem={deleteItem}
          handleChecked={handleChecked}
          handleHideTask={handleHideTask}
          isHidden={isHidden}
          editItem={editItem}
        
          />
            
          </div>
        </div>
      </div>
    </section>
  );
};

const ListRender = ({ data,setShow,show,setToggle,setTitle,setDescription,setShowButton,deleteItem,editItem,setEditId,handleChecked,handleHideTask,isHidden}) => {

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
     

      />

    )))
}

export default TopBar;