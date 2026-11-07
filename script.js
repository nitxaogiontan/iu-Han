(() => {
  "use strict";
  const content = window.LOVE_CONTENT || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // Fill editable content from content.js.
  if (content.recipient) {
    document.title = `Gửi chị ${content.recipient} — một góc nhỏ của tụi mình`;
    const heroTitle = $("#heroTitle");
    if (heroTitle) heroTitle.innerHTML = `${escapeHTML(content.heroLead || `Chị ${content.recipient},`)}<br /><span>${escapeHTML(content.heroSubline || "em có cái này muốn gửi chị.")}</span>`;
    const modalTitle = $("#modalTitle");
    if (modalTitle) modalTitle.innerHTML = `Gửi chị <em>${escapeHTML(content.recipient)},</em>`;
  }
  if (content.intro) $("#heroIntro").textContent = content.intro;
  if (content.midQuote) $("#midQuote").textContent = `“${content.midQuote}”`;
  if (content.finalMessage) $("#finalMessage").textContent = content.finalMessage;
  if (content.surprise) $("#surpriseMessage p").textContent = content.surprise;

  const letterBody = $("#letterBody");
  (content.letter || []).forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    letterBody.appendChild(p);
  });

  const reasonsGrid = $("#reasonsGrid");
  (content.reasons || []).forEach((reason) => {
    const article = document.createElement("article");
    article.className = "reason-card reveal";
    article.innerHTML = `<div class="reason-top"><span class="reason-number">${escapeHTML(reason.number || "")}</span><span class="reason-icon" aria-hidden="true">${escapeHTML(reason.icon || "♡")}</span></div><h3>${escapeHTML(reason.title || "")}</h3><p>${escapeHTML(reason.text || "")}</p>`;
    reasonsGrid.appendChild(article);
  });

  const timeline = $("#timeline");
  (content.moments || []).forEach((moment) => {
    const article = document.createElement("article");
    article.className = "moment-card memory-card reveal";
    const imageMarkup = moment.image
      ? `<button class="moment-image memory-image shape-${escapeAttribute(moment.shape || "landscape")}" type="button" data-image="${escapeAttribute(moment.image)}" data-caption="${escapeAttribute(moment.title || "Một kỷ niệm")}" aria-label="Xem ảnh lớn: ${escapeAttribute(moment.title || "kỷ niệm")}"><img src="${escapeAttribute(moment.image)}" alt="${escapeAttribute(moment.imageAlt || moment.title || "Kỷ niệm")}" loading="lazy" /></button>`
      : `<div class="moment-image"><span>một mẩu ký ức ♡</span></div>`;
    article.innerHTML = `${imageMarkup}<div class="memory-copy"><span class="moment-date">${escapeHTML(moment.date || "")}</span><h3>${escapeHTML(moment.title || "")}</h3><p>${escapeHTML(moment.text || "")}</p></div>`;
    timeline.appendChild(article);
  });

  // Tap a memory photo to see it larger.
  const photoLightbox = $("#photoLightbox");
  const lightboxImage = $("#lightboxImage");
  const lightboxCaption = $("#lightboxCaption");
  const closePhotoLightbox = () => {
    photoLightbox.classList.remove("open");
    photoLightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("photo-open");
    lightboxImage.src = "";
  };
  $$(".memory-image").forEach((button) => {
    button.addEventListener("click", () => {
      lightboxImage.src = button.dataset.image;
      lightboxImage.alt = button.querySelector("img")?.alt || "Ảnh kỷ niệm";
      lightboxCaption.textContent = button.dataset.caption || "Một kỷ niệm";
      photoLightbox.classList.add("open");
      photoLightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("photo-open");
      $("#photoLightboxClose").focus();
    });
  });
  $("#photoLightboxClose").addEventListener("click", closePhotoLightbox);
  $("#photoLightboxBackdrop").addEventListener("click", closePhotoLightbox);

  // Scroll reveal, progress, and mobile navigation.
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => revealObserver.observe(el));

  const progress = $("#scrollProgress");
  const updateProgress = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  const menuToggle = $("#menuToggle");
  const mainNav = $("#mainNav");
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("open", !isOpen);
  });
  $$(".main-nav a").forEach((link) => link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("open");
  }));

  // Envelope opens the letter modal.
  const envelope = $("#envelopeButton");
  const modal = $("#letterModal");
  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    envelope.classList.remove("open");
  };
  const openModal = () => {
    envelope.classList.add("open");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    setTimeout(() => $("#modalClose").focus(), 100);
  };
  envelope.addEventListener("click", openModal);
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalBackdrop").addEventListener("click", closeModal);
  $("#readAgainButton").addEventListener("click", () => {
    document.querySelector("#letter").scrollIntoView({ behavior: "smooth" });
    setTimeout(openModal, 650);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
    if (event.key === "Escape" && photoLightbox.classList.contains("open")) closePhotoLightbox();
  });

  // Gift surprise.
  const giftButton = $("#giftButton");
  const surpriseMessage = $("#surpriseMessage");
  const giftCaption = $("#giftCaption");
  giftButton.addEventListener("click", () => {
    const opened = giftButton.classList.toggle("open");
    surpriseMessage.classList.toggle("show", opened);
    giftButton.setAttribute("aria-label", opened ? "Đóng hộp quà" : "Mở hộp quà");
    giftCaption.textContent = opened ? "chị đọc xong thì cất câu này nha ♡" : "bấm mở xem đi chị ♡";
  });

  // Music: the song is bundled with the website and never starts automatically.
  const audio = $("#audioElement");
  const musicToggle = $("#musicToggle");
  const musicTitle = $("#musicTitle");
  const musicStatus = $("#musicStatus");
  const musicProgress = $("#musicProgress");
  const songPlayButton = $("#songPlayButton");
  musicTitle.textContent = content.music?.title || "Vườn Mây Vừa Hay";

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remaining = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remaining}`;
  }

  if (content.music?.src) {
    audio.src = content.music.src;
    audio.load();
    musicToggle.disabled = false;
    musicStatus.textContent = `${content.music.artist || ""}${content.music.duration ? ` · ${content.music.duration}` : ""}`;
  } else {
    musicToggle.disabled = true;
    musicStatus.textContent = "chưa có tệp nhạc";
  }

  musicToggle.addEventListener("click", async () => {
    if (!audio.src) return;
    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        musicStatus.textContent = "không phát được bài nhạc";
      }
    } else {
      audio.pause();
    }
  });

  songPlayButton.addEventListener("click", () => musicToggle.click());

  audio.addEventListener("play", () => {
    musicToggle.classList.add("playing");
    document.body.classList.add("music-playing");
    musicToggle.setAttribute("aria-label", "Tạm dừng nhạc");
    songPlayButton.innerHTML = 'tạm dừng một chút <span>Ⅱ</span>';
  });
  audio.addEventListener("pause", () => {
    musicToggle.classList.remove("playing");
    document.body.classList.remove("music-playing");
    musicToggle.setAttribute("aria-label", "Phát nhạc");
    songPlayButton.innerHTML = 'nghe tiếp nha <span>♪</span>';
    if (audio.currentTime > 0 && !audio.ended) {
      musicStatus.textContent = `đã tạm dừng · ${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }
  });
  audio.addEventListener("timeupdate", () => {
    const percent = Number.isFinite(audio.duration) && audio.duration > 0
      ? (audio.currentTime / audio.duration) * 100
      : 0;
    musicProgress.style.width = `${percent}%`;
    if (!audio.paused && Number.isFinite(audio.duration)) {
      musicStatus.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }
  });
  audio.addEventListener("ended", () => {
    musicToggle.classList.remove("playing");
    document.body.classList.remove("music-playing");
    musicToggle.setAttribute("aria-label", "Phát nhạc");
    songPlayButton.innerHTML = 'nghe lại nha <span>↻</span>';
    musicStatus.textContent = "hết bài rồi · nghe lại nha chị";
    musicProgress.style.width = "0%";
  });
  audio.addEventListener("error", () => {
    musicStatus.textContent = "không đọc được tệp nhạc";
    musicToggle.disabled = true;
    songPlayButton.disabled = true;
  });

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 2600);
  }
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }
  function escapeAttribute(value) { return escapeHTML(value).replace(/`/g, "&#96;"); }
})();
