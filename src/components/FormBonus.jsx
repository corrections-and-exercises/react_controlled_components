import { useState } from "react";

const FormBonus = ({ setTodos }) => {
  const initialState = {
    title: "",
    deadline: "",
    priority: ""
  };
  const [{ title, deadline, priority }, setFormState] = useState(initialState);

  const updateFormState = (event) => {
    setFormState((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

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
    setFormState(initialState);
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
              onChange={updateFormState}
              name="title"
              type="text"
              placeholder="To Do"
              value={title}
            />
          </div>
          <div>
            <label htmlFor="deadline">Deadline</label>
            <input
              onChange={updateFormState}
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
                onChange={updateFormState}
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
                onChange={updateFormState}
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
                onChange={updateFormState}
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
export default FormBonus;
