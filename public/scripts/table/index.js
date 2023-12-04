function O(h) {
  return h && h.type === "TreeRow";
}
function N(h) {
  return h && h.type === "AreaModelTree";
}
function be(h) {
  return h && h.type === "CheckboxColumnDef";
}
class X {
  constructor(e = -1, t = -1, o = -1, s = -1, i, r, l, n = 0, d = 0, a = 0, c = "") {
    this.rowIndex = e, this.rowTop = t, this.columnIndex = o, this.columnLeft = s, this.areaIdent = i, this.sideIdent = r, this.originalEvent = l, this.clickCount = n, this.draggingX = d, this.draggingY = a, this.action = c;
  }
  clone() {
    return new X(
      this.rowIndex,
      this.rowTop,
      this.columnIndex,
      this.columnLeft,
      this.areaIdent,
      this.sideIdent,
      this.originalEvent,
      this.clickCount,
      this.draggingX,
      this.draggingY,
      this.action
    );
  }
}
class F {
  constructor(e = ">", t = "", o = []) {
    this.content = e, this.style = t, this.classes = o;
  }
}
class ae {
  constructor(e = new F(
    ">",
    "transform: rotate(90deg) translate(66%, -66%); transform-origin: 0 0;",
    ["gt-table-tree-arrow-expanded"]
  ), t = new F(
    ">",
    "",
    ["ge-table-tree-arrow-collapsed"]
  ), o = new F(
    ">",
    "color:transparent;",
    ["gt-table-tree-arrow-hidden"]
  ), s = new F(
    "↕",
    "",
    ["gt-table-tree-arrow-expanded-all"]
  )) {
    this.arrowExpanded = e, this.arrowCollapsed = t, this.arrowPlaceholder = o, this.arrowExpandCollapseAll = s;
  }
}
class de {
  constructor(e = new F("↑", "", ["ge-header-sorted-asc"]), t = new F("↓", "", ["ge-header-sorted-desc"]), o = new F("↑", "color:transparent;", [])) {
    this.iconAsc = e, this.iconDesc = t, this.iconPlaceholder = o;
  }
}
class pe {
  constructor(e) {
    this.domService = e;
  }
  setStyle(e, t, o) {
    return this.domService.setStyle(e, t, o), e;
  }
  applyStyle(e, t) {
    for (const o in t)
      this.domService.setStyle(e, o, t[o]);
    return e;
  }
  applyDisplayNoneStyle(e) {
    return this.domService.setStyle(e, "display", "none"), e;
  }
  applyDisplayBlockStyle(e) {
    return this.domService.setStyle(e, "display", "block"), e;
  }
  applyStyleInPx(e, t) {
    return Object.entries(t).forEach(([o, s]) => this.domService.setStyle(e, o, s + "px")), e;
  }
  applyStylePosistionRelative(e) {
    return this.domService.setStyle(e, "position", "relative"), this.domService.setStyle(e, "overflow", "clip"), e;
  }
  applyStylePosistionAbsolute(e) {
    return this.domService.setStyle(e, "position", "absolute"), e;
  }
  applyStyleFullSize(e) {
    return this.domService.setStyle(e, "width", "100%"), this.domService.setStyle(e, "height", "100%"), e;
  }
  applyStyleOverflowAuto(e = "auto", t = "auto", o) {
    return this.domService.setStyle(o, "overflow-x", e), this.domService.setStyle(o, "overflow-y", t), o;
  }
  applyStyleNoPadding(e) {
    return this.domService.setStyle(e, "padding", "0"), this.domService.setStyle(e, "margin", "0"), this.domService.setStyle(e, "border", "0"), e;
  }
  appendRelativeChildDiv(e) {
    const t = this.applyStylePosistionRelative(
      this.applyStyleFullSize(
        this.applyStyleNoPadding(
          this.domService.createElement("div")
        )
      )
    );
    return this.domService.appendChild(e, t), this.applyStylePosistionAbsolute(e), { parent: e, child: t, cache: {} };
  }
  appendText(e, t) {
    const o = this.domService.createText(t);
    return this.domService.appendChild(e, o), o;
  }
  addClass(e, t) {
    return e.includes(" ") ? e.split(" ").forEach((o) => this.domService.addClass(t, o)) : this.domService.addClass(t, e), t;
  }
  removeClass(e, t) {
    return e.includes(" ") ? e.split(" ").forEach((o) => this.domService.removeClass(t, o)) : this.domService.removeClass(t, e), t;
  }
  addClasses(e, t) {
    if (e)
      for (const o of e)
        this.domService.addClass(t, o);
    return t;
  }
  setAttribute(e, t, o) {
    return t && o && this.domService.setAttribute(e, t, o), e;
  }
  createAreaDivWithClass(e, t, o, s) {
    const i = this.domService.createElement("div");
    return this.addClass(e, i), this.domService.setAttribute(i, "data-area", o), this.domService.setAttribute(i, "data-side", s), this.domService.appendChild(t, i), i;
  }
  createDivWithClass(e, t) {
    const o = this.domService.createElement("div");
    return this.addClass(e, o), this.domService.appendChild(t, o), o;
  }
  addRowDiv(e, t, o = -1, s, i, r = "") {
    const l = t.index ?? -1, n = this.getDivOrCreateDiv(l, e);
    if (this.domService.addClass(n, "ge-table-row-div"), this.domService.addClass(n, `ge-table-row-div-${t.index}`), s === "body" && i === "center") {
      const d = ((t == null ? void 0 : t.index) ?? 0) % 2 === 0 ? "even" : "odd";
      this.domService.addClass(n, `ge-table-row-${d}`);
    }
    if (this.domService.setStyle(n, "display", "clip"), this.domService.setStyle(n, "position", "absolute"), this.domService.setStyle(n, "left", `${t.left}px`), this.domService.setStyle(n, "top", `${t.top}px`), this.domService.setStyle(n, "width", `${t.width}px`), this.domService.setStyle(n, "height", `${t.height}px`), this.domService.setAttribute(n, "data-row-index", `${o}`), this.domService.setAttribute(n, "data-area", `${s}`), r) {
      const d = this.domService.createText(r);
      this.domService.appendChild(n, d);
    }
    return this.domService.appendChild(e.child, n), n;
  }
  addColumnDiv(e, t, o = -1, s = -1, i, r, l = "", n, d, a = void 0, c) {
    const u = d == null ? void 0 : d.treeOptions, m = d == null ? void 0 : d.showCheckboxWihoutExtraColumn, b = this.domService.createElement("div");
    this.domService.addClass(b, "ge-table-col-div"), this.domService.addClass(b, `ge-table-col-div-${t.index}`), this.domService.setAttribute(b, "data-col-index", `${t.index}`), this.domService.setAttribute(b, "data-row-index", `${o}`), this.domService.setAttribute(b, "data-area", `${i}`);
    const w = ((t == null ? void 0 : t.index) ?? 0) % 2 === 0 ? "even" : "odd";
    if (i === "body" && r === "center" && this.domService.addClass(b, `ge-table-column-${w}`), this.domService.setStyle(b, "display", "clip"), this.domService.setStyle(b, "position", "absolute"), this.domService.setStyle(b, "left", `${t.left}px`), this.domService.setStyle(b, "top", `${t.top}px`), this.domService.setStyle(b, "width", `${t.width}px`), this.domService.setStyle(b, "height", `${t.height}px`), n && n !== "none" && (this.domService.addClass(b, "ge-table-col-tree"), this.addArrowDiv(b, n, u, o, s, i)), m && s === 0 && a && this.addCheckboxToDiv(b, a, i, o), l) {
      const g = n !== "none" && s === 0;
      this.addLabelDiv(b, l, g, o, s, i);
    }
    return c && this.addSortedIcon(b, c, d == null ? void 0 : d.sortedOptions, s), this.domService.appendChild(e, b), b;
  }
  addCheckboxToDiv(e, t, o, s) {
    const i = this.domService.createElement("div"), r = t === "full" ? "checked" : "";
    return i.innerHTML = `
            <input
                type="checkbox"
                data-area="${o}"
                data-row-index="${s}"
                data-input-type="checkbox"
                ${r}
                class="ge-table-row-checkbox"> `, this.domService.setStyle(i, "display", "inline"), this.domService.setStyle(i, "width", "inherit"), this.domService.setAttribute(i, "data-row-index", `${s}`), this.domService.appendChild(e, i), i;
  }
  addLabelDiv(e, t = "", o = !1, s = -1, i = -1, r = "body") {
    const l = this.domService.createElement("div");
    if (this.domService.addClass(l, "ge-table-label-div"), this.domService.setStyle(l, "position", "relative"), this.domService.setStyle(l, "background", "transparent"), this.domService.setStyle(l, "width", "100%"), this.domService.setStyle(l, "height", "100%"), this.domService.setAttribute(l, "data-row-index", `${s}`), this.domService.setAttribute(l, "data-col-index", `${i}`), this.domService.setAttribute(l, "data-area", `${r}`), t)
      if (o) {
        const n = this.domService.createText(t);
        this.domService.appendChild(l, n);
      } else {
        const n = this.domService.createElement("div");
        this.domService.appendChild(l, n);
        const d = this.domService.createText(t);
        this.domService.addClass(n, "ge-table-label"), this.domService.appendChild(n, d), this.domService.setAttribute(n, "data-row-index", `${s}`), this.domService.setAttribute(n, "data-col-index", `${i}`), this.domService.setAttribute(n, "data-area", `${r}`);
      }
    return this.domService.appendChild(e, l), l;
  }
  addSortedIcon(e, t = "", o = new de(), s = -1) {
    const i = this.domService.createElement("div");
    this.domService.addClass(i, "ge-table-sorted-icon-div"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "top", "0"), this.domService.setStyle(i, "right", "0"), this.domService.setStyle(i, "width", "20px"), this.domService.setStyle(i, "background", "transparent"), this.domService.setStyle(i, "cursor", "pointer"), this.domService.setAttribute(i, "data-col-index", `${s}`), this.domService.setAttribute(i, "data-area", "header");
    let r;
    t === "asc" ? r = o.iconAsc : t === "desc" ? r = o.iconDesc : r = o.iconPlaceholder;
    const l = r.content, n = this.domService.createText(l);
    this.domService.appendChild(i, n), r.style && this.applyStyleString(i, r.style);
    for (const d of r.classes)
      this.domService.addClass(i, d);
    return this.domService.appendChild(e, i), i;
  }
  addArrowDiv(e, t = "none", o = new ae(), s = -1, i = -1, r = "body") {
    const l = this.domService.createElement("div");
    this.domService.addClass(l, "ge-table-tree-arrow-div"), this.domService.setStyle(l, "display", "inline-block"), this.domService.setStyle(l, "position", ""), this.domService.setStyle(l, "width", "20px"), this.domService.setStyle(l, "background", "transparent"), this.domService.setStyle(l, "cursor", "pointer"), this.domService.setAttribute(l, "data-row-index", `${s}`), this.domService.setAttribute(l, "data-col-index", `${i}`), this.domService.setAttribute(l, "data-area", `${r}`);
    let n;
    t === "expanded" ? n = o.arrowExpanded : t === "collapsed" ? n = o.arrowCollapsed : n = o.arrowPlaceholder;
    const d = n.content, a = this.domService.createText(d);
    this.domService.appendChild(l, a), n.style && this.applyStyleString(l, n.style);
    for (const c of n.classes)
      this.domService.addClass(l, c);
    return this.domService.appendChild(e, l), l;
  }
  addColumnBorderDivs(e, t, o, s, i) {
    if (e.verticalBorderVisible) {
      const r = `ge-table-${s}-${i}-vertical-border`;
      this.addVerticalBorder(o, t, r);
    }
    if (e.horizontalBorderVisible) {
      const r = `ge-table-${s}-${i}-horizontal-border`;
      this.addHorizontalBorder(o, t, r);
    }
    return t;
  }
  addHorizontalBorder(e, t, o = "ge-table-body-center-horizontal-border") {
    const s = this.domService.createElement("div");
    return this.domService.addClass(s, o), this.domService.setStyle(s, "display", "clip"), this.domService.setStyle(s, "position", "absolute"), this.domService.setStyle(s, "left", `${e.left}px`), this.domService.setStyle(s, "top", `${e.top}px`), this.domService.setStyle(s, "width", `${e.width}px`), this.domService.setStyle(s, "height", "1px"), this.domService.appendChild(t, s), s;
  }
  addFocusBorderDivs(e, t, o) {
    let s = this.domService.createElement("div");
    return this.domService.addClass(s, "ge-table-focus-border"), this.domService.setStyle(s, "display", "clip"), this.domService.setStyle(s, "position", "absolute"), this.domService.setStyle(s, "left", `${t.left}px`), this.domService.setStyle(s, "top", `${t.top}px`), this.domService.setStyle(s, "width", "1px"), this.domService.setStyle(s, "height", `${t.height}px`), this.applyStyle(s, o), this.domService.appendChild(e, s), s = this.domService.createElement("div"), this.domService.addClass(s, "ge-table-focus-border"), this.domService.setStyle(s, "display", "clip"), this.domService.setStyle(s, "position", "absolute"), this.domService.setStyle(s, "left", `${t.left + t.width - 1}px`), this.domService.setStyle(s, "top", `${t.top}px`), this.domService.setStyle(s, "width", "1px"), this.domService.setStyle(s, "height", `${t.height}px`), this.applyStyle(s, o), this.domService.appendChild(e, s), s = this.domService.createElement("div"), this.domService.addClass(s, "ge-table-focus-border"), this.domService.setStyle(s, "display", "clip"), this.domService.setStyle(s, "position", "absolute"), this.domService.setStyle(s, "left", `${t.left}px`), this.domService.setStyle(s, "top", `${t.top}px`), this.domService.setStyle(s, "width", `${t.width}px`), this.domService.setStyle(s, "height", "1px"), this.applyStyle(s, o), this.domService.appendChild(e, s), s = this.domService.createElement("div"), this.domService.addClass(s, "ge-table-focus-border"), this.domService.setStyle(s, "display", "clip"), this.domService.setStyle(s, "position", "absolute"), this.domService.setStyle(s, "left", `${t.left}px`), this.domService.setStyle(s, "top", `${t.top + t.height - 1}px`), this.domService.setStyle(s, "width", `${t.width}px`), this.domService.setStyle(s, "height", "1px"), this.applyStyle(s, o), this.domService.appendChild(e, s), e;
  }
  addVerticalBorder(e, t, o = "ge-table-body-center-vertical-border") {
    const s = this.domService.createElement("div");
    return this.domService.addClass(s, o), this.domService.setStyle(s, "display", "clip"), this.domService.setStyle(s, "position", "absolute"), this.domService.setStyle(s, "left", `${e.left}px`), this.domService.setStyle(s, "top", `${e.top}px`), this.domService.setStyle(s, "width", "1px"), this.domService.setStyle(s, "height", `${e.height}px`), this.domService.appendChild(t, s), s;
  }
  addDiv(e, t, o = "") {
    const s = this.domService.createElement("div");
    return o && this.domService.addClass(s, o), this.domService.setStyle(s, "display", "clip"), this.domService.setStyle(s, "position", "absolute"), this.domService.setStyle(s, "left", `${t.left}px`), this.domService.setStyle(s, "top", `${t.top}px`), this.domService.setStyle(s, "width", `${t.width}px`), this.domService.setStyle(s, "height", `${t.height}px`), this.domService.appendChild(e, s), s;
  }
  applyStyleString(e, t) {
    const o = t.split(";").map((s) => s.trim()).filter((s) => s);
    for (const s of o) {
      const [i, r] = s.split(":");
      this.domService.setStyle(e, i.trim(), r.trim());
    }
  }
  getDivOrCreateDiv(e, t) {
    let o = t.cache[e];
    return o ? (o.innerText = "", o) : (o = this.domService.createElement("div"), t.cache[e] = o, o);
  }
}
const Y = (h) => h === "header" ? "header" : h === "footer" ? "footer" : "body";
class fe {
  constructor(e, t) {
    if (this.rowIdx = -1, this.colIdx = -1, this.action = null, this.inputType = null, this.className = "", e !== null && (e instanceof HTMLDivElement || e instanceof HTMLSpanElement || e instanceof HTMLInputElement)) {
      this.className = e.className, this.action = e.getAttribute("data-ge-action"), this.inputType = e.getAttribute("data-input-type"), this.rowIdx = Number(e.getAttribute("data-row-index")), this.colIdx = Number(e.getAttribute("data-col-index"));
      const o = e.getAttribute("data-area");
      if (o && (this.areaIdent = Y(o), this.areaModel = t.tableModel.getAreaModel(this.areaIdent), this.row = this.areaModel.getRowByIndex(this.rowIdx)), e instanceof HTMLInputElement) {
        const s = e;
        this.value = s.value;
      }
    }
  }
}
class me {
  constructor(e) {
    this.tableScope = e, this.expandedAll = !0, this.mouseDown = !1, this.dragging = !1, this.tableScope.hostElement.addEventListener("click", this.onHostElementClicked.bind(this)), this.tableScope.hostElement.addEventListener("dblclick", this.onHostElementDblClicked.bind(this)), this.tableScope.hostElement.addEventListener("mousedown", this.onMouseDown.bind(this)), this.tableScope.hostElement.addEventListener("mousemove", this.onMouseMove.bind(this)), this.tableScope.hostElement.addEventListener("mouseup", this.onMouseUp.bind(this)), this.tableScope.hostElement.addEventListener("contextmenu", this.onContextmenu.bind(this)), this.tableScope.hostElement._MouseHandler = "true", this.tableScope.scrollViewport.addEventListener("scroll", this.tableScope.adjustAfterScrolling.bind(this.tableScope)), [window, this.tableScope.hostElement].forEach(
      (t) => t.addEventListener("resize", this.tableScope.adjustContainersAndRows.bind(this.tableScope))
    );
  }
  onContextmenu(e) {
    this.mouseEvent = e;
    const t = this.tableScope.createGeMouseEvent(this.mouseEvent);
    this.tableScope.contextmenu(t);
  }
  onHostElementClicked(e) {
    const t = new fe(e.target, this.tableScope);
    if (t.action === "toggleExpandCollapseAll")
      this.expandedAll = !this.expandedAll, this.tableScope.toggleExpandCollapseAll(this.expandedAll), e.preventDefault(), e.stopPropagation();
    else if (t.inputType === "checkbox" && t.areaIdent)
      this.tableScope.toggleRowCheckbox(t.rowIdx, t.colIdx, t.areaIdent), e.preventDefault(), e.stopPropagation();
    else if (O(t.row) && t.areaModel) {
      const o = t.colIdx === this.getArrowColumnIndex() && e.altKey, s = t.className.includes("ge-table-tree-arrow-div");
      if (console.info(s, o), o || s) {
        e.preventDefault(), e.stopPropagation();
        const i = t.row;
        i.expanded = !i.expanded, "recalcVisibleTreeRows" in t.areaModel && t.areaModel.recalcVisibleTreeRows(), this.tableScope.tableModel.recalcSize(this.tableScope.hostElement.clientWidth), this.tableScope.adjustContainersAndRows(), this.updateCollapsedExpandedState(i);
      }
    }
    if (t.areaIdent === "body" && this.tableScope.tableOptions.getFocusModel) {
      const o = this.tableScope.tableOptions.getFocusModel();
      o == null || o.clear(), o == null || o.setFocus(t.rowIdx, t.colIdx);
    }
    this.publishGeMouseEvent(e, 1);
  }
  onHostElementDblClicked(e) {
    if (e.target instanceof HTMLElement) {
      const t = e.target, o = t.getAttribute("data-area"), s = Y(o), i = Number(t.getAttribute("data-row-index")), r = Number(t.getAttribute("data-col-index")), l = this.tableScope.tableModel.getAreaModel(s);
      if (o && s === "header")
        this.tableScope.tableModel.isSortable(r) && (this.tableScope.clearSelection(), this.tableScope.onHeaderDblClicked(e, i, r));
      else if (t.getAttribute("data-row-index")) {
        const n = l.getRowByIndex(i);
        if (o && s === "body" && l.isEditable(i, r) && (this.tableScope.clearSelection(), this.tableScope.initRenderEditor(i, r)), O(n) && r === this.getArrowColumnIndex()) {
          e.preventDefault(), e.stopPropagation();
          const d = n;
          d.expanded = !d.expanded, "recalcVisibleTreeRows" in l && l.recalcVisibleTreeRows(), this.tableScope.tableModel.recalcSize(this.tableScope.hostElement.clientWidth), this.tableScope.adjustContainersAndRows(), this.updateCollapsedExpandedState(d);
        }
      }
    }
    this.publishGeMouseEvent(e, 2);
  }
  publishGeMouseEvent(e, t) {
    var o;
    this.mouseEvent = e, this.geMouseEventOld = (o = this.geMouseEvent) == null ? void 0 : o.clone(), this.geMouseEvent = this.tableScope.createGeMouseEvent(e), this.geMouseEvent && (this.geMouseEvent.clickCount = t), this.tableScope.onMouseClicked(this.geMouseEvent, this.geMouseEventOld);
  }
  updateCollapsedExpandedState(e) {
    var o, s, i, r, l;
    const t = (s = (o = this.tableScope.tableOptions) == null ? void 0 : o.autoRestoreOptions) == null ? void 0 : s.getRowId;
    if (t) {
      const n = (i = this.tableScope.storeStateCollapsedExpandService) == null ? void 0 : i.collapsedExpandedStateGet().mode, d = n === "collapsed" && !e.expanded || n === "expanded" && e.expanded, a = n === "collapsed" && e.expanded || n === "expanded" && !e.expanded, c = t(e.data);
      d ? (r = this.tableScope.storeStateCollapsedExpandService) == null || r.collapsedStateIdsPush(c) : a && ((l = this.tableScope.storeStateCollapsedExpandService) == null || l.collapsedStateIdsRemove(c));
    }
  }
  getArrowColumnIndex() {
    return this.tableScope.tableModel.isRowCheckboxVisible() ? 1 : 0;
  }
  onMouseDown(e) {
    this.mouseEvent = e, this.startMouseEvent = this.tableScope.createGeMouseEvent(this.mouseEvent), this.tableScope.onMouseDown(this.startMouseEvent), this.mouseDown = !0;
  }
  onMouseMove(e) {
    this.mouseEvent = e, this.mouseDown ? (this.dragging = !0, requestAnimationFrame(this.mouseDraggingOnFrame.bind(this))) : requestAnimationFrame(this.mouseMoveOnFrame.bind(this));
  }
  onMouseUp(e) {
    this.mouseEvent = e, this.dragging && requestAnimationFrame(this.mouseDraggingEndOnFrame.bind(this)), this.mouseDown = !1, this.dragging = !1;
  }
  mouseDraggingOnFrame() {
    var e;
    if (this.mouseEvent) {
      const t = this.tableScope.createGeMouseEvent(this.mouseEvent);
      (e = this.startMouseEvent) != null && e.originalEvent && (t.draggingX = this.mouseEvent.clientX - this.startMouseEvent.originalEvent.clientX, t.draggingY = this.mouseEvent.clientY - this.startMouseEvent.originalEvent.clientY), this.tableScope.mouseDraggingOnFrame(t);
    }
  }
  mouseDraggingEndOnFrame() {
    var e;
    if (this.mouseEvent) {
      const t = this.tableScope.createGeMouseEvent(this.mouseEvent);
      (e = this.startMouseEvent) != null && e.originalEvent && (t.draggingX = this.mouseEvent.clientX - this.startMouseEvent.originalEvent.clientX, t.draggingY = this.mouseEvent.clientY - this.startMouseEvent.originalEvent.clientY), this.tableScope.mouseDraggingEndOnFrame(t);
    }
  }
  mouseMoveOnFrame() {
    if (this.mouseEvent) {
      const e = this.tableScope.createGeMouseEvent(this.mouseEvent);
      this.tableScope.mouseMove(e);
    }
  }
}
class we {
  constructor(e) {
    this.tableScope = e;
  }
  updateCells(e, t = !1) {
    this.tableScope.updateCells(e, t);
  }
  externalFilterChanged() {
    this.tableScope.externalFilterChanged();
  }
  scrollToPixel(e = 0, t = 0) {
  }
  scrollToIndex(e = 0, t = 0) {
  }
  setHeaderVisible(e = !0) {
  }
  setColumnVisible(e, t = !0) {
  }
  isColumnVisible(e) {
    return !0;
  }
  isHeaderVisible() {
    return !0;
  }
  setFooterVisible(e = !0) {
  }
  isFooterVisible() {
    return !0;
  }
  repaint() {
    this.tableScope.repaint();
  }
}
class K {
  constructor(e) {
    this.getStorageKeyFn = e;
  }
  autoConvertMapToObject(e) {
    const t = {};
    if (e instanceof Map) {
      const o = e;
      for (const s of [...o]) {
        const [
          i,
          r
        ] = s;
        t[i] = r;
      }
    }
    return t;
  }
  checkAndPersistItem(e, t) {
    const o = this.getStorageKeyFn;
    if (o) {
      const s = o();
      if (s) {
        const i = s + e;
        if ((t + "").includes("Map")) {
          const r = this.autoConvertMapToObject(t);
          this.persistItem(i, r);
        } else
          this.persistItem(i, t);
      }
    }
  }
  persistItem(e, t) {
    t ? localStorage.setItem(e, JSON.stringify(t)) : localStorage.removeItem(e);
  }
  loadFromLocalStorage(e) {
    const t = localStorage.getItem(e);
    return t ? JSON.parse(t) : null;
  }
  // private loadItems() {
  //   const fn = this.getStorageKeyFn;
  //   if (fn) {
  //     const key = fn();
  //     if (key) {
  //       // A main key is given by function from options
  //       const subKey = key + this.CHECKED_STATE;
  //       const arr = this.loadFromLocalStorage<Array<string | number>>(subKey);
  //       if (arr) {
  //         this.checkedStateIds.length = 0;
  //         arr.forEach(a => this.checkedStateIds.push(a));
  //       }
  //
  //       const subKey2 = key + this.COLLAPSED_EXPANDED_STATE;
  //       const data = this.loadFromLocalStorage<CollapsedExpandedData>(subKey2);
  //       if (data) {
  //         this.collapsedExpandedState = data;
  //       }
  //
  //       const subKey3 = key + this.SELECTED_STATE;
  //       const arr3 = this.loadFromLocalStorage<object>(subKey3);
  //       if (arr3) {
  //         const map: Map<string | number, string[]> = new Map(Object.entries(arr3));
  //         if (map) {
  //           this.selectedStateIds.clear();
  //           map.forEach((col, k) => this.selectedStateIds.set(k, col));
  //         }
  //       }
  //
  //       const subKey4 = key + this.SCROLL_STATE;
  //       let scrollOffset = this.loadFromLocalStorage<[number, number]>(subKey4);
  //       this.scrollOffset = scrollOffset ? scrollOffset : [0, 0];
  //     }
  //   }
  // }
}
class Se extends K {
  constructor(e) {
    super(e), this.SCROLL_STATE = "scrollState", this.scrollOffset = [0, 0], this.load();
  }
  getScrollOffset() {
    return this.scrollOffset;
  }
  updateScrollOffset(e) {
    this.scrollOffset = e, this.checkAndPersistItem(this.SCROLL_STATE, this.scrollOffset);
  }
  load() {
    const e = this.getStorageKeyFn;
    if (e) {
      const t = e();
      if (t) {
        const o = t + this.SCROLL_STATE;
        let s = this.loadFromLocalStorage(o);
        this.scrollOffset = s || [0, 0];
      }
    }
  }
}
class xe {
  constructor(e = "collapsed", t = [], o = !1, s = !1) {
    this.mode = e, this.rowIds = t, this.allCollapsed = o, this.allExpanded = s;
  }
}
class ye extends K {
  constructor(e) {
    super(e), this.COLLAPSED_EXPANDED_STATE = "collapsedExpandedState", this.collapsedExpandedState = new xe(), this.load();
  }
  collapsedExpandedStateGet() {
    return this.collapsedExpandedState;
  }
  collapsedExpandedStateIncludes(e) {
    return this.collapsedExpandedState.rowIds.includes(e);
  }
  collapsedStateIdsPush(e) {
    this.collapsedExpandedState.rowIds.includes(e) || (this.collapsedExpandedState.rowIds.push(e), this.collapsedExpandedState.allCollapsed = !1, this.collapsedExpandedState.allExpanded = !1, this.persist());
  }
  collapsedStateIdsRemove(e) {
    const t = this.collapsedExpandedState.rowIds.indexOf(e);
    t !== -1 && (this.collapsedExpandedState.rowIds.splice(t, 1), this.collapsedExpandedState.allCollapsed = !1, this.collapsedExpandedState.allExpanded = !1, this.persist());
  }
  collapsedStateAll(e) {
    this.collapsedExpandedState.rowIds = [], this.collapsedExpandedState.mode = e ? "collapsed" : "expanded", this.collapsedExpandedState.allCollapsed = !e, this.collapsedExpandedState.allExpanded = e, this.persist();
  }
  load() {
    const e = this.getStorageKeyFn;
    if (e) {
      const t = e();
      if (t) {
        const o = t + this.COLLAPSED_EXPANDED_STATE, s = this.loadFromLocalStorage(o);
        s && (this.collapsedExpandedState = s);
      }
    }
  }
  persist() {
    this.checkAndPersistItem(this.COLLAPSED_EXPANDED_STATE, this.collapsedExpandedState);
  }
}
class Ce extends K {
  constructor(e) {
    super(e), this.SORTING_STATE = "sortingState", this.sortItems = [], this.load();
  }
  getSortItems() {
    return this.sortItems;
  }
  setSortItems(e) {
    this.sortItems = e, this.checkAndPersistItem(this.SORTING_STATE, this.sortItems);
  }
  load() {
    const e = this.getStorageKeyFn;
    if (e) {
      const t = e();
      if (t) {
        const o = t + this.SORTING_STATE;
        let s = this.loadFromLocalStorage(o);
        this.sortItems = s || [];
      }
    }
  }
}
class $ {
  constructor(e = 0, t = 0, o = 0, s = 0, i) {
    this.left = e, this.width = t, this.height = o, this.top = s, this.index = i;
  }
}
class ve {
  constructor(e, t, o, s) {
    this.hostElement = e, this.tableModel = t, this.dom = o, this.tableOptions = s, this.scrollTop = 0, this.areaBodyWestGeo = new $(), this.areaBodyCenterGeo = new $(), this.areaBodyEastGeo = new $();
    const i = this.hostElement;
    i.innerText = "", this.dom.setAttribute(i, "tabindex", "0"), this.dom.setStyle(
      this.dom.addClass("ge-table", i),
      "position",
      "relative"
    ), this.hoverRow = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-hover-row", i)
    ), this.hoverColumn = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-hover-column", i)
    ), this.areaHeaderWest = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-header ge-table-header-west", i, "header", "west")
      )
    ), this.areaHeaderCenter = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-header ge-table-header-center", i, "header", "center")
      )
    ), this.areaHeaderEast = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-header ge-table-header-east", i, "body", "east")
      )
    ), this.areaBodyWest = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-body ge-table-body-west", i, "body", "west")
      )
    ), this.areaBodyEast = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-body ge-table-body-east", i, "body", "east")
      )
    ), this.areaFooterWest = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-footer ge-table-footer-west", i, "footer", "west")
      )
    ), this.areaFooterCenter = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-footer ge-table-footer-center", i, "footer", "center")
      )
    ), this.areaFooterEast = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-footer ge-table-footer-east", i, "footer", "east")
      )
    ), this.scrollViewport = o.applyStyleOverflowAuto(
      this.tableOptions.overflowX ?? "auto",
      this.tableOptions.overflowY ?? "auto",
      o.applyStyleNoPadding(
        o.applyStylePosistionAbsolute(
          o.createAreaDivWithClass("ge-table-scroll-viewport", i, "body", "center")
        )
      )
    ), this.contentWrapperDiv = o.applyStyleNoPadding(
      o.applyStylePosistionRelative(
        o.createDivWithClass("ge-table-scroll-content-wrapper", this.scrollViewport)
      )
    ), this.contentDiv = o.applyStyleNoPadding(
      o.applyStylePosistionRelative(
        o.createDivWithClass("ge-table-scroll-content", this.contentWrapperDiv)
      )
    ), this.areaBodyCenter = o.appendRelativeChildDiv(
      o.createDivWithClass("ge-table-body-center", this.contentDiv)
    ), this.borderHeaderBottom = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-header-border", i)
    ), this.borderFixedWest = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-west-fixed-column-border", i)
    ), this.borderFixedEast = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-east-fixed-column-border", i)
    ), this.borderFooterTop = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-footer-border", i)
    );
  }
  adjustContainersAndRows() {
    const e = this.tableModel.getPadding(), t = this.hostElement.clientWidth, o = this.hostElement.clientHeight;
    this.dom.applyStyle(this.scrollViewport, {
      width: `${t - e.left}px`,
      height: `${o - e.top}px`,
      top: `${e.top}px`,
      left: `${e.left}px`
    }), this.scrollTop = this.scrollViewport.scrollTop, this.dom.applyStyle(this.contentDiv, {
      width: `${this.scrollViewport.clientWidth}px`,
      height: `${this.scrollViewport.clientHeight}px`,
      top: `${this.scrollTop}px`,
      left: `${this.scrollViewport.scrollLeft}px`
    }), this.areaBodyWestGeo.width = e.left, this.areaBodyWestGeo.height = o - e.top - e.bottom, this.areaBodyWestGeo.top = e.top, this.areaBodyWestGeo.left = 0, this.dom.applyStyleInPx(this.areaBodyWest.parent, this.areaBodyWestGeo), this.tableOptions.fixedWestSeparatorBorderVisible && this.tableModel.getFixedLeftColumnCount() ? this.dom.applyDisplayBlockStyle(
      this.dom.applyStyle(this.borderFixedWest, {
        width: "1px",
        height: `${this.areaBodyWestGeo.height}px`,
        top: `${this.areaBodyWestGeo.top}px`,
        left: `${this.areaBodyWestGeo.width}px`
      })
    ) : this.dom.applyDisplayNoneStyle(this.borderFixedWest), this.areaBodyEastGeo.width = e.right, this.areaBodyEastGeo.height = o - e.top - e.bottom, this.areaBodyEastGeo.top = e.top, this.areaBodyEastGeo.left = t - e.right, this.dom.applyStyleInPx(this.areaBodyEast.parent, this.areaBodyEastGeo), this.tableOptions.fixedEastSeparatorBorderVisible && this.tableModel.getFixedLeftColumnCount() ? this.dom.applyDisplayBlockStyle(
      this.dom.applyStyle(this.borderFixedEast, {
        width: "1px",
        height: `${this.areaBodyEastGeo.height}px`,
        top: `${this.areaBodyEastGeo.top}px`,
        left: `${this.areaBodyEastGeo.left}px`
      })
    ) : this.dom.applyDisplayNoneStyle(this.borderFixedEast), this.areaBodyCenterGeo.width = t - e.left - e.right, this.areaBodyCenterGeo.height = o - e.top - e.bottom, this.areaBodyCenterGeo.top = 0, this.areaBodyCenterGeo.left = 0, this.dom.applyStyleInPx(this.areaBodyCenter.parent, this.areaBodyCenterGeo), this.dom.applyStyle(this.areaHeaderCenter.parent, {
      width: `${t - e.left - e.right}px`,
      height: `${e.top}px`,
      top: "0",
      left: `${e.left}px`
    }), this.dom.applyStyle(this.areaHeaderWest.parent, {
      width: `${e.left}px`,
      height: `${e.top}px`,
      top: "0",
      left: "0"
    }), this.dom.applyStyle(this.areaHeaderEast.parent, {
      width: `${e.right}px`,
      height: `${e.top}px`,
      top: "0",
      left: `${t - e.right}px`
    }), this.tableOptions.headerSeparatorBorderVisible && this.tableModel.isHeaderVisibe() ? this.dom.applyDisplayBlockStyle(
      this.dom.applyStyle(this.borderHeaderBottom, {
        width: `${t}px`,
        height: "1px",
        top: `${e.top}px`,
        left: "0px"
      })
    ) : this.dom.applyDisplayNoneStyle(this.borderHeaderBottom), this.dom.applyStyle(this.areaFooterWest.parent, {
      width: `${e.left}px`,
      height: `${e.bottom}px`,
      top: `${o - e.bottom}px`,
      left: "0"
    }), this.dom.applyStyle(this.areaFooterCenter.parent, {
      width: `${t - e.left - e.right}px`,
      height: `${e.bottom}px`,
      top: `${o - e.bottom}px`,
      left: `${e.left}px`
    }), this.dom.applyStyle(this.areaFooterEast.parent, {
      width: `${e.right}px`,
      height: `${e.bottom}px`,
      top: `${o - e.bottom}px`,
      left: `${t - e.right}px`
    }), this.tableOptions.footerSeparatorBorderVisible && this.tableModel.isFooterVisibe() ? this.dom.applyDisplayBlockStyle(
      this.dom.applyStyle(this.borderFooterTop, {
        width: `${t}px`,
        height: "1px",
        top: `${o - e.bottom}px`,
        left: "0px"
      })
    ) : this.dom.applyDisplayNoneStyle(this.borderFooterTop), this.adjustAfterScrolling();
  }
  adjustAfterScrolling() {
  }
  resetSizeOfWrapperDiv() {
    const e = `${this.tableModel.getContentWidthInPixel()}px`, t = `${this.tableModel.getContentHeightInPixel() + 1}px`;
    this.dom.setStyle(this.contentWrapperDiv, "width", e), this.dom.setStyle(this.contentWrapperDiv, "height", t);
  }
}
class E {
  constructor(e, t, o, s, i = !1) {
    this.r1 = e, this.c1 = t, this.r2 = o, this.c2 = s, this.gammaRange = i;
  }
  static create(e) {
    return e.gammaRange === void 0 && (e.gammaRange = !1), new E(
      e.rowIndex1,
      e.columnIndex1,
      e.rowIndex2,
      e.columnIndex2,
      e.gammaRange
    );
  }
  static singleCell(e, t) {
    return new E(e, t, e, t);
  }
  static singleRow(e) {
    return new E(e, 0, e, Number.MAX_SAFE_INTEGER);
  }
  static singleColumn(e) {
    return new E(0, e, Number.MAX_SAFE_INTEGER, e);
  }
  isInRange(e, t) {
    return e >= this.r1 && e <= this.r2 && t >= this.c1 && t <= this.c2;
  }
}
class Re {
  constructor(e, t) {
    this.tableModel = e, this.areaModel = t, this.colAndRowspanRanges = void 0;
  }
  init() {
    if (this.areaModel.getMaxColspan() < 2 && this.areaModel.getMaxRowspan() < 2)
      return;
    this.colAndRowspanRanges = [];
    const e = this.areaModel.getRowCount(), t = this.tableModel.getColumnCount();
    for (let o = 0; o < e; o++)
      for (let s = 0; s < t; s++) {
        let i = this.areaModel.getColspanAt(o, s), r = this.areaModel.getRowspanAt(o, s);
        if (i > 1 || r > 1) {
          i === 0 && (i = 1), r === 0 && (r = 1);
          const l = this.areaModel.hasOwnProperty("gammaCells");
          this.colAndRowspanRanges.push(
            new E(o, s, o + r - 1, s + i - 1, l)
          );
        }
      }
  }
  getRanges() {
    return this.colAndRowspanRanges ? this.colAndRowspanRanges : [];
  }
  isInRange(e, t) {
    if (this.colAndRowspanRanges) {
      for (const o of this.colAndRowspanRanges)
        if (o.isInRange(e, t))
          return !0;
    }
    return !1;
  }
}
class I {
  constructor(e, t, o) {
    this.header = e, this.body = t, this.footer = o;
  }
}
class Ae extends ve {
  constructor(e, t, o, s) {
    var r, l;
    super(e, t, o, s), this.scrollLeft = 0, this.scrollViewportLeft = 0, this.scrollFactorY = 0, this.scrollFactorX = 0, this.cleanupFunctions = {
      header: [],
      body: [],
      footer: []
    }, this.tree = !1, this.colAndRowspanModels = new I(), this.firstVisibleRowIndex = -1, this.draggingTargetColumnIndex = -1, this.removables = [], this.editing = !1, this.tableModel.getSelectionModel ? this.getSelectionModel = this.tableModel.getSelectionModel : (r = this.tableOptions) != null && r.getSelectionModel && (this.getSelectionModel = this.tableOptions.getSelectionModel), (l = this.tableOptions) != null && l.getFocusModel && (this.getFocusModel = this.tableOptions.getFocusModel), N(t.getAreaModel("body")) && (this.tree = !0), ["header", "body", "footer"].forEach(
      (n) => {
        var d;
        this.colAndRowspanModels[n] = new Re(t, t.getAreaModel(n)), (d = this.colAndRowspanModels[n]) == null || d.init();
      }
    );
  }
  isEditing() {
    return this.editing;
  }
  resetEditorRenderer() {
    this.editorRenderer = void 0, this.editorRendererRow = -1, this.editorRendererColumn = -1, this.editing = !1;
  }
  clearSelection() {
    if (this.getSelectionModel) {
      const e = this.getSelectionModel();
      e == null || e.clear();
    }
  }
  initRenderEditor(e, t) {
    var s;
    let o = (s = this.tableModel.getColumnDef(t)) == null ? void 0 : s.getEditRenderer;
    if (o || (o = this.tableOptions.getEditRenderer), o)
      if (this.editorRenderer = o(e, t), this.editorRenderer) {
        this.editorRendererRow = e, this.editorRendererColumn = t, this.editing = !0, this.repaint();
        const i = document.querySelector("input.ge-table-cell-editor-input");
        i && i.focus();
      } else
        this.resetEditorRenderer();
  }
  repaint() {
    this.adjustAfterScrolling();
  }
  adjustAfterScrolling() {
    var e;
    for (const t of this.removables)
      t.remove();
    this.hideHoverRow(), this.hideHoverColumn(), this.scrollTop = this.scrollViewport.scrollTop, this.scrollLeft = this.scrollViewport.scrollLeft, this.debounce(this.checkForScrollPosSaving.bind(this)), this.scrollFactorY = this.scrollTop / (this.scrollViewport.scrollHeight - this.scrollViewport.clientHeight), this.scrollFactorX = this.scrollLeft / (this.scrollViewport.scrollWidth - this.scrollViewport.clientWidth), isNaN(this.scrollFactorY) && (this.scrollFactorY = 0), isNaN(this.scrollFactorX) && (this.scrollFactorX = 0), this.adjustBody(), this.adjustArea("footer"), this.adjustArea("header"), this.tableOptions.tableTopBorderVisible && this.removables.push(this.dom.addHorizontalBorder(
      new $(0, this.hostElement.clientWidth, 1, 0),
      this.hostElement,
      "ge-table-border"
    )), this.tableOptions.tableBottomBorderVisible && this.removables.push(this.dom.addHorizontalBorder(
      new $(0, this.hostElement.clientWidth, 1, this.hostElement.clientHeight - 1),
      this.hostElement,
      "ge-table-border"
    )), this.tableModel.getFixedLeftColumnCount() > 0 && this.removables.push(this.dom.addVerticalBorder(
      new $(this.areaBodyWest.child.clientWidth, 1, this.hostElement.clientHeight, 0),
      this.hostElement,
      "ge-table-body-west-vertical-border"
    )), ((e = this.tableModel.getAreaModel("header")) == null ? void 0 : e.getRowCount()) > 0 && this.removables.push(this.dom.addHorizontalBorder(
      new $(0, this.hostElement.clientWidth, 1, this.areaHeaderCenter.child.clientHeight),
      this.hostElement,
      "ge-table-body-west-vertical-border"
    ));
  }
  checkForScrollPosSaving() {
    var e, t;
    this.storeScrollPosStateService && ((t = (e = this.tableOptions) == null ? void 0 : e.autoRestoreOptions) != null && t.autoRestoreScrollPosition) && this.storeScrollPosStateService.updateScrollOffset([this.scrollLeft, this.scrollTop]);
  }
  updateCells(e, t = !1) {
    e.forEach(
      (o) => {
        this.tableModel.getAreaModel(o.area).setValue(o.rowIndex, o.columnIndex, o.value), t || this.rerenderCellContent(o);
      }
    ), t && this.repaint();
  }
  getAreaAndSideIdentByAttr(e) {
    if (e) {
      const t = this.getStringByAttr(e, "data-area"), o = this.getStringByAttr(e, "data-side");
      if (o && t)
        return [t, o];
    }
    return [void 0, void 0];
  }
  getArea(e, t) {
    if (e === "header") {
      if (t === "west")
        return this.areaHeaderWest;
      if (t === "center")
        return this.areaHeaderCenter;
      if (t === "east")
        return this.areaHeaderEast;
    } else if (e === "body") {
      if (t === "west")
        return this.areaBodyWest;
      if (t === "center")
        return this.areaBodyCenter;
      if (t === "east")
        return this.areaBodyEast;
    } else if (e === "footer") {
      if (t === "west")
        return this.areaFooterWest;
      if (t === "center")
        return this.areaFooterCenter;
      if (t === "east")
        return this.areaFooterEast;
    }
    throw Error(`Wrong area identifier: row:${e}, col:${t}`);
  }
  adjustBody() {
    const e = this.areaBodyCenterGeo.height - this.tableModel.getContentHeightInPixel(), t = this.scrollFactorY * e;
    this.dom.setStyle(this.contentDiv, "top", `${this.scrollTop}px`), this.dom.setStyle(this.contentDiv, "left", `${this.scrollViewport.scrollLeft}px`), this.adjustArea("body", t);
  }
  getNumberByAttr(e, t) {
    var o;
    if (e) {
      const s = (o = e.closest("[" + t + "]")) == null ? void 0 : o.getAttribute(t);
      if (s)
        return Number(s);
    }
    return -1;
  }
  getStringByAttr(e, t) {
    var o;
    if (e) {
      const s = (o = e.closest("[" + t + "]")) == null ? void 0 : o.getAttribute(t);
      if (s)
        return s;
    }
    return "";
  }
  adjustArea(e, t = 0) {
    var g;
    const o = this.getArea(e, "west"), s = this.getArea(e, "center"), i = this.getArea(e, "east"), r = s.child.clientHeight;
    o.child.innerText = "", s.child.innerText = "", i.child.innerText = "";
    const l = 0, n = this.areaBodyCenterGeo.width, d = this.tableModel.getPadding(), a = this.tableModel.getAreaModel(e), c = a.getRowCount();
    for (; this.cleanupFunctions[e].length; ) {
      const p = this.cleanupFunctions[e].shift();
      p && p();
    }
    let u = t;
    const m = this.tableModel.getColumnCount(), b = this.tableModel.getFixedRightColumnCount(), w = this.tableModel.getFixedLeftColumnCount();
    for (let p = 0; p < c; p++) {
      const C = u, v = p === c - 1, R = this.tableModel.getRowHeight(e, p);
      if (C + R > 0) {
        this.firstVisibleRowIndex = p;
        let y = { left: l, width: n, height: R, top: C, index: p }, S = this.dom.addRowDiv(s, y, p, e, "center");
        const T = w;
        if (this.adjustColumnsToRowParent({
          areaIdent: e,
          sideIdent: "center",
          areaModel: a,
          geo: y,
          parent: S,
          rowIndex: p,
          columnIndexStart: T,
          columnIndexEnd: m - b - 1,
          verticalFixed: !1,
          lastRowOfModel: v
        }), d.left > 0 && (y = { left: l, width: this.areaBodyWestGeo.width, height: R, top: C, index: p }, S = this.dom.addRowDiv(o, y, p, e, "west"), this.adjustColumnsToRowParent({
          areaIdent: e,
          sideIdent: "west",
          areaModel: a,
          geo: y,
          parent: S,
          rowIndex: p,
          columnIndexStart: 0,
          columnIndexEnd: T - 1,
          verticalFixed: !0,
          lastRowOfModel: v
        })), d.right > 0 && (y = { left: l, width: this.areaBodyEastGeo.width, height: R, top: C, index: p }, S = this.dom.addRowDiv(i, y, p, e, "east"), this.adjustColumnsToRowParent({
          areaIdent: e,
          sideIdent: "east",
          areaModel: a,
          geo: y,
          parent: S,
          rowIndex: p,
          columnIndexStart: m - b,
          columnIndexEnd: m - 1,
          verticalFixed: !0,
          lastRowOfModel: v
        })), e === "header" && this.tree && p === c - 1) {
          const A = this.dom.applyStyle(
            this.dom.setAttribute(
              this.dom.addDiv(S, new $(16, 20, 20, 8)),
              "data-ge-action",
              "toggleExpandCollapseAll"
            ),
            { cursor: "pointer" }
          ), M = this.tableOptions.treeOptions.arrowExpandCollapseAll;
          if (M) {
            const V = this.dom.domService.createText(M.content);
            this.dom.domService.appendChild(A, V), M.style && this.dom.applyStyleString(A, M.style);
          }
        }
      }
      if (u = u + R, u > r)
        break;
    }
    if (this.colAndRowspanModels && this.colAndRowspanModels[e]) {
      const p = ((g = this.colAndRowspanModels[e]) == null ? void 0 : g.getRanges()) ?? [];
      if (p.length)
        for (const C of p) {
          let v = 0, R = s.child, y = "center";
          if (C.c1 < w)
            R = o.child, y = "west";
          else if (b > 0 && C.c1 >= m - b)
            R = i.child, y = "east";
          else {
            const S = this.areaBodyCenterGeo.width - this.tableModel.getContentWidthInPixel();
            v = this.scrollFactorX * S - this.areaBodyWestGeo.width, y = "center";
          }
          this.drawBigCell(C, v, t, a, R, y);
        }
    }
  }
  /**
   * Draws big cells (rowspan and or colspan) in body/center
   * @param range CellRange
   * @param xStart X position in pixel for top left corner
   * @param yStart Y position in pixel for top left corner
   * @param areaModel AreaModelIf
   * @param parentDiv Parent div as HTMLDivElement
   * @param sideIdent SideIdent (west,center,east)
   * @protected
   */
  drawBigCell(e, t, o, s, i, r) {
    const l = o + this.getRowHeights(0, e.r1 - 1, s).reduce((g, p) => g + p, 0), n = this.tableModel.getColumnCount(), d = this.tableModel.getFixedRightColumnCount();
    let a = 0;
    d > 0 && e.c1 >= n - d && (a = n - d);
    const c = t + this.getColumnWidths(a, e.c1 - 1).reduce((g, p) => g + p, 0), u = this.getRowHeights(e.r1, e.r2, s).reduce((g, p) => g + p, 0), m = this.getColumnWidths(e.c1, e.c2).reduce((g, p) => g + p, 0);
    let b = !1;
    const w = this.getSelectionModel ? this.getSelectionModel() : void 0;
    w && (b = w.getSelectionCount(e.r1, e.c1) > 0), e.gammaRange ? (console.info("TODO here", e), this.renderCell({
      areaModel: s,
      areaIdent: s.areaIdent,
      sideIdent: r,
      rowIndex: e.r1,
      columnIndex: e.c1,
      left: c,
      top: l,
      width: m,
      height: u,
      parent: i,
      cellSelected: b,
      lastRowOfModel: !0,
      gammaRange: e.gammaRange
    })) : this.renderCell({
      areaModel: s,
      areaIdent: s.areaIdent,
      sideIdent: r,
      rowIndex: e.r1,
      columnIndex: e.c1,
      left: c,
      top: l,
      width: m,
      height: u,
      parent: i,
      cellSelected: b,
      lastRowOfModel: !0,
      gammaRange: e.gammaRange
    }), s.areaIdent === "header" && this.tableOptions.columnsResizable && this.renderHeaderCellResizeHandle({
      rowIndex: e.r1,
      columnIndex: e.c1,
      cellLeft: c,
      cellTop: l,
      cellWidth: m,
      cellHeight: u,
      parent: i
    });
  }
  findRowOfImportantRowspanCell(e, t, o) {
    const s = e.getMaxRowspan();
    for (let i = t - 1; i > -1; i--) {
      const r = e.getRowspanAt(i, o);
      if (r > 1 && i + r + 1 >= t)
        return i;
      if (t - i > s)
        return -1;
    }
    return -1;
  }
  adjustColumnsToRowParent({
    areaIdent: e,
    sideIdent: t,
    areaModel: o,
    geo: s,
    parent: i,
    rowIndex: r,
    columnIndexStart: l,
    columnIndexEnd: n,
    verticalFixed: d = !1,
    lastRowOfModel: a = !1
  }) {
    var w;
    this.scrollViewportLeft = this.scrollViewport.scrollLeft;
    let c = 0;
    if (!d) {
      const g = this.areaBodyCenterGeo.width - this.tableModel.getContentWidthInPixel();
      c = this.scrollFactorX * g;
    }
    const u = 0, m = !!(e === "body" && t);
    let b = c;
    for (let g = l; g <= n; g++) {
      const p = b, C = this.tableModel.getColumnWidth(g);
      if (C > 0 && p + C > 0) {
        let v = s.height;
        const R = o.getRowspanAt(r, g), y = o.getColspanAt(r, g);
        R > 1 && (v = this.getRowHeights(r, r + R - 1, o).reduce((A, M) => A + M, 0));
        let S = C;
        y > 1 && (S = this.getColumnWidths(g, g + y - 1).reduce((A, M) => A + M, 0));
        let T = !1;
        if (this.colAndRowspanModels && this.colAndRowspanModels[e] && (w = this.colAndRowspanModels[e]) != null && w.isInRange(r, g) && (T = !0), this.draggingTargetColumnIndex === g && e !== "header") {
          this.renderDragTargetDiv(i, p, u, S, v);
          const A = { left: p, top: u, width: S, height: v };
          this.dom.addColumnBorderDivs(this.tableOptions, i, A, e, t);
        } else {
          const A = this.renderSelectedBackgroundDiv(T, m, t, o, r, g, i, p, u, S, v);
          T || this.renderCell({
            areaModel: o,
            areaIdent: e,
            sideIdent: t,
            rowIndex: r,
            columnIndex: g,
            left: p,
            top: u,
            width: S,
            height: v,
            parent: i,
            cellSelected: A,
            lastRowOfModel: a,
            gammaRange: !0
          }), e === "header" && this.tableOptions.columnsResizable && this.renderHeaderCellResizeHandle({
            rowIndex: r,
            columnIndex: g,
            cellLeft: p,
            cellTop: u,
            cellWidth: S,
            cellHeight: v,
            parent: i
          });
        }
      }
      if (b = b + C, b > this.areaBodyCenterGeo.width)
        break;
    }
    this.tableOptions.verticalBorderVisible && this.dom.addVerticalBorder(new $(b - 1, 1, s.height, 0), i);
  }
  getTreeArrowColumnIndex() {
    return this.tableOptions.showCheckboxWihoutExtraColumn ? 0 : this.tableModel.isRowCheckboxVisible() ? 1 : 0;
  }
  addAndRenderCellDiv({
    areaModel: e,
    areaIdent: t,
    sideIdent: o,
    rowIndex: s,
    index: i,
    left: r,
    width: l,
    height: n,
    top: d,
    parent: a,
    lastRowOfModel: c
  }) {
    var J;
    const m = this.editorRenderer && this.editorRendererRow === s && this.editorRendererColumn === i ? this.editorRenderer : e.getCellRenderer(s, i), b = { left: r, width: l, height: n, top: d, index: i }, w = e.getRowByIndex(s);
    let g = "none";
    if (i === this.getTreeArrowColumnIndex() && O(w)) {
      const x = w;
      (J = x.children) != null && J.length ? x.expanded ? g = "expanded" : g = "collapsed" : g = "hidden";
    }
    let C;
    if (t === "header") {
      const x = this.tableModel.getColumnDef(i);
      (!(x != null && x.sortIconVisible) || x != null && x.sortIconVisible()) && (C = x == null ? void 0 : x.sortState);
    }
    const v = e.getValueAt(s, i), R = m ? "" : `${v}`, y = e.isRowChecked(s), S = this.dom.addColumnDiv(
      a,
      b,
      s,
      i,
      t,
      o,
      R,
      g,
      this.tableOptions,
      y,
      C
    ), T = e.getTooltipAt(s, i);
    T && this.dom.setAttribute(S, "title", T);
    const A = this.tableModel.getColumnDef(i);
    A && A.classes[t] && this.dom.addClasses(A.classes[t], S);
    let M;
    m && (M = m.render(S, s, i, t, e, v, this.dom.domService));
    const V = e.getCustomClassesAt(s, i);
    if (V.length && this.dom.addClasses(V, S), this.dom.addColumnBorderDivs(this.tableOptions, a, b, t, o), c && this.dom.addHorizontalBorder({ left: r, width: l, height: n, top: d + n }, a), this.getFocusModel && t === "body") {
      const x = this.getFocusModel();
      x != null && x.hasFocus(s, i) && this.dom.addFocusBorderDivs(a, b, {});
    }
    t === "header" && this.dom.setAttribute(S, "data-ge-action", "drag-column");
    const W = e.getCustomStyleAt(s, i);
    if (W)
      for (const x in W)
        this.dom.setStyle(S, x, W[x]);
    return [S, M];
  }
  applyCssClasses(e, t = {}) {
    e && Object.entries(t).forEach(([o, s]) => {
      s ? this.dom.addClass(o, e) : this.dom.removeClass(o, e);
    });
  }
  rerenderCellContent({ area: e, rowIndex: t, columnIndex: o, value: s, cssClasses: i }) {
    const r = this.tableModel.getAreaModel(e), l = 'div[data-col-index="' + o + '"][data-row-index="' + t + '"][data-area="' + e + '"]', n = document.querySelector(l);
    if (n) {
      let d;
      const c = this.editorRenderer && this.editorRendererRow === t && this.editorRendererColumn === o ? this.editorRenderer : r.getCellRenderer(t, o);
      if (n.innerText = "", this.applyCssClasses(n, i), c)
        d = c.render(n, t, o, e, r, s, this.dom.domService), d && this.cleanupFunctions[e].push(d);
      else {
        const b = `${s}`;
        this.dom.addLabelDiv(n, b, !1, t, o, e);
      }
      const u = r.getCustomClassesAt(t, o);
      u.length && this.dom.addClasses(u, n);
      const m = r.getCustomStyleAt(t, o);
      if (m)
        for (const b in m)
          this.dom.setStyle(n, b, m[b]);
    }
  }
  getColumnWidths(e, t) {
    const o = [];
    for (let s = e; s <= t; s++)
      o.push(this.tableModel.getColumnWidth(s));
    return o;
  }
  getRowHeights(e, t, o) {
    const s = [];
    for (let i = e; i <= t; i++)
      s.push(o.getRowHeight(i));
    return s;
  }
  adjustHoverRows(e) {
    if (this.tableOptions.hoverRowVisible && e.rowIndex > -1) {
      const t = this.hostElement.clientWidth, o = this.tableModel.getAreaModel("body").getRowHeight(e.rowIndex), s = e.rowTop + this.areaHeaderCenter.parent.clientHeight - this.scrollTop;
      this.dom.applyStyle(this.hoverRow, {
        left: "0",
        top: s + "px",
        width: t + "px",
        height: o + "px",
        display: "block"
      });
    } else
      this.hideHoverRow();
  }
  hideHoverRow() {
    this.dom.applyStyle(this.hoverRow, {
      display: "none"
    });
  }
  adjustHoverColumns(e) {
    if (this.tableOptions.hoverColumnVisible && e.rowIndex > -1) {
      const t = this.hostElement.clientHeight, o = this.tableModel.getColumnWidth(e.columnIndex), s = this.areaBodyWestGeo.width, i = e.columnLeft + this.tableModel.getPadding().left - this.scrollLeft - s;
      this.dom.applyStyle(this.hoverColumn, {
        left: i + "px",
        top: "0px",
        width: o + "px",
        height: t + "px",
        display: "block"
      });
    } else
      this.hideHoverColumn();
  }
  hideHoverColumn() {
    this.dom.applyStyle(this.hoverColumn, {
      display: "none"
    });
  }
  debounce(e, t = 1e3) {
    this.debounceTimeout && clearTimeout(this.debounceTimeout), this.debounceTimeout = setTimeout(e.bind(this), t);
  }
  renderDragTargetDiv(e, t, o, s, i) {
    const r = this.dom.applyStylePosistionAbsolute(
      this.dom.createDivWithClass("ge-table-drop-zone", e)
    );
    return this.dom.setStyle(r, "left", `${t}px`), this.dom.setStyle(r, "top", `${o}px`), this.dom.setStyle(r, "width", `${s}px`), this.dom.setStyle(r, "height", `${i}px`), r;
  }
  renderSelectedBackgroundDiv(e, t, o, s, i, r, l, n, d, a, c) {
    let u = !1;
    if (!e && t && s.isSelectable(i, r) && this.getSelectionModel) {
      const m = this.getSelectionModel();
      if (m) {
        const b = m.getSelectionCount(i, r);
        u = b > 0;
        for (let w = 0; w < b; w++) {
          const g = this.dom.applyStylePosistionAbsolute(
            // ge-table-body-west-selected-range
            this.dom.createDivWithClass(`ge-table-${s.areaIdent}-${o}-selected-range`, l)
          );
          this.dom.setStyle(g, "left", `${n}px`), this.dom.setStyle(g, "top", `${d}px`), this.dom.setStyle(g, "width", `${a}px`), this.dom.setStyle(g, "height", `${c}px`);
        }
      }
    }
    return u;
  }
  renderCell({
    areaModel: e,
    areaIdent: t,
    sideIdent: o,
    rowIndex: s,
    columnIndex: i,
    left: r,
    top: l,
    width: n,
    height: d,
    parent: a,
    cellSelected: c,
    lastRowOfModel: u,
    gammaRange: m
  }) {
    const [b, w] = this.addAndRenderCellDiv({
      areaModel: e,
      areaIdent: t,
      sideIdent: o,
      rowIndex: s,
      index: i,
      left: r,
      width: n,
      height: d,
      top: l,
      parent: a,
      lastRowOfModel: u,
      gammaRange: m
    });
    c && this.dom.addClass(`ge-table-${t}-${o}-selected-range`, b), w && this.cleanupFunctions[t].push(w);
  }
  renderHeaderCellResizeHandle({ rowIndex: e, columnIndex: t, cellLeft: o, cellTop: s, cellWidth: i, cellHeight: r, parent: l }) {
    const n = this.dom.domService, d = this.tableOptions.columnResizeHandleWidthInPx ?? 2, a = n.createElement("div");
    n.setAttribute(a, "data-col-index", `${t}`), n.setAttribute(a, "data-row-index", `${e}`), n.setAttribute(a, "data-area", "header"), n.setAttribute(a, "data-ge-action", "resize-column"), n.addClass(a, "ge-table-column-resize-handle"), n.setStyle(a, "display", "clip"), n.setStyle(a, "position", "absolute"), n.setStyle(a, "cursor", "col-resize"), n.setStyle(a, "left", `${o + i - d}px`), n.setStyle(a, "top", `${s}px`), n.setStyle(a, "width", `${d}px`), n.setStyle(a, "height", `${r}px`), n.appendChild(l, a);
  }
}
class Ee {
  constructor(e, t) {
    this.columnIndex = e, this.sortState = t;
  }
}
class Me {
  constructor(e) {
    this.tableScope = e, this.tableScope.hostElement.addEventListener("change", this.onHostElementChanged.bind(this));
  }
  onHostElementChanged(e) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) {
      const t = e.target, o = t.getAttribute("data-area"), s = t.getAttribute("data-row-index"), i = t.getAttribute("data-col-index");
      if (o && s && i) {
        const r = Y(o), l = Number(s), n = Number(i);
        this.tableScope.updateModelValueAfterEdit(r, l, n, t.value);
      }
    }
  }
}
class ke {
  constructor(e = -1, t = -1) {
    this.rowIndex = e, this.columnIndex = t;
  }
}
class U {
  constructor(e) {
    this.cells = e;
  }
  static createSingle(e, t) {
    return new U([new ke(e, t)]);
  }
}
class Ie {
  constructor(e) {
    var t, o;
    this.tableScope = e, (t = this.tableScope.tableOptions) != null && t.getSelectionModel && (this.getSelectionModel = this.tableScope.tableOptions.getSelectionModel), (o = this.tableScope.tableOptions) != null && o.getFocusModel && (this.getFocusModel = this.tableScope.tableOptions.getFocusModel);
  }
  onMouseClicked(e, t) {
    var i, r, l, n, d, a, c;
    let o = !1, s = !1;
    if (this.getSelectionModel && this.getFocusModel) {
      const u = this.getSelectionModel(), m = this.getFocusModel();
      u && m && (m.hasFocus(e.rowIndex, e.columnIndex) || (m.setFocus(e.rowIndex, e.columnIndex), o = !0), (i = e.originalEvent) != null && i.shiftKey || u.hasSelection() && (u.clear(), o = !0), (r = e.originalEvent) != null && r.shiftKey && this.previousEvt ? (u.addSelection(this.createRangeByEvents(e, this.previousEvt)), s = !0, o = !0) : (l = e.originalEvent) != null && l.ctrlKey || (n = e.originalEvent) != null && n.metaKey ? (u.addSelection(E.singleCell(e.rowIndex, e.columnIndex)), s = !0, o = !0) : (d = e.originalEvent) != null && d.altKey && ((a = e.originalEvent) != null && a.ctrlKey || (c = e.originalEvent) != null && c.metaKey) && (u.removeSelection(E.singleCell(e.rowIndex, e.columnIndex)), s = !0, o = !0));
    }
    return s ? this.previousEvt = void 0 : this.previousEvt = e == null ? void 0 : e.clone(), o;
  }
  onActionTriggered(e) {
    if (this.getSelectionModel && this.getFocusModel) {
      const t = this.getSelectionModel(), o = this.getFocusModel();
      if (t && o) {
        if (e === "SELECT_ALL")
          return t.selectAll(), this.tableScope.repaint(), !0;
        if (e === "DESELECT_ALL")
          return t.clear(), this.tableScope.repaint(), !0;
        if (e === "TOGGLE_SELECTION") {
          const [s, i] = o.getFocus();
          return t.togglePoint(s, i), this.tableScope.repaint(), !0;
        }
      }
    }
    return !1;
  }
  createRangeByEvents(e, t) {
    t || (t = e);
    const o = Math.min(e.rowIndex, t == null ? void 0 : t.rowIndex), s = Math.max(e.rowIndex, t == null ? void 0 : t.rowIndex), i = Math.min(e.columnIndex, t == null ? void 0 : t.columnIndex), r = Math.max(e.columnIndex, t == null ? void 0 : t.columnIndex);
    return E.create({
      rowIndex1: o,
      columnIndex1: i,
      rowIndex2: s,
      columnIndex2: r
    });
  }
}
class Te {
  get() {
    return {
      f2: "START_EDITING",
      space: "TOGGLE_SELECTION",
      "ctrl+num_add": "SELECT_ALL",
      "ctrl+a": "SELECT_ALL",
      "ctrl+shift+a": "DESELECT_ALL",
      "ctrl+x": "DESELECT_ALL",
      "ctrl+num_subtract": "DESELECT_ALL",
      "cmd -": "DESELECT_ALL",
      arrowup: "NAVIGATE_UP",
      arrowdown: "NAVIGATE_DOWN",
      arrowleft: "NAVIGATE_LEFT",
      arrowright: "NAVIGATE_RIGHT"
    };
  }
}
class _e {
  get() {
    return {
      f2: "START_EDITING",
      space: "TOGGLE_SELECTION",
      "ctrl+num_add": "SELECT_ALL",
      "cmd+a": "SELECT_ALL",
      "ctrl+a": "SELECT_ALL",
      "cmd+x": "DESELECT_ALL",
      "cmd+shift+a": "DESELECT_ALL",
      "ctrl+shift+a": "DESELECT_ALL",
      "ctrl+num_subtract": "DESELECT_ALL",
      "ctrl -": "DESELECT_ALL",
      arrowup: "NAVIGATE_UP",
      arrowdown: "NAVIGATE_DOWN",
      arrowleft: "NAVIGATE_LEFT",
      arrowright: "NAVIGATE_RIGHT"
    };
  }
}
class De {
  constructor(e) {
    this.tableScope = e, this.shortcutActionIdMapping = {}, this.listener = [], this.listener.push(e), this.init();
  }
  addListener(e) {
    this.listener.includes(e) || this.listener.push(e);
  }
  init() {
    this.isMacintosh() ? Object.assign(this.shortcutActionIdMapping, new _e().get()) : Object.assign(this.shortcutActionIdMapping, new Te().get()), Object.assign(this.shortcutActionIdMapping, this.tableScope.tableOptions.shortcutActionIdMapping), this.isDebug() && console.debug("ShortcutService", this.shortcutActionIdMapping), this.tableScope.hostElement.addEventListener("keydown", this.onKeyDown.bind(this));
  }
  isMacintosh() {
    return navigator.platform.indexOf("Mac") > -1;
  }
  isDebug() {
    return this.isLocalhost();
  }
  isLocalhost() {
    return location.hostname === "localhost" || location.hostname === "127.0.0.1";
  }
  onKeyDown(e) {
    const t = this.findEnty(e);
    t && this.emit(t) && (e.preventDefault(), e.stopPropagation());
  }
  emit(e) {
    this.isDebug() && console.debug("ShortcutService emit:", e);
    let t = !1;
    for (const o of this.listener)
      o.onActionTriggered(e) && (t = !0);
    return t;
  }
  findEnty(e) {
    const t = this.getTokenByEvent(e);
    this.isDebug() && console.debug("ShortcutService tokens:", t);
    for (const o in this.shortcutActionIdMapping) {
      const s = o.replace(/opt/g, "alt").replace(/cmd/g, "meta").split(/[\+ ]/g).sort();
      if (this.areTokensEquals(t, s))
        return this.shortcutActionIdMapping[o];
    }
  }
  areTokensEquals(e, t) {
    if (e.length !== t.length || e.length === 0)
      return !1;
    for (let o = 0; o < e.length; o++)
      if (e[o] !== t[o])
        return !1;
    return !0;
  }
  getTokenByEvent(e) {
    const t = [];
    return e.altKey && t.push("alt"), e.shiftKey && t.push("shift"), e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), e.code && t.push(e.code.toLowerCase().replace(/key/g, "")), t.sort();
  }
}
class Q {
  onCheckboxChanged(e) {
  }
  onContextmenu(e) {
  }
  onModelChanged(e) {
  }
  onMouseClicked(e) {
  }
  onMouseDragging(e) {
  }
  onMouseDraggingEnd(e) {
  }
  onMouseMoved(e) {
  }
}
class $e {
  setStyle(e, t, o) {
    return e.style[t] = o, e;
  }
  appendText(e, t) {
    const o = this.createText(t);
    return this.appendChild(e, o), o;
  }
  addClass(e, t) {
    return t.includes(" ") ? t.split(" ").forEach((o) => e.classList.add(o)) : e.classList.add(t), e;
  }
  removeClass(e, t) {
    return t.includes(" ") ? t.split(" ").forEach((o) => e.classList.remove(o)) : e.classList.remove(t), e;
  }
  appendChild(e, t) {
    e.appendChild(t);
  }
  createElement(e) {
    return document.createElement(e);
  }
  createText(e) {
    return document.createTextNode(e);
  }
  setAttribute(e, t, o) {
    e.setAttribute(t, o);
  }
}
class Fe {
  render(e, t, o, s, i, r, l) {
    if (i.isEditable(t, o)) {
      l.addClass(e, "ge-table-row-input-div");
      const n = i.getValueAt(t, o);
      e.innerHTML = `
            <input
                type="text"
                value="${n}"
                autofocus
                onfocus="this.setSelectionRange(0, this.value.length)"
                data-listen="change"
                data-area="${s}"
                data-row-index="${t}"
                data-col-index="${o}"
                data-input-type="text"
                style="width:calc(100% - 8px);height:100%;border:0;padding:0 0 0 8px;"
                class="ge-table-cell-editor-input">`;
    }
  }
}
class Le {
  constructor(e = "none", t = "single") {
    this.selectionType = e, this.selectionMode = t, this.ranges = [], this.negativeRanges = [], this.allSelected = !1;
  }
  getSelectionCount(e, t) {
    let o = 0;
    for (const s of this.ranges)
      s.isInRange(e, t) && o++;
    return this.allSelected && o++, this.isInNegativeRange(e, t) && (o = 0), o;
  }
  isInNegativeRange(e, t) {
    for (const o of this.negativeRanges)
      if (o.isInRange(e, t))
        return !0;
    return !1;
  }
  getRanges() {
    return this.ranges;
  }
  clear() {
    this.ranges = [], this.negativeRanges = [], this.allSelected = !1;
  }
  hasSelection() {
    return !!this.ranges.length;
  }
  selectAll() {
    this.allSelected = !0;
  }
  addSelection(e) {
    this.addRange(e);
  }
  removeSelection(e) {
    if (this.selectionType === "none")
      return;
    let t = e;
    this.selectionType === "row" ? t = E.singleRow(e.r1) : this.selectionType === "column" && (t = E.singleColumn(e.c1)), this.negativeRanges.push(t);
  }
  togglePoint(e, t) {
    this.getSelectionCount(e, t) > 0 ? this.removeSelection(E.singleCell(e, t)) : this.addSelection(E.singleCell(e, t));
  }
  addRange(e) {
    this.selectionType !== "none" && (this.allSelected = !1, this.selectionMode === "single" && (this.ranges = []), this.selectionType === "row" ? (e.c1 = 0, e.c2 = Number.MAX_SAFE_INTEGER) : this.selectionType === "column" ? (e.r1 = 0, e.r2 = Number.MAX_SAFE_INTEGER) : this.selectionType === "cell" ? (e.r2 = e.r1, e.c2 = e.c1) : this.selectionType, this.ranges.push(e));
  }
}
class Oe {
  constructor(e = "none") {
    this.selectionType = e, this.rowIndex = -1, this.columnIndex = -1, this.changed = !1;
  }
  clearChanged() {
    this.changed = !1;
  }
  hasChanged() {
    return this.changed;
  }
  clear() {
    this.rowIndex = -1, this.columnIndex = -1;
  }
  setFocus(e, t) {
    (this.rowIndex !== e || this.columnIndex !== t) && (this.rowIndex = e, this.columnIndex = t, this.changed = !0);
  }
  hasFocus(e, t) {
    return this.rowIndex === e && this.columnIndex === t;
  }
  getFocus() {
    return [this.rowIndex, this.columnIndex];
  }
}
const Pe = new Le(), He = new Oe("cell");
class z {
  constructor() {
    this.overflowX = "auto", this.overflowY = "auto", this.horizontalBorderVisible = !0, this.verticalBorderVisible = !0, this.footerSeparatorBorderVisible = !0, this.headerSeparatorBorderVisible = !0, this.fixedEastSeparatorBorderVisible = !0, this.fixedWestSeparatorBorderVisible = !0, this.tableTopBorderVisible = !0, this.tableBottomBorderVisible = !0, this.hoverRowVisible = !0, this.hoverColumnVisible = !0, this.columnsResizable = !0, this.columnsDraggable = !0, this.columnResizeHandleWidthInPx = 4, this.defaultRowHeights = {
      header: 34,
      body: 34,
      footer: 34
    }, this.footerVerticalSeparator = !1, this.headerToggleExpandCollapseIcons = !1, this.headerVerticalSeparator = !1, this.treeOptions = new ae(), this.showCheckboxWihoutExtraColumn = !1, this.externalFilterFunction = void 0, this.sortedOptions = new de(), this.sortOrder = ["asc", "desc"], this.getEditRenderer = (e, t) => new Fe(), this.getSelectionModel = () => Pe, this.getFocusModel = () => He;
  }
}
class he extends Ae {
  constructor(e, t, o, s, i) {
    var r;
    if (super(
      e,
      t,
      new pe(o),
      s
    ), this.eventListener = i, this.selectionService = new Ie(this), this.api = new we(this), this.mouseStartAction = "", this.mouseStartWidth = -1, this.mouseStartColumnIndex = -1, this.dragFrom = -1, this.dragTo = -1, i || (this.eventListener = new Q()), (r = this.tableOptions) != null && r.autoRestoreOptions) {
      const l = this.tableOptions.autoRestoreOptions, n = l.getStorageKeyFn;
      n && (l.autoRestoreScrollPosition && (this.storeScrollPosStateService = new Se(n)), l.autoRestoreCollapsedExpandedState && (this.storeStateCollapsedExpandService = new ye(n)), l.autoRestoreSortingState && (this.storeSortingService = new Ce(n)));
    }
    this.mouseHandler = new me(this), this.inputHandler = new Me(this), this.shortcutService = new De(this), this.shortcutService.addListener(this.selectionService);
  }
  static create(e, t, o = new z(), s = new Q(), i = new $e()) {
    return new he(
      e,
      t,
      i,
      o,
      s
    );
  }
  onActionTriggered(e) {
    if (e === "NAVIGATE_DOWN" && this.changeFocusCell(0, 1) || e === "NAVIGATE_UP" && this.changeFocusCell(0, -1) || e === "NAVIGATE_LEFT" && this.changeFocusCell(-1, 0) || e === "NAVIGATE_RIGHT" && this.changeFocusCell(1, 0))
      return !0;
    if (e === "START_EDITING" && this.getFocusModel) {
      const t = this.getFocusModel();
      if (t) {
        const [o, s] = t.getFocus();
        this.tableModel.getBodyModel().isEditable(o, s) && (this.clearSelection(), this.initRenderEditor(o, s));
      }
      return !0;
    }
    return !1;
  }
  updateModelValueAfterEdit(e, t, o, s) {
    e === "body" && this.tableModel.getAreaModel(e).setValue(t, o, s) && (this.resetEditorRenderer(), this.repaint(), this.eventListener.onModelChanged(U.createSingle(t, o)), this.hostElement.focus());
  }
  getApi() {
    return this.api;
  }
  /*
   * Called by the table component
   */
  firstInit() {
    var e;
    return this.tableModel.init(), (e = this.tableOptions) != null && e.externalFilterFunction && this.externalFilterChanged(!1), this.autoRestoreCollapsedExpandedState(), this.autoRestoreSortingState(), this.resetSizeOfWrapperDiv(), this.adjustContainersAndRows(), this.autoRestoreScrollPosition(), this;
  }
  createGeMouseEvent(e) {
    const t = new X();
    if (t.originalEvent = e, e) {
      const o = e.target;
      if ([t.areaIdent, t.sideIdent] = this.getAreaAndSideIdentByAttr(o), t.rowIndex = this.getNumberByAttr(o, "data-row-index"), t.columnIndex = this.getNumberByAttr(o, "data-col-index"), t.action = this.getStringByAttr(o, "data-ge-action"), t.areaIdent) {
        const s = this.tableModel.getAreaModel(t.areaIdent);
        t.rowTop = s.getYPosByRowIndex(t.rowIndex);
      }
      if (t.columnLeft = this.tableModel.getXPosByColumnIndex(t.columnIndex), e.ctrlKey && e.altKey) {
        const s = e.clientY - this.hostElement.offsetTop - this.areaHeaderCenter.parent.clientHeight, i = e.clientX - this.hostElement.offsetLeft - this.areaBodyWestGeo.width;
        this.debugOnce(i, s);
      }
    }
    return t;
  }
  onMouseDown(e) {
    e.columnIndex > -1 && e.action && ["resize-column", "drag-column"].includes(e.action) && (this.mouseStartWidth = this.tableModel.getColumnWidth(e.columnIndex), this.mouseStartAction = e.action, this.mouseStartColumnIndex = e.columnIndex, this.mouseStartAction === "drag-column" && (this.dragFrom = this.mouseStartColumnIndex));
  }
  mouseDraggingOnFrame(e) {
    this.eventListener.onMouseDragging(e), this.mouseEvent = e, this.mouseStartColumnIndex > -1 && this.mouseStartAction === "resize-column" && this.tableOptions.columnsResizable ? this.resizeColumn(e) : this.mouseStartAction === "drag-column" && e.columnIndex > -1 && this.tableOptions.columnsDraggable && (this.draggingTargetColumnIndex = e.columnIndex, this.dragTo = this.draggingTargetColumnIndex, this.dragFrom > -1 && this.dragTo > -1 && this.dragFrom !== this.dragTo && (this.tableModel.changeColumnOrder(this.dragFrom, this.dragTo), this.dragFrom = this.dragTo, this.resetSizeOfWrapperDiv(), this.adjustContainersAndRows()), this.repaint());
  }
  mouseDraggingEndOnFrame(e) {
    this.eventListener.onMouseDraggingEnd(e), this.draggingTargetColumnIndex = -1, this.mouseStartAction === "resize-column" ? this.resizeColumn(e) : this.mouseStartAction === "drag-column" && this.repaint(), this.mouseStartWidth = -1, this.mouseStartColumnIndex = -1, this.dragFrom = -1, this.dragTo = -1, this.mouseStartAction = "";
  }
  mouseMove(e) {
    this.eventListener.onMouseMoved(e), this.adjustHoverRows(e), this.adjustHoverColumns(e);
  }
  contextmenu(e) {
    this.eventListener.onContextmenu(e);
  }
  toggleExpandCollapseAll(e = !0) {
    var o;
    const t = this.tableModel.getBodyModel();
    N(t) && (t.toggleExpandCollapseAll(e), this.repaint(), (o = this.storeStateCollapsedExpandService) == null || o.collapsedStateAll(e));
  }
  toggleRowCheckbox(e, t, o) {
    var n;
    const s = this.tableModel.getAreaModel(o), i = s.isRowChecked(e), r = i === void 0 || i === "semi" || i === "none";
    s.setRowChecked(e, r), this.repaint();
    const l = (n = s.rowSelectionModel) == null ? void 0 : n.getCheckedRows();
    this.eventListener.onCheckboxChanged(l || []);
  }
  onMouseClicked(e, t) {
    let o = this.selectionService.onMouseClicked(e, t);
    if (!o && this.getFocusModel) {
      const s = this.getFocusModel();
      s && (o = s.hasChanged(), s.clearChanged(), o && this.resetEditorRenderer());
    }
    this.eventListener.onMouseClicked(e), o && this.debounce(this.repaint.bind(this), 10);
  }
  externalFilterChanged(e = !0) {
    const t = this.tableOptions.externalFilterFunction;
    t && (e && this.clearSelectionModel(), this.tableModel.externalFilterChanged(t), this.scrollViewport.scrollTo(0, 0), this.tableModel.recalcHeightAndPadding(), this.resetSizeOfWrapperDiv(), this.repaint());
  }
  onHeaderDblClicked(e, t, o) {
    var i, r;
    const s = this.tableModel.getColumnDef(o);
    if (s != null && s.sortable && s.sortable()) {
      e.preventDefault(), e.stopPropagation();
      const l = s.sortStatesOrder ? s.sortStatesOrder : this.tableOptions.sortOrder, n = s.sortState ?? "", d = l[(l.indexOf(n) + 1) % l.length], a = new Ee(o, d);
      this.tableModel.doSort([a]) && ((i = this.tableModel.getColumnDefs()) == null || i.forEach((u) => u.sortState = ""), s.sortState = d), this.repaint(), (r = this.storeSortingService) == null || r.setSortItems([a]);
    }
  }
  changeFocusCell(e, t) {
    if (!this.isEditing() && this.getFocusModel) {
      const o = this.getFocusModel();
      if (o) {
        const [s, i] = o.getFocus();
        return o.setFocus(s + t, i + e), this.repaint(), !0;
      }
    }
    return !1;
  }
  resizeColumn(e) {
    this.tableModel.setColumnWidth(this.mouseStartColumnIndex, this.mouseStartWidth + e.draggingX), this.tableModel.recalcPadding(), this.resetSizeOfWrapperDiv(), this.adjustContainersAndRows();
  }
  clearSelectionModel() {
    var e;
    this.getSelectionModel && ((e = this.getSelectionModel()) == null || e.clear());
  }
  debugOnce(e, t) {
    var o;
    console.clear(), console.info("this.hostElement.offsetTop", this.hostElement.offsetTop), console.info("this.hostElement.scrollHeight", this.hostElement.scrollHeight), console.info("this.scrollViewportTop", this.scrollTop), console.info("this.areaHeaderCenter.parent.clientHeight", this.areaHeaderCenter.parent.clientHeight), console.info("bodyY", t), console.info("bodyX", e), console.info("rows", this.firstVisibleRowIndex), console.info(""), console.info("this.tableModel", this.tableModel), console.info(""), console.info("this.mouseMoveEvent.clientX", (o = this.mouseHandler.mouseEvent) == null ? void 0 : o.clientX), console.info("this.hostElement.offsetLeft", this.hostElement.offsetLeft), console.info("this.areaBodyWestGeo.width", this.areaBodyWestGeo.width);
  }
  autoRestoreScrollPosition() {
    var e;
    if ((e = this.tableOptions) != null && e.autoRestoreOptions && this.storeScrollPosStateService && this.tableOptions.autoRestoreOptions.autoRestoreScrollPosition) {
      const o = this.storeScrollPosStateService.getScrollOffset();
      o && this.scrollViewport.scrollTo(...o);
    }
  }
  autoRestoreSortingState() {
    var e, t;
    if ((t = (e = this.tableOptions) == null ? void 0 : e.autoRestoreOptions) != null && t.autoRestoreSortingState && this.storeSortingService) {
      const o = this.storeSortingService.getSortItems();
      o != null && o.length && this.tableModel.getBodyModel().doSort(o);
    }
  }
  autoRestoreCollapsedExpandedState() {
    var e, t;
    if ((t = (e = this.tableOptions) == null ? void 0 : e.autoRestoreOptions) != null && t.getRowId && this.storeStateCollapsedExpandService) {
      const o = this.tableOptions.autoRestoreOptions, s = o.getRowId;
      if (o.autoRestoreCollapsedExpandedState && s) {
        const i = this.storeStateCollapsedExpandService.collapsedExpandedStateGet(), r = this.tableModel.getAreaModel("body");
        if (N(r)) {
          const l = r, n = r.getRowCount();
          for (let d = 0; d < n; d++) {
            const a = r.getRowByIndex(d);
            if (a)
              if (i.allExpanded)
                a.expanded = !0;
              else if (i.allCollapsed)
                a.expanded = !1;
              else {
                const c = s(a.data);
                i.mode === "expanded" ? a.expanded = this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(c) : i.mode === "collapsed" && (a.expanded = !this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(c));
              }
          }
          l.recalcVisibleTreeRows();
        }
      }
    }
  }
}
class ce {
}
ce.themes = ["light", "combat", "paper", "blackboard"];
ce.vars = {
  light: `html[data-theme="light"] {
  --ge-table-bg: rgba(255,255,255, 0.5);
  --ge-table-header-west-bg: rgba(233, 233, 233, 0.5);
  --ge-table-header-center-bg: rgba(233, 233, 233, 0.5);
  --ge-table-header-east-bg: rgba(233, 233, 233, 0.5);
  --ge-table-header-west-text: #000;
  --ge-table-header-center-text: #000;
  --ge-table-header-east-text: #000;
  --ge-table-header-west-horizontal-border: #ddd;
  --ge-table-header-west-vertical-border: #ccc;
  --ge-table-header-center-horizontal-border: #ddd;
  --ge-table-header-center-vertical-border: #ccc;
  --ge-table-header-east-horizontal-border: #ddd;
  --ge-table-header-east-vertical-border: #ccc;
  --ge-table-body-west-bg: rgba(233, 233, 233, 0.5);
  --ge-table-body-center-bg: rgba(255,255,255, 0.5);
  --ge-table-body-east-bg: rgba(233, 233, 233, 0.5);
  --ge-table-body-west-text: #000;
  --ge-table-body-center-text: #000;
  --ge-table-body-east-text: #000;
  --ge-table-body-west-horizontal-border: #ddd;
  --ge-table-body-west-vertical-border: #ccc;
  --ge-table-body-center-horizontal-border: #bbb;
  --ge-table-body-center-vertical-border: #ddd;
  --ge-table-body-east-horizontal-border: #ddd;
  --ge-table-body-east-vertical-border: #ccc;
  --ge-table-body-west-selected-range-bg: rgba(0, 152, 219, 0.4);
  --ge-table-body-center-selected-range-bg: rgba(0, 152, 219, 0.4);
  --ge-table-body-east-selected-range-bg: rgba(0, 152, 219, 0.4);
  --ge-table-body-west-selected-range-text: #000;
  --ge-table-body-center-selected-range-text: #000;
  --ge-table-body-east-selected-range-text: #000;
  --ge-table-footer-west-bg: rgba(233, 233, 233, 0.5);
  --ge-table-footer-center-bg: rgba(233, 233, 233, 0.5);
  --ge-table-footer-east-bg: rgba(233, 233, 233, 0.5);
  --ge-table-footer-west-text: #000;
  --ge-table-footer-center-text: #000;
  --ge-table-footer-east-text: #000;
  --ge-table-footer-west-horizontal-border: #ddd;
  --ge-table-footer-west-vertical-border: #ccc;
  --ge-table-footer-center-horizontal-border: #ddd;
  --ge-table-footer-center-vertical-border: #ccc;
  --ge-table-footer-east-horizontal-border: #ddd;
  --ge-table-footer-east-vertical-border: #ccc;
  --ge-table-border: #ccc;
  --ge-table-row-odd-bg: transparent;
  --ge-table-row-even-bg: transparent;
  --ge-table-column-odd-bg: transparent;
  --ge-table-column-even-bg: transparent;
  --ge-table-hover-column-bg: rgba(0, 224, 255, 0.27);
  --ge-table-hover-row-bg: rgba(0, 224, 255, 0.27);
  --ge-table-focus-border: rgb(0, 255, 255);
  --ge-table-color-error-text: #e00034;
  --ge-table-tree-arrow-collapsed-color: #e00034;
  --ge-table-column-resize-handle-border: rgb(0, 255, 255);
  --ge-table-dragged-col-div-bg: lightcyan;
  --ge-table-drop-zone-bg: rgba(244, 255, 242, 0.6);
}`,
  combat: `html[data-theme="combat"] {
  --ge-table-bg: #101010;
  --ge-table-header-west-bg: #101010;
  --ge-table-header-center-bg: #101010;
  --ge-table-header-east-bg: #101010;
  --ge-table-header-west-text: oklch(100% 0 0);
  --ge-table-header-center-text: oklch(100% 0 0);
  --ge-table-header-east-text: oklch(100% 0 0);
  --ge-table-header-west-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-header-west-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-header-center-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-header-center-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-header-east-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-header-east-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-west-bg: #101010;
  --ge-table-body-center-bg: #101010;
  --ge-table-body-east-bg: #101010;
  --ge-table-body-west-text: #b6b4b4;
  --ge-table-body-center-text: #b6b4b4;
  --ge-table-body-east-text: #b6b4b4;
  --ge-table-body-west-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-body-west-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-center-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-body-center-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-east-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-body-east-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-west-selected-range-bg: oklch(20% 0.2 39.6 / 37%);
  --ge-table-body-center-selected-range-bg: oklch(20% 0.2 39.6 / 37%);
  --ge-table-body-east-selected-range-bg: oklch(20% 0.2 39.6 / 37%);
  --ge-table-body-west-selected-range-text: #f00032;
  --ge-table-body-center-selected-range-text: #f00032;
  --ge-table-body-east-selected-range-text: #f00032;
  --ge-table-footer-west-bg: #101010;
  --ge-table-footer-center-bg: #101010;
  --ge-table-footer-east-bg: #101010;
  --ge-table-footer-west-text: oklch(100% 0 0);
  --ge-table-footer-center-text: oklch(100% 0 0);
  --ge-table-footer-east-text: oklch(100% 0 0);
  --ge-table-footer-west-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-west-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-center-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-center-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-east-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-east-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-border: oklch(100% 0 0 / 0%);
  --ge-table-row-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-row-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-hover-column-bg: oklch(34% 0.25 3.6 / 27%);
  --ge-table-hover-row-bg: oklch(34% 0.25 3.6 / 27%);
  --ge-table-focus-border: oklch(40% 0.25 3.6);
  --ge-table-color-error-text: oklch(65% 0.31 43.2);
  --ge-table-tree-arrow-collapsed-color: #e00034;
  --ge-table-column-resize-handle-border: oklch(63% 0.31 43.2);
  --ge-table-dragged-col-div-bg: #2c2e33;
  --ge-table-drop-zone-bg: #101010;
}`,
  paper: `html[data-theme="paper"] {
  --ge-table-bg: #e7e5df;
  --ge-table-header-west-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-header-center-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-header-east-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-header-west-text: #111;
  --ge-table-header-center-text: #111;
  --ge-table-header-east-text: #111;
  --ge-table-header-west-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-header-west-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-header-center-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-header-center-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-header-east-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-header-east-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-west-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-body-center-bg: #e7e5df;
  --ge-table-body-east-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-body-west-text: #000;
  --ge-table-body-center-text: #000;
  --ge-table-body-east-text: #000;
  --ge-table-body-west-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-body-west-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-center-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-body-center-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-east-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-body-east-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-west-selected-range-bg: #cfcdc2;
  --ge-table-body-center-selected-range-bg: #cfcdc2;
  --ge-table-body-east-selected-range-bg: #cfcdc2;
  --ge-table-body-west-selected-range-text: #000;
  --ge-table-body-center-selected-range-text: #000;
  --ge-table-body-east-selected-range-text: #000;
  --ge-table-footer-west-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-footer-center-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-footer-east-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-footer-west-text: #111;
  --ge-table-footer-center-text: #111;
  --ge-table-footer-east-text: #111;
  --ge-table-footer-west-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-west-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-center-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-center-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-east-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-east-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-border: oklch(100% 0 0 / 0%);
  --ge-table-row-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-row-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-hover-column-bg: oklch(5% 0.2 266.40000000000003 / 9%);
  --ge-table-hover-row-bg: oklch(5% 0.2 266.40000000000003 / 9%);
  --ge-table-focus-border: oklch(100% 0.19 205.20000000000002);
  --ge-table-color-error-text: oklch(45% 0.25 43.2);
  --ge-table-tree-arrow-collapsed-color: #e00034;
  --ge-table-column-resize-handle-border: oklch(100% 0.19 205.20000000000002 / 71%);
  --ge-table-dragged-col-div-bg: #2c2e33;
  --ge-table-drop-zone-bg: #e7e5df;
}`,
  blackboard: `html[data-theme="dark"] {
  --ge-table-bg: #0c1021;
  --ge-table-header-west-bg: #0c1021;
  --ge-table-header-center-bg: #0c1021;
  --ge-table-header-east-bg: #0c1021;
  --ge-table-header-west-text: #e0df85;
  --ge-table-header-center-text: #e0df85;
  --ge-table-header-east-text: #e0df85;
  --ge-table-header-west-horizontal-border: transparent;
  --ge-table-header-west-vertical-border: transparent;
  --ge-table-header-center-horizontal-border: transparent;
  --ge-table-header-center-vertical-border: transparent;
  --ge-table-header-east-horizontal-border: transparent;
  --ge-table-header-east-vertical-border: transparent;
  --ge-table-body-west-bg: #0c1021;
  --ge-table-body-center-bg: #0c1021;
  --ge-table-body-east-bg: #0c1021;
  --ge-table-body-west-text: #a7a7a7;
  --ge-table-body-center-text: #a7a7a7;
  --ge-table-body-east-text: #a7a7a7;
  --ge-table-body-west-horizontal-border: transparent;
  --ge-table-body-west-vertical-border: transparent;
  --ge-table-body-center-horizontal-border: transparent;
  --ge-table-body-center-vertical-border: transparent;
  --ge-table-body-east-horizontal-border: transparent;
  --ge-table-body-east-vertical-border: transparent;
  --ge-table-body-west-selected-range-bg: #758129;
  --ge-table-body-center-selected-range-bg: #758129;
  --ge-table-body-east-selected-range-bg: #758129;
  --ge-table-body-west-selected-range-text: oklch(100% 0 0);
  --ge-table-body-center-selected-range-text: oklch(100% 0 0);
  --ge-table-body-east-selected-range-text: oklch(100% 0 0);
  --ge-table-footer-west-bg: #0c1021;
  --ge-table-footer-center-bg: #0c1021;
  --ge-table-footer-east-bg: #0c1021;
  --ge-table-footer-west-text: #e0df85;
  --ge-table-footer-center-text: #e0df85;
  --ge-table-footer-east-text: #e0df85;
  --ge-table-footer-west-horizontal-border: transparent;
  --ge-table-footer-west-vertical-border: transparent;
  --ge-table-footer-center-horizontal-border: transparent;
  --ge-table-footer-center-vertical-border: otransparent;
  --ge-table-footer-east-horizontal-border: transparent;
  --ge-table-footer-east-vertical-border: transparent;
  --ge-table-border: oklch(0% 0 0);
  --ge-table-row-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-row-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-hover-column-bg: #a9a9a9;
  --ge-table-hover-row-bg: #a9a9a9;
  --ge-table-focus-border: #e1ff00;
  --ge-table-color-error-text: #ff0040;
  --ge-table-tree-arrow-collapsed-color: #e00034;
  --ge-table-column-resize-handle-border: oklch(0% 0 0);
  --ge-table-dragged-col-div-bg: #2c2e33;
  --ge-table-drop-zone-bg: #758129;
}`
};
class Z {
  constructor(e, t = !0, o, s, i = 0, r = !1, l = !1) {
    this.data = e, this.expanded = t, this.children = o, this.parent = s, this.deep = i, this.checked = r, this.keep = l, this.type = "TreeRow";
  }
}
class j {
  static buildTreeRows(e, t = "children", o = 12) {
    const s = [];
    for (const i of e)
      s.push(j.buildTreeRow(i, t, void 0, 0, o));
    return s;
  }
  static buildTreeRow(e, t = "children", o = new Z(e, !0, [], void 0, 0), s = 0, i = 12) {
    var l;
    if (s > i)
      return console.warn("Max deep limit reached: ", s), o;
    const r = e[t];
    if (r)
      for (const n of r) {
        const d = new Z(n, !0, [], o, s + 1);
        if ((l = o.children) == null || l.push(d), j.buildTreeRow(
          n,
          t,
          d,
          s + 1
        ), s > i)
          return console.warn("Max deep limit reached: ", s), o;
      }
    return o;
  }
}
class P {
  constructor(e = 34, t = 34, o = 34) {
    this.header = e, this.body = t, this.footer = o;
  }
}
class f {
  constructor(e = 100, t = "px") {
    this.value = e, this.unit = t;
  }
}
const Ve = () => !0, ee = () => !1;
class H {
  constructor(e, t, o = new f(100, "px"), s = new I(), i = new I(), r = new f(100, "px"), l = new f(100, "px"), n, d, a, c, u, m, b, w, g = () => this.visible) {
    this.property = e, this.headerLabel = t, this.width = o, this.classes = s, this.rendererMap = i, this.minWidth = r, this.maxWidth = l, this.sortable = n, this.sortComparator = d, this.sortState = a, this.sortStatesOrder = c, this.sortIconVisible = u, this.editable = m, this.getEditRenderer = b, this.editInputPipe = w, this.isVisible = g, this.visible = !0;
  }
  static bodyRenderer(e) {
    return new I(
      void 0,
      e,
      void 0
    );
  }
  static create(e) {
    const t = new I(
      e.headerRenderer,
      e.bodyRenderer,
      e.footerRenderer
    ), o = new I(
      e.headerClasses,
      e.bodyClasses,
      e.footerClasses
    ), s = e.sortIconVisible ?? e.sortable ?? ee, i = e.editable ?? e.editable ?? ee, r = e.isVisible ?? e.isVisible ?? Ve;
    return new H(
      e.property ?? "",
      e.headerLabel ?? "",
      e.width ?? new f(100, "px"),
      o,
      t,
      e.minWidth ?? new f(100, "px"),
      e.maxWidth ?? new f(100, "px"),
      e.sortable,
      e.sortComparator,
      e.sortState,
      e.sortStatesOrder,
      s,
      i,
      e.getEditRenderer,
      e.editInputPipe,
      r
    );
  }
}
const Ke = new f(300, "px"), Ue = new f(290, "px"), qe = new f(280, "px"), Je = new f(270, "px"), Qe = new f(260, "px"), Ze = new f(250, "px"), et = new f(240, "px"), tt = new f(230, "px"), ot = new f(220, "px"), st = new f(210, "px"), te = new f(200, "px"), it = new f(190, "px"), rt = new f(180, "px"), lt = new f(170, "px"), nt = new f(160, "px"), at = new f(150, "px"), dt = new f(140, "px"), ht = new f(130, "px"), ct = new f(120, "px"), ut = new f(110, "px"), gt = new f(100, "px"), bt = new f(90, "px"), pt = new f(80, "px"), ft = new f(70, "px"), mt = new f(60, "px"), wt = new f(50, "px"), St = new f(40, "px"), xt = new f(30, "px"), yt = new f(20, "px"), Ct = new f(10, "px"), vt = new f(0, "px");
class q {
  constructor(e, t = [], o = -1) {
    this.areaIdent = e, this.columnDefs = t, this.defaultRowHeight = o, this.rowSelectionModel = void 0, this.yPositions = [], this.cellRenderers = t.map((s) => s.rendererMap[e]);
  }
  getTooltipAt(e, t) {
    return "";
  }
  getCellRenderer(e, t) {
    if (t < this.cellRenderers.length)
      return this.cellRenderers[t];
  }
  getColspanAt(e, t) {
    return 0;
  }
  getCustomClassesAt(e, t) {
    return [];
  }
  getCustomStyleAt(e, t) {
  }
  getRowspanAt(e, t) {
    return 0;
  }
  getRowByIndex(e) {
  }
  isRowCheckable(e) {
    return !0;
  }
  isRowChecked(e) {
    var o;
    const t = this.getRowByIndex(e);
    return (o = this.rowSelectionModel) == null ? void 0 : o.isRowChecked(t);
  }
  setRowChecked(e, t) {
    if (this.rowSelectionModel) {
      const o = this.getRowByIndex(e);
      this.rowSelectionModel.checkRow(o, t);
    }
  }
  getMaxColspan() {
    return 31;
  }
  getMaxRowspan() {
    return 31;
  }
  getYPosByRowIndex(e) {
    return this.defaultRowHeight > 0 ? this.defaultRowHeight * e : this.yPositions[e];
  }
  init() {
    !this.yPositions.length && this.getRowCount() !== void 0 && this.defaultRowHeight === -1 && this.calcYPositions();
  }
  isFilterable() {
    return this.areaIdent === "body";
  }
  doSort(e) {
    return !1;
  }
  isEditable(e, t) {
    return this.columnDefs && t < this.columnDefs.length && this.columnDefs[t].editable ? this.columnDefs[t].editable() : !1;
  }
  setValue(e, t, o) {
    var l;
    const s = (l = this.columnDefs[t]) == null ? void 0 : l.editInputPipe;
    s && (o = s(o, e, t));
    const i = this.getRowByIndex(e), r = this.columnDefs[t].property;
    return r.includes(".") ? this.setPropertyValue(i, r.split("."), o) : (i[r] = o, !0);
  }
  isSelectable(e, t) {
    return !0;
  }
  changeColumnOrder(e, t) {
    this.arrayMove(this.cellRenderers, e, t);
  }
  setPropertyValue(e, t, o) {
    const s = t.shift();
    if (s) {
      let i = e[s];
      return i && t.length ? this.setPropertyValue(i, t, o) : (e[s] = o, !0);
    }
    return !1;
  }
  arrayMove(e, t, o) {
    const s = e.splice(t, 1)[0];
    return e.splice(o, 0, s), e;
  }
  calcYPositions() {
    const e = this.getRowCount();
    this.yPositions = new Array(e + 1), this.yPositions[0] = 0;
    for (let t = 0; t < e; t++)
      this.yPositions[t + 1] = this.getRowHeight(t) + this.yPositions[t];
  }
}
class _ extends q {
  constructor(e, t, o, s = []) {
    super(e, s, o), this.areaIdent = e, this.arr = t, this.defaultRowHeight = o, this.columnDefs = s, this.filteredArr = [...t];
  }
  externalFilterChanged(e) {
    this.filteredArr = this.arr ? this.arr.filter(e) : [];
  }
  getRowCount() {
    return this.filteredArr ? this.filteredArr.length : 0;
  }
  getValueAt(e, t) {
    return this.filteredArr[e][t];
  }
  setValue(e, t, o) {
    var i;
    const s = (i = this.columnDefs[t]) == null ? void 0 : i.editInputPipe;
    return s && (o = s(o, e, t)), this.arr[e][t] = o, !0;
  }
  getRowByIndex(e) {
    return this.filteredArr[e];
  }
  getRowHeight(e) {
    return this.defaultRowHeight;
  }
  changeColumnOrder(e, t) {
    this.filteredArr.forEach((o) => this.arrayMove(o, e, t)), super.changeColumnOrder(e, t);
  }
}
class D {
  constructor(e = "body") {
    this.areaIdent = e, this.rowSelectionModel = void 0;
  }
  getRowCount() {
    return 0;
  }
  getValueAt(e, t) {
    return "";
  }
  getCellRenderer(e, t) {
  }
  getRowHeight(e) {
    return 0;
  }
  getColspanAt(e, t) {
    return 0;
  }
  getCustomClassesAt(e, t) {
    return [];
  }
  getCustomStyleAt(e, t) {
  }
  getRowspanAt(e, t) {
    return 0;
  }
  getRowByIndex(e) {
  }
  isRowCheckable(e) {
    return !1;
  }
  isRowChecked(e) {
  }
  setRowChecked(e, t) {
  }
  getTooltipAt(e, t) {
    return "";
  }
  getMaxColspan() {
    return 0;
  }
  getMaxRowspan() {
    return 0;
  }
  getYPosByRowIndex(e) {
    return 0;
  }
  init() {
  }
  externalFilterChanged(e) {
  }
  isFilterable() {
    return !1;
  }
  doSort(e) {
    return !1;
  }
  isEditable(e, t) {
    return !1;
  }
  setValue(e, t, o) {
    return !1;
  }
  isSelectable(e, t) {
    return !1;
  }
  changeColumnOrder(e, t) {
  }
}
class Be {
  flattenTree(e, t = []) {
    var o;
    for (const s of e)
      this.isVisible(s) && t.push(s), (o = s.children) != null && o.length && this.flattenTree(s.children, t);
    return t;
  }
  isVisible(e) {
    return e.parent ? e.parent.expanded ? this.isVisible(e.parent) : !1 : !0;
  }
}
class ue {
  genericSortComparator(e, t, o) {
    if (typeof e == "number" && typeof t == "number")
      return o * (e - t);
    if (typeof e == "string" && typeof t == "string")
      return o * e.localeCompare(t);
    if (typeof e == "boolean" && typeof t == "boolean")
      return o * ((e ? -1 : 1) - (t ? -1 : 1));
    if (e instanceof Date && t instanceof Date)
      return o * (e.getTime() - t.getTime());
    if (e instanceof Array && t instanceof Array) {
      const s = e, i = t;
      if (s.length && i.length)
        return this.genericSortComparator(s[0], i[0], o);
    }
    return o * ("" + e).localeCompare("" + t);
  }
}
class oe extends q {
  constructor(e, t, o, s = []) {
    super(e, s, o), this.areaIdent = e, this.rows = t, this.defaultRowHeight = o, this.columnDefs = s, this.type = "AreaModelTree", this.sorterService = new ue(), this.service = new Be(), this.properties = s.map((i) => i.property), this.flattenRows = this.service.flattenTree(t), this.filteredFlattenRows = [...this.flattenRows];
  }
  changeColumnOrder(e, t) {
    this.arrayMove(this.properties, e, t), super.changeColumnOrder(e, t);
  }
  recalcVisibleTreeRows() {
    this.filteredFlattenRows = this.service.flattenTree(this.rows);
  }
  getFilteredFlattenRows() {
    return this.filteredFlattenRows;
  }
  getRowCount() {
    let e = 0;
    for (const t of this.filteredFlattenRows)
      this.service.isVisible(t) && e++;
    return e;
  }
  getValueAt(e, t) {
    const o = this.getRowByIndex(e);
    if (o) {
      const s = this.properties[t];
      if (s)
        return s.includes(".") ? this.getPropertyValue(o.data, s.split(".")) : o.data[s];
    }
    return "";
  }
  getRowHeight(e) {
    return this.defaultRowHeight;
  }
  getCustomClassesAt(e, t) {
    return ["ge-table-tree-cell", "ge-table-tree-deep-" + this.filteredFlattenRows[e].deep];
  }
  getRowByIndex(e) {
    return this.filteredFlattenRows[e];
  }
  getValueByT(e, t) {
    return t.includes(".") ? this.getPropertyValue(e, t.split(".")) : e[t];
  }
  externalFilterChanged(e) {
    this.lastPredictFn = e, this.doFiltering();
  }
  doSort(e) {
    const { columnIndex: t, sortState: o } = e[e.length - 1], s = o === "asc" ? 1 : o === "desc" ? -1 : 0, i = this.properties[t];
    return this.treeSort(this.rows, i, s), this.flattenRows = this.service.flattenTree(this.rows), this.filteredFlattenRows = [...this.flattenRows], !0;
  }
  toggleExpandCollapseAll(e) {
    this.expandAllRecursive(this.rows, e), this.flattenRows = this.service.flattenTree(this.rows), this.doFiltering();
  }
  setAllParentsOk(e) {
    return e.parent && (e.parent.keep = !0, this.setAllParentsOk(e.parent)), !1;
  }
  setValue(e, t, o) {
    var r;
    const s = (r = this.columnDefs[t]) == null ? void 0 : r.editInputPipe;
    s && (o = s(o, e, t));
    const i = this.getRowByIndex(e);
    if (i) {
      const l = i.data, n = this.columnDefs[t].property;
      return n.includes(".") ? this.setPropertyValue(l, n.split("."), o) : (l[n] = o, !0);
    }
    return !1;
  }
  genericTreeTableSortComparator(e, t) {
    return (o, s) => {
      const i = this.getValueByT(o.data, e), r = this.getValueByT(s.data, e);
      return this.sorterService.genericSortComparator(i, r, t);
    };
  }
  expandAllRecursive(e, t) {
    for (const o of e)
      o.expanded = t, o.children && this.expandAllRecursive(o.children, t);
  }
  doFiltering() {
    if (!this.lastPredictFn)
      this.filteredFlattenRows = [...this.flattenRows ? this.flattenRows : []];
    else {
      this.flattenRows || (this.flattenRows = []);
      let e = 0;
      this.flattenRows.forEach((o) => {
        e = Math.max(e, o.deep);
      });
      const t = this.flattenRows.filter(
        (o, s, i) => this.lastPredictFn(o, s, i)
      );
      this.flattenRows.forEach((o) => o.keep = !1), this.flattenRows.forEach((o) => {
        t.includes(o) && (o.keep = !0, this.setAllParentsOk(o));
      }), this.filteredFlattenRows = this.flattenRows.filter(
        (o, s, i) => o.keep
      );
    }
  }
  getPropertyValue(e, t) {
    const o = t.shift();
    let s = e[o];
    return s && t.length ? this.getPropertyValue(s, t) : s;
  }
  treeSort(e, t, o) {
    e.sort(this.genericTreeTableSortComparator(t, o));
    for (const s of e)
      s.children && this.treeSort(s.children, t, o);
  }
}
class se {
  constructor(e = []) {
    this.allRootNodes = e;
  }
  checkRow(e, t) {
    if (e.checked = t, e.children)
      for (const o of e.children)
        this.checkRow(o, t);
    this.autoCheckParent(e.parent);
  }
  checkAll(e) {
    for (const t of this.allRootNodes)
      t.checked = !1, t.children && this.checkAll(t.children);
  }
  getCheckedRows() {
    const e = [];
    return this.addSelectedRecursive(this.allRootNodes, e), e;
  }
  isRowChecked(e) {
    if (e.checked)
      return "full";
    const t = this.areAllChildrenChecked(e), o = this.areAllChildrenUnchecked(e);
    return !t && !o ? "semi" : "none";
  }
  setCheckedRows(e) {
    this.addCheckedRows(e);
  }
  addCheckedRows(e) {
    for (const t of e)
      t.checked = !0;
  }
  autoCheckParent(e) {
    if (e) {
      const t = this.areAllChildrenChecked(e), o = this.areAllChildrenUnchecked(e);
      t ? e.checked = !0 : e.checked = !1, this.autoCheckParent(e.parent);
    }
  }
  areAllChildrenChecked(e) {
    var t, o;
    if ((t = e.children) != null && t.length) {
      for (const s of e.children)
        if (!s.checked || (o = s.children) != null && o.length && !this.areAllChildrenChecked(s))
          return !1;
    }
    return !0;
  }
  areAllChildrenUnchecked(e) {
    var t, o;
    if ((t = e.children) != null && t.length) {
      for (const s of e.children)
        if (s.checked || (o = s.children) != null && o.length && !this.areAllChildrenUnchecked(s))
          return !1;
    }
    return !0;
  }
  addSelectedRecursive(e, t) {
    for (const o of e)
      o.checked && t.push(o), o.children && this.addSelectedRecursive(o.children, t);
  }
}
class ie {
  constructor(e = 0, t = 0, o = 0, s = 0) {
    this.top = e, this.right = t, this.bottom = o, this.left = s;
  }
}
class We {
  constructor() {
    this.checkedRows = [];
  }
  getCheckedRows() {
    return this.checkedRows;
  }
  setCheckedRows(e) {
    this.checkedRows = e;
  }
  addCheckedRows(e) {
    this.checkedRows || (this.checkedRows = []);
    for (const t of e)
      this.checkedRows.includes(t) || this.checkedRows.push(t);
  }
  checkRow(e, t) {
    this.checkedRows || (this.checkedRows = []), t ? this.checkedRows.includes(e) || this.checkedRows.push(e) : this.removeSelectedRow(e);
  }
  isRowChecked(e) {
    return this.checkedRows && this.checkedRows.includes(e) ? "full" : "none";
  }
  checkAll(e) {
    this.checkedRows = [];
  }
  removeSelectedRow(e) {
    if (this.checkedRows) {
      const t = this.checkedRows.indexOf(e);
      t > -1 && this.checkedRows.splice(t, 1);
    }
  }
}
class G {
  constructor(e, t, o, s = 0, i = 0, r = !1, l = new P(), n = [], d = [], a = -1, c = 0, u = 400, m = () => {
  }) {
    var b, w, g, p;
    this.headerAreaModel = e, this.bodyAreaModel = t, this.footerAreaModel = o, this.fixedLeftColumnCount = s, this.fixedRightColumnCount = i, this.rowCheckboxVisible = r, this.defaultRowHeights = l, this.columnDefs = n, this.columnSizes = d, this.overridingColumnWidth = a, this.columnCount = c, this.parentSize = u, this.getSelectionModel = m, this.rowCount = 0, this.contentHeightInPx = 0, this.contentWidthInPx = 0, this.padding = new ie(0, 0, 0, 0), this.xPositions = [], e.areaIdent = "header", t.areaIdent = "body", o.areaIdent = "footer", this.columnCount || ((b = this.columnDefs) != null && b.length ? this.columnCount = this.columnDefs.length : (w = this.columnSizes) != null && w.length && (this.columnCount = (g = this.columnSizes) == null ? void 0 : g.length)), (p = this.columnDefs) != null && p.length && be(this.columnDefs[0]) && !t.rowSelectionModel && (t.rowSelectionModel = new We());
  }
  init() {
    this.recalcSize(this.parentSize), this.overridingColumnWidth === -1 && this.calcXPositions(), this.headerAreaModel && this.headerAreaModel.init(), this.bodyAreaModel && this.bodyAreaModel.init(), this.footerAreaModel && this.footerAreaModel.init();
  }
  getColumnCount() {
    return this.columnCount;
  }
  setColumnWidth(e, t) {
    var o;
    t = Math.max(0, t), this.overridingColumnWidth !== -1 && (this.overridingColumnWidth = t), e > -1 && e < ((o = this.columnSizes) == null ? void 0 : o.length) && (this.columnSizes[e] = t), this.recalcContentWidthInPx();
  }
  getColumnWidth(e) {
    var o;
    const t = this.getColumnDef(e);
    return t && t.isVisible && !t.isVisible() ? 0 : this.overridingColumnWidth !== -1 ? this.overridingColumnWidth : e > -1 && e < ((o = this.columnSizes) == null ? void 0 : o.length) ? this.columnSizes[e] : 0;
  }
  getXPosByColumnIndex(e) {
    return e === 0 ? 0 : this.overridingColumnWidth > -1 ? this.overridingColumnWidth * e : this.xPositions[e];
  }
  recalcSize(e) {
    this.recalcColumnWidthes(e), this.recalcHeightAndPadding();
  }
  recalcHeightAndPadding() {
    const e = this.getAreaModel("body");
    this.rowCount = e.getRowCount(), this.contentHeightInPx = this.getAreaHeight("body"), this.recalcContentWidthInPx(), this.recalcPadding();
  }
  recalcPadding() {
    const e = this.getSideAreaWidth("west"), t = this.getSideAreaWidth("east"), o = this.getAreaHeight("header"), s = this.getAreaHeight("footer");
    this.padding = new ie(
      o,
      t,
      s,
      e
    );
  }
  getPadding() {
    return this.padding;
  }
  getContentHeightInPixel() {
    return this.contentHeightInPx;
  }
  getContentWidthInPixel() {
    return this.contentWidthInPx;
  }
  getRowHeight(e, t) {
    return this.getAreaModel(e).getRowHeight(t);
  }
  getModel(e) {
    return this.getAreaModel(e);
  }
  getAreaHeight(e) {
    const t = this.getModel(e), o = t.getRowCount();
    if (this.defaultRowHeights[e])
      return o * this.defaultRowHeights[e];
    let s = 0;
    for (let i = 0; i < o; i++)
      s = s + t.getRowHeight(i);
    return s;
  }
  getSideAreaWidth(e) {
    const [t, o] = this.getSideStartAndEndColumnIndex(e);
    let s = 0;
    for (let i = t; i <= o; i++)
      s = s + this.getColumnWidth(i);
    return s;
  }
  getSideStartAndEndColumnIndex(e) {
    const t = this.getFixedLeftColumnCount(), o = this.getFixedRightColumnCount();
    let s = 0, i = this.columnCount - 1;
    return e === "west" ? i = t - 1 : e === "east" ? s = this.columnCount - o : (s = t, i = this.columnCount - o - 1), [s, i];
  }
  getColumnDef(e) {
    if (e < this.columnDefs.length)
      return this.columnDefs[e];
  }
  getFixedLeftColumnCount() {
    return this.fixedLeftColumnCount;
  }
  getFixedRightColumnCount() {
    return this.fixedRightColumnCount;
  }
  getAreaModel(e) {
    if (e === "header")
      return this.headerAreaModel;
    if (e === "body")
      return this.bodyAreaModel;
    if (e === "footer")
      return this.footerAreaModel;
    throw new Error("Wrong ident.");
  }
  getBodyModel() {
    return this.bodyAreaModel;
  }
  isFooterVisibe() {
    var e;
    return (((e = this.footerAreaModel) == null ? void 0 : e.getRowCount()) ?? 0) > 0;
  }
  isHeaderVisibe() {
    var e;
    return (((e = this.headerAreaModel) == null ? void 0 : e.getRowCount()) ?? 0) > 0;
  }
  isRowCheckboxVisible() {
    return this.rowCheckboxVisible;
  }
  externalFilterChanged(e) {
    this.getAreaModel("body").externalFilterChanged(e);
  }
  doSort(e) {
    return this.getAreaModel("body").doSort(e);
  }
  getColumnDefs() {
    return this.columnDefs;
  }
  getColumnProperty(e) {
    return this.columnDefs[e].property;
  }
  getBodyRowByIndex(e) {
    return this.getBodyModel().getRowByIndex(e);
  }
  isSortable(e) {
    return this.columnDefs && e < this.columnDefs.length && this.columnDefs[e].sortable ? this.columnDefs[e].sortable() : !1;
  }
  changeColumnOrder(e, t) {
    var o, s, i;
    this.arrayMove(this.columnDefs, e, t), this.arrayMove(this.columnSizes, e, t), (o = this.headerAreaModel) == null || o.changeColumnOrder(e, t), (s = this.bodyAreaModel) == null || s.changeColumnOrder(e, t), (i = this.footerAreaModel) == null || i.changeColumnOrder(e, t), this.calcXPositions();
  }
  recalcColumnWidthes(e) {
    var t, o, s;
    !((t = this.columnDefs) != null && t.length) && !((o = this.columnSizes) != null && o.length) && (this.columnSizes = new Array(this.getColumnCount()).fill(this.overridingColumnWidth)), (s = this.columnDefs) != null && s.length && (this.columnSizes = this.columnDefs.map((i) => {
      if (i.width.unit === "%" && e) {
        let r = Math.floor(i.width.value * e / 100);
        if (i.minWidth) {
          let l = i.minWidth.unit === "px" ? i.minWidth.value : Math.floor(i.minWidth.value * e / 100);
          r = Math.max(l, r);
        }
        if (i.maxWidth) {
          let l = i.maxWidth.unit === "px" ? i.maxWidth.value : Math.floor(i.maxWidth.value * e / 100);
          r = Math.min(l, r);
        }
        return r;
      }
      return i.width.value;
    }));
  }
  arrayMove(e, t, o) {
    const s = e.splice(t, 1)[0];
    return e.splice(o, 0, s), e;
  }
  recalcContentWidthInPx() {
    this.contentWidthInPx = this.getSideAreaWidth("center");
  }
  calcXPositions() {
    const e = this.getColumnCount();
    this.xPositions = new Array(e + 1), this.xPositions[0] = 0;
    for (let t = 0; t < e; t++)
      this.xPositions[t + 1] = this.getColumnWidth(t) + this.xPositions[t];
  }
}
class Ge extends q {
  constructor(e, t, o, s = []) {
    super(e, s, o), this.areaIdent = e, this.rows = t, this.defaultRowHeight = o, this.columnDefs = s, this.sorterService = new ue(), this.filteredRows = [...t], this.properties = s.map((i) => i.property);
  }
  getRowCount() {
    var e;
    return ((e = this.filteredRows) == null ? void 0 : e.length) ?? 0;
  }
  getValueAt(e, t) {
    const o = this.properties[t];
    let s = this.filteredRows[e];
    return O(s) && (s = s.data), s ? this.getValueByT(s, o) : "";
  }
  getFilteredRows() {
    return this.filteredRows;
  }
  getAllRows() {
    return this.rows;
  }
  getRowHeight(e) {
    return this.defaultRowHeight;
  }
  getRowByIndex(e) {
    return this.filteredRows[e];
  }
  externalFilterChanged(e) {
    this.filteredRows = this.rows ? this.rows.filter(e) : [];
  }
  doSort(e) {
    for (const t of e) {
      const { columnIndex: o, sortState: s } = t, i = s === "asc" ? 1 : s === "desc" ? -1 : 0, r = this.properties[o];
      this.filteredRows = this.filteredRows.sort(this.genericFlatTableSortComparator(r, i));
    }
    return !0;
  }
  getValueByT(e, t) {
    return t.includes(".") ? this.getPropertyValue(e, t.split(".")) : e[t];
  }
  changeColumnOrder(e, t) {
    this.arrayMove(this.properties, e, t), super.changeColumnOrder(e, t);
  }
  genericFlatTableSortComparator(e, t) {
    return (o, s) => {
      const i = this.getValueByT(o, e), r = this.getValueByT(s, e);
      return this.sorterService.genericSortComparator(i, r, t);
    };
  }
  getPropertyValue(e, t) {
    const o = t.shift();
    let s = e[o];
    return s && t.length ? this.getPropertyValue(s, t) : s;
  }
}
class re extends Ge {
  constructor(e, t, o, s) {
    super(
      e,
      t,
      s,
      o
    ), this.areaIdent = e, this.rows = t, this.columnDefs = o, this.defaultRowHeight = s;
  }
}
class L {
  static createTableModel(e) {
    var t, o, s, i, r, l, n, d, a, c, u, m, b, w;
    if (e.defaultRowHeights === void 0)
      if ((t = e.tableOptions) != null && t.defaultRowHeights)
        e.defaultRowHeights = e.tableOptions.defaultRowHeights;
      else {
        if (e.defaultRowHeights = new P(), e.headerAreaModel && "defaultRowHeight" in e.headerAreaModel) {
          const g = e.headerAreaModel.defaultRowHeight;
          g > -1 && (e.defaultRowHeights.header = g);
        }
        if (e.bodyAreaModel && "defaultRowHeight" in e.bodyAreaModel) {
          const g = e.bodyAreaModel.defaultRowHeight;
          g > -1 && (e.defaultRowHeights.body = g);
        }
        if (e.footerAreaModel && "defaultRowHeight" in e.footerAreaModel) {
          const g = e.footerAreaModel.defaultRowHeight;
          g > -1 && (e.defaultRowHeights.footer = g);
        }
      }
    if (e.columnDefs === void 0 && ((o = e.properties) != null && o.length ? e.columnDefs = e.properties.map((g) => new H(g, g.toUpperCase(), te)) : (s = e.rows) != null && s.length ? e.columnDefs = Object.keys(e.rows[0]).map((g) => new H(g, g.toUpperCase(), te)) : e.columnDefs = []), e.columnCount === void 0 && ((i = e.columnDefs) != null && i.length ? e.columnCount = e.columnDefs.length : (r = e.headerData) != null && r.length ? e.columnCount = e.headerData[0].length : (l = e.columnSizes) != null && l.length ? e.columnCount = (n = e.columnSizes) == null ? void 0 : n.length : console.warn('Property "columnCount" is missing and cannot be derived from other properties.')), e.headerAreaModel || ((d = e.headerData) != null && d.length ? e.headerAreaModel = new _(
      "header",
      e.headerData,
      e.defaultRowHeights.header,
      e.columnDefs
    ) : (a = e.columnDefs) != null && a.length ? e.headerAreaModel = new _(
      "header",
      [e.columnDefs.map((g) => g.headerLabel)],
      e.defaultRowHeights.header,
      e.columnDefs
    ) : e.headerAreaModel = new D("header")), e.footerAreaModel || ((c = e.footerData) != null && c.length ? e.footerAreaModel = new _(
      "footer",
      e.footerData,
      e.defaultRowHeights.footer,
      e.columnDefs
    ) : e.footerAreaModel = new D("footer")), !e.bodyAreaModel)
      if (e.rows)
        if ((u = e.rows) != null && u.length && O(e.rows[0])) {
          const g = e.rows;
          e.bodyAreaModel = new oe(
            "body",
            g,
            e.defaultRowHeights.body,
            e.columnDefs
          ), (e.columnDefs[0].property === "CheckboxColumn" || (m = e.tableOptions) != null && m.showCheckboxWihoutExtraColumn) && (e.bodyAreaModel.rowSelectionModel = new se(g));
        } else
          e.bodyAreaModel = new re(
            "body",
            e.rows,
            e.columnDefs,
            e.defaultRowHeights.body
          );
      else
        e.bodyData ? e.bodyAreaModel = new _(
          "body",
          e.bodyData,
          e.defaultRowHeights.body
        ) : e.bodyAreaModel = new D("body");
    return e.fixedLeftColumnCount === void 0 && (e.fixedLeftColumnCount = 0), e.fixedRightColumnCount === void 0 && (e.fixedRightColumnCount = 0), e.rowCheckboxVisible === void 0 && (e.rowCheckboxVisible = !1), e.overridingColumnWidth === void 0 && (e.overridingColumnWidth = -1), !e.getSelectionModel && ((b = e.tableOptions) != null && b.getSelectionModel) && (e.getSelectionModel = (w = e.tableOptions) == null ? void 0 : w.getSelectionModel), new G(
      e.headerAreaModel,
      e.bodyAreaModel,
      e.footerAreaModel,
      e.fixedLeftColumnCount,
      e.fixedRightColumnCount,
      e.rowCheckboxVisible,
      e.defaultRowHeights,
      e.columnDefs,
      e.columnSizes,
      e.overridingColumnWidth,
      e.columnCount,
      e.parentSize,
      e.getSelectionModel
    );
  }
  static buildByTypedRowsParam(e) {
    return L.buildByTypedRows(
      e.rows ?? [],
      e.columnDefs,
      e.tableOptions ?? new z(),
      e.fixedLeftColumnCount ?? 0,
      e.fixedRightColumnCount ?? 0
    );
  }
  static buildByTypedRows(e, t, o = new z(), s = 0, i = 0) {
    const r = o.defaultRowHeights, l = t[0].property === "CheckboxColumn";
    if (e != null && e.length && O(e[0])) {
      const n = e, d = new oe(
        "body",
        n,
        r.body,
        t
      );
      return (l || o.showCheckboxWihoutExtraColumn) && (d.rowSelectionModel = new se(n)), L.createByAreaModelsParam({
        headerAreaModel: new _("header", [t.map((a) => a.headerLabel)], r.header),
        bodyAreaModel: d,
        footerAreaModel: new _("footer", [], r.footer),
        columnDefs: t,
        fixedLeftColumnCount: s,
        fixedRightColumnCount: i,
        defaultRowHeights: o.defaultRowHeights,
        rowCheckboxVisible: !1,
        columnSizes: [],
        columnCount: t.length,
        overridingColumnWidth: -1
      });
    }
    return L.createByObjectArrayParam({
      rows: e,
      columnDefs: t,
      fixedLeftColumnCount: s,
      fixedRightColumnCount: i,
      defaultRowHeights: o.defaultRowHeights
    });
  }
  static createByObjectArrayParam(e) {
    const t = e.rowCheckboxVisible !== void 0 ? e.rowCheckboxVisible : !1;
    return L.createByObjectArray(
      e.rows,
      e.header ?? [],
      e.footer ?? [],
      e.fixedLeftColumnCount ?? 0,
      e.fixedRightColumnCount ?? 0,
      t,
      e.defaultRowHeights ?? new P(),
      e.columnDefs ?? [],
      e.columnSizes ?? []
    );
  }
  static createByAreaModels(e = new D(), t, o = new D(), s = 0, i = 0, r = !1, l = new P(), n, d = [], a = -1, c) {
    return new G(
      e,
      t,
      o,
      s,
      i,
      r,
      l,
      n,
      d,
      a,
      c
    );
  }
  static createByAreaModelsParam(e) {
    return L.createByAreaModels(
      e.headerAreaModel ?? new D(),
      e.bodyAreaModel,
      e.footerAreaModel ?? new D(),
      e.fixedLeftColumnCount ?? 0,
      e.fixedRightColumnCount ?? 0,
      e.rowCheckboxVisible === void 0 ? !1 : e.rowCheckboxVisible,
      e.defaultRowHeights,
      e.columnDefs ?? [],
      e.columnSizes ?? [],
      e.overridingColumnWidth ?? -1,
      e.columnCount ?? 0
    );
  }
  static createByObjectArray(e, t = [], o = [], s = 0, i = 0, r = !1, l = new P(), n, d = []) {
    let a;
    t != null && t.length ? a = new _("header", t, l.header, n) : n != null && n.length ? a = new _("header", [n.map((m) => m.headerLabel)], l.header, n) : a = new D();
    const c = o ? new _("footer", o, l.footer, n) : new D(), u = new re("body", e, n, l.body);
    return new G(
      a,
      u,
      c,
      s,
      i,
      r,
      l,
      n,
      d
    );
  }
}
const Rt = [
  //"COPY_2_CLIPBOARD",
  "START_EDITING",
  "TOGGLE_SELECTION",
  "SELECT_ALL",
  "DESELECT_ALL",
  "NAVIGATE_LEFT",
  "NAVIGATE_RIGHT",
  "NAVIGATE_UP",
  "NAVIGATE_DOWN"
  //
  // "ENTER_PRESSED",
  // "HOME_PRESSED",
  // "SPACE_PRESSED",
  // "END_PRESSED",
  // "PAGEUP_PRESSED",
  // "PAGEDOWN_PRESSED"
];
class At {
  constructor(e, t) {
    this.tableModel = e, this.tableOptions = t;
  }
}
class Ne {
  constructor(e, t, o, s, i, r, l) {
    this.emmitDataKey = e, this.emmitCancelKey = t, this.queryId = o, this.filter = s, this.sorting = i, this.startIndex = r, this.endIndex = l;
  }
}
class Et extends Ne {
  constructor(e, t, o, s, i, r, l, n) {
    super(
      e,
      t,
      o,
      s,
      i,
      r,
      l
    ), this.rows = n;
  }
}
class ze {
  constructor(e, t) {
    this.value = e, this.label = t;
  }
}
class Mt {
  constructor(e, t) {
    this.index = e, this.px = t;
  }
}
const kt = { body: ["ge-table-text-align-left"] }, It = { body: ["ge-table-text-align-center"] }, Tt = { body: ["ge-table-text-align-right"] }, _t = {
  header: ["ge-table-text-align-left"],
  body: ["ge-table-text-align-left"],
  footer: ["ge-table-text-align-left"]
}, Dt = {
  header: ["ge-table-text-align-center"],
  body: ["ge-table-text-align-center"],
  footer: ["ge-table-text-align-center"]
}, $t = {
  header: ["ge-table-text-align-right"],
  body: ["ge-table-text-align-right"],
  footer: ["ge-table-text-align-right"]
};
class le {
  render(e, t, o, s, i, r, l) {
    if (i.isRowCheckable(t)) {
      l.addClass(e, "ge-table-row-checkbox-div");
      const n = i.isRowChecked(t), d = n === "full" ? "checked" : "", a = n === "semi" ? '<span style="opacity: 0.4;">✓<span>' : "";
      e.innerHTML = `
        <input
            type="checkbox"
            data-area="${s}"
            data-row-index="${t}"
            data-col-index="${o}"
            data-input-type="checkbox"
            ${d}
            class="ge-table-row-checkbox">
        ${a}  `;
    }
  }
}
class Ft {
  constructor() {
    this.type = "CheckboxColumnDef", this.property = "CheckboxColumn", this.headerLabel = "", this.width = new f(50, "px"), this.minWidth = new f(50, "px"), this.maxWidth = new f(100, "px"), this.rendererMap = new I(new le(), new le(), void 0), this.classes = new I(
      [],
      ["ge-table-text-align-left"],
      []
    );
  }
}
class Lt {
  static body(e) {
    return new I(
      void 0,
      e,
      void 0
    );
  }
}
class Ot {
  constructor(e = "down", t) {
    this.status = e, this.originalEvent = t;
  }
}
class Pt {
  constructor(e, t, o, s, i = {}) {
    this.area = e, this.rowIndex = t, this.columnIndex = o, this.value = s, this.cssClasses = i;
  }
}
class Ht {
  constructor() {
    this.autoRestoreSortingState = !1, this.autoRestoreCollapsedExpandedState = !1, this.autoRestoreScrollPosition = !1, this.autoRestoreCheckedState = !1, this.autoRestoreSelectedState = !1, this.getStorageKeyFn = void 0, this.isSame = (e, t, o) => {
      if (e && t && o.getRowId) {
        const s = o.getRowId(e), i = o.getRowId(t);
        return s === i;
      }
      return !1;
    }, this.getRowId = (e) => {
      if (e) {
        for (const t of ["id", "uuid"]) {
          const o = e[t];
          if (o != null)
            return o;
        }
        try {
          return JSON.stringify(e);
        } catch (t) {
          console.error(t);
        }
      }
      return console.warn('One of following options set to true without a valid "getRowId()": autoRestoreExpandedState, autoRestoreCheckedState.'), -1;
    };
  }
}
class je {
  constructor(e, t, o, s = !1, i = "normal", r = void 0) {
    this.data = e, this.property = t, this.toggle = o, this.closed = s, this.visibility = i, this.children = r, this.impl = "CellGroup";
  }
}
class Xe extends je {
  constructor(e, t = 0, o = 0, s) {
    super(
      e.data,
      e.property,
      e.toggle,
      e.closed,
      e.visibility,
      e.children
    ), this.rowIndex = t, this.childIndex = o, this.parent = s, this.impl = "CellGroupExt", this.children = void 0, this.leftNeighbour = void 0, this.rightNeighbour = void 0;
  }
  ownColumn() {
    return !!this.property;
  }
  toString() {
    return this.data + "";
  }
  // TODO hier gehts weiter!!!!!!!!!!!
  getColumnIndex() {
    return this.parent ? this.parent.getColumnIndex() + this.childIndex : (this.leftNeighbour, 0);
  }
  //
  // getLeftClaimedSpaces(): number{
  //   if (this.leftNeighbour) {
  //
  //   }
  //   return 0;
  // }
  // getSumOfLeafs(cg: CellGroupExt, sum: number = 0): number {
  //   if (cg.children?.length) {
  //     for (let i = 0; i < cg.children.length; i++) {
  //       const child = cg.children[i];
  //       if (child.children?.length) {
  //         sum = this.getSumOfLeafs(child, sum);
  //       } else {
  //         sum++;
  //       }
  //     }
  //   }
  //   if (this.ownColumn()) {
  //     sum++;
  //   }
  //   //console.info(cg.data, sum)
  //   return sum;
  // }
  //
  // getBiggestChildColumnIndex(): number {
  //   if (this.children?.length) {
  //     return Math.max(...this.children.map(c => c.getBiggestChildColumnIndex()));
  //   }
  //   return this.childIndex;
  // }
  isVisible() {
    return this.parent ? this.visibility === "always" ? this.parent.isVisible() : this.visibility === "normal" || !this.visibility ? this.parent.isVisible() && !this.parent.closed : this.visibility === "inverted" ? this.parent.isVisible() && this.parent.closed : !0 : !0;
  }
  // should be rendered
  claimsSpace() {
    return this.isVisible() && (this.ownColumn() || this.closed);
  }
  getColumnCount(e = this, t = 0) {
    var o;
    if (e != null && e.claimsSpace() && t++, (o = e == null ? void 0 : e.children) != null && o.length)
      for (const s of e.children)
        t = this.getColumnCount(s, t);
    return t;
  }
  getRowSpan(e = this, t) {
    return e != null && e.claimsSpace() ? t - this.getParentCount(e, 0) : 1;
  }
  getParentCount(e = this, t = 0) {
    return e.parent && (t = t + 1 + this.getParentCount(e.parent, t)), t;
  }
  log(e) {
    const t = "													".substring(0, 2 * this.rowIndex), o = `${this.getColumnIndex()}`, s = `${this.getColumnCount(this)}`, i = `${this.getRowSpan(this, e)}`, r = `${this.getParentCount(this)}`;
    if (console.info(`${t + this.data}
      childIndex:${this.childIndex}
      row:${this.rowIndex}
      col:${o}
      vis:${this.visibility}
      closed:${this.closed}
      isVisible:${this.isVisible()}
      ownColumn:${this.ownColumn()}
      claimsSpace:${this.claimsSpace()}
      colCount:${s}
      rowSpan:${i}
      pc:${r}`.replace(/[ \n]+/g, " ")), this.children)
      for (const l of this.children)
        l.log(e);
  }
}
class k {
  static buildColumnDefs(e, t = []) {
    for (const o of e)
      o.property && t.push(
        H.create({
          property: o.property,
          headerLabel: o.data ? o.data : o.property,
          isVisible: () => typeof o.isVisible == "function" ? o.isVisible() : !0
        })
      ), o.children && k.buildColumnDefs(o.children, t);
    return t;
  }
  /*
    static buildDeepMap(
      cellGroups: CellGroupIf[],
      ret: { [key: string]: number } = {},
      deep = 0
    ): { [key: string]: number } {
  
      for (const cellGroup of cellGroups) {
        //if (cellGroup.property) {
        ret[cellGroup.data] = deep;
        //}
        if (cellGroup.children) {
          CellgroupFactory.buildDeepMap(cellGroup.children, ret, deep + 1);
        }
      }
      return ret;
    }
  */
  static buildGroupExts(e, t = [], o = 0, s) {
    let i;
    for (let r = 0; r < e.length; r++) {
      const l = e[r], n = new Xe(l, o, r, s);
      i && (n.leftNeighbour = i, i.rightNeighbour = n), t.push(n), l.children && (n.children = k.buildGroupExts(l.children, [], o + 1, n)), i = n;
    }
    return t;
  }
  static flattenGroupExts(e, t = []) {
    for (const o of e)
      t.push(o), o.children && k.flattenGroupExts(o.children, t);
    return t;
  }
  /*
  
    Gold                                                           Hohenwarte
    Gold AB                         Gold CD                        HOH AB                                  HOH CD
    .          Gold A     Gold B    Gold C   Gold D    Gold Sum    .           HOH Loc    HOH A    HOH B   HOH C    HOH D
  
    */
  static buildArrayOfArrays(e, t) {
    var i;
    let o = -1, s = 99999;
    for (const r of e) {
      if (r.rowIndex <= s) {
        o++;
        for (let l = 0; l < t.length; l++)
          t[l][o] = null;
      }
      if (t[r.rowIndex][o] = r, s = r.rowIndex, r.ownColumn() && ((i = r.children) != null && i.length)) {
        for (let l = r.rowIndex + 1; l < t.length; l++)
          t[l][o] = void 0;
        o++;
        for (let l = 0; l < t.length; l++)
          t[l][o] = null;
      }
    }
    return t;
  }
  static iterateThrowColumns(e = [], t) {
    var o;
    for (const s of t)
      e.push(s.data + "    rowIndex:" + s.rowIndex), (o = s.children) != null && o.length && k.iterateThrowColumns(e, s.children);
  }
}
class Vt {
  constructor() {
    this.areaIdent = "body", this.rowSelectionModel = void 0;
  }
  changeColumnOrder(e, t) {
  }
  doSort(e) {
    return !1;
  }
  externalFilterChanged(e) {
  }
  getCellRenderer(e, t) {
  }
  getColspanAt(e, t) {
    return 0;
  }
  getCustomClassesAt(e, t) {
    return [];
  }
  getCustomStyleAt(e, t) {
  }
  getMaxColspan() {
    return 0;
  }
  getMaxRowspan() {
    return 0;
  }
  getRowByIndex(e) {
  }
  getRowCount() {
    return 0;
  }
  getRowHeight(e) {
    return 0;
  }
  getRowspanAt(e, t) {
    return 0;
  }
  getTooltipAt(e, t) {
  }
  getValueAt(e, t) {
  }
  getYPosByRowIndex(e) {
    return 0;
  }
  init() {
  }
  isEditable(e, t) {
    return !1;
  }
  isFilterable() {
    return !1;
  }
  isRowCheckable(e) {
    return !1;
  }
  isRowChecked(e) {
  }
  isSelectable(e, t) {
    return !1;
  }
  setRowChecked(e, t) {
  }
  setValue(e, t, o) {
    return !1;
  }
}
class Ye {
  render(e, t, o, s, i, r, l) {
    const n = r != null && r.data ? r.data : "";
    e.innerHTML = `${n}`;
  }
}
class Bt {
  constructor(e = "header", t, o = [], s) {
    var i;
    this.areaIdent = e, this.groups = t, this.columnDefs = o, this.defaultRowHeight = s, this.gammaCells = !0, this.groupExts = [], this.cellGroupExtCellRenderer = new Ye(), this.groupExts = k.buildGroupExts(t), console.info(this.groupExts), console.info(this.getAllLeafs()), console.info(this.getMaxRowCount());
    for (const r of this.groupExts)
      r.log(this.getMaxRowCount());
    this.arr = this.buildArray(), !((i = this.columnDefs) != null && i.length) && e === "header" && (this.columnDefs = k.buildColumnDefs(t)), console.info("this.columnDefs", this.columnDefs), console.info("this.arr", this.arr);
  }
  getAllLeafs() {
    return k.flattenGroupExts(this.groupExts).filter((t) => !t.children);
  }
  getMaxRowCount() {
    const e = this.getAllLeafs();
    return e != null && e.length ? 1 + Math.max(...e.map((t) => t.getParentCount(t))) : 0;
  }
  buildArray() {
    console.info("");
    let e = k.flattenGroupExts(this.groupExts);
    const t = e.length, o = 1 + Math.max(...e.map((l) => l.rowIndex));
    console.info("max  row/col:", o + "/" + t);
    const s = [];
    k.iterateThrowColumns(s, this.groupExts), console.info(s);
    const i = Array.from(Array(o).keys()).map((l) => []);
    let r = k.buildArrayOfArrays(e, i);
    return console.table(r), r;
  }
  changeColumnOrder(e, t) {
  }
  doSort(e) {
    return !1;
  }
  externalFilterChanged(e) {
  }
  getCellRenderer(e, t) {
    return this.cellGroupExtCellRenderer;
  }
  getColspanAt(e, t) {
    const o = this.getValueAt(e, t);
    return o ? o.getColumnCount() : 0;
  }
  getCustomClassesAt(e, t) {
    return [];
  }
  getCustomStyleAt(e, t) {
  }
  getMaxColspan() {
    return 12;
  }
  getMaxRowspan() {
    return 12;
  }
  getRowByIndex(e) {
  }
  getRowCount() {
    return this.arr ? this.arr.length : 0;
  }
  getRowspanAt(e, t) {
    const o = this.getValueAt(e, t);
    if (o) {
      const s = this.getRowCount();
      return o.getRowSpan(o, s);
    }
    return 0;
  }
  getTooltipAt(e, t) {
    return "";
  }
  getValueAt(e, t) {
    return this.arr[e][t];
  }
  getYPosByRowIndex(e) {
    return 0;
  }
  init() {
  }
  getRowHeight(e) {
    return this.defaultRowHeight;
  }
  isEditable(e, t) {
    return !1;
  }
  isFilterable() {
    return !1;
  }
  isRowCheckable(e) {
    return !1;
  }
  isRowChecked(e) {
  }
  isSelectable(e, t) {
    return !1;
  }
  setRowChecked(e, t) {
  }
  setValue(e, t, o) {
    return !1;
  }
}
class Wt {
  filterPredict(e, t, o = this.objectToString.bind(this)) {
    if (!e)
      return !1;
    if (!t)
      return !0;
    t = t.toLowerCase();
    const s = "+", i = "-", r = t.toLowerCase().split(" ").filter((c) => c !== s && c !== i && c !== ""), l = r.filter((c) => !c.startsWith(s) && !c.startsWith(i)), n = r.filter((c) => c.startsWith(s)).map((c) => c.replace(/\+/g, "")), d = r.filter((c) => c.startsWith(i)).map((c) => c.replace(/-/g, ""));
    let a = !l.length;
    for (let c = 0; c < l.length; c++)
      (a || o(e).includes(l[c])) && (a = !0);
    if (!a)
      return !1;
    for (let c = 0; c < n.length; c++)
      if (!o(e).includes(n[c]))
        return !1;
    for (let c = 0; c < d.length; c++)
      if (o(e).includes(d[c]))
        return !1;
    return !0;
  }
  filterRows(e, t, o = (s) => JSON.stringify(s).toLowerCase()) {
    if (!e)
      return [];
    if (!t)
      return [...e];
    t = t.toLowerCase();
    const s = "+", i = "-", r = t.toLowerCase().split(" ").filter((a) => a !== s && a !== i && a !== ""), l = r.filter((a) => !a.startsWith(s) && !a.startsWith(i)), n = r.filter((a) => a.startsWith(s)).map((a) => a.replace(/\+/g, "")), d = r.filter((a) => a.startsWith(i)).map((a) => a.replace(/-/g, ""));
    return e == null ? void 0 : e.filter((a) => {
      let c = !l.length;
      for (let u = 0; u < l.length; u++)
        (c || o(a).includes(l[u])) && (c = !0);
      if (!c)
        return !1;
      for (let u = 0; u < n.length; u++)
        if (!o(a).includes(n[u]))
          return !1;
      for (let u = 0; u < d.length; u++)
        if (o(a).includes(d[u]))
          return !1;
      return !0;
    });
  }
  objectToString(e) {
    if (!e)
      return "";
    const t = [], o = Object.keys(e);
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      t.push(e[i]);
    }
    return t.join(" ").toLowerCase();
  }
}
class Gt {
  static bodyRenderer(e) {
    return new I(void 0, e, void 0);
  }
}
class Nt {
  constructor(e, t = !0, o = !1) {
    this.property = e, this.skipCheckableCheck = t, this.readonly = o;
  }
  render(e, t, o, s, i, r, l) {
    if (this.readonly || this.skipCheckableCheck || i.isRowCheckable(t)) {
      l.addClass(e, "ge-table-row-checkbox-div");
      const n = i.getRowByIndex(t), a = i.getValueByT(n, this.property) === !0 ? "checked" : "", c = this.readonly ? " readonly " : "";
      if (l.addClass(e, "ge-padding-property-checkbox"), e.innerHTML = `
        <input
          type="checkbox"
          data-area="${s}"
          data-row-index="${t}"
          data-col-index="${o}"
          data-property-index="${this.property}"
          data-input-type="checkbox"
          ${a}
          ${c}
          class="ge-input-checkbox">`, !this.readonly) {
        const u = e.querySelector(".ge-input-checkbox");
        u && u.addEventListener("click", (m, b) => (n[this.property] = !n[this.property], !0));
      }
    }
  }
}
class zt {
  render(e, t, o, s, i, r, l) {
    r && (e.innerText = new Date(r).toISOString());
  }
}
class jt {
  constructor() {
    this.formatter = new Intl.DateTimeFormat("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }
  render(e, t, o, s, i, r, l) {
    if (r) {
      let n = "";
      try {
        n = this.formatter.format(new Date(r));
      } catch {
        n = r;
      }
      e.innerHTML = `
          <div class="ge-table-label-div" data-row-index="${t}" data-col-index="${o}" data-area="${s}" style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div class="ge-table-label" data-row-index="${t}" data-col-index="${o}" data-area="${s}">${n}</div>
          </div>`;
    }
  }
}
class Xt {
  render(e, t, o, s, i, r, l) {
    r && (e.innerText = new Date(r).toLocaleDateString());
  }
}
class Yt {
  render(e, t, o, s, i, r, l) {
    r === "male" || r === "m" ? e.innerText = "♂" : (r === "female" || r === "f") && (e.innerText = "♀");
  }
}
class Kt {
  render(e, t, o, s, i, r, l) {
    r === "true" || r === !0 ? e.innerHTML = '<span class="ge-true-text-color">✅</span>' : r === "false" || r === !1 ? e.innerHTML = '<span class="ge-false-text-color">❌</span>' : e.innerText = "";
  }
}
class Ut {
  render(e, t, o, s, i, r, l) {
    r && (e.innerText = new Date(r).toISOString().replace(/T/g, " ").replace(/\..*/g, ""));
  }
}
class qt {
  constructor(e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    this.min = e, this.max = t;
  }
  render(e, t, o, s, i, r, l) {
    r && (e.innerText = r, (typeof r == "string" || isNaN(r) || r < this.min || r > this.max) && l.addClass(e, "ge-cell-error"));
  }
}
class Jt {
  constructor(e) {
    this.property = e;
  }
  render(e, t, o, s, i, r, l) {
    l.addClass(e, "ge-star-rating-div");
    const n = i.getRowByIndex(t), d = +("" + i.getValueByT(n, this.property));
    if (!isNaN(d)) {
      const a = [];
      for (let u = 0; u < d; u++)
        a.push("★");
      const c = a.join(" ");
      e.innerHTML = `
          <div class="ge-table-label-div" data-row-index="${t}" data-col-index="${o}" data-area="${s}" style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div class="ge-table-label" data-row-index="${t}" data-col-index="${o}" data-area="${s}">${c}</div>
          </div>`;
    }
  }
}
class Qt {
  constructor(e, t = 100, o = !1) {
    this.property = e, this.maxValue = t, this.labelVisible = o;
  }
  render(e, t, o, s, i, r, l) {
    l.addClass(e, "ge-star-rating-div");
    const n = i.getRowByIndex(t), d = +("" + i.getValueByT(n, this.property));
    if (!isNaN(d)) {
      const a = d * 100 / this.maxValue, c = this.labelVisible ? Math.round(a) + "%" : "";
      e.innerHTML = `
          <div class="ge-table-label-div"
          data-row-index="${t}"
          data-col-index="${o}"
          data-area="${s}"
          title="${c}"
          style="position: relative; background: transparent; width: 100%; height: 100%;">
              <div class="ge-table-progress-container"
                  style="width:100%;height:50%;padding:0;margin-top:6px;"
                  data-row-index="${t}"
                  data-col-index="${o}"
                  data-area="${s}">
                  <div class="ge-table-progress-bar"
                      style="width:${a}%;height:100%;padding:0;margin:0;"
                      data-row-index="${t}"
                      data-col-index="${o}"
                      data-area="${s}">&nbsp;
                  </div>
              </div>
          </div>`;
    }
  }
}
const Zt = function(h, e, t) {
  return h ? Number(h) : "";
};
class ge {
  constructor(e) {
    this.options = e;
  }
  static create(e) {
    return new ge(
      e.map((t) => new ze(t, t))
    );
  }
  render(e, t, o, s, i, r, l) {
    if (i.isEditable(t, o)) {
      l.addClass(e, "ge-table-row-select-div");
      const n = i.getValueAt(t, o);
      let d = [];
      for (let c of this.options) {
        const u = c.value === n ? " selected " : "";
        d.push(`<option value="${c.value}" ${u}>${c.label}</option>`);
      }
      const a = d.join("");
      e.innerHTML = `
            <select
                type="text"
                value="${n}"
                autofocus
                data-listen="change"
                data-area="${s}"
                data-row-index="${t}"
                data-col-index="${o}"
                data-input-type="text"
                style="width:100%;height:100%;border:0;padding:0 0 0 8px;"
                class="ge-table-cell-editor-select">${a}</select>`;
    }
  }
}
class eo {
  constructor(e, t, o) {
    this.r = e, this.g = t, this.b = o;
  }
}
class ne {
  constructor(e, t, o, s) {
    this.minValue = e, this.minColor = t, this.maxValue = o, this.maxColor = s;
  }
}
class B {
  static normalize(e, t, o, s = 0, i = 1) {
    return (e - t) / (o - t) * (i - s) + s;
  }
  static getTwoColorGradientRGB(e, t) {
    const o = B.normalize(e, t.minValue, t.maxValue, 0, 1), s = t.maxColor.r - t.minColor.r, i = t.maxColor.g - t.minColor.g, r = t.maxColor.b - t.minColor.b, l = s * o + t.minColor.r, n = i * o + t.minColor.g, d = r * o + t.minColor.b;
    return `rgb(${Math.round(l)}, ${Math.round(n)}, ${Math.round(d)})`;
  }
  static getThreeColorGradientRGB(e, t) {
    return e < t.middleValue ? B.getTwoColorGradientRGB(e, new ne(t.minValue, t.minColor, t.middleValue, t.middleColor)) : e > t.middleValue ? B.getTwoColorGradientRGB(e, new ne(t.middleValue, t.middleColor, t.maxValue, t.maxColor)) : `rgb(${t.middleColor.r}, ${t.middleColor.g}, ${t.middleColor.b})`;
  }
}
class to {
  constructor(e, t, o, s, i, r) {
    this.minValue = e, this.minColor = t, this.middleValue = o, this.middleColor = s, this.maxValue = i, this.maxColor = r;
  }
}
export {
  q as AbstractAreaModel,
  Lt as AreaMapFactory,
  Vt as AreaModel,
  _ as AreaModelArrayOfArrays,
  Bt as AreaModelCellGroups,
  D as AreaModelHidden,
  re as AreaModelObjectArrayWithColumndefs,
  Ge as AreaModelObjectyArray,
  oe as AreaModelTree,
  I as AreaObjectMap,
  Ht as AutoRestoreOptions,
  je as CellGroup,
  Xe as CellGroupExt,
  Ye as CellGroupExtCellRenderer,
  E as CellRange,
  k as CellgroupFactory,
  Nt as CheckboxBooleanPropertyCellRenderer,
  le as CheckboxCellRenderer,
  Ft as CheckboxColumnDef,
  We as CheckboxModel,
  Et as ChunkData,
  Re as ColAndRowspanModel,
  xe as CollapsedExpandedData,
  eo as ColorRgb,
  H as ColumnDef,
  pe as ConvenienceDomService,
  ce as CssVars,
  jt as DateToIntlDDMMYYYYCellRenderer,
  zt as DateToIsoCellRenderer,
  Xt as DateToLocaleDateCellRenderer,
  Ut as DateToTecCellRenderer,
  P as DefaultRowHeights,
  ve as EleScope,
  Q as EventAdapter,
  ee as FalseFn,
  Oe as FocusModel,
  ke as GeCellIndices,
  B as GeCssColorUtil,
  Wt as GeFilterService,
  Ot as GeKeyEvent,
  U as GeModelChangeEvent,
  X as GeMouseEvent,
  $ as GeoData,
  F as Icon,
  Mt as IndexAndPx,
  Fe as InputCellRenderer,
  Me as InputHandler,
  Yt as MaleFemaleToIconCellRenderer,
  me as MouseHandler,
  fe as MouseTargetData,
  qt as NumberCellRenderer,
  _e as OsxShortcutActionIdMapping,
  ie as Padding,
  Qt as ProgressBarCellRenderer,
  Ae as RenderScope,
  Gt as Renderer,
  Ne as RequestChunk,
  ge as SelectCellRenderer,
  Le as SelectionModel,
  Ie as SelectionService,
  De as ShortcutService,
  $e as SimpleDomService,
  f as Size,
  Ee as SortItem,
  de as SortedOptions,
  Jt as StarRatingCellRenderer,
  ye as StoreStateCollapsedExpandService,
  Se as StoreStateScrollPosService,
  Ce as StoreStateSortingService,
  we as TableApi,
  Pt as TableCellUpdateEvent,
  L as TableFactory,
  G as TableModel,
  At as TableModelAndOptions,
  z as TableOptions,
  he as TableScope,
  to as ThreeColorGradientArg,
  se as TreeCheckboxModel,
  j as TreeFactory,
  ae as TreeOptions,
  Z as TreeRow,
  Be as TreeRowService,
  Kt as TrueFalseCellRenderer,
  Ve as TrueFn,
  ne as TwoColorGradientArg,
  ze as ValueLabel,
  Te as WindowsShortcutActionIdMapping,
  Rt as actionIds,
  Dt as allCenter,
  _t as allLeft,
  $t as allRight,
  It as bodyCenter,
  kt as bodyLeft,
  Tt as bodyRight,
  Zt as editInputPipeForNumber,
  Y as getAreaIdentByString,
  N as isAreaModelTree,
  be as isCheckboxColumnDef,
  O as isTreeRow,
  vt as px0,
  Ct as px10,
  gt as px100,
  ut as px110,
  ct as px120,
  ht as px130,
  dt as px140,
  at as px150,
  nt as px160,
  lt as px170,
  rt as px180,
  it as px190,
  yt as px20,
  te as px200,
  st as px210,
  ot as px220,
  tt as px230,
  et as px240,
  Ze as px250,
  Qe as px260,
  Je as px270,
  qe as px280,
  Ue as px290,
  xt as px30,
  Ke as px300,
  St as px40,
  wt as px50,
  mt as px60,
  ft as px70,
  pt as px80,
  bt as px90
};
