document.addEventListener('DOMContentLoaded', function () {

    var text = document.getElementById('text');
    var splitText = text.innerText.split('');

    text.innerHTML = '';
    i = 0
    setInterval(function () {
        AjoutDeLettre()
    }
        , 100)

    function AjoutDeLettre() {
        if (i < splitText.length) {
            text.innerHTML += splitText[i];
            i++;
        }
    }

    var gifts = [
        {
            name: "Livre Audio : Murtagh",
            image: "./ressources/audiobook.jpg",
            price: "27€",
            url: "https://books.apple.com/fr/audiobook/murtagh/id1707560614"
        },
        {
            name: "Abonnement Midjourney",
            image: "./ressources/midjourney.jpg",
            price: "28€",
            url: "https://docs.midjourney.com/docs/plans"
        },
        {
            name: "Cours Udemy 1 (SASS)",
            image: "./ressources/cours_sass.jpg",
            price: "20€",
            url: "https://www.udemy.com/course/sass-et-scss-le-css-du-futur/"
        },
        {
            name: "Cours Udemy 2 (GOLANG)",
            image: "./ressources/cours_go.jpg",
            price: "20€",
            url: "https://www.udemy.com/course/go-programming-golang-the-complete-developers-guide/"
        },
        {
            name: "Cours Udemy 3 (TYPESCRIPT)",
            image: "./ressources/cours_typescript.jpg",
            price: "30€",
            url: "https://www.udemy.com/course/typescript-the-complete-developers-guide/"
        },
        {
            name: "Lampe Spacebuddy Pleshy",
            image: "./ressources/space_buddy.jpg",
            price: "56€",
            url: "https://pleshy.fr/products/spacebuddy-3"
        }
    ];

    var giftList = document.getElementById('gift-list');

    gifts.forEach(function (gift) {
        var giftElement = document.createElement('div');
        giftElement.classList.add('gift');

        var giftLink = document.createElement('a');
        giftLink.href = gift.url;
        giftLink.target = "_blank";

        var giftImage = document.createElement('img');
        giftImage.src = gift.image;
        giftImage.alt = gift.name;
        giftLink.appendChild(giftImage);

        giftElement.appendChild(giftLink);

        var giftName = document.createElement('div');
        giftName.textContent = gift.name;
        giftElement.appendChild(giftName);

        var giftPrice = document.createElement('div');
        giftPrice.textContent = gift.price;
        giftElement.appendChild(giftPrice);

        giftElement.addEventListener('click', function () {
            selectGift(gift);
        });

        giftList.appendChild(giftElement);

        if (gifts.indexOf(gift) < gifts.length - 1) {
            var orDiv = document.createElement('div');
            orDiv.classList.add('or-text');
            orDiv.textContent = 'OU';
            giftList.appendChild(orDiv);
        }

    });

    function selectGift(selectedGift) {
        var confirmation = confirm("T'es sûre de vouloir choisir : " + selectedGift.name + " ? Mais genre vraiment sûre de chez sûre ??");
        if (confirmation) {
            gifts.forEach(function (gift, i) {
                if (gift !== selectedGift) {
                    var giftElements = document.getElementsByClassName('gift');
                    giftElements[i].style.display = 'none';
                }
                var orTexts = document.getElementsByClassName('or-text');
                while (orTexts[0]) {
                    orTexts[0].parentNode.removeChild(orTexts[0]);
                }

            });
            alert("OK merci :) (t'as choisi : " + selectedGift.name + ")");
        }
    }
});
