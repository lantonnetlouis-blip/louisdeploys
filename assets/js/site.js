/* Louis Deploys OS — interactions du site. Aucune dépendance. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Copie ---------- */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () { return legacyCopy(text); });
    }
    return legacyCopy(text);
  }
  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, text.length);
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      if (ok) { resolve(); } else { reject(new Error('copy')); }
    });
  }
  function sparks(el) {
    if (reduceMotion) return;
    var r = el.getBoundingClientRect();
    for (var i = 0; i < 8; i++) {
      var s = document.createElement('span');
      s.className = 'ld-spark';
      s.setAttribute('aria-hidden', 'true');
      s.textContent = '★';
      s.style.left = (r.left + r.width / 2) + 'px';
      s.style.top = (r.top + r.height / 2) + 'px';
      var a = (i / 8) * Math.PI * 2;
      s.style.setProperty('--dx', Math.round(Math.cos(a) * 90) + 'px');
      s.style.setProperty('--dy', Math.round(Math.sin(a) * 55) + 'px');
      document.body.appendChild(s);
      setTimeout(function (n) { n.remove(); }, 750, s);
    }
  }
  document.querySelectorAll('[data-copy-target]').forEach(function (btn) {
    var label = btn.textContent.trim();
    var status = document.getElementById('copy-status');
    btn.addEventListener('click', function () {
      var src = document.getElementById(btn.getAttribute('data-copy-target'));
      if (!src) return;
      copyText(src.innerText.trim()).then(function () {
        btn.classList.add('is-copied');
        btn.textContent = 'Copié !';
        if (status) status.textContent = 'Copié dans le presse-papier';
        sparks(btn);
        clearTimeout(btn._t);
        btn._t = setTimeout(function () {
          btn.classList.remove('is-copied');
          btn.textContent = label;
          if (status) status.textContent = '';
        }, 1800);
      }, function () {
        btn.textContent = 'Sélectionne le texte';
        var range = document.createRange();
        range.selectNodeContents(src);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        setTimeout(function () { btn.textContent = label; }, 2200);
      });
    });
  });

  /* ---------- Mots à remplacer dans les prompts : [SUJET] ---------- */
  document.querySelectorAll('.ld-prompt').forEach(function (pre) {
    if (pre.querySelector('mark')) return;
    var html = pre.innerHTML;
    var marked = html.replace(/\[[A-ZÀ-ÖØ-Ý0-9 _'’-]{2,}\]/g, function (m) { return '<mark>' + m + '</mark>'; });
    if (marked !== html) pre.innerHTML = marked;
  });

  /* ---------- Apparition au scroll ---------- */
  var reveal = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveal.forEach(function (el) { io.observe(el); });
  } else {
    reveal.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Horloge de la barre des tâches ---------- */
  var clock = document.getElementById('ld-clock');
  function tick() {
    var d = new Date();
    clock.textContent = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
  }
  if (clock) { tick(); setInterval(tick, 20000); }

  /* ---------- Easter egg : l'éclair ---------- */
  var name = document.getElementById('ld-name');
  if (name) {
    var busy = false;
    name.addEventListener('click', function () {
      if (busy) return;
      busy = true;
      document.body.classList.remove('is-storm');
      void document.body.offsetWidth;
      document.body.classList.add('is-storm');
      setTimeout(function () { document.body.classList.remove('is-storm'); busy = false; }, 1450);
    });
  }

  /* ---------- Fenêtre qu'on ne peut pas fermer ---------- */
  document.querySelectorAll('[data-wiggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var win = btn.closest('.ld-window');
      if (!win) return;
      win.classList.remove('is-wiggle');
      void win.offsetWidth;
      win.classList.add('is-wiggle');
    });
  });
})();
