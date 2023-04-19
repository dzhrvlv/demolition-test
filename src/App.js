import './App.scss';
import Header from "./components/UI/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import ClientForm from "./components/ClientForm";

function App() {

    return (
        <div className="app">
            <Header/>
            <main className='app__main'>
                <About/>
                <Projects/>
                <ClientForm/>
            </main>
        </div>
    );
}

export default App;
