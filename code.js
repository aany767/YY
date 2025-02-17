/////////background/////////


function createPixels() {
    let container = document.querySelector(".pixelCon");
    let totalPixels = Math.floor(window.innerWidth / 20) * Math.floor(window.innerHeight / 20);

    container.innerHTML = ""; // 清空舊內容
    for (let i = 0; i < totalPixels; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.animationDelay = Math.random() * 3 + "s"; // 隨機動畫延遲
        container.appendChild(pixel);
    }
}

createPixels();
window.addEventListener("resize", createPixels); // 當視窗變更時重新計算