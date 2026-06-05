import type { Task } from "@prisma/client";

type TaskFormProps = {
  task?: Task;
  action: (formData: FormData) => Promise<void>;
};

export function TaskForm({ task, action }: TaskFormProps) {
  return (
    <form className="form" action={action}>
      <div className="field">
        <label htmlFor="title">Task Title</label>
        <input 
          id="title" 
          name="title" 
          placeholder="What do you need to accomplish?"
          defaultValue={task?.title} 
          required 
        />
      </div>
      <div className="field">
        <label htmlFor="priority">Priority Level</label>
        <select id="priority" name="priority" defaultValue={task?.priority ?? "medium"}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="status">Status</label>
        <select id="status" name="status" defaultValue={task?.status ?? "pending"}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="dueDate">Due Date</label>
        <input 
          id="dueDate" 
          name="dueDate" 
          type="date" 
          defaultValue={task?.dueDate?.toISOString().slice(0, 10)} 
        />
      </div>
      <div className="row" style={{ justifyContent: "flex-start", marginTop: "8px" }}>
        <button className="button primary" type="submit">
          {task ? "💾 Update Task" : "✨ Create Task"}
        </button>
      </div>
    </form>
  );
}
