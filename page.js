// 카드깡 시뮬레이터 site: tear a pack in the hero, the scroll story below, desk windows on wide screens.
(function () {
  const T = {
    ko: {
      name: "카드깡 시뮬레이터", pack: "팩", packTab: "팩 뜯기", fiveCards: "카드 5장", iphone: "iPhone",
      tearHint: "팩 윗부분을 손가락으로 쭉 그어서 뜯어 보세요", auto: "자동으로 뜯기", inside: "안에 카드가 들어 있어요",
      flipHint: "카드를 한 장씩 눌러서 뒤집어 보세요", tiltHint: "희귀 카드는 기울이면 반짝여요",
      got: "{n} 카드가 나왔어요!", again: "한 팩 더",
      resultBody: "앱에서는 진짜 새 781종을 여덟 권역 팩으로 모아요. 내려받기는 무료예요.",
      other: "새찍도감", otherWhat: "이 새들, 밖에서 진짜로 찍어 볼까요?", otherGo: "새찍도감 보러 가기 →",
      wAbout: "소개", wAboutTitle: "카드깡 시뮬레이터는?", wPulls: "뽑은 카드", wOdds: "팩 확률", wLegal: "도움말", close: "닫기",
      pullsEmpty: "아직 뜯은 팩이 없어요. 가운데 팩을 뜯어 보세요.",
      f1: "진짜 새 781종이 카드가 됐어요.", f2: "팩은 흔들고, 기울이고, 찢어서 열어요.", f3: "뽑은 새는 HD-2D 초원을 돌아다녀요.", f4: "매일 오늘의 새가 찾아오고 2팩을 받아요.",
      deskHint: "아이콘을 눌러 보세요 · 창은 띠를 잡고 끌어요",
      s1h: "진짜 새 781종이 카드가 됐어요", s1p: "참새부터 두루미까지, 실제로 사는 새들이에요.",
      s2h: "여덟 권역, 여덟 가지 팩", s2p: "권역마다 사는 새와 풍경이 달라요. 팩 표지도 그 권역의 풍경이에요.",
      s3h: "흔들고, 기울이고, 찢어서 여는 팩", s3p: "휴대폰을 흔들면 포일이 바스락거리고, 기울이면 팩이 따라 움직여요.",
      s4h: "뽑은 새는 초원에서 살아요", s4p: "모은 새들이 초원을 걸어 다니고, 무리 지어 날아올라요.",
      endBody: "내려받기는 무료예요. 매일 2팩, 오늘의 새와 함께 시작하세요.",
      privacy: "개인정보 처리방침", terms: "이용약관", support: "지원",
      credits: "© 2026 SummerRiversound · 글꼴 갈무리(SIL OFL 1.1)",
      share: "공유", shareText: "카드깡 시뮬레이터에서 {n} 카드를 뽑았어요!", friend: "친구가 뽑은 카드",
      copied: "주소를 복사했어요", saved: "그림을 저장했어요",
    },
    en: {
      name: "TCG Pack Simulator", pack: "Pack", packTab: "Open a pack", fiveCards: "5 cards", iphone: "iPhone",
      tearHint: "Swipe across the top of the pack to tear it open", auto: "Open for me", inside: "There are cards inside",
      flipHint: "Tap each card to turn it over", tiltHint: "Tilt the rare card to make it shine",
      got: "You pulled {n}!", again: "Another pack",
      resultBody: "In the app you collect 781 real bird species from packs of eight realms. Free to download.",
      other: "Feather Note", otherWhat: "Want to photograph these birds for real?", otherGo: "See Feather Note →",
      wAbout: "About", wAboutTitle: "What is TCG Pack Simulator?", wPulls: "My pulls", wOdds: "Pack odds (Korean)", wLegal: "Help", close: "Close",
      pullsEmpty: "No packs opened yet. Tear the pack in the middle.",
      f1: "781 real bird species, each one a card.", f2: "Shake, tilt and tear the pack to open it.", f3: "Birds you pull wander an HD-2D meadow.", f4: "A bird of the day and 2 free packs every day.",
      deskHint: "Click the icons · drag windows by their bar",
      s1h: "781 real birds became cards", s1p: "From sparrows to cranes, every one lives somewhere on Earth.",
      s2h: "Eight realms, eight packs", s2p: "Each realm has its own birds and scenery, and its pack wears that landscape.",
      s3h: "Shake it, tilt it, tear it", s3p: "Shake your phone and the foil crinkles. Tilt it and the pack moves with you.",
      s4h: "Your birds live in the meadow", s4p: "The birds you collect walk the meadow and take off together as a flock.",
      endBody: "Free to download. Start with 2 packs a day and the bird of the day.",
      privacy: "Privacy Policy", terms: "Terms of Use", support: "Support",
      credits: "© 2026 SummerRiversound · Font: Galmuri (SIL OFL 1.1)",
      share: "Share", shareText: "I pulled {n} in TCG Pack Simulator!", friend: "A friend pulled this",
      copied: "Link copied", saved: "Picture saved",
    },
    ja: {
      name: "神引きシミュレーター", pack: "パック", packTab: "パックを開ける", fiveCards: "カード5枚", iphone: "iPhone",
      tearHint: "パックの上を指でなぞって開けてみよう", auto: "自動で開ける", inside: "カードが入っている",
      flipHint: "カードを一枚ずつタップしてめくろう", tiltHint: "レアカードは傾けると輝く",
      got: "{n}が出た！", again: "もう一パック",
      resultBody: "アプリでは本物の鳥781種を8つの地域のパックで集める。ダウンロードは無料。",
      other: "Feather Note", otherWhat: "この鳥たち、本物を撮ってみる？", otherGo: "Feather Noteを見る →",
      wAbout: "紹介", wAboutTitle: "神引きシミュレーターとは", wPulls: "引いたカード", wOdds: "パックの確率（韓国語）", wLegal: "ヘルプ", close: "閉じる",
      pullsEmpty: "まだパックを開けていない。真ん中のパックを開けてみよう。",
      f1: "本物の鳥781種がカードになった。", f2: "パックは振って、傾けて、破って開ける。", f3: "引いた鳥はHD-2Dの草原を歩き回る。", f4: "毎日「今日の鳥」が来て、2パックもらえる。",
      deskHint: "アイコンをクリック・ウィンドウは帯をつかんで動かす",
      s1h: "本物の鳥781種がカードに", s1p: "スズメからタンチョウまで、実際に暮らす鳥たち。",
      s2h: "8つの地域、8つのパック", s2p: "地域ごとに鳥も風景も違う。パックの表紙もその地域の風景。",
      s3h: "振って、傾けて、破って開ける", s3p: "スマホを振ればホイルがカサカサ、傾ければパックがついてくる。",
      s4h: "引いた鳥は草原で暮らす", s4p: "集めた鳥が草原を歩き、群れで飛び立つ。",
      endBody: "ダウンロードは無料。毎日2パックと「今日の鳥」から始めよう。",
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
  Site.desk(document.getElementById("hero"));

  // hero: tear a pack
  const s = document.getElementById("stage");
  s.querySelector(".cover").style.backgroundImage = `url(${realm.cover})`;
  const title = s.querySelector(".title"); title.src = `img/title-${Site.lang}.png`; title.alt = t("name");
  s.querySelector(".realm").textContent = realmName(realmId);
  s.querySelector(".pack .pic").style.backgroundImage = `url(${realm.cover})`;
  const pack = s.querySelector(".pack"), tear = s.querySelector(".tear"), flap = s.querySelector(".flap"), hint = s.querySelector(".hint"),
    auto = s.querySelector(".auto"), row = s.querySelector(".row"), show = s.querySelector(".showcase"), result = s.querySelector(".result"), toast = s.querySelector(".toast");
  const say = m => { toast.textContent = m; toast.classList.add("on"); clearTimeout(say.t); say.t = setTimeout(() => toast.classList.remove("on"), 1100); };
  const pulls = [];
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
    pulls.push(...cards); renderPulls();
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
  }
  function tuck() {
    if (!friend) return false;
    const f = friend; friend = null;
    f.classList.add("tuck"); hint.style.opacity = ""; title.style.opacity = 1;
    setTimeout(() => { f.remove(); if (Site.motion) pack.animate([{ rotate: "0deg" }, { rotate: "-3deg" }, { rotate: "3deg" }, { rotate: "0deg" }], { duration: 360, easing: "ease-out" }); }, 480);
    return true;
  }
  function renderPulls() {
    document.getElementById("pullsEmpty").hidden = pulls.length > 0;
    document.getElementById("pulls").innerHTML = pulls.slice(-15).map(b => `<div title="${Site.name(b)}"><img class="pix" src="birds/${b.id}.png" alt="${Site.name(b)}"></div>`).join("");
    document.getElementById("pullsIcon").src = `birds/${pulls[pulls.length - 1].id}.png`;
  }

  // story: birds gather, eight realm packs, a tear, birds land in the meadow
  const story = document.getElementById("story"), scene = story.querySelector(".scene"), actors = scene.querySelector(".actors");
  const cap = scene.querySelector(".cap"), end = scene.querySelector(".end"), l1 = scene.querySelector("#l1"), l2 = scene.querySelector("#l2");
  story.setAttribute("aria-label", t("s1h"));
  const flock = Site.shuffle(realm.birds).slice(0, 7);
  const flyers = flock.map(b => { const f = Site.el(`<img class="flyer pix" src="birds/${b.id}.png" alt="">`); actors.append(f); return f; });
  const sp = Site.el(pack.outerHTML); sp.querySelector(".tear").style.left = 0; actors.append(sp);
  const srow = Site.el(`<div class="row">${flock.slice(0, 5).map(b => Site.cardHtml(b, Site.name(b))).join("")}</div>`); actors.append(srow);
  const scards = [...srow.children];
  const landers = flock.slice(0, 5).map(b => { const f = Site.el(`<img class="lander pix" src="birds/${b.id}.png" alt="">`); actors.append(f); return f; });
  l1.style.backgroundImage = `url(${realm.cover})`;
  let shownRealm = realmId, beat = -1;
  const setCover = id => { if (id === shownRealm) return; shownRealm = id; l2.style.backgroundImage = `url(${D.realms[id].cover})`; l2.style.opacity = 1; setTimeout(() => { l1.style.backgroundImage = l2.style.backgroundImage; l2.style.opacity = 0; }, 400);
    sp.querySelector(".realm").textContent = realmName(id); sp.querySelector(".pic").style.backgroundImage = `url(${D.realms[id].cover})`; };
  Site.scrub(story, p => {
    const b = p < .24 ? 0 : p < .5 ? 1 : p < .72 ? 2 : 3;
    if (b !== beat) { beat = b; cap.querySelector(".step").textContent = `${b + 1} / 4`; cap.querySelector("h2").textContent = t(`s${b + 1}h`); cap.querySelector("p").textContent = t(`s${b + 1}p`); story.setAttribute("aria-label", t(`s${b + 1}h`)); }
    l1.style.transform = `translateY(${-p * 6}%) scale(${1 + p * .12})`;
    // 1: the flock flies in and circles
    const a = Site.seg(p, 0, .2), gone = Site.seg(p, .24, .3);
    flyers.forEach((f, i) => {
      const ang = i / flyers.length * Math.PI * 2 + p * 6, from = i % 2 ? 140 : -40;
      const x = 50 + Math.cos(ang) * 28, y = 50 + Math.sin(ang) * 14;
      f.style.left = (from + (x - from) * a) + "%"; f.style.top = (y + (1 - a) * -30) + "%"; f.style.opacity = 1 - gone;
      f.style.transform = `translate(-50%,-50%) scaleX(${Math.sin(ang) > 0 ? -1 : 1})`;
    });
    // 2: the pack drops in and its cover turns through the eight realms
    const d = Site.seg(p, .26, .34);
    sp.style.opacity = d * (1 - Site.seg(p, .66, .7));
    sp.style.transform = `translate(-50%, ${-50 - (1 - d) * 120}%) rotate(${(1 - d) * -10}deg)`;
    if (p >= .24 && p < .5) setCover(D.order[Math.min(D.order.length - 1, Math.floor(Site.seg(p, .32, .5) * D.order.length))]);
    else setCover(realmId);
    // 3: shake, then tear
    const shake = Site.seg(p, .5, .6);
    if (shake > 0 && shake < 1) sp.style.transform += ` rotate(${Math.sin(shake * 40) * 4}deg)`;
    const tr = Site.seg(p, .6, .66);
    sp.querySelector(".tear").style.width = tr * 100 + "%";
    sp.querySelector(".flap").style.transform = tr >= 1 ? "translate(40%,-160%) rotate(-28deg)" : "";
    sp.querySelector(".flap").style.opacity = tr >= 1 ? 0 : 1;
    scards.forEach((c, i) => {
      const inn = Site.seg(p, .64 + i * .015, .68 + i * .015), fl = Site.seg(p, .7 + i * .015, .73 + i * .015), out = Site.seg(p, .8, .84);
      c.style.opacity = inn * (1 - out); c.style.transform = `translateY(${(1 - inn) * 140}%) rotateY(${fl * 180}deg)`;
    });
    // 4: the cards' birds hop down into the meadow
    landers.forEach((f, i) => {
      const l = Site.seg(p, .82 + i * .02, .88 + i * .02);
      f.style.opacity = l; f.style.left = (14 + i * 17) + "%"; f.style.bottom = (8 + (i % 2) * 6 + Math.sin(l * Math.PI) * 14) + "%";
    });
    end.classList.toggle("on", p > .94);
  });
})();
