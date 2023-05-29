import React from 'react';

function TodoForm({addTask,  setTitle, setDescription, title, description, toggle, setToggle, showButton, editItem,setShow,}) {

  return (
    <div className="plusIcon">
      <h1 onClick={() => {
        setToggle(!toggle);
      }}>+</h1>
      {toggle && (
        <div className="form">
          <form onSubmit={e => e.preventDefault()}>
            <div className="btn-sec">
              <div>
                <button className="btn-cancle" onClick={() => {setToggle(false);}}>
                  Cancel
                </button>
              </div>
              <div>
                {showButton ? (
                  <button
                    className="btn-add"
                    onClick={() => {
                      setToggle(false);
                      addTask();
                    }}
                  >
                    Add
                  </button>
                ) : (
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={() => {
                      editItem();
                      setToggle();
                    }}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
            <hr />
            <div className="input-sec">
              <label>Title:</label>
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="add title........"
                onChange={e => setTitle(e.target.value)}
                value={title}
              />
              <label>Description:</label>
              <br />
              <textarea
                name="discription"
                id=""
                cols="30"
                rows="3"
                placeholder="discription......."
                onChange={e => setDescription(e.target.value)}
                value={description}
              ></textarea>
            </div>
            <div className="tags">
              <h2>Tags</h2>
              <div className="tags-items">
                <div className="work">
                  <p></p>
                  <a href="#">work</a>
                </div>
                <div className="study">
                  <p></p>
                  <a href="#">study</a>
                </div>
                <div className="entertainment">
                  <p></p>
                  <a href="#">entertainment</a>
                </div>
                <div className="family">
                  <p></p>
                  <a href="#">family</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default TodoForm;