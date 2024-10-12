// 기존 JavaScript 코드

let cart = [];
let totalPrice = 0;

function addToCart(productName, price, stockId) {
    const stockElement = document.getElementById(stockId);
    let currentStock = parseInt(stockElement.textContent);

    if (currentStock > 0) {
        cart.push({ name: productName, price: price });
        currentStock--;
        stockElement.textContent = currentStock;
        updateCart();
    } else {
        alert('This product is out of stock!');
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;

        // 삭제 버튼 생성
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.onclick = () => removeFromCart(index);
        li.appendChild(deleteButton);

        // 위로 이동 버튼 생성
        const moveUpButton = document.createElement('button');
        moveUpButton.textContent = '위로';
        moveUpButton.onclick = () => moveItemUp(index);
        li.appendChild(moveUpButton);

        // 아래로 이동 버튼 생성
        const moveDownButton = document.createElement('button');
        moveDownButton.textContent = '아래로';
        moveDownButton.onclick = () => moveItemDown(index);
        li.appendChild(moveDownButton);

        cartItems.appendChild(li);
    });

    totalPrice = cart.reduce((total, item) => total + item.price, 0);
    totalPriceElement.textContent = totalPrice;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function moveItemUp(index) {
    if (index > 0) {
        // 현재 아이템과 위의 아이템을 교환
        [cart[index], cart[index - 1]] = [cart[index - 1], cart[index]];
        updateCart();
    }
}

function moveItemDown(index) {
    if (index < cart.length - 1) {
        // 현재 아이템과 아래의 아이템을 교환
        [cart[index], cart[index + 1]] = [cart[index + 1], cart[index]];
        updateCart();
    }
}

function updateStock(stockId, amount) {
    const stockElement = document.getElementById(stockId);
    let currentStock = parseInt(stockElement.textContent);
    currentStock += amount;

    if (currentStock < 0) {
        alert('Stock cannot be negative!');
        return;
    }
    stockElement.textContent = currentStock;
}

function openRandomColorWindow() {
    const newWindow = window.open("", "", "width=1400,height=700");
    newWindow.document.write(`
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                margin: 0;
                overflow: hidden;
                animation: changeBackground 0.1s infinite;
            }
            #rotating-credit {
                font-size: 24px;
                font-weight: bold;
                animation: rotate 2s linear infinite;
            }
            @keyframes rotate {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes changeBackground {
                0% { background-color: #f00; }
                25% { background-color: #0f0; }
                50% { background-color: #00f; }
                75% { background-color: #ff0; }
                100% { background-color: #f0f; }
            }
        </style>
        <div id="rotating-credit">Total Social Credit: ${totalPrice}</div>
    `);
    function changeBackgroundColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        newWindow.document.body.style.backgroundColor = randomColor;
    }
    setInterval(changeBackgroundColor, 300);
}

document.getElementById('submit-button').addEventListener('click', openRandomColorWindow);
