const MOVIES = [
  {
    iframe: `<div style="padding:42.47% 0 0 0;position:relative;">
  <iframe src="https://player.vimeo.com/video/1095545009?autoplay=1&loop=1title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="a new hope"></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>`,
    logo: "image/movie/a new hope logo.png", 
    title: "Star Wars: A New Hope",
    desc: "銀河帝国劇立から19年。砂漠の惑星タトゥイーンでルークは、長年隠れ住んでいたオビ=ワン・ケノービと出会い反乱軍の戦いに加わることを決意する。ダース・ベイダー率いる邪悪な帝国軍に捕らわれたレイア姫を救出するため、オビ=ワンは若きルークをジェダイへ導いていく。"
  },
  {
    iframe: `<div style="padding:42.38% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1095545808?autoplay=1&loop=1title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="the empire strikes back"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
    logo: "image/movie/the empire strikes back logo.png",
    title: "Star Wars: The Empire Strikes Back",
    desc: "デス・スターを破壊された帝国軍は反乱軍を容赦なく追い続けていた。反乱軍が氷の惑星ホスから撤退すると、ルーク・スカイウォーカーは惑星ダゴバに行く。そこには隠れ暮らしていた伝説のジェダイ・マスターのヨーダがいたのだ。一方、ダース・ベイダーはベスピンのクラウド・シティで若きスカイウォーカーをダークサイドへ引き込もうと目論む。"
  },
  {
    iframe: `<div style="padding:42.28% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1095545448?autoplay=1&loop=1title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="return of the jedi"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
    logo: "image/movie/return of the jedi logo.png",
    title: "Star Wars: Return of the Jedi",
    desc: "帝国軍がより強力な第2デス・スターの建造を進めている中、反乱軍は総力を結集しデス・スターへ攻撃の準備を計画していた。一方、ルーク・スカイウォーカーは、邪悪な皇帝の前でダース・ベイダーとの最後の戦いに挑む。"
  }
];

const ALBUMS = [
  {
    album: "image/music/Diabolical Fullmoon Mysticism.jpg",
    logo: "image/music/Immortal logo.png",
    title: "",
    desc: "ノルウェーのブラックメタルシーンの初期を代表する作品です。荘厳で冷たく、不気味な雰囲気を持ち、後の彼らの氷の世界観への基盤とも言える内容になっています。"
  },
  {
    album: "image/music/Infinity On High (Deluxe Edition).jpg",
    logo: "image/music/falloutboy logo.png",
    title: "",
    desc: "エモ・パンクからポップロックへの転換を示した重要なアルバムです。洗練されたプロダクションと多彩なジャンル要素が融合し、「This Ain't a Scene, It's an Arms Race」や「Thnks fr th Mmrs」などのヒット曲を生み出しました。"
  },
  {
    album: "image/music/Back In Black.jpg",
    logo: "image/music/acdc logo.png",
    title: "",
    desc: "オーストラリアの伝説的なハードロックバンド。「Thunderstruck」などの代表曲で世界中のファンを魅了。"
  },
  {
    album: "image/music/Americana.jpg",
    logo: "image/music/theoffspring logo.png",
    title: "",
    desc: "The Offspringの代表作のひとつで、社会風刺とユーモアを織り交ぜたリリックが特徴。「Pretty Fly (for a White Guy)」や「Why Don't You Get a Job?」など、キャッチーで皮肉の効いた楽曲が多数収録されています。"
  },
  {
    album: "image/music/Day & Age.jpg",
    logo: "image/music/thekillers logo.png",
    title: "",
    desc: "The Killersがエレクトロとロックの融合をさらに進化させたアルバムです。「Human」や「Spaceman」などのトラックでは、ダンスビートと壮大なメロディが特徴的で、アート性の高いビジュアルとともにリスナーを非日常の世界へ誘います。"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  // --- movie modal ---
const movieModal = document.getElementById('movie-modal');
if (movieModal) {
  const modalVideo = movieModal.querySelector('.modal-video'); // 這裡是個 div
  const modalLogo = movieModal.querySelector('.modal-logo');
  const modalTitle = movieModal.querySelector('.modal-title');
  const modalDesc = movieModal.querySelector('.modal-desc');
  const modalClose = movieModal.querySelector('.modal-close');
  const modalOverlay = movieModal.querySelector('.modal-overlay');
  document.querySelectorAll('.movie-card').forEach((card, idx) => {
    card.addEventListener('click', function () {
      // 重點：用 innerHTML 塞 iframe（不是 .src）
      modalVideo.innerHTML = MOVIES[idx].iframe;
      modalLogo.src = MOVIES[idx].logo;
      modalTitle.textContent = MOVIES[idx].title;
      modalDesc.textContent = MOVIES[idx].desc;
      movieModal.classList.add('show');
    });
  });
  function closeModal() {
    movieModal.classList.remove('show');
    // 關閉時清空 iframe，避免外部播放器繼續播放
    modalVideo.innerHTML = "";
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
}
  // --- music modal ---
  const musicModal = document.getElementById('music-modal');
  if (musicModal) {
    const modalAlbum = musicModal.querySelector('.modal-album'); // 這是專輯封面圖
    const modalLogo = musicModal.querySelector('.modal-logo');
    const modalTitle = musicModal.querySelector('.modal-title');
    const modalDesc = musicModal.querySelector('.modal-desc');
    const modalClose = musicModal.querySelector('.modal-close');
    const modalOverlay = musicModal.querySelector('.modal-overlay');
    document.querySelectorAll('.music-card').forEach((card, idx) => {
      card.addEventListener('click', function () {
        modalAlbum.src = ALBUMS[idx].album;
        modalLogo.src = ALBUMS[idx].logo;
        modalTitle.textContent = ALBUMS[idx].title;
        modalDesc.textContent = ALBUMS[idx].desc;
        musicModal.classList.add('show');
      });
    });
    function closeMusicModal() {
      musicModal.classList.remove('show');
    }
    modalClose.addEventListener('click', closeMusicModal);
    modalOverlay.addEventListener('click', closeMusicModal);
  }
});

