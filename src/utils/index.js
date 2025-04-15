export const formarPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return '';
    const phone = phoneNumber.replace(/\D/g, '');
    if (phone.length === 10) {
        return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
    }
    return phone;
}

export const formatBirthDate = (date) => {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}

export const fetchTasks = () => {
    if (window.localStorage.getItem('tasks')) {
        const tasks = JSON.parse(window.localStorage.getItem('tasks'));
        console.log("Tasks being fetched", tasks)
        return tasks ? tasks : [];
    } else {
        console.log("No tasks found in local storage");
        window.localStorage.setItem('tasks', JSON.stringify([]));
    }
}