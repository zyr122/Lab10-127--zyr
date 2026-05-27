const imgs = {
    campus: ["校门.jpg","教学楼.jpg","操场.jpg","花园.jpg","林荫.jpg"],
    tech: ["建筑.jpg","教室.jpg","借阅室.jpg","体育馆.jpg","校史馆.jpg"],
    yantai: ["粉云映湖.jpg","湖景.jpg","晚霞.jpg","喷泉.jpg","夜景.jpg"]
};

// 插入5张图片（注意去掉 images/）
document.querySelector("#s1 .swiper-wrap").innerHTML = imgs.campus.map(i=>`<div class="swiper-item"><img src="${i}"></div>`).join("");
document.querySelector("#s2 .swiper-wrap").innerHTML = imgs.tech.map(i=>`<div class="swiper-item"><img src="${i}"></div>`).join("");
document.querySelector("#s3 .swiper-wrap").innerHTML = imgs.yantai.map(i=>`<div class="swiper-item"><img src="${i}"></div>`).join("");

const swipers = document.querySelectorAll('.swiper');
let direction = true;

setInterval(() => {
    direction = !direction;
}, 30000);

swipers.forEach(swiper => {
    const wrap = swiper.querySelector('.swiper-wrap');
    const w = 1000;
    const imgNum = 5;
    const total = w * imgNum;
    let offset = 0;

    setInterval(() => {
        direction ? offset += w : offset -= w;

        if (offset >= total) offset = 0;
        if (offset < 0) offset = total - w;

        wrap.style.transform = `translateX(-${offset}px)`;
    }, 2000);
});
