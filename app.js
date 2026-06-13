    const COC = "Chamber of Commerce";
    const DATA = [
      { rank:1, name:"Clifton Commons", id:2932, region:"NJ", addr:"395 Route 3 East, Clifton, NJ 07014", opened:1999, dist:12.4, rating:4.6, reviews:3470, rev:5.00, cafe:true, close:5.00, score:4.80, src:{l:COC,u:"https://www.chamberofcommerce.com/business-directory/new-jersey/clifton/hobby-store/2003199557-barnes-noble"} },
      { rank:2, name:"Yonkers", id:2889, region:"NY", addr:"Central Plaza, 2614 Central Park Ave, Yonkers, NY 10710", opened:1998, dist:21.6, rating:4.5, reviews:1707, rev:4.33, cafe:true, close:4.39, score:4.43, src:{l:COC,u:"https://www.chamberofcommerce.com/business-directory/new-york/yonkers/cafe/2000049568-barnes-noble"} },
      { rank:3, name:"Menlo Park Mall", id:2162, region:"NJ", addr:"55 Parsonage Road, Edison, NJ 08837", opened:2003, dist:20.6, rating:4.5, reviews:1320, rev:4.09, cafe:true, close:4.46, score:4.41, src:{l:"Wanderlog",u:"https://wanderlog.com/place/details/15872997/barnes--noble"} },
      { rank:4, name:"East Brunswick", id:2924, region:"NJ", addr:"Brunswick Square Mall, 753 Rt 18, East Brunswick, NJ 08816", opened:1999, dist:27.5, rating:4.5, reviews:1293, rev:4.07, cafe:true, close:4.00, score:4.26, src:{l:COC,u:"https://www.chamberofcommerce.com/business-directory/new-jersey/east-brunswick/book-store/2005250376-barnes-noble"} },
      { rank:5, name:"Morris Plains", id:2980, region:"NJ", addr:"1940 Route 10 West, Morris Plains, NJ 07950", opened:2001, dist:27.3, rating:4.5, reviews:1253, rev:4.04, cafe:true, close:4.01, score:4.26, src:{l:COC,u:"https://www.chamberofcommerce.com/business-directory/new-jersey/morris-plains/book-store/2003499390-barnes-noble"} },
      { rank:6, name:"Palisades", id:2905, region:"NY", addr:"Palisades Center, 4416 Palisades Center Dr, West Nyack, NY 10994", opened:1998, dist:27.3, rating:4.5, reviews:1166, rev:3.97, cafe:true, close:4.02, score:4.25, src:{l:COC,u:"https://www.chamberofcommerce.com/business-directory/new-york/west-nyack/book-store/2000050419-barnes-noble"} },
      { rank:7, name:"Freehold", id:2609, region:"NJ", addr:"3981 US Hwy 9, Freehold, NJ 07728", opened:1995, dist:33.7, rating:4.6, reviews:1183, rev:3.99, cafe:false, close:3.59, score:4.17, src:{l:"Bookstore-USA",u:"https://bookstore-usa.nears.me/listings/united-states/new-jersey/freehold/trusted-barnes-noble-childrens-bookstore-in-freehold-new-jersey/"} },
      { rank:8, name:"Somerset Shopping Center", id:2140, region:"NJ", addr:"319 Route 202/206, Bridgewater, NJ 08807", opened:2002, dist:34.0, rating:4.5, reviews:1148, rev:3.96, cafe:true, close:3.57, score:4.11, src:{l:COC,u:"https://www.chamberofcommerce.com/business-directory/new-jersey/bridgewater/book-store/36496781-barnes-noble"} },
      { rank:9, name:"Paramus", id:3448, region:"NJ", addr:"Fashion Center, 634 N State Route 17, Paramus, NJ 07652", opened:2023, dist:19.3, rating:4.6, reviews:146, rev:2.02, cafe:true, close:4.55, score:4.07, src:{l:COC,u:"https://www.chamberofcommerce.com/business-directory/new-jersey/paramus/book-store/2026700887-barnes-noble"} },
      { rank:10, name:"Holmdel", id:3421, region:"NJ", addr:"Commons at Holmdel, 2130 Route 35, Holmdel, NJ 07733", opened:2022, dist:21.1, rating:4.5, reviews:192, rev:2.28, cafe:true, close:4.42, score:4.03, src:{l:"Bookstore-USA",u:"https://bookstore-usa.nears.me/listings/united-states/new-jersey/holmdel/trusted-barnes-noble-childrens-bookstore-in-holmdel-new-jersey/"} },
      { rank:11, name:"Mohegan Lake", id:2897, region:"NY", addr:"Cortlandt Town Center, 3089 E Main St, Mohegan Lake, NY 10547", opened:1997, dist:43.8, rating:4.6, reviews:675, rev:3.46, cafe:false, close:2.92, score:3.87, src:{l:COC,u:"https://www.chamberofcommerce.com/business-directory/new-york/mohegan-lake/book-store/2000751587-barnes-noble"} },
      { rank:12, name:"Union Plaza", id:3424, region:"NJ", addr:"2401 US Highway 22 W STE 2401N, Union, NJ 07083", opened:2023, dist:16.2, rating:4.2, reviews:94, rev:1.61, cafe:false, close:4.75, score:3.85, src:{l:COC,u:"https://www.chamberofcommerce.com/business-directory/new-jersey/union/gift-shop/2025089859-barnes-noble"} },
      { rank:13, name:"Newburgh Crossing", id:2215, region:"NY", addr:"1245 Route 300 (Union Ave), Newburgh, NY 12550", opened:2005, dist:56.1, rating:4.6, reviews:1534, rev:4.23, cafe:true, close:2.10, score:3.78, src:{l:COC,u:"https://www.chamberofcommerce.com/business-directory/new-york/newburgh/book-store/2004838421-barnes-noble"} },
      { rank:14, name:"Woodland Park", id:1977, region:"NJ", addr:"Plaza 46, 1156 Route 46 West, Woodland Park, NJ 07424", opened:1993, dist:17.0, rating:4.6, reviews:21, rev:0.20, cafe:true, close:4.69, score:3.75, src:{l:"BusinessYab",u:"https://businessyab.com/explore/united_states/new_jersey/passaic_county/woodland_park/barnes-noble-973-812-0180.html"} },
      { rank:15, name:"Poughkeepsie", id:2886, region:"NY", addr:"2518 South Road, Poughkeepsie, NY 12601", opened:1997, dist:67.0, rating:4.6, reviews:1640, rev:4.30, cafe:true, close:1.38, score:3.57, src:{l:COC,u:"https://www.chamberofcommerce.com/business-directory/new-york/poughkeepsie/cafe/7864216-barnes-noble"} },
      { rank:16, name:"Ledgewood", id:3468, region:"NJ", addr:"Ledgewood Commons, 461 State Route 10 Bldg B300, Ledgewood, NJ 07852", opened:2024, dist:36.8, rating:4.5, reviews:17, rev:0.00, cafe:false, close:3.39, score:3.27, src:{l:COC,u:"https://www.chamberofcommerce.com/business-directory/new-jersey/ledgewood/book-store/2027778998-barnes-noble"} },
      { rank:17, name:"Kings Mall", id:3405, region:"NY", addr:"1200 Ulster Avenue, Kingston, NY 12401", opened:2021, dist:87.8, rating:4.3, reviews:92, rev:1.59, cafe:true, close:0.00, score:2.47, src:{l:"Bookstore-USA",u:"https://bookstore-usa.nears.me/listings/united-states/new-york/kingston-3/trusted-barnes-noble-book-cafe-in-kingston-new-york/"} },
      { rank:null, name:"The Shops at Riverside", id:3311, region:"NJ", addr:"390 Hackensack Avenue, Hackensack, NJ 07601", opened:2018, dist:14.8, rating:null, reviews:null, rev:null, cafe:true, close:null, score:null, src:null },
      { rank:null, name:"Clark Commons", id:3558, region:"NJ", addr:"1255 Raritan Rd #710, Clark, NJ 07066", opened:2025, dist:17.1, rating:null, reviews:null, rev:null, cafe:false, close:null, score:null, src:null },
      { rank:null, name:"Livingston", id:2340, region:"NJ", addr:"112 Eisenhower Parkway, Livingston, NJ 07039", opened:2008, dist:20.0, rating:null, reviews:null, rev:null, cafe:true, close:null, score:null, src:null },
      { rank:null, name:"Livingston", id:3590, region:"NJ", addr:"Livingston Shopping Center, 530 W Mt Pleasant Ave Unit A, Livingston, NJ 07039", opened:2026, dist:20.1, rating:null, reviews:null, rev:null, cafe:true, close:null, score:null, src:null, soon:"Opens Aug 2026" },
      { rank:null, name:"Eastchester", id:3304, region:"NY", addr:"Vernon Hills Shopping Center, 680 Post Road, Scarsdale, NY 10583", opened:2016, dist:21.4, rating:null, reviews:null, rev:null, cafe:true, close:null, score:null, src:null },
      { rank:null, name:"Wayne", id:3626, region:"NJ", addr:"1308 Route 23, Wayne, NJ 07470", opened:2026, dist:21.9, rating:null, reviews:null, rev:null, cafe:true, close:null, score:null, src:null, soon:"Opens Nov 2026" },
      { rank:null, name:"Hartsdale", id:3445, region:"NY", addr:"Dalewood II, 381 North Central Ave #371, Hartsdale, NY 10530", opened:2023, dist:25.5, rating:null, reviews:null, rev:null, cafe:false, close:null, score:null, src:null },
      { rank:null, name:"East Brunswick", id:3591, region:"NJ", addr:"Brunswick Square, 755 State Route 18 Suite N119, East Brunswick, NJ 08816", opened:2026, dist:27.7, rating:null, reviews:null, rev:null, cafe:true, close:null, score:null, src:null, soon:"Opens Nov 2026" },
      { rank:null, name:"Monmouth Square", id:3422, region:"NJ", addr:"180 State Route 35 Suite 2002, Eatontown, NJ 07724", opened:2024, dist:28.1, rating:null, reviews:null, rev:null, cafe:true, close:null, score:null, src:null },
      { rank:null, name:"Mount Kisco", id:3488, region:"NY", addr:"55-59 S. Moger Avenue, Mount Kisco, NY 10549", opened:2024, dist:38.0, rating:null, reviews:null, rev:null, cafe:true, close:null, score:null, src:null },
      { rank:null, name:"Princeton", id:2368, region:"NJ", addr:"Market Fair, 3535 US Highway 1 Suite 400, Princeton, NJ 08540", opened:2013, dist:43.9, rating:null, reviews:null, rev:null, cafe:true, close:null, score:null, src:null },
      { rank:null, name:"Brick", id:2803, region:"NJ", addr:"44 Brick Plaza, Brick, NJ 08723", opened:1996, dist:44.7, rating:null, reviews:null, rev:null, cafe:true, close:null, score:null, src:null },
      { rank:null, name:"Hamilton", id:2217, region:"NJ", addr:"The Hamilton Marketplace, 425 Marketplace Blvd, Hamilton, NJ 08691", opened:2004, dist:48.7, rating:null, reviews:null, rev:null, cafe:true, close:null, score:null, src:null },
      { rank:null, name:"Middletown", id:3624, region:"NY", addr:"Galleria at Crystal Run, 1 Galleria Drive D110, Middletown, NY 10941", opened:2026, dist:56.1, rating:null, reviews:null, rev:null, cafe:true, close:null, score:null, src:null, soon:"Opens Nov 2026" }
    ];

    const storeUrl = id => "https://stores.barnesandnoble.com/store/" + id;
    const regionName = r => r === "NJ" ? "New Jersey" : "Hudson Valley";
    const fmt = n => n == null ? "" : Number(n).toLocaleString();
    const scoreClass = s => s == null ? "s-lo" : s >= 4.4 ? "s-hi" : s >= 4.0 ? "s-mid" : "s-lo";

    /* ---- Gallery (top 3, fixed) ---- */
    function renderGallery() {
      const tags = ["Top pick", "Runner-up", "Also strong"];
      const top = DATA.filter(d => d.score != null).slice(0, 3);
      document.getElementById("gallery").innerHTML = top.map((d, i) => `
        <article class="gcard${i === 0 ? " top" : ""}">
          <div class="gtop">
            <span class="gtag">${tags[i]}</span>
            <span class="grank">No. ${d.rank}</span>
          </div>
          <h3 class="gname"><a href="${storeUrl(d.id)}" target="_blank" rel="noopener">${d.name}</a></h3>
          <p class="gaddr">${d.addr}</p>
          <div class="gmeta">
            <div><p class="lbl">Distance</p><p class="val">${d.dist} mi</p></div>
            <div><p class="lbl">Rating</p><p class="val"><span class="star">★</span>${d.rating} · ${fmt(d.reviews)}</p></div>
            <div><p class="lbl">Region</p><p class="val" style="font-weight:600">${regionName(d.region)}</p></div>
            <div><p class="lbl">Café</p><p class="val">${d.cafe ? "Yes" : "No"}</p></div>
          </div>
          <div class="gscore">
            <span class="gs-lbl">Match score</span>
            <b>${d.score.toFixed(2)}</b>
          </div>
        </article>`).join("");
    }

    /* ---- Table ---- */
    const COLS = [
      { key:"rank",   label:"#",         num:true,  align:"r" },
      { key:"name",   label:"Location",  num:false },
      { key:"region", label:"Region",    num:false },
      { key:"opened", label:"Opened",    num:true,  align:"r" },
      { key:"dist",   label:"Distance",  num:true,  align:"r" },
      { key:"rating", label:"Rating",    num:true,  align:"r" },
      { key:"rev",    label:"Reviews idx", num:true, align:"r" },
      { key:"cafe",   label:"Café",      num:false },
      { key:"close",  label:"Closeness", num:true,  align:"r" },
      { key:"score",  label:"Score",     num:true,  align:"r" }
    ];

    const DEFAULT_VISIBLE_ROWS = 16;
    let state = { sortKey:"score", sortDir:"desc", search:"", filter:"all", expanded:false };

    function renderHead() {
      document.getElementById("head-row").innerHTML = COLS.map(c => {
        const active = state.sortKey === c.key;
        const arr = active ? (state.sortDir === "asc" ? "▲" : "▼") : "";
        return `<th scope="col" class="${c.align === "r" ? "r" : ""}"${active ? ` aria-sort="${state.sortDir === "asc" ? "ascending" : "descending"}"` : ""}>
          <button data-key="${c.key}" type="button">${c.label}<span class="arr">${arr}</span></button></th>`;
      }).join("");
      document.querySelectorAll("#head-row button").forEach(b =>
        b.addEventListener("click", () => sortBy(b.dataset.key)));
    }

    function sortBy(key) {
      if (state.sortKey === key) state.sortDir = state.sortDir === "asc" ? "desc" : "asc";
      else { state.sortKey = key; state.sortDir = (key === "name" || key === "region") ? "asc" : "desc"; }
      renderHead(); renderBody();
    }

    function passFilter(d) {
      if (state.filter === "scored") return d.score != null;
      if (state.filter === "cafe") return d.cafe;
      if (state.filter === "nj") return d.region === "NJ";
      if (state.filter === "ny") return d.region === "NY";
      return true;
    }
    function passSearch(d) {
      const q = state.search.trim().toLowerCase();
      if (!q) return true;
      return (d.name + " " + d.addr + " " + d.id + " " + regionName(d.region)).toLowerCase().includes(q);
    }

    function compare(a, b) {
      const k = state.sortKey, dir = state.sortDir === "asc" ? 1 : -1;
      let av = a[k], bv = b[k];
      if (k === "cafe") { av = a.cafe ? 1 : 0; bv = b.cafe ? 1 : 0; }
      const aNull = av == null, bNull = bv == null;
      if (aNull && bNull) return 0;
      if (aNull) return 1;          // nulls always sink
      if (bNull) return -1;
      if (typeof av === "string") return av.localeCompare(bv) * dir;
      return (av - bv) * dir;
    }

    function renderLocationRow(d) {
      const cafePill = d.cafe
        ? `<span class="pill cafe dot">Café</span>`
        : `<span class="pill nocafe dot">No café</span>`;
      const regionPill = `<span class="pill ${d.region === "NJ" ? "nj" : "ny"} dot">${regionName(d.region)}</span>`;
      const ratingCell = d.rating == null
        ? `<span class="na">—</span>`
        : `<div class="num"><span class="star">★</span><span class="rating-num">${d.rating}</span></div>
           <div class="rev-sub">${d.src ? `<a href="${d.src.u}" target="_blank" rel="noopener">${fmt(d.reviews)} reviews</a>` : fmt(d.reviews) + " reviews"}</div>`;
      const soon = d.soon ? ` <span class="pill soon" style="margin-left:6px">${d.soon}</span>` : "";
      return `
        <tr class="${d.score == null ? "unscored" : ""}">
          <td class="rank">${d.rank == null ? "·" : d.rank}</td>
          <td>
            <div class="loc-name"><a href="${storeUrl(d.id)}" target="_blank" rel="noopener">${d.name}</a>${soon}</div>
            <div class="loc-addr">${d.addr}</div>
          </td>
          <td>${regionPill}</td>
          <td class="r num">${d.opened}</td>
          <td class="r num">${d.dist}</td>
          <td class="r">${ratingCell}</td>
          <td class="r num dim">${d.rev == null ? "—" : d.rev.toFixed(2)}</td>
          <td>${cafePill}</td>
          <td class="r num dim">${d.close == null ? "—" : d.close.toFixed(2)}</td>
          <td class="r">${d.score == null ? `<span class="na">unscored</span>` : `<span class="score-pill ${scoreClass(d.score)}">${d.score.toFixed(2)}</span>`}</td>
        </tr>`;
    }

    function renderRevealRow(hiddenCount) {
      const expanded = state.expanded;
      const label = expanded
        ? "Show fewer"
        : `Show <span class="reveal-count">${hiddenCount}</span> more location${hiddenCount === 1 ? "" : "s"}`;
      const chev = `<svg class="reveal-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
      return `
        <tr class="reveal-row">
          <td colspan="${COLS.length}">
            <div class="reveal">
              <button class="reveal-btn" type="button" data-action="toggle-rows" aria-expanded="${expanded ? "true" : "false"}" aria-controls="body">
                <span>${label}</span>${chev}
              </button>
            </div>
          </td>
        </tr>`;
    }

    function renderBody() {
      const rows = DATA.filter(d => passFilter(d) && passSearch(d));
      // keep scored above unscored, then apply the active sort within each group
      const scored = rows.filter(d => d.score != null).sort(compare);
      const unscored = rows.filter(d => d.score == null).sort(compare);
      const ordered = [...scored, ...unscored];
      const hasActiveNarrowing = state.filter !== "all" || state.search.trim().length > 0;
      const foldable = !hasActiveNarrowing && ordered.length > DEFAULT_VISIBLE_ROWS;
      const hiddenCount = Math.max(ordered.length - DEFAULT_VISIBLE_ROWS, 0);
      const visibleRows = foldable && !state.expanded ? ordered.slice(0, DEFAULT_VISIBLE_ROWS) : ordered;

      document.getElementById("body").innerHTML =
        visibleRows.map(renderLocationRow).join("") + (foldable ? renderRevealRow(hiddenCount) : "");

      const toggle = document.querySelector("[data-action='toggle-rows']");
      if (toggle) {
        toggle.addEventListener("click", () => {
          state.expanded = !state.expanded;
          renderBody();
          document.querySelector("[data-action='toggle-rows']")?.focus({ preventScroll: true });
        });
      }

      const n = ordered.length;
      const q = state.search.trim();
      const filterLabel = { scored:"scored", cafe:"with cafés", nj:"in New Jersey", ny:"in the Hudson Valley" }[state.filter];
      const shown = foldable && !state.expanded ? visibleRows.length : n;
      document.getElementById("count").textContent =
        `Showing ${shown} of ${DATA.length} location${shown === 1 ? "" : "s"}` +
        (q ? ` matching “${q}”` : "") +
        (filterLabel ? `${q ? " and " : " "}${filterLabel}` : "") +
        (foldable && !state.expanded ? `; ${hiddenCount} more folded below` : "") + ".";
    }

    /* ---- Chips & search ---- */
    function setCounts() {
      const c = sel => DATA.filter(sel).length;
      document.getElementById("c-all").textContent = DATA.length;
      document.getElementById("c-scored").textContent = c(d => d.score != null);
      document.getElementById("c-cafe").textContent = c(d => d.cafe);
      document.getElementById("c-nj").textContent = c(d => d.region === "NJ");
      document.getElementById("c-ny").textContent = c(d => d.region === "NY");
    }
    document.getElementById("chips").addEventListener("click", e => {
      const btn = e.target.closest(".chip"); if (!btn) return;
      state.filter = btn.dataset.filter;
      document.querySelectorAll("#chips .chip").forEach(c =>
        c.setAttribute("aria-pressed", c === btn ? "true" : "false"));
      renderBody();
    });
    document.getElementById("search").addEventListener("input", e => {
      state.search = e.target.value; renderBody();
    });

    /* ---- Sources list ---- */
    function renderSources() {
      const items = [`<li><a href="https://stores.barnesandnoble.com/" target="_blank" rel="noopener">Official Barnes &amp; Noble store locator</a></li>`];
      DATA.forEach(d => {
        let li = `<li><a href="${storeUrl(d.id)}" target="_blank" rel="noopener">#${d.id} — ${d.name}</a>`;
        if (d.src) li += ` · <a href="${d.src.u}" target="_blank" rel="noopener">${d.src.l}</a>`;
        items.push(li + "</li>");
      });
      document.getElementById("sources").innerHTML = items.join("");
      document.getElementById("src-count").textContent = DATA.length + " stores · locator + per-row links";
    }

    renderGallery();
    setCounts();
    renderHead();
    renderBody();
    renderSources();
