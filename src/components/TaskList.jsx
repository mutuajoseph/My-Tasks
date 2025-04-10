import React from "react";

export const TaskList = () => {
  return (
    <div className="task--list">
      <h2>Task List</h2>
      <ul style={{border: '1px solid black', padding: '10px', borderRadius: '5px'}}>
        <li style={{ display: "flex", justifyContent:'center', alignItems: "center", gap: "10px" }}>
          <p>Task One</p>

          <div style={{ display: "flex",  justifyContent:'center', alignItems: "center", gap: "10px" }}>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
        <li style={{ display: "flex",  justifyContent:'center', alignItems: "center", gap: "10px" }}>
          <p>Task One</p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
        <li style={{ display: "flex",  justifyContent:'center', alignItems: "center", gap: "10px" }}>
          <p>Task One</p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
