import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import "./App.css";

// Hello World
class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <section class="main-page">
                    <div class="main-grid">
                        <div class="left-col">
                            <Body />
                        </div>
                        <div class="right-col">
                            <Sidebar />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default App;
