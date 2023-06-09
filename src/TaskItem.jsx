import React from 'react';

function TaskItem({ tag1, tag2, tag3, tag4, isDone, task, i, show, setShow, setToggle, setTitle, setDescription, setShowButton, deleteItem, setEditId, handleChecked }) {

  return (
    <div className='task-section-1' key={task.id}>
      <div className="task-1" >
        <div className="task-top1">
          <div className='title-text'>
            {
              !task.isDone ? (
                <h3>{task.title}</h3>
              ) :
                <h3 className='done'>{task.title}</h3>
            }
          </div>
          <h3 className="hover-effect" onClick={() => setShow(i)}>
            ...
          </h3>
          {show === i && (
            <div className="hover">
              <div className="edit">
                <p
                  onClick={() => {
                    setToggle(true);
                    setShow(-1);
                    setEditId(i)
                    setTitle(task.title);
                    setDescription(task.description);
                    setShowButton(false);
                  }}
                >
                  Edit...
                </p>
              </div>
              <hr />
              <div className="delete">
                <p onClick={() => {
                  deleteItem(task.id);
                  setShow(-1)
                }}>
                  Delete...
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="task-txt-1">
          {
            !task.isDone ? (
              <p>{task.description}</p>
            ) :
              <p className='done'>{task.description}</p>
          }

        </div>
        <div className="task-bootom-1">
        
          <div className="bottom-left-1" key={task.id}>
          {task.tags.map((tag, index) => (
            <p key={index} className={tag}></p>
          ))}
          </div>

          <div className="check">
            <input
              type="checkbox"
              name=""
              id=""
              checked={isDone}
              onChange={() => handleChecked(i)}
            />
            <span>Done</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TaskItem;