import * as data from "../data.json" assert {type: "json"};


export let cloneData = "";

if (localStorage.getItem("cloneData")) {
    cloneData = JSON.parse(localStorage.getItem("cloneData"));

} else {
    let datajson = JSON.stringify(data);
    localStorage.setItem("cloneData", datajson);
    cloneData = JSON.parse(localStorage.getItem("cloneData"));


}


export function updatedata(json) {
    localStorage.setItem("cloneData", JSON.stringify(json));
}