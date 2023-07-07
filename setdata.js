const reaction_label = document.querySelector("#reaction-label");
const memory_label = document.querySelector("#memory-label");
const verbal_label = document.querySelector("#verbal-label");
const visual_label = document.querySelector("#visual-label");

const reaction_score = document.querySelector("#score-reaction");
const memory_score = document.querySelector("#score-memory");
const verbal_score = document.querySelector("#score-verbal");
const visual_score = document.querySelector("#score-visual");

const reaction_icon = document.querySelector("#icon-reaction");
const memory_icon = document.querySelector("#icon-memory");
const verbal_icon = document.querySelector("#icon-verbal");
const visual_icon = document.querySelector("#icon-visual");


async function getdata() {
    const res = await fetch("./data.json");
    const data = await res.json();
    return data
}

$(document).ready(function() {
    
    getdata().then((res)=>{
        reaction_label.innerHTML = res[0].category
        memory_label.innerHTML = res[1].category
        verbal_label.innerHTML = res[2].category
        visual_label.innerHTML = res[3].category
    
        reaction_score.innerHTML = res[0].score
        memory_score.innerHTML = res[1].score
        verbal_score.innerHTML = res[2].score
        visual_score.innerHTML = res[3].score
    
        reaction_icon.setAttribute("src", `${res[0].icon}`)
        memory_icon.setAttribute("src", `${res[1].icon}`)
        verbal_icon.setAttribute("src", `${res[2].icon}`)
        visual_icon.setAttribute("src", `${res[3].icon}`)
    })
})
