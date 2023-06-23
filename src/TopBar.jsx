import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TaskItem from './TaskItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteTask, doneTask, editTask } from './Action/Action';


function TopBar() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(-1);
  const [showButton, setShowButton] = useState(true);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskIdCounter, setTaskIdCounter] = useState(0)
  const [editId, setEditId] = useState(-1)
  const [isHidden, setIsHidden] = useState(false)
  const [selectedTags, setSelectedTags] = useState([]);
  const [data, setData] = useState([])
  const [tag1, setTag1] = useState(false);
  const [tag2, setTag2] = useState(false);
  const [tag3, setTag3] = useState(false);
  const [tag4, setTag4] = useState(false);

  const add1 = () => {
    setTag1(!tag1);
  };
  const add2 = () => {
    setTag2(!tag2);
  };
  const add3 = () => {
    setTag3(!tag3);
  };
  const add4 = () => {
    setTag4(!tag4);
  };



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
        isDone: false,
      };
      const tags = [];

      if (tag1) tags.push('p1');
      if (tag2) tags.push('p2');
      if (tag3) tags.push('p3');
      if (tag4) tags.push('p4');
      setTag1(false);
      setTag2(false);
      setTag3(false);
      setTag4(false);
      dispatch(addItem(newTask, tags));
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

    const editedTask = {
      editId: editId,
      title: title,
      description: description,
      tags: [
        tag1 ? 'p1' : '',
        tag2 ? 'p2' : '',
        tag3 ? 'p3' : '',
        tag4 ? 'p4' : '',
      ].filter((tag) => tag !== ''),
      id: editId,
    };
    const tags = editedTask.tags;
    dispatch(editTask(editedTask, tags));
    setEditId(-1);
    setTitle('');
    setDescription('');
    setTag1(false);
    setTag2(false);
    setTag3(false);
    setTag4(false);
  };


  //Filter task here==================================== 

  const filterData = () => {
    let filteredData = [...allValue];
    if (selectedTags.length > 0) {
      filteredData = filteredData.filter((task) => {
        return selectedTags.every((tag) => task.tags.includes(tag));
      });
    }
    return filteredData;
  };


  const filteredData = filterData();


  const work = () => {
    if (selectedTags.includes('p1')) {
      setSelectedTags(selectedTags.filter((tag) => tag !== 'p1'));
    } else {
      setSelectedTags([...selectedTags, 'p1']);
    }
  };

  const study = () => {
    if (selectedTags.includes('p2')) {
      setSelectedTags(selectedTags.filter((tag) => tag !== 'p2'));
    } else {
      setSelectedTags([...selectedTags, 'p2']);
    }
  };

  const entertainment = () => {
    if (selectedTags.includes('p3')) {
      setSelectedTags(selectedTags.filter((tag) => tag !== 'p3'));
    } else {
      setSelectedTags([...selectedTags, 'p3']);
    }
  };

  const family = () => {
    if (selectedTags.includes('p4')) {
      setSelectedTags(selectedTags.filter((tag) => tag !== 'p4'));
    } else {
      setSelectedTags([...selectedTags, 'p4']);
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
              toggle={toggle}
              setToggle={setToggle}
              showButton={showButton}
              setShowButton={setShowButton}
              editItemId={show}
              editItem={editItem}
              tag1={tag1}
              tag2={tag2}
              tag3={tag3}
              tag4={tag4}
              add1={add1}
              add2={add2}
              add3={add3}
              add4={add4}

            />
          </div>
        </div>
        <div className="content-section">
          <div className="list-section">
            <div className="work" onClick={work}>
              <p></p>
              <a href="#">work</a>
            </div>
            <div className="study" onClick={study}>
              <p></p>
              <a href="#">study</a>
            </div>
            <div className="entertainment" onClick={entertainment}>
              <p></p>
              <a href="#">entertainment</a>
            </div>
            <div className="family" onClick={family} >
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



            <ListRender
              data={isHidden ? data : filteredData}
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
              setEditId={setEditId}
              filterData={filterData}
              tag1={tag1}
              tag2={tag2}
              tag3={tag3}
              tag4={tag4}
              add1={add1}
              add2={add2}
              add3={add3}
              add4={add4}

            />

          </div>
        </div>
      </div>
    </section>
  );
};

const ListRender = ({
  tag1,
  tag2,
  tag3,
  tag4,
  add1,
  add2,
  add3,
  add4,
  data,
  setShow,
  show,
  setToggle,
  setTitle,
  setDescription,
  setShowButton,
  deleteItem,
  editItem,
  setEditId,
  handleChecked,
  handleHideTask,
  isHidden,
  filterData }) => {

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
        filterData={filterData}
        tag1={tag1}
        tag2={tag2}
        tag3={tag3}
        tag4={tag4}
        add1={add1}
        add2={add2}
        add3={add3}
        add4={add4}


      />

    )))
}

export default TopBar;