/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

var Rl = Object.create;
var Vt = Object.defineProperty;
var Il = Object.getOwnPropertyDescriptor;
var Ml = Object.getOwnPropertyNames;
var Cl = Object.getPrototypeOf,
  Pl = Object.prototype.hasOwnProperty;
var xl = (n, e, t) =>
  e in n
    ? Vt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var O = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var kl = (n, e, t, r) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let s of Ml(e))
      !Pl.call(n, s) &&
        s !== t &&
        Vt(n, s, {
          get: () => e[s],
          enumerable: !(r = Il(e, s)) || r.enumerable,
        });
  return n;
};
var Js = (n, e, t) => (
  (t = n != null ? Rl(Cl(n)) : {}),
  kl(
    e || !n || !n.__esModule
      ? Vt(t, "default", { value: n, enumerable: !0 })
      : t,
    n
  )
);
var nt = (n, e, t) => (xl(n, typeof e != "symbol" ? e + "" : e, t), t);
var to = O((zt) => {
  "use strict";
  Object.defineProperty(zt, "__esModule", { value: !0 });
  function Nl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Nl(zt, {
    CORE_OPERATORS: function () {
      return Ut;
    },
    DEFAULTS: function () {
      return $t;
    },
    DEFAULT_CUSTOM_EASE: function () {
      return Vl;
    },
    EASE_DEFAULTS: function () {
      return eo;
    },
    PERCENT_CANVAS_DURATION_S: function () {
      return Bl;
    },
    RELATIONSHIP_TYPES: function () {
      return qt;
    },
    STANDARD_TRIGGER_ALLOWED_CONTROLS: function () {
      return jl;
    },
    TimelineControlType: function () {
      return jt;
    },
    TweenType: function () {
      return Gt;
    },
    isValidControlType: function () {
      return Fl;
    },
    tweenTypeFromName: function () {
      return Ll;
    },
    tweenTypeToName: function () {
      return Dl;
    },
  });
  var jt;
  (function (n) {
    (n.STANDARD = "standard"),
      (n.SCROLL = "scroll"),
      (n.LOAD = "load"),
      (n.CONTINUOUS = "continuous");
  })(jt || (jt = {}));
  function Fl(n) {
    return (
      n === "standard" || n === "scroll" || n === "load" || n === "continuous"
    );
  }
  var Gt;
  (function (n) {
    (n[(n.To = 0)] = "To"),
      (n[(n.From = 1)] = "From"),
      (n[(n.FromTo = 2)] = "FromTo"),
      (n[(n.Set = 3)] = "Set");
  })(Gt || (Gt = {}));
  function Ll(n) {
    switch (n) {
      case "to":
        return 0;
      case "from":
        return 1;
      case "both":
        return 2;
      case "set":
        return 3;
    }
  }
  function Dl(n) {
    switch (n) {
      case 0:
        return "to";
      case 1:
        return "from";
      case 2:
        return "both";
      case 3:
        return "set";
      default:
        return null;
    }
  }
  var Ut;
  (function (n) {
    (n.AND = "wf:and"), (n.OR = "wf:or");
  })(Ut || (Ut = {}));
  var $t;
  (function (n) {
    n[(n.DURATION = 0.5)] = "DURATION";
  })($t || ($t = {}));
  var Bl = 1,
    qt;
  (function (n) {
    (n.NONE = "none"),
      (n.WITHIN = "within"),
      (n.DIRECT_CHILD_OF = "direct-child-of"),
      (n.CONTAINS = "contains"),
      (n.DIRECT_PARENT_OF = "direct-parent-of"),
      (n.NEXT_TO = "next-to"),
      (n.NEXT_SIBLING_OF = "next-sibling-of"),
      (n.PREV_SIBLING_OF = "prev-sibling-of");
  })(qt || (qt = {}));
  var eo = {
      back: { type: "back", curve: "out", power: 1.7 },
      elastic: { type: "elastic", curve: "out", amplitude: 1, period: 0.3 },
      steps: { type: "steps", stepCount: 6 },
      rough: {
        type: "rough",
        templateCurve: "none.inOut",
        points: 20,
        strength: 1,
        taper: "none",
        randomizePoints: !0,
        clampPoints: !1,
      },
      slowMo: { type: "slowMo", linearRatio: 0.7, power: 0.7, yoyoMode: !1 },
      expoScale: {
        type: "expoScale",
        startingScale: 0.05,
        endingScale: 1,
        templateCurve: "none.inOut",
      },
      customWiggle: {
        type: "customWiggle",
        wiggles: 10,
        wiggleType: "easeOut",
      },
      customBounce: {
        type: "customBounce",
        strength: 0.7,
        squash: 1,
        endAtStart: !1,
      },
      customEase: {
        type: "customEase",
        bezierCurve: "M0,160 C40,160 24,96 80,96 136,96 120,0 160,0",
      },
    },
    Vl = eo.back,
    jl = [
      "restart",
      "play",
      "reverse",
      "reverseFlipEase",
      "pause",
      "resume",
      "togglePlayReverse",
      "togglePlayReverseFlipEase",
      "stop",
      "none",
    ];
});
var no = O((Ht) => {
  "use strict";
  Object.defineProperty(Ht, "__esModule", { value: !0 });
  function Gl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Gl(Ht, {
    getPageLevelTriggerState: function () {
      return Ul;
    },
    releasePageLevelTriggerFired: function () {
      return ql;
    },
    resetPageLevelTriggerState: function () {
      return $l;
    },
  });
  var rt = new WeakMap();
  function Ul(n) {
    let e = rt.get(n);
    return e || ((e = { fired: !1, deadline: void 0 }), rt.set(n, e)), e;
  }
  function $l(n) {
    rt.delete(n);
  }
  function ql(n) {
    let e = rt.get(n);
    e && (e.fired = !1);
  }
});
var ro = O((Yt) => {
  "use strict";
  Object.defineProperty(Yt, "__esModule", { value: !0 });
  Object.defineProperty(Yt, "RuntimeBuilder", {
    enumerable: !0,
    get: function () {
      return Wt;
    },
  });
  var Wt = class {
    baseInfo;
    extensions = [];
    lifecycle = {};
    constructor(e) {
      this.baseInfo = e;
    }
    addTrigger(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "trigger",
          id: r,
          triggerType: r,
          implementation: t,
        }),
        this
      );
    }
    addRoleActivationObserver(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "roleActivationObserver",
          id: r,
          implementation: t,
        }),
        this
      );
    }
    addAction(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "action",
          id: r,
          actionType: r,
          implementation: t,
        }),
        this
      );
    }
    addTargetResolver(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "targetResolver",
          id: r,
          resolverType: r,
          implementation: t,
        }),
        this
      );
    }
    addCondition(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "condition",
          id: r,
          conditionType: r,
          implementation: t,
        }),
        this
      );
    }
    onInitialize(e) {
      return (this.lifecycle.initialize = e), this;
    }
    onActivate(e) {
      return (this.lifecycle.activate = e), this;
    }
    onDeactivate(e) {
      return (this.lifecycle.deactivate = e), this;
    }
    onDispose(e) {
      return (this.lifecycle.dispose = e), this;
    }
    createManifest() {
      let e = this.extensions.map((t) => `${t.extensionPoint}:${t.id}`);
      return {
        id: [this.baseInfo.namespace, this.baseInfo.pluginId],
        version: this.baseInfo.version,
        name: this.baseInfo.displayName || this.baseInfo.pluginId,
        description: this.baseInfo.description || "",
        dependencies: this.baseInfo.dependencies,
        features: e,
      };
    }
    buildRuntime() {
      return {
        manifest: this.createManifest(),
        extensions: this.extensions,
        ...this.lifecycle,
      };
    }
  };
});
var so = O((Qt) => {
  "use strict";
  Object.defineProperty(Qt, "__esModule", { value: !0 });
  function zl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  zl(Qt, {
    ConditionCategoryBuilder: function () {
      return it;
    },
    DesignBuilder: function () {
      return Zt;
    },
    TargetCategoryBuilder: function () {
      return st;
    },
    TriggerCategoryBuilder: function () {
      return ot;
    },
  });
  var Kt = class {
      categoryBuilder;
      groupConfig;
      properties;
      constructor(e, t) {
        (this.categoryBuilder = e),
          (this.groupConfig = t),
          (this.properties = []);
      }
      addProperty(e, t, r) {
        return (
          this.properties.push({
            id: e,
            schema: { ...t, description: r?.description || t.description },
          }),
          this
        );
      }
      addGroup(e) {
        return (
          this.categoryBuilder.finalizeGroup({
            ...this.groupConfig,
            properties: this.properties,
          }),
          this.categoryBuilder.clearCurrentGroupBuilder(),
          this.categoryBuilder.addGroup(e)
        );
      }
      getGroupData() {
        return { ...this.groupConfig, properties: this.properties };
      }
    },
    Xt = class {
      categoryId;
      config;
      displayGroups;
      currentGroupBuilder;
      constructor(e, t) {
        (this.categoryId = e),
          (this.config = t),
          (this.displayGroups = []),
          (this.currentGroupBuilder = null);
      }
      addGroup(e) {
        return (
          this.currentGroupBuilder &&
            this.finalizeGroup(this.currentGroupBuilder.getGroupData()),
          (this.currentGroupBuilder = new Kt(this, e)),
          this.currentGroupBuilder
        );
      }
      finalizeGroup(e) {
        this.displayGroups.push(e);
      }
      clearCurrentGroupBuilder() {
        this.currentGroupBuilder = null;
      }
      getDefinition() {
        this.currentGroupBuilder &&
          (this.finalizeGroup(this.currentGroupBuilder.getGroupData()),
          (this.currentGroupBuilder = null));
        let e = this.displayGroups.flatMap((t) => t.properties);
        return {
          id: this.categoryId,
          properties: e,
          propertyType: this.config.propertyType || "tween",
          displayGroups: this.displayGroups,
        };
      }
    },
    st = class {
      categoryId;
      config;
      targets;
      constructor(e, t) {
        (this.categoryId = e), (this.config = t), (this.targets = []);
      }
      addTargetSchema(e, t) {
        return this.targets.push({ id: e, schema: t }), this;
      }
      getDefinition() {
        return {
          id: this.categoryId,
          label: this.config.label,
          order: this.config.order,
          targets: this.targets,
        };
      }
    },
    ot = class {
      categoryId;
      config;
      triggers;
      constructor(e, t) {
        (this.categoryId = e), (this.config = t), (this.triggers = []);
      }
      addTriggerSchema(e, t) {
        return this.triggers.push({ id: e, schema: t }), this;
      }
      getDefinition() {
        return {
          id: this.categoryId,
          label: this.config.label,
          order: this.config.order,
          triggers: this.triggers,
        };
      }
    },
    it = class {
      categoryId;
      config;
      conditions;
      constructor(e, t) {
        (this.categoryId = e), (this.config = t), (this.conditions = []);
      }
      addConditionSchema(e, t) {
        return this.conditions.push({ id: e, schema: t }), this;
      }
      getDefinition() {
        return {
          id: this.categoryId,
          label: this.config.label,
          order: this.config.order,
          conditions: this.conditions,
        };
      }
    },
    Zt = class {
      baseInfo;
      categories = new Map();
      targetCategories = new Map();
      triggerCategories = new Map();
      conditionCategories = new Map();
      actionPresets = new Map();
      reducerHooks = [];
      constructor(e) {
        this.baseInfo = e;
      }
      addCategory(e, t = {}) {
        let r = new Xt(e, t);
        return this.categories.set(e, r), r;
      }
      addTargetCategory(e, t) {
        let r = new st(e, t);
        return this.targetCategories.set(e, r), r;
      }
      addTriggerCategory(e, t) {
        let r = new ot(e, t);
        return this.triggerCategories.set(e, r), r;
      }
      addConditionCategory(e, t) {
        let r = new it(e, t);
        return this.conditionCategories.set(e, r), r;
      }
      addActionPreset(e, t) {
        let r = `${this.baseInfo.namespace}:${e}`;
        return (
          this.actionPresets.set(r, {
            id: r,
            name: t.name,
            description: t.description,
            icon: t.icon,
            timelineIcon: t.timelineIcon,
            type: "plugin",
            categoryId: t.categoryId,
            action: t.action,
            customEditor: t.customEditor,
            targetFilter: t.targetFilter,
            designerTargetFilter: t.designerTargetFilter,
            customTargetComponent: t.customTargetComponent,
          }),
          this
        );
      }
      addReducerHooks(e) {
        return this.reducerHooks.push(e), this;
      }
      buildDesign() {
        let e = [];
        for (let [, i] of this.categories) e.push(i.getDefinition());
        let t = [];
        for (let [, i] of this.targetCategories) t.push(i.getDefinition());
        let r = [];
        for (let [, i] of this.triggerCategories) r.push(i.getDefinition());
        let s = [];
        for (let [, i] of this.conditionCategories) s.push(i.getDefinition());
        let o = [];
        for (let [, i] of this.actionPresets) o.push(i);
        return {
          namespace: this.baseInfo.namespace,
          pluginId: this.baseInfo.pluginId,
          version: this.baseInfo.version,
          displayName: this.baseInfo.displayName,
          description: this.baseInfo.description,
          categories: e.length > 0 ? e : void 0,
          targetCategories: t.length > 0 ? t : void 0,
          triggerCategories: r.length > 0 ? r : void 0,
          conditionCategories: s.length > 0 ? s : void 0,
          actionPresets: o.length > 0 ? o : void 0,
          reducerHooks:
            this.reducerHooks.length > 0 ? [...this.reducerHooks] : void 0,
        };
      }
    };
});
var oo = O((en) => {
  "use strict";
  Object.defineProperty(en, "__esModule", { value: !0 });
  Object.defineProperty(en, "TransformBuilder", {
    enumerable: !0,
    get: function () {
      return Jt;
    },
  });
  var Jt = class {
    baseInfo;
    triggerTransforms = new Map();
    targetTransforms = new Map();
    conditionTransforms = new Map();
    actionTransforms = new Map();
    constructor(e) {
      this.baseInfo = e;
    }
    addTargetTransform(e, t) {
      return (
        this.targetTransforms.set(
          this.createExtensionKey(e),
          function (s, o, i) {
            return t(s, o, i);
          }
        ),
        this
      );
    }
    addTriggerTransform(e, t) {
      return (
        this.triggerTransforms.set(
          this.createExtensionKey(e),
          function (s, o, i) {
            return t(s, o, i);
          }
        ),
        this
      );
    }
    addConditionTransform(e, t) {
      return (
        this.conditionTransforms.set(
          this.createExtensionKey(e),
          function (s, o, i) {
            return t(s, o, i);
          }
        ),
        this
      );
    }
    addActionTransform(e, t) {
      return (
        this.actionTransforms.set(
          this.createExtensionKey(e),
          function (s, o, i) {
            return t(s, o, i);
          }
        ),
        this
      );
    }
    createExtensionKey(e) {
      return `${this.baseInfo.namespace}:${e}`;
    }
    buildTransform() {
      return {
        namespace: this.baseInfo.namespace,
        pluginId: this.baseInfo.pluginId,
        version: this.baseInfo.version,
        displayName: this.baseInfo.displayName,
        description: this.baseInfo.description,
        triggerTransforms: this.triggerTransforms,
        targetTransforms: this.targetTransforms,
        conditionTransforms: this.conditionTransforms,
        actionTransforms: this.actionTransforms,
      };
    }
  };
});
var ao = O((io) => {
  "use strict";
  Object.defineProperty(io, "__esModule", { value: !0 });
});
var Y = O((pe) => {
  "use strict";
  Object.defineProperty(pe, "__esModule", { value: !0 });
  function Hl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Hl(pe, {
    CORE_OPERATORS: function () {
      return X.CORE_OPERATORS;
    },
    DEFAULTS: function () {
      return X.DEFAULTS;
    },
    DEFAULT_CUSTOM_EASE: function () {
      return X.DEFAULT_CUSTOM_EASE;
    },
    EASE_DEFAULTS: function () {
      return X.EASE_DEFAULTS;
    },
    PERCENT_CANVAS_DURATION_S: function () {
      return X.PERCENT_CANVAS_DURATION_S;
    },
    RELATIONSHIP_TYPES: function () {
      return X.RELATIONSHIP_TYPES;
    },
    STANDARD_TRIGGER_ALLOWED_CONTROLS: function () {
      return X.STANDARD_TRIGGER_ALLOWED_CONTROLS;
    },
    TimelineControlType: function () {
      return X.TimelineControlType;
    },
    TweenType: function () {
      return X.TweenType;
    },
    getPageLevelTriggerState: function () {
      return tn.getPageLevelTriggerState;
    },
    isValidControlType: function () {
      return X.isValidControlType;
    },
    releasePageLevelTriggerFired: function () {
      return tn.releasePageLevelTriggerFired;
    },
    resetPageLevelTriggerState: function () {
      return tn.resetPageLevelTriggerState;
    },
    tweenTypeFromName: function () {
      return X.tweenTypeFromName;
    },
    tweenTypeToName: function () {
      return X.tweenTypeToName;
    },
  });
  var X = to(),
    tn = no();
  at(ro(), pe);
  at(so(), pe);
  at(oo(), pe);
  at(ao(), pe);
  function at(n, e) {
    return (
      Object.keys(n).forEach(function (t) {
        t !== "default" &&
          !Object.prototype.hasOwnProperty.call(e, t) &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          });
      }),
      n
    );
  }
});
var ee = O((nn) => {
  "use strict";
  Object.defineProperty(nn, "__esModule", { value: !0 });
  function Wl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Wl(nn, {
    DEFAULT_ROOT_FONT_SIZE_PX: function () {
      return Xl;
    },
    EASING_NAMES: function () {
      return ic;
    },
    buildCustomEaseId: function () {
      return oc;
    },
    buildEaseContextId: function () {
      return sc;
    },
    debounce: function () {
      return nc;
    },
    defaultSplitClass: function () {
      return tc;
    },
    hasResolvableScrollUnit: function () {
      return Jl;
    },
    isValidControlType: function () {
      return Yl;
    },
    resolveScrollUnits: function () {
      return ec;
    },
    throttle: function () {
      return rc;
    },
    toSeconds: function () {
      return Kl;
    },
  });
  var lt = Y();
  function Yl(n) {
    return (
      n === lt.TimelineControlType.STANDARD ||
      n === lt.TimelineControlType.SCROLL ||
      n === lt.TimelineControlType.LOAD ||
      n === lt.TimelineControlType.CONTINUOUS
    );
  }
  function Kl(n) {
    return typeof n == "string" ? parseFloat(n) / 1e3 : n;
  }
  var Xl = 16,
    lo = "vh|vw|rem",
    co = "\\d+(?:\\.\\d+)?",
    Zl = new RegExp(`${co}(?:${lo})`),
    Ql = new RegExp(`(${co})(${lo})`, "g");
  function Jl(n) {
    return Zl.test(n);
  }
  function ec(n, e) {
    return n.replace(Ql, (t, r, s) =>
      String(Math.round(parseFloat(r) * e[s] * 100) / 100)
    );
  }
  function tc(n) {
    return `gsap_split_${n}++`;
  }
  var nc = (
      n,
      e = 0,
      { leading: t = !1, trailing: r = !0, maxWait: s } = {}
    ) => {
      let o,
        i = 0,
        a,
        l,
        c = () => {
          (i = 0), (o = void 0), r && n.apply(a, l);
        };
      function u(...f) {
        (a = this), (l = f), i || ((i = performance.now()), t && n.apply(a, l));
        let d = performance.now() - i;
        if (s && d >= s) {
          clearTimeout(o), c();
          return;
        }
        clearTimeout(o), (o = setTimeout(c, e));
      }
      return (
        (u.cancel = () => {
          clearTimeout(o), (o = void 0), (i = 0);
        }),
        u
      );
    },
    rc = (n, e = 0, { leading: t = !0, trailing: r = !0, maxWait: s } = {}) => {
      let o = 0,
        i,
        a,
        l,
        c = (f) => {
          (o = f), (i = void 0), n.apply(a, l);
        };
      function u(...f) {
        let d = performance.now();
        !o && !t && (o = d);
        let p = e - (d - o);
        (a = this),
          (l = f),
          p <= 0 || (s && d - o >= s)
            ? (i && (clearTimeout(i), (i = void 0)), c(d))
            : r && !i && (i = setTimeout(() => c(performance.now()), p));
      }
      return (
        (u.cancel = () => {
          clearTimeout(i), (i = void 0), (o = 0);
        }),
        u
      );
    };
  function sc(n, e) {
    return `${n}-${e}`;
  }
  function oc(n, e) {
    return e ? `${n}-${e}` : n;
  }
  var ic = [
    "none",
    "power1.in",
    "power1.out",
    "power1.inOut",
    "power2.in",
    "power2.out",
    "power2.inOut",
    "power3.in",
    "power3.out",
    "power3.inOut",
    "power4.in",
    "power4.out",
    "power4.inOut",
    "back.in",
    "back.out",
    "back.inOut",
    "bounce.in",
    "bounce.out",
    "bounce.inOut",
    "circ.in",
    "circ.out",
    "circ.inOut",
    "elastic.in",
    "elastic.out",
    "elastic.inOut",
    "expo.in",
    "expo.out",
    "expo.inOut",
    "sine.in",
    "sine.out",
    "sine.inOut",
  ];
});
var uo = O((rn) => {
  "use strict";
  Object.defineProperty(rn, "__esModule", { value: !0 });
  Object.defineProperty(rn, "EventManager", {
    enumerable: !0,
    get: function () {
      return ct;
    },
  });
  var Ne = ee(),
    Oe = class {
      elementHandlers = new WeakMap();
      eventTypeHandlers = new Map();
      customEventTypes = new Map();
      delegatedHandlers = new Map();
      batchedEvents = new Map();
      batchFrameId = null;
      defaultMaxBatchSize = 10;
      defaultMaxBatchAge = 100;
      defaultErrorHandler = (e, t) =>
        console.error("[EventManager] Error handling event:", e, t);
      constructor() {}
      static getInstance() {
        return Oe.instance || (Oe.instance = new Oe()), Oe.instance;
      }
      addEventListener(e, t, r, s) {
        try {
          let o = s?.kind === "custom",
            i = {
              ...(o ? { delegate: !1, passive: !0, batch: !1 } : lc[t] || {}),
              ...s,
              errorHandler: s?.errorHandler || this.defaultErrorHandler,
            };
          if (!o && t === "load" && "complete" in e && e.complete)
            return (
              setTimeout(() => {
                try {
                  r(new Event("load"), e);
                } catch (u) {
                  i.errorHandler?.(u, new Event("load"));
                }
              }, 0),
              () => {}
            );
          if (!e || !e.addEventListener)
            throw new Error("Invalid element provided to addEventListener");
          let a = this.createWrappedHandler(r, i, e),
            l = this.registerHandler(e, t, r, a.handler, i, o, a.cleanup);
          if (o)
            return () => {
              this.removeHandler(e, t, r, !0), l.cleanup?.();
            };
          let c = new AbortController();
          return (
            i.delegate
              ? this.ensureDelegatedHandler(t)
              : (ac(i) || e).addEventListener(t, l.wrappedHandler, {
                  passive: i.passive,
                  capture: i.capture,
                  signal: c.signal,
                }),
            () => {
              c.abort(), this.removeHandler(e, t, r, !1);
            }
          );
        } catch (o) {
          return s?.errorHandler?.(o, new Event(t)), () => {};
        }
      }
      emit(e, t, r, s) {
        try {
          let o = this.customEventTypes.get(e);
          if (!o?.size) return;
          let i = new CustomEvent(e, {
            detail: t,
            bubbles: s?.bubbles ?? !0,
            cancelable: !0,
          });
          for (let a of o)
            if (!r || r === a.element || a.element.contains(r))
              try {
                a.wrappedHandler(i);
              } catch (l) {
                console.error(`[EventManager] Error emitting ${e}:`, l);
              }
        } catch (o) {
          console.error(`[EventManager] Error emitting custom event ${e}:`, o);
        }
      }
      dispose() {
        this.batchFrameId !== null &&
          (cancelAnimationFrame(this.batchFrameId),
          (this.batchFrameId = null),
          this.batchedEvents.clear());
        for (let [, e] of this.delegatedHandlers) e.controller.abort();
        for (let [, e] of this.eventTypeHandlers)
          for (let t of e) t.cleanup?.();
        for (let [, e] of this.customEventTypes) for (let t of e) t.cleanup?.();
        this.delegatedHandlers.clear(),
          (this.elementHandlers = new WeakMap()),
          this.eventTypeHandlers.clear(),
          this.customEventTypes.clear();
      }
      createWrappedHandler(e, t, r) {
        let s = (o) => {
          try {
            let i =
              t.target === "window"
                ? window
                : t.target === "document"
                ? document
                : r;
            e(o, i);
          } catch (i) {
            (t.errorHandler || this.defaultErrorHandler)(i, o);
          }
        };
        if (t.batch) {
          let o = (i) => {
            let a = i.type || "unknown";
            this.batchedEvents.has(a) || this.batchedEvents.set(a, []),
              this.batchedEvents
                .get(a)
                .push({
                  event: i,
                  target: r,
                  timestamp: i.timeStamp || performance.now(),
                }),
              this.batchFrameId == null &&
                (this.batchFrameId = requestAnimationFrame(() =>
                  this.processBatchedEvents()
                ));
          };
          if (t.throttleMs && t.throttleMs > 0) {
            let i = (0, Ne.throttle)(s, t.throttleMs);
            return { handler: o, cleanup: i.cancel };
          }
          if (t.debounceMs && t.debounceMs > 0) {
            let i = (0, Ne.debounce)(s, t.debounceMs);
            return { handler: o, cleanup: i.cancel };
          }
          return { handler: o };
        }
        if (t.throttleMs && t.throttleMs > 0) {
          let o = (0, Ne.throttle)(s, t.throttleMs);
          if (t.debounceMs && t.debounceMs > 0) {
            let i = (0, Ne.debounce)(o, t.debounceMs);
            return {
              handler: i,
              cleanup: () => {
                i.cancel?.(), o.cancel?.();
              },
            };
          }
          return { handler: o, cleanup: o.cancel };
        }
        if (t.debounceMs && t.debounceMs > 0) {
          let o = (0, Ne.debounce)(s, t.debounceMs);
          return { handler: o, cleanup: o.cancel };
        }
        return { handler: s };
      }
      processBatchedEvents() {
        if (this.batchFrameId === null) return;
        this.batchFrameId = null;
        let e = performance.now();
        for (let [t, r] of this.batchedEvents) {
          let s = this.eventTypeHandlers.get(t);
          if (!s?.size) continue;
          let o = r.filter((a) => e - a.timestamp < this.defaultMaxBatchAge);
          if (!o.length) continue;
          o.sort((a, l) => a.timestamp - l.timestamp);
          let i =
            o.length <= this.defaultMaxBatchSize
              ? o
              : o.slice(-this.defaultMaxBatchSize);
          for (let { event: a, target: l } of i) {
            let c = a;
            (c.batchTimestamp = e), (c.batchSize = i.length);
            for (let u of s)
              try {
                (u.config.delegate ||
                  u.config.target === "window" ||
                  u.config.target === "document" ||
                  l === a.target ||
                  l.contains(a.target)) &&
                  u.wrappedHandler(c);
              } catch (f) {
                (u.config.errorHandler || this.defaultErrorHandler)(f, c);
              }
          }
        }
        this.batchedEvents.clear();
      }
      ensureDelegatedHandler(e) {
        if (this.delegatedHandlers.has(e)) return;
        let t = new AbortController(),
          r = (o) => {
            let i = this.eventTypeHandlers.get(e);
            if (!i?.size) return;
            let a = o.composedPath
              ? o.composedPath()
              : o.target
              ? [o.target]
              : [];
            for (let l of a)
              if (l instanceof Element) {
                for (let c of i) {
                  if (!c.config.delegate) continue;
                  if (c.element === l || c.element.contains(l))
                    try {
                      c.wrappedHandler(o);
                    } catch (f) {
                      console.error(`[EventDelegator] Error for ${e}:`, f);
                    }
                }
                if (!o.bubbles) break;
              }
          },
          s = [
            "focus",
            "blur",
            "focusin",
            "focusout",
            "mouseenter",
            "mouseleave",
          ].includes(e);
        document.addEventListener(e, r, {
          passive: !1,
          capture: s,
          signal: t.signal,
        }),
          this.delegatedHandlers.set(e, { handler: r, controller: t });
      }
      registerHandler(e, t, r, s, o, i, a) {
        let l = {
          element: e,
          originalHandler: r,
          wrappedHandler: s,
          config: o,
          cleanup: a,
        };
        if (i) {
          let c = this.customEventTypes.get(t) || new Set();
          c.add(l), this.customEventTypes.set(t, c);
        } else {
          let c = this.elementHandlers.get(e) || new Set();
          c.add(l), this.elementHandlers.set(e, c);
          let u = this.eventTypeHandlers.get(t) || new Set();
          u.add(l), this.eventTypeHandlers.set(t, u);
        }
        return l;
      }
      removeHandler(e, t, r, s) {
        if (s) {
          let o = this.customEventTypes.get(t);
          if (!o?.size) return;
          for (let i of o)
            if (i.element === e && i.originalHandler === r) {
              o.delete(i),
                o.size || this.customEventTypes.delete(t),
                i.cleanup?.();
              break;
            }
        } else {
          let o = this.eventTypeHandlers.get(t);
          if (!o?.size) return;
          let i = this.elementHandlers.get(e);
          if (!i?.size) return;
          let a;
          for (let l of i)
            if (l.originalHandler === r) {
              a = l;
              break;
            }
          if (a) {
            if ((i.delete(a), o.delete(a), !o.size)) {
              this.eventTypeHandlers.delete(t);
              let l = this.delegatedHandlers.get(t);
              l && (l.controller.abort(), this.delegatedHandlers.delete(t));
            }
            a.cleanup?.();
          }
        }
      }
    },
    ct = Oe;
  nt(ct, "instance");
  function ac(n) {
    return n.target === "window"
      ? window
      : n.target === "document"
      ? document
      : null;
  }
  var lc = {
    load: { delegate: !1, passive: !0 },
    DOMContentLoaded: { target: "document", passive: !0 },
    readystatechange: { target: "document", passive: !0 },
    beforeunload: { target: "window", passive: !1 },
    unload: { target: "window", passive: !1 },
    pageshow: { target: "window", passive: !0 },
    pagehide: { target: "window", passive: !0 },
    click: { delegate: !0, passive: !1 },
    dblclick: { delegate: !0, passive: !0 },
    mousedown: { delegate: !0, passive: !0 },
    mouseup: { delegate: !0, passive: !0 },
    mousemove: { delegate: !0, batch: !0, passive: !0 },
    mouseenter: { delegate: !1, passive: !0 },
    mouseleave: { delegate: !1, passive: !0 },
    mouseout: { delegate: !0, passive: !0 },
    contextmenu: { delegate: !0, passive: !1 },
    wheel: { delegate: !0, throttleMs: 16, passive: !0, batch: !0 },
    touchstart: { delegate: !0, passive: !0 },
    touchend: { delegate: !0, passive: !1 },
    touchmove: { delegate: !0, batch: !0, passive: !0 },
    touchcancel: { delegate: !0, passive: !0 },
    pointerdown: { delegate: !0, passive: !0 },
    pointerup: { delegate: !0, passive: !0 },
    pointermove: { delegate: !0, batch: !0, passive: !0 },
    pointerenter: { delegate: !1, passive: !0 },
    pointerleave: { delegate: !1, passive: !0 },
    pointercancel: { delegate: !0, passive: !0 },
    keydown: { delegate: !0, passive: !1 },
    keyup: { delegate: !0, passive: !1 },
    keypress: { delegate: !0, passive: !1 },
    input: { delegate: !0, passive: !1 },
    change: { delegate: !0, passive: !1 },
    focus: { delegate: !1, passive: !0 },
    blur: { delegate: !1, passive: !0 },
    focusin: { delegate: !0, passive: !0 },
    focusout: { delegate: !0, passive: !0 },
    submit: { delegate: !0, passive: !1 },
    reset: { delegate: !0, passive: !1 },
    select: { delegate: !0, passive: !0 },
    selectionchange: { target: "document", passive: !0 },
    dragstart: { delegate: !0, passive: !1 },
    drag: { delegate: !0, passive: !0 },
    dragenter: { delegate: !0, passive: !1 },
    dragleave: { delegate: !0, passive: !0 },
    dragover: { delegate: !0, passive: !1 },
    drop: { delegate: !0, passive: !1 },
    dragend: { delegate: !0, passive: !0 },
    play: { delegate: !0, passive: !0 },
    pause: { delegate: !0, passive: !0 },
    ended: { delegate: !0, passive: !0 },
    timeupdate: { delegate: !0, batch: !0, passive: !0 },
    canplay: { delegate: !0, passive: !0 },
    canplaythrough: { delegate: !0, passive: !0 },
    loadeddata: { delegate: !0, passive: !0 },
    animationstart: { delegate: !0, passive: !0 },
    animationend: { delegate: !0, passive: !0 },
    animationiteration: { delegate: !0, passive: !0 },
    transitionstart: { delegate: !0, passive: !0 },
    transitionend: { delegate: !0, passive: !0 },
    transitionrun: { delegate: !0, passive: !0 },
    transitioncancel: { delegate: !0, passive: !0 },
    scroll: { delegate: !1, throttleMs: 16, passive: !0 },
    resize: { target: "window", throttleMs: 16, passive: !0 },
    intersection: { delegate: !1, passive: !0 },
    orientationchange: { target: "window", passive: !0 },
    visibilitychange: { target: "document", passive: !0 },
    storage: { target: "window", passive: !0 },
    online: { target: "window", passive: !0 },
    offline: { target: "window", passive: !0 },
    hashchange: { target: "window", passive: !0 },
    popstate: { target: "window", passive: !0 },
    copy: { delegate: !0, passive: !1 },
    cut: { delegate: !0, passive: !1 },
    paste: { delegate: !0, passive: !1 },
    compositionstart: { delegate: !0, passive: !1 },
    compositionupdate: { delegate: !0, passive: !1 },
    compositionend: { delegate: !0, passive: !1 },
    beforeinput: { delegate: !0, passive: !1 },
  };
});
var fo = O((on) => {
  "use strict";
  Object.defineProperty(on, "__esModule", { value: !0 });
  Object.defineProperty(on, "PluginRuntimeBridge", {
    enumerable: !0,
    get: function () {
      return sn;
    },
  });
  var sn = class {
    intervalHandlers = new Map();
    channelSubscribers = new Map();
    registerIntervalHandler(e, t) {
      let r = this.intervalHandlers.get(e);
      r !== t &&
        (r !== void 0 &&
          console.warn(
            "IX3: registerIntervalHandler called twice. The previous handler is being replaced; verify the plugin is registered exactly once (or use a unique pluginKey per concurrent handler).",
            { pluginKey: e }
          ),
        this.intervalHandlers.set(e, t));
    }
    fireInterval(e) {
      for (let [t, r] of this.intervalHandlers)
        try {
          r(e);
        } catch (s) {
          console.error(
            "IX3: interval handler threw. Continuing with the remaining handlers. Investigate the plugin to prevent silent data drift.",
            { pluginKey: t },
            s
          );
        }
    }
    publish(e, t, r) {
      let s = this.channelSubscribers.get(e);
      if (s) {
        for (let o of s.values())
          for (let i of o.slice())
            if (!(i.element && r && i.element !== r))
              try {
                i.cb(t);
              } catch (a) {
                console.error(
                  "IX3: channel subscriber threw. Continuing with remaining subscribers.",
                  { channel: e },
                  a
                );
              }
      }
    }
    subscribe(e, t, r, s) {
      let o = this.channelSubscribers.get(t);
      o || ((o = new Map()), this.channelSubscribers.set(t, o));
      let i = o.get(e) ?? [],
        a = { element: r, cb: s };
      return (
        i.push(a),
        o.set(e, i),
        () => {
          let l = this.channelSubscribers.get(t)?.get(e);
          if (!l) return;
          let c = l.indexOf(a);
          c !== -1 && l.splice(c, 1),
            l.length === 0 &&
              (this.channelSubscribers.get(t)?.delete(e),
              this.channelSubscribers.get(t)?.size === 0 &&
                this.channelSubscribers.delete(t));
        }
      );
    }
    destroyTimeline(e) {
      for (let [t, r] of this.channelSubscribers)
        r.delete(e), r.size === 0 && this.channelSubscribers.delete(t);
    }
  };
});
var po = O((ln) => {
  "use strict";
  Object.defineProperty(ln, "__esModule", { value: !0 });
  Object.defineProperty(ln, "RuntimeMotionDriver", {
    enumerable: !0,
    get: function () {
      return an;
    },
  });
  var an = class {
    env;
    constructor(e) {
      this.env = e;
    }
    hasGsap() {
      return this.env.win.gsap != null;
    }
    hasObserver() {
      return this.env.win.Observer != null;
    }
    timeline() {
      return this.env.win.gsap?.timeline() ?? null;
    }
    to(...e) {
      return this.env.win.gsap?.to(...e) ?? null;
    }
    set(...e) {
      this.env.win.gsap?.set(...e);
    }
    getProperty(...e) {
      return this.env.win.gsap?.getProperty(...e) ?? 0;
    }
    quickSetter(...e) {
      return this.env.win.gsap?.quickSetter(...e) ?? null;
    }
    quickTo(...e) {
      return this.env.win.gsap?.quickTo(...e) ?? null;
    }
    addTicker(e) {
      let t = this.env.win.gsap;
      if (t?.ticker)
        return (
          t.ticker.add(e),
          () => {
            try {
              t.ticker?.remove(e);
            } catch {}
          }
        );
      let r = this.env.win,
        s = 0,
        o = !0,
        i = () => {
          o && (e(), o && (s = r.requestAnimationFrame(i)));
        };
      return (
        (s = r.requestAnimationFrame(i)),
        () => {
          (o = !1), r.cancelAnimationFrame(s);
        }
      );
    }
    createObserver(...e) {
      return this.env.win.Observer?.create(...e) ?? null;
    }
  };
});
var dn = O((fn) => {
  "use strict";
  Object.defineProperty(fn, "__esModule", { value: !0 });
  function cc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  cc(fn, {
    analyzeSharedTimelineGroups: function () {
      return dc;
    },
    triggerEmitsCallbackRole: function () {
      return xc;
    },
    triggerRoutesByCallbackRole: function () {
      return Fe;
    },
  });
  var cn = Y(),
    uc = 10,
    fc = new Set(["wf:popover"]);
  function dc(n, e, t, r, s, o) {
    let i = n.timelineIds ?? [];
    if (i.length < 2) return [];
    let a = !0,
      l = !1,
      c = 0,
      u = 0;
    for (let b of n.triggers) {
      let [v, T, _] = b;
      if (T?.controlType === cn.TimelineControlType.CONTINUOUS) return [];
      if (
        (T?.controlType !== void 0 &&
          T.controlType !== cn.TimelineControlType.STANDARD &&
          (a = !1),
        Rc(v, T) && (l = !0),
        _c(v, T))
      )
        return [];
      if (Fe(v, T)) {
        let S = _ ? new Set(t(_, { trigger: b }, n)).size : 0;
        (u += S), S > 0 && c++;
      }
    }
    let f =
        a && n.triggers.some(([b]) => fc.has(b))
          ? pc(
              i,
              e,
              r,
              (b) => t(b, {}, n),
              s ? (b) => s(b, n) : void 0,
              u > 1,
              o
            )
          : void 0,
      d = f ? [f] : [],
      p = new Set(f?.members);
    if (
      i.some((b) => {
        let v = e.get(b),
          T = v?.settings?.control;
        return v?.triggerMetadata?.role != null && T != null && Oc.has(T);
      })
    )
      return [];
    if (l) return d;
    if (c > 1) return [];
    let h = u > 1;
    if (kc(n.triggers, t, n)) return d;
    let g = [],
      y = new Map();
    for (let b of i) {
      if (p.has(b)) continue;
      let v = e.get(b);
      if (!v || v.reuse || !v.actions?.length || Fc(v, r)) continue;
      if (s?.(v, n)) {
        let _ = v.triggerMetadata?.role ? yc(v, o) : void 0;
        if (_ !== void 0) {
          let S = y.get(_);
          S ? S.push(b) : y.set(_, [b]);
        }
        continue;
      }
      if (h) continue;
      let T = new Set();
      for (let _ of v.actions)
        if (_.targets)
          for (let S of _.targets) for (let I of t(S, {}, n)) T.add(I);
      g.push({ id: b, targets: T });
    }
    let E = [],
      w = (b) => {
        let v = b;
        for (let T = 0; T <= uc; T++) {
          let _ = e.get(v)?.reuse?.sourceTimelineId;
          if (!_) return v;
          v = _;
        }
        return v;
      },
      m = (b, v) => {
        let T = new Set(b),
          _ = new Set(),
          S = new Set(),
          I = (R) => {
            let k = R?.groupId;
            if (k != null) {
              if (_.has(k)) return !1;
              _.add(k);
            }
            let F = R?.triggerMetadata?.role;
            if (F != null) {
              if (S.has(F)) return !1;
              S.add(F);
            }
            return !0;
          };
        for (let R of b) if (!I(e.get(R))) return;
        for (let R of i) {
          if (T.has(R)) continue;
          let k = e.get(R);
          if (k?.reuse && T.has(w(R)) && !I(k)) return;
        }
        if (go(b, e, (R) => t(R, {}, n), v)) return;
        let x = new Map(b.map((R) => [R, Tc(e.get(R), r, v)])),
          P = new Map();
        for (let R of i) for (let [k, F] of x.get(R) ?? []) P.set(k, F);
        if (P.size > 0) {
          let R = b.find((F) => {
            let G = x.get(F);
            if (G.size !== P.size) return !1;
            for (let [B, W] of G) if (P.get(B) !== W) return !1;
            return !0;
          });
          if (!R) return;
          let k = b.indexOf(R);
          if (k > 0) {
            let [F] = b.splice(k, 1);
            b.unshift(F);
          }
        }
        E.push({ primary: b[0], members: b });
      },
      A = new Set();
    for (let b = 0; b < g.length; b++) {
      if (A.has(b)) continue;
      let v = [g[b].id],
        T = new Set(g[b].targets);
      A.add(b);
      let _ = !0;
      for (; _; ) {
        _ = !1;
        for (let S = b + 1; S < g.length; S++)
          if (!A.has(S) && vo(T, g[S].targets)) {
            v.push(g[S].id);
            for (let I of g[S].targets) T.add(I);
            A.add(S), (_ = !0);
          }
      }
      v.length >= 2 && m(v);
    }
    for (let [b, v] of y) v.length >= 2 && m(v, b);
    return [...d, ...E];
  }
  function pc(n, e, t, r, s, o = !1, i) {
    let a = [],
      l = new Set();
    for (let u of n) {
      let f = e.get(u),
        d = f?.triggerMetadata?.role;
      if (d) {
        if (l.has(d)) return;
        l.add(d), !f?.reuse && a.push(u);
      }
    }
    if (a.length < 2 || go(a, e, r, void 0, i)) return;
    let c = hc(a, e, t, s);
    if (o) {
      let u = e.get(c.primary);
      if (!u || s?.(u) !== !0) return;
    }
    return c;
  }
  function hc(n, e, t, r) {
    let s = (a) => gc(e.get(a), t),
      o = (a) => {
        let l = e.get(a);
        return l != null && r?.(l) === !0;
      },
      i = r ? n.findIndex((a) => o(a) && s(a)) : -1;
    if (
      (i < 0 && r && (i = n.findIndex(o)), i < 0 && (i = n.findIndex(s)), i > 0)
    ) {
      let [a] = n.splice(i, 1);
      n.unshift(a);
    }
    return { primary: n[0], members: n };
  }
  function gc(n, e) {
    if (!n?.actions) return !1;
    let t = new Map();
    for (let r of n.actions) {
      if (!r) continue;
      let s = r.tt ?? 0,
        o = r.splitText
          ? typeof r.splitText == "string"
            ? r.splitText
            : r.splitText.type
          : "none",
        i =
          o === "none"
            ? JSON.stringify(r.targets)
            : `${JSON.stringify(r.targets)}_split_${o}`,
        a = t.get(i) ?? new Set();
      t.set(i, a);
      let l = !1;
      for (let c of Object.values(r.properties ?? {}))
        for (let u of Object.keys(c || {})) a.has(u) ? (l = !0) : a.add(u);
      if ((s === 1 || s === 2) && !l && mc(r, e)) return !0;
    }
    return !1;
  }
  function mc(n, e) {
    for (let t in n.properties) {
      let r = e(t),
        s = n.properties[t];
      if (!(!r?.createTweenConfig || !s))
        try {
          let o = r.createTweenConfig(s);
          if (Object.keys(o.from ?? {}).length > 0) return !0;
        } catch {}
    }
    return !1;
  }
  function yc(n, e) {
    if (!e || !n.actions?.length) return;
    let t;
    for (let r of n.actions) {
      if (!r.targets?.length) return;
      for (let s of r.targets) {
        let o = e(s);
        if (o === void 0) return;
        if (t === void 0) t = o;
        else if (t !== o) return;
      }
    }
    return t;
  }
  function go(n, e, t, r, s) {
    let o = new Map();
    for (let i of n)
      for (let [a, l] of vc(e.get(i), t, r, s)) {
        let c = o.get(a);
        if (c !== void 0 && c !== l) return !0;
        o.set(a, l);
      }
    return !1;
  }
  function vc(n, e, t, r) {
    let s = [];
    for (let o of n?.actions ?? []) {
      if (!o?.splitText) continue;
      let i = typeof o.splitText == "string" ? void 0 : o.splitText.mask,
        a = i ? `mask_${i}` : "none";
      if (t !== void 0) {
        s.push([t, a]);
        continue;
      }
      for (let l of o.targets ?? []) {
        let c = e(l);
        if (c.length === 0) s.push([r?.(l) ?? JSON.stringify(l), a]);
        else for (let u of c) s.push([u, a]);
      }
    }
    return s;
  }
  function Tc(n, e, t) {
    let r = new Map();
    if (!n?.actions) return r;
    let s = new Map();
    for (let o of n.actions) {
      if (!o) continue;
      let i = o.tt ?? 0,
        a = o.splitText
          ? typeof o.splitText == "string"
            ? o.splitText
            : o.splitText.type
          : "none",
        l = a === "none" ? "" : `_split_${a}`,
        c = JSON.stringify(o.targets) + l,
        u =
          o.splitText && typeof o.splitText != "string"
            ? o.splitText.mask
            : void 0,
        f = u ? `_mask_${u}` : "",
        d = s.get(c) ?? new Set();
      s.set(c, d);
      let p = !1;
      for (let h of Object.values(o.properties ?? {}))
        for (let g of Object.keys(h || {})) d.has(g) ? (p = !0) : d.add(g);
      if ((i === 1 || i === 2) && !p) {
        let h = (t === void 0 ? c : t + l) + f;
        for (let [g, y] of bc(o, e)) r.set(`${h} ${g}`, y);
      }
    }
    return r;
  }
  function bc(n, e) {
    let t = [];
    for (let r in n.properties) {
      let s = e(r),
        o = n.properties[r];
      if (!(!s?.createTweenConfig || !o))
        try {
          let i = s.createTweenConfig(o);
          for (let [a, l] of Object.entries(i.from ?? {}))
            t.push([a, Ec(l, o)]);
        } catch {}
    }
    return t;
  }
  var Sc = 0;
  function Ec(n, e) {
    if (typeof n == "number" && Number.isNaN(n))
      return `NaN(${JSON.stringify(e) ?? ""})`;
    if (typeof n == "function") {
      let { legacyExpression: t } = n;
      return typeof t == "string" ? `fn(${t})` : `fn#${Sc++}`;
    }
    return JSON.stringify(n) ?? "undefined";
  }
  var wc = new Set(["resume", "reverse", "reverseFlipEase", "pause", "stop"]),
    Oc = new Set(["resume", "pause", "stop"]),
    Ac = new Set(["togglePlayReverse", "togglePlayReverseFlipEase"]);
  function _c(n, e) {
    if (!e) return !1;
    let t = Fe(n, e),
      r = (i) => !!(i && (wc.has(i) || (!t && Ac.has(i))));
    if (r(e.control)) return !0;
    let { ifTrue: s, ifFalse: o } = e.conditionalLogic ?? {};
    return r(s?.control) || r(o?.control);
  }
  function Rc(n, e) {
    return !e ||
      (e.controlType !== void 0 &&
        e.controlType !== cn.TimelineControlType.STANDARD)
      ? !0
      : !(
          (e.assignedGroupId !== void 0 && e.assignedGroupId !== "") ||
          e.assignedTimelineRole ||
          Fe(n, e)
        );
  }
  function Ic(n, e) {
    return (
      n === un && typeof e == "object" && e !== null && e.multiTimeline === !0
    );
  }
  var un = "wf:hover",
    mo = new Set(["wf:navbar", "wf:dropdown", "wf:popover"]),
    ho = new Set(["wf:focus", "wf:blur"]),
    Mc = new Map([
      [un, new Set(["mouseEnter", "mouseLeave"])],
      ["wf:navbar", new Set(["open", "close"])],
      ["wf:dropdown", new Set(["open", "close"])],
      ["wf:popover", new Set(["open", "close"])],
    ]);
  function Fe(n, e) {
    return mo.has(n) || Ic(n, e?.pluginConfig);
  }
  function Cc(n) {
    return typeof n?.assignedGroupId == "string" && n.assignedGroupId !== ""
      ? n.assignedGroupId
      : void 0;
  }
  function Pc(n) {
    let e = Cc(n);
    return e !== void 0
      ? `group:${e}`
      : n?.assignedTimelineRole
      ? `role:${n.assignedTimelineRole}`
      : void 0;
  }
  function yo(n, e) {
    if (n !== un) return;
    let t = e?.pluginConfig;
    if (typeof t == "object" && t !== null) {
      let r = t.eventMode;
      return r === "enter" || r === "leave" ? r : void 0;
    }
  }
  function xc(n, e, t) {
    if (Mc.get(n)?.has(t) === !1) return !1;
    if (mo.has(n)) {
      let s = e?.pluginConfig,
        o = typeof s == "object" && s !== null ? s.event : void 0;
      return o === "open" || o === "close" ? t === o : !0;
    }
    let r = yo(n, e);
    return r === "enter"
      ? t !== "mouseLeave"
      : r === "leave"
      ? t !== "mouseEnter"
      : !0;
  }
  function kc(n, e, t) {
    let r = [];
    for (let s of n) {
      let [o, i, a] = s,
        l = Fe(o, i) ? `callback:${r.length}` : Pc(i);
      l !== void 0 &&
        r.push({
          route: l,
          key: o,
          eventMode: yo(o, i),
          reactive: i.conditionalLogic != null,
          elements: a ? new Set(e(a, { trigger: s }, t)) : new Set(),
        });
    }
    for (let s = 0; s < r.length; s++)
      for (let o = s + 1; o < r.length; o++) {
        if (r[s].route === r[o].route) continue;
        let i = r[s].eventMode,
          a = r[o].eventMode,
          l = vo(r[s].elements, r[o].elements),
          c = i !== void 0 && a !== void 0,
          u = r[s].reactive || r[o].reactive,
          f = r[s].reactive && r[o].reactive,
          d = r[s].key !== r[o].key && ho.has(r[s].key) && ho.has(r[o].key);
        if (l) {
          if (!(c && i !== a && !u)) return !0;
        } else if (c || d || f || Nc(r[s].elements, r[o].elements)) return !0;
      }
    return !1;
  }
  function vo(n, e) {
    let [t, r] = n.size <= e.size ? [n, e] : [e, n];
    for (let s of t) if (r.has(s)) return !0;
    return !1;
  }
  function Nc(n, e) {
    for (let t of n)
      for (let r of e)
        if (t !== r && (t.contains(r) || r.contains(t))) return !0;
    return !1;
  }
  function Fc(n, e) {
    for (let t of n.actions ?? [])
      for (let r in t.properties) if (e(r)?.createCustomTween) return !0;
    return !1;
  }
});
var Eo = O((pn) => {
  "use strict";
  Object.defineProperty(pn, "__esModule", { value: !0 });
  function Lc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Lc(pn, {
    MAX_ALIAS_DEPTH: function () {
      return bo;
    },
    resolveSourceTimelineId: function () {
      return So;
    },
    shouldFlipEaseForTimeline: function () {
      return Dc;
    },
  });
  var To = dn(),
    bo = 10;
  function So(n, e) {
    let t = e;
    for (let r = 0; r <= bo; r++) {
      let o = n.get(t)?.reuse?.sourceTimelineId;
      if (!o) return t;
      t = o;
    }
    return (
      console.warn(
        `IX3: Timeline reuse chain exceeded max depth for "${e}". Possible circular reference.`
      ),
      t
    );
  }
  function Dc(n, e, t, r) {
    let {
        getInteractionsForTimelines: s,
        getReuseAliasesForSource: o,
        timelineGroupsEnabled: i,
      } = r,
      a = So(n, t),
      l = new Set([a, ...o(a)]),
      c = !1,
      u = (d) => {
        if (d === "reverseFlipEase" || d === "togglePlayReverseFlipEase")
          c = !0;
        else if (d === "reverse" || d === "togglePlayReverse") return !0;
        return !1;
      },
      f = new Map();
    if (i) for (let d of s(l)) f.set(d.id, d);
    else
      for (let d of l) {
        let p = e(d);
        p && f.set(p.id, p);
      }
    for (let d of f.values()) {
      let p = d.timelineIds ?? [];
      for (let [h, g] of d.triggers) {
        let y = g?.assignedGroupId,
          E = (0, To.triggerRoutesByCallbackRole)(h, g);
        if (y === null && !E) continue;
        let w = g?.assignedTimelineRole,
          m =
            w != null
              ? p.filter((T) => n.get(T)?.triggerMetadata?.role === w)
              : null,
          A;
        if (E)
          A = p.filter((T) => {
            let _ = n.get(T)?.triggerMetadata?.role;
            return _ != null && (0, To.triggerEmitsCallbackRole)(h, g, _);
          });
        else if (y != null) {
          let T = p.filter((_) => n.get(_)?.groupId === y);
          if (T.length === 0) continue;
          A = T;
        } else A = m;
        let b = (T) =>
            (T != null ? [T] : p).filter(
              (S) => (A == null || A.includes(S)) && l.has(S)
            ),
          v = g?.conditionalLogic;
        if (v) {
          for (let T of [v.ifTrue, v.ifFalse])
            if (T && b(T.targetTimelineId ?? void 0).length > 0 && u(T.control))
              return !1;
        } else
          for (let T of b()) {
            let _ = n.get(T),
              S = (i ? _?.triggerMetadata?.role != null : _?.triggerMetadata)
                ? _?.settings?.control
                : g?.control;
            if (u(S)) return !1;
          }
      }
    }
    return c;
  }
});
var yn = O((mn) => {
  "use strict";
  Object.defineProperty(mn, "__esModule", { value: !0 });
  function Bc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Bc(mn, {
    SplitTextManager: function () {
      return gn;
    },
    getSplitTextType: function () {
      return wo;
    },
  });
  var hn = ee(),
    gn = class {
      collectTargets;
      onAutoSplit;
      onSplitExtended;
      onSplitReused;
      globalSplitRegistry;
      constructor(e, t, r, s) {
        (this.collectTargets = e),
          (this.onAutoSplit = t),
          (this.onSplitExtended = r),
          (this.onSplitReused = s),
          (this.globalSplitRegistry = new Map());
      }
      splitForActions(e, t, r, s, o, i) {
        let a = this.analyzeSplitRequirements(e, t, r, i);
        for (let [l, { types: c, masks: u }] of a)
          this.doSplitText({ type: Vc(c), mask: jc(u) }, [l], s, o);
      }
      analyzeSplitRequirements(e, t, r, s) {
        let o = new Map();
        for (let i of e) {
          let a = wo(i);
          if (a === "none") continue;
          let l = typeof i.splitText == "object" ? i.splitText.mask : void 0;
          for (let c of this.collectTargets(i, t, r, s)) {
            if (c === document.body) continue;
            let u = o.get(c) || { types: new Set(), masks: new Set() };
            o.set(c, u), u.types.add(a), l && u.masks.add(l);
          }
        }
        return o;
      }
      doSplitText(e, t, r, s) {
        try {
          let o = ut(e.type);
          for (let i of t) {
            let a = this.globalSplitRegistry.get(i);
            if (a) {
              let p = new Set(ut(a.splitTextConfig.type));
              if (o.every((g) => p.has(g))) {
                (a.owner = r),
                  p.has("lines") &&
                    (this.onSplitReused(r), (r.timeline.data.splitLines = !0));
                continue;
              }
              a.splitInstance.revert(),
                this.globalSplitRegistry.delete(i),
                (e = {
                  type: [...new Set([...p, ...o])].join(", "),
                  mask: e.mask || a.splitTextConfig.mask,
                });
            }
            let l = {
                splitInstance: void 0,
                splitTextConfig: e,
                owner: r,
                lineSplit: void 0,
              },
              c = { type: e.type, tag: "span" },
              u = ut(e.type),
              { mask: f } = e;
            if (u.includes("lines")) {
              (r.timeline.data.splitLines = !0),
                (c.linesClass = (0, hn.defaultSplitClass)("line")),
                (c.autoSplit = !0);
              let p = { vars: c, width: 0 };
              i.closest("[popover]") && (l.lineSplit = p),
                (c.onSplit = (h) => {
                  (p.width = i.offsetWidth),
                    this.applySplitElementStyles(h, f),
                    this.onAutoSplit(l.owner, i);
                });
            }
            u.includes("words") &&
              (c.wordsClass = (0, hn.defaultSplitClass)("word")),
              u.includes("chars") &&
                (c.charsClass = (0, hn.defaultSplitClass)("letter")),
              f && (c.mask = f);
            let d = new s([i], c);
            this.applySplitElementStyles(d, f),
              (l.splitInstance = d),
              this.globalSplitRegistry.set(i, l),
              a && this.onSplitExtended(i);
          }
        } catch (o) {
          console.error("Error splitting text:", o);
        }
      }
      applySplitElementStyles(e, t) {
        let r = [
          [e.lines, "block"],
          [e.words, "inline-block"],
          [e.chars, "inline-block"],
        ];
        t && r.push([e.masks, t === "lines" ? "block" : "inline-block"]);
        for (let [s, o] of r)
          for (let i of s) {
            let { style: a } = i;
            (a.position = "relative"), (a.display = o);
          }
      }
      getSplitElements(e, t) {
        let r = [];
        for (let s of e) {
          let o = this.globalSplitRegistry.get(s);
          if (o && ut(o.splitTextConfig.type).includes(t)) {
            let a = o.splitInstance[t];
            a?.length && r.push(...a);
          }
        }
        return r.length > 0 ? r : e;
      }
      refreshLineSplits(e) {
        for (let [t, { splitInstance: r, lineSplit: s }] of this
          .globalSplitRegistry) {
          if (!s || !e.has(t)) continue;
          let o = t.offsetWidth;
          o && o !== s.width && r.split(s.vars);
        }
      }
      revertAll() {
        for (let [, e] of this.globalSplitRegistry) e.splitInstance.revert();
        this.globalSplitRegistry.clear();
      }
    };
  function Vc(n) {
    return (
      n.has("chars") && !n.has("words") && (n = new Set([...n, "words"])),
      ["lines", "words", "chars"].filter((r) => n.has(r)).join(", ")
    );
  }
  function jc(n) {
    if (n.size !== 0) {
      if (n.has("lines")) return "lines";
      if (n.has("words")) return "words";
      if (n.has("chars")) return "chars";
    }
  }
  function wo(n) {
    return n.splitText
      ? typeof n.splitText == "string"
        ? n.splitText
        : n.splitText.type
      : "none";
  }
  function ut(n) {
    return n.split(", ");
  }
});
var Tn = O((vn) => {
  "use strict";
  Object.defineProperty(vn, "__esModule", { value: !0 });
  function Gc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Gc(vn, {
    convertEaseConfigToGSAP: function () {
      return Ao;
    },
    convertEaseConfigToLinear: function () {
      return $c;
    },
    isAdvancedEase: function () {
      return qc;
    },
    isBasicEase: function () {
      return zc;
    },
  });
  var Le = ee();
  function Oo() {
    return {
      gsap: window.gsap,
      CustomEase: window.CustomEase,
      CustomWiggle: window.CustomWiggle,
      CustomBounce: window.CustomBounce,
    };
  }
  function Ao(n, e = Oo(), t) {
    return n == null
      ? "none"
      : typeof n == "number"
      ? Le.EASING_NAMES[n] || "none"
      : Uc(n, e, t);
  }
  function Uc(n, e, t) {
    switch (n.type) {
      case "back":
        return `back.${n.curve}(${n.power})`;
      case "elastic":
        return `elastic.${n.curve}(${n.amplitude}, ${n.period})`;
      case "steps":
        return `steps(${n.stepCount})`;
      case "rough": {
        let {
          templateCurve: r,
          points: s,
          strength: o,
          taper: i,
          randomizePoints: a,
          clampPoints: l,
        } = n;
        return `rough({ template: ${r}, strength: ${o}, points: ${s}, taper: ${i}, randomize: ${a}, clamp: ${l} })`;
      }
      case "slowMo":
        return `slow(${n.linearRatio}, ${n.power}, ${n.yoyoMode})`;
      case "expoScale":
        return `expoScale(${n.startingScale}, ${n.endingScale}, ${n.templateCurve})`;
      case "customWiggle": {
        let { CustomWiggle: r } = e;
        return r
          ? r.create((0, Le.buildCustomEaseId)("customIX3Wiggle", t), {
              wiggles: n.wiggles,
              type: n.wiggleType,
            })
          : null;
      }
      case "customBounce": {
        let { CustomBounce: r } = e;
        return r
          ? r.create((0, Le.buildCustomEaseId)("customIX3Bounce", t), {
              strength: n.strength,
              endAtStart: n.endAtStart,
              squash: n.squash,
              squashID: (0, Le.buildCustomEaseId)("customIX3Squash", t),
            })
          : null;
      }
      case "customEase": {
        let { CustomEase: r } = e;
        return r
          ? r.create(
              (0, Le.buildCustomEaseId)("customIX3Ease", t),
              n.bezierCurve
            )
          : null;
      }
      default:
        return "none";
    }
  }
  function $c(n, e = Oo(), t = 20) {
    if (n == null) return "linear";
    let r = Ao(n, e);
    if (r === null) return "linear";
    if (typeof n == "object" && n.type === "steps")
      return `steps(${n.stepCount})`;
    let { gsap: s } = e;
    if (!s) return "linear";
    let o = s.parseEase(r);
    if (typeof o != "function") return "linear";
    let i = [];
    for (let a = 0; a <= t; a++) {
      let l = a / t,
        c = o(l);
      i.push({ t: Number(l.toFixed(4)), value: Number(c.toFixed(4)) });
    }
    return (
      "linear(" +
      i.map((a) => `${a.value} ${Math.round(a.t * 100)}%`).join(", ") +
      ")"
    );
  }
  function qc(n) {
    return typeof n == "object" && n !== null;
  }
  function zc(n) {
    return typeof n == "number";
  }
});
var En = O((Sn) => {
  "use strict";
  Object.defineProperty(Sn, "__esModule", { value: !0 });
  function Hc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Hc(Sn, {
    applyEase: function () {
      return bn;
    },
    configHasVolatileValue: function () {
      return Yc;
    },
    convertToGsapDefaults: function () {
      return Kc;
    },
    getStaggerConfig: function () {
      return Ro;
    },
    isVolatileGsapValue: function () {
      return _o;
    },
  });
  var he = ee(),
    Wc = Tn();
  function _o(n) {
    return (
      typeof n == "function" ||
      (typeof n == "string" &&
        (n.startsWith("+=") || n.startsWith("-=") || n.startsWith("random(")))
    );
  }
  function Yc(n) {
    for (let e of [n.to, n.from])
      if (e) {
        for (let t in e) if (_o(e[t])) return !0;
      }
    return !1;
  }
  function bn(n, e, t) {
    let r = (0, Wc.convertEaseConfigToGSAP)(e, void 0, t);
    r != null && (n.ease = r);
  }
  var Ro = (n, e) => {
    if (!n) return;
    let { ease: t, amount: r, from: s, grid: o, axis: i, each: a } = n,
      l = {};
    return (
      r != null && (l.amount = (0, he.toSeconds)(r)),
      a != null && (l.each = (0, he.toSeconds)(a)),
      s != null && (l.from = s),
      o != null && (l.grid = o),
      i != null && (l.axis = i),
      t != null && bn(l, t, e),
      l
    );
  };
  function Kc(n, e) {
    let t = {},
      r = e ? (0, he.buildEaseContextId)(e, "defaults") : void 0,
      s = e ? (0, he.buildEaseContextId)(e, "defaults-stagger") : void 0;
    if (
      (n.duration != null && (t.duration = (0, he.toSeconds)(n.duration)),
      n.ease != null && bn(t, n.ease, r),
      n.delay != null &&
        (t.delay =
          typeof n.delay == "number" ? n.delay : (0, he.toSeconds)(n.delay)),
      n.repeat != null && (t.repeat = n.repeat),
      n.repeatDelay != null &&
        (t.repeatDelay = (0, he.toSeconds)(n.repeatDelay)),
      n.stagger != null)
    ) {
      let o = Ro(n.stagger, s);
      o && (t.stagger = o);
    }
    return n.yoyo != null && (t.yoyo = n.yoyo), t;
  }
});
var ko = O((On) => {
  "use strict";
  Object.defineProperty(On, "__esModule", { value: !0 });
  Object.defineProperty(On, "ScrollMarkerFocusManager", {
    enumerable: !0,
    get: function () {
      return wn;
    },
  });
  var Xc =
      ".gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end",
    Po = "wf-ix3-marker-focus",
    xo = "wf-ix3-marker-owned",
    Io = "wf-ix3-marker-focus-style",
    Mo = "marker-",
    Zc = `.${xo}{opacity:.4;pointer-events:auto!important;transition:opacity .15s ease;}.${Po}{opacity:1!important;}`;
  function Co(n) {
    for (let e of Array.from(n.classList))
      if (e.startsWith(Mo)) return e.slice(Mo.length);
    return null;
  }
  var wn = class {
    env;
    setsByStId;
    orderedStIds;
    stickyIId;
    hoverIId;
    stickyPinned;
    initialized;
    styleEl;
    constructor(e) {
      (this.env = e),
        (this.setsByStId = new Map()),
        (this.orderedStIds = []),
        (this.stickyIId = null),
        (this.hoverIId = null),
        (this.stickyPinned = !1),
        (this.initialized = !1),
        (this.styleEl = null),
        (this.onMouseOver = (t) => {
          let r = this.interactionForTarget(t.target);
          r != null && ((this.hoverIId = r), this.applyFocus());
        }),
        (this.onMouseOut = (t) => {
          let r = t.relatedTarget;
          this.interactionForTarget(r) == null &&
            this.hoverIId != null &&
            ((this.hoverIId = null), this.applyFocus());
        }),
        (this.onClick = (t) => {
          let r = this.interactionForTarget(t.target);
          r != null &&
            (t.stopPropagation(),
            (this.stickyIId = r),
            (this.stickyPinned = !0),
            this.applyFocus());
        }),
        (this.onRefresh = () => {
          this.applyFocus();
        });
    }
    register(e, t) {
      this.setsByStId.has(e) || this.orderedStIds.push(e),
        this.setsByStId.set(e, t),
        this.initialized || this.init(),
        this.stickyPinned || (this.stickyIId = this.computeDefaultSticky()),
        this.applyFocus();
    }
    unregister(e) {
      if (this.setsByStId.has(e)) {
        if (
          (this.setsByStId.delete(e),
          (this.orderedStIds = this.orderedStIds.filter((t) => t !== e)),
          this.setsByStId.size === 0)
        ) {
          this.destroy();
          return;
        }
        this.stickyPinned
          ? this.stickyIId != null &&
            !this.hasInteraction(this.stickyIId) &&
            ((this.stickyPinned = !1),
            (this.stickyIId = this.computeDefaultSticky()))
          : (this.stickyIId = this.computeDefaultSticky()),
          this.hoverIId != null &&
            !this.hasInteraction(this.hoverIId) &&
            (this.hoverIId = null),
          this.applyFocus();
      }
    }
    destroy() {
      if (this.initialized) {
        let { doc: e } = this.env;
        e.removeEventListener("mouseover", this.onMouseOver, !0),
          e.removeEventListener("mouseout", this.onMouseOut, !0),
          e.removeEventListener("click", this.onClick, !0),
          this.env.win.ScrollTrigger?.removeEventListener?.(
            "refresh",
            this.onRefresh
          ),
          this.styleEl?.remove(),
          (this.styleEl = null);
      }
      this.setsByStId.clear(),
        (this.orderedStIds = []),
        (this.stickyIId = null),
        (this.hoverIId = null),
        (this.stickyPinned = !1),
        (this.initialized = !1);
    }
    init() {
      let { doc: e } = this.env,
        t = e.getElementById(Io);
      if (t?.tagName === "STYLE") this.styleEl = t;
      else {
        let r = e.createElement("style");
        (r.id = Io),
          (r.textContent = Zc),
          (e.head || e.documentElement).appendChild(r),
          (this.styleEl = r);
      }
      e.addEventListener("mouseover", this.onMouseOver, !0),
        e.addEventListener("mouseout", this.onMouseOut, !0),
        e.addEventListener("click", this.onClick, !0),
        this.env.win.ScrollTrigger?.addEventListener?.(
          "refresh",
          this.onRefresh
        ),
        (this.initialized = !0);
    }
    get focusedIId() {
      return this.hoverIId ?? this.stickyIId;
    }
    hasInteraction(e) {
      for (let t of this.setsByStId.values()) if (t === e) return !0;
      return !1;
    }
    computeDefaultSticky() {
      let e = this.env.win.__wf_ix3_marker_focus;
      if (e != null && this.hasInteraction(e)) return e;
      let t = this.orderedStIds[0];
      return t != null ? this.setsByStId.get(t) ?? null : null;
    }
    reapplyFocus() {
      this.applyFocus();
    }
    applyFocus() {
      if (!this.initialized) return;
      let e = this.focusedIId,
        t = this.env.doc.querySelectorAll(Xc);
      for (let r of Array.from(t)) {
        let s = Co(r),
          o = s != null ? this.setsByStId.get(s) : void 0;
        r.classList.toggle(xo, o != null),
          r.classList.toggle(Po, o != null && o === e);
      }
    }
    interactionForTarget(e) {
      if (!(e instanceof Element)) return null;
      let t = Co(e);
      return t == null ? null : this.setsByStId.get(t) ?? null;
    }
    onMouseOver;
    onMouseOut;
    onClick;
    onRefresh;
  };
});
var _n = O((An) => {
  "use strict";
  Object.defineProperty(An, "__esModule", { value: !0 });
  function Qc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Qc(An, {
    createSharedOutOfViewReset: function () {
      return eu;
    },
    setupOutOfViewReset: function () {
      return Jc;
    },
  });
  function Jc(n, e, t, r, s) {
    let o = n.outOfViewReset;
    if (!o || o === "none") return;
    let i = t.IntersectionObserver;
    if (!i) return;
    let a = n.horizontal || !1,
      l = null,
      c = new i((u) => {
        for (let f of u) {
          let d = f.boundingClientRect,
            p = a ? d.left : d.top,
            h = l;
          (l = p),
            !f.isIntersecting &&
              (Fo(d, a, t) ||
                (r.totalProgress() === 0 && r.paused()) ||
                (Lo(o, p, h) && r.pause(0)));
        }
      });
    c.observe(e), s(() => c.disconnect());
  }
  function Fo(n, e, t) {
    return e
      ? n.right > 0 && n.left < t.innerWidth
      : n.bottom > 0 && n.top < t.innerHeight;
  }
  function Lo(n, e, t) {
    if (n === "both") return !0;
    if (t === null) return !1;
    let r = e > t,
      s = e < t;
    return (n === "scrollingDown" && s) || (n === "scrollingUp" && r);
  }
  function eu(n, e, t) {
    let r = n.outOfViewReset;
    if (!r || r === "none") return null;
    let s = e.IntersectionObserver;
    if (!s) return null;
    let o = n.horizontal || !1,
      i = new Map(),
      a = new s((l) => {
        for (let c of l) {
          let u = c.target,
            f = i.get(u);
          if (!f) continue;
          let d = c.boundingClientRect,
            p = o ? d.left : d.top,
            h = f.lastPos;
          if (((f.lastPos = p), c.isIntersecting)) {
            f.crossAxisClipped = !1;
            continue;
          }
          let g = Fo(d, o, e);
          if (((f.crossAxisClipped = g), g)) {
            !f.timeline.paused() &&
              No(u, f.timeline) &&
              (f.timeline.reversed() === !0
                ? f.timeline.progress() > 0 && f.timeline.progress(0)
                : f.timeline.progress() < 1 && f.timeline.progress(1));
            continue;
          }
          Lo(r, p, h) &&
            (t(u),
            !(f.timeline.totalProgress() === 0 && f.timeline.paused()) &&
              f.timeline.pause(0));
        }
      });
    return {
      observe: (l, c) => {
        i.set(l, { timeline: c, lastPos: null, crossAxisClipped: !1 }),
          a.observe(l);
      },
      unobserve: (l) => {
        a.unobserve(l), i.delete(l), i.size === 0 && a.disconnect();
      },
      isCrossAxisClipped: (l) => {
        let c = i.get(l);
        return c?.crossAxisClipped === !0 && No(l, c.timeline);
      },
    };
  }
  function No(n, e) {
    for (let t of e.getChildren(!0, !0, !1))
      for (let r of t.targets()) {
        let s = r;
        if (s?.nodeType !== 1 || !n.contains(s)) return !1;
      }
    return !0;
  }
});
var Do = O((Rn) => {
  "use strict";
  Object.defineProperty(Rn, "__esModule", { value: !0 });
  Object.defineProperty(Rn, "wireScrollDirection", {
    enumerable: !0,
    get: function () {
      return tu;
    },
  });
  function tu(n, e, t, r, s, o = !1) {
    r && (r.pause(), r.revert({ kill: !1 }), r.clear());
    let i = (d, p) => {
        p.pause(), p.clear(), !d.isActive() && (s?.(d), d.play(0));
      },
      a = {
        down: () => {
          if (r) return i(t, r);
          o && t.progress() === 0 && t.invalidate(), t.play();
        },
        up: () => (r ? i(r, t) : t.reverse()),
      },
      l = null,
      c = (d) => {
        d !== l && ((l = d), a[d]());
      },
      u = () => c("down"),
      f = () => c("up");
    if (((n.onEnter = u), e.directionEdgesOnly)) {
      n.onEnterBack = f;
      return;
    }
    (n.onLeave = u),
      (n.onEnterBack = f),
      (n.onLeaveBack = f),
      (n.onUpdate = (d) => c(d.direction > 0 ? "down" : "up"));
  }
});
var Mn = O((In) => {
  "use strict";
  Object.defineProperty(In, "__esModule", { value: !0 });
  function nu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  nu(In, {
    createToggleActionHandlers: function () {
      return ru;
    },
    makeScrollActionHandler: function () {
      return De;
    },
  });
  function De(n, e) {
    let { timeline: t, hasVolatileValues: r } = e;
    return () => {
      if (n !== void 0)
        switch (n) {
          case "play":
            r && t.progress() === 0 && t.invalidate(), t.play();
            break;
          case "pause":
            t.pause();
            break;
          case "resume":
            r && t.progress() === 0 && t.invalidate(), t.resume();
            break;
          case "reverse":
            t.reverse();
            break;
          case "restart":
            r && t.invalidate(), t.restart();
            break;
          case "reset":
            t.pause(0);
            break;
          case "complete":
            r && t.progress() === 0 && t.invalidate(), t.progress(1);
            break;
          case "none":
            break;
          default: {
            let s = n;
            break;
          }
        }
    };
  }
  function ru(n, e) {
    let [t, r, s, o] = n,
      i = {};
    return (
      t !== "none" && (i.onEnter = De(t, e)),
      r !== "none" && (i.onLeave = De(r, e)),
      s !== "none" && (i.onEnterBack = De(s, e)),
      o !== "none" && (i.onLeaveBack = De(o, e)),
      i
    );
  }
});
var Vo = O((Pn) => {
  "use strict";
  Object.defineProperty(Pn, "__esModule", { value: !0 });
  function su(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  su(Pn, {
    buildGSAPConfig: function () {
      return fu;
    },
    composeScrollPosition: function () {
      return Cn;
    },
    hasBatchStagger: function () {
      return lu;
    },
  });
  var Be = ee(),
    ou = _n(),
    iu = Do(),
    au = Mn();
  function lu(n) {
    return n
      ? ((0, Be.toSeconds)(n.amount) ?? 0) > 0 ||
          ((0, Be.toSeconds)(n.each) ?? 0) > 0
      : !1;
  }
  function cu(n) {
    let e = parseFloat(n.getComputedStyle(n.document.documentElement).fontSize);
    return {
      vh: n.innerHeight / 100,
      vw: n.innerWidth / 100,
      rem: e || Be.DEFAULT_ROOT_FONT_SIZE_PX,
    };
  }
  function Cn(n, e, t) {
    let r = (s) => (e ? `clamp(${s})` : s);
    return (0, Be.hasResolvableScrollUnit)(n)
      ? () => r((0, Be.resolveScrollUnits)(n, cu(t)))
      : r(n);
  }
  function Bo(n, e, t) {
    return t ? `clamp(${n})` : n || e;
  }
  function uu(n, e, t, r) {
    let s = {},
      o = (i) =>
        i && (i === document.body || (!r && i.parentElement === document.body));
    if (n.pin !== void 0) {
      if (typeof n.pin == "boolean") n.pin && !o(e) && (s.pin = n.pin);
      else {
        let i = t(n.pin, { triggerElement: e });
        i.length > 0 && !o(i[0]) && (s.pin = i[0]);
      }
      r &&
        s.pin !== void 0 &&
        ((s.anticipatePin = 0),
        (s.pinReparent = !1),
        (s.pinSpacing = n.pinSpacing !== !1));
    }
    if (n.endTrigger) {
      let i = t(n.endTrigger, { triggerElement: e });
      i.length > 0 && (s.endTrigger = i[0]);
    }
    if (n.scroller) {
      let i = t(n.scroller, { triggerElement: e });
      i.length > 0 ? (s.scroller = i[0]) : (s.scroller = window);
    }
    return s;
  }
  function fu(n, e, t, r, s, o = !1, i, a, l, c) {
    let u = n.split === !0,
      f = uu(n, e, s, u),
      d = [
        n.enter || "none",
        n.leave || "none",
        n.enterBack || "none",
        n.leaveBack || "none",
      ],
      p = {
        trigger: e,
        markers: n.showMarkers ?? !1,
        start: u
          ? Cn(n.start || "top bottom", n.clamp, i)
          : Bo(n.start, "top bottom", n.clamp),
        end: u
          ? Cn(n.end || "bottom top", n.clamp, i)
          : Bo(n.end, "bottom top", n.clamp),
        scrub: n.scrub ?? !1,
        horizontal: n.horizontal || !1,
        toggleActions: d.join(" "),
        id: t,
        ...f,
      };
    if (p.scrub !== !1) p.animation = r;
    else {
      if (u && n.scrollDirection)
        return (0, iu.wireScrollDirection)(p, n, r, l, c, o), p;
      let h = { timeline: r, hasVolatileValues: o },
        g = (0, au.createToggleActionHandlers)(d, h);
      Object.assign(p, g), u && (0, ou.setupOutOfViewReset)(n, e, i, r, a);
    }
    return p;
  }
});
var Go = O((Nn) => {
  "use strict";
  Object.defineProperty(Nn, "__esModule", { value: !0 });
  Object.defineProperty(Nn, "ScrollController", {
    enumerable: !0,
    get: function () {
      return kn;
    },
  });
  var du = ee(),
    pu = ko(),
    hu = yn(),
    gu = En(),
    ft = Vo(),
    mu = _n(),
    yu = Mn(),
    kn = class {
      env;
      host;
      scrollTriggers;
      scrollTriggerDisposers;
      markerFocus;
      constructor(e, t) {
        (this.env = e),
          (this.host = t),
          (this.scrollTriggers = new Map()),
          (this.scrollTriggerDisposers = new Map()),
          (this.markerFocus = new pu.ScrollMarkerFocusManager(e));
      }
      setupScrollControl(e, t, r, s, o) {
        if (typeof this.env.win.ScrollTrigger > "u") {
          console.warn("ScrollTrigger plugin is not available.");
          return;
        }
        let i = jo(e, t, s);
        this.cleanupScrollTrigger(i);
        let a = this.host.getTimeline(e, s);
        if (!a) {
          console.warn(`Timeline ${e} not found`);
          return;
        }
        let l = o ? this.host.getTimeline(o, s) ?? void 0 : void 0,
          c = (0, ft.buildGSAPConfig)(
            r,
            s,
            i,
            a,
            this.host.resolveFn,
            this.host.getSubOrNull(e, s)?.hasVolatileValues ?? !1,
            this.env.win,
            (f) => this.addDisposer(i, f),
            l,
            l && ((f) => this.host.rebuildGroup(f === l ? o : e, s))
          ),
          u =
            c.animation === void 0 &&
            r.split === !0 &&
            r.scrollDirection !== void 0;
        u && o && l && this.host.drainGroup(o, s);
        try {
          let f = this.env.win.ScrollTrigger.create(c);
          this.scrollTriggers.set(i, f),
            r.showMarkers && this.markerFocus.register(i, t);
          let d = this.host.getSub(e, s);
          xn(d, i);
          let p = o ? this.host.getSubOrNull(o, s) : void 0;
          p &&
            (xn(p, i),
            p.scrollTriggerConfigs || (p.scrollTriggerConfigs = new Map())),
            d.scrollTriggerConfigs || (d.scrollTriggerConfigs = new Map()),
            u || d.scrollTriggerConfigs.set(i, c);
        } catch (f) {
          console.error("Failed to create ScrollTrigger:", f),
            this.cleanupScrollTrigger(i);
        }
      }
      setupScrollDirectionPair(e, t, r, s, o) {
        let a = this.host.timelineDefs.get(this.host.resolveAlias(t))?.actions
          ?.length
          ? t
          : void 0;
        for (let l of o) this.setupScrollControl(e, r, s, l, a);
      }
      setupScrollControls(e, t, r, s) {
        if (
          (this.maybePromoteReanchoredTimeline(e, r, s),
          this.shouldBatchScrollReveal(e, r, s))
        )
          this.setupScrollBatch(e, t, r, s);
        else for (let o of s) this.setupScrollControl(e, t, r, o);
      }
      shouldBatchScrollReveal(e, t, r) {
        return (
          this.passesScrollBatchGuards(t, r) &&
          this.host.isDynamic(this.host.resolveAlias(e))
        );
      }
      passesScrollBatchGuards(e, t) {
        return !(
          (e.scrub ?? !1) !== !1 ||
          !(0, ft.hasBatchStagger)(e.stagger) ||
          t.length <= 1 ||
          typeof this.env.win.ScrollTrigger?.batch != "function" ||
          e.pin ||
          e.endTrigger ||
          e.scroller ||
          e.scrollDirection
        );
      }
      maybePromoteReanchoredTimeline(e, t, r) {
        let s = this.host.resolveAlias(e);
        this.host.isReanchored(s) ||
          this.host.isDynamic(s) ||
          (this.passesScrollBatchGuards(t, r) &&
            (this.host.getInteractionForTimeline(s)?.triggers?.length !== 1 ||
              this.host.hasAlias(s) ||
              this.host.hasForeignOwner(s) ||
              (this.isReanchorEligible(s, r) &&
                this.host.promoteToPerElement(s))));
      }
      isReanchorEligible(e, t) {
        let r = this.host.timelineDefs.get(e);
        if (!r?.actions?.length) return !1;
        let s = this.host.getInteractionForTimeline(e),
          o = new Map(),
          i = new Set(t),
          a = !1;
        for (let l of r.actions) {
          if (!l.targets?.length || (0, hu.getSplitTextType)(l) === "lines")
            return !1;
          for (let c of l.targets) {
            a = !0;
            let u = c.length === 3 ? c[2] : void 0;
            if (
              !u ||
              u.relationship === "none" ||
              !u.filterBy ||
              u.firstMatchOnly
            )
              return !1;
            let f = this.host.resolveFn(u.filterBy, {}, s);
            if (!f.length) return !1;
            let d = new Set(f);
            if (d.size !== i.size || !t.every((p) => d.has(p))) return !1;
            for (let p of t) {
              let h = this.host.resolveFn(
                c,
                { triggerElement: p, anchorFilterToTrigger: !0 },
                s
              );
              for (let g of h) {
                let y = o.get(g);
                if (y && y !== p) return !1;
                o.set(g, p);
              }
            }
          }
        }
        return a;
      }
      setupScrollBatch(e, t, r, s) {
        let o = this.env.win,
          i = o.ScrollTrigger,
          a = o.gsap;
        if (typeof i?.batch != "function" || !a) {
          for (let v of s) this.setupScrollControl(e, t, r, v);
          return;
        }
        i.register?.(a);
        let l = (0, gu.getStaggerConfig)(
            r.stagger,
            (0, du.buildEaseContextId)(`${e}-${t}-batch`, "stagger")
          ),
          [c, u, f, d] = [
            r.enter || "none",
            r.leave || "none",
            r.enterBack || "none",
            r.leaveBack || "none",
          ],
          p = new Map(),
          h = new Map(),
          g = (v) => {
            h.get(v)?.kill(), h.delete(v);
          },
          y = new Set(),
          E = (0, mu.createSharedOutOfViewReset)(r, o, g);
        for (let v of s) {
          let T = jo(e, t, v);
          this.cleanupScrollTrigger(T), p.set(v, T);
          let _ = this.host.getTimeline(e, v);
          this.addDisposer(T, () => {
            y.add(v), g(v);
          }),
            _ &&
              E &&
              (E.observe(v, _), this.addDisposer(T, () => E.unobserve(v)));
        }
        let w = (v, T) => {
            if (T === "none") return;
            let _ = this.host.getTimeline(e, v);
            if (!_) return;
            let S = this.host.getSubOrNull(e, v)?.hasVolatileValues ?? !1;
            (0, yu.makeScrollActionHandler)(T, {
              timeline: _,
              hasVolatileValues: S,
            })();
          },
          m = (v) => {
            let T = this.host.getTimeline(e, v);
            !T ||
              T.progress() >= 1 ||
              (T.reversed() && T.reversed(!1), w(v, "complete"));
          },
          A = (v, T, _ = !1) => {
            let S = v.filter((R) => !y.has(R));
            if (S.length === 0) return;
            let I = [],
              x = 1 / 0,
              P = l ? a.utils.distribute(l) : void 0;
            S.forEach((R, k) => {
              if ((g(R), T === "none")) return;
              if (_ && T === "play" && E?.isCrossAxisClipped(R)) {
                m(R);
                return;
              }
              let F = P ? P(k, R, S) : 0;
              F < x && (x = F), I.push({ el: R, offset: F });
            });
            for (let { el: R, offset: k } of I) {
              let F = k - x;
              if (F > 0) {
                let G = a.delayedCall(F, () => {
                  if ((h.delete(R), T === "play" && E?.isCrossAxisClipped(R))) {
                    m(R);
                    return;
                  }
                  w(R, T);
                });
                h.set(R, G);
              } else w(R, T);
            }
          },
          b = {
            start: (0, ft.composeScrollPosition)(
              r.start || "top bottom",
              r.clamp,
              this.env.win
            ),
            end: (0, ft.composeScrollPosition)(
              r.end || "bottom top",
              r.clamp,
              this.env.win
            ),
            horizontal: r.horizontal || !1,
            onEnter: (v) => A(v, c, !0),
          };
        f !== "none" && (b.onEnterBack = (v) => A(v, f, !0)),
          u !== "none" && (b.onLeave = (v) => A(v, u)),
          d !== "none" && (b.onLeaveBack = (v) => A(v, d));
        try {
          let v = i.batch(s, b);
          for (let S of v) {
            let I = S.trigger;
            if (!I) continue;
            let x = p.get(I);
            if (!x) continue;
            this.scrollTriggers.set(x, S);
            let P = this.host.getSub(e, I);
            P && xn(P, x);
          }
          let T = s[0],
            _ = T ? p.get(T) : void 0;
          if (r.showMarkers && T && _) {
            let S = `${_}_markers`,
              I = {
                trigger: T,
                start: b.start,
                end: b.end,
                horizontal: b.horizontal,
                markers: !0,
                id: S,
              },
              x = i.create(I);
            this.scrollTriggers.set(S, x),
              this.markerFocus.register(S, t),
              this.addDisposer(_, () => {
                x.kill(),
                  this.scrollTriggers.delete(S),
                  this.markerFocus.unregister(S);
              });
          }
        } catch (v) {
          console.error("Failed to create ScrollTrigger batch:", v);
          for (let T of p.values()) this.cleanupScrollTrigger(T);
        }
      }
      rebindScrollTriggers(e) {
        if (!(!e.scrollTriggerIds || !e.scrollTriggerConfigs))
          for (let t of e.scrollTriggerIds) {
            let r = this.scrollTriggers.get(t),
              s = e.scrollTriggerConfigs.get(t);
            if (r && s) {
              let o = { ...s, animation: e.timeline };
              if ((r.kill(), this.env.win.ScrollTrigger)) {
                let i = this.env.win.ScrollTrigger.create(o);
                this.scrollTriggers.set(t, i), this.markerFocus.reapplyFocus();
              }
            }
          }
      }
      cleanupSubScrollTriggers(e) {
        if (e.scrollTriggerIds) {
          for (let t of e.scrollTriggerIds) this.cleanupScrollTrigger(t);
          e.scrollTriggerIds.clear();
        }
        e.scrollTriggerConfigs?.clear();
      }
      cleanupScrollTrigger(e) {
        this.markerFocus.unregister(e);
        let t = this.scrollTriggers.get(e);
        t && (t.kill(), this.scrollTriggers.delete(e));
        let r = this.scrollTriggerDisposers.get(e);
        if (r) {
          for (let s of r) s();
          this.scrollTriggerDisposers.delete(e);
        }
      }
      addDisposer(e, t) {
        let r = this.scrollTriggerDisposers.get(e);
        r || ((r = new Set()), this.scrollTriggerDisposers.set(e, r)), r.add(t);
      }
      getScrollTriggers() {
        return this.scrollTriggers;
      }
      releaseScrollTrigger(e) {
        this.cleanupScrollTrigger(e);
      }
      destroyMarkerFocus() {
        this.markerFocus.destroy();
      }
    };
  function jo(n, e, t) {
    return `st_${n}_${e}_${t.id || window.crypto.randomUUID().slice(0, 8)}`;
  }
  function xn(n, e) {
    n.scrollTriggerIds || (n.scrollTriggerIds = new Set()),
      n.scrollTriggerIds.add(e);
  }
});
var $o = O((Dn) => {
  "use strict";
  Object.defineProperty(Dn, "__esModule", { value: !0 });
  Object.defineProperty(Dn, "AnimationCoordinator", {
    enumerable: !0,
    get: function () {
      return Ln;
    },
  });
  var dt = Y(),
    Ae = ee(),
    vu = fo(),
    Tu = po(),
    Fn = Eo(),
    Uo = yn(),
    Ve = En(),
    bu = Go(),
    Ln = class {
      timelineDefs;
      getHandler;
      getTargetResolver;
      resolveFn;
      getInteractionForTimeline;
      getInteractionsForTimelines;
      env;
      subs;
      dynamicFlags;
      reanchoredTimelines;
      causeTriggers;
      cleanupFns;
      scroll;
      aliases;
      flipEaseBySource;
      pluginRuntimeBridge;
      animation;
      sharedGroups;
      rewindSharedRefire;
      timelineGroupsEnabled;
      resolveAlias(e, t = 0) {
        if (t > Fn.MAX_ALIAS_DEPTH)
          return (
            console.warn(
              `IX3: Timeline alias chain exceeded max depth for "${e}". Possible circular reference.`
            ),
            e
          );
        let r = this.aliases.get(e);
        return r ? this.resolveAlias(r, t + 1) : e;
      }
      reuseAliasIndex;
      invalidateReuseAliasIndex() {
        this.reuseAliasIndex = null;
      }
      buildReuseAliasIndex() {
        let e = new Map();
        for (let [t] of this.timelineDefs) {
          let r = this.resolveSourceTimelineId(t);
          if (r === t) continue;
          let s = e.get(r);
          s ? s.push(t) : e.set(r, [t]);
        }
        return e;
      }
      getReuseAliasesForSource(e) {
        return (
          this.reuseAliasIndex ||
            (this.reuseAliasIndex = this.buildReuseAliasIndex()),
          this.reuseAliasIndex.get(e) ?? []
        );
      }
      hasAlias(e) {
        if (this.getReuseAliasesForSource(e).length > 0) return !0;
        for (let t of this.aliases.values()) if (t === e) return !0;
        return !1;
      }
      shouldFlipEaseForTimeline(e) {
        return (0, Fn.shouldFlipEaseForTimeline)(
          this.timelineDefs,
          this.getInteractionForTimeline,
          e,
          {
            getInteractionsForTimelines: this.getInteractionsForTimelines,
            getReuseAliasesForSource: (t) => this.getReuseAliasesForSource(t),
            timelineGroupsEnabled: this.timelineGroupsEnabled,
          }
        );
      }
      recomputeFlipEaseForSource(e) {
        let t = this.resolveSourceTimelineId(e),
          r = this.subs.get(t);
        if (!r) return;
        let s = this.shouldFlipEaseForTimeline(t);
        if (s !== this.flipEaseBySource.get(t)) {
          this.flipEaseBySource.set(t, s);
          for (let o of r.values()) this.scheduleRebuild(o);
        }
      }
      resolveSourceTimelineId(e) {
        return (0, Fn.resolveSourceTimelineId)(this.timelineDefs, e);
      }
      splitText;
      timelineTargetsCache;
      constructor(e, t, r, s, o, i, a) {
        (this.timelineDefs = e),
          (this.getHandler = t),
          (this.getTargetResolver = r),
          (this.resolveFn = s),
          (this.getInteractionForTimeline = o),
          (this.getInteractionsForTimelines = i),
          (this.env = a),
          (this.subs = new Map()),
          (this.dynamicFlags = new Map()),
          (this.reanchoredTimelines = new Set()),
          (this.causeTriggers = new Map()),
          (this.cleanupFns = new Map()),
          (this.aliases = new Map()),
          (this.flipEaseBySource = new Map()),
          (this.pluginRuntimeBridge = new vu.PluginRuntimeBridge()),
          (this.sharedGroups = new Map()),
          (this.rewindSharedRefire = !1),
          (this.timelineGroupsEnabled = !1),
          (this.reuseAliasIndex = null),
          (this.splitText = new Uo.SplitTextManager(
            (l, c, u, f) => this.collectTargets(l, c, u, f),
            (l, c) => {
              l.rebuildState !== "init"
                ? this.scheduleRebuildForElement(c)
                : (l.rebuildState = "idle");
            },
            (l) => this.scheduleRebuildForElement(l),
            (l) => {
              l.rebuildState = "idle";
            }
          )),
          (this.timelineTargetsCache = new WeakMap()),
          (this.animation = new Tu.RuntimeMotionDriver(a)),
          (this.scroll = new bu.ScrollController(a, {
            timelineDefs: e,
            resolveFn: s,
            getInteractionForTimeline: o,
            resolveAlias: (l) => this.resolveAlias(l),
            getTimeline: (l, c) => this.getTimeline(l, c),
            getSub: (l, c) => this.getSub(l, c),
            getSubOrNull: (l, c) => this.getSubOrNull(l, c),
            isDynamic: (l) => !!this.dynamicFlags.get(l),
            isReanchored: (l) => this.reanchoredTimelines.has(l),
            hasAlias: (l) => this.hasAlias(l),
            hasForeignOwner: (l) =>
              this.getInteractionsForTimelines(new Set([l])).length > 1,
            promoteToPerElement: (l) => this.promoteToPerElement(l),
            rebuildGroup: (l, c) => this.rebuildScrollDirectionGroup(l, c),
            drainGroup: (l, c) => te(this.getSubOrNull(l, c)?.cleanupFns),
          }));
      }
      registerSharedGroup(e, t) {
        if (t.length < 2) return;
        let r = new Set();
        for (let o of t) {
          let i = this.sharedGroups.get(o);
          i && r.add(i);
        }
        if (r.size > 0) {
          for (let o of r) this.dissolveSharedGroup(o);
          return;
        }
        let s = { primary: e };
        for (let o of t)
          this.sharedGroups.set(o, s), o !== e && this.aliases.set(o, e);
      }
      dissolveSharedGroupForTimeline(e) {
        let t = this.sharedGroups.get(e);
        return t ? this.dissolveSharedGroup(t) : [];
      }
      dissolveSharedGroup(e) {
        let t = [];
        for (let [l, c] of this.sharedGroups) c === e && t.push(l);
        let r = t.indexOf(e.primary);
        r >= 0 && t.push(...t.splice(r, 1));
        let s = [],
          o = this.subs.get(e.primary);
        if (o)
          for (let [l, c] of o) {
            let u = c.timeline.totalProgress(),
              f = c.timeline.paused() === !0,
              d = u <= 0 && f,
              p = c.timeline.timeScale();
            s.push({
              id: c.timelineId,
              el: l,
              progress: u,
              reversed: c.timeline.reversed() === !0,
              paused: f,
              timeScale: typeof p == "number" && p !== 0 ? Math.abs(p) : 1,
              controlTypes: c.controlTypes,
              owningInteraction: c.owningInteraction,
              dormant: d,
            });
          }
        for (let l of t)
          this.sharedGroups.delete(l),
            this.aliases.get(l) === e.primary && this.aliases.delete(l);
        let i = [];
        for (let l of t) {
          let c = this.getInteractionForTimeline(l);
          c &&
            (this.createTimeline(l, c, { revertGlobalSplits: !1 }), i.push(l));
        }
        for (let { el: l, controlTypes: c, owningInteraction: u } of s)
          if (l != null)
            for (let f of t) {
              if (this.dynamicFlags.get(f) !== !0) continue;
              let d = this.ensureSubs(f);
              if (d.has(l)) continue;
              let p = this.buildSubTimeline(f, l, c, u);
              p && d.set(l, p);
            }
        let a = new Set(i);
        for (let {
          id: l,
          el: c,
          progress: u,
          reversed: f,
          paused: d,
          timeScale: p,
          dormant: h,
        } of s) {
          if (h) continue;
          let g = this.getSubOrNull(l, c)?.timeline;
          g &&
            (g.timeScale(p),
            g.reversed(f),
            g.totalProgress(u),
            a.add(l),
            !d && (f ? g.reverse() : g.play()));
        }
        return [...a];
      }
      createTimeline(e, t, r) {
        let s = this.timelineDefs.get(e);
        if (this.aliases.has(e)) return;
        let o = this.sharedGroups.get(e);
        if (
          (this.destroy(e, {
            reassignSharedPrimary: !1,
            revertGlobalSplits: r?.revertGlobalSplits,
          }),
          !s)
        )
          return;
        if ((o && this.sharedGroups.set(e, o), s.reuse?.sourceTimelineId)) {
          this.aliases.set(e, s.reuse.sourceTimelineId),
            this.recomputeFlipEaseForSource(s.reuse.sourceTimelineId);
          return;
        }
        let i = this.isDynamicTimeline(s, t);
        this.dynamicFlags.set(e, i), this.reanchoredTimelines.delete(e);
        let a = new Set(),
          l = new Set(),
          c = new Map();
        for (let u of t.triggers) {
          let [, f, d] = u;
          if (d)
            for (let h of this.resolveFn(d, { trigger: u }, t))
              l.add(h), c.has(h) || c.set(h, u);
          let p = f?.controlType;
          p && (0, Ae.isValidControlType)(p) && a.add(p),
            p === dt.TimelineControlType.LOAD && !c.has(null) && c.set(null, u);
        }
        if ((this.causeTriggers.set(e, c), !l.size || !i)) {
          let u = this.buildSubTimeline(e, null, a, t);
          u && this.ensureSubs(e).set(null, u);
        }
        if (l.size) {
          let u = this.ensureSubs(e);
          for (let f of l)
            if (!u.has(f)) {
              let d = i
                ? this.buildSubTimeline(e, f, a, t)
                : this.getSub(e, null);
              i && d && u.set(f, d);
            }
        }
        this.flipEaseBySource.set(e, this.shouldFlipEaseForTimeline(e));
      }
      getTimeline(e, t) {
        return this.prepareIfShared(e, t), this.getSub(e, t)?.timeline;
      }
      prepareIfShared(e, t, r = !1) {
        let s = this.sharedGroups.get(e);
        if (!s) {
          let f = this.resolveSourceTimelineId(e);
          f !== e && this.sharedGroups.has(f) && this.prepareIfShared(f, t, r);
          return;
        }
        let o = this.timelineDefs.get(e);
        if (!o) return;
        let i = this.getSub(s.primary, t);
        if (!i) return;
        if (i.timelineId === e) {
          r && this.rewindExhausted(i);
          return;
        }
        let a = i.timelineId;
        te(i.cleanupFns);
        for (let f of [...(i.swapCleanupFns ?? [])].reverse()) f();
        i.swapCleanupFns?.clear(), te(this.cleanupFns.get(a));
        let l = i.timeline;
        l.clear(), l.progress(0);
        let c = (0, Ve.convertToGsapDefaults)(o.settings || {}, e);
        l.repeat(typeof c.repeat == "number" ? c.repeat : 0),
          l.repeatDelay(typeof c.repeatDelay == "number" ? c.repeatDelay : 0),
          l.yoyo(c.yoyo === !0);
        let u = typeof c.delay == "number" ? c.delay : 0;
        if (
          (l.delay(u),
          l.reversed(!!o.playInReverse),
          l.timeScale(
            typeof o.settings?.speed == "number" ? o.settings.speed : 1
          ),
          u > 0 && this.rewindSharedRefire && l.totalTime(-u),
          (i.timelineDef = { ...o, actions: o.actions || [] }),
          (i.timelineId = e),
          this.timelineTargetsCache.delete(i),
          this.env.win.SplitText && o.actions?.length)
        ) {
          let f = i.rebuildState;
          (i.rebuildState = "building"),
            this.splitText.splitForActions(
              o.actions,
              t,
              e,
              i,
              this.env.win.SplitText,
              i.owningInteraction
            );
          let d = i.rebuildState;
          i.rebuildState = d === "rebuild_pending" || d === "idle" ? "idle" : f;
        }
        (i.hasVolatileValues = !1), this.buildTimeline(i);
      }
      rewindExhausted(e) {
        if (!(e.timeline.totalProgress() >= 1)) return;
        e.hasVolatileValues && e.timeline.invalidate(),
          e.timeline.totalProgress(0);
        let r = e.timeline.delay();
        r > 0 && e.timeline.totalTime(-r);
      }
      getAllTimelines(e) {
        let t = this.resolveAlias(e),
          r = this.subs.get(t);
        if (!r) return [];
        for (let s of r.keys()) this.prepareIfShared(e, s);
        return Array.from(r.values()).map((s) => s.timeline);
      }
      invalidateVolatileFromStart(e, t) {
        let r = t != null ? t === 0 : e.timeline.progress() === 0;
        e.hasVolatileValues && r && e.timeline.invalidate();
      }
      setTimelineGroups(e) {
        this.timelineGroupsEnabled = e;
      }
      setRewindSharedRefire(e) {
        this.rewindSharedRefire = e;
      }
      play(e, t, r) {
        this.prepareIfShared(e, t, r == null && this.rewindSharedRefire);
        let s = this.getSub(e, t);
        s &&
          (this.refreshLineSplits(s),
          this.invalidateVolatileFromStart(s, r),
          s.timeline.play(r ?? void 0));
      }
      pause(e, t, r) {
        this.prepareIfShared(e, t);
        let s = this.getSubOrNull(e, t);
        s && (r !== void 0 ? s.timeline.pause(r) : s.timeline.pause());
      }
      resume(e, t, r) {
        this.prepareIfShared(e, t);
        let s = this.getSubOrNull(e, t);
        s &&
          (this.refreshLineSplits(s),
          this.invalidateVolatileFromStart(s, r),
          s.timeline.resume(r));
      }
      reverse(e, t, r) {
        this.prepareIfShared(e, t);
        let s = this.getSub(e, t);
        s && (this.refreshLineSplits(s), s.timeline.reverse(r));
      }
      restart(e, t) {
        this.prepareIfShared(e, t);
        let r = this.getSub(e, t);
        r &&
          (this.refreshLineSplits(r),
          r.hasVolatileValues && r.timeline.invalidate(),
          r.timeline.restart());
      }
      getTriggerMetadata(e) {
        return this.timelineDefs.get(e)?.triggerMetadata ?? null;
      }
      fireInterval(e, t, r = {}) {
        this.pluginRuntimeBridge.fireInterval({
          coordinator: this,
          timelineId: e,
          element: t,
          options: r,
          animation: this.animation,
        });
      }
      registerIntervalHandler(e, t) {
        this.pluginRuntimeBridge.registerIntervalHandler(e, t);
      }
      getOneShotTimelineContext(e) {
        let t = this.getTimelineDef(e);
        return t
          ? {
              timelineId: e,
              timelineDef: t,
              getFirstActionTargets: (r) => this.getFirstActionTargets(e, r),
              getActionTweenConfig: (r, s, o) =>
                this.getActionTweenConfig(r, s, o),
              buildActionTimeline: (r) => this.buildOneShotActionTimeline(e, r),
              registerCleanup: (r) => this.registerCleanup(e, r),
            }
          : null;
      }
      getTimelineDef(e) {
        return this.timelineDefs.get(this.resolveAlias(e));
      }
      getFirstActionTargets(e, t) {
        let s = this.getTimelineDef(e)?.actions?.[0];
        return s ? this.collectTargets(s, t, e) : [];
      }
      getActionTweenConfig(e, t, r) {
        let s = this.getHandler(t);
        if (!s?.createTweenConfig) return null;
        let o = e.properties[t] || {};
        return s.createTweenConfig(o, r);
      }
      registerCleanup(e, t, r) {
        let s = r === void 0 ? void 0 : this.getSubOrNull(e, r);
        if (s) {
          let i = s.swapCleanupFns ?? new Set();
          return (
            (s.swapCleanupFns = i),
            i.add(t),
            () => {
              i.delete(t);
            }
          );
        }
        let o = this.cleanupFns.get(e) ?? new Set();
        return (
          this.cleanupFns.set(e, o),
          o.add(t),
          () => {
            o.delete(t);
          }
        );
      }
      publishChannel(e, t, r) {
        this.pluginRuntimeBridge.publish(e, t, r);
      }
      subscribeChannel(e, t, r, s) {
        return this.pluginRuntimeBridge.subscribe(e, t, r, s);
      }
      buildOneShotActionTimeline(e, t) {
        let r = this.getTimelineDef(e);
        if (!r?.actions?.length) return null;
        let s = this.animation.timeline();
        if (!s) return null;
        t.beforeTweens?.(s);
        for (let o of r.actions)
          this.buildTweensForAction(
            o,
            t.targets,
            s,
            e,
            !1,
            t.varsTransform,
            void 0,
            void 0,
            void 0,
            t.cleanupBucket
          );
        return s;
      }
      togglePlayReverse(e, t) {
        this.prepareIfShared(e, t);
        let r = this.getSub(e, t);
        if (!r) return;
        this.refreshLineSplits(r);
        let s = r.timeline,
          o = s.progress();
        this.invalidateVolatileFromStart(r),
          o === 0
            ? s.play()
            : o === 1
            ? s.reverse()
            : s.reversed()
            ? s.play()
            : s.reverse();
      }
      seek(e, t, r) {
        this.getSubOrNull(e, r)?.timeline.seek(t);
      }
      setTimeScale(e, t, r) {
        this.prepareIfShared(e, r),
          (this.timelineGroupsEnabled
            ? this.getSub(e, r)
            : this.getSubOrNull(e, r)
          )?.timeline.timeScale(t);
      }
      setTotalProgress(e, t, r) {
        let s = this.getSubOrNull(e, r);
        s && (this.refreshLineSplits(s), s.timeline.totalProgress(t));
      }
      setContinuousProgress(e, t, r) {
        this.getSub(e, r)?.timeline.progress(Math.max(0, Math.min(1, t)));
      }
      isPlaying(e, t) {
        return !!this.getSubOrNull(e, t)?.timeline.isActive();
      }
      isPaused(e, t) {
        return !!this.getSubOrNull(e, t)?.timeline.paused();
      }
      destroy(e, t) {
        this.aliases.delete(e);
        let r = this.sharedGroups.get(e);
        if ((t?.reassignSharedPrimary ?? !0) && r && r.primary === e) {
          let a;
          for (let [l, c] of this.sharedGroups)
            if (c === r && l !== e) {
              a = l;
              break;
            }
          if (a) {
            (r.primary = a), this.aliases.delete(a);
            for (let [u, f] of this.sharedGroups)
              f === r && u !== e && u !== a && this.aliases.set(u, a);
            let l = this.timelineDefs.get(a),
              c = this.getInteractionForTimeline(a);
            this.dynamicFlags.set(
              a,
              !!(l && c && this.isDynamicTimeline(l, c))
            );
          }
        }
        let s = r && r.primary !== e ? r.primary : void 0;
        if (s) {
          let a = this.subs.get(s);
          if (a) {
            for (let l of a.values())
              if (l.timelineId === e) {
                for (let c of l.cleanupFns ?? []) c();
                l.cleanupFns?.clear();
                for (let c of [...(l.swapCleanupFns ?? [])].reverse()) c();
                l.swapCleanupFns?.clear(),
                  l.timeline.revert({ kill: !1 }),
                  l.timeline.clear(),
                  (l.rebuildState = l.timeline.data?.splitLines
                    ? "idle"
                    : "init"),
                  this.timelineTargetsCache.delete(l);
              }
          }
        }
        this.pluginRuntimeBridge.destroyTimeline(e);
        let o = this.subs.get(e),
          i = new Set();
        if (o) {
          for (let [, a] of o)
            a.timelineId !== e && i.add(a.timelineId), this.disposeSub(a);
          (t?.revertGlobalSplits ?? !0) && this.splitText.revertAll();
        }
        te(this.cleanupFns.get(e));
        for (let a of i) te(this.cleanupFns.get(a)), this.cleanupFns.delete(a);
        if (
          (this.cleanupFns.delete(e),
          this.subs.delete(e),
          this.dynamicFlags.delete(e),
          this.reanchoredTimelines.delete(e),
          this.causeTriggers.delete(e),
          this.flipEaseBySource.delete(e),
          this.sharedGroups.delete(e),
          (t?.reassignSharedPrimary ?? !0) && r)
        ) {
          let a,
            l = 0;
          for (let [c, u] of this.sharedGroups)
            if (u === r && ((a = c), ++l > 1)) break;
          if (l === 1 && a !== void 0) {
            let c = this.subs.get(a);
            if (c)
              for (let [u, f] of c)
                f.timelineId !== a && this.prepareIfShared(a, u);
            this.sharedGroups.delete(a);
          }
        }
      }
      isDynamicTimeline(e, t) {
        let r = t.triggers.some(
          ([, o]) => o?.controlType !== dt.TimelineControlType.LOAD
        );
        if (t.scope?.type === "component" && r) return !0;
        let s = e.actions;
        if (!s?.length) return !1;
        for (let o of s) {
          for (let i of o.targets ?? []) {
            if (this.getTargetResolver(i)?.isDynamic) return !0;
            if (i.length === 3 && i[2]) {
              let l = i[2];
              if (
                l.filterBy &&
                l.relationship !== "none" &&
                this.getTargetResolver(l.filterBy)?.isDynamic
              )
                return !0;
            }
          }
          if (r) {
            for (let i in o.properties)
              if (this.getHandler(i)?.requiresTriggerElementContext) return !0;
          }
        }
        return !1;
      }
      ensureSubs(e) {
        return (
          this.subs.has(e) || this.subs.set(e, new Map()), this.subs.get(e)
        );
      }
      getSub(e, t) {
        let r = this.resolveAlias(e),
          s = this.ensureSubs(r),
          o = this.dynamicFlags.get(r),
          i = s.get(o ? t : null);
        return (
          i || ((i = this.buildSubTimeline(r, t)), i && s.set(o ? t : null, i)),
          i
        );
      }
      getSubOrNull(e, t) {
        let r = this.resolveAlias(e),
          s = this.dynamicFlags.get(r);
        return this.subs.get(r)?.get(s ? t ?? null : null);
      }
      buildSubTimeline(e, t, r, s) {
        let o = this.timelineDefs.get(e),
          i = o?.actions,
          a = o?.settings,
          l = this.env.win.gsap;
        if (!l) return;
        let c = l.timeline({
            ...(0, Ve.convertToGsapDefaults)(a || {}, e),
            paused: !0,
            reversed: !!o?.playInReverse,
            data: { id: e, triggerEl: t || void 0 },
          }),
          u = o
            ? { ...o, actions: i || [] }
            : { id: e, pageId: "", deleted: !1, actions: [] },
          f = {
            timeline: c,
            timelineId: e,
            elementContext: t,
            timelineDef: u,
            rebuildState: "init",
            controlTypes: r,
            owningInteraction: s,
          };
        return (
          i?.length &&
            (this.env.win.SplitText &&
              this.splitText.splitForActions(
                i,
                t,
                e,
                f,
                this.env.win.SplitText,
                s
              ),
            this.buildTimeline(f),
            this.padTimelineToCanvas(f)),
          f
        );
      }
      padTimelineToCanvas(e) {
        let { canvasDuration: t } = e.timelineDef;
        if (t == null) return;
        let r = e.timeline;
        r.duration() < t && r.to({}, { duration: 0 }, t);
      }
      buildTimeline(e) {
        let t = e.timelineDef,
          r = e.elementContext,
          s = e.timeline,
          o = e.timelineId,
          i = new Map();
        for (let a = 0; a < t.actions.length; a++) {
          let l = t.actions[a];
          if (!l) continue;
          let c = JSON.stringify(l.targets),
            u = !0,
            f = (0, Uo.getSplitTextType)(l),
            d = f === "none" ? c : `${c}_split_${f}`,
            p = (l.tt ?? 0) !== 0;
          for (let m of Object.values(l.properties ?? {})) {
            let A = i.get(d) || new Set();
            i.set(d, A);
            for (let b of Object.keys(m || {}))
              A.has(b) ? p && (u = !1) : A.add(b);
          }
          let h = this.collectTargetGroups(l, r, o, e.owningInteraction),
            g = h.flatMap((m) => m.elements);
          if (!g.length) {
            let m = !1;
            for (let A in l.properties)
              if (this.getHandler(A)?.createCustomTween) {
                m = !0;
                break;
              }
            if (!m) continue;
          }
          let y = this.collectDelegatedTargets(h, g),
            E = y ? y.plain : g,
            w = y ? g : void 0;
          (f !== "none" &&
            E.length > 0 &&
            this.env.win.SplitText &&
            ((E = this.splitText.getSplitElements(E, f)),
            (w = void 0),
            E.length === 0 && !y?.groups.length)) ||
            this.buildTweensForAction(
              l,
              E,
              s,
              o,
              u,
              void 0,
              r,
              t.triggerMetadata?.role,
              e,
              void 0,
              y?.groups,
              w
            );
        }
      }
      collectTargets(e, t, r, s) {
        return this.collectTargetGroups(e, t, r, s).flatMap((o) => o.elements);
      }
      collectTargetGroups(e, t, r, s) {
        let o = [];
        if (!e.targets) return o;
        let i = s ?? this.getInteractionForTimeline(r),
          a = t != null && this.reanchoredTimelines.has(this.resolveAlias(r)),
          l = (
            this.causeTriggers.get(r) ??
            this.causeTriggers.get(this.sharedGroups.get(r)?.primary ?? r)
          )?.get(t);
        for (let c of e.targets ?? []) {
          let u = this.resolveFn(
            c,
            t
              ? { triggerElement: t, anchorFilterToTrigger: a, causeTrigger: l }
              : { causeTrigger: l },
            i
          );
          o.push({ td: c, elements: u });
        }
        return o;
      }
      collectDelegatedTargets(e, t) {
        let r = null,
          s = new Set();
        for (let { td: i, elements: a } of e) {
          let l = this.getTargetResolver(i);
          if (l?.buildTween) {
            r ??= new Map();
            let c = r.get(l);
            c || r.set(l, (c = { resolver: l, targets: [] })),
              c.targets.push(...a);
          } else for (let c of a) s.add(c);
        }
        if (!r) return null;
        let o = new Set();
        for (let i of r.values()) for (let a of i.targets) o.add(a);
        return {
          groups: [...r.values()].filter((i) => i.targets.length > 0),
          plain: t.filter((i) => s.has(i) || !o.has(i)),
        };
      }
      buildTweensForAction(e, t, r, s, o, i, a, l, c, u, f, d) {
        let p = this.shouldFlipEaseForTimeline(s),
          h = c?.timelineDef.canvasDuration != null;
        for (let g in e.properties) {
          let y = g,
            E = this.getHandler(y);
          if (!E) continue;
          let w = e.properties[y] || {};
          try {
            let m = e.timing?.position;
            if (
              ((m =
                typeof m == "string" && m.endsWith("ms")
                  ? (0, Ae.toSeconds)(m)
                  : m ?? 0),
              f?.length && typeof m == "string")
            ) {
              let S = `ix3-position-${e.id}-${g}`;
              r.addLabel(S, m), (m = S);
            }
            let A = e.timing?.duration ?? dt.DEFAULTS.DURATION,
              b = (0, Ve.getStaggerConfig)(
                e.timing?.stagger,
                (0, Ae.buildEaseContextId)(e.id, "stagger")
              );
            b && A === 0 && (A = 0.001);
            let v = { id: e.id, presetId: e.presetId, color: e.color },
              T = {
                force3D: !0,
                ...(!o && { immediateRender: o }),
                data: v,
                ...(e.tt !== 3 && { duration: (0, Ae.toSeconds)(A) }),
                ...(e.timing?.repeat != null && {
                  repeat: h && e.timing.repeat < 0 ? 0 : e.timing.repeat,
                }),
                ...(e.timing?.repeatDelay != null && {
                  repeatDelay: (0, Ae.toSeconds)(e.timing.repeatDelay),
                }),
                ...(e.timing?.yoyo != null && { yoyo: e.timing.yoyo }),
                ...(b && { stagger: b }),
              };
            e.timing?.ease != null &&
              (0, Ve.applyEase)(
                T,
                e.timing.ease,
                (0, Ae.buildEaseContextId)(e.id, "timing")
              ),
              p && (T.easeReverse = !0);
            let _ = f?.length ? d ?? t.concat(...f.map((S) => S.targets)) : t;
            if (E.createTweenConfig) {
              let S = E.createTweenConfig(w, _);
              i?.(y, e, S),
                S.modifiers &&
                  (T.modifiers = { ...T.modifiers, ...S.modifiers }),
                c &&
                  !c.hasVolatileValues &&
                  (0, Ve.configHasVolatileValue)(S) &&
                  (c.hasVolatileValues = !0);
              let I = Object.keys(S.from || {}).length > 0,
                x = Object.keys(S.to || {}).length > 0,
                P = e.tt ?? 0;
              if (P === 0 && !x) continue;
              if (P === 1 && !I) continue;
              if (P === 2 && !I && !x) continue;
              if (P === 3 && !x) continue;
              (f?.length && t.length === 0) ||
                (P === 1
                  ? r.from(t, { ...T, ...S.from }, m)
                  : P === 2
                  ? r.fromTo(t, { ...S.from }, { ...T, ...S.to }, m)
                  : P === 3
                  ? r.set(t, { ...T, ...S.to }, m)
                  : r.to(t, { ...T, ...S.to }, m));
              for (let R of f ?? []) {
                let k = R.resolver.buildTween({
                  timeline: r,
                  action: e,
                  tweenType: P,
                  config: S,
                  vars: { ...T },
                  targets: R.targets,
                  position: m ?? 0,
                });
                k && this.routeCleanup(k, s, c, u);
              }
            } else if (E.createCustomTween) {
              let S = E.createCustomTween(r, e, w, T, _, m || 0, {
                triggerElement: a ?? null,
                timelineRole: l,
                subscribeChannel: (I, x) =>
                  this.subscribeChannel(s, I, a ?? null, x),
                animation: this.animation,
              });
              S && this.routeCleanup(S, s, c, u);
            }
          } catch (m) {
            console.error("Error building tween:", m);
          }
        }
      }
      routeCleanup(e, t, r, s) {
        if (s != null) s.add(e);
        else if (r != null) {
          let o = r.cleanupFns ?? new Set();
          (r.cleanupFns = o), o.add(e);
        } else this.registerCleanup(t, e);
      }
      scheduleRebuild(e) {
        if (
          e.rebuildState === "building" ||
          e.rebuildState === "rebuild_pending"
        ) {
          e.rebuildState = "rebuild_pending";
          return;
        }
        (e.rebuildState = "building"),
          this.timelineTargetsCache.delete(e),
          this.rebuildTimelineOnTheFly(e);
      }
      rebuildTimelineOnTheFly(e) {
        let t = e.timeline.totalProgress(),
          r = e.controlTypes?.has(dt.TimelineControlType.LOAD) && t !== 1,
          s = e.timeline.isActive() || r,
          o = e.timeline.reversed() === !0;
        e.timeline.pause(),
          e.timeline.revert({ kill: !1 }),
          e.timeline.clear(),
          te(e.cleanupFns),
          this.buildTimeline(e),
          this.padTimelineToCanvas(e),
          e.timeline.totalProgress(t),
          e.scrollTriggerIds && e.scrollTriggerConfigs
            ? this.scroll.rebindScrollTriggers(e)
            : s && (o ? e.timeline.reverse() : e.timeline.play()),
          e.rebuildState === "rebuild_pending"
            ? ((e.rebuildState = "building"), this.rebuildTimelineOnTheFly(e))
            : (e.rebuildState = "idle");
      }
      disposeSub(e) {
        (e.rebuildState = "init"),
          e.timeline && (e.timeline.revert(), e.timeline.kill()),
          this.scroll.cleanupSubScrollTriggers(e),
          te(e.cleanupFns),
          te(e.swapCleanupFns),
          this.timelineTargetsCache.delete(e);
      }
      promoteToPerElement(e) {
        this.reanchoredTimelines.add(e),
          this.dynamicFlags.set(e, !0),
          this.discardBuiltSubs(e);
      }
      discardBuiltSubs(e) {
        let t = this.subs.get(e);
        if (t) {
          for (let [, r] of t) this.disposeSub(r);
          t.clear();
        }
        te(this.cleanupFns.get(e)), this.cleanupFns.delete(e);
      }
      rebuildScrollDirectionGroup(e, t) {
        let r = this.getSubOrNull(e, t);
        r &&
          (r.timeline.pause(),
          r.timeline.clear(),
          te(r.cleanupFns),
          this.timelineTargetsCache.delete(r),
          this.buildTimeline(r));
      }
      setupScrollControl(e, t, r, s, o) {
        this.scroll.setupScrollControl(e, t, r, s, o);
      }
      setupScrollDirectionPair(e, t, r, s, o) {
        this.scroll.setupScrollDirectionPair(e, t, r, s, o);
      }
      setupScrollControls(e, t, r, s) {
        this.scroll.setupScrollControls(e, t, r, s);
      }
      getScrollTriggers() {
        return this.scroll.getScrollTriggers();
      }
      releaseScrollTrigger(e) {
        this.scroll.releaseScrollTrigger(e);
      }
      destroyMarkerFocus() {
        this.scroll.destroyMarkerFocus();
      }
      refreshLineSplits(e) {
        e.timeline.data?.splitLines &&
          this.splitText.refreshLineSplits(this.getTimelineTargets(e));
      }
      getTimelineTargets(e) {
        let t = this.timelineTargetsCache.get(e);
        if (t) return t;
        t = new WeakSet();
        for (let r of e.timelineDef.actions ?? [])
          for (let s of this.collectTargets(
            r,
            e.elementContext,
            e.timelineId,
            e.owningInteraction
          ))
            t.add(s);
        return this.timelineTargetsCache.set(e, t), t;
      }
      scheduleRebuildForElement(e) {
        for (let [, t] of this.subs)
          for (let [, r] of t)
            this.getTimelineTargets(r).has(e) && this.scheduleRebuild(r);
      }
    };
  function te(n) {
    if (n) {
      for (let e of n) e();
      n.clear();
    }
  }
});
var qo = O((Vn) => {
  "use strict";
  Object.defineProperty(Vn, "__esModule", { value: !0 });
  Object.defineProperty(Vn, "ConditionEvaluator", {
    enumerable: !0,
    get: function () {
      return Bn;
    },
  });
  var _e = Y(),
    Bn = class {
      getConditionEvaluator;
      sharedObservers = new Map();
      conditionCache = new Map();
      CACHE_TTL = 100;
      constructor(e) {
        this.getConditionEvaluator = e;
      }
      evaluateConditionsForTrigger = async (e, t) => {
        if (!e?.length) return !0;
        let r = e.some(([s]) => s === _e.CORE_OPERATORS.OR);
        return this.evaluateCondition(
          [r ? _e.CORE_OPERATORS.OR : _e.CORE_OPERATORS.AND, { conditions: e }],
          t
        );
      };
      observeConditionsForTrigger = (e, t) => {
        if (!e?.length) return () => {};
        let r = [],
          s = [];
        for (let i of e)
          this.getConditionEvaluator(i)?.isReactive ?? !1
            ? r.push(i)
            : s.push(i[0]);
        if (r.length === 0) return () => {};
        let o = r.map((i) => this.getOrCreateSharedObserver(i, t));
        return () => {
          for (let i of o) i();
        };
      };
      disposeSharedObservers = () => {
        for (let [e, t] of this.sharedObservers)
          try {
            t.cleanup();
          } catch (r) {
            console.error("Error disposing shared observer: %s", e, r);
          }
        this.sharedObservers.clear(), this.conditionCache.clear();
      };
      observeCondition = (e, t) => {
        let r = this.getEvaluator(e);
        if (r?.observe)
          try {
            return r.observe(e, t);
          } catch (s) {
            console.error("Error setting up condition observer:", s);
          }
      };
      getEvaluator = (e) => {
        let [t] = e;
        return t === _e.CORE_OPERATORS.AND || t === _e.CORE_OPERATORS.OR
          ? this.getLogicalEvaluator(t)
          : this.getConditionEvaluator(e);
      };
      getLogicalEvaluator = (e) => ({
        evaluate: async (t, r) => {
          let [, s, o] = t,
            { conditions: i } = s || {};
          if (!Array.isArray(i)) return !1;
          if (!i.length) return !0;
          let a = e === _e.CORE_OPERATORS.OR,
            l = o === 1;
          for (let c of i) {
            let u = await this.evaluateCondition(c, r);
            if (a ? u : !u) return a ? !l : !!l;
          }
          return a ? !!l : !l;
        },
        observe: (t, r) => {
          let [, s] = t,
            { conditions: o } = s || {};
          if (!Array.isArray(o)) return () => {};
          let i = o.map((a) =>
            this.observeCondition(a, async () =>
              r(await this.evaluateCondition(t))
            )
          );
          return () => i.forEach((a) => a && a());
        },
      });
      evaluateCondition = async (e, t) => {
        let r = this.generateConditionCacheKey(e, t),
          s = Date.now(),
          o = this.conditionCache.get(r);
        if (o && s - o.timestamp < this.CACHE_TTL) return o.result;
        let i = this.getEvaluator(e);
        if (!i)
          return (
            console.warn(`No evaluator found for condition type '${e[0]}'`), !1
          );
        try {
          let a = await i.evaluate(e, t);
          return this.conditionCache.set(r, { result: a, timestamp: s }), a;
        } catch (a) {
          return console.error("Error evaluating condition:", a), !1;
        }
      };
      generateConditionCacheKey = (e, t) => {
        let [r, s, o] = e,
          i = s ? JSON.stringify(s) : "",
          a = o ? ":negate" : "",
          l = t ? `:ctx:${t.id}` : "";
        return `${r}:${i}${a}${l}`;
      };
      invalidateConditionCache = (e) => {
        let [t] = e,
          r = [];
        for (let s of this.conditionCache.keys())
          s.startsWith(`${t}:`) && r.push(s);
        r.forEach((s) => this.conditionCache.delete(s));
      };
      generateObserverKey = (e) => {
        let [t, r, s] = e,
          o = r ? JSON.stringify(r) : "";
        return `${t}:${o}${s ? ":negate" : ""}`;
      };
      getOrCreateSharedObserver = (e, t) => {
        let r = this.generateObserverKey(e),
          s = this.sharedObservers.get(r);
        if (!s) {
          let o = this.getEvaluator(e);
          if (!o?.observe) return () => {};
          let i = new Set(),
            a = o.observe(e, async () => {
              this.invalidateConditionCache(e);
              let l = Array.from(i, async (c) => {
                try {
                  await c();
                } catch (u) {
                  console.error("Error in shared observer callback:", u);
                }
              });
              await Promise.allSettled(l);
            });
          if (!a) return () => {};
          (s = { cleanup: a, refCount: 0, callbacks: i }),
            this.sharedObservers.set(r, s);
        }
        return (
          s.callbacks.add(t),
          s.refCount++,
          () => this.releaseSharedObserver(r, t)
        );
      };
      releaseSharedObserver = (e, t) => {
        let r = this.sharedObservers.get(e);
        if (
          !(!r || !r.callbacks.delete(t)) &&
          ((r.refCount = Math.max(0, r.refCount - 1)),
          r.refCount <= 0 && r.callbacks.size === 0)
        ) {
          try {
            r.cleanup();
          } catch (o) {
            console.error("Error cleaning up shared observer:", o);
          }
          this.sharedObservers.delete(e);
        }
      };
    };
});
var zo = O((Gn) => {
  "use strict";
  Object.defineProperty(Gn, "__esModule", { value: !0 });
  Object.defineProperty(Gn, "ConditionalPlaybackManager", {
    enumerable: !0,
    get: function () {
      return jn;
    },
  });
  var Su = Y(),
    jn = class {
      matchMediaInstances = new Map();
      setupConditionalContext = (e, t, r) => {
        let { conditionalPlayback: s, triggers: o, id: i } = e;
        if (!s || s.length === 0) {
          t(null);
          return;
        }
        this.cleanup(i);
        let a = window.gsap?.matchMedia();
        if (!a) {
          t(null);
          return;
        }
        this.matchMediaInstances.set(i, a);
        let l = !0,
          c = o.some(
            ([, { controlType: u }]) => u === Su.TimelineControlType.LOAD
          );
        a.add(this.buildConditionsObject(s), (u) => {
          if (c && !l) return !1;
          l = !1;
          let f = this.evaluateConditions(u.conditions || {}, s);
          return (!f || f.behavior === "skip-to-end") && t(f), r;
        });
      };
      cleanup = (e) => {
        let t = this.matchMediaInstances.get(e);
        t && (t.revert(), this.matchMediaInstances.delete(e));
      };
      destroy = () => {
        for (let [e] of this.matchMediaInstances) this.cleanup(e);
        this.matchMediaInstances.clear();
      };
      buildConditionsObject = (e) => {
        let t = {};
        for (let r of e)
          switch (r.type) {
            case "prefers-reduced-motion": {
              t.prefersReduced = "(prefers-reduced-motion: reduce)";
              break;
            }
            case "breakpoint": {
              (r.breakpoints || []).forEach((o) => {
                let i = Eu[o];
                i && (t[`breakpoint_${o}`] = i);
              });
              break;
            }
            default:
              break;
          }
        return (t.fallback = "(min-width: 0px)"), t;
      };
      evaluateConditions(e, t) {
        let r = [];
        for (let i of t)
          i.type === "prefers-reduced-motion" &&
            e.prefersReduced &&
            r.push({ condition: i, type: "prefers-reduced-motion" }),
            i.type === "breakpoint" &&
              (i.breakpoints || []).some((c) => e[`breakpoint_${c}`]) &&
              r.push({ condition: i, type: "breakpoint" });
        if (r.length === 0) return null;
        let s = r.find(({ condition: i }) => i.behavior === "dont-animate");
        if (s)
          return {
            behavior: "dont-animate",
            matchedConditions: {
              prefersReduced: s.type === "prefers-reduced-motion",
              breakpointMatched: s.type === "breakpoint",
            },
          };
        let o = r[0];
        return {
          behavior: o.condition.behavior,
          matchedConditions: {
            prefersReduced: o.type === "prefers-reduced-motion",
            breakpointMatched: o.type === "breakpoint",
          },
        };
      }
    },
    Eu = {
      tiny: "(max-width: 479px) and (min-width: 0px)",
      small: "(max-width: 767px) and (min-width: 480px)",
      medium: "(max-width: 991px) and (min-width: 768px)",
      main: "(min-width: 992px)",
    };
});
var Wo = O(($n) => {
  "use strict";
  Object.defineProperty($n, "__esModule", { value: !0 });
  Object.defineProperty($n, "PluginRegistry", {
    enumerable: !0,
    get: function () {
      return Un;
    },
  });
  var Un = class {
    plugins = new Map();
    extensionsByPoint = new Map();
    activePlugins = new Set();
    pluginStorage = new Map();
    constructor() {
      [
        "trigger",
        "action",
        "targetResolver",
        "condition",
        "roleActivationObserver",
      ].forEach((e) => this.extensionsByPoint.set(e, new Map()));
    }
    async registerPlugin(e) {
      let t = Ho(e.manifest.id);
      if (this.plugins.has(t))
        throw new Error(`Plugin ${t} is already registered`);
      let r = Object.entries(e.manifest.dependencies ?? {});
      for (let [s] of r)
        if (!this.plugins.has(s))
          throw new Error(`Missing dependency: ${s} required by ${t}`);
      this.plugins.set(t, e), e.initialize && (await e.initialize());
      for (let s of e.extensions) this.registerExtension(s);
      r.length || (await this.activatePlugin(t));
    }
    registerExtension(e) {
      this.extensionsByPoint.has(e.extensionPoint) ||
        this.extensionsByPoint.set(e.extensionPoint, new Map());
      let t = this.extensionsByPoint.get(e.extensionPoint),
        r = e.id;
      if (t.has(r))
        throw new Error(
          `Extension ${r} is already registered for point ${e.extensionPoint}`
        );
      t.set(r, e);
    }
    async activatePlugin(e) {
      if (this.activePlugins.has(e)) return;
      let t = this.plugins.get(e);
      if (!t) throw new Error(`Cannot activate unknown plugin: ${e}`);
      let r = Object.keys(t.manifest.dependencies ?? {});
      for (let s of r) await this.activatePlugin(s);
      t.activate && (await t.activate()), this.activePlugins.add(e);
    }
    async deactivatePlugin(e) {
      if (!this.activePlugins.has(e)) return;
      let t = this.plugins.get(e);
      if (!t) throw new Error(`Cannot deactivate unknown plugin: ${e}`);
      t.deactivate && (await t.deactivate()), this.activePlugins.delete(e);
    }
    async unregisterPlugin(e, t) {
      let r = Ho([e, t]),
        s = this.plugins.get(r);
      if (s) {
        this.activePlugins.has(r) && (await this.deactivatePlugin(r));
        for (let o of s.extensions)
          o.extensionPoint === "condition" &&
            o.implementation.dispose &&
            (await o.implementation.dispose()),
            this.extensionsByPoint
              .get(o.extensionPoint)
              ?.delete(`${r}:${o.id}`);
        s.dispose && (await s.dispose()),
          this.plugins.delete(r),
          this.pluginStorage.delete(r);
      }
    }
    getExtensions(e) {
      return this.extensionsByPoint.get(e) || new Map();
    }
    getExtensionImpl(e, t) {
      return this.getExtensions(t).get(e)?.implementation;
    }
    getTriggerHandler([e]) {
      return this.getExtensionImpl(e, "trigger");
    }
    getRoleActivationObserver(e) {
      return this.getExtensionImpl(e, "roleActivationObserver");
    }
    getActionHandler(e) {
      return this.getExtensionImpl(e, "action");
    }
    getTargetResolver([e]) {
      return this.getExtensionImpl(e, "targetResolver");
    }
    getConditionEvaluator([e]) {
      return this.getExtensionImpl(e, "condition");
    }
    getAllPlugins() {
      return this.plugins.values();
    }
  };
  function Ho(n) {
    return `${n[0]}:${n[1]}`;
  }
});
var je = O((zn) => {
  "use strict";
  Object.defineProperty(zn, "__esModule", { value: !0 });
  Object.defineProperty(zn, "BaseTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return qn;
    },
  });
  var qn = class {
    runTrigger;
    runTimelineAction;
    skipToEndState;
    constructor(e, t, r) {
      (this.runTrigger = e),
        (this.runTimelineAction = t),
        (this.skipToEndState = r);
    }
  };
});
var Ko = O((Wn) => {
  "use strict";
  Object.defineProperty(Wn, "__esModule", { value: !0 });
  Object.defineProperty(Wn, "StandardTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return Hn;
    },
  });
  var wu = Y(),
    Ou = je();
  function Yo(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.type === "timeline-role" && typeof e.role == "string";
  }
  function Au(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.type === "playback-control" && typeof e.control == "string";
  }
  function _u(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.target instanceof HTMLElement && typeof e.type != "string";
  }
  var Hn = class extends Ou.BaseTriggerStrategy {
    getTimelineIdsForRole;
    resolveAssignedTimelineIds;
    notifyRoleActivationObservers;
    isInInteractionScope;
    constructor(e, t, r, s, o, i, a) {
      super(e, t, r),
        (this.getTimelineIdsForRole = s),
        (this.resolveAssignedTimelineIds = o),
        (this.notifyRoleActivationObservers = i),
        (this.isInInteractionScope = a);
    }
    bind(e, t, r) {
      let {
          interactionId: s,
          elements: o,
          triggerHandler: i,
          eventManager: a,
          conditionalContext: l,
          cleanupMap: c,
          delay: u,
        } = r,
        f = e[1];
      for (let d of o) {
        if (!d) continue;
        let p = c.get(d);
        p || ((p = new Set()), c.set(d, p));
        let h = new Map(),
          g = (w) => {
            let m = w.settles;
            return (
              (w.settles = []),
              m.length
                ? () => {
                    for (let A of m)
                      try {
                        A();
                      } catch (b) {
                        console.error(
                          "Error in activation completion callback:",
                          b
                        );
                      }
                  }
                : void 0
            );
          },
          y = (w) => {
            if (w)
              try {
                w();
              } catch (m) {
                console.error("Error in activation completion callback:", m);
              }
          },
          E = i(e, d, a, (w) => {
            let m = _u(w) ? w.target : d;
            if (m !== d && !this.isInInteractionScope(t, m)) return;
            let A = Au(w) ? w.control : void 0,
              b = Yo(w) ? w.onComplete : void 0,
              v,
              T;
            if (Yo(w))
              (v = w.role), (T = this.getTimelineIdsForRole(t, w.role));
            else {
              let { assignedGroupId: S, assignedTimelineRole: I } = e[1];
              (v = S === null || S ? void 0 : I),
                (T = this.resolveAssignedTimelineIds(e, t));
            }
            if (T?.length === 0) {
              this.runTrigger(e, m, s, T, void 0, {
                onComplete: b,
                role: v,
              }).catch((S) => {
                console.error("Error in trigger execution:", S), y(b);
              });
              return;
            }
            if (l !== null) {
              if (l.behavior === "skip-to-end") {
                let S = [],
                  I = !1,
                  x = () => {
                    I ||
                      !v ||
                      ((I = !0),
                      this.notifyRoleActivationObservers(t, v, S, e, m));
                  };
                this.skipToEndState(t, m, f, T, A, x);
                for (let P of S)
                  try {
                    P();
                  } catch (R) {
                    console.error(
                      "Error in role activation settle callback:",
                      R
                    );
                  }
              }
              y(b);
              return;
            }
            let _ = (S) => {
              this.runTrigger(e, m, s, T, A, { onComplete: S, role: v }).catch(
                (I) => {
                  console.error("Error in trigger execution:", I), S?.();
                }
              );
            };
            if (f.conditionalLogic || !u) _(b);
            else {
              let S = h.get(m);
              if (S && A === S.control && v === S.role) b && S.settles.push(b);
              else {
                S && (clearTimeout(S.timer), g(S)?.(), h.delete(m));
                let I = {
                  control: A,
                  role: v,
                  settles: b ? [b] : [],
                  timer: setTimeout(() => {
                    h.delete(m), _(g(I));
                  }, u * 1e3),
                };
                h.set(m, I);
              }
            }
          });
        E && p.add(E),
          p.add(() => {
            for (let w of h.values()) clearTimeout(w.timer), g(w)?.();
            h.size > 0 && (0, wu.releasePageLevelTriggerFired)(e), h.clear();
          });
      }
    }
  };
});
var Xo = O((Kn) => {
  "use strict";
  Object.defineProperty(Kn, "__esModule", { value: !0 });
  Object.defineProperty(Kn, "LoadTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return Yn;
    },
  });
  var Ru = je(),
    Yn = class extends Ru.BaseTriggerStrategy {
      loadInteractions;
      getTimeline;
      constructor(e, t, r, s, o) {
        super(e, t, r), (this.loadInteractions = s), (this.getTimeline = o);
      }
      bind(e, t, r) {
        if (window.__wf_ix3) return;
        let { conditionalContext: s, delay: o } = r,
          i = e[1];
        this.loadInteractions.push(() => {
          if (s !== null) {
            s.behavior === "skip-to-end" && this.skipToEndState(t, null);
            return;
          }
          let a = () => {
            for (let l of t.timelineIds ?? []) {
              let c = this.getTimeline(l, null);
              c &&
                (c.data.splitLines
                  ? document.fonts.ready.then(() => {
                      this.runTimelineAction(l, i, null);
                    })
                  : this.runTimelineAction(l, i, null));
            }
          };
          o ? setTimeout(a, o * 1e3) : a();
        });
      }
    };
});
var Zo = O((Zn) => {
  "use strict";
  Object.defineProperty(Zn, "__esModule", { value: !0 });
  Object.defineProperty(Zn, "ScrollTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return Xn;
    },
  });
  var Iu = je(),
    Xn = class extends Iu.BaseTriggerStrategy {
      setupScrollControls;
      setupScrollDirectionPair;
      constructor(e, t, r, s, o) {
        super(e, t, r),
          (this.setupScrollControls = s),
          (this.setupScrollDirectionPair = o);
      }
      bind(e, t, r) {
        let { interactionId: s, elements: o, conditionalContext: i } = r,
          a = e[1].scrollTriggerConfig;
        if (!a) return;
        if (i !== null) {
          if (i.behavior === "skip-to-end")
            for (let d of o) d && this.skipToEndState(t, d);
          return;
        }
        let l = o.filter((d) => !!d);
        if (!l.length) return;
        if (a.split !== !0) {
          for (let d of l)
            for (let p of t.timelineIds ?? [])
              this.setupScrollControls(p, s, a, [d]);
          return;
        }
        let c = t.timelineIds ?? [],
          [u, f] = c;
        if (a.scrollDirection != null && u && f && c.length === 2) {
          this.setupScrollDirectionPair(u, f, s, a, l);
          return;
        }
        for (let d of c) this.setupScrollControls(d, s, a, l);
      }
    };
});
var Qo = O((er) => {
  "use strict";
  Object.defineProperty(er, "__esModule", { value: !0 });
  Object.defineProperty(er, "ContinuousChannelManager", {
    enumerable: !0,
    get: function () {
      return Qn;
    },
  });
  var Qn = class {
      coordinator;
      resolveRole;
      channels;
      animation;
      constructor(e, t) {
        (this.coordinator = e),
          (this.resolveRole = t),
          (this.channels = new Map()),
          (this.animation = e.animation);
      }
      isPreviewEnabled() {
        return !(window.__wf_ix3 && window.__wf_ix3_continuous_preview === !1);
      }
      registerChannel(e) {
        let t = this.resolveRole(e.role);
        if (!t)
          return (
            console.warn(
              `IX3 Continuous: Failed to resolve role '${e.role}' to timeline ID. Channel registration skipped.`
            ),
            null
          );
        let r = new Jn(
          {
            timelineId: t,
            initialValue: e.initialValue,
            element: e.element,
            smoothing: e.smoothing,
            animation: this.animation,
            isPreviewEnabled: () => this.isPreviewEnabled(),
          },
          this.coordinator
        );
        return this.channels.set(t, r), r;
      }
      fireInterval(e, t) {
        let r = this.resolveRole(e);
        r &&
          this.coordinator.fireInterval(r, t.element ?? null, {
            targetIndex: t.targetIndex,
            pluginPayload: t.pluginPayload,
          });
      }
      registerIntervalHandler(e, t) {
        this.coordinator.registerIntervalHandler(e, t);
      }
      getMetadata(e) {
        let t = this.resolveRole(e);
        return t ? this.coordinator.getTriggerMetadata(t) : null;
      }
      publishChannel(e, t, r) {
        this.coordinator.publishChannel(e, t, r);
      }
      cleanup() {
        for (let e of this.channels.values()) e.destroy();
        this.channels.clear();
      }
    },
    Mu = "power2.out",
    Jn = class {
      coordinator;
      proxy;
      setter;
      timelineId;
      element;
      isPreviewEnabled;
      constructor(e, t) {
        (this.coordinator = t),
          (this.proxy = { p: e.initialValue }),
          (this.timelineId = e.timelineId),
          (this.element = e.element ?? null),
          (this.isPreviewEnabled = e.isPreviewEnabled);
        let r = (e.smoothing ?? 0) / 1e3;
        (this.setter =
          r > 0
            ? e.animation.quickTo(this.proxy, "p", {
                duration: r,
                ease: Mu,
                onUpdate: () => this.updateTimeline(this.proxy.p),
              })
            : null),
          this.updateTimeline(e.initialValue);
      }
      setProgress(e) {
        this.setter
          ? this.setter(e)
          : ((this.proxy.p = e), this.updateTimeline(e));
      }
      setImmediate(e) {
        this.setter
          ? this.setter(e, e)
          : ((this.proxy.p = e), this.updateTimeline(e));
      }
      destroy() {
        this.setter?.tween.kill();
      }
      updateTimeline(e) {
        this.isPreviewEnabled() &&
          this.coordinator.setContinuousProgress(
            this.timelineId,
            e,
            this.element
          );
      }
    };
});
var Jo = O((nr) => {
  "use strict";
  Object.defineProperty(nr, "__esModule", { value: !0 });
  Object.defineProperty(nr, "ContinuousTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return tr;
    },
  });
  var Cu = je(),
    Pu = Qo();
  function xu(n) {
    return n != null && "type" in n && n.type === "continuous";
  }
  var tr = class extends Cu.BaseTriggerStrategy {
    continuousCleanups;
    triggerCleanupFunctions;
    coordinator;
    getTimelineIdForRole;
    constructor(e, t, r, s, o, i, a) {
      super(e, t, r),
        (this.continuousCleanups = s),
        (this.triggerCleanupFunctions = o),
        (this.coordinator = i),
        (this.getTimelineIdForRole = a);
    }
    bind(e, t, r) {
      let {
        interactionId: s,
        elements: o,
        triggerHandler: i,
        conditionalContext: a,
      } = r;
      for (let l of o) {
        if (!l) continue;
        if (a !== null) {
          a.behavior === "skip-to-end" && this.skipToEndState(t, l);
          continue;
        }
        let c = (d) => this.getTimelineIdForRole(t, d),
          u = new Pu.ContinuousChannelManager(this.coordinator, c),
          f = i(e, l, r.eventManager, (d) => {
            if (xu(d)) {
              let p = d.setup(u),
                h = this.continuousCleanups.get(s);
              h || ((h = new Map()), this.continuousCleanups.set(s, h)),
                h.set(l, () => {
                  p(), u.cleanup();
                });
            }
          });
        if (f) {
          let d = this.triggerCleanupFunctions.get(s);
          d || ((d = new Map()), this.triggerCleanupFunctions.set(s, d));
          let p = d.get(l);
          p || ((p = new Set()), d.set(l, p)), p.add(f);
        }
      }
    }
  };
});
var ri = O((rr) => {
  "use strict";
  Object.defineProperty(rr, "__esModule", { value: !0 });
  Object.defineProperty(rr, "IX3", {
    enumerable: !0,
    get: function () {
      return pt;
    },
  });
  var ue = Y(),
    ku = uo(),
    Nu = $o(),
    ei = dn(),
    Fu = qo(),
    Lu = zo(),
    Du = Wo(),
    J = ee(),
    Bu = Ko(),
    Vu = Xo(),
    ju = Zo(),
    Gu = Jo();
  function Uu(n) {
    if (n === !0) return !0;
    if (!Array.isArray(n)) return !1;
    let e = n[1];
    return (typeof e == "string" || Array.isArray(e)) && e.length > 0;
  }
  function $u(n) {
    let e = n[1].scrollTriggerConfig;
    return e?.split === !0 && Uu(e.pin);
  }
  var qu = 200,
    ti = 210,
    ni = "tl_pinonly_",
    sr = class {
      env;
      pluginReg;
      timelineDefs;
      interactions;
      triggeredElements;
      features;
      lastRoutedTimelineIds;
      lastActivatedRoles;
      releasedByTeardown;
      resolversHeld;
      triggerCleanupFunctions;
      continuousCleanups;
      conditionalPlaybackManager;
      triggerStrategies;
      windowSize;
      prevWindowSize;
      windowResizeSubscribers;
      debouncedWindowResize;
      bodyResizeObserver;
      triggerObservers;
      timelineRefCounts;
      interactionTimelineRefs;
      timelineToInteractionId;
      activeInteractionIds;
      reactiveCallbackQueues;
      debouncedReactiveCallback;
      pendingReactiveUpdates;
      reactiveExecutionContext;
      componentScopeSelectors;
      eventMgr;
      loadInteractions;
      coordinator;
      conditionEval;
      constructor(e) {
        (this.env = e),
          (this.pluginReg = new Du.PluginRegistry()),
          (this.timelineDefs = new Map()),
          (this.interactions = new Map()),
          (this.triggeredElements = new Map()),
          (this.features = {}),
          (this.lastRoutedTimelineIds = new WeakMap()),
          (this.lastActivatedRoles = new WeakMap()),
          (this.releasedByTeardown = new Set()),
          (this.resolversHeld = new Set()),
          (this.triggerCleanupFunctions = new Map()),
          (this.continuousCleanups = new Map()),
          (this.windowSize = { w: 0, h: 0 }),
          (this.prevWindowSize = { w: 0, h: 0 }),
          (this.windowResizeSubscribers = new Set()),
          (this.debouncedWindowResize = (0, J.debounce)(() => {
            for (let t of this.windowResizeSubscribers) t();
          }, qu)),
          (this.bodyResizeObserver = null),
          (this.triggerObservers = new Map()),
          (this.timelineRefCounts = new Map()),
          (this.interactionTimelineRefs = new Map()),
          (this.timelineToInteractionId = new Map()),
          (this.activeInteractionIds = new Set()),
          (this.reactiveCallbackQueues = new Map()),
          (this.pendingReactiveUpdates = new Map()),
          (this.reactiveExecutionContext = new Set()),
          (this.componentScopeSelectors = new Map()),
          (this.eventMgr = ku.EventManager.getInstance()),
          (this.loadInteractions = []),
          (this.addEventListener = this.eventMgr.addEventListener.bind(
            this.eventMgr
          )),
          (this.emit = this.eventMgr.emit.bind(this.eventMgr)),
          (this.resolveTargets = (t, r, s) => {
            let o = s?.scope?.type === "component" ? s.scope : null,
              i = o?.componentId
                ? this.getComponentScopeSelector(o.componentId)
                : null,
              a = o?.variants?.length ? o.variants : null,
              l = s && r.interaction !== s ? { ...r, interaction: s } : r,
              c = this.resolveTargetsImpl(t, l, s, i),
              u = i ? !!this.pluginReg.getTargetResolver(t)?.isPageLevel : !1,
              f =
                i && r.triggerElement && !u
                  ? this.filterByInstance(c, i, r.triggerElement)
                  : c;
            return a && i && !u ? this.filterByVariant(f, i, a) : f;
          }),
          (this.isTargetDynamic = (t) =>
            !!this.pluginReg.getTargetResolver(t)?.isDynamic),
          (this.getInteractionForTimeline = (t) => {
            let r = this.timelineToInteractionId.get(t);
            if (r) return this.interactions.get(r);
          }),
          (this.getInteractionsForTimelines = (t) => {
            let r = [];
            for (let [s, o] of this.interactionTimelineRefs) {
              if (!this.activeInteractionIds.has(s)) continue;
              let i = !1;
              for (let l of t)
                if (o.has(l)) {
                  i = !0;
                  break;
                }
              if (!i) continue;
              let a = this.interactions.get(s);
              a && r.push(a);
            }
            return r;
          }),
          window.addEventListener("resize", this.debouncedWindowResize),
          (this.coordinator = new Nu.AnimationCoordinator(
            this.timelineDefs,
            this.pluginReg.getActionHandler.bind(this.pluginReg),
            this.pluginReg.getTargetResolver.bind(this.pluginReg),
            this.resolveTargets,
            this.getInteractionForTimeline,
            this.getInteractionsForTimelines,
            e
          )),
          (this.conditionEval = new Fu.ConditionEvaluator(
            this.pluginReg.getConditionEvaluator.bind(this.pluginReg)
          )),
          (this.conditionalPlaybackManager =
            new Lu.ConditionalPlaybackManager()),
          (this.triggerStrategies = new Map([
            [
              ue.TimelineControlType.STANDARD,
              new Bu.StandardTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.getTimelineIdsForRole.bind(this),
                this.resolveAssignedTimelineIds.bind(this),
                this.notifyRoleActivationObservers.bind(this),
                this.isInInteractionScope.bind(this)
              ),
            ],
            [
              ue.TimelineControlType.LOAD,
              new Vu.LoadTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.loadInteractions,
                this.coordinator.getTimeline.bind(this.coordinator)
              ),
            ],
            [
              ue.TimelineControlType.SCROLL,
              new ju.ScrollTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.coordinator.setupScrollControls.bind(this.coordinator),
                this.coordinator.setupScrollDirectionPair.bind(this.coordinator)
              ),
            ],
            [
              ue.TimelineControlType.CONTINUOUS,
              new Gu.ContinuousTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.continuousCleanups,
                this.triggerCleanupFunctions,
                this.coordinator,
                this.getTimelineIdForRole.bind(this)
              ),
            ],
          ])),
          (this.debouncedReactiveCallback = (0, J.debounce)(
            () => this.processPendingReactiveUpdates(),
            16,
            { leading: !1, trailing: !0, maxWait: 100 }
          ));
      }
      getCoordinator() {
        return this.coordinator;
      }
      setFeatures(e) {
        (this.features = { ...this.features, ...e }),
          this.coordinator.setRewindSharedRefire(
            this.features.timelineGroups === !0
          ),
          this.coordinator.setTimelineGroups(
            this.features.timelineGroups === !0
          );
      }
      addEventListener;
      emit;
      static async init(e) {
        return (this.instance = new sr(e)), this.instance;
      }
      async registerPlugin(e) {
        await this.pluginReg.registerPlugin(e);
      }
      register(e, t) {
        if (t?.length) {
          for (let r of t) this.timelineDefs.set(r.id, r);
          this.coordinator.invalidateReuseAliasIndex();
        }
        if (e?.length) {
          for (let r of e) {
            if (this.interactions.has(r.id)) {
              console.warn(
                `Interaction with ID ${r.id} already exists. Use update() to modify it.`
              );
              continue;
            }
            let s = this.withPinOnlyTimeline(r);
            this.interactions.set(s.id, s);
            let o = new Set();
            this.interactionTimelineRefs.set(s.id, o),
              this.conditionalPlaybackManager.setupConditionalContext(
                s,
                (i) => {
                  this.resolversHeld.add(s.id),
                    i?.behavior !== "skip-to-end" &&
                      this.activeInteractionIds.add(s.id);
                  for (let p of s.timelineIds ?? [])
                    o.add(p),
                      this.incrementTimelineRefCount(p),
                      this.timelineToInteractionId.set(p, s.id);
                  let a = new Set(),
                    l = new Set(),
                    c = new Set(s.timelineIds ?? []),
                    u = (p) =>
                      this.coordinator.getReuseAliasesForSource(p).some((h) => {
                        let g = this.timelineRefCounts.get(h) ?? 0,
                          y = c.has(h) ? 1 : 0;
                        return g - y > 0;
                      }),
                    f = (p) => {
                      if (
                        !(
                          (this.timelineRefCounts.get(p) ?? 0) <=
                            (c.has(p) ? 1 : 0) && !u(p)
                        )
                      ) {
                        a.add(p);
                        for (let g of this.coordinator.dissolveSharedGroupForTimeline(
                          p
                        ))
                          l.add(g);
                      }
                    };
                  for (let p of c) {
                    f(p);
                    let h = this.coordinator.resolveSourceTimelineId(p);
                    h !== p && f(h);
                  }
                  let d = (0, ei.analyzeSharedTimelineGroups)(
                    s,
                    this.timelineDefs,
                    this.resolveTargets,
                    this.pluginReg.getActionHandler.bind(this.pluginReg),
                    this.coordinator.isDynamicTimeline.bind(this.coordinator),
                    this.features.timelineGroups
                      ? (p) =>
                          this.pluginReg
                            .getTargetResolver(p)
                            ?.instanceSharingKey?.(p)
                      : void 0
                  );
                  for (let p of d)
                    p.members.some((h) => a.has(h)) ||
                      this.coordinator.registerSharedGroup(
                        p.primary,
                        p.members
                      );
                  for (let p of s.timelineIds ?? [])
                    l.has(p) || this.coordinator.createTimeline(p, s);
                  for (let p of s.triggers ?? []) this.bindTrigger(p, s, i);
                  this.recomputeFlipEaseForOwnSources(s);
                },
                () => {
                  this.cleanupInteractionAnimations(s.id);
                }
              );
          }
          for (let r of this.loadInteractions) r();
          if (
            ((this.loadInteractions.length = 0),
            this.coordinator.getScrollTriggers().size > 0)
          ) {
            this.windowResizeSubscribers.add(() => {
              (this.windowSize.h = window.innerHeight),
                (this.windowSize.w = window.innerWidth);
            });
            let r = (0, J.debounce)(
                () => {
                  (this.prevWindowSize.h = this.windowSize.h),
                    (this.prevWindowSize.w = this.windowSize.w);
                },
                ti,
                { leading: !0, trailing: !1 }
              ),
              s = (0, J.debounce)(() => {
                if (
                  !(
                    this.windowSize.h !== this.prevWindowSize.h ||
                    this.windowSize.w !== this.prevWindowSize.w
                  )
                )
                  for (let a of this.coordinator.getScrollTriggers().values())
                    a.refresh();
              }, ti),
              o = (i) => {
                for (let a of i) a.target === document.body && (r(), s());
              };
            (this.bodyResizeObserver = new ResizeObserver(o)),
              document.body && this.bodyResizeObserver.observe(document.body);
          }
        }
        return this;
      }
      withPinOnlyTimeline(e) {
        if (e.timelineIds?.length || !e.triggers?.some($u)) return e;
        let t = `${ni}${e.id}`;
        return (
          this.timelineDefs.has(t) ||
            (this.timelineDefs.set(t, {
              id: t,
              deleted: !1,
              pageId: "",
              actions: [],
            }),
            this.coordinator.invalidateReuseAliasIndex()),
          { ...e, timelineIds: [t] }
        );
      }
      remove(e) {
        let t = Array.isArray(e) ? e : [e];
        for (let r of t) {
          if (!this.interactions.has(r)) {
            console.warn(
              `Interaction with ID ${r} not found, skipping removal.`
            );
            continue;
          }
          this.cleanupTriggerObservers(r),
            this.unbindAllTriggers(r),
            this.cleanupContinuousControlsForInteraction(r);
          let s = this.decrementTimelineReferences(r);
          this.cleanupUnusedTimelines(s),
            this.timelineDefs.delete(`${ni}${r}`) &&
              this.coordinator.invalidateReuseAliasIndex();
          let o = this.interactions.get(r);
          for (let l of o?.triggers ?? [])
            this.lastRoutedTimelineIds.delete(l),
              this.lastActivatedRoles.delete(l),
              (0, ue.resetPageLevelTriggerState)(l);
          this.interactions.delete(r),
            this.triggeredElements.delete(r),
            this.interactionTimelineRefs.delete(r),
            this.activeInteractionIds.delete(r),
            o && this.recomputeFlipEaseForOwnSources(o),
            this.conditionalPlaybackManager.cleanup(r);
          let i = this.resolversHeld.delete(r),
            a = this.releasedByTeardown.delete(r);
          i && !a && this.releaseTargetResolvers(r);
        }
        return this;
      }
      releaseTargetResolvers(e) {
        for (let { implementation: t } of this.pluginReg
          .getExtensions("targetResolver")
          .values())
          try {
            t.release?.(e);
          } catch (r) {
            console.error("Error releasing target resolver:", e, r);
          }
      }
      update(e, t) {
        let r = Array.isArray(e) ? e : [e],
          s = t ? (Array.isArray(t) ? t : [t]) : [];
        s.length && this.register([], s);
        for (let o of r) {
          let { id: i } = o;
          if (!this.interactions.has(i)) {
            console.warn(
              `Interaction with ID ${i} not found, registering as new.`
            ),
              this.register([o], []);
            continue;
          }
          this.remove(i), this.register([o], []);
        }
        return this;
      }
      destroyTimelineInstance(e) {
        this.coordinator.destroy(e);
        let t = `st_${e}_`;
        for (let r of [...this.coordinator.getScrollTriggers().keys()])
          r.startsWith(t) && this.coordinator.releaseScrollTrigger(r);
      }
      cleanupUnusedTimelines(e) {
        let t = new Set();
        for (let r of e)
          this.timelineDefs.get(r)?.reuse?.sourceTimelineId &&
            t.add(this.coordinator.resolveSourceTimelineId(r));
        for (let r of e)
          this.destroyTimelineInstance(r), this.timelineDefs.delete(r);
        this.coordinator.invalidateReuseAliasIndex();
        for (let r of t)
          e.has(r) || this.coordinator.recomputeFlipEaseForSource(r);
      }
      destroy() {
        let e = Array.from(this.interactions.keys());
        this.remove(e),
          (this.loadInteractions.length = 0),
          this.env.win.ScrollTrigger &&
            (this.env.win.ScrollTrigger.getAll().forEach((t) => t.kill()),
            this.bodyResizeObserver?.disconnect(),
            (this.bodyResizeObserver = null)),
          this.coordinator.destroyMarkerFocus(),
          window.removeEventListener("resize", this.debouncedWindowResize),
          this.cleanupAllContinuousControls();
        try {
          this.debouncedReactiveCallback.cancel();
        } catch (t) {
          console.error(
            "Error canceling debounced callback during destroy:",
            t
          );
        }
        this.pendingReactiveUpdates.clear(),
          this.reactiveCallbackQueues.clear(),
          this.reactiveExecutionContext.clear(),
          this.conditionEval.disposeSharedObservers(),
          this.conditionalPlaybackManager.destroy(),
          this.windowResizeSubscribers.clear(),
          this.timelineDefs.clear(),
          this.coordinator.invalidateReuseAliasIndex(),
          this.interactions.clear(),
          this.triggeredElements.clear(),
          this.triggerCleanupFunctions.clear(),
          this.triggerObservers.clear(),
          this.interactionTimelineRefs.clear(),
          this.activeInteractionIds.clear(),
          this.releasedByTeardown.clear(),
          this.resolversHeld.clear(),
          this.timelineToInteractionId.clear(),
          this.componentScopeSelectors.clear();
      }
      bindTrigger(e, t, r) {
        let s = t.id,
          o = this.pluginReg.getTriggerHandler(e),
          i = e[1];
        if (!o) {
          console.warn("No trigger handler:", e[0]);
          return;
        }
        let a = this.triggerCleanupFunctions.get(s) || new Map();
        this.triggerCleanupFunctions.set(s, a);
        let { delay: l = 0, controlType: c } = i,
          u = (0, J.toSeconds)(l),
          f = this.eventMgr,
          d = e[2],
          p = [];
        d && (p = this.resolveTargets(d, { trigger: e }, t));
        let h =
            c && (0, J.isValidControlType)(c)
              ? c
              : ue.TimelineControlType.STANDARD,
          g = this.triggerStrategies.get(h);
        g
          ? g.bind(e, t, {
              interactionId: s,
              elements: p,
              triggerHandler: o,
              eventManager: f,
              conditionalContext: r,
              cleanupMap: a,
              delay: u || 0,
            })
          : console.warn("No strategy found for control type:", c),
          i.conditionalLogic && this.setupTriggerReactiveMonitoring(e, t);
      }
      setupTriggerReactiveMonitoring(e, t) {
        let { conditionalLogic: r } = e[1];
        if (!r) return;
        let s = `${t.id}:${t.triggers.indexOf(e)}`;
        try {
          let o = this.conditionEval.observeConditionsForTrigger(
              r.conditions,
              async () => {
                await this.executeReactiveCallbackSafely(t.id, s, async () => {
                  if (
                    e[1].assignedInstances !== void 0 &&
                    !this.lastRoutedTimelineIds.has(e)
                  )
                    return;
                  let l =
                    (await this.conditionEval.evaluateConditionsForTrigger(
                      r.conditions,
                      t
                    ))
                      ? r.ifTrue
                      : r.ifFalse;
                  if (l) {
                    let c = this.triggeredElements.get(t.id);
                    if (!c) return;
                    let u = this.features.timelineGroups === !0,
                      f =
                        u && (0, ei.triggerRoutesByCallbackRole)(e[0], e[1])
                          ? void 0
                          : this.resolveAssignedTimelineIds(e, t);
                    if (f?.length === 0) return;
                    let d = u ? this.lastRoutedTimelineIds.get(e) : void 0,
                      p = (g) => (u ? d?.get(g) : f ?? t.timelineIds ?? []),
                      h = [];
                    for (let g of c)
                      for (let y of p(g) ?? [])
                        h.push({
                          timelineId: y,
                          element: g,
                          action: "pause-reset",
                        });
                    await this.executeTimelineOperationsAsync(h),
                      c.forEach((g) => {
                        let y = u ? p(g) : f;
                        if (u && !y) return;
                        let { notifyObservers: E, settle: w } =
                          this.makeRoleActivationHooks(t, e, g);
                        this.executeConditionalOutcome(l, g, t, y, w, E);
                      });
                  }
                });
              }
            ),
            i = this.triggerObservers.get(t.id);
          i || ((i = new Map()), this.triggerObservers.set(t.id, i)),
            i.set(s, o);
        } catch (o) {
          console.error("Error setting up trigger reactive monitoring:", o);
        }
      }
      async executeReactiveCallbackSafely(e, t, r) {
        this.reactiveExecutionContext.has(t) ||
          (this.pendingReactiveUpdates.set(t, r),
          this.debouncedReactiveCallback());
      }
      async processPendingReactiveUpdates() {
        if (this.pendingReactiveUpdates.size === 0) return;
        let e = new Map(this.pendingReactiveUpdates);
        this.pendingReactiveUpdates.clear();
        let t = new Map();
        for (let [r, s] of e) {
          let o = r.split(":")[0];
          t.has(o) || t.set(o, []),
            t.get(o).push({ triggerKey: r, callback: s });
        }
        for (let [r, s] of t)
          await this.processInteractionReactiveUpdates(r, s);
      }
      async processInteractionReactiveUpdates(e, t) {
        let r = this.reactiveCallbackQueues.get(e);
        if (r)
          try {
            await r;
          } catch (o) {
            console.error("Error waiting for pending reactive callback:", o);
          }
        let s = this.executeInteractionUpdates(t);
        this.reactiveCallbackQueues.set(e, s);
        try {
          await s;
        } finally {
          this.reactiveCallbackQueues.get(e) === s &&
            this.reactiveCallbackQueues.delete(e);
        }
      }
      async executeInteractionUpdates(e) {
        for (let { triggerKey: t, callback: r } of e) {
          this.reactiveExecutionContext.add(t);
          try {
            await r();
          } catch (s) {
            console.error("Error in reactive callback for %s:", t, s);
          } finally {
            this.reactiveExecutionContext.delete(t);
          }
        }
      }
      async executeTimelineOperationsAsync(e) {
        if (e.length)
          return new Promise((t) => {
            Promise.resolve().then(() => {
              e.forEach(({ timelineId: r, element: s, action: o }) => {
                try {
                  if (!this.timelineDefs.has(r)) {
                    console.warn(`Timeline ${r} not found, skipping operation`);
                    return;
                  }
                  if (!s.isConnected) {
                    console.warn(
                      "Element no longer in DOM, skipping timeline operation"
                    );
                    return;
                  }
                  switch (o) {
                    case "pause-reset":
                      this.coordinator.pause(r, s, 0);
                      break;
                    default:
                      console.warn(`Unknown timeline action: ${o}`);
                  }
                } catch (i) {
                  console.error(
                    "Error executing timeline operation: %s, %s",
                    o,
                    r,
                    i
                  );
                }
              }),
                t();
            });
          });
      }
      getTimelineIdsForRole(e, t) {
        let r = e.timelineIds ?? [],
          s = r.filter(
            (o) => this.timelineDefs.get(o)?.triggerMetadata?.role === t
          );
        if (s.length === 0 && r.length > 0) {
          let o = r
            .map(
              (i) => this.timelineDefs.get(i)?.triggerMetadata?.role || "none"
            )
            .join(", ");
          console.warn(
            `IX3: No timelines found for role '${t}' in interaction '${e.id}'. Available roles: [${o}]`
          );
        }
        return s;
      }
      getTimelineIdForRole(e, t) {
        return this.getTimelineIdsForRole(e, t)[0];
      }
      getTimelineIdsForGroup(e, t) {
        return (e.timelineIds ?? []).filter(
          (r) => this.timelineDefs.get(r)?.groupId === t
        );
      }
      resolveAssignedTimelineIds(e, t) {
        let r = e[1];
        if (r.assignedGroupId === null) return [];
        if (r.assignedGroupId)
          return this.getTimelineIdsForGroup(t, r.assignedGroupId);
        if (r.assignedTimelineRole)
          return this.getTimelineIdsForRole(t, r.assignedTimelineRole);
      }
      hasRoleActivationObserver(e) {
        for (let t of e.triggers ?? [])
          if (this.pluginReg.getRoleActivationObserver(t[0])) return !0;
        return !1;
      }
      notifyRoleActivationObservers(e, t, r, s, o, i) {
        let a = this.triggerCleanupFunctions.get(e.id);
        if (!(!a || (i && a !== i)))
          for (let l of e.triggers ?? []) {
            let c = this.pluginReg.getRoleActivationObserver(l[0]);
            if (c)
              try {
                let u = l[2],
                  f = u
                    ? this.resolveTargets(
                        u,
                        o ? { trigger: l, triggerElement: o } : { trigger: l },
                        e
                      )
                    : [];
                if (f.length === 0) continue;
                let d = c(t, {
                  elements: f,
                  trigger: l,
                  causeTrigger: s,
                  causeElement: o,
                });
                d && r.push(d);
              } catch (u) {
                console.error(
                  "Error notifying role activation observer (target resolution or observer):",
                  l[0],
                  u
                );
              }
          }
      }
      makeRoleActivationHooks(e, t, r) {
        let { assignedGroupId: s, assignedTimelineRole: o } = t[1],
          i =
            this.lastActivatedRoles.get(t)?.get(r) ??
            (s === null || s ? void 0 : o);
        if (!i || !this.hasRoleActivationObserver(e)) return {};
        let a = [],
          l = this.triggerCleanupFunctions.get(e.id);
        return {
          notifyObservers: () => {
            this.notifyRoleActivationObservers(e, i, a, t, r, l);
          },
          settle: () => {
            for (let c of a)
              try {
                c();
              } catch (u) {
                console.error("Error in role activation settle callback:", u);
              }
          },
        };
      }
      async runTrigger(e, t, r, s, o, i) {
        let a = i?.onComplete,
          l = i?.role,
          c = 0,
          u = !1,
          f = [],
          d = () => {
            if (!u) {
              u = !0;
              try {
                a?.();
              } catch (_) {
                console.error("Error in activation completion callback:", _);
              }
              for (let _ of f)
                try {
                  _();
                } catch (S) {
                  console.error("Error in role activation settle callback:", S);
                }
            }
          };
        if (window.__wf_ix3) {
          d();
          return;
        }
        if (s?.length === 0) {
          this.lastRoutedTimelineIds.get(e)?.delete(t),
            this.lastActivatedRoles.get(e)?.delete(t),
            d();
          return;
        }
        let p = e[1],
          h = this.triggeredElements.get(r);
        h || this.triggeredElements.set(r, (h = new Set())), h.add(t);
        let g = this.interactions.get(r);
        if (!g || !g.triggers.includes(e)) {
          d();
          return;
        }
        let y = s ?? g.timelineIds ?? [];
        if (y.length === 0) {
          d();
          return;
        }
        c = y.length;
        let E = this.lastRoutedTimelineIds.get(e);
        E || this.lastRoutedTimelineIds.set(e, (E = new WeakMap())),
          E.set(t, y);
        let w = this.lastActivatedRoles.get(e);
        w || this.lastActivatedRoles.set(e, (w = new WeakMap())),
          l ? w.set(t, l) : w.delete(t);
        let m = !1,
          A = this.triggerCleanupFunctions.get(g.id),
          b = () => {
            m ||
              !l ||
              ((m = !0), this.notifyRoleActivationObservers(g, l, f, e, t, A));
          },
          v = a != null || (l != null && this.hasRoleActivationObserver(g)),
          T = () =>
            v
              ? () => {
                  --c <= 0 && d();
                }
              : void 0;
        try {
          if (p.conditionalLogic)
            try {
              let S = (await this.conditionEval.evaluateConditionsForTrigger(
                p.conditionalLogic.conditions,
                g
              ))
                ? p.conditionalLogic.ifTrue
                : p.conditionalLogic.ifFalse;
              S
                ? this.executeConditionalOutcome(S, t, g, y, v ? d : void 0, b)
                : d();
            } catch (_) {
              console.error("Error evaluating trigger conditional logic:", _);
              let S = T();
              y.forEach((I) => this.runTimelineAction(I, p, t, o, S, b));
            }
          else {
            let _ = T();
            y.forEach((S) => this.runTimelineAction(S, p, t, o, _, b));
          }
        } catch (_) {
          console.error("Error in trigger execution:", _), d();
        }
      }
      skipToEndState(e, t, r, s, o, i) {
        (s ?? e.timelineIds ?? []).forEach((l) => {
          let c =
              o ?? (r ? this.getEffectivePlaybackConfig(l, r).control : void 0),
            u = this.features.timelineGroups === !0,
            f = u ? void 0 : this.coordinator.getTimeline(l, t);
          if (
            (!u && !f) ||
            c === "pause" ||
            c === "stop" ||
            c === "none" ||
            ((f ??= this.coordinator.getTimeline(l, t)), !f)
          )
            return;
          let d;
          switch (c) {
            case "reverse":
            case "reverseFlipEase":
              d = 0;
              break;
            case "togglePlayReverse":
            case "togglePlayReverseFlipEase":
              d = Math.round(1 - f.totalProgress());
              break;
            case "resume":
              d = f.reversed() ? 0 : 1;
              break;
            case "play":
            case "restart":
            case void 0:
              d = 1;
              break;
            default: {
              let p = c;
              d = 1;
              break;
            }
          }
          i?.(), this.coordinator.setTotalProgress(l, d, t ?? null);
        });
      }
      executeConditionalOutcome(e, t, r, s, o, i) {
        let {
            control: a,
            targetTimelineId: l,
            speed: c,
            jump: u,
            delay: f = 0,
          } = e,
          d = (0, J.toSeconds)(f);
        if (a === "none") {
          o?.();
          return;
        }
        let p = r.timelineIds ?? [],
          h;
        if (l) {
          if (!p.includes(l)) {
            console.warn(
              `Target timeline '${l}' not found in interaction '${
                r.id
              }'. Available timelines: ${p.join(", ")}`
            ),
              o?.();
            return;
          }
          h = [l];
        } else h = p;
        if (s) {
          let w = new Set(s);
          h = h.filter((m) => w.has(m));
        }
        if (h.length === 0) {
          o?.();
          return;
        }
        let g = h.length,
          y = o
            ? () => {
                --g <= 0 && o();
              }
            : void 0,
          E = () => {
            a !== "pause" && a !== "stop" && i?.(),
              h.forEach((w) => {
                c !== void 0 &&
                  (this.features.timelineGroups !== !0 ||
                    (a !== "pause" && a !== "stop")) &&
                  this.coordinator.setTimeScale(w, c, t);
                let m = (0, J.toSeconds)(u);
                switch (a) {
                  case "play":
                    this.coordinator.play(w, t, m);
                    break;
                  case "pause":
                    this.coordinator.pause(w, t, m);
                    break;
                  case "resume":
                    this.coordinator.resume(w, t, m);
                    break;
                  case "reverse":
                  case "reverseFlipEase":
                    this.coordinator.reverse(w, t, m);
                    break;
                  case "restart":
                    this.coordinator.restart(w, t);
                    break;
                  case "stop":
                    this.coordinator.pause(w, t, m);
                    break;
                  case "togglePlayReverse":
                  case "togglePlayReverseFlipEase":
                    this.coordinator.togglePlayReverse(w, t);
                    break;
                  default: {
                    this.coordinator.restart(w, t);
                    let A = a;
                    break;
                  }
                }
                y && this.notifyOnTimelineSettled(w, t, a, y);
              });
          };
        d
          ? setTimeout(() => {
              E();
            }, d * 1e3)
          : E();
      }
      getEffectivePlaybackConfig(e, t) {
        let r = this.timelineDefs.get(e);
        if (
          r &&
          (this.features.timelineGroups === !0
            ? r.triggerMetadata?.role != null
            : r.triggerMetadata)
        ) {
          let o = r.settings;
          return {
            control: o?.control,
            delay: o?.delay,
            jump: o?.jump,
            speed: o?.speed,
          };
        }
        let s =
          t.controlType && (0, J.isValidControlType)(t.controlType)
            ? t.controlType
            : ue.TimelineControlType.STANDARD;
        if (r?.groupId && s === ue.TimelineControlType.STANDARD) {
          let o = r.settings;
          return {
            control: t.control,
            delay: void 0,
            jump: o?.jump,
            speed: o?.speed,
          };
        }
        return {
          control: t.control,
          delay: void 0,
          jump: t.jump,
          speed: t.speed,
        };
      }
      runTimelineAction(e, t, r, s, o, i) {
        let {
            control: a,
            delay: l,
            jump: c,
            speed: u,
          } = this.getEffectivePlaybackConfig(e, t),
          f = s ?? a,
          d = this.timelineDefs.get(e);
        if (d?.reuse) {
          let y = d.reuse.sourceTimelineId;
          if (!this.timelineDefs.has(y)) {
            console.warn(`Timeline reuse: source '${y}' not found for '${e}'`),
              o?.();
            return;
          }
          e = y;
        }
        let p = () => {
            let y = this.features.timelineGroups === !0;
            if (y && f === "none") return;
            (!y || (f !== "pause" && f !== "stop")) &&
              this.coordinator.setTimeScale(e, u ?? 1, r);
            let E = (0, J.toSeconds)(c);
            switch (f) {
              case "play":
                this.coordinator.play(e, r, E);
                break;
              case "pause":
                this.coordinator.pause(e, r, E);
                break;
              case "resume":
                this.coordinator.resume(e, r, E);
                break;
              case "reverse":
              case "reverseFlipEase":
                this.coordinator.reverse(e, r, E);
                break;
              case "restart":
                this.coordinator.restart(e, r);
                break;
              case "togglePlayReverse":
              case "togglePlayReverseFlipEase":
                this.coordinator.togglePlayReverse(e, r);
                break;
              case "stop":
                this.coordinator.pause(e, r, E);
                break;
              case "none":
                break;
              case void 0:
                this.coordinator.restart(e, r);
                break;
              default: {
                let w = f;
                this.coordinator.restart(e, r);
                break;
              }
            }
          },
          h =
            o || i
              ? () => {
                  f !== "none" && f !== "pause" && f !== "stop" && i?.(),
                    p(),
                    o && this.notifyOnTimelineSettled(e, r, f, o);
                }
              : p,
          g = (0, J.toSeconds)(l);
        g && g > 0 ? setTimeout(h, g * 1e3) : h();
      }
      notifyOnTimelineSettled(e, t, r, s) {
        if (r === "pause" || r === "stop" || r === "none") {
          s();
          return;
        }
        let o = this.coordinator.getTimeline(e, t);
        if (!o) {
          s();
          return;
        }
        let i = o.reversed() ? "onReverseComplete" : "onComplete",
          a = i === "onReverseComplete" ? 0 : 1;
        if (!o.isActive() && o.totalProgress() === a) {
          s();
          return;
        }
        let l = o.eventCallback(i),
          c = !1,
          u,
          f = function (...d) {
            if (c) {
              l?.apply(this, d);
              return;
            }
            (c = !0), u?.(), o.eventCallback(i, l ?? null);
            try {
              l?.apply(this, d);
            } catch (p) {
              console.error(
                "Error in chained timeline completion callback:",
                p
              );
            }
            s();
          };
        o.eventCallback(i, f),
          (u = this.coordinator.registerCleanup(
            e,
            () => {
              c ||
                ((c = !0),
                o.eventCallback(i) === f && o.eventCallback(i, l ?? null),
                s());
            },
            t
          ));
      }
      resolveTargets;
      isTargetDynamic;
      getComponentScopeSelector(e) {
        let t = this.componentScopeSelectors.get(e);
        return (
          t ||
            ((t = `[data-wf-component-id="${CSS.escape(e)}"]`),
            this.componentScopeSelectors.set(e, t)),
          t
        );
      }
      resolveTargetsImpl(e, t, r, s) {
        let [o, i, a] = e;
        if (i === "*" && a && a.filterBy) {
          let d = this.resolveUniversalSelectorOptimized(a, t, r, s);
          if (d) return d;
        }
        let l = this.pluginReg.getTargetResolver([o, i]);
        if (!l) return [];
        let c = l.resolve([o, i], t),
          u = s && !l.isPageLevel ? this.filterByScope(c, s) : c;
        if (!u.length || !a || a.relationship === "none" || !a.filterBy)
          return u;
        let f =
          t.anchorFilterToTrigger && t.triggerElement
            ? [t.triggerElement]
            : this.resolveTargetsImpl(a.filterBy, t, r, s);
        return this.applyRelationshipFilter(
          u,
          a.relationship,
          f,
          a.firstMatchOnly
        );
      }
      resolveUniversalSelectorOptimized(e, t, r, s) {
        if (!e.filterBy) return null;
        let o =
            t.anchorFilterToTrigger && t.triggerElement
              ? [t.triggerElement]
              : this.resolveTargetsImpl(e.filterBy, t, r, s),
          i = o.length;
        if (!i) return [];
        let a = !!e.firstMatchOnly;
        switch (e.relationship) {
          case "direct-child-of": {
            let l = [];
            for (let c = 0; c < i; c++) {
              let u = o[c];
              if (!u) continue;
              let f = u.children;
              for (let d = 0; d < f.length; d++)
                if ((l.push(f[d]), a)) return l;
            }
            return l;
          }
          case "within": {
            let l = [];
            for (let c = 0; c < i; c++) {
              let u = o[c];
              if (!u) continue;
              let f = u.querySelectorAll("*");
              for (let d = 0; d < f.length; d++)
                if ((l.push(f[d]), a)) return l;
            }
            return l;
          }
          case "direct-parent-of": {
            let l = new Set(),
              c = [];
            for (let u = 0; u < i; u++) {
              let f = o[u];
              if (!f) continue;
              let d = f.parentElement;
              if (d && !l.has(d) && (l.add(d), c.push(d), a)) break;
            }
            return s ? this.filterByScope(c, s) : c;
          }
          case "next-sibling-of": {
            let l = [];
            for (let c = 0; c < i; c++) {
              let u = o[c];
              if (!u) continue;
              let f = u.nextElementSibling;
              if (f && (l.push(f), a)) break;
            }
            return s ? this.filterByScope(l, s) : l;
          }
          case "prev-sibling-of": {
            let l = [];
            for (let c = 0; c < i; c++) {
              let u = o[c];
              if (!u) continue;
              let f = u.previousElementSibling;
              if (f && (l.push(f), a)) break;
            }
            return s ? this.filterByScope(l, s) : l;
          }
          case "next-to": {
            let l = new Set(),
              c = [];
            for (let u = 0; u < i; u++) {
              let f = o[u];
              if (!f) continue;
              let d = f.parentElement;
              if (d) {
                let p = d.children;
                for (let h = 0; h < p.length; h++) {
                  let g = p[h];
                  if (g !== f && !l.has(g) && (l.add(g), c.push(g), a)) break;
                }
                if (a && c.length) break;
              }
            }
            return s ? this.filterByScope(c, s) : c;
          }
          case "contains": {
            let l = new Set(),
              c = [];
            for (let u = 0; u < i; u++) {
              let f = o[u];
              if (!f) continue;
              let d = f.parentElement;
              for (; d && !(l.has(d) || (l.add(d), c.push(d), a)); )
                d = d.parentElement;
              if (a && c.length) break;
            }
            return s ? this.filterByScope(c, s) : c;
          }
          default:
            return null;
        }
      }
      applyRelationshipFilter(e, t, r, s) {
        if (!e.length || !r.length) return [];
        if (t === "none") return e;
        let o = [],
          i = new Set();
        switch (t) {
          case "direct-child-of": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (
                !i.has(c) &&
                c.parentElement &&
                a.has(c.parentElement) &&
                (i.add(c), o.push(c), s)
              )
                return o;
            }
            return o;
          }
          case "direct-parent-of": {
            let a = new Set();
            for (let l = 0; l < r.length; l++) {
              let c = r[l].parentElement;
              c && a.add(c);
            }
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (!i.has(c) && a.has(c) && (i.add(c), o.push(c), s)) return o;
            }
            return o;
          }
          case "next-sibling-of": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (i.has(c)) continue;
              let u = c.previousElementSibling;
              if (u && a.has(u) && (i.add(c), o.push(c), s)) return o;
            }
            return o;
          }
          case "prev-sibling-of": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (i.has(c)) continue;
              let u = c.nextElementSibling;
              if (u && a.has(u) && (i.add(c), o.push(c), s)) return o;
            }
            return o;
          }
          case "next-to": {
            let a = new Set(r),
              l = new Map();
            for (let c = 0; c < r.length; c++) {
              let u = r[c].parentElement;
              u && l.set(u, (l.get(u) ?? 0) + 1);
            }
            for (let c = 0; c < e.length; c++) {
              let u = e[c];
              if (i.has(u) || !u.parentElement) continue;
              let f = l.get(u.parentElement);
              if (f && !(a.has(u) && f <= 1) && (i.add(u), o.push(u), s))
                return o;
            }
            return o;
          }
          case "within": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (i.has(c)) continue;
              let u = c.parentElement;
              for (; u; ) {
                if (a.has(u)) {
                  if ((i.add(c), o.push(c), s)) return o;
                  break;
                }
                u = u.parentElement;
              }
            }
            return o;
          }
          case "contains": {
            let a = new Set();
            for (let l = 0; l < r.length; l++) {
              let c = r[l].parentElement;
              for (; c && !a.has(c); ) a.add(c), (c = c.parentElement);
            }
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (!i.has(c) && a.has(c) && (i.add(c), o.push(c), s)) return o;
            }
            return o;
          }
          default:
            return [];
        }
      }
      filterByInstance(e, t, r) {
        if (!e.length) return e;
        let s = r.closest(t);
        if (!s) return e;
        let o = -1;
        for (let a = 0; a < e.length; a++)
          if (e[a]?.closest(t) !== s) {
            o = a;
            break;
          }
        if (o === -1) return e;
        let i = e.slice(0, o);
        for (let a = o + 1; a < e.length; a++) {
          let l = e[a];
          l?.closest(t) === s && i.push(l);
        }
        return i;
      }
      filterByScope(e, t) {
        if (!e.length) return e;
        let r = -1;
        for (let o = 0; o < e.length; o++)
          if (!e[o]?.closest(t)) {
            r = o;
            break;
          }
        if (r === -1) return e;
        let s = e.slice(0, r);
        for (let o = r + 1; o < e.length; o++) {
          let i = e[o];
          i?.closest(t) && s.push(i);
        }
        return s;
      }
      filterByVariant(e, t, r) {
        if (!e.length) return e;
        let s = (a) => {
            let l = a.closest(t);
            if (!l) return !1;
            let c = l.getAttribute("data-wf-variant-state");
            return c != null && r.includes(c);
          },
          o = -1;
        for (let a = 0; a < e.length; a++) {
          let l = e[a];
          if (!l || !s(l)) {
            o = a;
            break;
          }
        }
        if (o === -1) return e;
        let i = e.slice(0, o);
        for (let a = o + 1; a < e.length; a++) {
          let l = e[a];
          l && s(l) && i.push(l);
        }
        return i;
      }
      isInInteractionScope(e, t) {
        let r = e.scope;
        if (r?.type !== "component" || !r.componentId) return !0;
        let s = this.getComponentScopeSelector(r.componentId);
        return (
          (r.variants?.length
            ? this.filterByVariant([t], s, r.variants)
            : this.filterByScope([t], s)
          ).length > 0
        );
      }
      getInteractionForTimeline;
      getInteractionsForTimelines;
      recomputeFlipEaseForOwnSources(e) {
        if (this.features.timelineGroups !== !0) return;
        let t = new Set();
        for (let r of e.timelineIds ?? [])
          this.timelineDefs.has(r) &&
            t.add(this.coordinator.resolveSourceTimelineId(r));
        for (let r of t) this.coordinator.recomputeFlipEaseForSource(r);
      }
      incrementTimelineRefCount(e) {
        let t = this.timelineRefCounts.get(e) || 0;
        this.timelineRefCounts.set(e, t + 1);
      }
      decrementTimelineRefCount(e) {
        let t = this.timelineRefCounts.get(e) || 0,
          r = Math.max(0, t - 1);
        return this.timelineRefCounts.set(e, r), r;
      }
      decrementTimelineReferences(e) {
        let t = new Set(),
          r = this.interactionTimelineRefs.get(e);
        if (!r) return t;
        for (let s of r) this.decrementTimelineRefCount(s) === 0 && t.add(s);
        return t;
      }
      unbindAllTriggers(e) {
        let t = this.triggerCleanupFunctions.get(e);
        if (t) {
          for (let [, r] of t)
            for (let s of r)
              try {
                s();
              } catch (o) {
                console.error("Error during trigger cleanup:", o);
              }
          this.triggerCleanupFunctions.delete(e);
        }
      }
      cleanupTriggerObservers(e) {
        let t = this.triggerObservers.get(e);
        if (t) {
          for (let [r, s] of t) {
            try {
              s();
            } catch (o) {
              console.error("Error during trigger observer cleanup:", o);
            }
            this.pendingReactiveUpdates.delete(r),
              this.reactiveExecutionContext.delete(r);
          }
          this.reactiveCallbackQueues.delete(e),
            this.triggerObservers.delete(e);
        }
      }
      cleanupContinuousControlsForInteraction(e) {
        let t = this.continuousCleanups.get(e);
        if (t) {
          for (let [, r] of t)
            try {
              r();
            } catch (s) {
              console.error("Error during continuous control cleanup:", s);
            }
          this.continuousCleanups.delete(e);
        }
      }
      cleanupAllContinuousControls() {
        for (let [, e] of this.continuousCleanups)
          for (let [, t] of e)
            try {
              t();
            } catch (r) {
              console.error("Error during continuous control cleanup:", r);
            }
        this.continuousCleanups.clear();
      }
      cleanupInteractionAnimations(e) {
        this.unbindAllTriggers(e),
          this.activeInteractionIds.delete(e),
          this.cleanupContinuousControlsForInteraction(e);
        let t = this.interactionTimelineRefs.get(e);
        if (t)
          for (let s of t)
            this.decrementTimelineRefCount(s) === 0 &&
              this.destroyTimelineInstance(s);
        let r = this.interactions.get(e);
        r && this.recomputeFlipEaseForOwnSources(r),
          this.resolversHeld.delete(e) &&
            (this.releaseTargetResolvers(e), this.releasedByTeardown.add(e)),
          this.triggeredElements.delete(e);
        for (let s of this.interactions.get(e)?.triggers ?? [])
          this.lastRoutedTimelineIds.delete(s),
            this.lastActivatedRoles.delete(s);
      }
    },
    pt = sr;
  nt(pt, "instance");
});
var oi = O((or) => {
  "use strict";
  Object.defineProperty(or, "__esModule", { value: !0 });
  function zu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  zu(or, {
    EASING_NAMES: function () {
      return Wu.EASING_NAMES;
    },
    IX3: function () {
      return Hu.IX3;
    },
    convertEaseConfigToGSAP: function () {
      return si.convertEaseConfigToGSAP;
    },
    convertEaseConfigToLinear: function () {
      return si.convertEaseConfigToLinear;
    },
  });
  var Hu = ri(),
    Wu = ee(),
    si = Tn();
});
var ai = O((ir) => {
  "use strict";
  Object.defineProperty(ir, "__esModule", { value: !0 });
  function Yu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Yu(ir, {
    BETA_FEATURES: function () {
      return Ge;
    },
    adminRequired: function () {
      return M;
    },
    betaFeaturesTestingLib: function () {
      return Zu;
    },
    getBetaFeatureDefinition: function () {
      return Ku;
    },
    isBetaFeatureFlag: function () {
      return Xu;
    },
  });
  var M = [],
    ii = [],
    Ge = {
      figma: { shortcut: M, scope: ["user"] },
      rssUrl: { shortcut: ["* r s s u r l"], scope: ["user"] },
      disableBlockers: { shortcut: ["* z o o m"], scope: ["user"] },
      peek: { shortcut: ii, scope: ["user"] },
      ecShipStation: { shortcut: M, scope: ["user"] },
      betaception: { shortcut: ii, scope: ["user"] },
      fileUpload: { shortcut: M, scope: ["user"] },
      customClassInRichText: { shortcut: ["* c c c"], scope: ["user"] },
      allowCustomSiteHeader: { shortcut: M, scope: ["site"] },
      showFastlyAsEdgeIPs: { shortcut: M, scope: ["site"] },
      useNewBillingSystem: { shortcut: M, scope: ["user"] },
      useUserTaxCollection: { shortcut: M, scope: ["user"] },
      useTeamTaxCollection: { shortcut: M, scope: ["workspace"] },
      auditCorruptedCheckout: { shortcut: ["* a e c o m"], scope: ["user"] },
      auditLazyImage: { shortcut: ["* a l a z y"], scope: ["user"] },
      lab: { shortcut: ["* l a b"], scope: ["user"] },
      logicFlowsV2: { shortcut: M, scope: ["user"] },
      logicDev: { shortcut: M, scope: ["user"] },
      logicEventTriggers: { shortcut: M, scope: ["site"] },
      disableWorkspaceAnnotationEmailNotifications: {
        shortcut: M,
        scope: ["workspace"],
      },
      hasEnterpriseSite: { shortcut: M, scope: ["workspace"] },
      isEnterprisePartner: { shortcut: M, scope: ["workspace"] },
      isEnterprise: { shortcut: M, scope: ["workspace"] },
      isEnterprisePro: { shortcut: M, scope: ["workspace"] },
      isEnterpriseLite: { shortcut: M, scope: ["workspace"] },
      isEnterpriseSite: { shortcut: M, scope: ["site"] },
      disableWorkspaceReviewEmailNotifications: {
        shortcut: M,
        scope: ["workspace"],
      },
      enableUnlimitedWorkspaceLibraries: { shortcut: M, scope: ["workspace"] },
      isEnterpriseLiteSite: { shortcut: M, scope: ["site"] },
      enterpriseCustomSslCert: { shortcut: M, scope: ["site"] },
      enterpriseMarketingIntegrations: { shortcut: M, scope: ["workspace"] },
      hubspotMarketingIntegration: { shortcut: M, scope: ["workspace"] },
      pageBuilderRole: { shortcut: M, scope: ["workspace"] },
      testSiteBeta: { shortcut: ["* t s"], scope: ["site"] },
      testWorkspaceBeta: { shortcut: M, scope: ["workspace"] },
      testUserAndWorkspaceBeta: { shortcut: M, scope: ["user", "workspace"] },
      dl: { shortcut: M, scope: ["user", "workspace"], open: !0 },
      rolesNWorkspaces: { shortcut: M, scope: ["user"] },
      reactQueryDevtools: { shortcut: M, scope: ["user"] },
      auditInputLabels: { shortcut: ["* l a b e l"], scope: ["user"] },
      auditFocusStyles: { shortcut: ["* f o c u s"], scope: ["user"] },
      dns01CertValidation: { shortcut: M, scope: ["site"] },
      enableReactDashboard: { shortcut: M, scope: ["user"] },
      focusWithin: { shortcut: ["* w i t h i n"], scope: ["user"] },
      trialSubscription: { shortcut: M, scope: ["site"] },
      pluginComponents: { shortcut: M, scope: ["site"] },
      thirdPartyLibrariesAuthoring: { shortcut: M, scope: ["site"] },
      localization: { shortcut: M, scope: ["site"] },
      localizationCanPublishLocales: { shortcut: M, scope: ["site"] },
      jank: { shortcut: ["* j a n k"], scope: ["user"] },
      aiHelpFollowUps: { shortcut: M, scope: ["workspace"] },
      enterpriseSiteActivityLogBeta: { shortcut: M, scope: ["workspace"] },
      marketplacePaymentsCreator: { shortcut: M, scope: ["workspace"] },
      disableBS: { shortcut: ["* d b s"], scope: ["user"] },
      optimize: { shortcut: M, scope: ["site"] },
      optimizeStandalone: { shortcut: M, scope: ["workspace"] },
      analyze: { shortcut: M, scope: ["site"] },
      testUserBeta: { shortcut: M, scope: ["user"] },
      testUserBeta2: { shortcut: M, scope: ["user"] },
      testOAuthAppBeta: { shortcut: M, scope: ["oauthApplication"] },
    },
    Ku = (n) => Ge[n];
  function Xu(n) {
    return n in Ge;
  }
  var Zu = {
    addBetaFlag: function (e, t) {
      Ge[e] = t;
    },
    removeBetaFlag: function (e) {
      delete Ge[e];
    },
  };
});
var li = O((ar) => {
  "use strict";
  Object.defineProperty(ar, "__esModule", { value: !0 });
  function Qu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Qu(ar, {
    createConstantsStore: function () {
      return Ju;
    },
    selectAppName: function () {
      return ef;
    },
    selectReadOnly: function () {
      return tf;
    },
  });
  var Ju = (n) => {
      function e() {
        return n;
      }
      return { initialState: n, reducer: e };
    },
    ef = (n) => n.ConstantsStore.appName,
    tf = (n) => n.ConstantsStore.readOnly;
});
var ci = O((lr) => {
  "use strict";
  Object.defineProperty(lr, "__esModule", { value: !0 });
  Object.defineProperty(lr, "WebflowEnvironments", {
    enumerable: !0,
    get: function () {
      return nf;
    },
  });
  var nf = Object.freeze({
    DESIGNER: "designer",
    EDITOR: "editor",
    SSR: "ssr",
    EXPORT: "export",
    LLM: "llm",
  });
});
var fi = O((ui) => {
  "use strict";
  Object.defineProperty(ui, "__esModule", { value: !0 });
});
var di = O((cr) => {
  "use strict";
  Object.defineProperty(cr, "__esModule", { value: !0 });
  Object.defineProperty(cr, "TARGET_AI_SITE_GEN_LIBRARY_SLUG", {
    enumerable: !0,
    get: function () {
      return rf;
    },
  });
  var rf = "ai-gen-82921b10-4b39-48f0-b346-808cf4903d29";
});
var yi = O((ur) => {
  "use strict";
  Object.defineProperty(ur, "__esModule", { value: !0 });
  function sf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  sf(ur, {
    instPathKey: function () {
      return hi;
    },
    instPathSetKey: function () {
      return af;
    },
    parseInstPathKey: function () {
      return gi;
    },
    parseInstPathSetKey: function () {
      return lf;
    },
    readInstPath: function () {
      return pi;
    },
    readInstPathsFromTriggers: function () {
      return of;
    },
  });
  function pi(n) {
    if (!Array.isArray(n)) return null;
    let e = Array.isArray(n[0]) ? n[0] : n;
    if (!Array.isArray(e)) return null;
    let [t, r] = e;
    return typeof t == "string" && t !== "" && typeof r == "string" && r !== ""
      ? [t, r]
      : null;
  }
  function of(n, e, t) {
    let r = [];
    for (let s of n ?? []) {
      if (s[0] !== e) continue;
      let o = s[2];
      if (!Array.isArray(o) || o[0] !== t) continue;
      let i = pi(o[1]);
      i && r.push(i);
    }
    return r;
  }
  function hi(n, e) {
    return `${n} ${e}`;
  }
  function gi(n) {
    let e = n.split(" ");
    return e.length === 2 && e[0] && e[1] ? [e[0], e[1]] : null;
  }
  var mi = "|";
  function af(n) {
    return n.map(([e, t]) => hi(e, t)).join(mi);
  }
  function lf(n) {
    if (n === "") return [];
    let e = [];
    for (let t of n.split(mi)) {
      let r = gi(t);
      if (!r) return null;
      e.push(r);
    }
    return e;
  }
});
var vi = O((fr) => {
  "use strict";
  Object.defineProperty(fr, "__esModule", { value: !0 });
  function cf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  cf(fr, {
    POPOVER_ANIMATED_ATTRIBUTE: function () {
      return mf;
    },
    POPOVER_ANIMATION_CLOSE_COMMAND: function () {
      return bf;
    },
    POPOVER_ANIMATION_OPEN_COMMAND: function () {
      return Tf;
    },
    POPOVER_BACKDROP_ANIMATED_ATTRIBUTE: function () {
      return df;
    },
    POPOVER_BACKDROP_ANIMATION_PROPERTY: function () {
      return ff;
    },
    POPOVER_BACKDROP_KEYFRAMES_PREFIX: function () {
      return pf;
    },
    POPOVER_CLASS: function () {
      return uf;
    },
    POPOVER_COMMAND_EVENT: function () {
      return vf;
    },
    POPOVER_MASK_CLASS: function () {
      return hf;
    },
    POPOVER_MASK_FOR_ATTRIBUTE: function () {
      return gf;
    },
    POPOVER_MODE_ATTRIBUTE: function () {
      return yf;
    },
  });
  var uf = "w-popover",
    ff = "--w-backdrop-animation",
    df = "data-w-popover-backdrop-animated",
    pf = "w-bd-",
    hf = "w-popover-mask",
    gf = "data-w-popover-mask-for",
    mf = "data-w-popover-animated",
    yf = "data-w-popover-mode",
    vf = "webflow:popover-command",
    Tf = "animation-open",
    bf = "animation-close";
});
var Ue = O((ie) => {
  "use strict";
  Object.defineProperty(ie, "__esModule", { value: !0 });
  ge(ai(), ie);
  ge(li(), ie);
  ge(ci(), ie);
  ge(fi(), ie);
  ge(di(), ie);
  ge(yi(), ie);
  ge(vi(), ie);
  function ge(n, e) {
    return (
      Object.keys(n).forEach(function (t) {
        t !== "default" &&
          !Object.prototype.hasOwnProperty.call(e, t) &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          });
      }),
      n
    );
  }
});
var mr = O((gr) => {
  "use strict";
  Object.defineProperty(gr, "__esModule", { value: !0 });
  function Sf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Sf(gr, {
    COMPONENT_INSTANCE_TRIGGER_KEYS: function () {
      return bi;
    },
    COMPONENT_TIMELINE_ROLES: function () {
      return zf;
    },
    DEFAULT_DURATION_TRIGGER_MODE: function () {
      return Mf;
    },
    DEFAULT_DURATION_TRIGGER_SECONDS: function () {
      return Cf;
    },
    DEFAULT_MOUSE_FOLLOW_ANCHOR: function () {
      return _f;
    },
    DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE: function () {
      return Rf;
    },
    DURATION_TRIGGER_MODES: function () {
      return If;
    },
    DURATION_TRIGGER_SECONDS_RANGE: function () {
      return hr;
    },
    HOVER_TIMELINE_ROLES: function () {
      return Wf;
    },
    INST_PATH_TARGET_KEYS: function () {
      return Ti;
    },
    IX3_POPOVER_STATE_EVENT: function () {
      return xf;
    },
    IX3_WF_EXTENSION_KEYS: function () {
      return dr;
    },
    MOUSE_MOVE_CHANNELS: function () {
      return $f;
    },
    MOUSE_MOVE_TIMELINE_ROLES: function () {
      return Ff;
    },
    POPOVER_ANIMATED_ATTRIBUTE: function () {
      return Ef.POPOVER_ANIMATED_ATTRIBUTE;
    },
    POPOVER_TIMELINE_ROLES: function () {
      return Hf;
    },
    TIMELINE_ROLE_NAMES: function () {
      return j;
    },
    TargetScope: function () {
      return pr;
    },
    VELOCITY_CAPABLE_PROPS: function () {
      return Si;
    },
    canUseVelocityInfluenceProperty: function () {
      return Df;
    },
    getEffectiveFollowMode: function () {
      return Of;
    },
    getMouseFollowConfig: function () {
      return wf;
    },
    getMouseMoveTimelineContext: function () {
      return ht;
    },
    getOppositeMouseFollowAxis: function () {
      return jf;
    },
    getSingleAxisMouseFollowMode: function () {
      return Af;
    },
    isComponentInstanceTriggerKey: function () {
      return Nf;
    },
    isInstPathTargetKey: function () {
      return kf;
    },
    isMouseMoveIntervalRole: function () {
      return Bf;
    },
    isVelocityInfluenceEnabled: function () {
      return Lf;
    },
    minimumDurationSeconds: function () {
      return Pf;
    },
    mouseFollowAxisToRole: function () {
      return Gf;
    },
    mouseFollowRoleToAxis: function () {
      return Vf;
    },
    mouseFollowRoleToSiblingRole: function () {
      return Uf;
    },
    narrowMouseMoveIntervalPayload: function () {
      return qf;
    },
  });
  var Ef = Ue(),
    dr;
  (function (n) {
    (n.CLASS = "wf:class"),
      (n.BODY = "wf:body"),
      (n.ID = "wf:id"),
      (n.TRIGGER_ONLY = "wf:trigger-only"),
      (n.TRIGGER_ONLY_PARENT = "wf:trigger-only-parent"),
      (n.SELECTOR = "wf:selector"),
      (n.ATTRIBUTE = "wf:attribute"),
      (n.INST = "wf:inst"),
      (n.ANY_ELEMENT = "wf:any-element"),
      (n.VIEWPORT = "wf:viewport"),
      (n.POPOVER_ELEMENT = "wf:popover-element"),
      (n.POPOVER_BACKDROP = "wf:popover-backdrop"),
      (n.STYLE = "wf:style"),
      (n.TRANSFORM = "wf:transform"),
      (n.LOTTIE = "wf:lottie"),
      (n.SPLINE = "wf:spline"),
      (n.VARIABLE = "wf:variable"),
      (n.RIVE = "wf:rive"),
      (n.ANIMATE_RIVE = "wf:animate-rive"),
      (n.MOUSE_FOLLOW = "wf:mouse-follow"),
      (n.CLICK = "wf:click"),
      (n.HOVER = "wf:hover"),
      (n.LOAD = "wf:load"),
      (n.FOCUS = "wf:focus"),
      (n.BLUR = "wf:blur"),
      (n.SCROLL = "wf:scroll"),
      (n.SCROLL_SCRUB = "wf:scroll-scrub"),
      (n.SCROLL_ACTIONS = "wf:scroll-actions"),
      (n.SCROLL_DIRECTION = "wf:scroll-direction"),
      (n.CUSTOM = "wf:custom"),
      (n.CHANGE = "wf:change"),
      (n.MOUSE_MOVE = "wf:mouse-move"),
      (n.NAVBAR = "wf:navbar"),
      (n.DROPDOWN = "wf:dropdown"),
      (n.POPOVER = "wf:popover"),
      (n.EXIT_INTENT = "wf:exit-intent"),
      (n.DURATION = "wf:duration"),
      (n.PREFERS_REDUCED_MOTION = "wf:prefersReducedMotion"),
      (n.WEBFLOW_BREAKPOINTS = "wf:webflowBreakpoints"),
      (n.CUSTOM_MEDIA_QUERY = "wf:customMediaQuery"),
      (n.COLOR_SCHEME = "wf:colorScheme"),
      (n.ELEMENT_DATA_ATTRIBUTE = "wf:elementDataAttribute"),
      (n.CURRENT_TIME = "wf:currentTime"),
      (n.ELEMENT_STATE = "wf:elementState");
  })(dr || (dr = {}));
  var pr;
  (function (n) {
    (n.ALL = "all"),
      (n.PARENT = "parent"),
      (n.CHILDREN = "children"),
      (n.SIBLINGS = "siblings"),
      (n.NEXT = "next"),
      (n.PREVIOUS = "previous"),
      (n.FIRST_ANCESTOR = "first-ancestor"),
      (n.FIRST_DESCENDANT = "first-descendant"),
      (n.DESCENDANTS = "descendants"),
      (n.ANCESTORS = "ancestors");
  })(pr || (pr = {}));
  function wf(n) {
    let e = n?.properties?.["wf:mouse-follow"];
    if (!(typeof e != "object" || e === null || Array.isArray(e))) return e;
  }
  function Of(n) {
    return n?.followMode ?? "full";
  }
  function Af(n) {
    return n === "x" ? "x-only" : "y-only";
  }
  var _f = "50% 50%",
    Rf = 100,
    If = ["idle", "timeOnSite"],
    Mf = "timeOnSite",
    Cf = 5,
    hr = { min: 0, max: 3600 },
    Pf = (n) => (n === "idle" ? Math.max(1, hr.min) : hr.min),
    xf = "webflow:popover-state",
    Ti = ["wf:inst", "wf:popover-element", "wf:popover-backdrop"];
  function kf(n) {
    return Ti.includes(n);
  }
  var bi = ["wf:popover"];
  function Nf(n) {
    return bi.includes(n);
  }
  var j = {
    MOUSE_X: "mouseX",
    MOUSE_Y: "mouseY",
    INTERVAL: "interval",
    OPEN: "open",
    CLOSE: "close",
    MOUSE_ENTER: "mouseEnter",
    MOUSE_LEAVE: "mouseLeave",
  };
  function ht(n) {
    return n === j.MOUSE_X
      ? { kind: "mouse-x", role: n, axis: "x", siblingRole: j.MOUSE_Y }
      : n === j.MOUSE_Y
      ? { kind: "mouse-y", role: n, axis: "y", siblingRole: j.MOUSE_X }
      : n === j.INTERVAL
      ? { kind: "interval", role: n }
      : { kind: "other", role: n ?? void 0 };
  }
  var Ff = {
      MOUSE_X: { role: j.MOUSE_X, label: "Mouse X", usePercentCanvas: !0 },
      MOUSE_Y: { role: j.MOUSE_Y, label: "Mouse Y", usePercentCanvas: !0 },
      INTERVAL: { role: j.INTERVAL, label: "Interval" },
    },
    Si = new Set([
      "x",
      "y",
      "scale",
      "scaleX",
      "scaleY",
      "rotation",
      "skewX",
      "skewY",
      "opacity",
    ]);
  function Lf(n) {
    return (
      n?.pluginConfig?.type === "mouseMove" &&
      !!n.pluginConfig.velocityInfluence
    );
  }
  function Df(n) {
    return Si.has(n);
  }
  function Bf(n) {
    return ht(n).kind === "interval";
  }
  function Vf(n) {
    let e = ht(n);
    return e.kind === "mouse-x" || e.kind === "mouse-y" ? e.axis : null;
  }
  function jf(n) {
    return n === "x" ? "y" : "x";
  }
  function Gf(n) {
    return n === "x" ? j.MOUSE_X : j.MOUSE_Y;
  }
  function Uf(n) {
    let e = ht(n);
    return e.kind === "mouse-x" || e.kind === "mouse-y" ? e.siblingRole : null;
  }
  var $f = { POSITION: "wf:mouse-move:position", LEAVE: "wf:mouse-move:leave" };
  function qf(n) {
    if (typeof n != "object" || n === null) return {};
    let e = n,
      t = {},
      r = e.cursorPos;
    return (
      typeof r == "object" &&
        r !== null &&
        typeof r.x == "number" &&
        typeof r.y == "number" &&
        (t.cursorPos = { x: r.x, y: r.y }),
      typeof e.velocityFactor == "number" &&
        (t.velocityFactor = e.velocityFactor),
      typeof e.dirX == "number" && (t.dirX = e.dirX),
      typeof e.dirY == "number" && (t.dirY = e.dirY),
      t
    );
  }
  var zf = {
      OPEN: {
        role: j.OPEN,
        label: "Open",
        allowedControls: ["play", "restart"],
        defaultControl: "play",
      },
      CLOSE: {
        role: j.CLOSE,
        label: "Close",
        allowedControls: ["play", "restart", "reverse", "reverseFlipEase"],
        allowedControlsWhenReusing: ["reverse", "reverseFlipEase"],
        defaultControl: "play",
        defaultControlWhenReusing: "reverseFlipEase",
        autoReusesRole: j.OPEN,
      },
    },
    Hf = {
      OPEN: {
        role: j.OPEN,
        label: "Open actions",
        allowedControls: ["restart"],
        defaultControl: "restart",
      },
      CLOSE: {
        role: j.CLOSE,
        label: "Close actions",
        allowedControls: ["restart"],
        defaultControl: "restart",
      },
    },
    Wf = {
      MOUSE_ENTER: {
        role: j.MOUSE_ENTER,
        label: "Hover in actions",
        allowedControls: ["play", "restart"],
        defaultControl: "play",
      },
      MOUSE_LEAVE: {
        role: j.MOUSE_LEAVE,
        label: "Hover out actions",
        allowedControls: ["play", "restart", "reverse", "reverseFlipEase"],
        defaultControl: "play",
      },
    };
});
var _i = O((Tr) => {
  "use strict";
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  function Yf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Yf(Tr, {
    createLoadedMouseFollowActionNormalizer: function () {
      return nd;
    },
    forTestSuite: function () {
      return rd;
    },
    getGroupedMouseFollowConfig: function () {
      return vr;
    },
    getUnpairedMouseFollowAction: function () {
      return Zf;
    },
    getUnpairedMouseFollowConfig: function () {
      return Ei;
    },
    remapMouseFollowActionGroupsInTimelines: function () {
      return td;
    },
    setGroupedMouseFollowActionConfig: function () {
      return Xf;
    },
    setMouseFollowActionConfig: function () {
      return wi;
    },
    stripMouseFollowActionInstanceIds: function () {
      return Qf;
    },
    stripMouseFollowConfigInstanceIds: function () {
      return yr;
    },
  });
  var gt = mr();
  function yr(n) {
    let { groupId: e, syncedActionId: t, ...r } = n;
    return r;
  }
  function Kf(n, e) {
    return { ...yr(n), groupId: e };
  }
  function vr(n, e, t) {
    let r = Kf(n, e);
    return (
      t?.axis !== void 0 && (r.axis = t.axis),
      t?.followMode !== void 0 && (r.followMode = t.followMode),
      r
    );
  }
  function Ei(n, e = n.axis) {
    let { syncedActionId: t, ...r } = n,
      s =
        r.followMode === "full" && e
          ? (0, gt.getSingleAxisMouseFollowMode)(e)
          : r.followMode;
    return { ...r, ...(s !== void 0 ? { followMode: s } : {}) };
  }
  function mt(n, e) {
    let t = (0, gt.getMouseFollowConfig)(n);
    if (!t) return n;
    let r = e(t);
    return r === t
      ? n
      : {
          ...n,
          properties: {
            ...n.properties,
            [gt.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: r,
          },
        };
  }
  function wi(n, e) {
    return {
      ...n,
      properties: {
        ...n.properties,
        [gt.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: e,
      },
    };
  }
  function Xf(n, e, t, r) {
    return wi(n, vr(e, t, r));
  }
  function Zf(n, e) {
    return mt(n, (t) => Ei(t, e));
  }
  function Qf(n) {
    return mt(n, yr);
  }
  function Jf(n, e, t) {
    return t[e] ? [n, e].sort().join(":") : `single:${n}`;
  }
  function ed(n, e, t) {
    return (
      e.groupId ??
      (e.syncedActionId ? Jf(n, e.syncedActionId, t) : `single:${n}`)
    );
  }
  function Oi(n, e) {
    let t = {};
    return (r, s = r.id) =>
      mt(r, (o) => {
        let i = ed(s, o, e),
          a = t[i] ?? n(i);
        return (t[i] = a), vr(o, a);
      });
  }
  function Ai(n, e, t) {
    let r = t ?? Object.fromEntries(n.map((o) => [o.id, o.id])),
      s = Oi(() => e(), r);
    return (o, i) => s(o, i ?? o.id);
  }
  function td(
    n,
    { generateGroupId: e, actionIdMap: t, mapAction: r = (s) => s }
  ) {
    let s = Ai(
      n.flatMap((o) => o.actions ?? []),
      e,
      t
    );
    return n.map((o) => {
      let i = !1,
        a = o.actions?.map((l) => {
          let c = l.id,
            u = r(l),
            f = s(u, c);
          return (i = i || f !== l), f;
        });
      return i && a ? { ...o, actions: a } : o;
    });
  }
  function nd(n) {
    let e = Object.fromEntries(n.map((r) => [r.id, r.id])),
      t = Oi((r) => r, e);
    return (r, s) => {
      let o = t(r);
      return s ? mt(o, (i) => (i.axis ? i : { ...i, axis: s })) : o;
    };
  }
  var rd = { createMouseFollowActionGroupRemapper: Ai };
});
var Ii = O((br) => {
  "use strict";
  Object.defineProperty(br, "__esModule", { value: !0 });
  function sd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  sd(br, {
    TRANSIENT_IX3_CLONE_ATTR: function () {
      return Ri;
    },
    isTransientIX3Clone: function () {
      return od;
    },
  });
  var Ri = "data-ix3-clone",
    od = (n) => !!n.closest?.(`[${Ri}]`);
});
var ne = O((Re) => {
  "use strict";
  Object.defineProperty(Re, "__esModule", { value: !0 });
  Object.defineProperty(Re, "CORE_PLUGIN_INFO", {
    enumerable: !0,
    get: function () {
      return id;
    },
  });
  Sr(mr(), Re);
  Sr(_i(), Re);
  Sr(Ii(), Re);
  function Sr(n, e) {
    return (
      Object.keys(n).forEach(function (t) {
        t !== "default" &&
          !Object.prototype.hasOwnProperty.call(e, t) &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          });
      }),
      n
    );
  }
  var id = { namespace: "wf", pluginId: "core", version: "1.0.0" };
});
var $e = O((wr) => {
  "use strict";
  Object.defineProperty(wr, "__esModule", { value: !0 });
  function ad(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ad(wr, {
    getScrollY: function () {
      return ud;
    },
    initScrollCache: function () {
      return cd;
    },
    noop: function () {
      return ld;
    },
  });
  var ld = () => {},
    Er = 0,
    yt = 0,
    Ie = null;
  function cd() {
    (yt += 1),
      Ie ||
        ((Ie = () => {
          Er = window.scrollY;
        }),
        (Er = window.scrollY),
        window.addEventListener("scroll", Ie, { passive: !0 }));
    let n = !1;
    return () => {
      n ||
        ((n = !0),
        (yt = Math.max(0, yt - 1)),
        yt === 0 &&
          Ie &&
          (window.removeEventListener("scroll", Ie), (Ie = null)));
    };
  }
  function ud() {
    return Er;
  }
});
var Mi = O((Or) => {
  "use strict";
  Object.defineProperty(Or, "__esModule", { value: !0 });
  function fd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  fd(Or, {
    getFirst: function () {
      return dd;
    },
    getSecond: function () {
      return pd;
    },
    pair: function () {
      return hd;
    },
  });
  var dd = (n) => n[0],
    pd = (n) => n[1],
    hd = (n, e) => [n, e];
});
var vt = O((Ar) => {
  "use strict";
  Object.defineProperty(Ar, "__esModule", { value: !0 });
  function gd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  gd(Ar, {
    TRANSIENT_IX3_CLONE_ATTR: function () {
      return Ci.TRANSIENT_IX3_CLONE_ATTR;
    },
    isTransientIX3Clone: function () {
      return Ci.isTransientIX3Clone;
    },
  });
  var Ci = ne();
});
var Rr = O((_r) => {
  "use strict";
  Object.defineProperty(_r, "__esModule", { value: !0 });
  function md(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  md(_r, {
    elementTargetSelector: function () {
      return Ed;
    },
    safeClosest: function () {
      return bd;
    },
    safeGetElementById: function () {
      return yd;
    },
    safeMatches: function () {
      return Sd;
    },
    safeQuerySelector: function () {
      return Td;
    },
    safeQuerySelectorAll: function () {
      return vd;
    },
  });
  var Tt = vt(),
    yd = (n) => {
      try {
        let e = document.getElementById(n);
        return e && !(0, Tt.isTransientIX3Clone)(e) ? e : null;
      } catch {
        return null;
      }
    },
    vd = (n, e) => {
      try {
        let t = e.querySelectorAll(n);
        if (t.length === 0) return [];
        let r = [];
        for (let s of t) (0, Tt.isTransientIX3Clone)(s) || r.push(s);
        return r;
      } catch {
        return null;
      }
    },
    Td = (n, e) => {
      try {
        let t = e.querySelector(n);
        if (!t) return null;
        if (!(0, Tt.isTransientIX3Clone)(t)) return t;
        let r = e.querySelectorAll(n);
        for (let s of r) if (!(0, Tt.isTransientIX3Clone)(s)) return s;
        return null;
      } catch {
        return null;
      }
    },
    bd = (n, e) => {
      try {
        return n.closest(e);
      } catch {
        return null;
      }
    },
    Sd = (n, e) => {
      try {
        return n.matches(e);
      } catch {
        return null;
      }
    },
    Ed = (n) => `[data-wf-target*="${CSS.escape(`[${JSON.stringify(n)}`)}"]`;
});
var Pi = O((Ir) => {
  "use strict";
  Object.defineProperty(Ir, "__esModule", { value: !0 });
  Object.defineProperty(Ir, "applyScope", {
    enumerable: !0,
    get: function () {
      return Od;
    },
  });
  var ae = ne(),
    bt = Rr(),
    wd = vt(),
    re = (n) => n.filter((e) => !(0, wd.isTransientIX3Clone)(e)),
    Od = (n, e) => {
      let t = re(n);
      if (!e) return t;
      if (Array.isArray(e)) {
        let [r, s] = e,
          o = [];
        switch (r) {
          case ae.TargetScope.FIRST_ANCESTOR:
            for (let i of t) {
              let a = s ? (0, bt.safeClosest)(i, s) : null;
              a && o.push(a);
            }
            return re(o);
          case ae.TargetScope.FIRST_DESCENDANT:
            for (let i of t) {
              let a = s ? (0, bt.safeQuerySelector)(s, i) : i.firstElementChild;
              a && o.push(a);
            }
            return re(o);
          case ae.TargetScope.DESCENDANTS:
            for (let i of t)
              o.push(...((0, bt.safeQuerySelectorAll)(s, i) || []));
            return re(o);
          case ae.TargetScope.ANCESTORS:
            for (let i of t) {
              let a = i.parentElement;
              for (; a; )
                (!s || (0, bt.safeMatches)(a, s)) && o.push(a),
                  (a = a.parentElement);
            }
            return re(o);
        }
      }
      switch (e) {
        case ae.TargetScope.CHILDREN:
          return re(t.flatMap((r) => [...r.children]));
        case ae.TargetScope.PARENT:
          return re(t.map((r) => r.parentElement).filter(Boolean));
        case ae.TargetScope.SIBLINGS:
          return re(
            t.flatMap((r) =>
              r.parentElement
                ? [...r.parentElement.children].filter((s) => s !== r)
                : []
            )
          );
        case ae.TargetScope.NEXT:
          return re(t.flatMap((r) => r.nextElementSibling || []));
        case ae.TargetScope.PREVIOUS:
          return re(t.flatMap((r) => r.previousElementSibling || []));
        default:
          return t;
      }
    };
});
var Li = O((Pr) => {
  "use strict";
  Object.defineProperty(Pr, "__esModule", { value: !0 });
  function Ad(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Ad(Pr, {
    backdropDeclarations: function () {
      return Cr;
    },
    buildBackdropTween: function () {
      return xd;
    },
  });
  var qe = Y(),
    ze = Ue(),
    He = null,
    _d = 0,
    Mr = new WeakMap(),
    xi = /random\(|[+\-*/]=|\/\*|[;{}]/,
    Me = (n, e) => (typeof n == "number" ? n + e : n),
    ki = { rotation: "", rotationZ: "", rotationX: "x ", rotationY: "y " };
  function Cr(n) {
    let e = "",
      t = [[], [], []],
      r = [],
      s = [],
      o,
      i,
      a;
    for (let c in n) {
      let u = n[c];
      if (
        (typeof u != "number" && typeof u != "string") ||
        (typeof u == "string" && xi.test(u))
      )
        continue;
      let f = c[0] === "y" ? 1 : c[0] === "z" ? 2 : 0;
      if (c === "x" || c === "y" || c === "z") t[f].push(Me(u, "px"));
      else if (c === "xPercent" || c === "yPercent") t[f].push(Me(u, "%"));
      else if (c === "scale") r[2] = u;
      else if (c === "scaleX" || c === "scaleY") r[c === "scaleY" ? 1 : 0] = u;
      else if (c === "skewX" || c === "skewY")
        s[c === "skewY" ? 1 : 0] = Me(u, "deg");
      else if (c === "transformPerspective") o = Me(u, "px");
      else if (Object.prototype.hasOwnProperty.call(ki, c))
        a ??= { axis: ki[c], angle: Me(u, "deg") };
      else if (c === "width" || c === "height") e += `${c}:${Me(u, "px")};`;
      else {
        let d =
          c === "autoAlpha"
            ? "opacity"
            : c.replace(/[A-Z]/g, (p) => "-" + p.toLowerCase());
        if (xi.test(d)) continue;
        e += `${d}:${u};`;
      }
    }
    if (t.some((c) => c.length)) {
      let c = t.map((d) =>
          d.length > 1 ? `calc(${d.join(" + ")})` : d[0] ?? "0"
        ),
        u = t[2].length > 0,
        f = (u ? c : c.slice(0, 2)).join(" ");
      u && o ? (i = `translate3d(${c.join(", ")})`) : (e += `translate:${f};`);
    }
    r.length && (e += `scale:${r[0] ?? r[2] ?? 1} ${r[1] ?? r[2] ?? 1};`),
      a && !o && (e += `rotate:${a.axis}${a.angle};`);
    let l = [
      o && `perspective(${o})`,
      i,
      o && a && `rotate${a.axis.trim().toUpperCase()}(${a.angle})`,
      s.length && `skew(${s[0] ?? 0}, ${s[1] ?? 0})`,
    ]
      .filter(Boolean)
      .join(" ");
    return l && (e += `transform:${l};`), e;
  }
  function Rd() {
    return (
      He?.isConnected ||
        ((He = document.createElement("style")), document.head.appendChild(He)),
      He.sheet
    );
  }
  function Id(n) {
    let e = He?.sheet;
    if (e)
      for (let t = e.cssRules.length - 1; t >= 0; t--)
        e.cssRules[t].name === n && e.deleteRule(t);
  }
  function Md(n, e, t) {
    let r = Rd();
    if (!r) return !1;
    let s = `@keyframes ${n}{${e ? `from{${e}}` : ""}${t ? `to{${t}}` : ""}}`;
    try {
      r.insertRule(s, r.cssRules.length);
    } catch {
      return !1;
    }
    return !0;
  }
  var Cd = (n) => `${n} 1s linear calc(var(--${n}, 1) * -1s) both paused`;
  function Fi(n, e) {
    e.length
      ? (n.style.setProperty(
          ze.POPOVER_BACKDROP_ANIMATION_PROPERTY,
          e.map(Cd).join(", ")
        ),
        n.setAttribute(ze.POPOVER_BACKDROP_ANIMATED_ATTRIBUTE, ""))
      : (n.style.removeProperty(ze.POPOVER_BACKDROP_ANIMATION_PROPERTY),
        n.removeAttribute(ze.POPOVER_BACKDROP_ANIMATED_ATTRIBUTE));
  }
  function Pd(n, e, t) {
    let r = Mr.get(n);
    r || Mr.set(n, (r = []));
    let s = r.indexOf(e);
    if (s !== -1) {
      if (!t || s === r.length - 1) return;
      r.splice(s, 1);
    }
    r.push(e), Fi(n, r);
  }
  function Ni(n, e) {
    let t = Mr.get(n),
      r = t ? t.indexOf(e) : -1;
    !t || r === -1 || (t.splice(r, 1), Fi(n, t));
  }
  function xd({
    timeline: n,
    tweenType: e,
    config: t,
    vars: r,
    targets: s,
    position: o,
  }) {
    let i =
        e === qe.TweenType.From || e === qe.TweenType.FromTo ? Cr(t.from) : "",
      a = e === qe.TweenType.From ? "" : Cr(t.to);
    if (!i && !a) return;
    let l = `${ze.POPOVER_BACKDROP_KEYFRAMES_PREFIX}${++_d}`;
    if (!Md(l, i, a)) return;
    let c = `--${l}`,
      u = (E) => {
        for (let w of s)
          w.style.getPropertyValue(c) || w.style.setProperty(c, "0"),
            Pd(w, l, E);
      },
      f = 0,
      d = !1,
      { force3D: p, ...h } = r,
      g = {
        ...h,
        onStart() {
          (d = !1), (f = this.progress?.() ?? f), u(!0);
        },
        onUpdate() {
          let E = this.progress?.() ?? f,
            w = E !== f && d !== E < f;
          E !== f && (d = E < f), (f = E), u(w || e === qe.TweenType.Set);
        },
      };
    e === qe.TweenType.Set
      ? n.set(s, { ...g, [c]: 1 }, o)
      : n.fromTo(s, { [c]: 0 }, { ...g, [c]: 1 }, o);
    let y = (E) => {
      E.newState === "open" && Ni(E.currentTarget, l);
    };
    for (let E of s) E.addEventListener("beforetoggle", y);
    return () => {
      for (let E of s)
        E.removeEventListener("beforetoggle", y),
          Ni(E, l),
          E.style.removeProperty(c);
      Id(l);
    };
  }
});
var Vr = O((Br) => {
  "use strict";
  Object.defineProperty(Br, "__esModule", { value: !0 });
  function kd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  kd(Br, {
    build: function () {
      return Ld;
    },
    popoverFromTriggerElement: function () {
      return Nr;
    },
    popoversByPath: function () {
      return Ce;
    },
  });
  var se = Mi(),
    me = ne(),
    H = Ue(),
    q = Rr(),
    fe = Pi(),
    Nd = Li();
  function Nr(n, e) {
    if (!n) return null;
    let t = n.closest("." + H.POPOVER_MASK_CLASS);
    if (t) {
      let a = t.getAttribute(H.POPOVER_MASK_FOR_ATTRIBUTE),
        l = a ? (0, q.safeGetElementById)(a) : null;
      return l && e(l) ? l : null;
    }
    let s = n.closest("[popovertarget]")?.getAttribute("popovertarget"),
      o = s ? (0, q.safeGetElementById)(s) : null;
    if (o && e(o)) return o;
    let i = n.closest("." + H.POPOVER_CLASS);
    for (; i instanceof HTMLElement; ) {
      if (e(i)) return i;
      i = i.parentElement?.closest("." + H.POPOVER_CLASS) ?? null;
    }
    return null;
  }
  var Di = (n) =>
    (0, H.readInstPathsFromTriggers)(
      n?.triggers,
      me.IX3_WF_EXTENSION_KEYS.POPOVER,
      me.IX3_WF_EXTENSION_KEYS.INST
    );
  function Fd(n) {
    let e = [];
    for (let t of n?.triggers ?? []) {
      if (
        t[2]?.[0] !== me.IX3_WF_EXTENSION_KEYS.POPOVER_BACKDROP ||
        t[1]?.assignedGroupId === null
      )
        continue;
      let r = t[1]?.conditionalLogic;
      (!(r
        ? (r.ifTrue != null && r.ifTrue.control !== "none") ||
          (r.ifFalse != null && r.ifFalse.control !== "none")
        : t[1]?.control !== "none") &&
        (r != null || typeof t[1]?.assignedGroupId == "string")) ||
        e.push(t[1]?.assignedInstances);
    }
    return e;
  }
  var We = new WeakMap(),
    Fr = new Set();
  function Lr(n) {
    let e = n.nextElementSibling;
    return e instanceof HTMLElement &&
      e.classList.contains(H.POPOVER_MASK_CLASS) &&
      e.getAttribute(H.POPOVER_MASK_FOR_ATTRIBUTE) === n.id
      ? e
      : null;
  }
  function Bi(n) {
    let e = document.createElement("div");
    return (
      (e.className = H.POPOVER_MASK_CLASS),
      e.setAttribute("popover", "manual"),
      e.setAttribute(H.POPOVER_MASK_FOR_ATTRIBUTE, n.id),
      e.setAttribute("aria-hidden", "true"),
      n.after(e),
      e
    );
  }
  function xr(n, e) {
    if (!n || !Fr.has(n)) return;
    let t = (0, q.safeQuerySelectorAll)("." + H.POPOVER_MASK_CLASS, document);
    if (t?.length)
      for (let r of t) {
        let s = r.previousElementSibling;
        if (!(s instanceof HTMLElement) || Lr(s) !== r) {
          if (r.hasAttribute(H.POPOVER_MASK_FOR_ATTRIBUTE)) {
            let o = r.getAttribute(H.POPOVER_MASK_FOR_ATTRIBUTE),
              i = o ? (0, q.safeGetElementById)(o) : null;
            i && !Lr(i) && We.get(i)?.clear(), r.remove();
          }
          continue;
        }
        e.indexOf(s) === -1 && We.get(s)?.has(n) && ji(s, n, !1);
      }
    (!e.length || !e.some((r) => We.get(r)?.has(n))) && Fr.delete(n);
  }
  function ji(n, e, t) {
    let r = Lr(n);
    if (!e) return r ?? (t ? Bi(n) : null);
    let s = We.get(n) ?? new Set();
    return (
      We.set(n, s),
      t ? (s.add(e), Fr.add(e)) : s.delete(e),
      s.size > 0 ? r ?? Bi(n) : (r?.remove(), null)
    );
  }
  function Ce(n, e) {
    let t = (0, q.safeQuerySelectorAll)(
      (0, q.elementTargetSelector)((0, se.pair)(n, e)),
      document
    );
    return t?.length ? [...t] : [];
  }
  var Dr = (n) => JSON.stringify(n === me.TargetScope.ALL ? null : n ?? null),
    kr = (n) => !!n?.filterBy && n?.relationship !== "none",
    Vi = (n) => `trigger-parent|${Dr(n)}`;
  function Ld(n) {
    let e = [],
      t = (c) => {
        let u = new Set(),
          f = [];
        for (let [d, p] of c)
          for (let h of Ce(d, p)) u.has(h) || (u.add(h), f.push(h));
        return f;
      },
      r = (c, u) =>
        u != null &&
        (0, q.safeMatches)(
          c,
          (0, q.elementTargetSelector)((0, se.pair)(u[0], u[1]))
        ) === !0,
      s = (c, u) => c.some((f) => r(u, [f[0], f[1]])),
      o = (c, u, f, d, p) => {
        if (
          f ||
          d ||
          !p ||
          p[0] === me.IX3_WF_EXTENSION_KEYS.POPOVER ||
          u.length <= 1
        )
          return null;
        let h = new Set(),
          g = [];
        for (let [y, E] of u) {
          let w = r(c, [y, E]) ? [c] : Ce(y, E);
          for (let m of w) h.has(m) || (h.add(m), g.push(m));
        }
        return g;
      },
      i = (c, u, f, d, p) => {
        let h = Di(f),
          g = (0, H.readInstPath)(c),
          y =
            g && (!h.length || h.some((m) => m[0] === g[0] && m[1] === g[1]))
              ? g
              : null,
          E = (d ?? p)?.[1]?.assignedInstances,
          w = Nr(
            u,
            (m) => (!E || s(E, m)) && (r(m, y) || h.some((A) => r(m, A)))
          );
        return w
          ? o(w, h, E, d, p) ?? [w]
          : E
          ? (h.length ? t(h) : y ? Ce(y[0], y[1]) : e).filter((A) => s(E, A))
          : !d && p && p[0] !== me.IX3_WF_EXTENSION_KEYS.POPOVER && h.length
          ? t(h)
          : y
          ? Ce(y[0], y[1])
          : t(h);
      },
      a = (c, u, f, d, p, h) => {
        let g = Di(f),
          y = Nr(u, (w) => (!d || s(d, w)) && g.some((m) => r(w, m)));
        if (y) return o(y, g, d, p, h) ?? [y];
        if (g.length) return t(g);
        let E = (0, H.readInstPath)(c);
        return E ? Ce(E[0], E[1]) : e;
      },
      l = (c, u) => {
        let f = u?.scope;
        if (f?.type !== "component" || !f.componentId) return !0;
        let d = (0, q.safeClosest)(
          c.parentElement ?? c,
          `[data-wf-component-id="${CSS.escape(f.componentId)}"]`
        );
        if (!d) return !1;
        if (!f.variants?.length) return !0;
        let p = d.getAttribute("data-wf-variant-state");
        return p != null && f.variants.includes(p);
      };
    n.addTargetResolver("id", {
      resolve: ([, c]) => {
        let [u, f] = Array.isArray(c) ? c : [c],
          d = u ? (0, q.safeGetElementById)(u) : null;
        return d ? (0, fe.applyScope)([d], f) : e;
      },
    })
      .addTargetResolver("trigger-only", {
        resolve: ([, c], { triggerElement: u }) =>
          u ? (0, fe.applyScope)([u], Array.isArray(c) ? c[1] : void 0) : e,
        isDynamic: !0,
        instanceSharingKey: ([, c, u]) => {
          if (kr(u)) return;
          let f = Array.isArray(c) ? c[1] : void 0;
          return f === me.TargetScope.PARENT ? Vi(void 0) : `trigger|${Dr(f)}`;
        },
      })
      .addTargetResolver("trigger-only-parent", {
        resolve: ([, c], { triggerElement: u }) => {
          if (!u) return e;
          let f = u.parentElement;
          return f instanceof HTMLElement
            ? (0, fe.applyScope)([f], Array.isArray(c) ? c[1] : void 0)
            : e;
        },
        isDynamic: !0,
        instanceSharingKey: ([, c, u]) =>
          kr(u) ? void 0 : Vi(Array.isArray(c) ? c[1] : void 0),
      })
      .addTargetResolver("inst", {
        resolve: ([, c], { triggerElement: u }) => {
          if (!Array.isArray(c)) return e;
          let [f, d] = c,
            p = Array.isArray(f),
            h = p ? (0, se.pair)(f[0], f[1]) : (0, se.pair)(f, d),
            g = (0, q.safeQuerySelectorAll)(
              (0, q.elementTargetSelector)(h),
              document
            );
          if (!g?.length) return e;
          let y = [...g];
          if (!u) return (0, fe.applyScope)(y, p ? d : void 0);
          let E = u.dataset.wfTarget;
          if (!E) return y;
          try {
            let w = JSON.parse(E),
              m = (0, se.getFirst)(h),
              A = w.find((b) => (0, se.getFirst)((0, se.getFirst)(b)) === m);
            return A
              ? (0, fe.applyScope)(
                  y.filter((b) =>
                    (b.dataset.wfTarget || "").includes(
                      `${JSON.stringify((0, se.getSecond)(A))}]`
                    )
                  ),
                  p ? d : void 0
                )
              : e;
          } catch {
            return e;
          }
        },
        isDynamic: !0,
        instanceSharingKey: ([, c, u]) => {
          if (kr(u) || !Array.isArray(c)) return;
          let [f, d] = c,
            p = Array.isArray(f),
            h = p ? (0, se.pair)(f[0], f[1]) : (0, se.pair)(f, d);
          return `inst|${JSON.stringify(h)}|${Dr(p ? d : void 0)}`;
        },
      })
      .addTargetResolver("class", {
        resolve: ([, c]) => {
          let [u, f] = Array.isArray(c) ? c : [c],
            d = u ? (0, q.safeQuerySelectorAll)(`.${u}`, document) : null;
          return d ? (0, fe.applyScope)([...d], f) : e;
        },
      })
      .addTargetResolver("selector", {
        resolve: ([, c]) => {
          let [u, f] = Array.isArray(c) ? c : [c],
            d = u ? (0, q.safeQuerySelectorAll)(u, document) : null;
          return d ? (0, fe.applyScope)([...d], f) : e;
        },
      })
      .addTargetResolver("body", {
        resolve: () => [document.body],
        isPageLevel: !0,
      })
      .addTargetResolver("attribute", {
        resolve: ([, c]) => {
          let [u, f] = Array.isArray(c) ? c : [c],
            d = u ? (0, q.safeQuerySelectorAll)(u, document) : null;
          return d ? (0, fe.applyScope)([...d], f) : e;
        },
      })
      .addTargetResolver("any-element", { resolve: () => e })
      .addTargetResolver("viewport", {
        resolve: () => [document.documentElement],
        isPageLevel: !0,
      })
      .addTargetResolver("popover-element", {
        resolve: (
          [, c],
          { triggerElement: u, interaction: f, trigger: d, causeTrigger: p }
        ) => i(c, u, f, d, p),
        isDynamic: !0,
      })
      .addTargetResolver("popover-backdrop", {
        resolve: (
          [, c],
          { triggerElement: u, interaction: f, trigger: d, causeTrigger: p }
        ) => {
          let h = (d ?? p)?.[1]?.assignedInstances,
            g = a(c, u, f, h, d, p);
          if (!g.length) return u || xr(f?.id, []), e;
          let y = Fd(f),
            E = [],
            w = [];
          for (let m of g) {
            if (!m.id || !l(m, f)) continue;
            E.push(m);
            let A = y.some((v) => !v || s(v, m)),
              b = ji(m, f?.id, A);
            b && (!h || s(h, m)) && w.push(b);
          }
          return (
            u || xr(f?.id, E),
            d ? (w.length ? w : e) : h ? g.filter((m) => s(h, m)) : g
          );
        },
        buildTween: Nd.buildBackdropTween,
        release: (c) => xr(c, []),
        isDynamic: !0,
      });
  }
});
var Ui = O((Gr) => {
  "use strict";
  Object.defineProperty(Gr, "__esModule", { value: !0 });
  Object.defineProperty(Gr, "TouchScrollGuard", {
    enumerable: !0,
    get: function () {
      return jr;
    },
  });
  var Gi = $e();
  function Dd(n) {
    let e = n;
    for (; e && e !== document.body && e !== document.documentElement; ) {
      if (e instanceof HTMLElement) {
        let t = getComputedStyle(e).overflowY;
        if (
          (t === "auto" || t === "scroll" || t === "overlay") &&
          e.scrollHeight > e.clientHeight
        )
          return e;
      }
      e = e.parentElement;
    }
    return null;
  }
  var jr = class {
    isScrolling = !1;
    toleranceDeg;
    refX = 0;
    refY = 0;
    lastY = 0;
    locked = null;
    effectFromBoundary = !1;
    scroller = null;
    maxScroll = 0;
    constructor(e, t, r) {
      this.toleranceDeg = r?.tolerance ?? 18;
      let s = (0, Gi.initScrollCache)();
      t.addEventListener("abort", s);
      let o = (l) => {
          let c = l.touches[0];
          c &&
            ((this.refX = c.clientX),
            (this.refY = c.clientY),
            (this.lastY = c.clientY),
            (this.locked = null),
            (this.effectFromBoundary = !1),
            (this.isScrolling = !1),
            (this.scroller = Dd(l.target ?? e)),
            (this.maxScroll = this.scroller
              ? this.scroller.scrollHeight - this.scroller.clientHeight
              : document.documentElement.scrollHeight - window.innerHeight));
        },
        i = (l) => {
          let c = l.touches[0];
          if (!c) return;
          let u = c.clientY,
            f = c.clientX - this.refX,
            d = u - this.refY,
            p = u > this.lastY,
            h = u < this.lastY,
            g = this.scroller ? this.scroller.scrollTop : (0, Gi.getScrollY)(),
            y = this.maxScroll,
            E = g <= 1 && p,
            w = y > 0 && g >= y - 1 && h;
          this.locked === null && this.decide(f, d, E || w),
            this.locked === "scroll" &&
              (E || w) &&
              ((this.refX = c.clientX),
              (this.refY = u),
              (this.locked = "effect"),
              (this.effectFromBoundary = !0)),
            this.locked === "effect" &&
              this.effectFromBoundary &&
              !(E || w) &&
              ((this.refX = c.clientX),
              (this.refY = u),
              (this.locked = null),
              (this.effectFromBoundary = !1)),
            (this.lastY = u),
            (this.isScrolling =
              this.locked === "scroll" ||
              this.locked === null ||
              (this.locked === "effect" && !l.cancelable && !(E || w))),
            this.locked === "effect" && l.cancelable && l.preventDefault();
        },
        a = () => {
          (this.locked = null), (this.isScrolling = !1);
        };
      e.addEventListener("touchstart", o, { passive: !0, signal: t }),
        e.addEventListener("touchmove", i, { passive: !1, signal: t }),
        e.addEventListener("touchend", a, { passive: !0, signal: t }),
        e.addEventListener("touchcancel", a, { passive: !0, signal: t });
    }
    decide(e, t, r) {
      if (Math.abs(e) < 10 && Math.abs(t) < 10) return;
      Math.atan2(Math.abs(e), Math.abs(t)) * (180 / Math.PI) > this.toleranceDeg
        ? ((this.locked = "effect"), (this.effectFromBoundary = !1))
        : r
        ? ((this.locked = "effect"), (this.effectFromBoundary = !0))
        : (this.locked = "scroll");
    }
  };
});
var $i = O(($r) => {
  "use strict";
  Object.defineProperty($r, "__esModule", { value: !0 });
  Object.defineProperty($r, "VelocityController", {
    enumerable: !0,
    get: function () {
      return Ur;
    },
  });
  var Bd = {
    adaptiveMax: 2800,
    adaptAlpha: 0.05,
    adaptDecay: 0.99,
    hardMin: 600,
    hardMax: 4e3,
  };
  function Vd(n, e) {
    let t = Math.max(e.hardMin, Math.min(e.hardMax, n));
    (e.adaptiveMax = Math.max(t, e.adaptiveMax * e.adaptDecay)),
      (e.adaptiveMax += (t - e.adaptiveMax) * e.adaptAlpha),
      (e.adaptiveMax = Math.max(e.hardMin, Math.min(e.hardMax, e.adaptiveMax)));
  }
  var jd = (n) => n * n;
  function Gd(n, e, t, r) {
    let s = Math.hypot(n, e);
    Vd(s, t);
    let o = Math.max(1, t.adaptiveMax),
      i = jd(Math.min(1, s / o)),
      a = 0,
      l = 0;
    return (
      r.x && r.y
        ? s > 0 && ((a = n / s), (l = e / s))
        : r.x
        ? n !== 0 && (a = Math.sign(n))
        : r.y && e !== 0 && (l = Math.sign(e)),
      { n: i, dirX: a, dirY: l }
    );
  }
  var Ur = class {
    config;
    velState;
    lastDirX;
    lastDirY;
    lastNormVelocity;
    get dirX() {
      return this.lastDirX;
    }
    get dirY() {
      return this.lastDirY;
    }
    constructor(e) {
      (this.config = e),
        (this.velState = { ...Bd }),
        (this.lastDirX = 0),
        (this.lastDirY = 0),
        (this.lastNormVelocity = 0);
    }
    update(e, t) {
      let {
        n: r,
        dirX: s,
        dirY: o,
      } = Gd(e, t, this.velState, this.config.axes);
      (this.lastNormVelocity = r), (this.lastDirX = s), (this.lastDirY = o);
    }
    reset() {
      (this.lastDirX = 0), (this.lastDirY = 0), (this.lastNormVelocity = 0);
    }
    destroy() {
      this.reset();
    }
  };
});
var qi = O((zr) => {
  "use strict";
  Object.defineProperty(zr, "__esModule", { value: !0 });
  Object.defineProperty(zr, "IntervalController", {
    enumerable: !0,
    get: function () {
      return qr;
    },
  });
  var Ud = ne(),
    $d = 16,
    qr = class {
      config;
      accum;
      lastX;
      lastY;
      initialized;
      cycleIndex;
      destroyed;
      constructor(e) {
        (this.config = e),
          (this.accum = 0),
          (this.lastX = 0),
          (this.lastY = 0),
          (this.initialized = !1),
          (this.cycleIndex = 0),
          (this.destroyed = !1),
          document.addEventListener(
            "visibilitychange",
            () => {
              document.visibilityState === "visible" && this.reset();
            },
            { signal: this.config.signal }
          );
      }
      get isActive() {
        return this.config.distance > 0;
      }
      update(e) {
        if (this.destroyed || !this.isActive) return;
        let { x: t, y: r, velocityFactor: s, dirX: o, dirY: i } = e;
        if (!this.initialized) {
          (this.lastX = t), (this.lastY = r), (this.initialized = !0);
          return;
        }
        let a = t - this.lastX,
          l = r - this.lastY;
        (this.lastX = t), (this.lastY = r);
        let { axes: c, distance: u } = this.config;
        c.x && c.y
          ? (this.accum += Math.hypot(a, l))
          : c.x
          ? (this.accum += Math.abs(a))
          : c.y && (this.accum += Math.abs(l));
        let f = 0;
        for (; this.accum >= u && f < $d; ) {
          this.accum -= u;
          let d = {
            cursorPos: { x: t, y: r },
            velocityFactor: s,
            dirX: o,
            dirY: i,
          };
          this.config.channelManager.fireInterval?.(
            Ud.TIMELINE_ROLE_NAMES.INTERVAL,
            {
              targetIndex: this.cycleIndex++,
              element: this.config.element,
              pluginPayload: d,
            }
          ),
            f++;
        }
        this.accum >= u && (this.accum %= u);
      }
      reset() {
        (this.accum = 0), (this.initialized = !1), (this.cycleIndex = 0);
      }
      destroy() {
        (this.destroyed = !0), this.reset();
      }
    };
});
var Ji = O((Wr) => {
  "use strict";
  Object.defineProperty(Wr, "__esModule", { value: !0 });
  Object.defineProperty(Wr, "fireMouseMoveInterval", {
    enumerable: !0,
    get: function () {
      return rp;
    },
  });
  var qd = ne(),
    Qi = vt(),
    Hr = new Set(["x", "y"]),
    zd = new Set(["scale", "scaleX", "scaleY"]),
    zi = new WeakMap(),
    Hi = new WeakMap();
  function Hd(n) {
    let e = zi.get(n);
    return (
      e ||
        ((e = {
          activeIntervalEls: new Map(),
          intervalClones: new Set(),
          baselineValues: new Map(),
        }),
        zi.set(n, e)),
      e
    );
  }
  function Wd(n, e, t, r) {
    let s = Hi.get(n);
    s || ((s = new Set()), Hi.set(n, s)),
      !s.has(t) &&
        (s.add(t),
        r(() => {
          let o = e.activeIntervalEls.get(t);
          if (o)
            for (let i of o)
              e.intervalClones.has(i) &&
                (i.isConnected && i.remove(), e.intervalClones.delete(i));
          e.activeIntervalEls.delete(t),
            e.baselineValues.delete(t),
            s.delete(t);
        }));
  }
  function Wi(n) {
    if (n)
      for (let e in n) {
        if (!Hr.has(e)) continue;
        let t = n[e];
        (typeof t == "string" && (t.startsWith("+=") || t.startsWith("-="))) ||
          ((typeof t == "number" || typeof t == "string") && (n[e] = `+=${t}`));
      }
  }
  var Yd = /^random\((.*)\)([a-z%]*)$/i,
    Kd = /^-?\d*\.?\d+$/;
  function Xd(n, e) {
    let t = Yd.exec(n);
    if (!t) return null;
    let r = t[1] ?? "",
      s = t[2] ?? "",
      o = r.startsWith("[") && r.endsWith("]"),
      a = (o ? r.slice(1, -1) : r).split(",").map((c) => c.trim());
    if (!a.every((c) => Kd.test(c))) return null;
    let l = a
      .map((c, u) => {
        let f = Number(c);
        return !o && u >= 2 ? Math.abs(e(f) - e(0)) : e(f);
      })
      .join(", ");
    return `random(${o ? `[${l}]` : l})${s}`;
  }
  function Yi(n, e, t, r) {
    if (n)
      for (let s in n) {
        let o = n[s];
        if (typeof o != "number" && typeof o != "string") continue;
        let i = !1,
          a = typeof o == "string" ? o : "";
        typeof o == "string" &&
          (o.startsWith("+=") || o.startsWith("-=")) &&
          ((i = !0), (a = (o.startsWith("-=") ? "-" : "") + o.slice(2)));
        let l, c;
        if (Hr.has(s)) {
          let p = s === "y" ? r : t;
          (l = (h) => h * e * p), (c = !0);
        } else if (s === "rotation") {
          let p = Math.abs(t) >= Math.abs(r) ? t : -r;
          (l = (h) => h * e * p), (c = i);
        } else
          zd.has(s)
            ? ((l = i ? (p) => p * e : (p) => 1 + (p - 1) * e), (c = i))
            : ((l = (p) => p * e), (c = i));
        if (typeof o == "string" && a.startsWith("random(")) {
          let p = Xd(a, l);
          if (p == null) continue;
          n[s] = c ? `+=${p}` : p;
          continue;
        }
        let u,
          f = "";
        if (typeof o == "number") u = o;
        else {
          if (((u = parseFloat(a)), isNaN(u))) continue;
          f = a.replace(/^-?[\d.]+/, "");
        }
        let d = l(u);
        n[s] = c ? `+=${d}${f}` : d;
      }
  }
  function Zd(n, e) {
    let t = n.getOneShotTimelineContext(e),
      r = t?.timelineDef;
    if (!t || !r?.actions?.length) return null;
    let s = r.triggerMetadata,
      o = s?.pluginConfig?.type === "mouseMove" ? s.pluginConfig : void 0;
    return s?.role !== "interval" && !o
      ? null
      : {
          oneShot: t,
          mouseMoveMeta: o ?? { type: "mouseMove" },
          axes: s?.axes,
        };
  }
  function Qd(n, e, t, r, s) {
    let o = n.cloneNode(!0);
    o.removeAttribute("style"),
      o.removeAttribute("id"),
      o.removeAttribute("data-w-id"),
      o.setAttribute(Qi.TRANSIENT_IX3_CLONE_ATTR, "true"),
      (o.style.position = "absolute"),
      (o.style.margin = "0"),
      (o.style.pointerEvents = "none"),
      n.insertAdjacentElement("beforebegin", o);
    let i = e.baselineValues.get(s)?.get(n);
    return i && r.set(o, { ...i }), e.intervalClones.add(o), t.add(o), o;
  }
  function Jd(n, e) {
    let t = [],
      r = new Set();
    for (let s of n.timelineDef.actions)
      for (let o in s.properties) {
        let i = n.getActionTweenConfig(s, o, [e]);
        if (i) {
          for (let a of [i.to, i.from])
            if (a)
              for (let l of Object.keys(a)) Hr.has(l) ? t.push(l) : r.add(l);
        }
      }
    return { clearProps: t, baselineProps: r };
  }
  function ep(n, e, t, r, s) {
    let { clearProps: o, baselineProps: i } = Jd(n, t);
    if (i.size > 0) {
      let a = {};
      for (let c of i) a[c] = e.getProperty(t, c);
      let l = r.baselineValues.get(s);
      l || ((l = new WeakMap()), r.baselineValues.set(s, l)), l.set(t, a);
    }
    o.length !== 0 && e.set(t, { clearProps: o.join(",") });
  }
  function Ki(n) {
    if (n)
      for (let e in n) {
        let t = n[e];
        typeof t == "function" &&
          "legacyExpression" in t &&
          (n[e] = t.legacyExpression);
      }
  }
  function tp(n, e, t) {
    return (r, s, o) => {
      Ki(o.to),
        Ki(o.from),
        (
          s.pluginConfig?.type === "mouseMove"
            ? s.pluginConfig.velocityInfluence
            : !1
        )
          ? n != null && (Yi(o.to, n, e, t), o.from && Yi(o.from, n, e, t))
          : (Wi(o.to), o.from && Wi(o.from));
    };
  }
  function np(n, e, t, r, s, o, i, a) {
    let [l] = t;
    if (l && (n.set(l, { zIndex: r + 1 + s }, 0), !(!o || (!i && !a))))
      for (let c of t) {
        let u = c.getBoundingClientRect(),
          f = {};
        if (i) {
          let d = Number(e.getProperty(c, "x")) || 0;
          f.x = o.x - (u.left + u.width / 2 - d);
        }
        if (a) {
          let d = Number(e.getProperty(c, "y")) || 0;
          f.y = o.y - (u.top + u.height / 2 - d);
        }
        n.set(c, f, 0);
      }
  }
  function Xi(n) {
    for (let e of n) e();
    n.clear();
  }
  function Zi(n, e, t) {
    n.activeIntervalEls.get(e)?.delete(t),
      n.intervalClones.has(t) &&
        (t.isConnected && t.remove(), n.intervalClones.delete(t));
  }
  var rp = ({
    coordinator: n,
    timelineId: e,
    element: t,
    options: r,
    animation: s,
  }) => {
    if (!s.hasGsap()) return;
    let o = r.targetIndex;
    if (o == null) return;
    let i = Zd(n, e);
    if (!i) return;
    let { oneShot: a, mouseMoveMeta: l, axes: c } = i,
      u = Hd(n),
      f = a
        .getFirstActionTargets(t)
        .filter((k) => !(0, Qi.isTransientIX3Clone)(k));
    if (!f.length) return;
    let d = [f[o % f.length]],
      p = d,
      h = d[0],
      g = u.activeIntervalEls.get(e);
    g || ((g = new Set()), u.activeIntervalEls.set(e, g)),
      g.has(h) ? (p = [Qd(h, u, g, s, e)]) : (ep(a, s, h, u, e), g.add(h));
    let y = p[0],
      E = c?.x === !1 && c?.y === !1,
      w = E || (c?.x ?? l?.setMouseX ?? !0),
      m = E || (c?.y ?? l?.setMouseY ?? !0),
      A = (0, qd.narrowMouseMoveIntervalPayload)(r.pluginPayload),
      b = A.cursorPos,
      v = A.velocityFactor,
      T = A.dirX ?? 0,
      _ = A.dirY ?? 0,
      S = new Set(),
      I = a.buildActionTimeline({
        targets: p,
        cleanupBucket: S,
        varsTransform: tp(v, T, _),
        beforeTweens: (k) => {
          np(k, s, p, f.length, o, b, w, m);
        },
      });
    if (!I) {
      Xi(S), Zi(u, e, y);
      return;
    }
    let x = null,
      P = !1,
      R = (k) => {
        P || ((P = !0), x?.(), k && I.kill(), Xi(S), Zi(u, e, y));
      };
    (x = a.registerCleanup(() => R(!0))),
      I.eventCallback("onComplete", () => {
        R(!1);
      }),
      Wd(n, u, e, a.registerCleanup);
  };
});
var oa = O((Xr) => {
  "use strict";
  Object.defineProperty(Xr, "__esModule", { value: !0 });
  Object.defineProperty(Xr, "buildMouseMove", {
    enumerable: !0,
    get: function () {
      return pp;
    },
  });
  var de = ne(),
    Ye = $e(),
    sp = Ui(),
    op = $i(),
    ip = qi(),
    ap = Ji(),
    lp = 50,
    ea = 50,
    Yr = null;
  function cp() {
    return (
      Yr === null &&
        (Yr = "ontouchstart" in window || navigator.maxTouchPoints > 0),
      Yr
    );
  }
  var ra = 0,
    sa = 0,
    St = 0,
    ye = null;
  function up() {
    (St += 1),
      ye ||
        ((ye = () => {
          (ra = window.innerWidth), (sa = window.innerHeight);
        }),
        ye(),
        window.addEventListener("resize", ye));
    let n = !1;
    return () => {
      n ||
        ((n = !0),
        (St = Math.max(0, St - 1)),
        St === 0 &&
          ye &&
          (window.removeEventListener("resize", ye), (ye = null)));
    };
  }
  var Et = (n) => Math.max(0, Math.min(1, n));
  function fp(n, e, t) {
    return e === t || n === t || (n < t && e > t) || (n > t && e < t);
  }
  function Ke(n, e, t) {
    let r = n.tween;
    (n.tween = null),
      (n.takeoverTarget = null),
      (n.proxy.value = e),
      (n.lastValue = e),
      n.channel?.setProgress(e),
      t && r?.kill();
  }
  function ta(n, e) {
    if (n.tween) {
      if (n.proxy.value === e) {
        Ke(n, e, !0);
        return;
      }
      let t = n.tweenTarget - n.proxy.value,
        r = e - n.proxy.value;
      if (t * r < 0) {
        Ke(n, e, !0);
        return;
      }
      n.takeoverTarget = e;
      return;
    }
    (n.proxy.value = e), (n.lastValue = e), n.channel?.setProgress(e);
  }
  function Kr(n) {
    let e = n.tween;
    (n.tween = null), (n.takeoverTarget = null), e?.kill();
  }
  function na(n, e, t, r) {
    Kr(e), (e.lastValue = e.proxy.value), (e.tweenTarget = t);
    let s = n.to(e.proxy, {
      value: t,
      duration: r,
      ease: "power2.out",
      onUpdate: () => {
        let o = e.proxy.value,
          i = e.takeoverTarget;
        if (i != null && fp(e.lastValue, o, i)) {
          Ke(e, i, !0);
          return;
        }
        (e.lastValue = o), e.channel?.setImmediate(o);
      },
      onComplete: () => {
        let o = e.takeoverTarget;
        (e.tween = null), (e.takeoverTarget = null), o != null && Ke(e, o, !1);
      },
    });
    if (!s) {
      Ke(e, t, !1);
      return;
    }
    e.tween = s;
  }
  function dp(n, e, t, r) {
    let s = Math.abs(t - n),
      o = Math.abs(r - e),
      i = Math.max(s, o);
    return 0.1 + Math.min(i / 0.5, 1) * 0.5;
  }
  function pp(n) {
    n.addTrigger("mouse-move", (e, t, r, s) => {
      let o = e[1].pluginConfig,
        i = e[2]?.[0] === de.IX3_WF_EXTENSION_KEYS.VIEWPORT;
      return (
        s({
          type: "continuous",
          setup: (a) => {
            let { animation: l } = a;
            if (!l.hasGsap() || !l.hasObserver()) return Ye.noop;
            let c = i ? up() : Ye.noop;
            a.registerIntervalHandler(
              de.IX3_WF_EXTENSION_KEYS.MOUSE_MOVE,
              ap.fireMouseMoveInterval
            );
            let u = o?.smoothness ?? lp,
              f = (o?.restingState?.x ?? ea) / 100,
              d = (o?.restingState?.y ?? ea) / 100,
              p = a.registerChannel({
                role: de.TIMELINE_ROLE_NAMES.MOUSE_X,
                initialValue: f,
                element: t,
                smoothing: u,
              }),
              h = a.registerChannel({
                role: de.TIMELINE_ROLE_NAMES.MOUSE_Y,
                initialValue: d,
                element: t,
                smoothing: u,
              }),
              g = new AbortController(),
              { signal: y } = g,
              E = a.getMetadata(de.TIMELINE_ROLE_NAMES.INTERVAL),
              w = {
                x: E?.axes?.x !== !1 || E?.axes?.y === !1,
                y: E?.axes?.y !== !1 || E?.axes?.x === !1,
              },
              m = E
                ? new ip.IntervalController({
                    distance:
                      E.distance ?? de.DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE,
                    axes: w,
                    channelManager: a,
                    element: t,
                    signal: y,
                  })
                : null,
              A = m ? new op.VelocityController({ axes: w }) : null,
              b = {
                proxy: { value: f },
                channel: p,
                tween: null,
                takeoverTarget: null,
                lastValue: f,
                tweenTarget: f,
              },
              v = {
                proxy: { value: d },
                channel: h,
                tween: null,
                takeoverTarget: null,
                lastValue: d,
                tweenTarget: d,
              },
              T = !1,
              _ = (B, W) => {
                let Z = dp(b.proxy.value, v.proxy.value, B, W);
                na(l, b, B, Z), na(l, v, W, Z);
              },
              S = cp(),
              I = i ? document.documentElement : t,
              x = null;
            S && (x = new sp.TouchScrollGuard(I, y));
            let P = null,
              R = () => {
                P = null;
              },
              k = () => (P || (P = t.getBoundingClientRect()), P);
            if (!i) {
              let B = new ResizeObserver(R);
              B.observe(t),
                y.addEventListener("abort", () => B.disconnect()),
                window.addEventListener("scroll", R, {
                  passive: !0,
                  capture: !0,
                  signal: y,
                }),
                window.visualViewport &&
                  window.visualViewport.addEventListener("resize", R, {
                    signal: y,
                  });
            }
            let F;
            try {
              if (
                ((F = l.createObserver({
                  target: I,
                  type: S ? "pointer,touch" : "pointer",
                  tolerance: 0,
                  onMove: (B) => {
                    if (x?.isScrolling || !a.isPreviewEnabled()) return;
                    let W = B.x ?? 0,
                      Z = B.y ?? 0,
                      Q,
                      Ee;
                    if (i)
                      (Q = Et(W / Math.max(1, ra))),
                        (Ee = Et(Z / Math.max(1, sa)));
                    else {
                      let oe = k();
                      (Q = Et((W - oe.left) / Math.max(1, oe.width))),
                        (Ee = Et((Z - oe.top) / Math.max(1, oe.height)));
                    }
                    T ? (ta(b, Q), ta(v, Ee)) : ((T = !0), _(Q, Ee)),
                      a.publishChannel(
                        de.MOUSE_MOVE_CHANNELS.POSITION,
                        { x: W, y: Z, triggerEl: t, isViewport: i },
                        t
                      ),
                      A &&
                        (A.update(B.velocityX, B.velocityY),
                        m.update({
                          x: W,
                          y: Z,
                          velocityFactor: A.lastNormVelocity,
                          dirX: A.dirX,
                          dirY: A.dirY,
                        }));
                  },
                })),
                !F)
              )
                return m?.destroy(), A?.destroy(), g.abort(), c(), Ye.noop;
            } catch {
              return m?.destroy(), A?.destroy(), g.abort(), c(), Ye.noop;
            }
            let G = () => {
              a.isPreviewEnabled() &&
                ((T = !1),
                _(f, d),
                A?.reset(),
                a.publishChannel(de.MOUSE_MOVE_CHANNELS.LEAVE, void 0, t),
                m?.reset());
            };
            return (
              i
                ? (I.addEventListener("mouseleave", G, { signal: y }),
                  window.addEventListener("blur", G, { signal: y }))
                : t.addEventListener("mouseleave", G, { signal: y }),
              I.addEventListener("touchend", G, { signal: y, passive: !0 }),
              I.addEventListener("touchcancel", G, { signal: y, passive: !0 }),
              () => {
                F.kill(),
                  g.abort(),
                  Kr(b),
                  Kr(v),
                  m?.destroy(),
                  A?.destroy(),
                  c();
              }
            );
          },
        }),
        Ye.noop
      );
    });
  }
});
var da = O((es) => {
  "use strict";
  Object.defineProperty(es, "__esModule", { value: !0 });
  Object.defineProperty(es, "build", {
    enumerable: !0,
    get: function () {
      return gp;
    },
  });
  var Ze = Y(),
    L = ne(),
    xe = Ue(),
    Xe = $e(),
    aa = Vr(),
    hp = oa();
  function gp(n) {
    mp(n),
      yp(n),
      (0, hp.buildMouseMove)(n),
      vp(n),
      Tp(n),
      wp(n),
      Op(n),
      Rp(n),
      Cp(n),
      n.addTrigger("load", (t, r, s, o) => {
        let i = t[1],
          a = !1,
          l = () => {
            a || ((a = !0), o({ target: r }));
          };
        switch (i.pluginConfig?.triggerPoint) {
          case "immediate":
            return l(), Xe.noop;
          case "fullyLoaded":
            return document.readyState === "complete"
              ? (l(), Xe.noop)
              : s.addEventListener(window, "load", l);
          case "DOMContentLoaded":
          default:
            return document.readyState === "complete" ||
              document.readyState === "interactive"
              ? (l(), Xe.noop)
              : s.addEventListener(document, "DOMContentLoaded", l);
        }
      }),
      n.addTrigger("focus", (t, r, s, o) => {
        let i = t[1];
        return s.addEventListener(
          r,
          i.pluginConfig?.useFocusWithin ? "focusin" : "focus",
          o,
          { delegate: !i.pluginConfig?.useFocusWithin }
        );
      }),
      n.addTrigger("blur", (t, r, s, o) => {
        let i = t[1];
        return s.addEventListener(
          r,
          i.pluginConfig?.useFocusWithin ? "focusout" : "blur",
          o,
          { delegate: !i.pluginConfig?.useFocusWithin }
        );
      });
    let e = (t, r, s, o) => (o({ target: r }), Xe.noop);
    n.addTrigger("scroll", e),
      n.addTrigger("scroll-scrub", e),
      n.addTrigger("scroll-actions", e),
      n.addTrigger("scroll-direction", e),
      n.addTrigger("custom", (t, r, s, o) => {
        let a = t[1].pluginConfig?.eventName;
        return a
          ? s.addEventListener(r, a, o, { delegate: !1, kind: "custom" })
          : Xe.noop;
      }),
      n.addTrigger("change", (t, r, s, o) =>
        s.addEventListener(r, "change", o)
      );
  }
  function mp(n) {
    let e = new WeakMap();
    n.addTrigger("click", (t, r, s, o) => {
      let [, i] = t,
        a = s.addEventListener(
          r,
          "click",
          (l) => {
            let c = i.pluginConfig?.click,
              u = e.get(r) || new WeakMap();
            e.set(r, u);
            let d = (u.get(t) || 0) + 1;
            switch ((u.set(t, d), c)) {
              case "each": {
                o(l);
                break;
              }
              case "first": {
                d === 1 && o(l);
                break;
              }
              case "second": {
                d === 2 && o(l);
                break;
              }
              case "odd": {
                d % 2 === 1 && o(l);
                break;
              }
              case "even": {
                d % 2 === 0 && o(l);
                break;
              }
              case "custom": {
                let p = i.pluginConfig?.custom;
                p && d === p && o(l);
                break;
              }
              default:
                o(l);
            }
          },
          { delegate: !0 }
        );
      return () => {
        a(), e.delete(r);
      };
    });
  }
  function yp(n) {
    let e = new WeakMap();
    n.addTrigger("hover", (t, r, s, o) => {
      let [, i] = t,
        a = [],
        l = i.pluginConfig?.multiTimeline,
        c = i.pluginConfig?.eventMode,
        u = c !== "leave",
        f = c !== "enter";
      if (l === !0)
        return (
          u &&
            a.push(
              s.addEventListener(r, "mouseenter", () =>
                o({
                  type: "timeline-role",
                  role: L.TIMELINE_ROLE_NAMES.MOUSE_ENTER,
                })
              )
            ),
          f &&
            a.push(
              s.addEventListener(r, "mouseleave", () =>
                o({
                  type: "timeline-role",
                  role: L.TIMELINE_ROLE_NAMES.MOUSE_LEAVE,
                })
              )
            ),
          () => {
            a.forEach((p) => p()), (a.length = 0);
          }
        );
      if (l === !1) {
        if (
          i.control === void 0 ||
          i.control === "togglePlayReverse" ||
          i.control === "togglePlayReverseFlipEase"
        ) {
          let h =
            i.control === "togglePlayReverseFlipEase"
              ? "reverseFlipEase"
              : "reverse";
          if (
            (u &&
              a.push(
                s.addEventListener(r, "mouseenter", () =>
                  o({ type: "playback-control", control: "play" })
                )
              ),
            f)
          ) {
            let g = u ? h : "play";
            a.push(
              s.addEventListener(r, "mouseleave", () =>
                o({ type: "playback-control", control: g })
              )
            );
          }
        } else
          u && a.push(s.addEventListener(r, "mouseenter", (h) => o(h))),
            f && a.push(s.addEventListener(r, "mouseleave", (h) => o(h)));
        return () => {
          a.forEach((h) => h()), (a.length = 0);
        };
      }
      let d = (p, h) => {
        if ((i.pluginConfig?.type ?? "mouseenter") !== h) return;
        let y = i.pluginConfig?.hover || "each",
          E = e.get(r) || new Map();
        e.set(r, E);
        let m = (E.get(h) || 0) + 1;
        switch ((E.set(h, m), y)) {
          case "each": {
            o(p);
            break;
          }
          case "first": {
            m === 1 && o(p);
            break;
          }
          case "second": {
            m === 2 && o(p);
            break;
          }
          case "odd": {
            m % 2 === 1 && o(p);
            break;
          }
          case "even": {
            m % 2 === 0 && o(p);
            break;
          }
          case "custom": {
            let A = i.pluginConfig?.custom;
            A && m === A && o(p);
            break;
          }
          default:
            o(p);
        }
      };
      return (
        a.push(
          s.addEventListener(r, "mouseenter", (p) => {
            d(p, "mouseenter");
          })
        ),
        a.push(
          s.addEventListener(r, "mouseover", (p) => {
            d(p, "mouseover");
          })
        ),
        a.push(
          s.addEventListener(r, "mouseleave", (p) => {
            d(p, "mouseleave");
          })
        ),
        () => {
          a.forEach((p) => p()), (a.length = 0), e.delete(r);
        }
      );
    });
  }
  function la(n, e) {
    n.addTrigger(e, (t, r, s, o) => {
      let i = t[1].pluginConfig?.event,
        a =
          i === L.TIMELINE_ROLE_NAMES.OPEN || i === L.TIMELINE_ROLE_NAMES.CLOSE
            ? i
            : void 0,
        l = "IX3_COMPONENT_STATE_CHANGE";
      return s.addEventListener(r, l, (c) => {
        let u = c.detail;
        if (!u || typeof u != "object") return;
        let { component: f, state: d } = u;
        f !== e ||
          !d ||
          (a && d !== a) ||
          o({ type: "timeline-role", role: d });
      });
    });
  }
  function vp(n) {
    la(n, "navbar");
  }
  function Tp(n) {
    la(n, "dropdown");
  }
  var ve = new WeakMap();
  function bp(n) {
    let e = (ve.get(n) ?? 0) + 1;
    ve.set(n, e), n.setAttribute(L.POPOVER_ANIMATED_ATTRIBUTE, "");
  }
  function Sp(n) {
    let e = (ve.get(n) ?? 1) - 1;
    if (e > 0) {
      ve.set(n, e);
      return;
    }
    ve.delete(n), n.removeAttribute(L.POPOVER_ANIMATED_ATTRIBUTE);
  }
  var ia = new WeakMap();
  function ca(n) {
    n.released || ((n.released = !0), n.done?.());
  }
  function Ep(n, e) {
    let t = ia.get(n);
    if (t) return t;
    let r = { claims: 0, released: !1, dispatching: !0, done: e };
    return (
      ia.set(n, r),
      Promise.resolve().then(() => {
        (r.dispatching = !1), r.claims === 0 && ca(r);
      }),
      r
    );
  }
  function ua(n) {
    n.claims++;
    let e = !1;
    return () => {
      e || ((e = !0), --n.claims <= 0 && !n.dispatching && ca(n));
    };
  }
  function wp(n) {
    n.addTrigger("popover", (e, t, r, s) => {
      let o = e[1].pluginConfig?.event,
        i =
          o === L.TIMELINE_ROLE_NAMES.OPEN || o === L.TIMELINE_ROLE_NAMES.CLOSE
            ? o
            : void 0;
      bp(t);
      let a = () => Sp(t),
        l = new Set(),
        c = r.addEventListener(t, L.IX3_POPOVER_STATE_EVENT, (u) => {
          let f = u.detail;
          if (!f || typeof f != "object") return;
          let { state: d, done: p } = f,
            h = Ep(u, typeof p == "function" ? p : void 0);
          if (
            d !== L.TIMELINE_ROLE_NAMES.OPEN &&
            d !== L.TIMELINE_ROLE_NAMES.CLOSE
          )
            return;
          if (d === L.TIMELINE_ROLE_NAMES.OPEN) K.delete(t), Pe.delete(t);
          else {
            let y = K.get(t);
            y?.delete(e), y && y.size === 0 && K.delete(t);
          }
          if (i && d !== i) return;
          d === L.TIMELINE_ROLE_NAMES.CLOSE && Pe.set(t, h);
          let g = ua(h);
          l.add(g),
            s({
              type: "timeline-role",
              role: d,
              onComplete: () => {
                l.delete(g), g();
              },
            });
        });
      return () => {
        ve.get(t) === 1 &&
          (K.has(t) || Qr(t)) &&
          (K.delete(t), Jr(t, xe.POPOVER_ANIMATION_CLOSE_COMMAND)),
          ve.get(t) === 1 && Pe.delete(t),
          a(),
          c();
        for (let u of l) u();
        l.clear();
      };
    });
  }
  function Qr(n) {
    try {
      return n.matches(":popover-open");
    } catch {
      return !1;
    }
  }
  function Jr(n, e, t) {
    let r = n.ownerDocument.defaultView;
    if (!r) return;
    let s =
      e === xe.POPOVER_ANIMATION_OPEN_COMMAND
        ? { type: e, source: t }
        : { type: e };
    n.dispatchEvent(new r.CustomEvent(xe.POPOVER_COMMAND_EVENT, { detail: s }));
  }
  function Op(n) {
    n.addRoleActivationObserver(
      "popover",
      (e, { elements: t, trigger: r, causeTrigger: s, causeElement: o }) => {
        if (!Ap(s, r)) return;
        let i =
            t.length > 1
              ? (0, aa.popoverFromTriggerElement)(o, (f) => t.includes(f))
              : null,
          a = i ? [i] : t;
        if (e === L.TIMELINE_ROLE_NAMES.OPEN) {
          for (let f of a)
            K.delete(f),
              Pe.delete(f),
              (!Qr(f) || (s !== void 0 && s !== r)) &&
                Jr(f, xe.POPOVER_ANIMATION_OPEN_COMMAND, o);
          return;
        }
        if (e !== L.TIMELINE_ROLE_NAMES.CLOSE) return;
        if (s === r) {
          for (let f of a) {
            let d = K.get(f);
            d?.delete(r), d && d.size === 0 && K.delete(f);
          }
          return;
        }
        let l = a.filter(Qr);
        if (l.length === 0) return;
        let c = {},
          u = l.map((f) => {
            let d = Pe.get(f);
            return d && !d.released ? ua(d) : void 0;
          });
        for (let f of l) {
          let d = K.get(f);
          d || ((d = new Map()), K.set(f, d)), d.set(r, c);
        }
        return () => {
          for (let [f, d] of l.entries()) {
            let p = u[f];
            p && Promise.resolve().then(p);
            let h = K.get(d);
            h?.get(r) === c &&
              (h.delete(r),
              !(h.size > 0) &&
                Promise.resolve().then(() => {
                  if (K.get(d) !== h || h.size > 0) return;
                  K.delete(d);
                  let g = Pe.get(d);
                  (g && !g.released) ||
                    Jr(d, xe.POPOVER_ANIMATION_CLOSE_COMMAND);
                }));
          }
        };
      }
    );
  }
  var K = new WeakMap(),
    Pe = new WeakMap();
  function Ap(n, e) {
    if (!n || n === e) return !0;
    if (n[0] === e[0]) return !1;
    let t = n[1]?.assignedInstances;
    if (!t) return !0;
    let r = e[2],
      s = (0, xe.readInstPath)(r?.[1]);
    return s ? t.some(([o, i]) => o === s[0] && i === s[1]) : !1;
  }
  function fa(n, e) {
    let t = n[1]?.assignedInstances;
    return t
      ? t.length
        ? [...new Set(t.flatMap(([r, s]) => (0, aa.popoversByPath)(r, s)))]
        : []
      : [e];
  }
  var _p = 10;
  function Rp(n) {
    n.addTrigger("exit-intent", (e, t, r, s) => {
      if ((0, Ze.getPageLevelTriggerState)(e).fired) return () => {};
      let o = !1,
        i,
        a = () => {
          i?.(), (i = void 0);
        };
      return (
        (i = r.addEventListener(
          t,
          "mouseout",
          (l) => {
            if (o) return;
            let c = l;
            if (
              c.relatedTarget == null &&
              !(c.clientY > _p) &&
              !(
                c.clientY > 0 &&
                typeof c.movementY == "number" &&
                c.movementY >= 0
              )
            ) {
              (o = !0), ((0, Ze.getPageLevelTriggerState)(e).fired = !0), a();
              for (let u of fa(e, t)) s({ target: u });
            }
          },
          {
            target: "document",
            delegate: !1,
            batch: !1,
            capture: !0,
            passive: !0,
          }
        )),
        a
      );
    });
  }
  var Ip = [
      "pointermove",
      "pointerdown",
      "keydown",
      "scroll",
      "wheel",
      "touchstart",
      "touchmove",
    ],
    Zr = 100,
    wt = new WeakMap();
  function Mp(n, e) {
    let t = wt.get(e);
    if (!t) {
      let s = {
          waiters: new Set(),
          cleanups: [],
          lastResetAt: -Zr,
          trailing: void 0,
        },
        o = () => {
          (s.trailing = void 0), (s.lastResetAt = performance.now());
          for (let a of s.waiters) a.restart();
        },
        i = () => {
          let a = performance.now() - s.lastResetAt;
          if (a >= Zr) {
            s.trailing !== void 0 && clearTimeout(s.trailing), o();
            return;
          }
          s.trailing === void 0 && (s.trailing = setTimeout(o, Zr - a));
        };
      (s.cleanups = Ip.map((a) =>
        e.addEventListener(document.documentElement, a, () => i(), {
          target: "document",
          delegate: !1,
          batch: !1,
          capture: !0,
          passive: !0,
        })
      )),
        wt.set(e, s),
        (t = s);
    }
    let r = t;
    return (
      r.waiters.add(n),
      () => {
        if ((r.waiters.delete(n), !(r.waiters.size > 0))) {
          for (let s of r.cleanups) s();
          (r.cleanups.length = 0),
            r.trailing !== void 0 && clearTimeout(r.trailing),
            (r.trailing = void 0),
            wt.get(e) === r && wt.delete(e);
        }
      }
    );
  }
  function Cp(n) {
    n.addTrigger("duration", (e, t, r, s) => {
      if ((0, Ze.getPageLevelTriggerState)(e).fired) return () => {};
      let o = e[1]?.pluginConfig,
        i = o?.mode,
        a =
          i === "idle" || i === "timeOnSite"
            ? i
            : L.DEFAULT_DURATION_TRIGGER_MODE,
        l = o?.duration ?? L.DEFAULT_DURATION_TRIGGER_SECONDS,
        u =
          (Number.isFinite(l)
            ? Math.min(
                Math.max(l, (0, L.minimumDurationSeconds)(a)),
                L.DURATION_TRIGGER_SECONDS_RANGE.max
              )
            : L.DEFAULT_DURATION_TRIGGER_SECONDS) * 1e3,
        f,
        d = !1,
        p = () => {},
        h = () => {
          if (!d) {
            (d = !0),
              ((0, Ze.getPageLevelTriggerState)(e).fired = !0),
              (f = void 0),
              p();
            for (let w of fa(e, t)) s({ target: w });
          }
        };
      if (a === "timeOnSite") {
        let w = Date.now(),
          m = (0, Ze.getPageLevelTriggerState)(e),
          A = m.deadline,
          b = typeof window.__wf_design < "u",
          v = A ?? (b ? w + u : w - performance.now() + u);
        return (
          A === void 0 && (m.deadline = v),
          (f = setTimeout(h, Math.max(0, v - w))),
          () => {
            f !== void 0 && clearTimeout(f);
          }
        );
      }
      let g = () => {
        d || (f !== void 0 && clearTimeout(f), (f = setTimeout(h, u)));
      };
      f = setTimeout(h, u);
      let y = Mp({ restart: g }, r),
        E = !1;
      return (
        (p = () => {
          E || ((E = !0), y());
        }),
        () => {
          f !== void 0 && clearTimeout(f), p();
        }
      );
    });
  }
});
var ke = O((ts) => {
  "use strict";
  Object.defineProperty(ts, "__esModule", { value: !0 });
  function Pp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Pp(ts, {
    resolveToNumber: function () {
      return xp;
    },
    resolveToString: function () {
      return kp;
    },
  });
  function xp(n, e) {
    if (typeof n == "number") return n;
    if (typeof n == "string") {
      let t = n;
      if (t.startsWith("var(")) {
        let s = t.slice(4, -1).split(",")[0]?.trim() ?? "";
        if (!s || ((t = getComputedStyle(e).getPropertyValue(s).trim()), !t))
          return;
      }
      let r = parseFloat(t);
      return isNaN(r) ? void 0 : r;
    }
  }
  function kp(n, e) {
    if (typeof n == "string") {
      if (n.startsWith("var(")) {
        let t = n.slice(4, -1).split(",")[0]?.trim() ?? "";
        return (t && getComputedStyle(e).getPropertyValue(t).trim()) || void 0;
      }
      return n;
    }
  }
});
var ma = O((ss) => {
  "use strict";
  Object.defineProperty(ss, "__esModule", { value: !0 });
  function Np(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Np(ss, {
    buildMouseFollowAction: function () {
      return jp;
    },
    forTestSuite: function () {
      return Bp;
    },
  });
  var ns = ne(),
    Ot = $e(),
    Fp = 0.5,
    At = 50;
  function Lp(n) {
    let e = 2166136261;
    for (let t = 0; t < n.length; t++)
      (e ^= n.charCodeAt(t)), (e = Math.imul(e, 16777619));
    return e >>> 0;
  }
  function Dp(n) {
    let e = n >>> 0;
    return () => {
      e = (e + 1831565813) | 0;
      let t = Math.imul(e ^ (e >>> 15), 1 | e);
      return (
        (t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)),
        ((t ^ (t >>> 14)) >>> 0) / 4294967296
      );
    };
  }
  function pa(n, e, t) {
    if (n <= 1) return [0];
    if (typeof e == "number") {
      let r = Math.max(0, Math.min(n - 1, Math.floor(e))),
        s = [r];
      for (let o = 1; s.length < n; o++)
        r + o < n && s.push(r + o), r - o >= 0 && s.push(r - o);
      return s;
    }
    switch (e) {
      case "start":
        return Array.from({ length: n }, (r, s) => s);
      case "center": {
        let r = [],
          s = Math.floor((n - 1) / 2);
        r.push(s);
        for (let o = 1; r.length < n; o++)
          s + o < n && r.push(s + o), s - o >= 0 && r.push(s - o);
        return r;
      }
      case "random": {
        let r = t != null && t !== "" ? Dp(Lp(t)) : Math.random,
          s = Array.from({ length: n }, (o, i) => i);
        for (let o = n - 1; o > 0; o--) {
          let i = Math.floor(r() * (o + 1));
          [s[o], s[i]] = [s[i], s[o]];
        }
        return s;
      }
      case "edges": {
        let r = [],
          s = 0,
          o = n - 1;
        for (; s <= o; ) r.push(s), s !== o && r.push(o), s++, o--;
        return r;
      }
      case "end":
      default:
        return Array.from({ length: n }, (r, s) => n - 1 - s);
    }
  }
  function rs(n) {
    if (n == null) return At;
    let e = typeof n == "number" ? n * 1e3 : parseFloat(n);
    return Number.isFinite(e) && e >= 0 ? e : At;
  }
  var Qe = (n) => {
      if (typeof n != "string") return 0.5;
      let e = /^(-?\d+(?:\.\d+)?)%$/.exec(n.trim());
      if (e) return Math.max(0, Math.min(1, parseFloat(e[1]) / 100));
      let t = n.trim().toLowerCase();
      return t === "left" || t === "top"
        ? 0
        : t === "right" || t === "bottom"
        ? 1
        : 0.5;
    },
    ha = (n, e) => {
      if (n?.amount != null) {
        let t = rs(n.amount),
          r = e > 1 ? t / (e - 1) : At;
        return Math.max(1, r);
      }
      return n?.each != null ? Math.max(1, rs(n.each)) : 1;
    },
    ga = (n) => {
      if (!n) return { x: 0.5, y: 0.5 };
      if (typeof n == "string") {
        let [e, t] = n.trim().split(/\s+/);
        return { x: Qe(e ?? "50%"), y: Qe(t ?? "50%") };
      }
      return { x: Qe(n.x), y: Qe(n.y) };
    },
    Bp = {
      DEFAULT_STAGGER_MS: At,
      computeMouseFollowSmoothingMs: ha,
      getChainOrder: pa,
      parseAnchor: ga,
      parseAnchorAxis: Qe,
      staggerEachToMs: rs,
    };
  function Vp(n, e, t, r) {
    if (!t.length) return;
    let s = r?.animation;
    if (!s?.hasGsap()) return;
    let o =
        typeof window < "u" &&
        typeof window.matchMedia == "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      i = e,
      a = i?.leaveBehavior ?? "return",
      l = i?.onEnter ?? "animate",
      c = r?.timelineRole,
      u = c === "mouseX" ? "x" : c === "mouseY" ? "y" : i?.axis ?? "x",
      f = u,
      d = i?.followMode;
    if (
      d != null &&
      d !== "full" &&
      d !== (0, ns.getSingleAxisMouseFollowMode)(u)
    )
      return;
    let p = ga(i?.anchor),
      h = u === "x" ? p.x : p.y,
      g = t.map((C) => s.getProperty(C, f)),
      y = t.map((C) => s.quickSetter(C, f, "px"));
    if (y.some((C) => C == null)) return;
    let E = y,
      w = (0, Ot.initScrollCache)(),
      m = t.map((C) => {
        let N = C.getBoundingClientRect();
        return u === "x"
          ? N.left + N.width * h
          : N.top + N.height * h + (0, Ot.getScrollY)();
      }),
      A = n.timing?.stagger,
      b = t.length,
      v = ha(A, b),
      T = A?.from,
      S = pa(
        b,
        typeof T == "number" ||
          T === "start" ||
          T === "center" ||
          T === "edges" ||
          T === "end" ||
          T === "random"
          ? T
          : "end",
        i?.groupId ?? i?.syncedActionId
      );
    if (S.length === 0) return;
    let I = new Float64Array(b),
      x = S[0],
      P = { value: m[x] ?? 0 },
      R = null,
      k = !1,
      F = 0,
      G = null,
      B = !1,
      W = null,
      Z = performance.now(),
      Q = 0,
      Ee = () => {
        let C = performance.now(),
          N = Math.min(C - Z, 100);
        Z = C;
        let z = 1 - Math.exp(-N / v),
          U = !1;
        for (let $ = 0; $ < S.length; $++) {
          let V = S[$],
            we;
          if ($ === 0) we = P.value;
          else {
            let Qs = S[$ - 1];
            we = m[Qs] + I[Qs];
          }
          let Zs = we - m[V],
            Bt = Zs - I[V];
          Math.abs(Bt) > Fp
            ? ((I[V] = I[V] + Bt * z), E[V](I[V]), (U = !0))
            : Bt !== 0 && ((I[V] = Zs), E[V](I[V]));
        }
        R?.isActive() && (U = !0), U || oe();
      },
      oe = () => {
        B && (W?.(), (W = null), (B = !1));
      },
      Ks = (C) => {
        R?.kill(), (R = null), (Q = 0), (P.value = C);
        for (let N = 0; N < S.length; N++) {
          let z = S[N],
            U = C - m[z];
          (I[z] = U), E[z](U);
        }
        oe();
      },
      Tl = () => {
        R?.kill(), (R = null), (Q = 0), (P.value = m[x] ?? 0);
        for (let C = 0; C < S.length; C++) {
          let N = S[C];
          (I[N] = 0), E[N](0);
        }
        oe();
      },
      ce = () => {
        B || ((Z = performance.now()), (W = s.addTicker(Ee)), (B = !0));
      },
      bl = (C, N) => {
        (G = C),
          (F = N
            ? u === "x"
              ? window.innerWidth
              : window.innerHeight
            : u === "x"
            ? C.offsetWidth
            : C.offsetHeight);
      },
      Sl = (C) => {
        G || bl(C.triggerEl, C.isViewport);
        let N = u === "x" ? C.x : C.y + (0, Ot.getScrollY)();
        if (o) {
          (k = !0), Ks(N);
          return;
        }
        if (k)
          if (R) {
            let z = Math.max(Q - performance.now(), 50);
            R.kill();
            let U = s.to(P, {
              value: N,
              duration: z / 1e3,
              ease: "power2.out",
              onUpdate: ce,
              onComplete: () => {
                R === U && ((R = null), (Q = 0));
              },
            });
            if (!U) {
              (P.value = N), ce();
              return;
            }
            R = U;
          } else P.value = N;
        else {
          if (((k = !0), l === "snap")) {
            Ks(N);
            return;
          }
          let z = Math.abs(N - P.value),
            $ = 0.1 + Math.min(z / (F || 1), 1) * 0.5;
          (Q = performance.now() + $ * 1e3), R?.kill();
          let V = s.to(P, {
            value: N,
            duration: $,
            ease: "power2.out",
            onUpdate: ce,
            onComplete: () => {
              R === V && ((R = null), (Q = 0));
            },
          });
          if (!V) {
            (P.value = N), ce();
            return;
          }
          R = V;
        }
        ce();
      },
      El = () => {
        if (((k = !1), a === "stay")) {
          ce();
          return;
        }
        if (o) {
          Tl();
          return;
        }
        let C = m[x] ?? 0,
          N = Math.abs(P.value - C),
          U = 0.1 + Math.min(N / (F || 1), 1) * 0.5;
        R?.kill();
        let $ = s.to(P, {
          value: C,
          duration: U,
          ease: "power2.out",
          onUpdate: ce,
          onComplete: () => {
            R === $ && (R = null);
          },
        });
        if (!$) {
          (P.value = C), ce();
          return;
        }
        R = $;
      },
      wl = r?.subscribeChannel?.(ns.MOUSE_MOVE_CHANNELS.POSITION, Sl),
      Ol = r?.subscribeChannel?.(ns.MOUSE_MOVE_CHANNELS.LEAVE, El),
      Xs = new AbortController(),
      { signal: Al } = Xs,
      Dt = 0,
      _l = () => {
        clearTimeout(Dt),
          (Dt = window.setTimeout(() => {
            G && (F = u === "x" ? G.offsetWidth : G.offsetHeight);
            for (let C = 0; C < t.length; C++) {
              let N = t[C],
                z = s.getProperty(N, f),
                U = typeof z == "number" ? z : parseFloat(String(z)),
                $ = Number.isFinite(U) ? U : 0,
                V = N.getBoundingClientRect(),
                we = u === "x" ? V.left + V.width * h : V.top + V.height * h;
              (m[C] = u === "x" ? we - $ : we - $ + (0, Ot.getScrollY)()),
                (I[C] = $);
            }
            if (!k) {
              let C = m[x];
              C !== void 0 &&
                (R?.isActive() && (R.kill(), (R = null)), (P.value = C));
            }
          }, 250));
      };
    return (
      window.addEventListener("resize", _l, { signal: Al }),
      () => {
        R?.kill(), oe(), clearTimeout(Dt), Xs.abort(), wl?.(), Ol?.(), w();
        for (let C = 0; C < t.length; C++) s.set(t[C], { [f]: g[C] });
      }
    );
  }
  function jp(n) {
    n.addAction("mouse-follow", {
      requiresTriggerElementContext: !0,
      createCustomTween: (e, t, r, s, o, i, a) => Vp(t, r, o, a),
    });
  }
});
var ba = O((as) => {
  "use strict";
  Object.defineProperty(as, "__esModule", { value: !0 });
  function Gp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Gp(as, {
    applyAdditive: function () {
      return Wp;
    },
    formatRandom: function () {
      return is;
    },
    formatRandomArray: function () {
      return va;
    },
    isAdditiveValue: function () {
      return Up;
    },
    isRandomArrayValue: function () {
      return $p;
    },
    isRandomValue: function () {
      return os;
    },
    makeClamp: function () {
      return Yp;
    },
    makeRandomArrayPicker: function () {
      return Hp;
    },
    makeRandomPicker: function () {
      return zp;
    },
  });
  function os(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-random" &&
      typeof e.min == "number" &&
      typeof e.max == "number" &&
      (e.step === void 0 || typeof e.step == "number") &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function Up(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-additive" &&
      (typeof e.value == "number" || os(e.value)) &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function $p(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-random-array" &&
      Array.isArray(e.values) &&
      e.values.every((t) => typeof t == "number" || typeof t == "string") &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function is(n, e) {
    let t = n.unit ?? e ?? "",
      r = n.step != null ? `, ${n.step}` : "";
    return `random(${n.min}, ${n.max}${r})${t}`;
  }
  function va(n, e) {
    let t = n.unit ?? e ?? "";
    return `random([${n.values.join(", ")}])${t}`;
  }
  function ya(n) {
    let [e = "", t] = String(n).split("e"),
      r = (e.split(".")[1] || "").length;
    return t === void 0 ? r : Math.max(0, r - Number(t));
  }
  function qp(n, e) {
    if (n <= 1) return 0;
    if (e === void 0) return Math.floor(Math.random() * n);
    let t = Math.floor(Math.random() * (n - 1));
    return t < e ? t : t + 1;
  }
  function Ta(n, e, t) {
    let r = new WeakMap(),
      s = (o, i) => {
        let a = qp(n, r.get(i));
        return r.set(i, a), e(a);
      };
    return (s.legacyExpression = t), s;
  }
  function zp(n) {
    let e = n.unit ?? "",
      t = (u) => (e ? `${u}${e}` : u),
      r = is(n);
    if (!n.step) {
      let { min: u, max: f } = n,
        d = (p, h) => t(u + Math.random() * (f - u));
      return (d.legacyExpression = r), d;
    }
    let s = Math.abs(n.step),
      o = Math.min(n.min, n.max),
      i = Math.max(n.min, n.max),
      a = Math.round((i - o) / s),
      l = Math.max(ya(o), ya(s)),
      c = 10 ** l;
    return Ta(
      a + 1,
      (u) => {
        let f = o + u * s,
          d = l ? Math.round(f * c) / c : f;
        return t(Math.min(i, Math.max(o, d)));
      },
      r
    );
  }
  function Hp(n) {
    let e = n.unit ?? "",
      t = [...new Set(n.values)];
    return Ta(
      t.length,
      (r) => {
        let s = t[r] ?? 0;
        return typeof s == "number" && e ? `${s}${e}` : s;
      },
      va(n)
    );
  }
  function Wp(n, e) {
    let t = n.unit ?? e ?? "";
    return os(n.value) ? `+=${is(n.value, t)}` : `+=${n.value}${t}`;
  }
  function Yp(n, e) {
    let t = (r) => (r < n ? n : r > e ? e : r);
    return (r) => {
      if (typeof r == "number") return t(r);
      let s = parseFloat(r);
      if (Number.isNaN(s)) return r;
      let o = t(s);
      return o === s
        ? r
        : `${o}${r.replace(/^\s*[+-]?[\d.]+(?:e[+-]?\d+)?/i, "")}`;
    };
  }
});
var Oa = O((ls) => {
  "use strict";
  Object.defineProperty(ls, "__esModule", { value: !0 });
  Object.defineProperty(ls, "build", {
    enumerable: !0,
    get: function () {
      return Jp;
    },
  });
  var Je = ke(),
    Kp = ma(),
    D = ba();
  function Sa(n, e) {
    return e != null && typeof n == "string" && n.startsWith("var(")
      ? (0, Je.resolveToString)(n, e) ?? n
      : n;
  }
  var Ea = new Set(["opacity", "autoAlpha"]),
    Xp = new Set(["scale", "scaleX", "scaleY", "z", "transformPerspective"]),
    Zp = new Set(["xPercent", "yPercent"]),
    wa = new Set(["width", "height"]);
  function _t(n) {
    return n.startsWith("+=") || n.startsWith("-=") || n.startsWith("random(");
  }
  function Qp(n) {
    if (Ea.has(n)) return (0, D.makeClamp)(0, 1);
    if (Xp.has(n) || wa.has(n)) return (0, D.makeClamp)(0, Number.MAX_VALUE);
  }
  function Rt(n) {
    return (
      (0, D.isRandomValue)(n) ||
      (0, D.isAdditiveValue)(n) ||
      (0, D.isRandomArrayValue)(n)
    );
  }
  function It(n, e) {
    let t = Ea.has(n) ? 100 : 1,
      r = t !== 1 || Zp.has(n),
      s = (o) => ({
        type: "ix3-random",
        min: o.min / t,
        max: o.max / t,
        step: o.step != null ? o.step / t : void 0,
      });
    if ((0, D.isRandomArrayValue)(e)) {
      let o = r
        ? {
            type: "ix3-random-array",
            values: e.values.map((i) => (typeof i == "number" ? i / t : i)),
          }
        : e;
      return (0, D.makeRandomArrayPicker)(o);
    }
    if ((0, D.isRandomValue)(e)) return (0, D.makeRandomPicker)(r ? s(e) : e);
    if (r) {
      let o = (0, D.isRandomValue)(e.value) ? s(e.value) : e.value / t;
      return (0, D.applyAdditive)({ type: "ix3-additive", value: o });
    }
    return (0, D.applyAdditive)(e);
  }
  function Jp(n) {
    (0, Kp.buildMouseFollowAction)(n),
      n
        .addAction("class", {
          createCustomTween: (e, t, r, s, o, i) => {
            let a = r.class,
              l = a?.selectors || [],
              c = a?.operation,
              u = l
                ? o.map((d) => ({ element: d, classList: [...d.classList] }))
                : [],
              f = () => {
                if (!(!c || !l))
                  for (let d of o)
                    c === "addClass"
                      ? l.forEach((p) => d.classList.add(p))
                      : c === "removeClass"
                      ? l.forEach((p) => d.classList.remove(p))
                      : c === "toggleClass" &&
                        l.forEach((p) => d.classList.toggle(p));
              };
            return (
              e.to(
                {},
                { duration: 0.001, onComplete: f, onReverseComplete: f },
                !i || i === 0 ? 0.001 : i
              ),
              () => {
                if (l) {
                  for (let d of u)
                    if (
                      d.element &&
                      (d.element instanceof HTMLElement &&
                        (d.element.className = ""),
                      d.element.classList)
                    )
                      for (let p of d.classList) d.element.classList.add(p);
                }
              }
            );
          },
        })
        .addAction("style", {
          createTweenConfig: (e, t) => {
            let r = { to: {}, from: {} },
              s = t?.[0];
            for (let o in e) {
              let i = e[o],
                a = Array.isArray(i) ? i[1] : i,
                l = Array.isArray(i) ? i[0] : void 0,
                c = Rt(a) ? It(o, a) : Sa(a, s),
                u = Rt(l) ? It(o, l) : l !== void 0 ? Sa(l, s) : void 0;
              c != null && (r.to[o] = c),
                u != null && !(0, D.isAdditiveValue)(a) && (r.from[o] = u),
                wa.has(o) &&
                  (Rt(a) || Rt(l)) &&
                  (r.modifiers || (r.modifiers = {}),
                  (r.modifiers[o] = (0, D.makeClamp)(0, Number.MAX_VALUE)));
            }
            return r;
          },
        })
        .addAction("transform", {
          createTweenConfig: (e, t) => {
            let r = { to: {}, from: {} },
              s = t?.[0];
            for (let o in e) {
              let i = e[o],
                a = Array.isArray(i) ? i[1] : i,
                l = Array.isArray(i) ? i[0] : void 0,
                c = (0, D.isAdditiveValue)(a),
                u =
                  (0, D.isRandomValue)(a) || (0, D.isRandomArrayValue)(a) || c,
                f =
                  (0, D.isRandomValue)(l) ||
                  (0, D.isRandomArrayValue)(l) ||
                  (0, D.isAdditiveValue)(l);
              if (u || f) {
                let d = Qp(o);
                d &&
                  (r.modifiers || (r.modifiers = {}),
                  (r.modifiers[o] = d),
                  o === "autoAlpha" && (r.modifiers.opacity = d),
                  o === "scale" &&
                    ((r.modifiers.scaleX = d), (r.modifiers.scaleY = d))),
                  u && (a = It(o, a)),
                  f && (l = It(o, l));
              }
              switch (o) {
                case "autoAlpha":
                case "opacity": {
                  if (a != null && typeof a == "string" && !_t(a)) {
                    let d = s ? (0, Je.resolveToNumber)(a, s) : parseFloat(a);
                    a = d !== void 0 ? d / 100 : a;
                  }
                  if (l != null && typeof l == "string" && !_t(l)) {
                    let d = s ? (0, Je.resolveToNumber)(l, s) : parseFloat(l);
                    l = d !== void 0 ? d / 100 : l;
                  }
                  break;
                }
                case "transformOrigin": {
                  typeof i == "string"
                    ? ((a = a || i), (l = a))
                    : typeof l == "string"
                    ? (a = l)
                    : typeof a == "string" && (l = a);
                  break;
                }
                case "xPercent":
                case "yPercent": {
                  if (a != null && typeof a == "string" && !_t(a)) {
                    let d = s ? (0, Je.resolveToNumber)(a, s) : parseFloat(a);
                    a = d !== void 0 ? d : a;
                  }
                  if (l != null && typeof l == "string" && !_t(l)) {
                    let d = s ? (0, Je.resolveToNumber)(l, s) : parseFloat(l);
                    l = d !== void 0 ? d : l;
                  }
                  break;
                }
              }
              a != null && (r.to[o] = a), l != null && !c && (r.from[o] = l);
            }
            return r;
          },
        });
  }
});
var Ra = O((cs) => {
  "use strict";
  Object.defineProperty(cs, "__esModule", { value: !0 });
  Object.defineProperty(cs, "buildLottieAction", {
    enumerable: !0,
    get: function () {
      return th;
    },
  });
  var eh = ke();
  function th(n) {
    n.addAction("lottie", {
      createCustomTween: (e, t, r, s, o, i) => {
        let a = r.lottie;
        if (!a || !o.length || !window.Webflow) return;
        let l = window.Webflow.require?.("lottie");
        if (!l) return;
        let c = [],
          u = !1;
        for (let f of o) {
          let d = _a(a.from, f, Aa.FROM),
            p = _a(a.to, f, Aa.TO),
            h = l.createInstance(f);
          if (!h) continue;
          c.push(h);
          let g = () => {
            if (u) return;
            let y = h.frames,
              E = Math.round(d * y),
              w = Math.round(p * y);
            h.gsapFrame === null && (h.gsapFrame = E);
            let m = s;
            m.ease || (m = { ...m, ease: "none" }),
              e.fromTo(h, { gsapFrame: E }, { gsapFrame: w, ...m }, i || 0);
          };
          h.isLoaded ? g() : h.onDataReady(g);
        }
        return () => {
          u = !0;
          for (let f of c) f.goToFrameAndStop(0), (f.gsapFrame = null);
        };
      },
    });
  }
  var Aa = { DURATION: 1, FROM: 0, TO: 1 };
  function _a(n, e, t) {
    if (typeof n == "number") return n;
    let r = (0, eh.resolveToNumber)(n, e);
    return r !== void 0 ? r / 100 : t;
  }
});
var fs = O((us) => {
  "use strict";
  Object.defineProperty(us, "__esModule", { value: !0 });
  Object.defineProperty(us, "RIVE_CONSTANTS", {
    enumerable: !0,
    get: function () {
      return nh;
    },
  });
  var nh = { MINIMUM_TIME: 0.001, MAX_BYTE_VALUE: 255 };
});
var hs = O((ps) => {
  "use strict";
  Object.defineProperty(ps, "__esModule", { value: !0 });
  function rh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  rh(ps, {
    clearSurfaceCache: function () {
      return sh;
    },
    surfaceCache: function () {
      return ds;
    },
  });
  var ds = new WeakMap();
  function sh(n, e) {
    if (!e) return;
    let t = `${e.name}:${e.instanceName ?? ""}`,
      r = ds.get(n);
    r && (r.delete(t), r.size === 0 && ds.delete(n));
  }
});
var et = O((gs) => {
  "use strict";
  Object.defineProperty(gs, "__esModule", { value: !0 });
  function oh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  oh(gs, {
    parseVmKey: function () {
      return lh;
    },
    vmKey: function () {
      return ih;
    },
  });
  function ih(n, e, t) {
    return `vm:${n}:${e}:${t}`;
  }
  var ah = new Set([
    "string",
    "number",
    "boolean",
    "color",
    "enum",
    "trigger",
    "artboard",
  ]);
  function lh(n) {
    if (!n.startsWith("vm:")) return null;
    let e = n.lastIndexOf(":"),
      t = n.slice(e + 1);
    if (!ah.has(t)) return null;
    let r = n.slice(3, e),
      s = r.indexOf(":");
    return s === -1
      ? null
      : { vmName: r.slice(0, s), propName: r.slice(s + 1), propType: t };
  }
});
var Mt = O((ms) => {
  "use strict";
  Object.defineProperty(ms, "__esModule", { value: !0 });
  function ch(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ch(ms, {
    getVmiProperty: function () {
      return Ia;
    },
    storeOriginalValues: function () {
      return fh;
    },
  });
  var uh = et();
  function fh(n, e) {
    let t = { viewModelProperties: {} };
    for (let r of n) dh(e, r.propertyName, r.propertyType, t);
    return t;
  }
  function dh(n, e, t, r) {
    let s = (0, uh.vmKey)(n.name, e, t);
    if (!(s in r.viewModelProperties)) {
      if (t === "artboard") {
        let i = n.riveInstance.viewModelInstance?.artboard?.(e)?.name;
        i != null && (r.viewModelProperties[s] = i);
        return;
      }
      let o = n.riveInstance.viewModelInstance
        ? ph(n.riveInstance.viewModelInstance, t, e)
        : null;
      o != null && (r.viewModelProperties[s] = o);
    }
  }
  function Ia(n, e, t) {
    switch (e) {
      case "number":
        return n.number(t);
      case "boolean":
        return n.boolean(t);
      case "string":
        return n.string(t);
      case "color":
        return n.color(t);
      case "enum":
        return n.enum(t);
      default:
        return null;
    }
  }
  function ph(n, e, t) {
    let r = Ia(n, e, t);
    return r ? r.value : void 0;
  }
});
var vs = O((ys) => {
  "use strict";
  Object.defineProperty(ys, "__esModule", { value: !0 });
  Object.defineProperty(ys, "parseColorToAARRGGBB", {
    enumerable: !0,
    get: function () {
      return gh;
    },
  });
  var hh = fs();
  function gh(n) {
    let e = n.trim();
    if (!e) return null;
    try {
      let { red: t, green: r, blue: s, alpha: o } = yh(e);
      return t === void 0 || r === void 0 || s === void 0
        ? null
        : ((Math.round(o * hh.RIVE_CONSTANTS.MAX_BYTE_VALUE) << 24) |
            (t << 16) |
            (r << 8) |
            s) >>>
            0;
    } catch {
      return null;
    }
  }
  var Te = null;
  function mh(n) {
    if (!Te) {
      let e = document.createElement("canvas");
      if (((e.width = 1), (e.height = 1), (Te = e.getContext("2d")), !Te))
        return null;
    }
    return (
      (Te.fillStyle = "#000000"),
      (Te.fillStyle = n),
      Te.fillStyle === "#000000" && n.toLowerCase() !== "black"
        ? null
        : Te.fillStyle
    );
  }
  function Ma(n, e, t) {
    let r = (1 - Math.abs(2 * t - 1)) * e,
      s = r * (1 - Math.abs(((n / 60) % 2) - 1)),
      o = t - r / 2,
      i,
      a,
      l;
    return (
      n >= 0 && n < 60
        ? ((i = r), (a = s), (l = 0))
        : n >= 60 && n < 120
        ? ((i = s), (a = r), (l = 0))
        : n >= 120 && n < 180
        ? ((i = 0), (a = r), (l = s))
        : n >= 180 && n < 240
        ? ((i = 0), (a = s), (l = r))
        : n >= 240 && n < 300
        ? ((i = s), (a = 0), (l = r))
        : ((i = r), (a = 0), (l = s)),
      {
        red: Math.round((i + o) * 255),
        green: Math.round((a + o) * 255),
        blue: Math.round((l + o) * 255),
      }
    );
  }
  function yh(n) {
    let e,
      t,
      r,
      s = 1,
      o = n.replace(/\s/g, "").toLowerCase(),
      i = o;
    if (!i.startsWith("#") && !i.startsWith("rgb") && !i.startsWith("hsl")) {
      let a = mh(o);
      a && (i = a);
    }
    if (i.startsWith("#")) {
      let a = i.substring(1);
      a.length === 3 || a.length === 4
        ? ((e = parseInt(a.charAt(0) + a.charAt(0), 16)),
          (t = parseInt(a.charAt(1) + a.charAt(1), 16)),
          (r = parseInt(a.charAt(2) + a.charAt(2), 16)),
          a.length === 4 && (s = parseInt(a.charAt(3) + a.charAt(3), 16) / 255))
        : (a.length === 6 || a.length === 8) &&
          ((e = parseInt(a.substring(0, 2), 16)),
          (t = parseInt(a.substring(2, 4), 16)),
          (r = parseInt(a.substring(4, 6), 16)),
          a.length === 8 && (s = parseInt(a.substring(6, 8), 16) / 255));
    } else if (i.startsWith("rgba")) {
      let a = i.match(/rgba\(([^)]+)\)/)?.[1]?.split(",");
      (e = parseInt(a?.[0] ?? "", 10)),
        (t = parseInt(a?.[1] ?? "", 10)),
        (r = parseInt(a?.[2] ?? "", 10)),
        (s = parseFloat(a?.[3] ?? ""));
    } else if (i.startsWith("rgb")) {
      let a = i.match(/rgb\(([^)]+)\)/)?.[1]?.split(",");
      (e = parseInt(a?.[0] ?? "", 10)),
        (t = parseInt(a?.[1] ?? "", 10)),
        (r = parseInt(a?.[2] ?? "", 10));
    } else if (i.startsWith("hsla")) {
      let a = i.match(/hsla\(([^)]+)\)/)?.[1]?.split(","),
        l = parseFloat(a?.[0] ?? ""),
        c = parseFloat(a?.[1]?.replace("%", "") ?? "") / 100,
        u = parseFloat(a?.[2]?.replace("%", "") ?? "") / 100;
      (s = parseFloat(a?.[3] ?? "")),
        ({ red: e, green: t, blue: r } = Ma(l, c, u));
    } else if (i.startsWith("hsl")) {
      let a = i.match(/hsl\(([^)]+)\)/)?.[1]?.split(","),
        l = parseFloat(a?.[0] ?? ""),
        c = parseFloat(a?.[1]?.replace("%", "") ?? "") / 100,
        u = parseFloat(a?.[2]?.replace("%", "") ?? "") / 100;
      ({ red: e, green: t, blue: r } = Ma(l, c, u));
    }
    if (
      Number.isNaN(e) ||
      Number.isNaN(t) ||
      Number.isNaN(r) ||
      Number.isNaN(s)
    )
      throw new Error(`Invalid color value: '${n}'`);
    return { red: e, green: t, blue: r, alpha: s };
  }
});
var bs = O((Ts) => {
  "use strict";
  Object.defineProperty(Ts, "__esModule", { value: !0 });
  Object.defineProperty(Ts, "setVmiValue", {
    enumerable: !0,
    get: function () {
      return Sh;
    },
  });
  var vh = et(),
    Th = Mt(),
    bh = vs();
  function Sh(n, e, t, r, s, o) {
    let i = n.riveInstance.viewModelInstance;
    if (e === "trigger") {
      if (o) return;
      i?.trigger?.(t)?.fire?.();
      return;
    }
    if (!i) return;
    let a = (0, Th.getVmiProperty)(i, e, t);
    if (!a) return;
    let l = s?.viewModelProperties[(0, vh.vmKey)(n.name, t, e)],
      c = o ? l ?? r : r,
      u = `${e}:${t}`;
    switch (e) {
      case "number":
        typeof c == "number" && ((a.value = c), (n.currentValues[u] = c));
        return;
      case "boolean":
        typeof c == "boolean" && ((a.value = c), (n.currentValues[u] = c));
        return;
      case "string":
        typeof c == "string" && ((a.value = c), (n.currentValues[u] = c));
        return;
      case "enum":
        typeof c == "string" && ((a.value = c), (n.currentValues[u] = c));
        return;
      case "color": {
        let f =
          typeof c == "number"
            ? c
            : typeof c == "string"
            ? (0, bh.parseColorToAARRGGBB)(c)
            : null;
        f != null && ((a.value = f), (n.currentValues[u] = f));
        return;
      }
      default:
        return;
    }
  }
});
var Pa = O((Ss) => {
  "use strict";
  Object.defineProperty(Ss, "__esModule", { value: !0 });
  function Eh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Eh(Ss, {
    createCleanupFunction: function () {
      return _h;
    },
    restoreViewModelProperties: function () {
      return Ca;
    },
  });
  var wh = et(),
    Oh = bs(),
    Ah = hs();
  function Ca(n, e, t) {
    let r = n.viewModelInstance ?? null;
    if (r)
      for (let [s, o] of Object.entries(t.viewModelProperties)) {
        let i = (0, wh.parseVmKey)(s);
        if (!i || i.vmName !== e) continue;
        let a = { name: e, riveInstance: n, currentValues: {} };
        if (i.propType === "artboard") {
          if (typeof o != "string") continue;
          let l = r.artboard?.(i.propName),
            c = n.getArtboard?.(o);
          l && c && (l.value = c);
          continue;
        }
        (0, Oh.setVmiValue)(a, i.propType, i.propName, o);
      }
  }
  function _h(n, e, t) {
    return () => {
      !e || !n || (Ca(n, e.name, t), (0, Ah.clearSurfaceCache)(n, e));
    };
  }
});
var Na = O((Es) => {
  "use strict";
  Object.defineProperty(Es, "__esModule", { value: !0 });
  function Rh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Rh(Es, {
    interpolateAARRGGBB: function () {
      return ka;
    },
    setupAnimateTimeline: function () {
      return Ch;
    },
  });
  var Ih = Mt(),
    Mh = vs(),
    xa = ke();
  function ka(n, e, t) {
    let r = (n >>> 24) & 255,
      s = (n >>> 16) & 255,
      o = (n >>> 8) & 255,
      i = n & 255,
      a = (e >>> 24) & 255,
      l = (e >>> 16) & 255,
      c = (e >>> 8) & 255,
      u = e & 255,
      f = Math.round(r + (a - r) * t),
      d = Math.round(s + (l - s) * t),
      p = Math.round(o + (c - o) * t),
      h = Math.round(i + (u - i) * t);
    return ((f << 24) | (d << 16) | (p << 8) | h) >>> 0;
  }
  function Ch(n, e, t, r, s, o) {
    if (t.length === 0) return;
    let i = e.riveInstance.viewModelInstance;
    if (i)
      for (let a of t) {
        if (
          a.value === null ||
          a.value === void 0 ||
          !(0, Ih.getVmiProperty)(i, a.propertyType, a.propertyName)
        )
          continue;
        let c,
          u = a.value;
        if (typeof u == "string" && u.startsWith("var(")) {
          if (
            (a.propertyType === "number"
              ? (c = (0, xa.resolveToNumber)(u, o))
              : a.propertyType === "color" &&
                (c = (0, xa.resolveToString)(u, o)),
            c === void 0)
          )
            continue;
        } else c = u;
        a.propertyType === "number"
          ? Ph(e, n, a.propertyName, c, r, s)
          : a.propertyType === "color" && xh(e, n, a.propertyName, c, r, s);
      }
  }
  function Ph(n, e, t, r, s, o) {
    let i = n.riveInstance.viewModelInstance;
    if (!i) return;
    let a = i.number(t);
    if (!a) return;
    let l = typeof r == "number" ? r : parseFloat(String(r));
    if (isNaN(l)) return;
    let c = { v: a.value };
    e.to(
      c,
      {
        ...s,
        v: l,
        onStart() {
          let u = n.currentValues[`number:${t}`];
          (c.v = typeof u == "number" ? u : a.value), this.invalidate();
        },
        onUpdate: () => {
          a.value = c.v;
        },
      },
      o ?? 0
    );
  }
  function xh(n, e, t, r, s, o) {
    let i = n.riveInstance.viewModelInstance;
    if (!i) return;
    let a = i.color(t);
    if (!a) return;
    let l = typeof r == "number" ? r : (0, Mh.parseColorToAARRGGBB)(String(r));
    if (l == null) return;
    let c = { fromPacked: a.value },
      u = { t: 0 };
    e.fromTo(
      u,
      { t: 0 },
      {
        ...s,
        t: 1,
        onStart() {
          let f = n.currentValues[`color:${t}`];
          (c.fromPacked = typeof f == "number" ? f : a.value),
            this.invalidate();
        },
        onUpdate: () => {
          a.value = ka(c.fromPacked, l, u.t);
        },
      },
      o ?? 0
    );
  }
});
var Va = O((As) => {
  "use strict";
  Object.defineProperty(As, "__esModule", { value: !0 });
  function kh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  kh(As, {
    resolveSurfaceArea: function () {
      return Os;
    },
    setupAnimateAnimation: function () {
      return Vh;
    },
    setupAnimation: function () {
      return Bh;
    },
    setupTimeline: function () {
      return Ba;
    },
  });
  var Fa = fs(),
    ws = hs(),
    La = Mt(),
    Da = Pa(),
    Nh = bs(),
    Fh = Na(),
    Lh = et(),
    Ct = ke();
  function Os(n, e) {
    if (!e) return null;
    let t = `${e.name}:${e.instanceName ?? ""}`,
      r = ws.surfaceCache.get(n)?.get(t);
    if (r) return r;
    let o =
      (n.viewModelByName?.(e.name) ?? void 0)?.instanceByName?.(
        e.instanceName ?? ""
      ) ?? null;
    n.bindViewModelInstance?.(o);
    let i = { name: e.name, riveInstance: n, currentValues: {} },
      a = ws.surfaceCache.get(n);
    return a || ((a = new Map()), ws.surfaceCache.set(n, a)), a.set(t, i), i;
  }
  function Ba(n, e, t, r, s, o) {
    if (t.length === 0) return;
    for (let l of t) {
      if (
        l.propertyType === "trigger" ||
        l.propertyType === "artboard" ||
        l.value === null ||
        l.value === void 0
      )
        continue;
      let c = l.value,
        u;
      typeof c == "string" && c.startsWith("var(")
        ? (u =
            l.propertyType === "number"
              ? (0, Ct.resolveToNumber)(c, o)
              : l.propertyType === "color"
              ? (0, Ct.resolveToString)(c, o)
              : void 0)
        : (u = c),
        u !== void 0 &&
          (e.currentValues[`${l.propertyType}:${l.propertyName}`] = u);
    }
    let i = (l) => {
        for (let c of t) {
          if (
            (c.propertyType !== "trigger" && c.value === null) ||
            c.value === void 0
          )
            continue;
          let u,
            f = c.value;
          if (typeof f == "string" && f.startsWith("var(")) {
            if (
              (c.propertyType === "number"
                ? (u = (0, Ct.resolveToNumber)(f, o))
                : c.propertyType === "color" &&
                  (u = (0, Ct.resolveToString)(f, o)),
              u === void 0)
            )
              continue;
          } else u = f;
          Dh(e, c.propertyName, c.propertyType, u, r, l);
        }
      },
      a = { int: 0 };
    n.to(
      a,
      {
        int: 1,
        duration: Fa.RIVE_CONSTANTS.MINIMUM_TIME,
        onStart: () => {
          i(!1);
        },
        onReverseComplete: () => {
          i(!0);
        },
      },
      s ?? Fa.RIVE_CONSTANTS.MINIMUM_TIME
    );
  }
  function Dh(n, e, t, r, s, o) {
    if (t === "artboard") {
      if (typeof r != "string") return;
      let i = n.riveInstance.viewModelInstance?.artboard?.(e);
      if (!i) return;
      if (o) {
        let l = (0, Lh.vmKey)(n.name, e, t),
          c = s?.viewModelProperties[l];
        if (typeof c == "string") {
          let u = n.riveInstance.getArtboard?.(c);
          u && (i.value = u);
        }
        return;
      }
      let a = n.riveInstance.getArtboard?.(r);
      if (!a) return;
      i.value = a;
      return;
    }
    (0, Nh.setVmiValue)(n, t, e, r, s, o);
  }
  function Bh(n, e, t, r, s) {
    let o = e.animationSource,
      i = Os(n, o);
    if (!i) return;
    let a = e.addedProperties ?? {},
      l = Object.values(a),
      c = (0, La.storeOriginalValues)(l, i);
    return Ba(t, i, l, c, r, s), (0, Da.createCleanupFunction)(n, o, c);
  }
  function Vh(n, e, t, r, s, o) {
    let i = e.animationSource,
      a = Os(n, i);
    if (!a) return;
    let l = e.addedProperties ?? {},
      c = Object.values(l),
      u = (0, La.storeOriginalValues)(c, a);
    return (
      (0, Fh.setupAnimateTimeline)(t, a, c, r, s, o),
      (0, Da.createCleanupFunction)(n, i, u)
    );
  }
});
var za = O((_s) => {
  "use strict";
  Object.defineProperty(_s, "__esModule", { value: !0 });
  function jh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  jh(_s, {
    buildAnimateRiveAction: function () {
      return $h;
    },
    buildRiveAction: function () {
      return Uh;
    },
  });
  var Ua = Va();
  function ja(n) {
    return (
      typeof n == "object" &&
      n !== null &&
      "loaded" in n &&
      typeof n.loaded == "boolean"
    );
  }
  function Ga(n) {
    !n.isPlaying && n.play && n.play();
  }
  function Gh(n, e, t) {
    let s = e.getInstance(n)?.rive,
      o = ja(s) ? s : null;
    if (o?.loaded) return Ga(o), t(o, n);
    let i,
      a = !1,
      l = () => {
        if (a || !n.isConnected) return;
        let u = e.getInstance(n)?.rive,
          f = ja(u) ? u : null;
        f?.loaded && (Ga(f), (i = t(f, n))),
          n.removeEventListener("w-rive-load", l);
      };
    return (
      n.addEventListener("w-rive-load", l),
      () => {
        (a = !0), n.removeEventListener("w-rive-load", l), i?.();
      }
    );
  }
  function $a(n, e, t) {
    let r = [];
    for (let s of n) {
      let o = Gh(s, e, t);
      o && r.push(o);
    }
    if (r.length !== 0)
      return () => {
        for (let s of r) s();
      };
  }
  function qa() {
    return window.Webflow ? window.Webflow.require?.("rive") ?? null : null;
  }
  function Uh(n) {
    n.addAction("rive", {
      createCustomTween: (e, t, r, s, o, i) => {
        let a = r.rive;
        if (!a || !o.length) return;
        let l = qa();
        if (l) return $a(o, l, (c, u) => (0, Ua.setupAnimation)(c, a, e, i, u));
      },
    });
  }
  function $h(n) {
    n.addAction("animate-rive", {
      createCustomTween: (e, t, r, s, o, i) => {
        let a = r.rive;
        if (!a || !o.length) return;
        let l = qa();
        if (l)
          return $a(o, l, (c, u) =>
            (0, Ua.setupAnimateAnimation)(c, a, e, s, i, u)
          );
      },
    });
  }
});
var be = O((Rs) => {
  "use strict";
  Object.defineProperty(Rs, "__esModule", { value: !0 });
  function qh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  qh(Rs, {
    checkTt: function () {
      return Kh;
    },
    hasBBoxUpdate: function () {
      return Wh;
    },
    hasIntensity: function () {
      return zh;
    },
    hasMatrixUpdate: function () {
      return Yh;
    },
    hasRenderOrder: function () {
      return Hh;
    },
  });
  var Pt = Y(),
    zh = (n) => "intensity" in n,
    Hh = (n) => "renderOrder" in n,
    Wh = (n) => "singleBBoxNeedsUpdate" in n && "recursiveBBoxNeedsUpdate" in n,
    Yh = (n) => "updateMatrix" in n && "updateMatrixWorld" in n,
    Kh = (n, e) =>
      e === "from"
        ? n === Pt.TweenType.From || n === Pt.TweenType.FromTo
        : n === Pt.TweenType.To || n === Pt.TweenType.FromTo;
});
var Ms = O((Is) => {
  "use strict";
  Object.defineProperty(Is, "__esModule", { value: !0 });
  Object.defineProperty(Is, "colorDataToCss", {
    enumerable: !0,
    get: function () {
      return Xh;
    },
  });
  var Xh = ({ r: n, g: e, b: t, a: r }) => {
    let s = (c) => Math.round(Math.min(1, Math.max(0, c)) * 255),
      o = s(n),
      i = s(e),
      a = s(t);
    if (r === void 0 || r >= 1) return `rgba(${o}, ${i}, ${a}, 1)`;
    let l = Math.min(1, Math.max(0, r));
    return `rgba(${o}, ${i}, ${a}, ${l})`;
  };
});
var Ha = O((Cs) => {
  "use strict";
  Object.defineProperty(Cs, "__esModule", { value: !0 });
  Object.defineProperty(Cs, "storeOriginalState", {
    enumerable: !0,
    get: function () {
      return Jh;
    },
  });
  var Zh = be(),
    Qh = Ms(),
    Jh = (n, e, t) => {
      let r = n.material,
        s = Array.isArray(r) ? r : r ? [r] : [],
        o = e.spline._scene.entityByUuid[t]?.color,
        i = o ? (0, Qh.colorDataToCss)(o) : void 0,
        a = n.rotation;
      return {
        position: { ...n.position },
        rotation: { x: a._x ?? 0, y: a._y ?? 0, z: a._z ?? 0 },
        scale: { ...n.scale },
        ...(i ? { color: i } : {}),
        intensity: n.intensity,
        renderOrder: (0, Zh.hasRenderOrder)(n) ? n.renderOrder : void 0,
        materials: s?.map((l) => ({
          transparent: l.transparent,
          depthWrite: l.depthWrite,
          alpha: l.alpha,
          layers: (l.layers ?? []).map((c) => ({
            visible: c.visible,
            alpha: c.alpha,
            alphaOverride: c.alphaOverride,
            ior: c.ior,
            thickness: c.thickness,
          })),
        })),
      };
    };
});
var tt = O((Ps) => {
  "use strict";
  Object.defineProperty(Ps, "__esModule", { value: !0 });
  Object.defineProperty(Ps, "SPLINE_CONSTANTS", {
    enumerable: !0,
    get: function () {
      return eg;
    },
  });
  var eg = {
    OPACITY_RENDER_ORDER: 999,
    TRANSITION_END_OFFSET: 0.001,
    DEFAULT_TRANSITION_DURATION: 0.5,
    OPACITY_TRANSPARENCY_THRESHOLD: 0.01,
    DEFAULT_TRANSMISSION_IOR: 1.3,
    DEFAULT_TRANSMISSION_THICKNESS: 10,
    MIN_ZOOM_VALUE: 1e-4,
  };
});
var xt = O((xs) => {
  "use strict";
  Object.defineProperty(xs, "__esModule", { value: !0 });
  function tg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  tg(xs, {
    getAppZoom: function () {
      return rg;
    },
    setAppZoom: function () {
      return sg;
    },
  });
  var ng = tt(),
    rg = (n) => {
      let e = n._camera;
      return e._cameraType === "OrthographicCamera"
        ? e.orthoCamera.zoom
        : e.perspCamera.zoom;
    },
    sg = (n, e) => {
      let t = e > 0 ? e : ng.SPLINE_CONSTANTS.MIN_ZOOM_VALUE;
      n.setZoom?.(t);
    };
});
var Ns = O((ks) => {
  "use strict";
  Object.defineProperty(ks, "__esModule", { value: !0 });
  Object.defineProperty(ks, "createCleanupFunction", {
    enumerable: !0,
    get: function () {
      return ig;
    },
  });
  var og = xt(),
    kt = be(),
    ig = (n, e, t, r, s, o) => () => {
      if (!(!n || !t)) {
        if (
          (o && (n.state = void 0),
          Object.assign(n.position, t.position),
          Object.assign(n.rotation, {
            x: t.rotation.x,
            y: t.rotation.y,
            z: t.rotation.z,
          }),
          Object.assign(n.scale, t.scale),
          t.color && (n.color = t.color),
          r.spline?.intensity &&
            typeof r.spline.intensity == "object" &&
            t.intensity !== void 0 &&
            (0, kt.hasIntensity)(n) &&
            (n.intensity = t.intensity),
          r.spline?.zoom && typeof r.spline.zoom == "object")
        ) {
          let i = e.spline;
          typeof i?.setZoom == "function" && (0, og.setAppZoom)(i, s ?? 1);
        }
        if (t.materials) {
          let i = n.material,
            a = Array.isArray(i) ? i : i ? [i] : [];
          (0, kt.hasRenderOrder)(n) && (n.renderOrder = t.renderOrder ?? 0);
          let l = Math.min(a.length, t.materials.length);
          for (let c = 0; c < l; c++) {
            let u = a[c],
              f = t.materials[c];
            if (!u || !f) continue;
            (u.transparent = f.transparent),
              (u.depthWrite = f.depthWrite),
              f.alpha !== void 0 && (u.alpha = f.alpha);
            let d = u.layers ?? [];
            for (let p = 0; p < d.length; p++) {
              let h = d[p],
                g = f.layers[p];
              !h ||
                !g ||
                ((h.visible = g.visible),
                g.alpha !== void 0 && (h.alpha = g.alpha),
                g.alphaOverride !== void 0 &&
                  (h.alphaOverride = g.alphaOverride),
                g.ior !== void 0 && (h.ior = g.ior),
                g.thickness !== void 0 && (h.thickness = g.thickness));
            }
          }
        }
        (0, kt.hasMatrixUpdate)(n) &&
          (n.updateMatrix(), n.updateMatrixWorld(!0)),
          (0, kt.hasBBoxUpdate)(n) &&
            ((n.singleBBoxNeedsUpdate = !0), (n.recursiveBBoxNeedsUpdate = !0)),
          e.spline.requestRender();
      }
    };
});
var Wa = O((Fs) => {
  "use strict";
  Object.defineProperty(Fs, "__esModule", { value: !0 });
  function ag(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ag(Fs, {
    warnNoObjectId: function () {
      return lg;
    },
    warnNoObjectsFound: function () {
      return ug;
    },
    warnObjectNotFound: function () {
      return cg;
    },
  });
  var lg = () => {},
    cg = (n) => {},
    ug = (n) => {};
});
var Xa = O((Ls) => {
  "use strict";
  Object.defineProperty(Ls, "__esModule", { value: !0 });
  Object.defineProperty(Ls, "animateStateTransitions", {
    enumerable: !0,
    get: function () {
      return dg;
    },
  });
  var Ya = tt(),
    fg = Ns(),
    Ka = be(),
    dg = (n, e, t, r, s, o, i, a, l, c) => {
      let u = [];
      n.forEach((d) => {
        if (!d.transition) {
          u.push(null);
          return;
        }
        let p = l.duration ?? Ya.SPLINE_CONSTANTS.DEFAULT_TRANSITION_DURATION,
          h = d.transition({
            from:
              e.stateName?.from && (0, Ka.checkTt)(a, "from")
                ? e.stateName.from
                : void 0,
            to:
              e.stateName?.to && (0, Ka.checkTt)(a, "to")
                ? e.stateName.to
                : null,
            autoPlay: !1,
            duration: p,
            delay: 0,
          });
        u.push(h);
        let g = { time: 0 };
        i.fromTo(
          g,
          { time: 0 },
          {
            ...l,
            time: p - Ya.SPLINE_CONSTANTS.TRANSITION_END_OFFSET,
            onUpdate: () => {
              h.seek(g.time);
            },
          },
          c || 0
        );
      });
      let f = n.map((d, p) =>
        (0, fg.createCleanupFunction)(d, t, r[p], s, o, u[p])
      );
      return () => f.forEach((d) => d?.());
    };
});
var Qa = O((Ds) => {
  "use strict";
  Object.defineProperty(Ds, "__esModule", { value: !0 });
  function pg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  pg(Ds, {
    animateColor: function () {
      return yg;
    },
    animateIntensity: function () {
      return gg;
    },
    animateZoom: function () {
      return mg;
    },
  });
  var Za = xt(),
    hg = Ms(),
    Se = be(),
    gg = (n, e, t, r, s, o) => {
      let i = e.intensity;
      if (!i || typeof i != "object") return;
      let a = n.intensity ?? 0,
        l = i.from && (0, Se.checkTt)(r, "from") ? i.from : a,
        c = i.to && (0, Se.checkTt)(r, "to") ? i.to : a,
        u = { v: l };
      t.fromTo(
        u,
        { v: l },
        {
          ...s,
          v: c,
          onUpdate: () => {
            (0, Se.hasIntensity)(n) && (n.intensity = u.v);
          },
        },
        o || 0
      );
    },
    mg = (n, e, t, r, s, o) => {
      let i = e.zoom;
      if (!i || typeof i != "object" || typeof n.spline?.setZoom != "function")
        return;
      let a = (0, Za.getAppZoom)(n.spline),
        l = i.from && (0, Se.checkTt)(r, "from") ? i.from : a,
        c = i.to && (0, Se.checkTt)(r, "to") ? i.to : a,
        u = { v: l };
      t.fromTo(
        u,
        { v: l },
        {
          ...s,
          v: c,
          onUpdate: () => {
            (0, Za.setAppZoom)(n.spline, u.v);
          },
        },
        o || 0
      );
    },
    yg = (n, e, t, r, s, o, i, a) => {
      let l = e.color;
      if (!l || typeof l != "object" || (!l.from && !l.to)) return;
      let c = i.spline._scene.entityByUuid[a]?.color,
        u = (0, hg.colorDataToCss)(c ?? { r: 255, g: 255, b: 255 }),
        f = l.from && (0, Se.checkTt)(r, "from") ? l.from : u,
        d = l.to && (0, Se.checkTt)(r, "to") ? l.to : u,
        p = window.gsap.utils.interpolate(f, d),
        h = { t: 0 };
      t.fromTo(
        h,
        { t: 0 },
        {
          ...s,
          t: 1,
          onUpdate: function () {
            n.color = p(h.t);
          },
        },
        o || 0
      );
    };
});
var el = O((Bs) => {
  "use strict";
  Object.defineProperty(Bs, "__esModule", { value: !0 });
  function vg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  vg(Bs, {
    createPropertyObject: function () {
      return Ja;
    },
    createTransformTargets: function () {
      return Tg;
    },
  });
  var Ja = (n, e, t) => {
      let r = {},
        s = t[e];
      return (
        ["X", "Y", "Z"].forEach((o) => {
          let i = `${e}${o}`,
            a = n[i],
            l = o.toLowerCase(),
            c = s[l];
          a &&
            typeof a == "object" &&
            (r[l] = { from: a.from ?? c, to: a.to ?? c });
        }),
        { props: r }
      );
    },
    Tg = (n, e) => {
      let t = ["position", "rotation", "scale"],
        r = [];
      return (
        t.forEach((s) => {
          let { props: o } = Ja(e, s, n);
          Object.keys(o).length > 0 && r.push({ object: n[s], props: o });
        }),
        r
      );
    };
});
var tl = O((js) => {
  "use strict";
  Object.defineProperty(js, "__esModule", { value: !0 });
  Object.defineProperty(js, "fadeObject", {
    enumerable: !0,
    get: function () {
      return Og;
    },
  });
  var Nt = tt(),
    Vs = be(),
    bg = (n, e, t, r, s, o) => {
      r.fromTo(n, { alpha: e }, { ...s, alpha: t }, o);
    },
    Sg = (n, e, t, r, s, o) => {
      let i = n.ior ?? Nt.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_IOR,
        a = n.thickness ?? Nt.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_THICKNESS;
      r.fromTo(
        n,
        { alpha: e, ior: i, thickness: a },
        {
          ...s,
          alpha: 1 - t,
          ior: window.gsap.utils.interpolate(i, 1, 1 - t),
          thickness: window.gsap.utils.interpolate(a, 0, 1 - t),
          onUpdate: () => {
            n.visible =
              n.alpha > Nt.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD;
          },
        },
        o
      );
    },
    Eg = (n, e, t, r, s, o) => {
      n.alphaOverride !== void 0 &&
        r.fromTo(n, { alphaOverride: e }, { ...s, alphaOverride: t }, o);
    },
    wg = (n, e, t, r, s, o) => {
      if (!n.visible) return;
      let i = n.type;
      i === "color" || i === "depth" || i === "outline"
        ? bg(n, e, t, r, s, o)
        : i === "transmission"
        ? Sg(n, e, t, r, s, o)
        : i === "light" && Eg(n, e, t, r, s, o);
    },
    Og = (n, e, t, r, s, o) => {
      if (!n) return;
      let i = n.material,
        a = i?.layers;
      if (a) {
        (i.transparent = !0),
          (0, Vs.hasRenderOrder)(n) &&
            (n.renderOrder = Nt.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER);
        for (let l of a) {
          let c = l.type === "light" ? l.alphaOverride ?? 1 : l.alpha ?? 1,
            u = e.from !== void 0 && (0, Vs.checkTt)(r, "from") ? e.from : c,
            f = e.to !== void 0 && (0, Vs.checkTt)(r, "to") ? e.to : c;
          wg(l, u, f, t, s, o);
        }
      }
    };
});
var rl = O(($s) => {
  "use strict";
  Object.defineProperty($s, "__esModule", { value: !0 });
  Object.defineProperty($s, "setupAnimation", {
    enumerable: !0,
    get: function () {
      return Pg;
    },
  });
  var Ag = Ha(),
    _g = Ns(),
    Rg = xt(),
    Gs = Wa(),
    Ig = Xa(),
    Us = Qa(),
    Mg = el(),
    Cg = tl(),
    Ft = be(),
    nl = tt(),
    Pg = (n, e, t, r, s, o) => {
      t.ease || (t = { ...t, ease: "none" });
      let { force3D: i, ...a } = t;
      if (((t = { ...a }), !n.spline?.findObjectById)) return;
      let l = e.spline,
        c = (e.objectId || "").split(",").filter(Boolean);
      if (c.length === 0) {
        (0, Gs.warnNoObjectId)();
        return;
      }
      let u = c.flatMap((g) => {
        let y = n.spline.findObjectById?.(g);
        return y || ((0, Gs.warnObjectNotFound)(g), []);
      });
      if (u.length === 0) {
        (0, Gs.warnNoObjectsFound)(c);
        return;
      }
      let f = u.map((g) => (0, Ag.storeOriginalState)(g, n, c[0] ?? "")),
        d = (0, Rg.getAppZoom)(n.spline);
      if (
        e.animatingState &&
        l?.stateName &&
        (l.stateName.from || l.stateName.to)
      )
        return (0, Ig.animateStateTransitions)(u, l, n, f, e, d, r, s, t, o);
      if (!l) return;
      let p = Object.keys(l);
      if (p.length === 0 || (p.length === 1 && p[0] === "stateName")) return;
      u.forEach((g) => {
        (0, Us.animateIntensity)(g, l, r, s, t, o),
          (0, Us.animateZoom)(n, l, r, s, t, o),
          (0, Us.animateColor)(g, l, r, s, t, o, n, c[0] ?? "");
        let y = l.opacity && typeof l.opacity == "object" ? l.opacity : void 0;
        if (y !== void 0) {
          let w = {
              from: y.from !== void 0 ? y.from / 100 : void 0,
              to: y.to !== void 0 ? y.to / 100 : void 0,
            },
            m =
              t.immediateRender !== !1 &&
              w.from !== void 0 &&
              (0, Ft.checkTt)(s, "from")
                ? w.from
                : void 0;
          if (((0, Cg.fadeObject)(g, w, r, s, t, o), m !== void 0)) {
            let A = g.material,
              b = Array.isArray(A) ? A : A ? [A] : [];
            for (let v of b)
              (v.transparent = !0),
                (v.depthWrite =
                  m > nl.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD);
            (0, Ft.hasRenderOrder)(g) &&
              (g.renderOrder = nl.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER);
          }
        }
        (0, Mg.createTransformTargets)(g, l).forEach(
          ({ object: w, props: m }) => {
            if (Object.keys(m).length === 0) return;
            let A = {},
              b = {};
            Object.keys(m).forEach((v) => {
              let T = m[v];
              T &&
                typeof T == "object" &&
                ((A[v] =
                  (0, Ft.checkTt)(s, "from") && T.from ? T.from : w[v] ?? 0),
                (b[v] = (0, Ft.checkTt)(s, "to") && T.to ? T.to : w[v] ?? 0));
            }),
              !(Object.keys(A).length === 0 && Object.keys(b).length === 0) &&
                r.fromTo(w, A, { ...t, ...b }, o || 0);
          }
        );
      });
      let h = u.map((g, y) => (0, _g.createCleanupFunction)(g, n, f[y], e, d));
      return () => h.forEach((g) => g?.());
    };
});
var il = O((qs) => {
  "use strict";
  Object.defineProperty(qs, "__esModule", { value: !0 });
  Object.defineProperty(qs, "buildSplineAction", {
    enumerable: !0,
    get: function () {
      return Lg;
    },
  });
  var sl = rl(),
    Lt = ke(),
    xg = new Set(["color", "stateName"]),
    kg = new Set(["rotationX", "rotationY", "rotationZ"]),
    ol = Math.PI / 180;
  function Ng(n, e) {
    if (!n.spline) return n;
    let t = n.spline,
      r = {},
      s = !1;
    for (let [o, i] of Object.entries(t)) {
      if (!i || typeof i != "object") {
        r[o] = i;
        continue;
      }
      let a = i;
      if (xg.has(o)) {
        let l = a.from !== void 0 ? (0, Lt.resolveToString)(a.from, e) : void 0,
          c = a.to !== void 0 ? (0, Lt.resolveToString)(a.to, e) : void 0;
        (l !== a.from || c !== a.to) && (s = !0), (r[o] = { from: l, to: c });
      } else {
        let l = a.from !== void 0 ? (0, Lt.resolveToNumber)(a.from, e) : void 0,
          c = a.to !== void 0 ? (0, Lt.resolveToNumber)(a.to, e) : void 0,
          u = l !== a.from,
          f = c !== a.to;
        (u || f) && (s = !0),
          kg.has(o)
            ? (r[o] = {
                from: l !== void 0 && u ? l * ol : l,
                to: c !== void 0 && f ? c * ol : c,
              })
            : (r[o] = { from: l, to: c });
      }
    }
    return s ? { ...n, spline: r } : n;
  }
  function Fg(n, e, t, r, s, o, i) {
    let a = e.getInstance(n);
    if (a) return (0, sl.setupAnimation)(a, t, r, s, o, i);
    let l,
      c = () => {
        let u = e.getInstance(n);
        u && (l = (0, sl.setupAnimation)(u, t, r, s, o, i)),
          n.removeEventListener("w-spline-load", c);
      };
    return (
      n.addEventListener("w-spline-load", c),
      () => {
        n.removeEventListener("w-spline-load", c), l?.();
      }
    );
  }
  function Lg(n) {
    n.addAction("spline", {
      createCustomTween: (e, t, r, s, o, i) => {
        let a = t.tt ?? 0;
        if (!o.length || !window.Webflow || !r.objectId) return;
        let l = window.Webflow.require?.("spline");
        if (!l) return;
        let c = [];
        for (let u of o) {
          let f = Ng(r, u),
            d = Fg(u, l, f, s, e, a, i);
          d && c.push(d);
        }
        if (c.length !== 0)
          return () => {
            for (let u of c) u?.();
          };
      },
    });
  }
});
var pl = O((Hs) => {
  "use strict";
  Object.defineProperty(Hs, "__esModule", { value: !0 });
  Object.defineProperty(Hs, "buildVariableAction", {
    enumerable: !0,
    get: function () {
      return Dg;
    },
  });
  var zs = Y();
  function Dg(n) {
    n.addAction("variable", {
      createCustomTween: (e, t, r, s, o, i) => {
        let a = r.variable;
        if (!a) return;
        let l = Object.keys(a),
          c = l.length;
        if (c === 0) return;
        let u = (t.targets?.length ?? 0) > 0;
        if (u && o.length === 0) return;
        let f = u ? Array.from(new Set(o)) : Bg(l),
          d = f.length,
          p = new Array(d),
          h = new Array(d);
        for (let b = 0; b < d; b++) {
          let v = f[b].style;
          p[b] = v;
          let T = new Array(c);
          for (let _ = 0; _ < c; _++) {
            let S = l[_];
            (T[_] = v.getPropertyValue(S)), v.removeProperty(S);
          }
          h[b] = T;
        }
        let g = t.tt ?? zs.TweenType.To,
          y = i || 0,
          { force3D: E, ...w } = s,
          m = l.some((b) => a[b].startsWith("var(")),
          A = (b) => {
            let v = {};
            for (let T = 0; T < c; T++) {
              let _ = l[T],
                S = a[_];
              v[_] = cl(
                (b &&
                  S.startsWith("var(") &&
                  b.getPropertyValue(S.slice(4, -1)).trim()) ||
                  S
              );
            }
            return v;
          };
        if (u)
          for (let b = 0; b < d; b++) {
            let v = f[b],
              T = A(m ? getComputedStyle(v) : null);
            al(e, g, v, { ...T, ...w }, y, l);
          }
        else {
          let v = {
            ...A(m ? getComputedStyle(document.documentElement) : null),
            ...w,
          };
          for (let T = 0; T < d; T++) al(e, g, f[T], v, y, l);
        }
        return () => {
          for (let b = 0; b < d; b++) {
            let v = p[b],
              T = h[b];
            for (let _ = 0; _ < c; _++) {
              let S = T[_];
              S ? v.setProperty(l[_], S) : v.removeProperty(l[_]);
            }
          }
        };
      },
    });
  }
  function Bg(n) {
    let e = [document.documentElement];
    if (n.length === 0) return e;
    let t = jg(n) ?? Gg(n);
    for (let r = 0; r < t.length; r++) e.push(t[r]);
    return e;
  }
  function cl(n) {
    return n.replace(/(^|[^\d.])\.(\d)/g, "$10.$2");
  }
  function Vg(n, e) {
    let t = getComputedStyle(n),
      r = null;
    for (let s = 0; s < e.length; s++) {
      let o = e[s],
        i = t.getPropertyValue(o).trim(),
        a = cl(i);
      a !== i && ((r ??= {})[o] = a);
    }
    return r;
  }
  function al(n, e, t, r, s, o) {
    e === zs.TweenType.From
      ? n.from(t, r, s)
      : e === zs.TweenType.Set
      ? n.set(t, r, s)
      : (n.add(() => {
          let i = Vg(t, o);
          i && window.gsap.set(t, i);
        }, s),
        n.to(t, r, s));
  }
  function jg(n) {
    let e = new Set([document.documentElement]),
      t = [],
      r = new Map();
    try {
      let s = document.styleSheets;
      for (let o = 0; o < s.length; o++) ul(s[o].cssRules, n, t, e, r);
      return t;
    } catch {
      return null;
    }
  }
  function ul(n, e, t, r, s) {
    for (let o = 0; o < n.length; o++) {
      let i = n[o];
      if (i instanceof CSSMediaRule) {
        let l = i.conditionText,
          c = s.get(l);
        c === void 0 && ((c = matchMedia(l).matches), s.set(l, c)),
          c && ul(i.cssRules, e, t, r, s);
        continue;
      }
      if (!(i instanceof CSSStyleRule)) continue;
      let a = i.style;
      for (let l = 0; l < e.length; l++)
        if (a.getPropertyValue(e[l])) {
          try {
            let c = document.querySelectorAll(i.selectorText);
            for (let u = 0; u < c.length; u++) {
              let f = c[u];
              r.has(f) || (r.add(f), t.push(f));
            }
          } catch {}
          break;
        }
    }
  }
  var fl = "__ix3__";
  function Gg(n) {
    let e = document.documentElement,
      t = document.body,
      r = [],
      s = n.length,
      o = [],
      i = [];
    dl(e, n, s, o, i), ll(t, n, s, r, o, i);
    let a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT),
      l;
    for (; (l = a.nextNode()); ) ll(l, n, s, r, o, i);
    for (let c = 0; c < o.length; c++) {
      let u = o[c].style,
        f = i[c];
      for (let d = 0; d < s; d++) {
        let p = f[d];
        p ? u.setProperty(n[d], p) : u.removeProperty(n[d]);
      }
    }
    return r;
  }
  function dl(n, e, t, r, s) {
    let o = n.style,
      i = new Array(t);
    for (let a = 0; a < t; a++) {
      let l = e[a];
      (i[a] = o.getPropertyValue(l)), o.setProperty(l, fl);
    }
    r.push(n), s.push(i);
  }
  function ll(n, e, t, r, s, o) {
    let i = getComputedStyle(n);
    for (let a = 0; a < t; a++)
      if (i.getPropertyValue(e[a]) !== fl) {
        r.push(n), dl(n, e, t, s, o);
        return;
      }
  }
});
var gl = O((Ws) => {
  "use strict";
  Object.defineProperty(Ws, "__esModule", { value: !0 });
  Object.defineProperty(Ws, "plugin", {
    enumerable: !0,
    get: function () {
      return Xg;
    },
  });
  var Ug = da(),
    $g = Oa(),
    qg = Ra(),
    hl = za(),
    zg = il(),
    Hg = pl(),
    Wg = Vr(),
    Yg = Y(),
    Kg = ne(),
    le = new Yg.RuntimeBuilder(Kg.CORE_PLUGIN_INFO);
  (0, Ug.build)(le);
  (0, $g.build)(le);
  (0, qg.buildLottieAction)(le);
  (0, hl.buildRiveAction)(le);
  (0, hl.buildAnimateRiveAction)(le);
  (0, zg.buildSplineAction)(le);
  (0, Hg.buildVariableAction)(le);
  (0, Wg.build)(le);
  var Xg = le.buildRuntime();
});
var ml = O((Ys) => {
  "use strict";
  Object.defineProperty(Ys, "__esModule", { value: !0 });
  Object.defineProperty(Ys, "plugin", {
    enumerable: !0,
    get: function () {
      return Zg.plugin;
    },
  });
  var Zg = gl();
});
var yl = Js(oi()),
  vl = Js(ml());
async function Qg() {
  try {
    let n = await yl.IX3.init({ doc: document, win: window });
    return (
      await n.registerPlugin(vl.plugin),
      { register: (e, t) => n.register(e, t), destroy: () => n.destroy() }
    );
  } catch (n) {
    throw (console.error("[Devlink IX3] Engine initialization failed:", n), n);
  }
}
var By = { createIX3Engine: Qg };
export { Qg as createIX3Engine, By as default };
