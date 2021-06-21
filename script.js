function addingEventListener() {
    const thanks = document.getElementById("thanks");

    thanks.addEventListener('click', function() {
        alert('I Hope You Have A Great Day');
    })
}
addingEventListener();


function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "https://static.wikia.nocookie.net/spongebob/images/c/c7/1f9.png/revision/latest?cb=20181110203331") 
        {
            document.getElementById("imgClickAndChange").src = "https://i.kym-cdn.com/photos/images/original/000/217/040/48ACD.png";
        }
    else 
        {
            document.getElementById("imgClickAndChange").src = "https://static.wikia.nocookie.net/spongebob/images/c/c7/1f9.png/revision/latest?cb=20181110203331";
        }
    }
changeImage();