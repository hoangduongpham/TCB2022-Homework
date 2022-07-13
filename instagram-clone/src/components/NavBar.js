import React from "react";

class NavBar extends React.Component {
    render() {
        return (
            <nav class="nav-bar">
                <div class="nav-content">
                    <img
                        src={require("../asset/img/logo.png")}
                        class="text-logo"
                        alt="Instagram text logo"
                    />
                    <div class="search-box">
                        <img
                            src={require("../asset/img/search.png")}
                            class="search-icon"
                            alt="Search icon"
                        />
                        <input
                            type="search"
                            class="search-input"
                            placeholder="Search"
                        />
                    </div>
                    <div class="nav-icons">
                        <img
                            src={require("../asset/img/home.png")}
                            class="nav-icon"
                            alt="Home"
                        />
                        <img
                            src={require("../asset/img/inbox.png")}
                            class="nav-icon"
                            alt="Inbox"
                        />
                        <img
                            src={require("../asset/img/post.png")}
                            class="nav-icon"
                            alt="Post"
                        />
                        <img
                            src={require("../asset/img/explore.png")}
                            class="nav-icon"
                            alt="Explore"
                        />
                        <img
                            src={require("../asset/img/like.png")}
                            class="nav-icon"
                            alt="Activity"
                        />
                        <div class="nav-icon nav-profile"></div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
