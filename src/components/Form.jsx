import { useState } from "react";

const Form = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !deadline || !priority) {
      alert("Please fill all fields");
      return;
    }
    setTodos((prev) => [
      ...prev,
      { title, deadline, priority, done: false, id: crypto.randomUUID() }
    ]);
    setTitle("");
    setDeadline("");
    setPriority("");
  };

  return (
    <div className="block">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <h3>Add a To-do</h3>
          </legend>
          <div>
            <label htmlFor="title">To Do</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              type="text"
              placeholder="To Do"
              value={title}
            />
          </div>
          <div>
            <label htmlFor="deadline">Deadline</label>
            <input
              onChange={(e) => setDeadline(e.target.value)}
              name="deadline"
              type="date"
              value={deadline}
            />
          </div>
          <div>
            <label>Priority?</label>
            <div>
              <label htmlFor="low">low</label>
              <input
                onChange={(e) => setPriority(e.target.value)}
                id="low"
                name="priority"
                type="radio"
                value="low"
                checked={priority === "low"}
              />
            </div>
            <div>
              <label htmlFor="medium">medium</label>
              <input
                onChange={(e) => setPriority(e.target.value)}
                id="medium"
                name="priority"
                type="radio"
                value="medium"
                checked={priority === "medium"}
              />
            </div>
            <div>
              <label htmlFor="hard">high</label>
              <input
                onChange={(e) => setPriority(e.target.value)}
                id="hard"
                name="priority"
                type="radio"
                value="high"
                checked={priority === "high"}
              />
            </div>
          </div>
          <button>Add</button>
        </fieldset>
      </form>
    </div>
  );
};
export default Form;
