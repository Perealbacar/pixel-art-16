const canvasCont = document.querySelector(".canvas-container")

function getMatrice(){
    
    for(a = 0; a <= 16; a++){

        canvasCont.appendChild(getLineDiv());
    }


}

function getBoxDiv(){
    const boxDiv = document.createElement("div");

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

let paintLogic = false;

let color = colorSelection();

function colorSelection(){

    return "black";
}

canvasCont.addEventListener("mousedown", function(e){

    
    e.preventDefault();
    
    e.target.style.backgroundColor = color;
    paintLogic = true;
    

});

canvasCont.addEventListener("mouseover", function (e){

    
    
    if(paintLogic == true){
        e.target.style.backgroundColor = color;
    }
    
})

canvasCont.addEventListener("mouseup", function(e){

    
    paintLogic = false;
    
});



getMatrice();