export function renderReplies(replies) {
    let html = ``;

    for (let info of replies) {
        html += `<div class="wrapper reply-wrapper" id="${info.id}">
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
    }
    return html;
}