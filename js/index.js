const product = [
    {
        id: 0,
        image: 'image/bige.png',
        title: 'Валенсия Beige',
        text: 'Барные стулья',
        price: `2 300₽`,
    },
    {
        id: 1,
        image: 'image/rasm1.png',
        title: 'Толикс-2 White Gloss',
        text: 'Барные стулья',
        price: `4 690₽`,
    },
    {
        id: 2,
        image: 'image/rasm2.png',
        title: 'Динс Velvet Yellow',
        text: 'Диваны',
        price: `28 490₽`,
    },
    {
        id: 3,
        image: 'image/rasm3.png',
        title: 'Кускен Navy Blue',
        text: 'Диваны',
        price: `2 300₽`,
    },
    {
        id: 0,
        image: 'image/rasm4.png',
        title: 'Шерона Barhat Grey',
        text: 'Двухспальные кровати',
        price: `21 990₽`,
    },
    {
        id: 1,
        image: 'image/rasm5.png',
        title: 'Авиньон-1',
        text: 'Буфеты',
        price: `18 990₽`,
    },
    {
        id: 0,
        image: 'image/rasm6.png',
        title: 'Стелла Дуб Сонома',
        text: 'Комоды',
        price: `8 990₽`,
    },
    {
        id: 0,
        image: 'image/rasm15.png',
        title: 'Равенна-1 Light',
        text: `Комоды`,
        price: `14 990₽`,
    },
    {
        id: 0,
        image: 'image/rasm7.png',
        title: 'Бенфлит Grey',
        text: `Журнальные столы`,
        price: `7 290₽`,
    }
    ,
    {
        id: 0,
        image: 'image/rasm8.png',
        title: 'Тиффани Вудлайн Крем',
        text: 'Письменные столы',
        price: `10 990₽`,
    },
    {
        id: 0,
        image: 'image/rasm9.png',
        title: 'Валенсия Beige',
        text: 'Шкафы',
        price: `19 990₽ `,
    },
    {
        id: 0,
        image: 'image/rasm10.png',
        title: 'Лайт-3-170-240 Белый',
        text: 'Шкафы',
        price: `27 290₽`,
    },
    {
        id: 0,
        image: 'image/rasm11.png',
        title: 'Лайт-3-170-240 Белый',
        text: 'Шкафы',
        price: `27 290₽`,
    },
    {
        id: 0,
        image: 'image/rasm12.png',
        title: 'Вилли Pink',
        text: 'Детский диван',
        price: `21 990₽`,
    },
    {
        id: 0,
        image: 'image/rasm13.png',
        title: 'Сан-Паулу Velvet Brown',
        text: 'Барные стулья',
        price: `25 990₽`,
    },
    {
        id: 0,
        image: 'image/rasm14.png',
        title: 'Валенсия Beige',
        text: 'Барные стулья',
        price: `19 990₽`,
    },
    {
        id: 0,
        image: 'image/rasm4.png',
        title: 'Шерона Barhat Grey',
        text: 'Двухспальные кровати',
        price: `21 990₽`,
    },
    {
        id: 1,
        image: 'image/rasm5.png',
        title: 'Авиньон-1',
        text: 'Буфеты',
        price: `18 990₽`,
    },
    {
        id: 0,
        image: 'image/rasm6.png',
        title: 'Стелла Дуб Сонома',
        text: 'Комоды',
        price: `8 990₽`,
    },
    {
        id: 0,
        image: 'image/rasm15.png',
        title: 'Равенна-1 Light',
        text: `Комоды`,
        price: `14 990₽`,
    },
    {
        id: 0,
        image: 'image/rasm7.png',
        title: 'Бенфлит Grey',
        text: `Журнальные столы`,
        price: `7 290₽`,
    }
    ,
    {
        id: 0,
        image: 'image/rasm8.png',
        title: 'Тиффани Вудлайн Крем',
        text: 'Письменные столы',
        price: `10 990₽`,
    },
    {
        id: 0,
        image: 'image/rasm9.png',
        title: 'Валенсия Beige',
        text: 'Шкафы',
        price: `19 990₽ `,
    },
    {
        id: 0,
        image: 'image/rasm10.png',
        title: 'Лайт-3-170-240 Белый',
        text: 'Шкафы',
        price: `27 290₽`,
    },
    {
        id: 0,
        image: 'image/rasm11.png',
        title: 'Лайт-3-170-240 Белый',
        text: 'Шкафы',
        price: `27 290₽`,
    },
    {
        id: 0,
        image: 'image/rasm12.png',
        title: 'Вилли Pink',
        text: 'Детский диван',
        price: `21 990₽`,
    },
    {
        id: 0,
        image: 'image/rasm13.png',
        title: 'Сан-Паулу Velvet Brown',
        text: 'Барные стулья',
        price: `25 990₽`,
    },
    {
        id: 0,
        image: 'image/rasm14.png',
        title: 'Валенсия Beige',
        text: 'Барные стулья',
        price: `19 990₽`,
    }
];
const categories = [...new Set(product.map((item) => { return item }
))]

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, text, price } = item;
    return (
        `<div class='box'>
        <i class="love fa-solid fa-heart" id="icon"></i>
           <div class='img-box'>
              <img class='images' src=${image}></img>
           </div>  
          <div class='bottom'> 
          <p>${title}</p>   
          <h1>${text}</h1>    
          <h2>$ ${price}.00</h2>` +
        "<button class='shop-btn' onclick='addtocart(" + (i++) + ")'>Добавить в корзинуt</button>" +
        `</div>
          </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a) {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((item) => {
            var { image, title, price } = item;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 stye='font-size: 15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}
