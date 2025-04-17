const BASE_URL = "http://localhost:3000";

export const fetchTasks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const tasks = await response.json();
    console.log("Tasks being fetched", tasks);
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return error;
  }
};

export const addTask = async (task) => {
    try {
        const response = await fetch(`${BASE_URL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const newTask = await response.json();
        return newTask;
        
    } catch (error) {
        console.error("Error adding task:", error);
        return error;
    }   
}

export const editTask = async (task) => {
    try {
        const response = await fetch(`${BASE_URL}/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const updatedTask = await response.json();
        return updatedTask;
        
    } catch (error) {
        console.error("Error editing task:", error);
        return error;
    }
}


export const deleteTask = async (task) => {
    try {
        const response = await fetch(`${BASE_URL}/tasks/${task.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const deletedTask = await response.json();
        return deletedTask;
        
    } catch (error) {
        console.error("Error deleting task:", error);
        return error;
    }
}
