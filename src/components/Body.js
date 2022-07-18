import React from "react";

class Body extends React.Component {
    render() {
        return (
            <>
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
                <div class="post">
                    <div class="post-info">
                        <div class="post-user">
                            <div class="post-profile">
                                <img
                                    src={require("../asset/img/profile2.png")}
                                    alt="Profile pic"
                                />
                            </div>
                            <p class="post-username">techainer</p>
                        </div>
                        <img
                            src={require("../asset/img/options.png")}
                            class="post-options"
                            alt="Options"
                        />
                    </div>
                    <img
                        src={require("../asset/img/post1.jpg")}
                        class="post-image"
                        alt="Post"
                    />
                    <div class="post-content">
                        <div class="post-actions">
                            <img
                                src={require("../asset/img/like.png")}
                                class="post-icon"
                                alt="Like"
                            />
                            <img
                                src={require("../asset/img/comment.png")}
                                class="post-icon"
                                alt="Comment"
                            />
                            <img
                                src={require("../asset/img/share.png")}
                                class="post-icon"
                                alt="Share"
                            />
                            <img
                                src={require("../asset/img/save.png")}
                                class="post-icon save"
                                alt="Save"
                            />
                        </div>
                        <p class="post-likes">2019 likes</p>
                        <p class="post-desciption">
                            <span>techainer</span>
                            Hãy tham gia TECHAINER CODING BOOTCAMP 2022 để không
                            thành Simpson nha các bạn 🤣 <br />
                            nguồn ảnh: chôm <br />
                            🔥🔥 Mở link này để đăng ký:
                            https://forms.gle/znvxRt2bEKNEAn5u9
                        </p>
                        <p class="post-time">2 hours ago</p>
                    </div>
                    <div class="comment">
                        <img
                            src={require("../asset/img/emoji.png")}
                            class="emoji"
                            alt="Emojis"
                        />
                        <input
                            type="text"
                            class="comment-input"
                            placeholder="Add a comment..."
                        />
                        <button class="comment-button">Post</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Body;
