// 카드깡 시뮬레이터 site: the preview video and store shots first, then a pack to tear on the page.
(function () {
  const T = {
    ko: {
      name: "카드깡 시뮬레이터", pack: "팩", fiveCards: "카드 5장",
      tearHint: "팩 윗부분을 손가락으로 쭉 그어서 뜯어 보세요", auto: "자동으로 뜯기", inside: "안에 카드가 들어 있어요",
      flipHint: "카드를 한 장씩 눌러서 뒤집어 보세요", tiltHint: "희귀 카드는 기울이면 반짝여요",
      got: "{n} 카드가 나왔어요!", again: "한 팩 더",
      resultBody: "앱에서는 진짜 새 781종을 여덟 권역 팩으로 모아요. 내려받기는 무료예요.",
      other: "새찍도감", otherWhat: "이 새들, 밖에서 진짜로 찍어 볼까요?", otherGo: "새찍도감 보러 가기 →",
      wOdds: "팩 확률",
      s1h: "진짜 새 781종이 카드가 됐어요", s1p: "참새부터 두루미까지, 실제로 사는 새들이에요.",
      s2h: "여덟 권역, 여덟 가지 팩", s2p: "권역마다 사는 새와 풍경이 달라요. 팩 표지도 그 권역의 풍경이에요.",
      s3h: "흔들고, 기울이고, 찢어서 여는 팩", s3p: "휴대폰을 흔들면 포일이 바스락거리고, 기울이면 팩이 따라 움직여요.",
      s4h: "뽑은 새는 초원에서 살아요", s4p: "모은 새들이 초원을 걸어 다니고, 무리 지어 날아올라요.",
      endBody: "내려받기는 무료예요. 매일 2팩, 오늘의 새와 함께 시작하세요.",
      h1: "진짜 새 카드 팩 뜯기", when: "11월 20일 출시 · iPhone · 무료",
      shotsH: "이런 게임이에요", shotsHint: "옆으로 넘겨 보세요 · 7장", tryHere: "여기서 한 팩 뜯어 보기",
      privacy: "개인정보 처리방침", terms: "이용약관", support: "지원",
      credits: "© 2026 SummerRiversound · 글꼴 갈무리(SIL OFL 1.1)",
      share: "공유", shareText: "카드깡 시뮬레이터에서 {n} 카드를 뽑았어요!", friend: "친구가 뽑은 카드",
      copied: "주소를 복사했어요", saved: "그림을 저장했어요",
    },
    en: {
      name: "TCG Pack Simulator", pack: "Pack", fiveCards: "5 cards",
      tearHint: "Swipe across the top of the pack to tear it open", auto: "Open for me", inside: "There are cards inside",
      flipHint: "Tap each card to turn it over", tiltHint: "Tilt the rare card to make it shine",
      got: "You pulled {n}!", again: "Another pack",
      resultBody: "In the app you collect 781 real bird species from packs of eight realms. Free to download.",
      other: "Feather Note", otherWhat: "Want to photograph these birds for real?", otherGo: "See Feather Note →",
      wOdds: "Pack odds (Korean)",
      s1h: "781 real birds became cards", s1p: "From sparrows to cranes, every one lives somewhere on Earth.",
      s2h: "Eight realms, eight packs", s2p: "Each realm has its own birds and scenery, and its pack wears that landscape.",
      s3h: "Shake it, tilt it, tear it", s3p: "Shake your phone and the foil crinkles. Tilt it and the pack moves with you.",
      s4h: "Your birds live in the meadow", s4p: "The birds you collect walk the meadow and take off together as a flock.",
      endBody: "Free to download. Start with 2 packs a day and the bird of the day.",
      h1: "Tear open packs of real bird cards", when: "Out Nov 20 · iPhone · Free",
      shotsH: "What it's like", shotsHint: "Swipe sideways · 7 shots", tryHere: "Tear a pack right here",
      privacy: "Privacy Policy", terms: "Terms of Use", support: "Support",
      credits: "© 2026 SummerRiversound · Font: Galmuri (SIL OFL 1.1)",
      share: "Share", shareText: "I pulled {n} in TCG Pack Simulator!", friend: "A friend pulled this",
      copied: "Link copied", saved: "Picture saved",
    },
    ja: {
      name: "神引きシミュレーター", pack: "パック", fiveCards: "カード5枚",
      tearHint: "パックの上を指でなぞって開けてみよう", auto: "自動で開ける", inside: "カードが入っている",
      flipHint: "カードを一枚ずつタップしてめくろう", tiltHint: "レアカードは傾けると輝く",
      got: "{n}が出た！", again: "もう一パック",
      resultBody: "アプリでは本物の鳥781種を8つの地域のパックで集める。ダウンロードは無料。",
      other: "Feather Note", otherWhat: "この鳥たち、本物を撮ってみる？", otherGo: "Feather Noteを見る →",
      wOdds: "パックの確率（韓国語）",
      s1h: "本物の鳥781種がカードに", s1p: "スズメからタンチョウまで、実際に暮らす鳥たち。",
      s2h: "8つの地域、8つのパック", s2p: "地域ごとに鳥も風景も違う。パックの表紙もその地域の風景。",
      s3h: "振って、傾けて、破って開ける", s3p: "スマホを振ればホイルがカサカサ、傾ければパックがついてくる。",
      s4h: "引いた鳥は草原で暮らす", s4p: "集めた鳥が草原を歩き、群れで飛び立つ。",
      endBody: "ダウンロードは無料。毎日2パックと「今日の鳥」から始めよう。",
      h1: "本物の鳥カードのパックを開けよう", when: "11月20日リリース · iPhone · 無料",
      shotsH: "こんなゲームです", shotsHint: "横にスワイプ · 7枚", tryHere: "ここで1パック開けてみる",
      privacy: "プライバシーポリシー", terms: "利用規約", support: "サポート",
      credits: "© 2026 SummerRiversound · フォント Galmuri（SIL OFL 1.1）",
      share: "シェア", shareText: "神引きシミュレーターで{n}が出た！", friend: "友だちが引いたカード",
      copied: "リンクをコピーした", saved: "画像を保存した",
    },
  };
  const t = k => Site.t(T, k);
  const D = window.DATA;
  const realmId = Site.lang === "en" ? "north-america" : "east-asia";
  const realm = D.realms[realmId];
  const realmName = id => D.realms[id].name[Site.lang];

  // chrome
  Site.applyText(T);
  Site.langSwitch(document.querySelector(".langs"));
  document.querySelectorAll("[data-stores]").forEach(n => { n.innerHTML = Site.stores("cardkkang", n.dataset.stores, n.dataset.stores === "bar" ? "small" : ""); });
  document.querySelectorAll("[data-other]").forEach(a => { a.href = Site.home("feathernote"); });
  Site.wireSoon();

  // top: the realm's landscape under the title, the store's preview video and its seven screenshots
  document.querySelectorAll(".scape").forEach(n => { n.style.backgroundImage = `url(${realm.cover})`; });
  const art = document.querySelector(".scape .title"); art.src = `img/title-${Site.lang}.png`; art.alt = t("name");
  const clip = document.querySelector(".clip video");
  clip.poster = `media/preview-${Site.lang}.jpg`; clip.src = `media/preview-${Site.lang}.mp4`; clip.setAttribute("aria-label", t("name"));
  // it plays by itself without sound; where it may not (Reduce Motion, Low Power Mode) it shows its controls
  if (Site.motion) clip.play().catch(() => { clip.controls = true; }); else clip.controls = true;
  document.querySelector(".strip").innerHTML = [1, 2, 3, 4, 5, 6, 7].map(n =>
    `<img loading="lazy" width="232" height="504" src="media/shot-${Site.lang}-${n}.jpg" alt="${t("shotsH")} ${n}/7">`).join("");

  // tear a pack
  const s = document.getElementById("stage");
  s.querySelector(".cover").style.backgroundImage = `url(${realm.cover})`;
  const title = s.querySelector(".title"); title.src = `img/title-${Site.lang}.png`; title.alt = t("name");
  s.querySelector(".realm").textContent = realmName(realmId);
  s.querySelector(".pack .pic").style.backgroundImage = `url(${realm.cover})`;
  const pack = s.querySelector(".pack"), tear = s.querySelector(".tear"), flap = s.querySelector(".flap"), hint = s.querySelector(".hint"),
    auto = s.querySelector(".auto"), row = s.querySelector(".row"), show = s.querySelector(".showcase"), result = s.querySelector(".result"), toast = s.querySelector(".toast");
  const say = m => { toast.textContent = m; toast.classList.add("on"); clearTimeout(say.t); say.t = setTimeout(() => toast.classList.remove("on"), 1100); };
  let tearing = false, minX = 1, maxX = 0, opened = false;

  function draw() {
    const by = r => Site.shuffle(realm.birds.filter(b => b.rarity === r));
    const commons = by("common"), uncommons = by("uncommon");
    // shortcut: four from common/uncommon and a rare last; the game's real odds are on the odds page.
    return [commons[0], commons[1], uncommons[0], Math.random() < .5 ? commons[2] : uncommons[1], by("rare")[0]];
  }
  function reset() {
    opened = false; tear.style.width = "0"; tear.style.opacity = 1; tear.style.transition = "";
    flap.style.transform = ""; flap.style.opacity = 1; pack.style.transform = ""; pack.style.opacity = 1;
    row.hidden = true; row.innerHTML = ""; row.style.top = ""; row.style.transform = "";
    show.hidden = true; show.innerHTML = ""; result.classList.remove("on"); auto.hidden = false; title.style.opacity = 1;
    hint.textContent = t("tearHint"); hint.style.bottom = "72px";
  }
  const rel = e => { const r = pack.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }; };
  s.addEventListener("pointerdown", e => {
    if (tuck() || opened || e.target.closest("button, a, .result")) return;
    const p = rel(e);
    if (p.y > -.2 && p.y < .3 && p.x > -.15 && p.x < 1.15) { tearing = true; minX = maxX = p.x; s.setPointerCapture(e.pointerId); }
    else if (p.y > 0 && p.y < 1 && p.x > 0 && p.x < 1) { pack.animate([{ rotate: "0deg" }, { rotate: "-2deg" }, { rotate: "2deg" }, { rotate: "0deg" }], { duration: 300, easing: "ease-out" }); say(t("inside")); }
  });
  s.addEventListener("pointermove", e => {
    if (!tearing || opened) return;
    const p = rel(e); minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
    const from = Site.clamp(minX), prog = Site.clamp(Site.clamp(maxX) - from);
    tear.style.left = from * 100 + "%"; tear.style.width = prog * 100 + "%";
    if (prog > .8) open();
  });
  const stop = () => { tearing = false; if (!opened) tear.style.width = "0"; };
  s.addEventListener("pointerup", stop); s.addEventListener("pointercancel", stop);
  auto.addEventListener("click", () => { tear.style.left = 0; tear.style.transition = "width .5s ease-out"; tear.style.width = "100%"; setTimeout(open, 500); });

  function open() {
    if (opened) return; opened = true; tearing = false; auto.hidden = true; title.style.opacity = 0; hint.textContent = t("flipHint"); hint.style.bottom = "24px";
    flap.style.transform = "translate(40%,-160%) rotate(-28deg)"; flap.style.opacity = 0; tear.style.opacity = 0;
    setTimeout(() => { pack.style.transform = "translate(-50%, 60%) scale(.8)"; pack.style.opacity = 0; }, 350);
    const cards = draw(); row.hidden = false;
    cards.forEach((b, i) => { const c = Site.el(Site.cardHtml(b, Site.name(b), "deal")); c.style.animationDelay = (.45 + i * .09) + "s"; c.setAttribute("aria-label", t("flipHint")); row.append(c); });
    let flipped = 0;
    [...row.children].forEach((c, i) => {
      const go = () => { if (c.classList.contains("flip")) return; c.classList.remove("deal"); c.classList.add("flip"); c.setAttribute("aria-label", Site.name(cards[i])); if (++flipped === 5) finish(cards); };
      c.addEventListener("click", go);
      c.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
    });
  }
  function finish(cards) {
    const rare = cards[4];
    picture = sharePicture(rare); shared = rare;
    setTimeout(() => {
      hint.textContent = "";
      row.style.top = "3%"; row.style.transform = "scale(.72)";
      show.hidden = false; show.style.top = "40%";
      const c = Site.el(Site.cardHtml(rare, Site.name(rare), "flip big")); show.append(c); Site.tilt(c);
      hint.textContent = t("tiltHint"); hint.style.bottom = "auto"; hint.style.top = "64%";
      result.querySelector(".got").textContent = t("got").replace("{n}", Site.name(rare));
      setTimeout(() => { result.classList.add("on"); hint.textContent = ""; }, 900);
    }, 450);
  }
  result.querySelector(".again").addEventListener("click", reset);

  // share: the rare card as the game's Showcase share picture (photo-share "그 순간"): the card
  // large over the realm's meadow, a dex window under it with its number, name, tier and realm
  // beside the title art. The link brings the friend to the same card first (?pull=).
  let picture = null, shared = null;
  const shareBtn = result.querySelector(".share");
  function sharePicture(b) {
    return Site.picture(1080, 1350, async (g) => {
      const [cover, bird, logo] = await Promise.all([Site.img(realm.cover), Site.img(`birds/${b.id}.png`), Site.img(`img/title-${Site.lang}.png`)]);
      g.drawImage(cover, -96, -45, 1272, 1440);
      g.fillStyle = "rgba(194,148,53,.16)"; g.fillRect(0, 0, 1080, 1350);
      Site.drawCard(g, b, bird, 220, 52, 8);
      Site.pane(g, 48, 1000, 984, 302, 4);
      const logoW = logo.width * 2, logoH = logo.height * 2, textW = 984 - logoW - 104;
      g.fillStyle = "#1a1c17"; g.textBaseline = "middle"; g.font = '700 48px "Galmuri11"';
      g.fillText(`${Site.pad(b.no)} ${Site.name(b)}`, 88, 1100, textW);
      g.fillStyle = "rgba(26,28,23,.7)"; g.font = '36px "Galmuri11"';
      g.fillText(`${D.tiers[b.rarity][Site.lang]} · ${realmName(realmId)}`, 88, 1176, textW);
      g.drawImage(logo, 1032 - 36 - logoW, 1000 + (302 - logoH) / 2, logoW, logoH);
    });
  }
  shareBtn.addEventListener("click", async () => {
    if (!picture) return;
    if (Site.motion) shareBtn.animate([{ transform: "scale(1)" }, { transform: "scale(.86, 1.12)" }, { transform: "scale(1.08, .94)" }, { transform: "scale(1)" }], { duration: 320, easing: "ease-out" });
    const card = show.querySelector(".card");
    if (card && Site.motion) card.animate([{ translate: "0 0" }, { translate: "0 -14px" }, { translate: "0 0" }], { duration: 420, easing: "cubic-bezier(.34,1.56,.64,1)" });
    const url = Site.home("cardkkang") + "?pull=" + shared.id;
    const how = await Site.share(await picture, `cardkkang-${shared.id}.png`, t("shareText").replace("{n}", Site.name(shared)), url);
    if (how === "copied") say(t("copied")); else if (how === "saved") say(t("saved"));
  });

  // a friend's shared link: their card waits over the pack; a tap tucks it into the pack
  const pulled = new URLSearchParams(location.search).get("pull");
  const friendBird = pulled && Object.values(D.realms).flatMap(r => r.birds || []).find(b => b.id === pulled);
  let friend = null;
  if (friendBird) {
    friend = Site.el(`<div class="friend"><span class="chip" data-t="friend"></span>${Site.cardHtml(friendBird, Site.name(friendBird), "flip big")}</div>`);
    friend.querySelector(".chip").textContent = t("friend");
    s.append(friend); Site.tilt(friend.querySelector(".card"));
    hint.style.opacity = 0; title.style.opacity = 0;
    s.scrollIntoView();
  }
  function tuck() {
    if (!friend) return false;
    const f = friend; friend = null;
    f.classList.add("tuck"); hint.style.opacity = ""; title.style.opacity = 1;
    setTimeout(() => { f.remove(); if (Site.motion) pack.animate([{ rotate: "0deg" }, { rotate: "-3deg" }, { rotate: "3deg" }, { rotate: "0deg" }], { duration: 360, easing: "ease-out" }); }, 480);
    return true;
  }

})();
