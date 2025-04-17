import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
import { fetchTasks, addTask, deleteTask, editTask } from "./api";


function App() {
  const [myTasks, setMyTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editStatus, setEditStatus] = useState("pending");

  // create a function that will load tasks from the api
  useEffect(() => {
    fetchTasks().then((res) => {
      if (res.length > 0) {
        setMyTasks(res);
      }
    });
  }, []);

  const openEditModal = (task) => {
    setCurrentTask(task)
    setIsEditModalOpen(true);
    setEditTitle(task.title);
    setEditTime(task.time);
    setEditStatus(task.status);
  }

  const openDeleteModal = (task) => {
    setCurrentTask(task)
    setIsDeleteModalOpen(true);
  }

  const handleTaskSubmission = () => {
    let taskPayload = {
      id: myTasks.length + 1,
      time: taskTime,
      title: newTask,
      status: "pending",
    };

    addTask(taskPayload).then((res) => {
      console.log("Task being added", res);
      if (res) {
        setMyTasks((prevTasks) => [...prevTasks, res]);
        setNewTask("");
        setTaskTime("");
      }
    });
  };

  const handleTaskEdit = (task) => {
    
    if (task.id) {
      editTask(task).then((res) => {
        console.log("Task Edit res", res)
      })
    }
  };

  const handleTaskDelete = (task) => {
    // Implement delete task functionality
    if (task.id) {
      deleteTask(task.id).then((res) => {
        console.log("Task being deleted", res)
      }).catch((err) => {
        console.log("Error deleting task", err)
      })
    }
  };

  const confirmDeleteTask = () => {
    handleTaskDelete(currentTask);
    setIsDeleteModalOpen(false);
    setCurrentTask(null);
  }

  const handleSaveEdit = () => {
    
  }

  return (
    <>
      <Navbar />
      <TaskInput
        submitTask={handleTaskSubmission}
        setNewTask={setNewTask}
        setTaskTime={setTaskTime}
      />
      <TaskList
        tasks={myTasks}
        headingText={"My Tasks For Today"}
        handleTaskEdit={openEditModal}
        handleTaskDelete={openDeleteModal}
      />
      <Footer />

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen} 
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirm Delete"
      >
        <p>Are you sure you want to delete the task "{currentTask?.title}"?</p>
        <div className="modal-actions">
          <button className="cancel-button" onClick={() => setIsDeleteModalOpen(false)}>Cancel</button>
          <button className="confirm-button" onClick={confirmDeleteTask}>Delete</button>
        </div>
      </Modal>

      {/* Edit Task Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Task"
      >
        <div className="form-group">
          <label htmlFor="editTitle">Task Title</label>
          <input
            type="text"
            id="editTitle"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="editTime">Time</label>
          <input
            type="text"
            id="editTime"
            value={editTime}
            onChange={(e) => setEditTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="editStatus">Status</label>
          <select
            id="editStatus"
            value={editStatus}
            onChange={(e) => setEditStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="modal-actions">
          <button className="cancel-button" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
          <button className="save-button" onClick={handleSaveEdit}>Save Changes</button>
        </div>
      </Modal>
    </>
  );
}

export default App;
