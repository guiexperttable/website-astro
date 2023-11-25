class X {
  constructor(e = -1, t = -1, o = -1, i = -1, s, r, l, n = 0, d = 0, a = 0, h = "") {
    this.rowIndex = e, this.rowTop = t, this.columnIndex = o, this.columnLeft = i, this.areaIdent = s, this.sideIdent = r, this.originalEvent = l, this.clickCount = n, this.draggingX = d, this.draggingY = a, this.action = h;
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
class L {
  constructor(e = ">", t = "", o = []) {
    this.content = e, this.style = t, this.classes = o;
  }
}
class le {
  constructor(e = new L(
    ">",
    "transform: rotate(90deg) translate(66%, -66%); transform-origin: 0 0;",
    ["gt-table-tree-arrow-expanded"]
  ), t = new L(
    ">",
    "",
    ["ge-table-tree-arrow-collapsed"]
  ), o = new L(
    ">",
    "color:transparent;",
    ["gt-table-tree-arrow-hidden"]
  ), i = new L(
    "↕",
    "",
    ["gt-table-tree-arrow-expanded-all"]
  )) {
    this.arrowExpanded = e, this.arrowCollapsed = t, this.arrowPlaceholder = o, this.arrowExpandCollapseAll = i;
  }
}
class ne {
  constructor(e = new L("↑", "", ["ge-header-sorted-asc"]), t = new L("↓", "", ["ge-header-sorted-desc"]), o = new L("↑", "color:transparent;", [])) {
    this.iconAsc = e, this.iconDesc = t, this.iconPlaceholder = o;
  }
}
class ue {
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
    return Object.entries(t).forEach(([o, i]) => this.domService.setStyle(e, o, i + "px")), e;
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
  addClasses(e, t) {
    if (e)
      for (const o of e)
        this.domService.addClass(t, o);
    return t;
  }
  setAttribute(e, t, o) {
    return t && o && this.domService.setAttribute(e, t, o), e;
  }
  createAreaDivWithClass(e, t, o, i) {
    const s = this.domService.createElement("div");
    return this.addClass(e, s), this.domService.setAttribute(s, "data-area", o), this.domService.setAttribute(s, "data-side", i), this.domService.appendChild(t, s), s;
  }
  createDivWithClass(e, t) {
    const o = this.domService.createElement("div");
    return this.addClass(e, o), this.domService.appendChild(t, o), o;
  }
  addRowDiv(e, t, o = -1, i, s, r = "") {
    const l = t.index ?? -1, n = this.getDivOrCreateDiv(l, e);
    if (this.domService.addClass(n, "ge-table-row-div"), this.domService.addClass(n, `ge-table-row-div-${t.index}`), i === "body" && s === "center") {
      const d = ((t == null ? void 0 : t.index) ?? 0) % 2 === 0 ? "even" : "odd";
      this.domService.addClass(n, `ge-table-row-${d}`);
    }
    if (this.domService.setStyle(n, "display", "clip"), this.domService.setStyle(n, "position", "absolute"), this.domService.setStyle(n, "left", `${t.left}px`), this.domService.setStyle(n, "top", `${t.top}px`), this.domService.setStyle(n, "width", `${t.width}px`), this.domService.setStyle(n, "height", `${t.height}px`), this.domService.setAttribute(n, "data-row-index", `${o}`), this.domService.setAttribute(n, "data-area", `${i}`), r) {
      const d = this.domService.createText(r);
      this.domService.appendChild(n, d);
    }
    return this.domService.appendChild(e.child, n), n;
  }
  addColumnDiv(e, t, o = -1, i = -1, s, r, l = "", n, d, a = void 0, h) {
    const g = d == null ? void 0 : d.treeOptions, m = d == null ? void 0 : d.showCheckboxWihoutExtraColumn, b = this.domService.createElement("div");
    this.domService.addClass(b, "ge-table-col-div"), this.domService.addClass(b, `ge-table-col-div-${t.index}`), this.domService.setAttribute(b, "data-col-index", `${t.index}`), this.domService.setAttribute(b, "data-row-index", `${o}`), this.domService.setAttribute(b, "data-area", `${s}`);
    const w = ((t == null ? void 0 : t.index) ?? 0) % 2 === 0 ? "even" : "odd";
    if (s === "body" && r === "center" && this.domService.addClass(b, `ge-table-column-${w}`), this.domService.setStyle(b, "display", "clip"), this.domService.setStyle(b, "position", "absolute"), this.domService.setStyle(b, "left", `${t.left}px`), this.domService.setStyle(b, "top", `${t.top}px`), this.domService.setStyle(b, "width", `${t.width}px`), this.domService.setStyle(b, "height", `${t.height}px`), n && n !== "none" && (this.domService.addClass(b, "ge-table-col-tree"), this.addArrowDiv(b, n, g, o, i, s)), m && i === 0 && a && this.addCheckboxToDiv(b, a, s, o), l) {
      const u = n !== "none" && i === 0;
      this.addLabelDiv(b, l, u, o, i, s);
    }
    return h && this.addSortedIcon(b, h, d == null ? void 0 : d.sortedOptions, i), this.domService.appendChild(e, b), b;
  }
  addCheckboxToDiv(e, t, o, i) {
    const s = this.domService.createElement("div"), r = t === "full" ? "checked" : "";
    return s.innerHTML = `
            <input
                type="checkbox"
                data-area="${o}"
                data-row-index="${i}"
                data-input-type="checkbox"
                ${r}
                class="ge-table-row-checkbox"> `, this.domService.setStyle(s, "display", "inline"), this.domService.setStyle(s, "width", "inherit"), this.domService.setAttribute(s, "data-row-index", `${i}`), this.domService.appendChild(e, s), s;
  }
  addLabelDiv(e, t = "", o = !1, i = -1, s = -1, r = "body") {
    const l = this.domService.createElement("div");
    if (this.domService.addClass(l, "ge-table-label-div"), this.domService.setStyle(l, "position", "relative"), this.domService.setStyle(l, "background", "transparent"), this.domService.setStyle(l, "width", "100%"), this.domService.setStyle(l, "height", "100%"), this.domService.setAttribute(l, "data-row-index", `${i}`), this.domService.setAttribute(l, "data-col-index", `${s}`), this.domService.setAttribute(l, "data-area", `${r}`), t)
      if (o) {
        const n = this.domService.createText(t);
        this.domService.appendChild(l, n);
      } else {
        const n = this.domService.createElement("div");
        this.domService.appendChild(l, n);
        const d = this.domService.createText(t);
        this.domService.addClass(n, "ge-table-label"), this.domService.appendChild(n, d), this.domService.setAttribute(n, "data-row-index", `${i}`), this.domService.setAttribute(n, "data-col-index", `${s}`), this.domService.setAttribute(n, "data-area", `${r}`);
      }
    return this.domService.appendChild(e, l), l;
  }
  addSortedIcon(e, t = "", o = new ne(), i = -1) {
    const s = this.domService.createElement("div");
    this.domService.addClass(s, "ge-table-sorted-icon-div"), this.domService.setStyle(s, "position", "absolute"), this.domService.setStyle(s, "top", "0"), this.domService.setStyle(s, "right", "0"), this.domService.setStyle(s, "width", "20px"), this.domService.setStyle(s, "background", "transparent"), this.domService.setStyle(s, "cursor", "pointer"), this.domService.setAttribute(s, "data-col-index", `${i}`), this.domService.setAttribute(s, "data-area", "header");
    let r;
    t === "asc" ? r = o.iconAsc : t === "desc" ? r = o.iconDesc : r = o.iconPlaceholder;
    const l = r.content, n = this.domService.createText(l);
    this.domService.appendChild(s, n), r.style && this.applyStyleString(s, r.style);
    for (const d of r.classes)
      this.domService.addClass(s, d);
    return this.domService.appendChild(e, s), s;
  }
  addArrowDiv(e, t = "none", o = new le(), i = -1, s = -1, r = "body") {
    const l = this.domService.createElement("div");
    this.domService.addClass(l, "ge-table-tree-arrow-div"), this.domService.setStyle(l, "display", "inline-block"), this.domService.setStyle(l, "position", ""), this.domService.setStyle(l, "width", "20px"), this.domService.setStyle(l, "background", "transparent"), this.domService.setStyle(l, "cursor", "pointer"), this.domService.setAttribute(l, "data-row-index", `${i}`), this.domService.setAttribute(l, "data-col-index", `${s}`), this.domService.setAttribute(l, "data-area", `${r}`);
    let n;
    t === "expanded" ? n = o.arrowExpanded : t === "collapsed" ? n = o.arrowCollapsed : n = o.arrowPlaceholder;
    const d = n.content, a = this.domService.createText(d);
    this.domService.appendChild(l, a), n.style && this.applyStyleString(l, n.style);
    for (const h of n.classes)
      this.domService.addClass(l, h);
    return this.domService.appendChild(e, l), l;
  }
  addColumnBorderDivs(e, t, o, i, s) {
    if (e.verticalBorderVisible) {
      const r = `ge-table-${i}-${s}-vertical-border`;
      this.addVerticalBorder(o, t, r);
    }
    if (e.horizontalBorderVisible) {
      const r = `ge-table-${i}-${s}-horizontal-border`;
      this.addHorizontalBorder(o, t, r);
    }
    return t;
  }
  addHorizontalBorder(e, t, o = "ge-table-body-center-horizontal-border") {
    const i = this.domService.createElement("div");
    return this.domService.addClass(i, o), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${e.left}px`), this.domService.setStyle(i, "top", `${e.top}px`), this.domService.setStyle(i, "width", `${e.width}px`), this.domService.setStyle(i, "height", "1px"), this.domService.appendChild(t, i), i;
  }
  addFocusBorderDivs(e, t, o) {
    let i = this.domService.createElement("div");
    return this.domService.addClass(i, "ge-table-focus-border"), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${t.left}px`), this.domService.setStyle(i, "top", `${t.top}px`), this.domService.setStyle(i, "width", "1px"), this.domService.setStyle(i, "height", `${t.height}px`), this.applyStyle(i, o), this.domService.appendChild(e, i), i = this.domService.createElement("div"), this.domService.addClass(i, "ge-table-focus-border"), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${t.left + t.width - 1}px`), this.domService.setStyle(i, "top", `${t.top}px`), this.domService.setStyle(i, "width", "1px"), this.domService.setStyle(i, "height", `${t.height}px`), this.applyStyle(i, o), this.domService.appendChild(e, i), i = this.domService.createElement("div"), this.domService.addClass(i, "ge-table-focus-border"), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${t.left}px`), this.domService.setStyle(i, "top", `${t.top}px`), this.domService.setStyle(i, "width", `${t.width}px`), this.domService.setStyle(i, "height", "1px"), this.applyStyle(i, o), this.domService.appendChild(e, i), i = this.domService.createElement("div"), this.domService.addClass(i, "ge-table-focus-border"), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${t.left}px`), this.domService.setStyle(i, "top", `${t.top + t.height - 1}px`), this.domService.setStyle(i, "width", `${t.width}px`), this.domService.setStyle(i, "height", "1px"), this.applyStyle(i, o), this.domService.appendChild(e, i), e;
  }
  addVerticalBorder(e, t, o = "ge-table-body-center-vertical-border") {
    const i = this.domService.createElement("div");
    return this.domService.addClass(i, o), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${e.left}px`), this.domService.setStyle(i, "top", `${e.top}px`), this.domService.setStyle(i, "width", "1px"), this.domService.setStyle(i, "height", `${e.height}px`), this.domService.appendChild(t, i), i;
  }
  addDiv(e, t, o = "") {
    const i = this.domService.createElement("div");
    return o && this.domService.addClass(i, o), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${t.left}px`), this.domService.setStyle(i, "top", `${t.top}px`), this.domService.setStyle(i, "width", `${t.width}px`), this.domService.setStyle(i, "height", `${t.height}px`), this.domService.appendChild(e, i), i;
  }
  applyStyleString(e, t) {
    const o = t.split(";").map((i) => i.trim()).filter((i) => i);
    for (const i of o) {
      const [s, r] = i.split(":");
      this.domService.setStyle(e, s.trim(), r.trim());
    }
  }
  getDivOrCreateDiv(e, t) {
    let o = t.cache[e];
    return o ? (o.innerText = "", o) : (o = this.domService.createElement("div"), t.cache[e] = o, o);
  }
}
class F {
  constructor(e, t = !0, o, i, s = 0, r = !1, l = !1) {
    this.data = e, this.expanded = t, this.children = o, this.parent = i, this.deep = s, this.checked = r, this.keep = l;
  }
}
const Y = (c) => c === "header" ? "header" : c === "footer" ? "footer" : "body";
class ge {
  constructor(e, t) {
    if (this.rowIdx = -1, this.colIdx = -1, this.action = null, this.inputType = null, this.className = "", e !== null && (e instanceof HTMLDivElement || e instanceof HTMLSpanElement || e instanceof HTMLInputElement)) {
      this.className = e.className, this.action = e.getAttribute("data-ge-action"), this.inputType = e.getAttribute("data-input-type"), this.rowIdx = Number(e.getAttribute("data-row-index")), this.colIdx = Number(e.getAttribute("data-col-index"));
      const o = e.getAttribute("data-area");
      if (o && (this.areaIdent = Y(o), this.areaModel = t.tableModel.getAreaModel(this.areaIdent), this.row = this.areaModel.getRowByIndex(this.rowIdx)), e instanceof HTMLInputElement) {
        const i = e;
        this.value = i.value;
      }
    }
  }
}
class be {
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
    const t = new ge(e.target, this.tableScope);
    if (t.action === "toggleExpandCollapseAll")
      this.expandedAll = !this.expandedAll, this.tableScope.toggleExpandCollapseAll(this.expandedAll), e.preventDefault(), e.stopPropagation();
    else if (t.inputType === "checkbox" && t.areaIdent)
      this.tableScope.toggleRowCheckbox(t.rowIdx, t.colIdx, t.areaIdent), e.preventDefault(), e.stopPropagation();
    else if (t.row instanceof F && t.areaModel) {
      const o = t.colIdx === this.getArrowColumnIndex() && e.altKey, i = t.className.includes("ge-table-tree-arrow-div");
      if (console.info(i, o), o || i) {
        e.preventDefault(), e.stopPropagation();
        const s = t.row;
        s.expanded = !s.expanded, "recalcVisibleTreeRows" in t.areaModel && t.areaModel.recalcVisibleTreeRows(), this.tableScope.tableModel.recalcSize(this.tableScope.hostElement.clientWidth), this.tableScope.adjustContainersAndRows(), this.updateCollapsedExpandedState(s);
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
      const t = e.target, o = t.getAttribute("data-area"), i = Y(o), s = Number(t.getAttribute("data-row-index")), r = Number(t.getAttribute("data-col-index")), l = this.tableScope.tableModel.getAreaModel(i);
      if (o && i === "header")
        this.tableScope.tableModel.isSortable(r) && (this.tableScope.clearSelection(), this.tableScope.onHeaderDblClicked(e, s, r));
      else if (t.getAttribute("data-row-index")) {
        const n = l.getRowByIndex(s);
        if (o && i === "body" && l.isEditable(s, r) && (this.tableScope.clearSelection(), this.tableScope.initRenderEditor(s, r)), n instanceof F && r === this.getArrowColumnIndex()) {
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
    var o, i, s, r, l;
    const t = (i = (o = this.tableScope.tableOptions) == null ? void 0 : o.autoRestoreOptions) == null ? void 0 : i.getRowId;
    if (t) {
      const n = (s = this.tableScope.storeStateCollapsedExpandService) == null ? void 0 : s.collapsedExpandedStateGet().mode, d = n === "collapsed" && !e.expanded || n === "expanded" && e.expanded, a = n === "collapsed" && e.expanded || n === "expanded" && !e.expanded, h = t(e.data);
      d ? (r = this.tableScope.storeStateCollapsedExpandService) == null || r.collapsedStateIdsPush(h) : a && ((l = this.tableScope.storeStateCollapsedExpandService) == null || l.collapsedStateIdsRemove(h));
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
class pe {
  constructor(e) {
    this.tableScope = e;
  }
  updateCells(e) {
    this.tableScope.updateCells(e);
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
class fe {
  flattenTree(e, t = []) {
    var o;
    for (const i of e)
      this.isVisible(i) && t.push(i), (o = i.children) != null && o.length && this.flattenTree(i.children, t);
    return t;
  }
  isVisible(e) {
    return e.parent ? e.parent.expanded ? this.isVisible(e.parent) : !1 : !0;
  }
}
class K {
  constructor(e, t = [], o = -1) {
    this.areaIdent = e, this.columnDefs = t, this.defaultRowHeight = o, this.rowSelectionModel = void 0, this.yPositions = [], this.cellRenderers = t.map((i) => i.rendererMap[e]);
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
    const i = (l = this.columnDefs[t]) == null ? void 0 : l.editInputPipe;
    i && (o = i(o, e, t));
    const s = this.getRowByIndex(e), r = this.columnDefs[t].property;
    return r.includes(".") ? this.setPropertyValue(s, r.split("."), o) : (s[r] = o, !0);
  }
  isSelectable(e, t) {
    return !0;
  }
  changeColumnOrder(e, t) {
    this.arrayMove(this.cellRenderers, e, t);
  }
  setPropertyValue(e, t, o) {
    const i = t.shift();
    if (i) {
      let s = e[i];
      return s && t.length ? this.setPropertyValue(s, t, o) : (e[i] = o, !0);
    }
    return !1;
  }
  arrayMove(e, t, o) {
    const i = e.splice(t, 1)[0];
    return e.splice(o, 0, i), e;
  }
  calcYPositions() {
    const e = this.getRowCount();
    this.yPositions = new Array(e + 1), this.yPositions[0] = 0;
    for (let t = 0; t < e; t++)
      this.yPositions[t + 1] = this.getRowHeight(t) + this.yPositions[t];
  }
}
class ae {
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
      const i = e, s = t;
      if (i.length && s.length)
        return this.genericSortComparator(i[0], s[0], o);
    }
    return o * ("" + e).localeCompare("" + t);
  }
}
class H extends K {
  constructor(e, t, o, i = []) {
    super(e, i, o), this.areaIdent = e, this.rows = t, this.defaultRowHeight = o, this.columnDefs = i, this.sorterService = new ae(), this.service = new fe(), this.properties = i.map((s) => s.property), this.flattenRows = this.service.flattenTree(t), this.filteredFlattenRows = [...this.flattenRows];
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
      const i = this.properties[t];
      if (i)
        return i.includes(".") ? this.getPropertyValue(o.data, i.split(".")) : o.data[i];
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
    const { columnIndex: t, sortState: o } = e[e.length - 1], i = o === "asc" ? 1 : o === "desc" ? -1 : 0, s = this.properties[t];
    return this.treeSort(this.rows, s, i), this.flattenRows = this.service.flattenTree(this.rows), this.filteredFlattenRows = [...this.flattenRows], !0;
  }
  toggleExpandCollapseAll(e) {
    this.expandAllRecursive(this.rows, e), this.flattenRows = this.service.flattenTree(this.rows), this.doFiltering();
  }
  setAllParentsOk(e) {
    return e.parent && (e.parent.keep = !0, this.setAllParentsOk(e.parent)), !1;
  }
  setValue(e, t, o) {
    var r;
    const i = (r = this.columnDefs[t]) == null ? void 0 : r.editInputPipe;
    i && (o = i(o, e, t));
    const s = this.getRowByIndex(e);
    if (s) {
      const l = s.data, n = this.columnDefs[t].property;
      return n.includes(".") ? this.setPropertyValue(l, n.split("."), o) : (l[n] = o, !0);
    }
    return !1;
  }
  genericTreeTableSortComparator(e, t) {
    return (o, i) => {
      const s = this.getValueByT(o.data, e), r = this.getValueByT(i.data, e);
      return this.sorterService.genericSortComparator(s, r, t);
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
        (o, i, s) => this.lastPredictFn(o, i, s)
      );
      this.flattenRows.forEach((o) => o.keep = !1), this.flattenRows.forEach((o) => {
        t.includes(o) && (o.keep = !0, this.setAllParentsOk(o));
      }), this.filteredFlattenRows = this.flattenRows.filter(
        (o, i, s) => o.keep
      );
    }
  }
  getPropertyValue(e, t) {
    const o = t.shift();
    let i = e[o];
    return i && t.length ? this.getPropertyValue(i, t) : i;
  }
  treeSort(e, t, o) {
    e.sort(this.genericTreeTableSortComparator(t, o));
    for (const i of e)
      i.children && this.treeSort(i.children, t, o);
  }
}
class U {
  constructor(e) {
    this.getStorageKeyFn = e;
  }
  autoConvertMapToObject(e) {
    const t = {};
    if (e instanceof Map) {
      const o = e;
      for (const i of [...o]) {
        const [
          s,
          r
        ] = i;
        t[s] = r;
      }
    }
    return t;
  }
  checkAndPersistItem(e, t) {
    const o = this.getStorageKeyFn;
    if (o) {
      const i = o();
      if (i) {
        const s = i + e;
        if ((t + "").includes("Map")) {
          const r = this.autoConvertMapToObject(t);
          this.persistItem(s, r);
        } else
          this.persistItem(s, t);
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
class me extends U {
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
        let i = this.loadFromLocalStorage(o);
        this.scrollOffset = i || [0, 0];
      }
    }
  }
}
class we {
  constructor(e = "collapsed", t = [], o = !1, i = !1) {
    this.mode = e, this.rowIds = t, this.allCollapsed = o, this.allExpanded = i;
  }
}
class Se extends U {
  constructor(e) {
    super(e), this.COLLAPSED_EXPANDED_STATE = "collapsedExpandedState", this.collapsedExpandedState = new we(), this.load();
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
        const o = t + this.COLLAPSED_EXPANDED_STATE, i = this.loadFromLocalStorage(o);
        i && (this.collapsedExpandedState = i);
      }
    }
  }
  persist() {
    this.checkAndPersistItem(this.COLLAPSED_EXPANDED_STATE, this.collapsedExpandedState);
  }
}
class xe extends U {
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
        let i = this.loadFromLocalStorage(o);
        this.sortItems = i || [];
      }
    }
  }
}
class $ {
  constructor(e = 0, t = 0, o = 0, i = 0, s) {
    this.left = e, this.width = t, this.height = o, this.top = i, this.index = s;
  }
}
class ye {
  constructor(e, t, o, i) {
    this.hostElement = e, this.tableModel = t, this.dom = o, this.tableOptions = i, this.scrollTop = 0, this.areaBodyWestGeo = new $(), this.areaBodyCenterGeo = new $(), this.areaBodyEastGeo = new $();
    const s = this.hostElement;
    s.innerText = "", this.dom.setAttribute(s, "tabindex", "0"), this.dom.setStyle(
      this.dom.addClass("ge-table", s),
      "position",
      "relative"
    ), this.hoverRow = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-hover-row", s)
    ), this.hoverColumn = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-hover-column", s)
    ), this.areaHeaderWest = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-header ge-table-header-west", s, "header", "west")
      )
    ), this.areaHeaderCenter = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-header ge-table-header-center", s, "header", "center")
      )
    ), this.areaHeaderEast = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-header ge-table-header-east", s, "body", "east")
      )
    ), this.areaBodyWest = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-body ge-table-body-west", s, "body", "west")
      )
    ), this.areaBodyEast = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-body ge-table-body-east", s, "body", "east")
      )
    ), this.areaFooterWest = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-footer ge-table-footer-west", s, "footer", "west")
      )
    ), this.areaFooterCenter = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-footer ge-table-footer-center", s, "footer", "center")
      )
    ), this.areaFooterEast = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-footer ge-table-footer-east", s, "footer", "east")
      )
    ), this.scrollViewport = o.applyStyleOverflowAuto(
      this.tableOptions.overflowX ?? "auto",
      this.tableOptions.overflowY ?? "auto",
      o.applyStyleNoPadding(
        o.applyStylePosistionAbsolute(
          o.createAreaDivWithClass("ge-table-scroll-viewport", s, "body", "center")
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
      o.createDivWithClass("ge-table-header-border", s)
    ), this.borderFixedWest = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-west-fixed-column-border", s)
    ), this.borderFixedEast = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-east-fixed-column-border", s)
    ), this.borderFooterTop = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-footer-border", s)
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
  constructor(e, t, o, i, s = !1) {
    this.r1 = e, this.c1 = t, this.r2 = o, this.c2 = i, this.gammaRange = s;
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
class Ce {
  constructor(e, t) {
    this.tableModel = e, this.areaModel = t, this.colAndRowspanRanges = void 0;
  }
  init() {
    if (this.areaModel.getMaxColspan() < 2 && this.areaModel.getMaxRowspan() < 2)
      return;
    this.colAndRowspanRanges = [];
    const e = this.areaModel.getRowCount(), t = this.tableModel.getColumnCount();
    for (let o = 0; o < e; o++)
      for (let i = 0; i < t; i++) {
        let s = this.areaModel.getColspanAt(o, i), r = this.areaModel.getRowspanAt(o, i);
        if (s > 1 || r > 1) {
          s === 0 && (s = 1), r === 0 && (r = 1);
          const l = this.areaModel.hasOwnProperty("gammaCells");
          this.colAndRowspanRanges.push(
            new E(o, i, o + r - 1, i + s - 1, l)
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
class k {
  constructor(e, t, o) {
    this.header = e, this.body = t, this.footer = o;
  }
}
class ve extends ye {
  constructor(e, t, o, i) {
    var r, l;
    super(e, t, o, i), this.scrollLeft = 0, this.scrollViewportLeft = 0, this.scrollFactorY = 0, this.scrollFactorX = 0, this.cleanupFunctions = {
      header: [],
      body: [],
      footer: []
    }, this.tree = !1, this.colAndRowspanModels = new k(), this.firstVisibleRowIndex = -1, this.draggingTargetColumnIndex = -1, this.removables = [], this.editing = !1, this.tableModel.getSelectionModel ? this.getSelectionModel = this.tableModel.getSelectionModel : (r = this.tableOptions) != null && r.getSelectionModel && (this.getSelectionModel = this.tableOptions.getSelectionModel), (l = this.tableOptions) != null && l.getFocusModel && (this.getFocusModel = this.tableOptions.getFocusModel), t.getAreaModel("body") instanceof H && (this.tree = !0), ["header", "body", "footer"].forEach(
      (n) => {
        var d;
        this.colAndRowspanModels[n] = new Ce(t, t.getAreaModel(n)), (d = this.colAndRowspanModels[n]) == null || d.init();
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
    var i;
    let o = (i = this.tableModel.getColumnDef(t)) == null ? void 0 : i.getEditRenderer;
    if (o || (o = this.tableOptions.getEditRenderer), o)
      if (this.editorRenderer = o(e, t), this.editorRenderer) {
        this.editorRendererRow = e, this.editorRendererColumn = t, this.editing = !0, this.repaint();
        const s = document.querySelector("input.ge-table-cell-editor-input");
        s && s.focus();
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
  updateCells(e) {
    e.forEach(
      (t) => this.tableModel.getAreaModel(t.area).setValue(t.rowIndex, t.columnIndex, t.value)
    ), this.repaint();
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
      const i = (o = e.closest("[" + t + "]")) == null ? void 0 : o.getAttribute(t);
      if (i)
        return Number(i);
    }
    return -1;
  }
  getStringByAttr(e, t) {
    var o;
    if (e) {
      const i = (o = e.closest("[" + t + "]")) == null ? void 0 : o.getAttribute(t);
      if (i)
        return i;
    }
    return "";
  }
  adjustArea(e, t = 0) {
    var u;
    const o = this.getArea(e, "west"), i = this.getArea(e, "center"), s = this.getArea(e, "east"), r = i.child.clientHeight;
    o.child.innerText = "", i.child.innerText = "", s.child.innerText = "";
    const l = 0, n = this.areaBodyCenterGeo.width, d = this.tableModel.getPadding(), a = this.tableModel.getAreaModel(e), h = a.getRowCount();
    for (; this.cleanupFunctions[e].length; ) {
      const p = this.cleanupFunctions[e].shift();
      p && p();
    }
    let g = t;
    const m = this.tableModel.getColumnCount(), b = this.tableModel.getFixedRightColumnCount(), w = this.tableModel.getFixedLeftColumnCount();
    for (let p = 0; p < h; p++) {
      const C = g, v = p === h - 1, R = this.tableModel.getRowHeight(e, p);
      if (C + R > 0) {
        this.firstVisibleRowIndex = p;
        let y = { left: l, width: n, height: R, top: C, index: p }, S = this.dom.addRowDiv(i, y, p, e, "center");
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
        })), d.right > 0 && (y = { left: l, width: this.areaBodyEastGeo.width, height: R, top: C, index: p }, S = this.dom.addRowDiv(s, y, p, e, "east"), this.adjustColumnsToRowParent({
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
        })), e === "header" && this.tree && p === h - 1) {
          const A = this.dom.applyStyle(
            this.dom.setAttribute(
              this.dom.addDiv(S, new $(16, 20, 20, 8)),
              "data-ge-action",
              "toggleExpandCollapseAll"
            ),
            { cursor: "pointer" }
          ), M = this.tableOptions.treeOptions.arrowExpandCollapseAll;
          if (M) {
            const B = this.dom.domService.createText(M.content);
            this.dom.domService.appendChild(A, B), M.style && this.dom.applyStyleString(A, M.style);
          }
        }
      }
      if (g = g + R, g > r)
        break;
    }
    if (this.colAndRowspanModels && this.colAndRowspanModels[e]) {
      const p = ((u = this.colAndRowspanModels[e]) == null ? void 0 : u.getRanges()) ?? [];
      if (p.length)
        for (const C of p) {
          let v = 0, R = i.child, y = "center";
          if (C.c1 < w)
            R = o.child, y = "west";
          else if (b > 0 && C.c1 >= m - b)
            R = s.child, y = "east";
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
  drawBigCell(e, t, o, i, s, r) {
    const l = o + this.getRowHeights(0, e.r1 - 1, i).reduce((u, p) => u + p, 0), n = this.tableModel.getColumnCount(), d = this.tableModel.getFixedRightColumnCount();
    let a = 0;
    d > 0 && e.c1 >= n - d && (a = n - d);
    const h = t + this.getColumnWidths(a, e.c1 - 1).reduce((u, p) => u + p, 0), g = this.getRowHeights(e.r1, e.r2, i).reduce((u, p) => u + p, 0), m = this.getColumnWidths(e.c1, e.c2).reduce((u, p) => u + p, 0);
    let b = !1;
    const w = this.getSelectionModel ? this.getSelectionModel() : void 0;
    w && (b = w.getSelectionCount(e.r1, e.c1) > 0), e.gammaRange ? (console.info("TODO here", e), this.renderCell({
      areaModel: i,
      areaIdent: i.areaIdent,
      sideIdent: r,
      rowIndex: e.r1,
      columnIndex: e.c1,
      left: h,
      top: l,
      width: m,
      height: g,
      parent: s,
      cellSelected: b,
      lastRowOfModel: !0,
      gammaRange: e.gammaRange
    })) : this.renderCell({
      areaModel: i,
      areaIdent: i.areaIdent,
      sideIdent: r,
      rowIndex: e.r1,
      columnIndex: e.c1,
      left: h,
      top: l,
      width: m,
      height: g,
      parent: s,
      cellSelected: b,
      lastRowOfModel: !0,
      gammaRange: e.gammaRange
    }), i.areaIdent === "header" && this.tableOptions.columnsResizable && this.renderHeaderCellResizeHandle({
      rowIndex: e.r1,
      columnIndex: e.c1,
      cellLeft: h,
      cellTop: l,
      cellWidth: m,
      cellHeight: g,
      parent: s
    });
  }
  findRowOfImportantRowspanCell(e, t, o) {
    const i = e.getMaxRowspan();
    for (let s = t - 1; s > -1; s--) {
      const r = e.getRowspanAt(s, o);
      if (r > 1 && s + r + 1 >= t)
        return s;
      if (t - s > i)
        return -1;
    }
    return -1;
  }
  adjustColumnsToRowParent({
    areaIdent: e,
    sideIdent: t,
    areaModel: o,
    geo: i,
    parent: s,
    rowIndex: r,
    columnIndexStart: l,
    columnIndexEnd: n,
    verticalFixed: d = !1,
    lastRowOfModel: a = !1
  }) {
    var w;
    this.scrollViewportLeft = this.scrollViewport.scrollLeft;
    let h = 0;
    if (!d) {
      const u = this.areaBodyCenterGeo.width - this.tableModel.getContentWidthInPixel();
      h = this.scrollFactorX * u;
    }
    const g = 0, m = !!(e === "body" && t);
    let b = h;
    for (let u = l; u <= n; u++) {
      const p = b, C = this.tableModel.getColumnWidth(u);
      if (C > 0 && p + C > 0) {
        let v = i.height;
        const R = o.getRowspanAt(r, u), y = o.getColspanAt(r, u);
        R > 1 && (v = this.getRowHeights(r, r + R - 1, o).reduce((A, M) => A + M, 0));
        let S = C;
        y > 1 && (S = this.getColumnWidths(u, u + y - 1).reduce((A, M) => A + M, 0));
        let T = !1;
        if (this.colAndRowspanModels && this.colAndRowspanModels[e] && (w = this.colAndRowspanModels[e]) != null && w.isInRange(r, u) && (T = !0), this.draggingTargetColumnIndex === u && e !== "header") {
          this.renderDragTargetDiv(s, p, g, S, v);
          const A = { left: p, top: g, width: S, height: v };
          this.dom.addColumnBorderDivs(this.tableOptions, s, A, e, t);
        } else {
          const A = this.renderSelectedBackgroundDiv(T, m, t, o, r, u, s, p, g, S, v);
          T || this.renderCell({
            areaModel: o,
            areaIdent: e,
            sideIdent: t,
            rowIndex: r,
            columnIndex: u,
            left: p,
            top: g,
            width: S,
            height: v,
            parent: s,
            cellSelected: A,
            lastRowOfModel: a,
            gammaRange: !0
          }), e === "header" && this.tableOptions.columnsResizable && this.renderHeaderCellResizeHandle({
            rowIndex: r,
            columnIndex: u,
            cellLeft: p,
            cellTop: g,
            cellWidth: S,
            cellHeight: v,
            parent: s
          });
        }
      }
      if (b = b + C, b > this.areaBodyCenterGeo.width)
        break;
    }
    this.tableOptions.verticalBorderVisible && this.dom.addVerticalBorder(new $(b - 1, 1, i.height, 0), s);
  }
  getTreeArrowColumnIndex() {
    return this.tableOptions.showCheckboxWihoutExtraColumn ? 0 : this.tableModel.isRowCheckboxVisible() ? 1 : 0;
  }
  addAndRenderCellDiv({
    areaModel: e,
    areaIdent: t,
    sideIdent: o,
    rowIndex: i,
    index: s,
    left: r,
    width: l,
    height: n,
    top: d,
    parent: a,
    lastRowOfModel: h
  }) {
    var J;
    const m = this.editorRenderer && this.editorRendererRow === i && this.editorRendererColumn === s ? this.editorRenderer : e.getCellRenderer(i, s), b = { left: r, width: l, height: n, top: d, index: s }, w = e.getRowByIndex(i);
    let u = "none";
    if (s === this.getTreeArrowColumnIndex() && w instanceof F) {
      const x = w;
      (J = x.children) != null && J.length ? x.expanded ? u = "expanded" : u = "collapsed" : u = "hidden";
    }
    let C;
    if (t === "header") {
      const x = this.tableModel.getColumnDef(s);
      (!(x != null && x.sortIconVisible) || x != null && x.sortIconVisible()) && (C = x == null ? void 0 : x.sortState);
    }
    const v = e.getValueAt(i, s), R = m ? "" : `${v}`, y = e.isRowChecked(i), S = this.dom.addColumnDiv(
      a,
      b,
      i,
      s,
      t,
      o,
      R,
      u,
      this.tableOptions,
      y,
      C
    ), T = e.getTooltipAt(i, s);
    T && this.dom.setAttribute(S, "title", T);
    const A = this.tableModel.getColumnDef(s);
    A && A.classes[t] && this.dom.addClasses(A.classes[t], S);
    let M;
    m && (M = m.render(S, i, s, t, e, v, this.dom.domService));
    const B = e.getCustomClassesAt(i, s);
    if (B.length && this.dom.addClasses(B, S), this.dom.addColumnBorderDivs(this.tableOptions, a, b, t, o), h && this.dom.addHorizontalBorder({ left: r, width: l, height: n, top: d + n }, a), this.getFocusModel && t === "body") {
      const x = this.getFocusModel();
      x != null && x.hasFocus(i, s) && this.dom.addFocusBorderDivs(a, b, {});
    }
    t === "header" && this.dom.setAttribute(S, "data-ge-action", "drag-column");
    const G = e.getCustomStyleAt(i, s);
    if (G)
      for (const x in G)
        this.dom.setStyle(S, x, G[x]);
    return [S, M];
  }
  getColumnWidths(e, t) {
    const o = [];
    for (let i = e; i <= t; i++)
      o.push(this.tableModel.getColumnWidth(i));
    return o;
  }
  getRowHeights(e, t, o) {
    const i = [];
    for (let s = e; s <= t; s++)
      i.push(o.getRowHeight(s));
    return i;
  }
  adjustHoverRows(e) {
    if (this.tableOptions.hoverRowVisible && e.rowIndex > -1) {
      const t = this.hostElement.clientWidth, o = this.tableModel.getAreaModel("body").getRowHeight(e.rowIndex), i = e.rowTop + this.areaHeaderCenter.parent.clientHeight - this.scrollTop;
      this.dom.applyStyle(this.hoverRow, {
        left: "0",
        top: i + "px",
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
      const t = this.hostElement.clientHeight, o = this.tableModel.getColumnWidth(e.columnIndex), i = this.areaBodyWestGeo.width, s = e.columnLeft + this.tableModel.getPadding().left - this.scrollLeft - i;
      this.dom.applyStyle(this.hoverColumn, {
        left: s + "px",
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
  renderDragTargetDiv(e, t, o, i, s) {
    const r = this.dom.applyStylePosistionAbsolute(
      this.dom.createDivWithClass("ge-table-drop-zone", e)
    );
    return this.dom.setStyle(r, "left", `${t}px`), this.dom.setStyle(r, "top", `${o}px`), this.dom.setStyle(r, "width", `${i}px`), this.dom.setStyle(r, "height", `${s}px`), r;
  }
  renderSelectedBackgroundDiv(e, t, o, i, s, r, l, n, d, a, h) {
    let g = !1;
    if (!e && t && i.isSelectable(s, r) && this.getSelectionModel) {
      const m = this.getSelectionModel();
      if (m) {
        const b = m.getSelectionCount(s, r);
        g = b > 0;
        for (let w = 0; w < b; w++) {
          const u = this.dom.applyStylePosistionAbsolute(
            // ge-table-body-west-selected-range
            this.dom.createDivWithClass(`ge-table-${i.areaIdent}-${o}-selected-range`, l)
          );
          this.dom.setStyle(u, "left", `${n}px`), this.dom.setStyle(u, "top", `${d}px`), this.dom.setStyle(u, "width", `${a}px`), this.dom.setStyle(u, "height", `${h}px`);
        }
      }
    }
    return g;
  }
  renderCell({
    areaModel: e,
    areaIdent: t,
    sideIdent: o,
    rowIndex: i,
    columnIndex: s,
    left: r,
    top: l,
    width: n,
    height: d,
    parent: a,
    cellSelected: h,
    lastRowOfModel: g,
    gammaRange: m
  }) {
    const [b, w] = this.addAndRenderCellDiv({
      areaModel: e,
      areaIdent: t,
      sideIdent: o,
      rowIndex: i,
      index: s,
      left: r,
      width: n,
      height: d,
      top: l,
      parent: a,
      lastRowOfModel: g,
      gammaRange: m
    });
    h && this.dom.addClass(`ge-table-${t}-${o}-selected-range`, b), w && this.cleanupFunctions[t].push(w);
  }
  renderHeaderCellResizeHandle({ rowIndex: e, columnIndex: t, cellLeft: o, cellTop: i, cellWidth: s, cellHeight: r, parent: l }) {
    const n = this.dom.domService, d = this.tableOptions.columnResizeHandleWidthInPx ?? 2, a = n.createElement("div");
    n.setAttribute(a, "data-col-index", `${t}`), n.setAttribute(a, "data-row-index", `${e}`), n.setAttribute(a, "data-area", "header"), n.setAttribute(a, "data-ge-action", "resize-column"), n.addClass(a, "ge-table-column-resize-handle"), n.setStyle(a, "display", "clip"), n.setStyle(a, "position", "absolute"), n.setStyle(a, "cursor", "col-resize"), n.setStyle(a, "left", `${o + s - d}px`), n.setStyle(a, "top", `${i}px`), n.setStyle(a, "width", `${d}px`), n.setStyle(a, "height", `${r}px`), n.appendChild(l, a);
  }
}
class Re {
  constructor(e, t) {
    this.columnIndex = e, this.sortState = t;
  }
}
class Ae {
  constructor(e) {
    this.tableScope = e, this.tableScope.hostElement.addEventListener("change", this.onHostElementChanged.bind(this));
  }
  onHostElementChanged(e) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) {
      const t = e.target, o = t.getAttribute("data-area"), i = t.getAttribute("data-row-index"), s = t.getAttribute("data-col-index");
      if (o && i && s) {
        const r = Y(o), l = Number(i), n = Number(s);
        this.tableScope.updateModelValueAfterEdit(r, l, n, t.value);
      }
    }
  }
}
class Ee {
  constructor(e = -1, t = -1) {
    this.rowIndex = e, this.columnIndex = t;
  }
}
class q {
  constructor(e) {
    this.cells = e;
  }
  static createSingle(e, t) {
    return new q([new Ee(e, t)]);
  }
}
class Me {
  constructor(e) {
    var t, o;
    this.tableScope = e, (t = this.tableScope.tableOptions) != null && t.getSelectionModel && (this.getSelectionModel = this.tableScope.tableOptions.getSelectionModel), (o = this.tableScope.tableOptions) != null && o.getFocusModel && (this.getFocusModel = this.tableScope.tableOptions.getFocusModel);
  }
  onMouseClicked(e, t) {
    var s, r, l, n, d, a, h;
    let o = !1, i = !1;
    if (this.getSelectionModel && this.getFocusModel) {
      const g = this.getSelectionModel(), m = this.getFocusModel();
      g && m && (m.hasFocus(e.rowIndex, e.columnIndex) || (m.setFocus(e.rowIndex, e.columnIndex), o = !0), (s = e.originalEvent) != null && s.shiftKey || g.hasSelection() && (g.clear(), o = !0), (r = e.originalEvent) != null && r.shiftKey && this.previousEvt ? (g.addSelection(this.createRangeByEvents(e, this.previousEvt)), i = !0, o = !0) : (l = e.originalEvent) != null && l.ctrlKey || (n = e.originalEvent) != null && n.metaKey ? (g.addSelection(E.singleCell(e.rowIndex, e.columnIndex)), i = !0, o = !0) : (d = e.originalEvent) != null && d.altKey && ((a = e.originalEvent) != null && a.ctrlKey || (h = e.originalEvent) != null && h.metaKey) && (g.removeSelection(E.singleCell(e.rowIndex, e.columnIndex)), i = !0, o = !0));
    }
    return i ? this.previousEvt = void 0 : this.previousEvt = e == null ? void 0 : e.clone(), o;
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
          const [i, s] = o.getFocus();
          return t.togglePoint(i, s), this.tableScope.repaint(), !0;
        }
      }
    }
    return !1;
  }
  createRangeByEvents(e, t) {
    t || (t = e);
    const o = Math.min(e.rowIndex, t == null ? void 0 : t.rowIndex), i = Math.max(e.rowIndex, t == null ? void 0 : t.rowIndex), s = Math.min(e.columnIndex, t == null ? void 0 : t.columnIndex), r = Math.max(e.columnIndex, t == null ? void 0 : t.columnIndex);
    return E.create({
      rowIndex1: o,
      columnIndex1: s,
      rowIndex2: i,
      columnIndex2: r
    });
  }
}
class Ie {
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
class ke {
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
class Te {
  constructor(e) {
    this.tableScope = e, this.shortcutActionIdMapping = {}, this.listener = [], this.listener.push(e), this.init();
  }
  addListener(e) {
    this.listener.includes(e) || this.listener.push(e);
  }
  init() {
    this.isMacintosh() ? Object.assign(this.shortcutActionIdMapping, new ke().get()) : Object.assign(this.shortcutActionIdMapping, new Ie().get()), Object.assign(this.shortcutActionIdMapping, this.tableScope.tableOptions.shortcutActionIdMapping), this.isDebug() && console.debug("ShortcutService", this.shortcutActionIdMapping), this.tableScope.hostElement.addEventListener("keydown", this.onKeyDown.bind(this));
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
      const i = o.replace(/opt/g, "alt").replace(/cmd/g, "meta").split(/[\+ ]/g).sort();
      if (this.areTokensEquals(t, i))
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
class _e {
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
class De {
  render(e, t, o, i, s, r, l) {
    if (s.isEditable(t, o)) {
      l.addClass(e, "ge-table-row-input-div");
      const n = s.getValueAt(t, o);
      e.innerHTML = `
            <input
                type="text"
                value="${n}"
                autofocus
                onfocus="this.setSelectionRange(0, this.value.length)"
                data-listen="change"
                data-area="${i}"
                data-row-index="${t}"
                data-col-index="${o}"
                data-input-type="text"
                style="width:calc(100% - 8px);height:100%;border:0;padding:0 0 0 8px;"
                class="ge-table-cell-editor-input">`;
    }
  }
}
class $e {
  constructor(e = "none", t = "single") {
    this.selectionType = e, this.selectionMode = t, this.ranges = [], this.negativeRanges = [], this.allSelected = !1;
  }
  getSelectionCount(e, t) {
    let o = 0;
    for (const i of this.ranges)
      i.isInRange(e, t) && o++;
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
class Fe {
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
const Le = new $e(), Oe = new Fe("cell");
class N {
  constructor() {
    this.overflowX = "auto", this.overflowY = "auto", this.horizontalBorderVisible = !0, this.verticalBorderVisible = !0, this.footerSeparatorBorderVisible = !0, this.headerSeparatorBorderVisible = !0, this.fixedEastSeparatorBorderVisible = !0, this.fixedWestSeparatorBorderVisible = !0, this.tableTopBorderVisible = !0, this.tableBottomBorderVisible = !0, this.hoverRowVisible = !0, this.hoverColumnVisible = !0, this.columnsResizable = !0, this.columnsDraggable = !0, this.columnResizeHandleWidthInPx = 4, this.defaultRowHeights = {
      header: 34,
      body: 34,
      footer: 34
    }, this.footerVerticalSeparator = !1, this.headerToggleExpandCollapseIcons = !1, this.headerVerticalSeparator = !1, this.treeOptions = new le(), this.showCheckboxWihoutExtraColumn = !1, this.externalFilterFunction = void 0, this.sortedOptions = new ne(), this.sortOrder = ["asc", "desc"], this.getEditRenderer = (e, t) => new De(), this.getSelectionModel = () => Le, this.getFocusModel = () => Oe;
  }
}
class de extends ve {
  constructor(e, t, o, i, s) {
    var r;
    if (super(
      e,
      t,
      new ue(o),
      i
    ), this.eventListener = s, this.selectionService = new Me(this), this.api = new pe(this), this.mouseStartAction = "", this.mouseStartWidth = -1, this.mouseStartColumnIndex = -1, this.dragFrom = -1, this.dragTo = -1, s || (this.eventListener = new Q()), (r = this.tableOptions) != null && r.autoRestoreOptions) {
      const l = this.tableOptions.autoRestoreOptions, n = l.getStorageKeyFn;
      n && (l.autoRestoreScrollPosition && (this.storeScrollPosStateService = new me(n)), l.autoRestoreCollapsedExpandedState && (this.storeStateCollapsedExpandService = new Se(n)), l.autoRestoreSortingState && (this.storeSortingService = new xe(n)));
    }
    this.mouseHandler = new be(this), this.inputHandler = new Ae(this), this.shortcutService = new Te(this), this.shortcutService.addListener(this.selectionService);
  }
  static create(e, t, o = new N(), i = new Q(), s = new _e()) {
    return new de(
      e,
      t,
      s,
      o,
      i
    );
  }
  onActionTriggered(e) {
    if (e === "NAVIGATE_DOWN" && this.changeFocusCell(0, 1) || e === "NAVIGATE_UP" && this.changeFocusCell(0, -1) || e === "NAVIGATE_LEFT" && this.changeFocusCell(-1, 0) || e === "NAVIGATE_RIGHT" && this.changeFocusCell(1, 0))
      return !0;
    if (e === "START_EDITING" && this.getFocusModel) {
      const t = this.getFocusModel();
      if (t) {
        const [o, i] = t.getFocus();
        this.tableModel.getBodyModel().isEditable(o, i) && (this.clearSelection(), this.initRenderEditor(o, i));
      }
      return !0;
    }
    return !1;
  }
  updateModelValueAfterEdit(e, t, o, i) {
    e === "body" && this.tableModel.getAreaModel(e).setValue(t, o, i) && (this.resetEditorRenderer(), this.repaint(), this.eventListener.onModelChanged(q.createSingle(t, o)), this.hostElement.focus());
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
        const i = this.tableModel.getAreaModel(t.areaIdent);
        t.rowTop = i.getYPosByRowIndex(t.rowIndex);
      }
      if (t.columnLeft = this.tableModel.getXPosByColumnIndex(t.columnIndex), e.ctrlKey && e.altKey) {
        const i = e.clientY - this.hostElement.offsetTop - this.areaHeaderCenter.parent.clientHeight, s = e.clientX - this.hostElement.offsetLeft - this.areaBodyWestGeo.width;
        this.debugOnce(s, i);
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
    t instanceof H && (t.toggleExpandCollapseAll(e), this.repaint(), (o = this.storeStateCollapsedExpandService) == null || o.collapsedStateAll(e));
  }
  toggleRowCheckbox(e, t, o) {
    var n;
    const i = this.tableModel.getAreaModel(o), s = i.isRowChecked(e), r = s === void 0 || s === "semi" || s === "none";
    i.setRowChecked(e, r), this.repaint();
    const l = (n = i.rowSelectionModel) == null ? void 0 : n.getCheckedRows();
    this.eventListener.onCheckboxChanged(l || []);
  }
  onMouseClicked(e, t) {
    let o = this.selectionService.onMouseClicked(e, t);
    if (!o && this.getFocusModel) {
      const i = this.getFocusModel();
      i && (o = i.hasChanged(), i.clearChanged(), o && this.resetEditorRenderer());
    }
    this.eventListener.onMouseClicked(e), o && this.debounce(this.repaint.bind(this), 10);
  }
  externalFilterChanged(e = !0) {
    const t = this.tableOptions.externalFilterFunction;
    t && (e && this.clearSelectionModel(), this.tableModel.externalFilterChanged(t), this.scrollViewport.scrollTo(0, 0), this.tableModel.recalcHeightAndPadding(), this.resetSizeOfWrapperDiv(), this.repaint());
  }
  onHeaderDblClicked(e, t, o) {
    var s, r;
    const i = this.tableModel.getColumnDef(o);
    if (i != null && i.sortable && i.sortable()) {
      e.preventDefault(), e.stopPropagation();
      const l = i.sortStatesOrder ? i.sortStatesOrder : this.tableOptions.sortOrder, n = i.sortState ?? "", d = l[(l.indexOf(n) + 1) % l.length], a = new Re(o, d);
      this.tableModel.doSort([a]) && ((s = this.tableModel.getColumnDefs()) == null || s.forEach((g) => g.sortState = ""), i.sortState = d), this.repaint(), (r = this.storeSortingService) == null || r.setSortItems([a]);
    }
  }
  changeFocusCell(e, t) {
    if (!this.isEditing() && this.getFocusModel) {
      const o = this.getFocusModel();
      if (o) {
        const [i, s] = o.getFocus();
        return o.setFocus(i + t, s + e), this.repaint(), !0;
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
      const o = this.tableOptions.autoRestoreOptions, i = o.getRowId;
      if (o.autoRestoreCollapsedExpandedState && i) {
        const s = this.storeStateCollapsedExpandService.collapsedExpandedStateGet(), r = this.tableModel.getAreaModel("body");
        if (r instanceof H) {
          const l = r, n = r.getRowCount();
          for (let d = 0; d < n; d++) {
            const a = r.getRowByIndex(d);
            if (a)
              if (s.allExpanded)
                a.expanded = !0;
              else if (s.allCollapsed)
                a.expanded = !1;
              else {
                const h = i(a.data);
                s.mode === "expanded" ? a.expanded = this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(h) : s.mode === "collapsed" && (a.expanded = !this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(h));
              }
          }
          l.recalcVisibleTreeRows();
        }
      }
    }
  }
}
class he {
}
he.themes = ["light", "combat", "paper", "blackboard"];
he.vars = {
  light: `:root [data-theme="light"] {
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
  combat: `:root [data-theme="combat"] {
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
  paper: `:root [data-theme="paper"] {
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
  blackboard: `:root [data-theme="dark"] {
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
class j {
  static buildTreeRows(e, t = "children", o = 12) {
    const i = [];
    for (const s of e)
      i.push(j.buildTreeRow(s, t, void 0, 0, o));
    return i;
  }
  static buildTreeRow(e, t = "children", o = new F(e, !0, [], void 0, 0), i = 0, s = 12) {
    var l;
    if (i > s)
      return console.warn("Max deep limit reached: ", i), o;
    const r = e[t];
    if (r)
      for (const n of r) {
        const d = new F(n, !0, [], o, i + 1);
        if ((l = o.children) == null || l.push(d), j.buildTreeRow(
          n,
          t,
          d,
          i + 1
        ), i > s)
          return console.warn("Max deep limit reached: ", i), o;
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
const Pe = () => !0, Z = () => !1;
class V {
  constructor(e, t, o = new f(100, "px"), i = new k(), s = new k(), r = new f(100, "px"), l = new f(100, "px"), n, d, a, h, g, m, b, w, u = () => this.visible) {
    this.property = e, this.headerLabel = t, this.width = o, this.classes = i, this.rendererMap = s, this.minWidth = r, this.maxWidth = l, this.sortable = n, this.sortComparator = d, this.sortState = a, this.sortStatesOrder = h, this.sortIconVisible = g, this.editable = m, this.getEditRenderer = b, this.editInputPipe = w, this.isVisible = u, this.visible = !0;
  }
  static bodyRenderer(e) {
    return new k(
      void 0,
      e,
      void 0
    );
  }
  static create(e) {
    const t = new k(
      e.headerRenderer,
      e.bodyRenderer,
      e.footerRenderer
    ), o = new k(
      e.headerClasses,
      e.bodyClasses,
      e.footerClasses
    ), i = e.sortIconVisible ?? e.sortable ?? Z, s = e.editable ?? e.editable ?? Z, r = e.isVisible ?? e.isVisible ?? Pe;
    return new V(
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
      i,
      s,
      e.getEditRenderer,
      e.editInputPipe,
      r
    );
  }
}
const Xe = new f(300, "px"), Ye = new f(290, "px"), Ke = new f(280, "px"), Ue = new f(270, "px"), qe = new f(260, "px"), Je = new f(250, "px"), Qe = new f(240, "px"), Ze = new f(230, "px"), et = new f(220, "px"), tt = new f(210, "px"), ee = new f(200, "px"), ot = new f(190, "px"), it = new f(180, "px"), st = new f(170, "px"), rt = new f(160, "px"), lt = new f(150, "px"), nt = new f(140, "px"), at = new f(130, "px"), dt = new f(120, "px"), ht = new f(110, "px"), ct = new f(100, "px"), ut = new f(90, "px"), gt = new f(80, "px"), bt = new f(70, "px"), pt = new f(60, "px"), ft = new f(50, "px"), mt = new f(40, "px"), wt = new f(30, "px"), St = new f(20, "px"), xt = new f(10, "px"), yt = new f(0, "px");
class _ extends K {
  constructor(e, t, o, i = []) {
    super(e, i, o), this.areaIdent = e, this.arr = t, this.defaultRowHeight = o, this.columnDefs = i, this.filteredArr = [...t];
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
    var s;
    const i = (s = this.columnDefs[t]) == null ? void 0 : s.editInputPipe;
    return i && (o = i(o, e, t)), this.arr[e][t] = o, !0;
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
class te {
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
      for (const i of e.children)
        if (!i.checked || (o = i.children) != null && o.length && !this.areAllChildrenChecked(i))
          return !1;
    }
    return !0;
  }
  areAllChildrenUnchecked(e) {
    var t, o;
    if ((t = e.children) != null && t.length) {
      for (const i of e.children)
        if (i.checked || (o = i.children) != null && o.length && !this.areAllChildrenUnchecked(i))
          return !1;
    }
    return !0;
  }
  addSelectedRecursive(e, t) {
    for (const o of e)
      o.checked && t.push(o), o.children && this.addSelectedRecursive(o.children, t);
  }
}
class oe {
  constructor(e = 0, t = 0, o = 0, i = 0) {
    this.top = e, this.right = t, this.bottom = o, this.left = i;
  }
}
class ie {
  render(e, t, o, i, s, r, l) {
    if (s.isRowCheckable(t)) {
      l.addClass(e, "ge-table-row-checkbox-div");
      const n = s.isRowChecked(t), d = n === "full" ? "checked" : "", a = n === "semi" ? '<span style="opacity: 0.4;">✓<span>' : "";
      e.innerHTML = `
        <input
            type="checkbox"
            data-area="${i}"
            data-row-index="${t}"
            data-col-index="${o}"
            data-input-type="checkbox"
            ${d}
            class="ge-table-row-checkbox">
        ${a}  `;
    }
  }
}
class He {
  constructor() {
    this.property = "CheckboxColumn", this.headerLabel = "", this.width = new f(50, "px"), this.minWidth = new f(50, "px"), this.maxWidth = new f(100, "px"), this.rendererMap = new k(new ie(), new ie(), void 0), this.classes = new k(
      [],
      ["ge-table-text-align-left"],
      []
    );
  }
}
class Ve {
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
class z {
  constructor(e, t, o, i = 0, s = 0, r = !1, l = new P(), n = [], d = [], a = -1, h = 0, g = 400, m = () => {
  }) {
    var b, w, u, p;
    this.headerAreaModel = e, this.bodyAreaModel = t, this.footerAreaModel = o, this.fixedLeftColumnCount = i, this.fixedRightColumnCount = s, this.rowCheckboxVisible = r, this.defaultRowHeights = l, this.columnDefs = n, this.columnSizes = d, this.overridingColumnWidth = a, this.columnCount = h, this.parentSize = g, this.getSelectionModel = m, this.rowCount = 0, this.contentHeightInPx = 0, this.contentWidthInPx = 0, this.padding = new oe(0, 0, 0, 0), this.xPositions = [], e.areaIdent = "header", t.areaIdent = "body", o.areaIdent = "footer", this.columnCount || ((b = this.columnDefs) != null && b.length ? this.columnCount = this.columnDefs.length : (w = this.columnSizes) != null && w.length && (this.columnCount = (u = this.columnSizes) == null ? void 0 : u.length)), (p = this.columnDefs) != null && p.length && this.columnDefs[0] instanceof He && !t.rowSelectionModel && (t.rowSelectionModel = new Ve());
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
    const e = this.getSideAreaWidth("west"), t = this.getSideAreaWidth("east"), o = this.getAreaHeight("header"), i = this.getAreaHeight("footer");
    this.padding = new oe(
      o,
      t,
      i,
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
    let i = 0;
    for (let s = 0; s < o; s++)
      i = i + t.getRowHeight(s);
    return i;
  }
  getSideAreaWidth(e) {
    const [t, o] = this.getSideStartAndEndColumnIndex(e);
    let i = 0;
    for (let s = t; s <= o; s++)
      i = i + this.getColumnWidth(s);
    return i;
  }
  getSideStartAndEndColumnIndex(e) {
    const t = this.getFixedLeftColumnCount(), o = this.getFixedRightColumnCount();
    let i = 0, s = this.columnCount - 1;
    return e === "west" ? s = t - 1 : e === "east" ? i = this.columnCount - o : (i = t, s = this.columnCount - o - 1), [i, s];
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
    var o, i, s;
    this.arrayMove(this.columnDefs, e, t), this.arrayMove(this.columnSizes, e, t), (o = this.headerAreaModel) == null || o.changeColumnOrder(e, t), (i = this.bodyAreaModel) == null || i.changeColumnOrder(e, t), (s = this.footerAreaModel) == null || s.changeColumnOrder(e, t), this.calcXPositions();
  }
  recalcColumnWidthes(e) {
    var t, o, i;
    !((t = this.columnDefs) != null && t.length) && !((o = this.columnSizes) != null && o.length) && (this.columnSizes = new Array(this.getColumnCount()).fill(this.overridingColumnWidth)), (i = this.columnDefs) != null && i.length && (this.columnSizes = this.columnDefs.map((s) => {
      if (s.width.unit === "%" && e) {
        let r = Math.floor(s.width.value * e / 100);
        if (s.minWidth) {
          let l = s.minWidth.unit === "px" ? s.minWidth.value : Math.floor(s.minWidth.value * e / 100);
          r = Math.max(l, r);
        }
        if (s.maxWidth) {
          let l = s.maxWidth.unit === "px" ? s.maxWidth.value : Math.floor(s.maxWidth.value * e / 100);
          r = Math.min(l, r);
        }
        return r;
      }
      return s.width.value;
    }));
  }
  arrayMove(e, t, o) {
    const i = e.splice(t, 1)[0];
    return e.splice(o, 0, i), e;
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
class Be extends K {
  constructor(e, t, o, i = []) {
    super(e, i, o), this.areaIdent = e, this.rows = t, this.defaultRowHeight = o, this.columnDefs = i, this.sorterService = new ae(), this.filteredRows = [...t], this.properties = i.map((s) => s.property);
  }
  getRowCount() {
    var e;
    return ((e = this.filteredRows) == null ? void 0 : e.length) ?? 0;
  }
  getValueAt(e, t) {
    const o = this.properties[t];
    let i = this.filteredRows[e];
    return i instanceof F && (i = i.data), i ? this.getValueByT(i, o) : "";
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
      const { columnIndex: o, sortState: i } = t, s = i === "asc" ? 1 : i === "desc" ? -1 : 0, r = this.properties[o];
      this.filteredRows = this.filteredRows.sort(this.genericFlatTableSortComparator(r, s));
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
    return (o, i) => {
      const s = this.getValueByT(o, e), r = this.getValueByT(i, e);
      return this.sorterService.genericSortComparator(s, r, t);
    };
  }
  getPropertyValue(e, t) {
    const o = t.shift();
    let i = e[o];
    return i && t.length ? this.getPropertyValue(i, t) : i;
  }
}
class se extends Be {
  constructor(e, t, o, i) {
    super(
      e,
      t,
      i,
      o
    ), this.areaIdent = e, this.rows = t, this.columnDefs = o, this.defaultRowHeight = i;
  }
}
class O {
  static createTableModel(e) {
    var t, o, i, s, r, l, n, d, a, h, g, m, b, w;
    if (e.defaultRowHeights === void 0)
      if ((t = e.tableOptions) != null && t.defaultRowHeights)
        e.defaultRowHeights = e.tableOptions.defaultRowHeights;
      else {
        if (e.defaultRowHeights = new P(), e.headerAreaModel && "defaultRowHeight" in e.headerAreaModel) {
          const u = e.headerAreaModel.defaultRowHeight;
          u > -1 && (e.defaultRowHeights.header = u);
        }
        if (e.bodyAreaModel && "defaultRowHeight" in e.bodyAreaModel) {
          const u = e.bodyAreaModel.defaultRowHeight;
          u > -1 && (e.defaultRowHeights.body = u);
        }
        if (e.footerAreaModel && "defaultRowHeight" in e.footerAreaModel) {
          const u = e.footerAreaModel.defaultRowHeight;
          u > -1 && (e.defaultRowHeights.footer = u);
        }
      }
    if (e.columnDefs === void 0 && ((o = e.properties) != null && o.length ? e.columnDefs = e.properties.map((u) => new V(u, u.toUpperCase(), ee)) : (i = e.rows) != null && i.length ? e.columnDefs = Object.keys(e.rows[0]).map((u) => new V(u, u.toUpperCase(), ee)) : e.columnDefs = []), e.columnCount === void 0 && ((s = e.columnDefs) != null && s.length ? e.columnCount = e.columnDefs.length : (r = e.headerData) != null && r.length ? e.columnCount = e.headerData[0].length : (l = e.columnSizes) != null && l.length ? e.columnCount = (n = e.columnSizes) == null ? void 0 : n.length : console.warn('Property "columnCount" is missing and cannot be derived from other properties.')), e.headerAreaModel || ((d = e.headerData) != null && d.length ? e.headerAreaModel = new _(
      "header",
      e.headerData,
      e.defaultRowHeights.header,
      e.columnDefs
    ) : (a = e.columnDefs) != null && a.length ? e.headerAreaModel = new _(
      "header",
      [e.columnDefs.map((u) => u.headerLabel)],
      e.defaultRowHeights.header,
      e.columnDefs
    ) : e.headerAreaModel = new D("header")), e.footerAreaModel || ((h = e.footerData) != null && h.length ? e.footerAreaModel = new _(
      "footer",
      e.footerData,
      e.defaultRowHeights.footer,
      e.columnDefs
    ) : e.footerAreaModel = new D("footer")), !e.bodyAreaModel)
      if (e.rows)
        if ((g = e.rows) != null && g.length && e.rows[0] instanceof F) {
          const u = e.rows;
          e.bodyAreaModel = new H(
            "body",
            u,
            e.defaultRowHeights.body,
            e.columnDefs
          ), (e.columnDefs[0].property === "CheckboxColumn" || (m = e.tableOptions) != null && m.showCheckboxWihoutExtraColumn) && (e.bodyAreaModel.rowSelectionModel = new te(u));
        } else
          e.bodyAreaModel = new se(
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
    return e.fixedLeftColumnCount === void 0 && (e.fixedLeftColumnCount = 0), e.fixedRightColumnCount === void 0 && (e.fixedRightColumnCount = 0), e.rowCheckboxVisible === void 0 && (e.rowCheckboxVisible = !1), e.overridingColumnWidth === void 0 && (e.overridingColumnWidth = -1), !e.getSelectionModel && ((b = e.tableOptions) != null && b.getSelectionModel) && (e.getSelectionModel = (w = e.tableOptions) == null ? void 0 : w.getSelectionModel), new z(
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
    return O.buildByTypedRows(
      e.rows ?? [],
      e.columnDefs,
      e.tableOptions ?? new N(),
      e.fixedLeftColumnCount ?? 0,
      e.fixedRightColumnCount ?? 0
    );
  }
  static buildByTypedRows(e, t, o = new N(), i = 0, s = 0) {
    const r = o.defaultRowHeights, l = t[0].property === "CheckboxColumn";
    if (e != null && e.length && e[0] instanceof F) {
      const n = e, d = new H(
        "body",
        n,
        r.body,
        t
      );
      return (l || o.showCheckboxWihoutExtraColumn) && (d.rowSelectionModel = new te(n)), O.createByAreaModelsParam({
        headerAreaModel: new _("header", [t.map((a) => a.headerLabel)], r.header),
        bodyAreaModel: d,
        footerAreaModel: new _("footer", [], r.footer),
        columnDefs: t,
        fixedLeftColumnCount: i,
        fixedRightColumnCount: s,
        defaultRowHeights: o.defaultRowHeights,
        rowCheckboxVisible: !1,
        columnSizes: [],
        columnCount: t.length,
        overridingColumnWidth: -1
      });
    }
    return O.createByObjectArrayParam({
      rows: e,
      columnDefs: t,
      fixedLeftColumnCount: i,
      fixedRightColumnCount: s,
      defaultRowHeights: o.defaultRowHeights
    });
  }
  static createByObjectArrayParam(e) {
    const t = e.rowCheckboxVisible !== void 0 ? e.rowCheckboxVisible : !1;
    return O.createByObjectArray(
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
  static createByAreaModels(e = new D(), t, o = new D(), i = 0, s = 0, r = !1, l = new P(), n, d = [], a = -1, h) {
    return new z(
      e,
      t,
      o,
      i,
      s,
      r,
      l,
      n,
      d,
      a,
      h
    );
  }
  static createByAreaModelsParam(e) {
    return O.createByAreaModels(
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
  static createByObjectArray(e, t = [], o = [], i = 0, s = 0, r = !1, l = new P(), n, d = []) {
    let a;
    t != null && t.length ? a = new _("header", t, l.header, n) : n != null && n.length ? a = new _("header", [n.map((m) => m.headerLabel)], l.header, n) : a = new D();
    const h = o ? new _("footer", o, l.footer, n) : new D(), g = new se("body", e, n, l.body);
    return new z(
      a,
      g,
      h,
      i,
      s,
      r,
      l,
      n,
      d
    );
  }
}
const Ct = [
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
class vt {
  constructor(e, t) {
    this.tableModel = e, this.tableOptions = t;
  }
}
class We {
  constructor(e, t, o, i, s, r, l) {
    this.emmitDataKey = e, this.emmitCancelKey = t, this.queryId = o, this.filter = i, this.sorting = s, this.startIndex = r, this.endIndex = l;
  }
}
class Rt extends We {
  constructor(e, t, o, i, s, r, l, n) {
    super(
      e,
      t,
      o,
      i,
      s,
      r,
      l
    ), this.rows = n;
  }
}
class Ge {
  constructor(e, t) {
    this.value = e, this.label = t;
  }
}
class At {
  constructor(e, t) {
    this.index = e, this.px = t;
  }
}
const Et = { body: ["ge-table-text-align-left"] }, Mt = { body: ["ge-table-text-align-center"] }, It = { body: ["ge-table-text-align-right"] }, kt = {
  header: ["ge-table-text-align-left"],
  body: ["ge-table-text-align-left"],
  footer: ["ge-table-text-align-left"]
}, Tt = {
  header: ["ge-table-text-align-center"],
  body: ["ge-table-text-align-center"],
  footer: ["ge-table-text-align-center"]
}, _t = {
  header: ["ge-table-text-align-right"],
  body: ["ge-table-text-align-right"],
  footer: ["ge-table-text-align-right"]
};
class Dt {
  static body(e) {
    return new k(
      void 0,
      e,
      void 0
    );
  }
}
class $t {
  constructor(e = "down", t) {
    this.status = e, this.originalEvent = t;
  }
}
class Ft {
  constructor(e, t, o, i) {
    this.area = e, this.rowIndex = t, this.columnIndex = o, this.value = i;
  }
}
class Lt {
  constructor() {
    this.autoRestoreSortingState = !1, this.autoRestoreCollapsedExpandedState = !1, this.autoRestoreScrollPosition = !1, this.autoRestoreCheckedState = !1, this.autoRestoreSelectedState = !1, this.getStorageKeyFn = void 0, this.isSame = (e, t, o) => {
      if (e && t && o.getRowId) {
        const i = o.getRowId(e), s = o.getRowId(t);
        return i === s;
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
class ze {
  constructor(e, t, o, i = !1, s = "normal", r = void 0) {
    this.data = e, this.property = t, this.toggle = o, this.closed = i, this.visibility = s, this.children = r, this.impl = "CellGroup";
  }
}
class Ne extends ze {
  constructor(e, t = 0, o = 0, i) {
    super(
      e.data,
      e.property,
      e.toggle,
      e.closed,
      e.visibility,
      e.children
    ), this.rowIndex = t, this.childIndex = o, this.parent = i, this.impl = "CellGroupExt", this.children = void 0, this.leftNeighbour = void 0, this.rightNeighbour = void 0;
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
      for (const i of e.children)
        t = this.getColumnCount(i, t);
    return t;
  }
  getRowSpan(e = this, t) {
    return e != null && e.claimsSpace() ? t - this.getParentCount(e, 0) : 1;
  }
  getParentCount(e = this, t = 0) {
    return e.parent && (t = t + 1 + this.getParentCount(e.parent, t)), t;
  }
  log(e) {
    const t = "													".substring(0, 2 * this.rowIndex), o = `${this.getColumnIndex()}`, i = `${this.getColumnCount(this)}`, s = `${this.getRowSpan(this, e)}`, r = `${this.getParentCount(this)}`;
    if (console.info(`${t + this.data}
      childIndex:${this.childIndex}
      row:${this.rowIndex}
      col:${o}
      vis:${this.visibility}
      closed:${this.closed}
      isVisible:${this.isVisible()}
      ownColumn:${this.ownColumn()}
      claimsSpace:${this.claimsSpace()}
      colCount:${i}
      rowSpan:${s}
      pc:${r}`.replace(/[ \n]+/g, " ")), this.children)
      for (const l of this.children)
        l.log(e);
  }
}
class I {
  static buildColumnDefs(e, t = []) {
    for (const o of e)
      o.property && t.push(
        V.create({
          property: o.property,
          headerLabel: o.data ? o.data : o.property,
          isVisible: () => typeof o.isVisible == "function" ? o.isVisible() : !0
        })
      ), o.children && I.buildColumnDefs(o.children, t);
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
  static buildGroupExts(e, t = [], o = 0, i) {
    let s;
    for (let r = 0; r < e.length; r++) {
      const l = e[r], n = new Ne(l, o, r, i);
      s && (n.leftNeighbour = s, s.rightNeighbour = n), t.push(n), l.children && (n.children = I.buildGroupExts(l.children, [], o + 1, n)), s = n;
    }
    return t;
  }
  static flattenGroupExts(e, t = []) {
    for (const o of e)
      t.push(o), o.children && I.flattenGroupExts(o.children, t);
    return t;
  }
  /*
  
    Gold                                                           Hohenwarte
    Gold AB                         Gold CD                        HOH AB                                  HOH CD
    .          Gold A     Gold B    Gold C   Gold D    Gold Sum    .           HOH Loc    HOH A    HOH B   HOH C    HOH D
  
    */
  static buildArrayOfArrays(e, t) {
    var s;
    let o = -1, i = 99999;
    for (const r of e) {
      if (r.rowIndex <= i) {
        o++;
        for (let l = 0; l < t.length; l++)
          t[l][o] = null;
      }
      if (t[r.rowIndex][o] = r, i = r.rowIndex, r.ownColumn() && ((s = r.children) != null && s.length)) {
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
    for (const i of t)
      e.push(i.data + "    rowIndex:" + i.rowIndex), (o = i.children) != null && o.length && I.iterateThrowColumns(e, i.children);
  }
}
class Ot {
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
class je {
  render(e, t, o, i, s, r, l) {
    const n = r != null && r.data ? r.data : "";
    e.innerHTML = `${n}`;
  }
}
class Pt {
  constructor(e = "header", t, o = [], i) {
    var s;
    this.areaIdent = e, this.groups = t, this.columnDefs = o, this.defaultRowHeight = i, this.gammaCells = !0, this.groupExts = [], this.cellGroupExtCellRenderer = new je(), this.groupExts = I.buildGroupExts(t), console.info(this.groupExts), console.info(this.getAllLeafs()), console.info(this.getMaxRowCount());
    for (const r of this.groupExts)
      r.log(this.getMaxRowCount());
    this.arr = this.buildArray(), !((s = this.columnDefs) != null && s.length) && e === "header" && (this.columnDefs = I.buildColumnDefs(t)), console.info("this.columnDefs", this.columnDefs), console.info("this.arr", this.arr);
  }
  getAllLeafs() {
    return I.flattenGroupExts(this.groupExts).filter((t) => !t.children);
  }
  getMaxRowCount() {
    const e = this.getAllLeafs();
    return e != null && e.length ? 1 + Math.max(...e.map((t) => t.getParentCount(t))) : 0;
  }
  buildArray() {
    console.info("");
    let e = I.flattenGroupExts(this.groupExts);
    const t = e.length, o = 1 + Math.max(...e.map((l) => l.rowIndex));
    console.info("max  row/col:", o + "/" + t);
    const i = [];
    I.iterateThrowColumns(i, this.groupExts), console.info(i);
    const s = Array.from(Array(o).keys()).map((l) => []);
    let r = I.buildArrayOfArrays(e, s);
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
      const i = this.getRowCount();
      return o.getRowSpan(o, i);
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
class Ht {
  filterPredict(e, t, o = this.objectToString.bind(this)) {
    if (!e)
      return !1;
    if (!t)
      return !0;
    t = t.toLowerCase();
    const i = "+", s = "-", r = t.toLowerCase().split(" ").filter((h) => h !== i && h !== s && h !== ""), l = r.filter((h) => !h.startsWith(i) && !h.startsWith(s)), n = r.filter((h) => h.startsWith(i)).map((h) => h.replace(/\+/g, "")), d = r.filter((h) => h.startsWith(s)).map((h) => h.replace(/-/g, ""));
    let a = !l.length;
    for (let h = 0; h < l.length; h++)
      (a || o(e).includes(l[h])) && (a = !0);
    if (!a)
      return !1;
    for (let h = 0; h < n.length; h++)
      if (!o(e).includes(n[h]))
        return !1;
    for (let h = 0; h < d.length; h++)
      if (o(e).includes(d[h]))
        return !1;
    return !0;
  }
  filterRows(e, t, o = (i) => JSON.stringify(i).toLowerCase()) {
    if (!e)
      return [];
    if (!t)
      return [...e];
    t = t.toLowerCase();
    const i = "+", s = "-", r = t.toLowerCase().split(" ").filter((a) => a !== i && a !== s && a !== ""), l = r.filter((a) => !a.startsWith(i) && !a.startsWith(s)), n = r.filter((a) => a.startsWith(i)).map((a) => a.replace(/\+/g, "")), d = r.filter((a) => a.startsWith(s)).map((a) => a.replace(/-/g, ""));
    return e == null ? void 0 : e.filter((a) => {
      let h = !l.length;
      for (let g = 0; g < l.length; g++)
        (h || o(a).includes(l[g])) && (h = !0);
      if (!h)
        return !1;
      for (let g = 0; g < n.length; g++)
        if (!o(a).includes(n[g]))
          return !1;
      for (let g = 0; g < d.length; g++)
        if (o(a).includes(d[g]))
          return !1;
      return !0;
    });
  }
  objectToString(e) {
    if (!e)
      return "";
    const t = [], o = Object.keys(e);
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      t.push(e[s]);
    }
    return t.join(" ").toLowerCase();
  }
}
class Vt {
  static bodyRenderer(e) {
    return new k(void 0, e, void 0);
  }
}
class Bt {
  constructor(e, t = !0, o = !1) {
    this.property = e, this.skipCheckableCheck = t, this.readonly = o;
  }
  render(e, t, o, i, s, r, l) {
    if (this.readonly || this.skipCheckableCheck || s.isRowCheckable(t)) {
      l.addClass(e, "ge-table-row-checkbox-div");
      const n = s.getRowByIndex(t), a = s.getValueByT(n, this.property) === !0 ? "checked" : "", h = this.readonly ? " readonly " : "";
      if (l.addClass(e, "ge-padding-property-checkbox"), e.innerHTML = `
        <input
          type="checkbox"
          data-area="${i}"
          data-row-index="${t}"
          data-col-index="${o}"
          data-property-index="${this.property}"
          data-input-type="checkbox"
          ${a}
          ${h}
          class="ge-input-checkbox">`, !this.readonly) {
        const g = e.querySelector(".ge-input-checkbox");
        g && g.addEventListener("click", (m, b) => (n[this.property] = !n[this.property], !0));
      }
    }
  }
}
class Wt {
  render(e, t, o, i, s, r, l) {
    r && (e.innerText = new Date(r).toISOString());
  }
}
class Gt {
  constructor() {
    this.formatter = new Intl.DateTimeFormat("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }
  render(e, t, o, i, s, r, l) {
    if (r) {
      let n = "";
      try {
        n = this.formatter.format(new Date(r));
      } catch {
        n = r;
      }
      e.innerHTML = `
          <div class="ge-table-label-div" data-row-index="${t}" data-col-index="${o}" data-area="${i}" style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div class="ge-table-label" data-row-index="${t}" data-col-index="${o}" data-area="${i}">${n}</div>
          </div>`;
    }
  }
}
class zt {
  render(e, t, o, i, s, r, l) {
    r && (e.innerText = new Date(r).toLocaleDateString());
  }
}
class Nt {
  render(e, t, o, i, s, r, l) {
    r === "male" || r === "m" ? e.innerText = "♂" : (r === "female" || r === "f") && (e.innerText = "♀");
  }
}
class jt {
  render(e, t, o, i, s, r, l) {
    r === "true" || r === !0 ? e.innerHTML = '<span class="ge-true-text-color">✅</span>' : r === "false" || r === !1 ? e.innerHTML = '<span class="ge-false-text-color">❌</span>' : e.innerText = "";
  }
}
class Xt {
  render(e, t, o, i, s, r, l) {
    r && (e.innerText = new Date(r).toISOString().replace(/T/g, " ").replace(/\..*/g, ""));
  }
}
class Yt {
  constructor(e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    this.min = e, this.max = t;
  }
  render(e, t, o, i, s, r, l) {
    r && (e.innerText = r, (typeof r == "string" || isNaN(r) || r < this.min || r > this.max) && l.addClass(e, "ge-cell-error"));
  }
}
class Kt {
  constructor(e) {
    this.property = e;
  }
  render(e, t, o, i, s, r, l) {
    l.addClass(e, "ge-star-rating-div");
    const n = s.getRowByIndex(t), d = +("" + s.getValueByT(n, this.property));
    if (!isNaN(d)) {
      const a = [];
      for (let g = 0; g < d; g++)
        a.push("★");
      const h = a.join(" ");
      e.innerHTML = `
          <div class="ge-table-label-div" data-row-index="${t}" data-col-index="${o}" data-area="${i}" style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div class="ge-table-label" data-row-index="${t}" data-col-index="${o}" data-area="${i}">${h}</div>
          </div>`;
    }
  }
}
class Ut {
  constructor(e, t = 100, o = !1) {
    this.property = e, this.maxValue = t, this.labelVisible = o;
  }
  render(e, t, o, i, s, r, l) {
    l.addClass(e, "ge-star-rating-div");
    const n = s.getRowByIndex(t), d = +("" + s.getValueByT(n, this.property));
    if (!isNaN(d)) {
      const a = d * 100 / this.maxValue, h = this.labelVisible ? Math.round(a) + "%" : "";
      e.innerHTML = `
          <div class="ge-table-label-div"
          data-row-index="${t}"
          data-col-index="${o}"
          data-area="${i}"
          title="${h}"
          style="position: relative; background: transparent; width: 100%; height: 100%;">
              <div class="ge-table-progress-container"
                  style="width:100%;height:50%;padding:0;margin-top:6px;"
                  data-row-index="${t}"
                  data-col-index="${o}"
                  data-area="${i}">
                  <div class="ge-table-progress-bar"
                      style="width:${a}%;height:100%;padding:0;margin:0;"
                      data-row-index="${t}"
                      data-col-index="${o}"
                      data-area="${i}">&nbsp;
                  </div>
              </div>
          </div>`;
    }
  }
}
const qt = function(c, e, t) {
  return c ? Number(c) : "";
};
class ce {
  constructor(e) {
    this.options = e;
  }
  static create(e) {
    return new ce(
      e.map((t) => new Ge(t, t))
    );
  }
  render(e, t, o, i, s, r, l) {
    if (s.isEditable(t, o)) {
      l.addClass(e, "ge-table-row-select-div");
      const n = s.getValueAt(t, o);
      let d = [];
      for (let h of this.options) {
        const g = h.value === n ? " selected " : "";
        d.push(`<option value="${h.value}" ${g}>${h.label}</option>`);
      }
      const a = d.join("");
      e.innerHTML = `
            <select
                type="text"
                value="${n}"
                autofocus
                data-listen="change"
                data-area="${i}"
                data-row-index="${t}"
                data-col-index="${o}"
                data-input-type="text"
                style="width:100%;height:100%;border:0;padding:0 0 0 8px;"
                class="ge-table-cell-editor-select">${a}</select>`;
    }
  }
}
class Jt {
  constructor(e, t, o) {
    this.r = e, this.g = t, this.b = o;
  }
}
class re {
  constructor(e, t, o, i) {
    this.minValue = e, this.minColor = t, this.maxValue = o, this.maxColor = i;
  }
}
class W {
  static normalize(e, t, o, i = 0, s = 1) {
    return (e - t) / (o - t) * (s - i) + i;
  }
  static getTwoColorGradientRGB(e, t) {
    const o = W.normalize(e, t.minValue, t.maxValue, 0, 1), i = t.maxColor.r - t.minColor.r, s = t.maxColor.g - t.minColor.g, r = t.maxColor.b - t.minColor.b, l = i * o + t.minColor.r, n = s * o + t.minColor.g, d = r * o + t.minColor.b;
    return `rgb(${Math.round(l)}, ${Math.round(n)}, ${Math.round(d)})`;
  }
  static getThreeColorGradientRGB(e, t) {
    return e < t.middleValue ? W.getTwoColorGradientRGB(e, new re(t.minValue, t.minColor, t.middleValue, t.middleColor)) : e > t.middleValue ? W.getTwoColorGradientRGB(e, new re(t.middleValue, t.middleColor, t.maxValue, t.maxColor)) : `rgb(${t.middleColor.r}, ${t.middleColor.g}, ${t.middleColor.b})`;
  }
}
class Qt {
  constructor(e, t, o, i, s, r) {
    this.minValue = e, this.minColor = t, this.middleValue = o, this.middleColor = i, this.maxValue = s, this.maxColor = r;
  }
}
export {
  K as AbstractAreaModel,
  Dt as AreaMapFactory,
  Ot as AreaModel,
  _ as AreaModelArrayOfArrays,
  Pt as AreaModelCellGroups,
  D as AreaModelHidden,
  se as AreaModelObjectArrayWithColumndefs,
  Be as AreaModelObjectyArray,
  H as AreaModelTree,
  k as AreaObjectMap,
  Lt as AutoRestoreOptions,
  ze as CellGroup,
  Ne as CellGroupExt,
  je as CellGroupExtCellRenderer,
  E as CellRange,
  I as CellgroupFactory,
  Bt as CheckboxBooleanPropertyCellRenderer,
  ie as CheckboxCellRenderer,
  He as CheckboxColumnDef,
  Ve as CheckboxModel,
  Rt as ChunkData,
  Ce as ColAndRowspanModel,
  we as CollapsedExpandedData,
  Jt as ColorRgb,
  V as ColumnDef,
  ue as ConvenienceDomService,
  he as CssVars,
  Gt as DateToIntlDDMMYYYYCellRenderer,
  Wt as DateToIsoCellRenderer,
  zt as DateToLocaleDateCellRenderer,
  Xt as DateToTecCellRenderer,
  P as DefaultRowHeights,
  ye as EleScope,
  Q as EventAdapter,
  Z as FalseFn,
  Fe as FocusModel,
  Ee as GeCellIndices,
  W as GeCssColorUtil,
  Ht as GeFilterService,
  $t as GeKeyEvent,
  q as GeModelChangeEvent,
  X as GeMouseEvent,
  $ as GeoData,
  L as Icon,
  At as IndexAndPx,
  De as InputCellRenderer,
  Ae as InputHandler,
  Nt as MaleFemaleToIconCellRenderer,
  be as MouseHandler,
  ge as MouseTargetData,
  Yt as NumberCellRenderer,
  ke as OsxShortcutActionIdMapping,
  oe as Padding,
  Ut as ProgressBarCellRenderer,
  ve as RenderScope,
  Vt as Renderer,
  We as RequestChunk,
  ce as SelectCellRenderer,
  $e as SelectionModel,
  Me as SelectionService,
  Te as ShortcutService,
  _e as SimpleDomService,
  f as Size,
  Re as SortItem,
  ne as SortedOptions,
  Kt as StarRatingCellRenderer,
  Se as StoreStateCollapsedExpandService,
  me as StoreStateScrollPosService,
  xe as StoreStateSortingService,
  pe as TableApi,
  Ft as TableCellUpdateEvent,
  O as TableFactory,
  z as TableModel,
  vt as TableModelAndOptions,
  N as TableOptions,
  de as TableScope,
  Qt as ThreeColorGradientArg,
  te as TreeCheckboxModel,
  j as TreeFactory,
  le as TreeOptions,
  F as TreeRow,
  fe as TreeRowService,
  jt as TrueFalseCellRenderer,
  Pe as TrueFn,
  re as TwoColorGradientArg,
  Ge as ValueLabel,
  Ie as WindowsShortcutActionIdMapping,
  Ct as actionIds,
  Tt as allCenter,
  kt as allLeft,
  _t as allRight,
  Mt as bodyCenter,
  Et as bodyLeft,
  It as bodyRight,
  qt as editInputPipeForNumber,
  Y as getAreaIdentByString,
  yt as px0,
  xt as px10,
  ct as px100,
  ht as px110,
  dt as px120,
  at as px130,
  nt as px140,
  lt as px150,
  rt as px160,
  st as px170,
  it as px180,
  ot as px190,
  St as px20,
  ee as px200,
  tt as px210,
  et as px220,
  Ze as px230,
  Qe as px240,
  Je as px250,
  qe as px260,
  Ue as px270,
  Ke as px280,
  Ye as px290,
  wt as px30,
  Xe as px300,
  mt as px40,
  ft as px50,
  pt as px60,
  bt as px70,
  gt as px80,
  ut as px90
};
