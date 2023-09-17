var rows = 3;
var columns = 3;

var currTile;
var otherTile; //Blank tile

var turns = 0;

var imgOrder = ["/Games/DoraemonPuzzle/Doro_Puzzle_Images/4","/Games/DoraemonPuzzle/Doro_Puzzle_Images/2",
"/Games/DoraemonPuzzle/Doro_Puzzle_Images/8","/Games/DoraemonPuzzle/Doro_Puzzle_Images/5",
"/Games/DoraemonPuzzle/Doro_Puzzle_Images/1","/Games/DoraemonPuzzle/Doro_Puzzle_Images/6",
"/Games/DoraemonPuzzle/Doro_Puzzle_Images/7","/Games/DoraemonPuzzle/Doro_Puzzle_Images/9",
"/Games/DoraemonPuzzle/Doro_Puzzle_Images/3",];


window.onload = function() {
    for(let r=0; r<rows; r++) {
        for(let c=0; c< columns; c++){

            //<img id = "0-1", src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            //Drag Functionality
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
}

function dragEnd() {

    let currCoords = currTile.split("-")

    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;

}