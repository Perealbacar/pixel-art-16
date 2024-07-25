const canvasCont = document.querySelector(".canvas-container")

function getMatrice(){
    
    for(a = 0; a <= 16; a++){

        canvasCont.appendChild(getLineDiv());
    }

}

function getBoxDiv(){
    const boxDiv = document.createElement("div");

    //boxDiv.textContent = "Hello"
    boxDiv.className = "box";

    return boxDiv;
}

function getLineDiv(){
    const boxLine = document.createElement("div");
    
    boxLine.className = "line";

    for(i = 0; i <= 16; i++){

        boxLine.appendChild(getBoxDiv());
    }
    
    return boxLine;
}

getMatrice();