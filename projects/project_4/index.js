function openPopup() {
    const popupWidth = 1200;
    const popupHeight = 900;
    const left = (screen.width / 2) - (popupWidth / 2);
    const top = (screen.height / 2) - (popupHeight / 2);
    const popup = window.open("", "popup", `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
    popup.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>팝업 이미지</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #ffffff;
                }
                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            </style>
        </head>
        <body>
            <audio src="사이렌.mp3" autoplay="autoplay">
            <img src="팝업 배너1.jpg" alt="팝업 이미지">
        </body>
        </html>
    `);
}
window.onload = function() {
    setTimeout(openPopup, 200);
}
function showRandomCard() {
    const suits = ['H', 'D', 'C', 'S'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cards = [];
    while (cards.length < 4) {
        const suit = suits[Math.floor(Math.random() * suits.length)];
        const value = values[Math.floor(Math.random() * values.length)];
        const card = `${value}${suit}`;
        if (!cards.includes(card)) {
            cards.push(card);
        }
    }
    cards.forEach((card, index) => {
        const cardImage = `cards/${card}.png`;
        const cardElement = document.getElementById(`card${index + 1}`);
        cardElement.innerHTML = `<img src="${cardImage}" alt="${card}" style="width: 100px;">`;
    });
    const playerValue = getValue(cards[0]) + getValue(cards[1]);
    const bankerValue = getValue(cards[2]) + getValue(cards[3]);
    let winner;
    if (playerValue > bankerValue) {
        winner = "플레이어";
    } else if (playerValue < bankerValue) {
        winner = "뱅커";
    } else {
        winner = "타이";
    }
    setTimeout(() => {
        showResultPopup(playerValue, bankerValue, winner);
    }, 2000);
}
function getValue(card) {
    const value = card.slice(0, -1);
    if (value === 'A') {
        return 1;
    } else if (value === 'K' || value === 'Q' || value === 'J') {
        return 10;
    } else {
        return parseInt(value);
    }
}
function showResultPopup(playerValue, bankerValue, winner) {
    const popupWidth = 1200;
    const popupHeight = 900;
    const left = (screen.width / 2) - (popupWidth / 2);
    const top = (screen.height / 2) - (popupHeight / 2);
    const popup = window.open("", "resultPopup", `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
    popup.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>결과</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #ffffff;
                    font-size: 20px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div>
                <p>플레이어의 점수: ${playerValue}</p>
                <p>뱅커의 점수: ${bankerValue}</p>
                <p>승리자: ${winner}</p>
            </div>
        </body>
        </html>
    `);
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
}, 60);
function selectPlayer() {
    console.log("플레이어 선택됨");
}
function selectBanker() {
    console.log("뱅커 선택됨");
}