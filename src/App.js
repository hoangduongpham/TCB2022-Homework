import React from "react";
import NavBar from "./components/NavBar";
import Stories from "./components/Stories";
import Post from "./components/Post";
import Profile from "./components/Profile";
import Suggestions from "./components/Suggestions";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <section class="main-page">
                    <div class="main-grid">
                        <div class="left-col">
                            <Stories />
                            <Post />
                        </div>
                        <div class="right-col">
                            <Profile />
                            <Suggestions />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default App;
