
document.addEventListener("DOMContentLoaded", function () {

    var arrNumber = Array.from(document.querySelectorAll("ul li"))
    var content = document.querySelector("body")


    for (var i = 0; i < arrNumber.length; i++) {
        arrNumber[i].addEventListener("click", function () {

            var addLink = this.firstChild.getAttribute("src")
            createFullScreenDiv(addLink)

        })

        function createFullScreenDiv(addLink) {
            var galleryDiv = document.createElement("div");
            galleryDiv.classList.add("fullScreen")

            galleryDiv.innerHTML = '<img src=./' + addLink + '>' +
                '<button class="close">CLOSE</button>';

            content.appendChild(galleryDiv)

            var close = document.querySelector(".close")

            close.addEventListener("click", function () {
                content.removeChild(content.lastElementChild)
            })


        }

    }


})
