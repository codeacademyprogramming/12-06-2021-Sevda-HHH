var btn = $('#button');

$("#button").mouseenter(function () {
    $(".cardData").css("visibility", "visible")
})

$("#button").mouseout(function () {
    $(".cardData").css("visibility", "hidden")
})
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
class Pizza {
    constructor(category, id, image, name, price, topping) {
        this.category = category
        this.id = id
        this.image = image
        this.name = name
        this.price = price
        this.topping = topping
    }
    getToCard() {
        var cardData =
            `  <div class="col-lg-3">
        <div class="card" style="margin-top:10px">
            <img src="${this.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">${this.topping}</p>
                <a href="#" class="size text-center">119 UAH</a>
                <div class="bass">
                    <i class="fas fa-shopping-basket"></i>
                </div>
            </div>
            <div class="hoverFront">
                <h5 class="p-3">
                    size:
                </h5>
                <ul class="list-unstyled p-3">
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                small
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                medium
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                large
                            </label>
                        </div>
                    </li>
                </ul>
                <div>
                    <button type="button" class="w-100 addToBasket btn btn-primary">Add To Basket</button>
                </div>
            </div>
        </div>
    </div>`;
        $("#productCards").append(cardData)
    }
    addToCard() {

    }
}

var pizzeria = fetch("https://isko88.github.io/apipizza.json");
var prev = []
pizzeria
    .then(res => { return res.json() })
    .then(res => {
        res.forEach(element => {
            var pizza = new Pizza(element.category, element.id, element.image, element.name, element.price, element.topping)
            pizza.getToCard()

        });
    })