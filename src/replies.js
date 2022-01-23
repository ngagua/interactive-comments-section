import { updatedata, cloneData } from "./data.js";

const replybtn = document.getElementsByClassName("btn");
const replybtn2 = document.getElementsByClassName("replybtn1");


Array.from(replybtn).forEach(function (element) {
    element.addEventListener('click', function (event) {
        let id = event.target.parentElement.parentElement.parentElement.parentElement;
        let postId = id.id
        let replyBox = document.createElement("div");
        const text = replyBox.innerText = replies(cloneData, postId);
        id.insertAdjacentHTML("beforeend", text);
        const confirm = document.getElementsByClassName("confirmbtn");
        Array.from(confirm).forEach(function (element) {
            element.addEventListener('click', function (event) {
                let content = event.target.parentElement.childNodes[1].value;
                let replyId = event.target.parentElement.childNodes[3].value;

                let replyReturn = addReply(replyId, content, cloneData);
                updatedata(replyReturn.data);

                event.target.parentElement.parentElement.parentElement.parentElement.remove();

                id.insertAdjacentHTML("beforeend", replyReturn.newHtml);
                replyBox.innerText = "";
            });
        });

    });
});



function addReply(postid, text, data) {
    let replypost = {
        "id": getMaxId(data) + 1,
        "content": text,
        "createdAt": "1 week ago",
        "score": 0,
        "replyingTo": "maxblagun",
        "user": data.default.currentUser,
    };

    let newCommentHtml = rendenewreplies(replypost);

    for (let i = 0; i < data.default.comments.length; i++) {
        if (data.default.comments[i].id == postid) {
            data.default.comments[i].replies.push(replypost);
            return {
                "data": data,
                "newHtml": newCommentHtml
            };
        }
    }
}





export function replies(replies, postid) {
    let html = `<div class="wrapper myryplies">
        <div class="flex-container">
                    <div class="user-info1">
                        <div class="avatar1">
                            <img class="avatars" src=${cloneData.default.currentUser.image.png} />
                            </div>
                <div class="username1">
                    <span>${cloneData.default.currentUser.username}</span>

                </div>
                <div class="date1">
                    <span>1 week ago</span>
                </div>
                <div class="rpl-block">
                    <textarea class="rpl-text"></textarea>
                    <input type="hidden" value="${postid}" />             
                    <button class="confirmbtn">reply</button>       
            </div>
                
            </div>
        </div>
    </div>`
    return html;
}


export function getMaxId(data) {
    let maxId = 0;
    for (let i = 0; i < data.default.comments.length; i++) {

        if (data.default.comments[i].id > maxId) {
            maxId = data.default.comments[i].id;
        }

        let currentComment = data.default.comments[i];
        let replies = currentComment.replies;
        for (let k = 0; k < replies.length; k++) {
            if (currentComment.replies[k].id > maxId) {
                maxId = currentComment.replies[k].id;
            }
        }

    }
    return maxId;
}


function rendenewreplies(info) {

    let html = `<div class="wrapper reply-wrapper" id="${info.id}">
    <div class="flex-container">
    <div class="likes">
        <button class="plus reply-plus">+</button>
        <span>${info.score}</span>
        <button class="minus reply-minus">-</button>
    </div>
    <div class="user-info1">
    <div class="avatar1">
        <img class="avatars"  src=${info.user.image.png} />
    </div>
    <div class="username1">
        <span>${info.user.username} </span>

    </div>
    <div class="date1">
        <span>${info.createdAt}</span>        

    </div>

    <div class="content1">
        <span>${info.content}</span>
    </div>
    </div>
</div>

</div> `

    return html;

}