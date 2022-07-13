import React from "react";

class Post extends React.Component {
    render() {
        return (
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
        );
    }
}

export default Post;
