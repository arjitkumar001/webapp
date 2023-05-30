import React from 'react';

function TaskItem({ tag1,tag2,tag3,tag4,task, i, show, setShow, setToggle, setTitle, setDescription, setShowButton, deleteItem, isChecked, setEditId, checkboxHandlers}) {
  return (
    <div className="task-section-1" key={task.id}>
      <div className="task-1">
        <div className="task-top1">
          <h3>{task.title}</h3>
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
          <p>{task.description}</p>
        </div>
        <div className="task-bootom-1">
          <div className="bottom-left-1" key={task.id} >
           {tag1 && <p className='p1'></p>}
           {tag2 && <p className='p2'></p>}
           {tag3 && <p className='p3'></p>}
           {tag4 && <p className='p4'></p>}
          </div>
          <div className="check">
            <input
              type="checkbox"
              name=""
              id=""
              checked={isChecked}
              // onChange={handleChecked}
              onChange={checkboxHandlers.handleChecked}
            />
            <span>Done</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;