import React from "react";

class Stories extends React.Component {
    render() {
        return (
            <div class="stories">
                <div class="stories-item">
                    <img
                        src={require("../asset/img/profile1.jpg")}
                        class="stories-profile"
                        alt="Story"
                    />
                    <p class="stories-username">_xxhwya.2829_</p>
                </div>
                <div class="stories-item">
                    <img
                        src={require("../asset/img/profile2.png")}
                        class="stories-profile"
                        alt="Story"
                    />
                    <p class="stories-username">techainer</p>
                </div>
                <div class="stories-item">
                    <img
                        src={require("../asset/img/profile3.jpg")}
                        class="stories-profile"
                        alt="Story"
                    />
                    <p class="stories-username">loonatheworld</p>
                </div>
                <div class="stories-item">
                    <img
                        src={require("../asset/img/profile4.jpg")}
                        class="stories-profile"
                        alt="Story"
                    />
                    <p class="stories-username">instagram</p>
                </div>
                <div class="stories-item">
                    <img
                        src={require("../asset/img/profile5.jpg")}
                        class="stories-profile"
                        alt="Story"
                    />
                    <p class="stories-username">tuyendung.yody.vn</p>
                </div>
                <div class="stories-item">
                    <img
                        src={require("../asset/img/profile6.jpg")}
                        class="stories-profile"
                        alt="Story"
                    />
                    <p class="stories-username">mimmedia.hus</p>
                </div>
                <div class="stories-item">
                    <img
                        src={require("../asset/img/profile7.jpg")}
                        class="stories-profile"
                        alt="Story"
                    />
                    <p class="stories-username">freecodecamp</p>
                </div>
                <div class="stories-item">
                    <img
                        src={require("../asset/img/profile8.jpg")}
                        class="stories-profile"
                        alt="Story"
                    />
                    <p class="stories-username">thestackoverflow</p>
                </div>
            </div>
        );
    }
}

export default Stories;
