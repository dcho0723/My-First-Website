function addingEventListener() {
    const thanks = document.getElementById("thanks");

    thanks.addEventListener('click', function() {
        alert('I Hope You Have A Great Day');
    })
}
addingEventListener();


function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "https://www.memesmonkey.com/images/memesmonkey/1d/1d3f97f6e5ca061b97074bb68063a76e.jpeg") 
        {
            document.getElementById("imgClickAndChange").src = "https://i.kym-cdn.com/photos/images/original/000/217/040/48ACD.png";
        }
    else 
        {
            document.getElementById("imgClickAndChange").src = "https://www.memesmonkey.com/images/memesmonkey/1d/1d3f97f6e5ca061b97074bb68063a76e.jpeg";
        }
    }
changeImage();