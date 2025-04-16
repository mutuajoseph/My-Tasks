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
