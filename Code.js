//setup event handler for the onload event
//when the page loads, call the initLinks function
window.onload = initLinks;
//track the current image shown in the slideshow
var imgNum =0;
//Array holding the image names
//can have any number of images
//Put image names in "" and using a comma to seperate
var arrPictures = new Array("Golf1.jpg", "Golf2.jpg", "Golf3.jpg", "Golf4.jpg")
//This fires when the page loads
//adds event handlers for when the links are clinked.
function initLinks(){
    //Previous Link
    document.getElementById("linkPrevious").onclick = processPrevious;
    //Next Link
    document.getElementById("linkNext").onclick = processNext;
}
//This function is called when the previous link is cliked.
function processPrevious(){
    //If the image number is 0 go to the end of the image list
    if (imgNum == 0){
        imgNum = arrPictures.length;
    }
    //Subtract 1 from the current imgNum
    //This will cause us to go back to the previous image
    imgNum--;
    //This code will change the image being displayed in the img on the html page
    document.getElementById("imgSlideshow").src = arrPictures[imgNum];
    //For good measure to make sure the page stops
    return false;

}
//This function is called when the next link is cliked.
function processNext(){
    //Add one to the current imgNum
    imgNum++;
    //If we are at the end of the slideshow reset the img num
    //so we start at the beginning. 
    if (imgNum == arrPictures.length){
        imgNum = 0;
    }
    
    //This code will change the image being displayed in the img on the html page
    document.getElementById("imgSlideshow").src = arrPictures[imgNum];
    return false;
}