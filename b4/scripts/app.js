/* ==========================================================================
   Alraedah Invest, B4 Explainer videos, app
   Tabbed UI, one video at a time. Per-video sections: script, storyboard,
   assets. Copy-to-clipboard for VO and full script. Download buttons.
   ========================================================================== */

(function () {
  'use strict';

  const { videos } = window.AInvestB4;

  function escapeHTML(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function nl2br(s) {
    return escapeHTML(s).replace(/\n/g, '<br>');
  }

  /** Build the script markdown (for copy-to-clipboard and the download file). */
  function buildScriptMarkdown(video) {
    const header = [
      `# Video ${video.code}, ${video.title}`,
      ``,
      `Runtime: ${video.runtime}s.`,
      `Audience: ${video.audience}`,
      `Synopsis: ${video.synopsis}`,
      ``,
      `## Script (timecoded AV)`,
      ``,
      `| Time | Video (composition, motion, on-screen text) | Audio (VO, SFX) |`,
      `| --- | --- | --- |`
    ];
    const rows = video.frames.map(f => {
      const video_col = `**${f.composition}**<br>On-screen text: "${f.onScreenText.replace(/\n/g, ' / ')}"<br>Motion: ${f.motion}`;
      const audio_col = `VO: "${f.vo}"<br>SFX: ${f.audio}`;
      return `| ${f.time} | ${video_col} | ${audio_col} |`;
    });
    const voOnly = [
      ``,
      `## Voiceover only`,
      ``,
      video.script.vo.split('\n').map(line => `> ${line}`).join('\n')
    ];
    return header.concat(rows).concat(voOnly).join('\n');
  }

  /** Build the asset CSV (for the download file). */
  function buildAssetsCSV(video) {
    const header = ['asset_id', 'frame', 'type', 'description', 'source', 'status'];
    const rows = video.assets.map(a => [
      a.id, a.frame, a.type, a.description, a.source, a.status
    ]);
    const esc = (v) => {
      const s = String(v == null ? '' : v);
      return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    };
    return [header, ...rows].map(r => r.map(esc).join(',')).join('\n');
  }

  /** Download helper, creates a Blob and clicks a link. */
  function download(filename, mimeType, content) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /** Copy to clipboard with short "Copied" feedback on the button. */
  function wireCopyButton(btn, textFn) {
    btn.addEventListener('click', () => {
      const text = textFn();
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copied';
        btn.classList.add('is-copied');
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('is-copied');
        }, 1600);
      });
    });
  }

  /** Render the "coming next" placeholder for a video without content. */
  function renderPlaceholder(video) {
    return `
      <div class="video-placeholder">
        <p class="placeholder-kicker">Video ${video.code}, ${video.title}</p>
        <h2 class="placeholder-headline">Coming next.</h2>
        <p class="placeholder-body">${escapeHTML(video.synopsis)}</p>
        <p class="placeholder-meta">Audience: ${escapeHTML(video.audience)}</p>
        <p class="placeholder-note">Drafted after Video D is signed off. The same three-section structure (script, storyboard, assets) will apply.</p>
      </div>
    `;
  }

  /** Render the full video panel: header, script, storyboard, assets. */
  function renderVideo(video) {
    if (video.status !== 'done') return renderPlaceholder(video);

    const frameCards = video.frames.map(f => `
      <article class="frame-card">
        <header class="frame-head">
          <span class="frame-num">Frame ${f.n}</span>
          <span class="frame-time">${f.time}</span>
          <span class="frame-duration">${f.duration}s</span>
        </header>
        <div class="frame-wire" aria-label="Wireframe composition for frame ${f.n}">
          <div class="frame-wire-inner">
            <span class="frame-osd">${nl2br(f.onScreenText)}</span>
          </div>
          <p class="frame-wire-caption">${escapeHTML(f.composition)}</p>
        </div>
        <dl class="frame-meta">
          <dt>Motion</dt>    <dd>${escapeHTML(f.motion)}</dd>
          <dt>Audio</dt>     <dd>${escapeHTML(f.audio)}</dd>
          <dt>VO</dt>        <dd class="frame-vo">${escapeHTML(f.vo)}</dd>
        </dl>
      </article>
    `).join('');

    const scriptRows = video.frames.map(f => `
      <tr>
        <td class="col-time">${f.time}</td>
        <td class="col-video">
          <p class="video-comp">${escapeHTML(f.composition)}</p>
          <p class="video-osd"><span class="label">On-screen</span> ${nl2br(f.onScreenText)}</p>
          <p class="video-motion"><span class="label">Motion</span> ${escapeHTML(f.motion)}</p>
        </td>
        <td class="col-audio">
          <p class="audio-vo"><span class="label">VO</span> "${escapeHTML(f.vo)}"</p>
          <p class="audio-sfx"><span class="label">SFX</span> ${escapeHTML(f.audio)}</p>
        </td>
      </tr>
    `).join('');

    const assetRows = video.assets.map(a => `
      <tr>
        <td class="col-aid"><code>${escapeHTML(a.id)}</code></td>
        <td class="col-frame">${escapeHTML(a.frame)}</td>
        <td class="col-type">${escapeHTML(a.type)}</td>
        <td class="col-desc">${escapeHTML(a.description)}</td>
        <td class="col-source">${escapeHTML(a.source)}</td>
        <td class="col-status"><span class="status-pill status-${a.status.toLowerCase().replace(/\s+/g, '-')}">${escapeHTML(a.status)}</span></td>
      </tr>
    `).join('');

    return `
      <header class="video-head">
        <div class="video-head-titles">
          <p class="video-kicker">Video ${video.code}, ${video.runtime}-second explainer</p>
          <h2>${escapeHTML(video.title)}</h2>
          <p class="video-synopsis">${escapeHTML(video.synopsis)}</p>
          <p class="video-audience"><strong>Audience:</strong> ${escapeHTML(video.audience)}</p>
        </div>
        <div class="video-head-actions">
          <button type="button" class="btn-secondary" data-action="copy-vo">Copy VO</button>
          <button type="button" class="btn-secondary" data-action="copy-script">Copy full script</button>
          <button type="button" class="btn-primary" data-action="download-script">Download .md</button>
          <button type="button" class="btn-primary" data-action="download-assets">Download .csv</button>
        </div>
      </header>

      <section class="video-section" aria-labelledby="heading-script-${video.id}">
        <h3 id="heading-script-${video.id}" class="section-heading">Script</h3>
        <div class="script-table-wrap">
          <table class="script-table">
            <thead>
              <tr>
                <th class="col-time">Time</th>
                <th class="col-video">Video</th>
                <th class="col-audio">Audio</th>
              </tr>
            </thead>
            <tbody>${scriptRows}</tbody>
          </table>
        </div>
      </section>

      <section class="video-section" aria-labelledby="heading-storyboard-${video.id}">
        <h3 id="heading-storyboard-${video.id}" class="section-heading">Storyboard</h3>
        <p class="section-subheading">Wireframe level. Composition, on-screen text, and motion notes for the animator. Finished illustration is produced in animation.</p>
        <div class="frame-grid">${frameCards}</div>
      </section>

      <section class="video-section" aria-labelledby="heading-assets-${video.id}">
        <h3 id="heading-assets-${video.id}" class="section-heading">Assets</h3>
        <p class="section-subheading">Production manifest. Cross this list with the animation vendor's proposal.</p>
        <div class="assets-table-wrap">
          <table class="assets-table">
            <thead>
              <tr>
                <th class="col-aid">ID</th>
                <th class="col-frame">Frame</th>
                <th class="col-type">Type</th>
                <th class="col-desc">Description</th>
                <th class="col-source">Source</th>
                <th class="col-status">Status</th>
              </tr>
            </thead>
            <tbody>${assetRows}</tbody>
          </table>
        </div>
      </section>
    `;
  }

  function wireActions(video, panelEl) {
    const copyVO    = panelEl.querySelector('[data-action="copy-vo"]');
    const copyScr   = panelEl.querySelector('[data-action="copy-script"]');
    const dlScript  = panelEl.querySelector('[data-action="download-script"]');
    const dlAssets  = panelEl.querySelector('[data-action="download-assets"]');
    if (!copyVO || video.status !== 'done') return;

    wireCopyButton(copyVO, () => video.script.vo);
    wireCopyButton(copyScr, () => buildScriptMarkdown(video));

    dlScript.addEventListener('click', () => {
      download(`video-${video.id}-script.md`, 'text/markdown', buildScriptMarkdown(video));
    });
    dlAssets.addEventListener('click', () => {
      download(`video-${video.id}-assets.csv`, 'text/csv', buildAssetsCSV(video));
    });
  }

  function renderActive(state) {
    const video = videos[state.videoIndex];
    const panel = document.getElementById('panel');
    panel.innerHTML = renderVideo(video);
    wireActions(video, panel);
  }

  function refreshTabs(state) {
    document.querySelectorAll('.video-tab').forEach((el, i) => {
      el.classList.toggle('is-active', i === state.videoIndex);
      el.setAttribute('aria-selected', i === state.videoIndex ? 'true' : 'false');
    });
  }

  function buildTabs(state, onSelect) {
    const wrap = document.getElementById('video-tabs');
    videos.forEach((v, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'video-tab';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === state.videoIndex ? 'true' : 'false');
      btn.innerHTML = `
        <span class="video-tab-code">${v.code}</span>
        <span class="video-tab-title">${v.title}</span>
        ${v.status === 'done'
          ? '<span class="video-tab-status">· Ready</span>'
          : '<span class="video-tab-status muted">· Coming next</span>'}
      `;
      btn.addEventListener('click', () => { state.videoIndex = i; onSelect(); });
      wrap.appendChild(btn);
    });
  }

  function init() {
    // Default to the first video that is "done", else index 0
    const defaultIndex = Math.max(0, videos.findIndex(v => v.status === 'done'));
    const state = { videoIndex: defaultIndex };
    const refresh = () => { refreshTabs(state); renderActive(state); };

    buildTabs(state, refresh);
    refresh();

    document.getElementById('video-tabs').addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      state.videoIndex = (state.videoIndex + dir + videos.length) % videos.length;
      refresh();
      document.querySelectorAll('.video-tab')[state.videoIndex].focus();
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
