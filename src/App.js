import Todo from "./components/todo/todo";



function App() {
      return <div className='container h-100'>
            <h1>لیست کارهای من </h1>
            <Todo text="کار اول"/>
            <Todo text="کار دوم"/>
            <Todo text="کار سوم"/>
      </div>;
}

export default App;
