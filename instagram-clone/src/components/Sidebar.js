import React from "react";

class Sidebar extends React.Component {
    render() {
        return (
            <>
                <div class="profile">
                    <div class="profile-picture">
                        <img
                            src={require("../asset/img/profile1.jpg")}
                            alt="Profile pic"
                        />
                    </div>
                    <div class="profile-user">
                        <p class="profile-username">_xxhwya.2829_</p>
                        <p class="profile-name">Phạm Hoàng Dương</p>
                    </div>
                    <button class="profile-button">Switch</button>
                </div>
                <div class="suggestions-header">
                    <p class="suggestions-text">Suggestions For You</p>
                    <button class="suggestions-button">See All</button>
                </div>
                <div class="suggestions">
                    <div class="profile-picture">
                        <img
                            src={require("../asset/img/profile2.png")}
                            alt="Profile pic"
                        />
                    </div>
                    <div class="profile-user">
                        <p class="profile-username">techainer</p>
                        <p class="sugesst-message">Suggested for you</p>
                    </div>
                    <button class="profile-button">Follow</button>
                </div>
                <div class="suggestions">
                    <div class="profile-picture">
                        <img
                            src={require("../asset/img/profile2.png")}
                            alt="Profile pic"
                        />
                    </div>
                    <div class="profile-user">
                        <p class="profile-username">techainer</p>
                        <p class="sugesst-message">Suggested for you</p>
                    </div>
                    <button class="profile-button">Follow</button>
                </div>
                <div class="suggestions">
                    <div class="profile-picture">
                        <img
                            src={require("../asset/img/profile2.png")}
                            alt="Profile pic"
                        />
                    </div>
                    <div class="profile-user">
                        <p class="profile-username">techainer</p>
                        <p class="sugesst-message">Suggested for you</p>
                    </div>
                    <button class="profile-button">Follow</button>
                </div>
                <div class="suggestions">
                    <div class="profile-picture">
                        <img
                            src={require("../asset/img/profile2.png")}
                            alt="Profile pic"
                        />
                    </div>
                    <div class="profile-user">
                        <p class="profile-username">techainer</p>
                        <p class="sugesst-message">
                            You like this Page on Facebook
                        </p>
                    </div>
                    <button class="profile-button">Follow</button>
                </div>
                <div class="suggestions">
                    <div class="profile-picture">
                        <img
                            src={require("../asset/img/profile2.png")}
                            alt="Profile pic"
                        />
                    </div>
                    <div class="profile-user">
                        <p class="profile-username">techainer</p>
                        <p class="sugesst-message">
                            You like this Page on Facebook
                        </p>
                    </div>
                    <button class="profile-button">Follow</button>
                </div>
            </>
        );
    }
}

export default Sidebar;
