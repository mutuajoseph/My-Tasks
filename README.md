# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## TASK TO COMPLETE 

- Use a class based component to create a component to show the user profile (firstname, lastname, email, cell number (use the utilit func))

- using props load task data dynamically to the task list page 
 1. How data is supposed to be passed in out application
        props- (properties that are passed to component so as to make the more dynamic)
 2. Which concepts to use in order to pass data as required 
 3. How do we simply bind the data passed to the application


## Agenda 

- Form Management - 
- Submission of data 

- Add in an input that will be used to track the time to complete the tasks upon creating the task. 
(The time should more or less act like an ETA/time due for the task to be completed)

- In the task List Add a section to display the Time to complete for every given task.

## The Lifecycle hooks 

- UseEffect & UseMemo & UseState 
- Data Fetching - CRUD OPERATIONS i.e CREATE, READ, UPDATE, DELETE
- State Management 


## DATA FETCHING 

- lOAD TASKS FOR THAT PARTICULAR DAY ON THE INTERFACE 
       1. We need tp have a source where data is originating from - (json-server)
       2. how do we load the data into the interface 
              - create a func that makes a request to the data source - READ(GET) to the api
              - Use the use Effect Hook to excute the func so that we can have the data in the component on load/render 
              - Pass this data to a component state - useState Hook 
              - Dynamically bind the state data to the JSX 
              - Take a looj at out Ui


## AUTHENTICATION USING STATE MANAGEMENT 

- State Management
   1. Zustand: https://zustand.docs.pmnd.rs/getting-started/introduction
   2. UseContext: https://www.freecodecamp.org/news/react-context-for-beginners/ 
- Routing 
   - https://www.freecodecamp.org/news/how-to-use-react-router-version-6/ 


- Using State Management (useContext or Zustand) add authentication on top of the application in that:

    1. Upon launchng the app the user will be presented with a login or register page.
    2. Upon login or register the user should be redirected to the tasks page.
    3. Upon clicking the user link on the top right redirect the user to a page that shows their profile 
    4. As user I should be able to log out and log back in
