/*Name this external file gallery.js*/

function upDate(previewPic){

    console.log("Event triggered!");
    document.getElementById("image").style.backgroundImage = "url('" +previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
    
console.log("Background image and text are set to the image that is being hovered over");
}
   
       function unDo(){

        document.getElementById("image").style.backgroundImage = "url('')";
        document.getElementById("image").innerHTML= "Hover over an image below to deisplay here.";

        console.log("Background image and text are now reset to the original");
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
           
       }