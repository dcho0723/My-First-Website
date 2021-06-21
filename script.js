function addingEventListener() {
    const thanks = document.getElementById("thanks");

    thanks.addEventListener('click', function() {
        alert('I Hope You Have A Great Day');
    })
}
addingEventListener();


function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "https://i.ibb.co/7WjLWBD/Screen-Shot-2021-06-21-at-12-38-23-AM.png") 
        {
            document.getElementById("imgClickAndChange").src = "https://i.kym-cdn.com/photos/images/original/000/217/040/48ACD.png";
        }
    else 
        {
            document.getElementById("imgClickAndChange").src = "https://i.ibb.co/7WjLWBD/Screen-Shot-2021-06-21-at-12-38-23-AM.png";
        }
    }
changeImage();


{/* <a href="https://ibb.co/cFkVFR9"><img src="https://i.ibb.co/7WjLWBD/Screen-Shot-2021-06-21-at-12-38-23-AM.png" alt="Screen-Shot-2021-06-21-at-12-38-23-AM" border="0"></a> */}