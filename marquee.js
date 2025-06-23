window.addEventListener('DOMContentLoaded', () => {
  const marquee = document.getElementById('marquee');
  const imgs = marquee.querySelectorAll('img');
  const half = Math.floor(imgs.length / 2);

  let loaded = 0;
  imgs.forEach((img) => {
    if (img.complete) {
      loaded++;
    } else {
      img.addEventListener('load', () => {
        loaded++;
        if (loaded === imgs.length) startMarquee();
      });
    }
  });

  if (loaded === imgs.length) startMarquee();

  function startMarquee() {
    let scrollWidth = 0;
    for (let i = 0; i < half; i++) {
      scrollWidth += imgs[i].offsetWidth + parseInt(getComputedStyle(imgs[i]).marginRight);
    }
    let pos = 0;
    const speed = 0.6;

    function animate() {
      pos += speed;
      if (pos >= scrollWidth) pos = 0;
      marquee.style.transform = `translateX(-${pos}px)`;
      requestAnimationFrame(animate);
    }
    animate();
  }
});