import { renderReplies } from "./renderreplies.js";
import { cloneData } from "./data.js";



export function renderComments() {
    let element = document.getElementById("whole-container");
    element.innerHTML = "";
    let html = ``;
    for (let posts of cloneData.default.comments) {
        html += `<div class="wrapper" id="${posts.id}">
        <div class="flex-container">
        <div class="likes">
            <button class="plus">+</button>
            <span class="post-scores">${posts.score}</span>
            <button class="minus">-</button>
        </div>
        <div class="user-info">
        <div class="avatar">
            <img class="avatars"  src=${posts.user.image.png} />
        </div>
        <div class="username">
            <span>${posts.user.username} </span>
        
        </div>
        <div class="date">
            <span>${posts.createdAt}</span>        
        
        </div>
                    <div class="replybtn">
                <img class="replyicon" src="./images/icon-reply.svg" />
                <button class="btn">reply</button>           
            
            </div>
           
        <div class="content">
            <span>${posts.content}</span>
        </div>
        </div>
    </div>

    </div> 
    ${renderReplies(posts.replies)} `
    }

    element.insertAdjacentHTML("beforeend", html);

}

renderComments();





