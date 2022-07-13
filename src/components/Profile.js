import React from "react";

class Profile extends React.Component {
    render() {
        return (
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
        );
    }
}

export default Profile;
