import { updatedata, cloneData } from "./data.js";


const plusscore = document.getElementsByClassName("plus");
const minusscore = document.getElementsByClassName("minus");



Array.from(plusscore).forEach(function (element) {
    element.addEventListener('click', function (event) {
        let id = event.target.parentElement.parentElement.parentElement.id;
        event.target.parentElement.childNodes[3].innerText++;

        let changedData;
        if (event.target.classList.contains('reply-plus')) {
            changedData = increaseScoreReply(cloneData, +id);
        } else {
            changedData = increasescore(cloneData, +id);
        }

        updatedata(changedData);
    });
});
Array.from(minusscore).forEach(function (element) {
    element.addEventListener('click', function (event) {
        let id = event.target.parentElement.parentElement.parentElement.id;
        event.target.parentElement.childNodes[3].innerText--;

        let changedData;
        if (event.target.classList.contains('reply-minus')) {
            changedData = decreaeScoreReply(cloneData, +id);
        } else {
            changedData = decreasescore(cloneData, +id);
        }

        updatedata(changedData);
    });
});




function increasescore(data, commentid) {
    for (let i = 0; i < data.default.comments.length; i++) {
        if (data.default.comments[i].id === commentid) {
            data.default.comments[i].score++;
            return data;
        }
    }
}

function decreasescore(data, commentid) {
    for (let i = 0; i < data.default.comments.length; i++) {
        if (data.default.comments[i].id === commentid) {
            data.default.comments[i].score--;
            return data;
        }
    }
}


function increaseScoreReply(data, commentid) {
    for (let i = 0; i < data.default.comments.length; i++) {
        let currentComment = data.default.comments[i];
        let replies = currentComment.replies;
        for (let k = 0; k < replies.length; k++) {

            if (currentComment.replies[k].id === commentid) {
                currentComment.replies[k].score++;

                return data;
            }
        }
    }
}



function decreaeScoreReply(data, commentid) {
    for (let i = 0; i < data.default.comments.length; i++) {
        let currentComment = data.default.comments[i];
        let replies = currentComment.replies;
        for (let k = 0; k < replies.length; k++) {

            if (currentComment.replies[k].id === commentid) {
                currentComment.replies[k].score--;

                return data;
            }
        }
    }
}
