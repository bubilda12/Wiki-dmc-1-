const img = document.querySelectorAll(".loca__img");
const sound  = document.getElementById("uh.mp3");
for (let i = 0; i< img.length; i++)
{
    img[i].addEventListener("mouseenter", function() {
        sound.currentTime = 0;
        sound.play()
    });
}