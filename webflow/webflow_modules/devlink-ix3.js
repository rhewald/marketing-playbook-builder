/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

var ll = Object.create;
var Kt = Object.defineProperty;
var ul = Object.getOwnPropertyDescriptor;
var fl = Object.getOwnPropertyNames;
var dl = Object.getPrototypeOf,
  pl = Object.prototype.hasOwnProperty;
var hl = (n, e, t) =>
  e in n
    ? Kt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var O = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var gl = (n, e, t, r) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let o of fl(e))
      !pl.call(n, o) &&
        o !== t &&
        Kt(n, o, {
          get: () => e[o],
          enumerable: !(r = ul(e, o)) || r.enumerable,
        });
  return n;
};
var ys = (n, e, t) => (
  (t = n != null ? ll(dl(n)) : {}),
  gl(
    e || !n || !n.__esModule
      ? Kt(t, "default", { value: n, enumerable: !0 })
      : t,
    n
  )
);
var at = (n, e, t) => (hl(n, typeof e != "symbol" ? e + "" : e, t), t);
var vs = O((en) => {
  "use strict";
  Object.defineProperty(en, "__esModule", { value: !0 });
  function ml(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ml(en, {
    CORE_OPERATORS: function () {
      return Qt;
    },
    DEFAULTS: function () {
      return Zt;
    },
    DEFAULT_CUSTOM_EASE: function () {
      return El;
    },
    EASE_DEFAULTS: function () {
      return Ts;
    },
    PERCENT_CANVAS_DURATION_S: function () {
      return bl;
    },
    RELATIONSHIP_TYPES: function () {
      return Jt;
    },
    STANDARD_TRIGGER_ALLOWED_CONTROLS: function () {
      return Sl;
    },
    TimelineControlType: function () {
      return Yt;
    },
    TweenType: function () {
      return Xt;
    },
    isValidControlType: function () {
      return yl;
    },
    tweenTypeFromName: function () {
      return Tl;
    },
    tweenTypeToName: function () {
      return vl;
    },
  });
  var Yt;
  (function (n) {
    (n.STANDARD = "standard"),
      (n.SCROLL = "scroll"),
      (n.LOAD = "load"),
      (n.CONTINUOUS = "continuous");
  })(Yt || (Yt = {}));
  function yl(n) {
    return (
      n === "standard" || n === "scroll" || n === "load" || n === "continuous"
    );
  }
  var Xt;
  (function (n) {
    (n[(n.To = 0)] = "To"),
      (n[(n.From = 1)] = "From"),
      (n[(n.FromTo = 2)] = "FromTo"),
      (n[(n.Set = 3)] = "Set");
  })(Xt || (Xt = {}));
  function Tl(n) {
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
  function vl(n) {
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
  var Qt;
  (function (n) {
    (n.AND = "wf:and"), (n.OR = "wf:or");
  })(Qt || (Qt = {}));
  var Zt;
  (function (n) {
    n[(n.DURATION = 0.5)] = "DURATION";
  })(Zt || (Zt = {}));
  var bl = 1,
    Jt;
  (function (n) {
    (n.NONE = "none"),
      (n.WITHIN = "within"),
      (n.DIRECT_CHILD_OF = "direct-child-of"),
      (n.CONTAINS = "contains"),
      (n.DIRECT_PARENT_OF = "direct-parent-of"),
      (n.NEXT_TO = "next-to"),
      (n.NEXT_SIBLING_OF = "next-sibling-of"),
      (n.PREV_SIBLING_OF = "prev-sibling-of");
  })(Jt || (Jt = {}));
  var Ts = {
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
    El = Ts.back,
    Sl = [
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
var bs = O((tn) => {
  "use strict";
  Object.defineProperty(tn, "__esModule", { value: !0 });
  function wl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  wl(tn, {
    claimPageLevelTriggerWin: function () {
      return _l;
    },
    getPageLevelTriggerState: function () {
      return Ol;
    },
    hasPageLevelTriggerWon: function () {
      return Al;
    },
    releasePageLevelTriggerFired: function () {
      return Rl;
    },
    resetPageLevelTriggerState: function () {
      return Il;
    },
  });
  var Re = new WeakMap();
  function Ol(n) {
    let e = Re.get(n);
    return (
      e || ((e = { fired: !1, won: !1, deadline: void 0 }), Re.set(n, e)), e
    );
  }
  function Al(n) {
    return Re.get(n)?.won === !0;
  }
  function _l(n) {
    let e = Re.get(n);
    e && (e.won = !0);
  }
  function Il(n) {
    Re.delete(n);
  }
  function Rl(n) {
    let e = Re.get(n);
    e && ((e.fired = !1), (e.won = !1));
  }
});
var Es = O((rn) => {
  "use strict";
  Object.defineProperty(rn, "__esModule", { value: !0 });
  Object.defineProperty(rn, "RuntimeBuilder", {
    enumerable: !0,
    get: function () {
      return nn;
    },
  });
  var nn = class {
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
    addRoleAppliedQuery(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "roleAppliedQuery",
          id: r,
          implementation: t,
        }),
        this
      );
    }
    addTriggerContract(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "triggerContract",
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
var Ss = O((cn) => {
  "use strict";
  Object.defineProperty(cn, "__esModule", { value: !0 });
  function Ml(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Ml(cn, {
    ConditionCategoryBuilder: function () {
      return ut;
    },
    DesignBuilder: function () {
      return an;
    },
    TargetCategoryBuilder: function () {
      return ct;
    },
    TriggerCategoryBuilder: function () {
      return lt;
    },
  });
  var on = class {
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
    sn = class {
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
          (this.currentGroupBuilder = new on(this, e)),
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
    ct = class {
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
    lt = class {
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
    ut = class {
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
    an = class {
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
        let r = new sn(e, t);
        return this.categories.set(e, r), r;
      }
      addTargetCategory(e, t) {
        let r = new ct(e, t);
        return this.targetCategories.set(e, r), r;
      }
      addTriggerCategory(e, t) {
        let r = new lt(e, t);
        return this.triggerCategories.set(e, r), r;
      }
      addConditionCategory(e, t) {
        let r = new ut(e, t);
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
        let o = [];
        for (let [, i] of this.conditionCategories) o.push(i.getDefinition());
        let s = [];
        for (let [, i] of this.actionPresets) s.push(i);
        return {
          namespace: this.baseInfo.namespace,
          pluginId: this.baseInfo.pluginId,
          version: this.baseInfo.version,
          displayName: this.baseInfo.displayName,
          description: this.baseInfo.description,
          categories: e.length > 0 ? e : void 0,
          targetCategories: t.length > 0 ? t : void 0,
          triggerCategories: r.length > 0 ? r : void 0,
          conditionCategories: o.length > 0 ? o : void 0,
          actionPresets: s.length > 0 ? s : void 0,
          reducerHooks:
            this.reducerHooks.length > 0 ? [...this.reducerHooks] : void 0,
        };
      }
    };
});
var ws = O((un) => {
  "use strict";
  Object.defineProperty(un, "__esModule", { value: !0 });
  Object.defineProperty(un, "TransformBuilder", {
    enumerable: !0,
    get: function () {
      return ln;
    },
  });
  var ln = class {
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
          function (o, s, i) {
            return t(o, s, i);
          }
        ),
        this
      );
    }
    addTriggerTransform(e, t) {
      return (
        this.triggerTransforms.set(
          this.createExtensionKey(e),
          function (o, s, i) {
            return t(o, s, i);
          }
        ),
        this
      );
    }
    addConditionTransform(e, t) {
      return (
        this.conditionTransforms.set(
          this.createExtensionKey(e),
          function (o, s, i) {
            return t(o, s, i);
          }
        ),
        this
      );
    }
    addActionTransform(e, t) {
      return (
        this.actionTransforms.set(
          this.createExtensionKey(e),
          function (o, s, i) {
            return t(o, s, i);
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
var As = O((Os) => {
  "use strict";
  Object.defineProperty(Os, "__esModule", { value: !0 });
});
var K = O((ye) => {
  "use strict";
  Object.defineProperty(ye, "__esModule", { value: !0 });
  function Cl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Cl(ye, {
    CORE_OPERATORS: function () {
      return Z.CORE_OPERATORS;
    },
    DEFAULTS: function () {
      return Z.DEFAULTS;
    },
    DEFAULT_CUSTOM_EASE: function () {
      return Z.DEFAULT_CUSTOM_EASE;
    },
    EASE_DEFAULTS: function () {
      return Z.EASE_DEFAULTS;
    },
    PERCENT_CANVAS_DURATION_S: function () {
      return Z.PERCENT_CANVAS_DURATION_S;
    },
    RELATIONSHIP_TYPES: function () {
      return Z.RELATIONSHIP_TYPES;
    },
    STANDARD_TRIGGER_ALLOWED_CONTROLS: function () {
      return Z.STANDARD_TRIGGER_ALLOWED_CONTROLS;
    },
    TimelineControlType: function () {
      return Z.TimelineControlType;
    },
    TweenType: function () {
      return Z.TweenType;
    },
    claimPageLevelTriggerWin: function () {
      return Ge.claimPageLevelTriggerWin;
    },
    getPageLevelTriggerState: function () {
      return Ge.getPageLevelTriggerState;
    },
    hasPageLevelTriggerWon: function () {
      return Ge.hasPageLevelTriggerWon;
    },
    isValidControlType: function () {
      return Z.isValidControlType;
    },
    releasePageLevelTriggerFired: function () {
      return Ge.releasePageLevelTriggerFired;
    },
    resetPageLevelTriggerState: function () {
      return Ge.resetPageLevelTriggerState;
    },
    tweenTypeFromName: function () {
      return Z.tweenTypeFromName;
    },
    tweenTypeToName: function () {
      return Z.tweenTypeToName;
    },
  });
  var Z = vs(),
    Ge = bs();
  ft(Es(), ye);
  ft(Ss(), ye);
  ft(ws(), ye);
  ft(As(), ye);
  function ft(n, e) {
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
var ne = O((fn) => {
  "use strict";
  Object.defineProperty(fn, "__esModule", { value: !0 });
  function Pl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Pl(fn, {
    DEFAULT_ROOT_FONT_SIZE_PX: function () {
      return Ll;
    },
    EASING_NAMES: function () {
      return ql;
    },
    buildCustomEaseId: function () {
      return $l;
    },
    buildEaseContextId: function () {
      return Ul;
    },
    debounce: function () {
      return jl;
    },
    defaultSplitClass: function () {
      return Bl;
    },
    hasResolvableScrollUnit: function () {
      return Dl;
    },
    isValidControlType: function () {
      return xl;
    },
    resolveScrollUnits: function () {
      return Vl;
    },
    throttle: function () {
      return Gl;
    },
    toSeconds: function () {
      return kl;
    },
  });
  var dt = K();
  function xl(n) {
    return (
      n === dt.TimelineControlType.STANDARD ||
      n === dt.TimelineControlType.SCROLL ||
      n === dt.TimelineControlType.LOAD ||
      n === dt.TimelineControlType.CONTINUOUS
    );
  }
  function kl(n) {
    return typeof n == "string" ? parseFloat(n) / 1e3 : n;
  }
  var Ll = 16,
    _s = "vh|vw|rem",
    Is = "\\d+(?:\\.\\d+)?",
    Nl = new RegExp(`${Is}(?:${_s})`),
    Fl = new RegExp(`(${Is})(${_s})`, "g");
  function Dl(n) {
    return Nl.test(n);
  }
  function Vl(n, e) {
    return n.replace(Fl, (t, r, o) =>
      String(Math.round(parseFloat(r) * e[o] * 100) / 100)
    );
  }
  function Bl(n) {
    return `gsap_split_${n}++`;
  }
  var jl = (
      n,
      e = 0,
      { leading: t = !1, trailing: r = !0, maxWait: o } = {}
    ) => {
      let s,
        i = 0,
        a,
        c,
        l = () => {
          (i = 0), (s = void 0), r && n.apply(a, c);
        };
      function u(...f) {
        (a = this), (c = f), i || ((i = performance.now()), t && n.apply(a, c));
        let d = performance.now() - i;
        if (o && d >= o) {
          clearTimeout(s), l();
          return;
        }
        clearTimeout(s), (s = setTimeout(l, e));
      }
      return (
        (u.cancel = () => {
          clearTimeout(s), (s = void 0), (i = 0);
        }),
        u
      );
    },
    Gl = (n, e = 0, { leading: t = !0, trailing: r = !0, maxWait: o } = {}) => {
      let s = 0,
        i,
        a,
        c,
        l = (f) => {
          (s = f), (i = void 0), n.apply(a, c);
        };
      function u(...f) {
        let d = performance.now();
        !s && !t && (s = d);
        let p = e - (d - s);
        (a = this),
          (c = f),
          p <= 0 || (o && d - s >= o)
            ? (i && (clearTimeout(i), (i = void 0)), l(d))
            : r && !i && (i = setTimeout(() => l(performance.now()), p));
      }
      return (
        (u.cancel = () => {
          clearTimeout(i), (i = void 0), (s = 0);
        }),
        u
      );
    };
  function Ul(n, e) {
    return `${n}-${e}`;
  }
  function $l(n, e) {
    return e ? `${n}-${e}` : n;
  }
  var ql = [
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
var Rs = O((dn) => {
  "use strict";
  Object.defineProperty(dn, "__esModule", { value: !0 });
  Object.defineProperty(dn, "EventManager", {
    enumerable: !0,
    get: function () {
      return pt;
    },
  });
  var Ue = ne(),
    Me = class {
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
        return Me.instance || (Me.instance = new Me()), Me.instance;
      }
      addEventListener(e, t, r, o) {
        try {
          let s = o?.kind === "custom",
            i = {
              ...(s ? { delegate: !1, passive: !0, batch: !1 } : zl[t] || {}),
              ...o,
              errorHandler: o?.errorHandler || this.defaultErrorHandler,
            };
          if (!s && t === "load" && "complete" in e && e.complete)
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
            c = this.registerHandler(e, t, r, a.handler, i, s, a.cleanup);
          if (s)
            return () => {
              this.removeHandler(e, t, r, !0), c.cleanup?.();
            };
          let l = new AbortController();
          return (
            i.delegate
              ? this.ensureDelegatedHandler(t)
              : (Hl(i) || e).addEventListener(t, c.wrappedHandler, {
                  passive: i.passive,
                  capture: i.capture,
                  signal: l.signal,
                }),
            () => {
              l.abort(), this.removeHandler(e, t, r, !1);
            }
          );
        } catch (s) {
          return o?.errorHandler?.(s, new Event(t)), () => {};
        }
      }
      emit(e, t, r, o) {
        try {
          let s = this.customEventTypes.get(e);
          if (!s?.size) return;
          let i = new CustomEvent(e, {
            detail: t,
            bubbles: o?.bubbles ?? !0,
            cancelable: !0,
          });
          for (let a of s)
            if (!r || r === a.element || a.element.contains(r))
              try {
                a.wrappedHandler(i);
              } catch (c) {
                console.error(`[EventManager] Error emitting ${e}:`, c);
              }
        } catch (s) {
          console.error(`[EventManager] Error emitting custom event ${e}:`, s);
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
        let o = (s) => {
          try {
            let i =
              t.target === "window"
                ? window
                : t.target === "document"
                ? document
                : r;
            e(s, i);
          } catch (i) {
            (t.errorHandler || this.defaultErrorHandler)(i, s);
          }
        };
        if (t.batch) {
          let s = (i) => {
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
            let i = (0, Ue.throttle)(o, t.throttleMs);
            return { handler: s, cleanup: i.cancel };
          }
          if (t.debounceMs && t.debounceMs > 0) {
            let i = (0, Ue.debounce)(o, t.debounceMs);
            return { handler: s, cleanup: i.cancel };
          }
          return { handler: s };
        }
        if (t.throttleMs && t.throttleMs > 0) {
          let s = (0, Ue.throttle)(o, t.throttleMs);
          if (t.debounceMs && t.debounceMs > 0) {
            let i = (0, Ue.debounce)(s, t.debounceMs);
            return {
              handler: i,
              cleanup: () => {
                i.cancel?.(), s.cancel?.();
              },
            };
          }
          return { handler: s, cleanup: s.cancel };
        }
        if (t.debounceMs && t.debounceMs > 0) {
          let s = (0, Ue.debounce)(o, t.debounceMs);
          return { handler: s, cleanup: s.cancel };
        }
        return { handler: o };
      }
      processBatchedEvents() {
        if (this.batchFrameId === null) return;
        this.batchFrameId = null;
        let e = performance.now();
        for (let [t, r] of this.batchedEvents) {
          let o = this.eventTypeHandlers.get(t);
          if (!o?.size) continue;
          let s = r.filter((a) => e - a.timestamp < this.defaultMaxBatchAge);
          if (!s.length) continue;
          s.sort((a, c) => a.timestamp - c.timestamp);
          let i =
            s.length <= this.defaultMaxBatchSize
              ? s
              : s.slice(-this.defaultMaxBatchSize);
          for (let { event: a, target: c } of i) {
            let l = a;
            (l.batchTimestamp = e), (l.batchSize = i.length);
            for (let u of o)
              try {
                (u.config.delegate ||
                  u.config.target === "window" ||
                  u.config.target === "document" ||
                  c === a.target ||
                  c.contains(a.target)) &&
                  u.wrappedHandler(l);
              } catch (f) {
                (u.config.errorHandler || this.defaultErrorHandler)(f, l);
              }
          }
        }
        this.batchedEvents.clear();
      }
      ensureDelegatedHandler(e) {
        if (this.delegatedHandlers.has(e)) return;
        let t = new AbortController(),
          r = (s) => {
            let i = this.eventTypeHandlers.get(e);
            if (!i?.size) return;
            let a = s.composedPath
              ? s.composedPath()
              : s.target
              ? [s.target]
              : [];
            for (let c of a)
              if (c instanceof Element) {
                for (let l of i) {
                  if (!l.config.delegate) continue;
                  if (l.element === c || l.element.contains(c))
                    try {
                      l.wrappedHandler(s);
                    } catch (f) {
                      console.error(`[EventDelegator] Error for ${e}:`, f);
                    }
                }
                if (!s.bubbles) break;
              }
          },
          o = [
            "focus",
            "blur",
            "focusin",
            "focusout",
            "mouseenter",
            "mouseleave",
          ].includes(e);
        document.addEventListener(e, r, {
          passive: !1,
          capture: o,
          signal: t.signal,
        }),
          this.delegatedHandlers.set(e, { handler: r, controller: t });
      }
      registerHandler(e, t, r, o, s, i, a) {
        let c = {
          element: e,
          originalHandler: r,
          wrappedHandler: o,
          config: s,
          cleanup: a,
        };
        if (i) {
          let l = this.customEventTypes.get(t) || new Set();
          l.add(c), this.customEventTypes.set(t, l);
        } else {
          let l = this.elementHandlers.get(e) || new Set();
          l.add(c), this.elementHandlers.set(e, l);
          let u = this.eventTypeHandlers.get(t) || new Set();
          u.add(c), this.eventTypeHandlers.set(t, u);
        }
        return c;
      }
      removeHandler(e, t, r, o) {
        if (o) {
          let s = this.customEventTypes.get(t);
          if (!s?.size) return;
          for (let i of s)
            if (i.element === e && i.originalHandler === r) {
              s.delete(i),
                s.size || this.customEventTypes.delete(t),
                i.cleanup?.();
              break;
            }
        } else {
          let s = this.eventTypeHandlers.get(t);
          if (!s?.size) return;
          let i = this.elementHandlers.get(e);
          if (!i?.size) return;
          let a;
          for (let c of i)
            if (c.originalHandler === r) {
              a = c;
              break;
            }
          if (a) {
            if ((i.delete(a), s.delete(a), !s.size)) {
              this.eventTypeHandlers.delete(t);
              let c = this.delegatedHandlers.get(t);
              c && (c.controller.abort(), this.delegatedHandlers.delete(t));
            }
            a.cleanup?.();
          }
        }
      }
    },
    pt = Me;
  at(pt, "instance");
  function Hl(n) {
    return n.target === "window"
      ? window
      : n.target === "document"
      ? document
      : null;
  }
  var zl = {
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
var Ms = O((hn) => {
  "use strict";
  Object.defineProperty(hn, "__esModule", { value: !0 });
  Object.defineProperty(hn, "PluginRuntimeBridge", {
    enumerable: !0,
    get: function () {
      return pn;
    },
  });
  var pn = class {
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
        } catch (o) {
          console.error(
            "IX3: interval handler threw. Continuing with the remaining handlers. Investigate the plugin to prevent silent data drift.",
            { pluginKey: t },
            o
          );
        }
    }
    publish(e, t, r) {
      let o = this.channelSubscribers.get(e);
      if (o) {
        for (let s of o.values())
          for (let i of s.slice())
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
    subscribe(e, t, r, o) {
      let s = this.channelSubscribers.get(t);
      s || ((s = new Map()), this.channelSubscribers.set(t, s));
      let i = s.get(e) ?? [],
        a = { element: r, cb: o };
      return (
        i.push(a),
        s.set(e, i),
        () => {
          let c = this.channelSubscribers.get(t)?.get(e);
          if (!c) return;
          let l = c.indexOf(a);
          l !== -1 && c.splice(l, 1),
            c.length === 0 &&
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
var Cs = O((mn) => {
  "use strict";
  Object.defineProperty(mn, "__esModule", { value: !0 });
  Object.defineProperty(mn, "RuntimeMotionDriver", {
    enumerable: !0,
    get: function () {
      return gn;
    },
  });
  var gn = class {
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
        o = 0,
        s = !0,
        i = () => {
          s && (e(), s && (o = r.requestAnimationFrame(i)));
        };
      return (
        (o = r.requestAnimationFrame(i)),
        () => {
          (s = !1), r.cancelAnimationFrame(o);
        }
      );
    }
    createObserver(...e) {
      return this.env.win.Observer?.create(...e) ?? null;
    }
  };
});
var gt = O((yn) => {
  "use strict";
  Object.defineProperty(yn, "__esModule", { value: !0 });
  function Wl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Wl(yn, {
    getContractContainerSelector: function () {
      return Xl;
    },
    getTriggerContract: function () {
      return Yl;
    },
    registerTriggerContract: function () {
      return Kl;
    },
    resetTriggerContracts: function () {
      return Ql;
    },
  });
  var ht = new Map();
  function Kl(n, e) {
    ht.set(n, e);
  }
  function Yl(n) {
    return ht.get(n);
  }
  function Xl() {
    let n = "";
    return (
      ht.forEach(({ container: e }) => {
        e && (n += (n ? "," : "") + e);
      }),
      n
    );
  }
  function Ql() {
    ht.clear();
  }
});
var Sn = O((En) => {
  "use strict";
  Object.defineProperty(En, "__esModule", { value: !0 });
  function Zl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Zl(En, {
    analyzeSharedTimelineGroups: function () {
      return eu;
    },
    triggerEmitsCallbackRole: function () {
      return Eu;
    },
    triggerRoutesByCallbackRole: function () {
      return $e;
    },
  });
  var Tn = K(),
    vn = gt(),
    Jl = 10;
  function eu(n, e, t, r, o, s) {
    let i = n.timelineIds ?? [];
    if (i.length < 2) return [];
    let a = !0,
      c = !1,
      l = 0,
      u = 0;
    for (let v of n.triggers) {
      let [T, E, _] = v;
      if (E?.controlType === Tn.TimelineControlType.CONTINUOUS) return [];
      if (
        (E?.controlType !== void 0 &&
          E.controlType !== Tn.TimelineControlType.STANDARD &&
          (a = !1),
        gu(T, E) && (c = !0),
        hu(T, E))
      )
        return [];
      if ($e(T, E)) {
        let A = _ ? new Set(t(_, { trigger: v }, n)).size : 0;
        (u += A), A > 0 && l++;
      }
    }
    let f =
        a &&
        n.triggers.some(
          ([v]) => (0, vn.getTriggerContract)(v)?.ownsRoleSet === !0
        )
          ? tu(
              i,
              e,
              r,
              (v) => t(v, {}, n),
              o ? (v) => o(v, n) : void 0,
              u > 1,
              s
            )
          : void 0,
      d = f ? [f] : [],
      p = new Set(f?.members);
    if (
      i.some((v) => {
        let T = e.get(v),
          E = T?.settings?.control;
        return T?.triggerMetadata?.role != null && E != null && du.has(E);
      })
    )
      return [];
    if (c) return d;
    if (l > 1) return [];
    let h = u > 1;
    if (Su(n.triggers, t, n)) return d;
    let g = [],
      y = new Map();
    for (let v of i) {
      if (p.has(v)) continue;
      let T = e.get(v);
      if (!T || T.reuse || !T.actions?.length || Ou(T, r)) continue;
      if (o?.(T, n)) {
        let _ = T.triggerMetadata?.role ? su(T, s) : void 0;
        if (_ !== void 0) {
          let A = y.get(_);
          A ? A.push(v) : y.set(_, [v]);
        }
        continue;
      }
      if (h) continue;
      let E = new Set();
      for (let _ of T.actions)
        if (_.targets)
          for (let A of _.targets) for (let R of t(A, {}, n)) E.add(R);
      g.push({ id: v, targets: E });
    }
    let S = [],
      b = (v) => {
        let T = v;
        for (let E = 0; E <= Jl; E++) {
          let _ = e.get(T)?.reuse?.sourceTimelineId;
          if (!_) return T;
          T = _;
        }
        return T;
      },
      m = (v, T) => {
        let E = new Set(v),
          _ = new Set(),
          A = new Set(),
          R = (I) => {
            let k = I?.groupId;
            if (k != null) {
              if (_.has(k)) return !1;
              _.add(k);
            }
            let F = I?.triggerMetadata?.role;
            if (F != null) {
              if (A.has(F)) return !1;
              A.add(F);
            }
            return !0;
          };
        for (let I of v) if (!R(e.get(I))) return;
        for (let I of i) {
          if (E.has(I)) continue;
          let k = e.get(I);
          if (k?.reuse && E.has(b(I)) && !R(k)) return;
        }
        if (xs(v, e, (I) => t(I, {}, n), T)) return;
        let M = new Map(v.map((I) => [I, au(e.get(I), r, T)])),
          C = new Map();
        for (let I of i) for (let [k, F] of M.get(I) ?? []) C.set(k, F);
        if (C.size > 0) {
          let I = v.find((F) => {
            let H = M.get(F);
            if (H.size !== C.size) return !1;
            for (let [Q, V] of H) if (C.get(Q) !== V) return !1;
            return !0;
          });
          if (!I) return;
          let k = v.indexOf(I);
          if (k > 0) {
            let [F] = v.splice(k, 1);
            v.unshift(F);
          }
        }
        S.push({ primary: v[0], members: v });
      },
      w = new Set();
    for (let v = 0; v < g.length; v++) {
      if (w.has(v)) continue;
      let T = [g[v].id],
        E = new Set(g[v].targets);
      w.add(v);
      let _ = !0;
      for (; _; ) {
        _ = !1;
        for (let A = v + 1; A < g.length; A++)
          if (!w.has(A) && Ns(E, g[A].targets)) {
            T.push(g[A].id);
            for (let R of g[A].targets) E.add(R);
            w.add(A), (_ = !0);
          }
      }
      T.length >= 2 && m(T);
    }
    for (let [v, T] of y) T.length >= 2 && m(T, v);
    return [...d, ...S];
  }
  function tu(n, e, t, r, o, s = !1, i) {
    let a = [],
      c = new Set();
    for (let u of n) {
      let f = e.get(u),
        d = f?.triggerMetadata?.role;
      if (d) {
        if (c.has(d)) return;
        c.add(d), !f?.reuse && a.push(u);
      }
    }
    if (a.length < 2 || xs(a, e, r, void 0, i)) return;
    let l = nu(a, e, t, o);
    if (s) {
      let u = e.get(l.primary);
      if (!u || o?.(u) !== !0) return;
    }
    return l;
  }
  function nu(n, e, t, r) {
    let o = (a) => ru(e.get(a), t),
      s = (a) => {
        let c = e.get(a);
        return c != null && r?.(c) === !0;
      },
      i = r ? n.findIndex((a) => s(a) && o(a)) : -1;
    if (
      (i < 0 && r && (i = n.findIndex(s)), i < 0 && (i = n.findIndex(o)), i > 0)
    ) {
      let [a] = n.splice(i, 1);
      n.unshift(a);
    }
    return { primary: n[0], members: n };
  }
  function ru(n, e) {
    if (!n?.actions) return !1;
    let t = new Map();
    for (let r of n.actions) {
      if (!r) continue;
      let o = r.tt ?? 0,
        s = r.splitText
          ? typeof r.splitText == "string"
            ? r.splitText
            : r.splitText.type
          : "none",
        i =
          s === "none"
            ? JSON.stringify(r.targets)
            : `${JSON.stringify(r.targets)}_split_${s}`,
        a = t.get(i) ?? new Set();
      t.set(i, a);
      let c = !1;
      for (let l of Object.values(r.properties ?? {}))
        for (let u of Object.keys(l || {})) a.has(u) ? (c = !0) : a.add(u);
      if ((o === 1 || o === 2) && !c && ou(r, e)) return !0;
    }
    return !1;
  }
  function ou(n, e) {
    for (let t in n.properties) {
      let r = e(t),
        o = n.properties[t];
      if (!(!r?.createTweenConfig || !o))
        try {
          let s = r.createTweenConfig(o);
          if (Object.keys(s.from ?? {}).length > 0) return !0;
        } catch {}
    }
    return !1;
  }
  function su(n, e) {
    if (!e || !n.actions?.length) return;
    let t;
    for (let r of n.actions) {
      if (!r.targets?.length) return;
      for (let o of r.targets) {
        let s = e(o);
        if (s === void 0) return;
        if (t === void 0) t = s;
        else if (t !== s) return;
      }
    }
    return t;
  }
  function xs(n, e, t, r, o) {
    let s = new Map();
    for (let i of n)
      for (let [a, c] of iu(e.get(i), t, r, o)) {
        let l = s.get(a);
        if (l !== void 0 && l !== c) return !0;
        s.set(a, c);
      }
    return !1;
  }
  function iu(n, e, t, r) {
    let o = [];
    for (let s of n?.actions ?? []) {
      if (!s?.splitText) continue;
      let i = typeof s.splitText == "string" ? void 0 : s.splitText.mask,
        a = i ? `mask_${i}` : "none";
      if (t !== void 0) {
        o.push([t, a]);
        continue;
      }
      for (let c of s.targets ?? []) {
        let l = e(c);
        if (l.length === 0) o.push([r?.(c) ?? JSON.stringify(c), a]);
        else for (let u of l) o.push([u, a]);
      }
    }
    return o;
  }
  function au(n, e, t) {
    let r = new Map();
    if (!n?.actions) return r;
    let o = new Map();
    for (let s of n.actions) {
      if (!s) continue;
      let i = s.tt ?? 0,
        a = s.splitText
          ? typeof s.splitText == "string"
            ? s.splitText
            : s.splitText.type
          : "none",
        c = a === "none" ? "" : `_split_${a}`,
        l = JSON.stringify(s.targets) + c,
        u =
          s.splitText && typeof s.splitText != "string"
            ? s.splitText.mask
            : void 0,
        f = u ? `_mask_${u}` : "",
        d = o.get(l) ?? new Set();
      o.set(l, d);
      let p = !1;
      for (let h of Object.values(s.properties ?? {}))
        for (let g of Object.keys(h || {})) d.has(g) ? (p = !0) : d.add(g);
      if ((i === 1 || i === 2) && !p) {
        let h = (t === void 0 ? l : t + c) + f;
        for (let [g, y] of cu(s, e)) r.set(`${h} ${g}`, y);
      }
    }
    return r;
  }
  function cu(n, e) {
    let t = [];
    for (let r in n.properties) {
      let o = e(r),
        s = n.properties[r];
      if (!(!o?.createTweenConfig || !s))
        try {
          let i = o.createTweenConfig(s);
          for (let [a, c] of Object.entries(i.from ?? {}))
            t.push([a, uu(c, s)]);
        } catch {}
    }
    return t;
  }
  var lu = 0;
  function uu(n, e) {
    if (typeof n == "number" && Number.isNaN(n))
      return `NaN(${JSON.stringify(e) ?? ""})`;
    if (typeof n == "function") {
      let { legacyExpression: t } = n;
      return typeof t == "string" ? `fn(${t})` : `fn#${lu++}`;
    }
    return JSON.stringify(n) ?? "undefined";
  }
  var fu = new Set(["resume", "reverse", "reverseFlipEase", "pause", "stop"]),
    du = new Set(["resume", "pause", "stop"]),
    pu = new Set(["togglePlayReverse", "togglePlayReverseFlipEase"]);
  function hu(n, e) {
    if (!e) return !1;
    let t = $e(n, e),
      r = (i) => !!(i && (fu.has(i) || (!t && pu.has(i))));
    if (r(e.control)) return !0;
    let { ifTrue: o, ifFalse: s } = e.conditionalLogic ?? {};
    return r(o?.control) || r(s?.control);
  }
  function gu(n, e) {
    return !e ||
      (e.controlType !== void 0 &&
        e.controlType !== Tn.TimelineControlType.STANDARD)
      ? !0
      : !(
          (e.assignedGroupId !== void 0 && e.assignedGroupId !== "") ||
          e.assignedTimelineRole ||
          $e(n, e)
        );
  }
  function mu(n, e) {
    return (
      n === bn && typeof e == "object" && e !== null && e.multiTimeline === !0
    );
  }
  var bn = "wf:hover",
    yu = new Set(["wf:navbar", "wf:dropdown"]),
    Ps = new Set(["wf:focus", "wf:blur"]),
    Tu = new Map([
      [bn, new Set(["mouseEnter", "mouseLeave"])],
      ["wf:navbar", new Set(["open", "close"])],
      ["wf:dropdown", new Set(["open", "close"])],
    ]);
  function ks(n) {
    return yu.has(n) || (0, vn.getTriggerContract)(n)?.emitsRolesAlways === !0;
  }
  function $e(n, e) {
    return ks(n) || mu(n, e?.pluginConfig);
  }
  function vu(n) {
    return typeof n?.assignedGroupId == "string" && n.assignedGroupId !== ""
      ? n.assignedGroupId
      : void 0;
  }
  function bu(n) {
    let e = vu(n);
    return e !== void 0
      ? `group:${e}`
      : n?.assignedTimelineRole
      ? `role:${n.assignedTimelineRole}`
      : void 0;
  }
  function Ls(n, e) {
    if (n !== bn) return;
    let t = e?.pluginConfig;
    if (typeof t == "object" && t !== null) {
      let r = t.eventMode;
      return r === "enter" || r === "leave" ? r : void 0;
    }
  }
  function Eu(n, e, t) {
    let r = (0, vn.getTriggerContract)(n),
      o = Tu.get(n);
    if (o ? !o.has(t) : r && !r.roles.includes(t)) return !1;
    if (ks(n)) {
      let i = e?.pluginConfig,
        a = typeof i == "object" && i !== null ? i.event : void 0;
      return a === "open" || a === "close" || r?.roles.includes(a)
        ? t === a
        : !0;
    }
    let s = Ls(n, e);
    return s === "enter"
      ? t !== "mouseLeave"
      : s === "leave"
      ? t !== "mouseEnter"
      : !0;
  }
  function Su(n, e, t) {
    let r = [];
    for (let o of n) {
      let [s, i, a] = o,
        c = $e(s, i) ? `callback:${r.length}` : bu(i);
      c !== void 0 &&
        r.push({
          route: c,
          key: s,
          eventMode: Ls(s, i),
          reactive: i.conditionalLogic != null,
          elements: a ? new Set(e(a, { trigger: o }, t)) : new Set(),
        });
    }
    for (let o = 0; o < r.length; o++)
      for (let s = o + 1; s < r.length; s++) {
        if (r[o].route === r[s].route) continue;
        let i = r[o].eventMode,
          a = r[s].eventMode,
          c = Ns(r[o].elements, r[s].elements),
          l = i !== void 0 && a !== void 0,
          u = r[o].reactive || r[s].reactive,
          f = r[o].reactive && r[s].reactive,
          d = r[o].key !== r[s].key && Ps.has(r[o].key) && Ps.has(r[s].key);
        if (c) {
          if (!(l && i !== a && !u)) return !0;
        } else if (l || d || f || wu(r[o].elements, r[s].elements)) return !0;
      }
    return !1;
  }
  function Ns(n, e) {
    let [t, r] = n.size <= e.size ? [n, e] : [e, n];
    for (let o of t) if (r.has(o)) return !0;
    return !1;
  }
  function wu(n, e) {
    for (let t of n)
      for (let r of e)
        if (t !== r && (t.contains(r) || r.contains(t))) return !0;
    return !1;
  }
  function Ou(n, e) {
    for (let t of n.actions ?? [])
      for (let r in t.properties) if (e(r)?.createCustomTween) return !0;
    return !1;
  }
});
var Bs = O((wn) => {
  "use strict";
  Object.defineProperty(wn, "__esModule", { value: !0 });
  function Au(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Au(wn, {
    MAX_ALIAS_DEPTH: function () {
      return Ds;
    },
    resolveSourceTimelineId: function () {
      return Vs;
    },
    shouldFlipEaseForTimeline: function () {
      return _u;
    },
  });
  var Fs = Sn(),
    Ds = 10;
  function Vs(n, e) {
    let t = e;
    for (let r = 0; r <= Ds; r++) {
      let s = n.get(t)?.reuse?.sourceTimelineId;
      if (!s) return t;
      t = s;
    }
    return (
      console.warn(
        `IX3: Timeline reuse chain exceeded max depth for "${e}". Possible circular reference.`
      ),
      t
    );
  }
  function _u(n, e, t, r) {
    let {
        getInteractionsForTimelines: o,
        getReuseAliasesForSource: s,
        timelineGroupsEnabled: i,
      } = r,
      a = Vs(n, t),
      c = new Set([a, ...s(a)]),
      l = !1,
      u = (d) => {
        if (d === "reverseFlipEase" || d === "togglePlayReverseFlipEase")
          l = !0;
        else if (d === "reverse" || d === "togglePlayReverse") return !0;
        return !1;
      },
      f = new Map();
    if (i) for (let d of o(c)) f.set(d.id, d);
    else
      for (let d of c) {
        let p = e(d);
        p && f.set(p.id, p);
      }
    for (let d of f.values()) {
      let p = d.timelineIds ?? [];
      for (let [h, g] of d.triggers) {
        let y = g?.assignedGroupId,
          S = (0, Fs.triggerRoutesByCallbackRole)(h, g);
        if (y === null && !S) continue;
        let b = g?.assignedTimelineRole,
          m =
            b != null
              ? p.filter((E) => n.get(E)?.triggerMetadata?.role === b)
              : null,
          w;
        if (S)
          w = p.filter((E) => {
            let _ = n.get(E)?.triggerMetadata?.role;
            return _ != null && (0, Fs.triggerEmitsCallbackRole)(h, g, _);
          });
        else if (y != null) {
          let E = p.filter((_) => n.get(_)?.groupId === y);
          if (E.length === 0) continue;
          w = E;
        } else w = m;
        let v = (E) =>
            (E != null ? [E] : p).filter(
              (A) => (w == null || w.includes(A)) && c.has(A)
            ),
          T = g?.conditionalLogic;
        if (T) {
          for (let E of [T.ifTrue, T.ifFalse])
            if (E && v(E.targetTimelineId ?? void 0).length > 0 && u(E.control))
              return !1;
        } else
          for (let E of v()) {
            let _ = n.get(E),
              A = (i ? _?.triggerMetadata?.role != null : _?.triggerMetadata)
                ? _?.settings?.control
                : g?.control;
            if (u(A)) return !1;
          }
      }
    }
    return l;
  }
});
var In = O((_n) => {
  "use strict";
  Object.defineProperty(_n, "__esModule", { value: !0 });
  function Iu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Iu(_n, {
    SplitTextManager: function () {
      return An;
    },
    getSplitTextType: function () {
      return js;
    },
  });
  var On = ne(),
    Ru = gt(),
    An = class {
      collectTargets;
      onAutoSplit;
      onSplitExtended;
      onSplitReused;
      globalSplitRegistry;
      constructor(e, t, r, o) {
        (this.collectTargets = e),
          (this.onAutoSplit = t),
          (this.onSplitExtended = r),
          (this.onSplitReused = o),
          (this.globalSplitRegistry = new Map());
      }
      splitForActions(e, t, r, o, s, i) {
        let a = this.analyzeSplitRequirements(e, t, r, i);
        for (let [c, { types: l, masks: u }] of a)
          this.doSplitText({ type: Mu(l), mask: Cu(u) }, [c], o, s);
      }
      analyzeSplitRequirements(e, t, r, o) {
        let s = new Map();
        for (let i of e) {
          let a = js(i);
          if (a === "none") continue;
          let c = typeof i.splitText == "object" ? i.splitText.mask : void 0;
          for (let l of this.collectTargets(i, t, r, o)) {
            if (l === document.body) continue;
            let u = s.get(l) || { types: new Set(), masks: new Set() };
            s.set(l, u), u.types.add(a), c && u.masks.add(c);
          }
        }
        return s;
      }
      doSplitText(e, t, r, o) {
        try {
          let s = mt(e.type);
          for (let i of t) {
            let a = this.globalSplitRegistry.get(i);
            if (a) {
              let p = new Set(mt(a.splitTextConfig.type));
              if (s.every((g) => p.has(g))) {
                (a.owner = r),
                  p.has("lines") &&
                    (this.onSplitReused(r), (r.timeline.data.splitLines = !0));
                continue;
              }
              a.splitInstance.revert(),
                this.globalSplitRegistry.delete(i),
                (e = {
                  type: [...new Set([...p, ...s])].join(", "),
                  mask: e.mask || a.splitTextConfig.mask,
                });
            }
            let c = {
                splitInstance: void 0,
                splitTextConfig: e,
                owner: r,
                lineSplit: void 0,
              },
              l = { type: e.type, tag: "span" },
              u = mt(e.type),
              { mask: f } = e;
            if (u.includes("lines")) {
              (r.timeline.data.splitLines = !0),
                (l.linesClass = (0, On.defaultSplitClass)("line")),
                (l.autoSplit = !0);
              let p = { vars: l, width: 0 },
                h = (0, Ru.getContractContainerSelector)();
              h && i.closest(h) && (c.lineSplit = p),
                (l.onSplit = (g) => {
                  (p.width = i.offsetWidth),
                    this.applySplitElementStyles(g, f),
                    this.onAutoSplit(c.owner, i);
                });
            }
            u.includes("words") &&
              (l.wordsClass = (0, On.defaultSplitClass)("word")),
              u.includes("chars") &&
                (l.charsClass = (0, On.defaultSplitClass)("letter")),
              f && (l.mask = f);
            let d = new o([i], l);
            this.applySplitElementStyles(d, f),
              (c.splitInstance = d),
              this.globalSplitRegistry.set(i, c),
              a && this.onSplitExtended(i);
          }
        } catch (s) {
          console.error("Error splitting text:", s);
        }
      }
      applySplitElementStyles(e, t) {
        let r = [
          [e.lines, "block"],
          [e.words, "inline-block"],
          [e.chars, "inline-block"],
        ];
        t && r.push([e.masks, t === "lines" ? "block" : "inline-block"]);
        for (let [o, s] of r)
          for (let i of o) {
            let { style: a } = i;
            (a.position = "relative"), (a.display = s);
          }
      }
      getSplitElements(e, t) {
        let r = [];
        for (let o of e) {
          let s = this.globalSplitRegistry.get(o);
          if (s && mt(s.splitTextConfig.type).includes(t)) {
            let a = s.splitInstance[t];
            a?.length && r.push(...a);
          }
        }
        return r.length > 0 ? r : e;
      }
      refreshLineSplits(e) {
        for (let [t, { splitInstance: r, lineSplit: o }] of this
          .globalSplitRegistry) {
          if (!o || !e.has(t)) continue;
          let s = t.offsetWidth;
          s && s !== o.width && r.split(o.vars);
        }
      }
      revertAll() {
        for (let [, e] of this.globalSplitRegistry) e.splitInstance.revert();
        this.globalSplitRegistry.clear();
      }
    };
  function Mu(n) {
    return (
      n.has("chars") && !n.has("words") && (n = new Set([...n, "words"])),
      ["lines", "words", "chars"].filter((r) => n.has(r)).join(", ")
    );
  }
  function Cu(n) {
    if (n.size !== 0) {
      if (n.has("lines")) return "lines";
      if (n.has("words")) return "words";
      if (n.has("chars")) return "chars";
    }
  }
  function js(n) {
    return n.splitText
      ? typeof n.splitText == "string"
        ? n.splitText
        : n.splitText.type
      : "none";
  }
  function mt(n) {
    return n.split(", ");
  }
});
var Mn = O((Rn) => {
  "use strict";
  Object.defineProperty(Rn, "__esModule", { value: !0 });
  function Pu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Pu(Rn, {
    convertEaseConfigToGSAP: function () {
      return Us;
    },
    convertEaseConfigToLinear: function () {
      return ku;
    },
    isAdvancedEase: function () {
      return Lu;
    },
    isBasicEase: function () {
      return Nu;
    },
  });
  var qe = ne();
  function Gs() {
    return {
      gsap: window.gsap,
      CustomEase: window.CustomEase,
      CustomWiggle: window.CustomWiggle,
      CustomBounce: window.CustomBounce,
    };
  }
  function Us(n, e = Gs(), t) {
    return n == null
      ? "none"
      : typeof n == "number"
      ? qe.EASING_NAMES[n] || "none"
      : xu(n, e, t);
  }
  function xu(n, e, t) {
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
          points: o,
          strength: s,
          taper: i,
          randomizePoints: a,
          clampPoints: c,
        } = n;
        return `rough({ template: ${r}, strength: ${s}, points: ${o}, taper: ${i}, randomize: ${a}, clamp: ${c} })`;
      }
      case "slowMo":
        return `slow(${n.linearRatio}, ${n.power}, ${n.yoyoMode})`;
      case "expoScale":
        return `expoScale(${n.startingScale}, ${n.endingScale}, ${n.templateCurve})`;
      case "customWiggle": {
        let { CustomWiggle: r } = e;
        return r
          ? r.create((0, qe.buildCustomEaseId)("customIX3Wiggle", t), {
              wiggles: n.wiggles,
              type: n.wiggleType,
            })
          : null;
      }
      case "customBounce": {
        let { CustomBounce: r } = e;
        return r
          ? r.create((0, qe.buildCustomEaseId)("customIX3Bounce", t), {
              strength: n.strength,
              endAtStart: n.endAtStart,
              squash: n.squash,
              squashID: (0, qe.buildCustomEaseId)("customIX3Squash", t),
            })
          : null;
      }
      case "customEase": {
        let { CustomEase: r } = e;
        return r
          ? r.create(
              (0, qe.buildCustomEaseId)("customIX3Ease", t),
              n.bezierCurve
            )
          : null;
      }
      default:
        return "none";
    }
  }
  function ku(n, e = Gs(), t = 20) {
    if (n == null) return "linear";
    let r = Us(n, e);
    if (r === null) return "linear";
    if (typeof n == "object" && n.type === "steps")
      return `steps(${n.stepCount})`;
    let { gsap: o } = e;
    if (!o) return "linear";
    let s = o.parseEase(r);
    if (typeof s != "function") return "linear";
    let i = [];
    for (let a = 0; a <= t; a++) {
      let c = a / t,
        l = s(c);
      i.push({ t: Number(c.toFixed(4)), value: Number(l.toFixed(4)) });
    }
    return (
      "linear(" +
      i.map((a) => `${a.value} ${Math.round(a.t * 100)}%`).join(", ") +
      ")"
    );
  }
  function Lu(n) {
    return typeof n == "object" && n !== null;
  }
  function Nu(n) {
    return typeof n == "number";
  }
});
var xn = O((Pn) => {
  "use strict";
  Object.defineProperty(Pn, "__esModule", { value: !0 });
  function Fu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Fu(Pn, {
    applyEase: function () {
      return Cn;
    },
    configHasVolatileValue: function () {
      return Vu;
    },
    convertToGsapDefaults: function () {
      return Bu;
    },
    getStaggerConfig: function () {
      return qs;
    },
    isVolatileGsapValue: function () {
      return $s;
    },
  });
  var Te = ne(),
    Du = Mn();
  function $s(n) {
    return (
      typeof n == "function" ||
      (typeof n == "string" &&
        (n.startsWith("+=") || n.startsWith("-=") || n.startsWith("random(")))
    );
  }
  function Vu(n) {
    for (let e of [n.to, n.from])
      if (e) {
        for (let t in e) if ($s(e[t])) return !0;
      }
    return !1;
  }
  function Cn(n, e, t) {
    let r = (0, Du.convertEaseConfigToGSAP)(e, void 0, t);
    r != null && (n.ease = r);
  }
  var qs = (n, e) => {
    if (!n) return;
    let { ease: t, amount: r, from: o, grid: s, axis: i, each: a } = n,
      c = {};
    return (
      r != null && (c.amount = (0, Te.toSeconds)(r)),
      a != null && (c.each = (0, Te.toSeconds)(a)),
      o != null && (c.from = o),
      s != null && (c.grid = s),
      i != null && (c.axis = i),
      t != null && Cn(c, t, e),
      c
    );
  };
  function Bu(n, e) {
    let t = {},
      r = e ? (0, Te.buildEaseContextId)(e, "defaults") : void 0,
      o = e ? (0, Te.buildEaseContextId)(e, "defaults-stagger") : void 0;
    if (
      (n.duration != null && (t.duration = (0, Te.toSeconds)(n.duration)),
      n.ease != null && Cn(t, n.ease, r),
      n.delay != null &&
        (t.delay =
          typeof n.delay == "number" ? n.delay : (0, Te.toSeconds)(n.delay)),
      n.repeat != null && (t.repeat = n.repeat),
      n.repeatDelay != null &&
        (t.repeatDelay = (0, Te.toSeconds)(n.repeatDelay)),
      n.stagger != null)
    ) {
      let s = qs(n.stagger, o);
      s && (t.stagger = s);
    }
    return n.yoyo != null && (t.yoyo = n.yoyo), t;
  }
});
var Xs = O((Ln) => {
  "use strict";
  Object.defineProperty(Ln, "__esModule", { value: !0 });
  Object.defineProperty(Ln, "ScrollMarkerFocusManager", {
    enumerable: !0,
    get: function () {
      return kn;
    },
  });
  var ju =
      ".gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end",
    Ks = "wf-ix3-marker-focus",
    Ys = "wf-ix3-marker-owned",
    Hs = "wf-ix3-marker-focus-style",
    zs = "marker-",
    Gu = `.${Ys}{opacity:.4;pointer-events:auto!important;transition:opacity .15s ease;}.${Ks}{opacity:1!important;}`;
  function Ws(n) {
    for (let e of Array.from(n.classList))
      if (e.startsWith(zs)) return e.slice(zs.length);
    return null;
  }
  var kn = class {
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
        t = e.getElementById(Hs);
      if (t?.tagName === "STYLE") this.styleEl = t;
      else {
        let r = e.createElement("style");
        (r.id = Hs),
          (r.textContent = Gu),
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
        t = this.env.doc.querySelectorAll(ju);
      for (let r of Array.from(t)) {
        let o = Ws(r),
          s = o != null ? this.setsByStId.get(o) : void 0;
        r.classList.toggle(Ys, s != null),
          r.classList.toggle(Ks, s != null && s === e);
      }
    }
    interactionForTarget(e) {
      if (!(e instanceof Element)) return null;
      let t = Ws(e);
      return t == null ? null : this.setsByStId.get(t) ?? null;
    }
    onMouseOver;
    onMouseOut;
    onClick;
    onRefresh;
  };
});
var Fn = O((Nn) => {
  "use strict";
  Object.defineProperty(Nn, "__esModule", { value: !0 });
  function Uu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Uu(Nn, {
    createSharedOutOfViewReset: function () {
      return qu;
    },
    setupOutOfViewReset: function () {
      return $u;
    },
  });
  function $u(n, e, t, r, o) {
    let s = n.outOfViewReset;
    if (!s || s === "none") return;
    let i = t.IntersectionObserver;
    if (!i) return;
    let a = n.horizontal || !1,
      c = null,
      l = new i((u) => {
        for (let f of u) {
          let d = f.boundingClientRect,
            p = a ? d.left : d.top,
            h = c;
          (c = p),
            !f.isIntersecting &&
              (Zs(d, a, t) ||
                (r.totalProgress() === 0 && r.paused()) ||
                (Js(s, p, h) && r.pause(0)));
        }
      });
    l.observe(e), o(() => l.disconnect());
  }
  function Zs(n, e, t) {
    return e
      ? n.right > 0 && n.left < t.innerWidth
      : n.bottom > 0 && n.top < t.innerHeight;
  }
  function Js(n, e, t) {
    if (n === "both") return !0;
    if (t === null) return !1;
    let r = e > t,
      o = e < t;
    return (n === "scrollingDown" && o) || (n === "scrollingUp" && r);
  }
  function qu(n, e, t) {
    let r = n.outOfViewReset;
    if (!r || r === "none") return null;
    let o = e.IntersectionObserver;
    if (!o) return null;
    let s = n.horizontal || !1,
      i = new Map(),
      a = new o((c) => {
        for (let l of c) {
          let u = l.target,
            f = i.get(u);
          if (!f) continue;
          let d = l.boundingClientRect,
            p = s ? d.left : d.top,
            h = f.lastPos;
          if (((f.lastPos = p), l.isIntersecting)) {
            f.crossAxisClipped = !1;
            continue;
          }
          let g = Zs(d, s, e);
          if (((f.crossAxisClipped = g), g)) {
            !f.timeline.paused() &&
              Qs(u, f.timeline) &&
              (f.timeline.reversed() === !0
                ? f.timeline.progress() > 0 && f.timeline.progress(0)
                : f.timeline.progress() < 1 && f.timeline.progress(1));
            continue;
          }
          Js(r, p, h) &&
            (t(u),
            !(f.timeline.totalProgress() === 0 && f.timeline.paused()) &&
              f.timeline.pause(0));
        }
      });
    return {
      observe: (c, l) => {
        i.set(c, { timeline: l, lastPos: null, crossAxisClipped: !1 }),
          a.observe(c);
      },
      unobserve: (c) => {
        a.unobserve(c), i.delete(c), i.size === 0 && a.disconnect();
      },
      isCrossAxisClipped: (c) => {
        let l = i.get(c);
        return l?.crossAxisClipped === !0 && Qs(c, l.timeline);
      },
    };
  }
  function Qs(n, e) {
    for (let t of e.getChildren(!0, !0, !1))
      for (let r of t.targets()) {
        let o = r;
        if (o?.nodeType !== 1 || !n.contains(o)) return !1;
      }
    return !0;
  }
});
var ei = O((Dn) => {
  "use strict";
  Object.defineProperty(Dn, "__esModule", { value: !0 });
  Object.defineProperty(Dn, "wireScrollDirection", {
    enumerable: !0,
    get: function () {
      return Hu;
    },
  });
  function Hu(n, e, t, r, o, s = !1) {
    r && (r.pause(), r.revert({ kill: !1 }), r.clear());
    let i = (d, p) => {
        p.pause(), p.clear(), !d.isActive() && (o?.(d), d.play(0));
      },
      a = {
        down: () => {
          if (r) return i(t, r);
          s && t.progress() === 0 && t.invalidate(), t.play();
        },
        up: () => (r ? i(r, t) : t.reverse()),
      },
      c = null,
      l = (d) => {
        d !== c && ((c = d), a[d]());
      },
      u = () => l("down"),
      f = () => l("up");
    if (((n.onEnter = u), e.directionEdgesOnly)) {
      n.onEnterBack = f;
      return;
    }
    (n.onLeave = u),
      (n.onEnterBack = f),
      (n.onLeaveBack = f),
      (n.onUpdate = (d) => l(d.direction > 0 ? "down" : "up"));
  }
});
var Bn = O((Vn) => {
  "use strict";
  Object.defineProperty(Vn, "__esModule", { value: !0 });
  function zu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  zu(Vn, {
    createToggleActionHandlers: function () {
      return Wu;
    },
    makeScrollActionHandler: function () {
      return He;
    },
  });
  function He(n, e) {
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
            let o = n;
            break;
          }
        }
    };
  }
  function Wu(n, e) {
    let [t, r, o, s] = n,
      i = {};
    return (
      t !== "none" && (i.onEnter = He(t, e)),
      r !== "none" && (i.onLeave = He(r, e)),
      o !== "none" && (i.onEnterBack = He(o, e)),
      s !== "none" && (i.onLeaveBack = He(s, e)),
      i
    );
  }
});
var ni = O((Gn) => {
  "use strict";
  Object.defineProperty(Gn, "__esModule", { value: !0 });
  function Ku(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Ku(Gn, {
    buildGSAPConfig: function () {
      return tf;
    },
    composeScrollPosition: function () {
      return jn;
    },
    hasBatchStagger: function () {
      return Zu;
    },
  });
  var ze = ne(),
    Yu = Fn(),
    Xu = ei(),
    Qu = Bn();
  function Zu(n) {
    return n
      ? ((0, ze.toSeconds)(n.amount) ?? 0) > 0 ||
          ((0, ze.toSeconds)(n.each) ?? 0) > 0
      : !1;
  }
  function Ju(n) {
    let e = parseFloat(n.getComputedStyle(n.document.documentElement).fontSize);
    return {
      vh: n.innerHeight / 100,
      vw: n.innerWidth / 100,
      rem: e || ze.DEFAULT_ROOT_FONT_SIZE_PX,
    };
  }
  function jn(n, e, t) {
    let r = (o) => (e ? `clamp(${o})` : o);
    return (0, ze.hasResolvableScrollUnit)(n)
      ? () => r((0, ze.resolveScrollUnits)(n, Ju(t)))
      : r(n);
  }
  function ti(n, e, t) {
    return t ? `clamp(${n})` : n || e;
  }
  function ef(n, e, t, r) {
    let o = {},
      s = (i) =>
        i && (i === document.body || (!r && i.parentElement === document.body));
    if (n.pin !== void 0) {
      if (typeof n.pin == "boolean") n.pin && !s(e) && (o.pin = n.pin);
      else {
        let i = t(n.pin, { triggerElement: e });
        i.length > 0 && !s(i[0]) && (o.pin = i[0]);
      }
      r &&
        o.pin !== void 0 &&
        ((o.anticipatePin = 0),
        (o.pinReparent = !1),
        (o.pinSpacing = n.pinSpacing !== !1));
    }
    if (n.endTrigger) {
      let i = t(n.endTrigger, { triggerElement: e });
      i.length > 0 && (o.endTrigger = i[0]);
    }
    if (n.scroller) {
      let i = t(n.scroller, { triggerElement: e });
      i.length > 0 ? (o.scroller = i[0]) : (o.scroller = window);
    }
    return o;
  }
  function tf(n, e, t, r, o, s = !1, i, a, c, l) {
    let u = n.split === !0,
      f = ef(n, e, o, u),
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
          ? jn(n.start || "top bottom", n.clamp, i)
          : ti(n.start, "top bottom", n.clamp),
        end: u
          ? jn(n.end || "bottom top", n.clamp, i)
          : ti(n.end, "bottom top", n.clamp),
        scrub: n.scrub ?? !1,
        horizontal: n.horizontal || !1,
        toggleActions: d.join(" "),
        id: t,
        ...f,
      };
    if (p.scrub !== !1) p.animation = r;
    else {
      if (u && n.scrollDirection)
        return (0, Xu.wireScrollDirection)(p, n, r, c, l, s), p;
      let h = { timeline: r, hasVolatileValues: s },
        g = (0, Qu.createToggleActionHandlers)(d, h);
      Object.assign(p, g), u && (0, Yu.setupOutOfViewReset)(n, e, i, r, a);
    }
    return p;
  }
});
var oi = O((qn) => {
  "use strict";
  Object.defineProperty(qn, "__esModule", { value: !0 });
  Object.defineProperty(qn, "ScrollController", {
    enumerable: !0,
    get: function () {
      return $n;
    },
  });
  var nf = ne(),
    rf = Xs(),
    of = In(),
    sf = xn(),
    yt = ni(),
    af = Fn(),
    cf = Bn(),
    $n = class {
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
          (this.markerFocus = new rf.ScrollMarkerFocusManager(e));
      }
      setupScrollControl(e, t, r, o, s) {
        if (typeof this.env.win.ScrollTrigger > "u") {
          console.warn("ScrollTrigger plugin is not available.");
          return;
        }
        let i = ri(e, t, o);
        this.cleanupScrollTrigger(i);
        let a = this.host.getTimeline(e, o);
        if (!a) {
          console.warn(`Timeline ${e} not found`);
          return;
        }
        let c = s ? this.host.getTimeline(s, o) ?? void 0 : void 0,
          l = (0, yt.buildGSAPConfig)(
            r,
            o,
            i,
            a,
            this.host.resolveFn,
            this.host.getSubOrNull(e, o)?.hasVolatileValues ?? !1,
            this.env.win,
            (f) => this.addDisposer(i, f),
            c,
            c && ((f) => this.host.rebuildGroup(f === c ? s : e, o))
          ),
          u =
            l.animation === void 0 &&
            r.split === !0 &&
            r.scrollDirection !== void 0;
        u && s && c && this.host.drainGroup(s, o);
        try {
          let f = this.env.win.ScrollTrigger.create(l);
          this.scrollTriggers.set(i, f),
            r.showMarkers && this.markerFocus.register(i, t);
          let d = this.host.getSub(e, o);
          Un(d, i);
          let p = s ? this.host.getSubOrNull(s, o) : void 0;
          p &&
            (Un(p, i),
            p.scrollTriggerConfigs || (p.scrollTriggerConfigs = new Map())),
            d.scrollTriggerConfigs || (d.scrollTriggerConfigs = new Map()),
            u || d.scrollTriggerConfigs.set(i, l);
        } catch (f) {
          console.error("Failed to create ScrollTrigger:", f),
            this.cleanupScrollTrigger(i);
        }
      }
      setupScrollDirectionPair(e, t, r, o, s) {
        let a = this.host.timelineDefs.get(this.host.resolveAlias(t))?.actions
          ?.length
          ? t
          : void 0;
        for (let c of s) this.setupScrollControl(e, r, o, c, a);
      }
      setupScrollControls(e, t, r, o) {
        if (
          (this.maybePromoteReanchoredTimeline(e, r, o),
          this.shouldBatchScrollReveal(e, r, o))
        )
          this.setupScrollBatch(e, t, r, o);
        else for (let s of o) this.setupScrollControl(e, t, r, s);
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
          !(0, yt.hasBatchStagger)(e.stagger) ||
          t.length <= 1 ||
          typeof this.env.win.ScrollTrigger?.batch != "function" ||
          e.pin ||
          e.endTrigger ||
          e.scroller ||
          e.scrollDirection
        );
      }
      maybePromoteReanchoredTimeline(e, t, r) {
        let o = this.host.resolveAlias(e);
        this.host.isReanchored(o) ||
          this.host.isDynamic(o) ||
          (this.passesScrollBatchGuards(t, r) &&
            (this.host.getInteractionForTimeline(o)?.triggers?.length !== 1 ||
              this.host.hasAlias(o) ||
              this.host.hasForeignOwner(o) ||
              (this.isReanchorEligible(o, r) &&
                this.host.promoteToPerElement(o))));
      }
      isReanchorEligible(e, t) {
        let r = this.host.timelineDefs.get(e);
        if (!r?.actions?.length) return !1;
        let o = this.host.getInteractionForTimeline(e),
          s = new Map(),
          i = new Set(t),
          a = !1;
        for (let c of r.actions) {
          if (!c.targets?.length || (0, of.getSplitTextType)(c) === "lines")
            return !1;
          for (let l of c.targets) {
            a = !0;
            let u = l.length === 3 ? l[2] : void 0;
            if (
              !u ||
              u.relationship === "none" ||
              !u.filterBy ||
              u.firstMatchOnly
            )
              return !1;
            let f = this.host.resolveFn(u.filterBy, {}, o);
            if (!f.length) return !1;
            let d = new Set(f);
            if (d.size !== i.size || !t.every((p) => d.has(p))) return !1;
            for (let p of t) {
              let h = this.host.resolveFn(
                l,
                { triggerElement: p, anchorFilterToTrigger: !0 },
                o
              );
              for (let g of h) {
                let y = s.get(g);
                if (y && y !== p) return !1;
                s.set(g, p);
              }
            }
          }
        }
        return a;
      }
      setupScrollBatch(e, t, r, o) {
        let s = this.env.win,
          i = s.ScrollTrigger,
          a = s.gsap;
        if (typeof i?.batch != "function" || !a) {
          for (let T of o) this.setupScrollControl(e, t, r, T);
          return;
        }
        i.register?.(a);
        let c = (0, sf.getStaggerConfig)(
            r.stagger,
            (0, nf.buildEaseContextId)(`${e}-${t}-batch`, "stagger")
          ),
          [l, u, f, d] = [
            r.enter || "none",
            r.leave || "none",
            r.enterBack || "none",
            r.leaveBack || "none",
          ],
          p = new Map(),
          h = new Map(),
          g = (T) => {
            h.get(T)?.kill(), h.delete(T);
          },
          y = new Set(),
          S = (0, af.createSharedOutOfViewReset)(r, s, g);
        for (let T of o) {
          let E = ri(e, t, T);
          this.cleanupScrollTrigger(E), p.set(T, E);
          let _ = this.host.getTimeline(e, T);
          this.addDisposer(E, () => {
            y.add(T), g(T);
          }),
            _ &&
              S &&
              (S.observe(T, _), this.addDisposer(E, () => S.unobserve(T)));
        }
        let b = (T, E) => {
            if (E === "none") return;
            let _ = this.host.getTimeline(e, T);
            if (!_) return;
            let A = this.host.getSubOrNull(e, T)?.hasVolatileValues ?? !1;
            (0, cf.makeScrollActionHandler)(E, {
              timeline: _,
              hasVolatileValues: A,
            })();
          },
          m = (T) => {
            let E = this.host.getTimeline(e, T);
            !E ||
              E.progress() >= 1 ||
              (E.reversed() && E.reversed(!1), b(T, "complete"));
          },
          w = (T, E, _ = !1) => {
            let A = T.filter((I) => !y.has(I));
            if (A.length === 0) return;
            let R = [],
              M = 1 / 0,
              C = c ? a.utils.distribute(c) : void 0;
            A.forEach((I, k) => {
              if ((g(I), E === "none")) return;
              if (_ && E === "play" && S?.isCrossAxisClipped(I)) {
                m(I);
                return;
              }
              let F = C ? C(k, I, A) : 0;
              F < M && (M = F), R.push({ el: I, offset: F });
            });
            for (let { el: I, offset: k } of R) {
              let F = k - M;
              if (F > 0) {
                let H = a.delayedCall(F, () => {
                  if ((h.delete(I), E === "play" && S?.isCrossAxisClipped(I))) {
                    m(I);
                    return;
                  }
                  b(I, E);
                });
                h.set(I, H);
              } else b(I, E);
            }
          },
          v = {
            start: (0, yt.composeScrollPosition)(
              r.start || "top bottom",
              r.clamp,
              this.env.win
            ),
            end: (0, yt.composeScrollPosition)(
              r.end || "bottom top",
              r.clamp,
              this.env.win
            ),
            horizontal: r.horizontal || !1,
            onEnter: (T) => w(T, l, !0),
          };
        f !== "none" && (v.onEnterBack = (T) => w(T, f, !0)),
          u !== "none" && (v.onLeave = (T) => w(T, u)),
          d !== "none" && (v.onLeaveBack = (T) => w(T, d));
        try {
          let T = i.batch(o, v);
          for (let A of T) {
            let R = A.trigger;
            if (!R) continue;
            let M = p.get(R);
            if (!M) continue;
            this.scrollTriggers.set(M, A);
            let C = this.host.getSub(e, R);
            C && Un(C, M);
          }
          let E = o[0],
            _ = E ? p.get(E) : void 0;
          if (r.showMarkers && E && _) {
            let A = `${_}_markers`,
              R = {
                trigger: E,
                start: v.start,
                end: v.end,
                horizontal: v.horizontal,
                markers: !0,
                id: A,
              },
              M = i.create(R);
            this.scrollTriggers.set(A, M),
              this.markerFocus.register(A, t),
              this.addDisposer(_, () => {
                M.kill(),
                  this.scrollTriggers.delete(A),
                  this.markerFocus.unregister(A);
              });
          }
        } catch (T) {
          console.error("Failed to create ScrollTrigger batch:", T);
          for (let E of p.values()) this.cleanupScrollTrigger(E);
        }
      }
      rebindScrollTriggers(e) {
        if (!(!e.scrollTriggerIds || !e.scrollTriggerConfigs))
          for (let t of e.scrollTriggerIds) {
            let r = this.scrollTriggers.get(t),
              o = e.scrollTriggerConfigs.get(t);
            if (r && o) {
              let s = { ...o, animation: e.timeline };
              if ((r.kill(), this.env.win.ScrollTrigger)) {
                let i = this.env.win.ScrollTrigger.create(s);
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
          for (let o of r) o();
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
  function ri(n, e, t) {
    return `st_${n}_${e}_${t.id || window.crypto.randomUUID().slice(0, 8)}`;
  }
  function Un(n, e) {
    n.scrollTriggerIds || (n.scrollTriggerIds = new Set()),
      n.scrollTriggerIds.add(e);
  }
});
var ai = O((Wn) => {
  "use strict";
  Object.defineProperty(Wn, "__esModule", { value: !0 });
  Object.defineProperty(Wn, "AnimationCoordinator", {
    enumerable: !0,
    get: function () {
      return zn;
    },
  });
  var Tt = K(),
    Ce = ne(),
    lf = Ms(),
    uf = Cs(),
    Hn = Bs(),
    si = In(),
    We = xn(),
    ff = oi(),
    zn = class {
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
        if (t > Hn.MAX_ALIAS_DEPTH)
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
          let o = e.get(r);
          o ? o.push(t) : e.set(r, [t]);
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
        return (0, Hn.shouldFlipEaseForTimeline)(
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
        let o = this.shouldFlipEaseForTimeline(t);
        if (o !== this.flipEaseBySource.get(t)) {
          this.flipEaseBySource.set(t, o);
          for (let s of r.values()) this.scheduleRebuild(s);
        }
      }
      resolveSourceTimelineId(e) {
        return (0, Hn.resolveSourceTimelineId)(this.timelineDefs, e);
      }
      splitText;
      timelineTargetsCache;
      constructor(e, t, r, o, s, i, a) {
        (this.timelineDefs = e),
          (this.getHandler = t),
          (this.getTargetResolver = r),
          (this.resolveFn = o),
          (this.getInteractionForTimeline = s),
          (this.getInteractionsForTimelines = i),
          (this.env = a),
          (this.subs = new Map()),
          (this.dynamicFlags = new Map()),
          (this.reanchoredTimelines = new Set()),
          (this.causeTriggers = new Map()),
          (this.cleanupFns = new Map()),
          (this.aliases = new Map()),
          (this.flipEaseBySource = new Map()),
          (this.pluginRuntimeBridge = new lf.PluginRuntimeBridge()),
          (this.sharedGroups = new Map()),
          (this.rewindSharedRefire = !1),
          (this.timelineGroupsEnabled = !1),
          (this.reuseAliasIndex = null),
          (this.splitText = new si.SplitTextManager(
            (c, l, u, f) => this.collectTargets(c, l, u, f),
            (c, l) => {
              c.rebuildState !== "init"
                ? this.scheduleRebuildForElement(l)
                : (c.rebuildState = "idle");
            },
            (c) => this.scheduleRebuildForElement(c),
            (c) => {
              c.rebuildState = "idle";
            }
          )),
          (this.timelineTargetsCache = new WeakMap()),
          (this.animation = new uf.RuntimeMotionDriver(a)),
          (this.scroll = new ff.ScrollController(a, {
            timelineDefs: e,
            resolveFn: o,
            getInteractionForTimeline: s,
            resolveAlias: (c) => this.resolveAlias(c),
            getTimeline: (c, l) => this.getTimeline(c, l),
            getSub: (c, l) => this.getSub(c, l),
            getSubOrNull: (c, l) => this.getSubOrNull(c, l),
            isDynamic: (c) => !!this.dynamicFlags.get(c),
            isReanchored: (c) => this.reanchoredTimelines.has(c),
            hasAlias: (c) => this.hasAlias(c),
            hasForeignOwner: (c) =>
              this.getInteractionsForTimelines(new Set([c])).length > 1,
            promoteToPerElement: (c) => this.promoteToPerElement(c),
            rebuildGroup: (c, l) => this.rebuildScrollDirectionGroup(c, l),
            drainGroup: (c, l) => re(this.getSubOrNull(c, l)?.cleanupFns),
          }));
      }
      registerSharedGroup(e, t) {
        if (t.length < 2) return;
        let r = new Set();
        for (let s of t) {
          let i = this.sharedGroups.get(s);
          i && r.add(i);
        }
        if (r.size > 0) {
          for (let s of r) this.dissolveSharedGroup(s);
          return;
        }
        let o = { primary: e };
        for (let s of t)
          this.sharedGroups.set(s, o), s !== e && this.aliases.set(s, e);
      }
      dissolveSharedGroupForTimeline(e) {
        let t = this.sharedGroups.get(e);
        return t ? this.dissolveSharedGroup(t) : [];
      }
      dissolveSharedGroup(e) {
        let t = [];
        for (let [c, l] of this.sharedGroups) l === e && t.push(c);
        let r = t.indexOf(e.primary);
        r >= 0 && t.push(...t.splice(r, 1));
        let o = [],
          s = this.subs.get(e.primary);
        if (s)
          for (let [c, l] of s) {
            let u = l.timeline.totalProgress(),
              f = l.timeline.paused() === !0,
              d = u <= 0 && f,
              p = l.timeline.timeScale();
            o.push({
              id: l.timelineId,
              el: c,
              progress: u,
              reversed: l.timeline.reversed() === !0,
              paused: f,
              timeScale: typeof p == "number" && p !== 0 ? Math.abs(p) : 1,
              controlTypes: l.controlTypes,
              owningInteraction: l.owningInteraction,
              dormant: d,
            });
          }
        for (let c of t)
          this.sharedGroups.delete(c),
            this.aliases.get(c) === e.primary && this.aliases.delete(c);
        let i = [];
        for (let c of t) {
          let l = this.getInteractionForTimeline(c);
          l &&
            (this.createTimeline(c, l, { revertGlobalSplits: !1 }), i.push(c));
        }
        for (let { el: c, controlTypes: l, owningInteraction: u } of o)
          if (c != null)
            for (let f of t) {
              if (this.dynamicFlags.get(f) !== !0) continue;
              let d = this.ensureSubs(f);
              if (d.has(c)) continue;
              let p = this.buildSubTimeline(f, c, l, u);
              p && d.set(c, p);
            }
        let a = new Set(i);
        for (let {
          id: c,
          el: l,
          progress: u,
          reversed: f,
          paused: d,
          timeScale: p,
          dormant: h,
        } of o) {
          if (h) continue;
          let g = this.getSubOrNull(c, l)?.timeline;
          g &&
            (g.timeScale(p),
            g.reversed(f),
            g.totalProgress(u),
            a.add(c),
            !d && (f ? g.reverse() : g.play()));
        }
        return [...a];
      }
      createTimeline(e, t, r) {
        let o = this.timelineDefs.get(e);
        if (this.aliases.has(e)) return;
        let s = this.sharedGroups.get(e);
        if (
          (this.destroy(e, {
            reassignSharedPrimary: !1,
            revertGlobalSplits: r?.revertGlobalSplits,
          }),
          !o)
        )
          return;
        if ((s && this.sharedGroups.set(e, s), o.reuse?.sourceTimelineId)) {
          this.aliases.set(e, o.reuse.sourceTimelineId),
            this.recomputeFlipEaseForSource(o.reuse.sourceTimelineId);
          return;
        }
        let i = this.isDynamicTimeline(o, t);
        this.dynamicFlags.set(e, i), this.reanchoredTimelines.delete(e);
        let a = new Set(),
          c = new Set(),
          l = new Map();
        for (let u of t.triggers) {
          let [, f, d] = u;
          if (d)
            for (let h of this.resolveFn(d, { trigger: u }, t))
              c.add(h), l.has(h) || l.set(h, u);
          let p = f?.controlType;
          p && (0, Ce.isValidControlType)(p) && a.add(p),
            p === Tt.TimelineControlType.LOAD && !l.has(null) && l.set(null, u);
        }
        if ((this.causeTriggers.set(e, l), !c.size || !i)) {
          let u = this.buildSubTimeline(e, null, a, t);
          u && this.ensureSubs(e).set(null, u);
        }
        if (c.size) {
          let u = this.ensureSubs(e);
          for (let f of c)
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
        let o = this.sharedGroups.get(e);
        if (!o) {
          let f = this.resolveSourceTimelineId(e);
          f !== e && this.sharedGroups.has(f) && this.prepareIfShared(f, t, r);
          return;
        }
        let s = this.timelineDefs.get(e);
        if (!s) return;
        let i = this.getSub(o.primary, t);
        if (!i) return;
        if (i.timelineId === e) {
          r && this.rewindExhausted(i);
          return;
        }
        let a = i.timelineId;
        re(i.cleanupFns);
        for (let f of [...(i.swapCleanupFns ?? [])].reverse()) f();
        i.swapCleanupFns?.clear(), re(this.cleanupFns.get(a));
        let c = i.timeline;
        c.clear(), c.progress(0);
        let l = (0, We.convertToGsapDefaults)(s.settings || {}, e);
        c.repeat(typeof l.repeat == "number" ? l.repeat : 0),
          c.repeatDelay(typeof l.repeatDelay == "number" ? l.repeatDelay : 0),
          c.yoyo(l.yoyo === !0);
        let u = typeof l.delay == "number" ? l.delay : 0;
        if (
          (c.delay(u),
          c.reversed(!!s.playInReverse),
          c.timeScale(
            typeof s.settings?.speed == "number" ? s.settings.speed : 1
          ),
          u > 0 && this.rewindSharedRefire && c.totalTime(-u),
          (i.timelineDef = { ...s, actions: s.actions || [] }),
          (i.timelineId = e),
          this.timelineTargetsCache.delete(i),
          this.env.win.SplitText && s.actions?.length)
        ) {
          let f = i.rebuildState;
          (i.rebuildState = "building"),
            this.splitText.splitForActions(
              s.actions,
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
        for (let o of r.keys()) this.prepareIfShared(e, o);
        return Array.from(r.values()).map((o) => o.timeline);
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
        let o = this.getSub(e, t);
        o &&
          (this.refreshLineSplits(o),
          this.invalidateVolatileFromStart(o, r),
          o.timeline.play(r ?? void 0));
      }
      pause(e, t, r) {
        this.prepareIfShared(e, t);
        let o = this.getSubOrNull(e, t);
        o && (r !== void 0 ? o.timeline.pause(r) : o.timeline.pause());
      }
      resume(e, t, r) {
        this.prepareIfShared(e, t);
        let o = this.getSubOrNull(e, t);
        o &&
          (this.refreshLineSplits(o),
          this.invalidateVolatileFromStart(o, r),
          o.timeline.resume(r));
      }
      reverse(e, t, r) {
        this.prepareIfShared(e, t);
        let o = this.getSub(e, t);
        o && (this.refreshLineSplits(o), o.timeline.reverse(r));
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
      hasActions(e) {
        return (this.getTimelineDef(e)?.actions?.length ?? 0) > 0;
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
              getActionTweenConfig: (r, o, s) =>
                this.getActionTweenConfig(r, o, s),
              buildActionTimeline: (r) => this.buildOneShotActionTimeline(e, r),
              registerCleanup: (r) => this.registerCleanup(e, r),
            }
          : null;
      }
      getTimelineDef(e) {
        return this.timelineDefs.get(this.resolveAlias(e));
      }
      getFirstActionTargets(e, t) {
        let o = this.getTimelineDef(e)?.actions?.[0];
        return o ? this.collectTargets(o, t, e) : [];
      }
      getActionTweenConfig(e, t, r) {
        let o = this.getHandler(t);
        if (!o?.createTweenConfig) return null;
        let s = e.properties[t] || {};
        return o.createTweenConfig(s, r);
      }
      registerCleanup(e, t, r) {
        let o = r === void 0 ? void 0 : this.getSubOrNull(e, r);
        if (o) {
          let i = o.swapCleanupFns ?? new Set();
          return (
            (o.swapCleanupFns = i),
            i.add(t),
            () => {
              i.delete(t);
            }
          );
        }
        let s = this.cleanupFns.get(e) ?? new Set();
        return (
          this.cleanupFns.set(e, s),
          s.add(t),
          () => {
            s.delete(t);
          }
        );
      }
      publishChannel(e, t, r) {
        this.pluginRuntimeBridge.publish(e, t, r);
      }
      subscribeChannel(e, t, r, o) {
        return this.pluginRuntimeBridge.subscribe(e, t, r, o);
      }
      buildOneShotActionTimeline(e, t) {
        let r = this.getTimelineDef(e);
        if (!r?.actions?.length) return null;
        let o = this.animation.timeline();
        if (!o) return null;
        t.beforeTweens?.(o);
        for (let s of r.actions)
          this.buildTweensForAction(
            s,
            t.targets,
            o,
            e,
            !1,
            t.varsTransform,
            void 0,
            void 0,
            void 0,
            t.cleanupBucket
          );
        return o;
      }
      togglePlayReverse(e, t) {
        this.prepareIfShared(e, t);
        let r = this.getSub(e, t);
        if (!r) return;
        this.refreshLineSplits(r);
        let o = r.timeline,
          s = o.progress();
        this.invalidateVolatileFromStart(r),
          s === 0
            ? o.play()
            : s === 1
            ? o.reverse()
            : o.reversed()
            ? o.play()
            : o.reverse();
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
        let o = this.getSubOrNull(e, r);
        o && (this.refreshLineSplits(o), o.timeline.totalProgress(t));
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
          for (let [c, l] of this.sharedGroups)
            if (l === r && c !== e) {
              a = c;
              break;
            }
          if (a) {
            (r.primary = a), this.aliases.delete(a);
            for (let [u, f] of this.sharedGroups)
              f === r && u !== e && u !== a && this.aliases.set(u, a);
            let c = this.timelineDefs.get(a),
              l = this.getInteractionForTimeline(a);
            this.dynamicFlags.set(
              a,
              !!(c && l && this.isDynamicTimeline(c, l))
            );
          }
        }
        let o = r && r.primary !== e ? r.primary : void 0;
        if (o) {
          let a = this.subs.get(o);
          if (a) {
            for (let c of a.values())
              if (c.timelineId === e) {
                for (let l of c.cleanupFns ?? []) l();
                c.cleanupFns?.clear();
                for (let l of [...(c.swapCleanupFns ?? [])].reverse()) l();
                c.swapCleanupFns?.clear(),
                  c.timeline.revert({ kill: !1 }),
                  c.timeline.clear(),
                  (c.rebuildState = c.timeline.data?.splitLines
                    ? "idle"
                    : "init"),
                  this.timelineTargetsCache.delete(c);
              }
          }
        }
        this.pluginRuntimeBridge.destroyTimeline(e);
        let s = this.subs.get(e),
          i = new Set();
        if (s) {
          for (let [, a] of s)
            a.timelineId !== e && i.add(a.timelineId), this.disposeSub(a);
          (t?.revertGlobalSplits ?? !0) && this.splitText.revertAll();
        }
        re(this.cleanupFns.get(e));
        for (let a of i) re(this.cleanupFns.get(a)), this.cleanupFns.delete(a);
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
            c = 0;
          for (let [l, u] of this.sharedGroups)
            if (u === r && ((a = l), ++c > 1)) break;
          if (c === 1 && a !== void 0) {
            let l = this.subs.get(a);
            if (l)
              for (let [u, f] of l)
                f.timelineId !== a && this.prepareIfShared(a, u);
            this.sharedGroups.delete(a);
          }
        }
      }
      isDynamicTimeline(e, t) {
        let r = t.triggers.some(
          ([, s]) => s?.controlType !== Tt.TimelineControlType.LOAD
        );
        if (t.scope?.type === "component" && r) return !0;
        let o = e.actions;
        if (!o?.length) return !1;
        for (let s of o) {
          for (let i of s.targets ?? []) {
            if (this.getTargetResolver(i)?.isDynamic) return !0;
            if (i.length === 3 && i[2]) {
              let c = i[2];
              if (
                c.filterBy &&
                c.relationship !== "none" &&
                this.getTargetResolver(c.filterBy)?.isDynamic
              )
                return !0;
            }
          }
          if (r) {
            for (let i in s.properties)
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
          o = this.ensureSubs(r),
          s = this.dynamicFlags.get(r),
          i = o.get(s ? t : null);
        return (
          i || ((i = this.buildSubTimeline(r, t)), i && o.set(s ? t : null, i)),
          i
        );
      }
      getSubOrNull(e, t) {
        let r = this.resolveAlias(e),
          o = this.dynamicFlags.get(r);
        return this.subs.get(r)?.get(o ? t ?? null : null);
      }
      buildSubTimeline(e, t, r, o) {
        let s = this.timelineDefs.get(e),
          i = s?.actions,
          a = s?.settings,
          c = this.env.win.gsap;
        if (!c) return;
        let l = c.timeline({
            ...(0, We.convertToGsapDefaults)(a || {}, e),
            paused: !0,
            reversed: !!s?.playInReverse,
            data: { id: e, triggerEl: t || void 0 },
          }),
          u = s
            ? { ...s, actions: i || [] }
            : { id: e, pageId: "", deleted: !1, actions: [] },
          f = {
            timeline: l,
            timelineId: e,
            elementContext: t,
            timelineDef: u,
            rebuildState: "init",
            controlTypes: r,
            owningInteraction: o,
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
                o
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
          o = e.timeline,
          s = e.timelineId,
          i = new Map();
        for (let a = 0; a < t.actions.length; a++) {
          let c = t.actions[a];
          if (!c) continue;
          let l = JSON.stringify(c.targets),
            u = !0,
            f = (0, si.getSplitTextType)(c),
            d = f === "none" ? l : `${l}_split_${f}`,
            p = (c.tt ?? 0) !== 0;
          for (let m of Object.values(c.properties ?? {})) {
            let w = i.get(d) || new Set();
            i.set(d, w);
            for (let v of Object.keys(m || {}))
              w.has(v) ? p && (u = !1) : w.add(v);
          }
          let h = this.collectTargetGroups(c, r, s, e.owningInteraction),
            g = h.flatMap((m) => m.elements);
          if (!g.length) {
            let m = !1;
            for (let w in c.properties)
              if (this.getHandler(w)?.createCustomTween) {
                m = !0;
                break;
              }
            if (!m) continue;
          }
          let y = this.collectDelegatedTargets(h, g),
            S = y ? y.plain : g,
            b = y ? g : void 0;
          (f !== "none" &&
            S.length > 0 &&
            this.env.win.SplitText &&
            ((S = this.splitText.getSplitElements(S, f)),
            (b = void 0),
            S.length === 0 && !y?.groups.length)) ||
            this.buildTweensForAction(
              c,
              S,
              o,
              s,
              u,
              void 0,
              r,
              t.triggerMetadata?.role,
              e,
              void 0,
              y?.groups,
              b
            );
        }
      }
      collectTargets(e, t, r, o) {
        return this.collectTargetGroups(e, t, r, o).flatMap((s) => s.elements);
      }
      collectTargetGroups(e, t, r, o) {
        let s = [];
        if (!e.targets) return s;
        let i = o ?? this.getInteractionForTimeline(r),
          a = t != null && this.reanchoredTimelines.has(this.resolveAlias(r)),
          c = (
            this.causeTriggers.get(r) ??
            this.causeTriggers.get(this.sharedGroups.get(r)?.primary ?? r)
          )?.get(t);
        for (let l of e.targets ?? []) {
          let u = this.resolveFn(
            l,
            t
              ? { triggerElement: t, anchorFilterToTrigger: a, causeTrigger: c }
              : { causeTrigger: c },
            i
          );
          s.push({ td: l, elements: u });
        }
        return s;
      }
      collectDelegatedTargets(e, t) {
        let r = null,
          o = new Set();
        for (let { td: i, elements: a } of e) {
          let c = this.getTargetResolver(i);
          if (c?.buildTween) {
            r ??= new Map();
            let l = r.get(c);
            l || r.set(c, (l = { resolver: c, targets: [] })),
              l.targets.push(...a);
          } else for (let l of a) o.add(l);
        }
        if (!r) return null;
        let s = new Set();
        for (let i of r.values()) for (let a of i.targets) s.add(a);
        return {
          groups: [...r.values()].filter((i) => i.targets.length > 0),
          plain: t.filter((i) => o.has(i) || !s.has(i)),
        };
      }
      buildTweensForAction(e, t, r, o, s, i, a, c, l, u, f, d) {
        let p = this.shouldFlipEaseForTimeline(o),
          h = l?.timelineDef.canvasDuration != null;
        for (let g in e.properties) {
          let y = g,
            S = this.getHandler(y);
          if (!S) continue;
          let b = e.properties[y] || {};
          try {
            let m = e.timing?.position;
            if (
              ((m =
                typeof m == "string" && m.endsWith("ms")
                  ? (0, Ce.toSeconds)(m)
                  : m ?? 0),
              f?.length && typeof m == "string")
            ) {
              let A = `ix3-position-${e.id}-${g}`;
              r.addLabel(A, m), (m = A);
            }
            let w = e.timing?.duration ?? Tt.DEFAULTS.DURATION,
              v = (0, We.getStaggerConfig)(
                e.timing?.stagger,
                (0, Ce.buildEaseContextId)(e.id, "stagger")
              );
            v && w === 0 && (w = 0.001);
            let T = { id: e.id, presetId: e.presetId, color: e.color },
              E = {
                force3D: !0,
                ...(!s && { immediateRender: s }),
                data: T,
                ...(e.tt !== 3 && { duration: (0, Ce.toSeconds)(w) }),
                ...(e.timing?.repeat != null && {
                  repeat: h && e.timing.repeat < 0 ? 0 : e.timing.repeat,
                }),
                ...(e.timing?.repeatDelay != null && {
                  repeatDelay: (0, Ce.toSeconds)(e.timing.repeatDelay),
                }),
                ...(e.timing?.yoyo != null && { yoyo: e.timing.yoyo }),
                ...(v && { stagger: v }),
              };
            e.timing?.ease != null &&
              (0, We.applyEase)(
                E,
                e.timing.ease,
                (0, Ce.buildEaseContextId)(e.id, "timing")
              ),
              p && (E.easeReverse = !0);
            let _ = f?.length ? d ?? t.concat(...f.map((A) => A.targets)) : t;
            if (S.createTweenConfig) {
              let A = S.createTweenConfig(b, _);
              i?.(y, e, A),
                A.modifiers &&
                  (E.modifiers = { ...E.modifiers, ...A.modifiers }),
                ii(l, A);
              let R = Object.keys(A.from || {}).length > 0,
                M = Object.keys(A.to || {}).length > 0,
                C = e.tt ?? 0;
              if (C === 0 && !M) continue;
              if (C === 1 && !R) continue;
              if (C === 2 && !R && !M) continue;
              if (C === 3 && !M) continue;
              (f?.length && t.length === 0) ||
                (C === 1
                  ? r.from(t, { ...E, ...A.from }, m)
                  : C === 2
                  ? r.fromTo(t, { ...A.from }, { ...E, ...A.to }, m)
                  : C === 3
                  ? r.set(t, { ...E, ...A.to }, m)
                  : r.to(t, { ...E, ...A.to }, m));
              for (let I of f ?? []) {
                let k = I.resolver.buildTween({
                  timeline: r,
                  action: e,
                  tweenType: C,
                  config: A,
                  vars: { ...E },
                  targets: I.targets,
                  position: m ?? 0,
                });
                k && this.routeCleanup(k, o, l, u);
              }
            } else if (S.createCustomTween) {
              let A = S.createCustomTween(r, e, b, E, _, m || 0, {
                triggerElement: a ?? null,
                timelineRole: c,
                subscribeChannel: (R, M) =>
                  this.subscribeChannel(o, R, a ?? null, M),
                flagVolatileValues: (R) => ii(l, R),
                animation: this.animation,
              });
              A && this.routeCleanup(A, o, l, u);
            }
          } catch (m) {
            console.error("Error building tween:", m);
          }
        }
      }
      routeCleanup(e, t, r, o) {
        if (o != null) o.add(e);
        else if (r != null) {
          let s = r.cleanupFns ?? new Set();
          (r.cleanupFns = s), s.add(e);
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
          r = e.controlTypes?.has(Tt.TimelineControlType.LOAD) && t !== 1,
          o = e.timeline.isActive() || r,
          s = e.timeline.reversed() === !0;
        e.timeline.pause(),
          e.timeline.revert({ kill: !1 }),
          e.timeline.clear(),
          re(e.cleanupFns),
          this.buildTimeline(e),
          this.padTimelineToCanvas(e),
          e.timeline.totalProgress(t),
          e.scrollTriggerIds && e.scrollTriggerConfigs
            ? this.scroll.rebindScrollTriggers(e)
            : o && (s ? e.timeline.reverse() : e.timeline.play()),
          e.rebuildState === "rebuild_pending"
            ? ((e.rebuildState = "building"), this.rebuildTimelineOnTheFly(e))
            : (e.rebuildState = "idle");
      }
      disposeSub(e) {
        (e.rebuildState = "init"),
          e.timeline && (e.timeline.revert(), e.timeline.kill()),
          this.scroll.cleanupSubScrollTriggers(e),
          re(e.cleanupFns),
          re(e.swapCleanupFns),
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
        re(this.cleanupFns.get(e)), this.cleanupFns.delete(e);
      }
      rebuildScrollDirectionGroup(e, t) {
        let r = this.getSubOrNull(e, t);
        r &&
          (r.timeline.pause(),
          r.timeline.clear(),
          re(r.cleanupFns),
          this.timelineTargetsCache.delete(r),
          this.buildTimeline(r));
      }
      setupScrollControl(e, t, r, o, s) {
        this.scroll.setupScrollControl(e, t, r, o, s);
      }
      setupScrollDirectionPair(e, t, r, o, s) {
        this.scroll.setupScrollDirectionPair(e, t, r, o, s);
      }
      setupScrollControls(e, t, r, o) {
        this.scroll.setupScrollControls(e, t, r, o);
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
          for (let o of this.collectTargets(
            r,
            e.elementContext,
            e.timelineId,
            e.owningInteraction
          ))
            t.add(o);
        return this.timelineTargetsCache.set(e, t), t;
      }
      scheduleRebuildForElement(e) {
        for (let [, t] of this.subs)
          for (let [, r] of t)
            this.getTimelineTargets(r).has(e) && this.scheduleRebuild(r);
      }
    };
  function ii(n, e) {
    n &&
      !n.hasVolatileValues &&
      (0, We.configHasVolatileValue)(e) &&
      (n.hasVolatileValues = !0);
  }
  function re(n) {
    if (n) {
      for (let e of n) e();
      n.clear();
    }
  }
});
var ci = O((Yn) => {
  "use strict";
  Object.defineProperty(Yn, "__esModule", { value: !0 });
  Object.defineProperty(Yn, "ConditionEvaluator", {
    enumerable: !0,
    get: function () {
      return Kn;
    },
  });
  var Pe = K(),
    Kn = class {
      getConditionEvaluator;
      sharedObservers = new Map();
      conditionCache = new Map();
      CACHE_TTL = 100;
      constructor(e) {
        this.getConditionEvaluator = e;
      }
      evaluateConditionsForTrigger = async (e, t) => {
        if (!e?.length) return !0;
        let r = e.some(([o]) => o === Pe.CORE_OPERATORS.OR);
        return this.evaluateCondition(
          [r ? Pe.CORE_OPERATORS.OR : Pe.CORE_OPERATORS.AND, { conditions: e }],
          t
        );
      };
      observeConditionsForTrigger = (e, t) => {
        if (!e?.length) return () => {};
        let r = [],
          o = [];
        for (let i of e)
          this.getConditionEvaluator(i)?.isReactive ?? !1
            ? r.push(i)
            : o.push(i[0]);
        if (r.length === 0) return () => {};
        let s = r.map((i) => this.getOrCreateSharedObserver(i, t));
        return () => {
          for (let i of s) i();
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
          } catch (o) {
            console.error("Error setting up condition observer:", o);
          }
      };
      getEvaluator = (e) => {
        let [t] = e;
        return t === Pe.CORE_OPERATORS.AND || t === Pe.CORE_OPERATORS.OR
          ? this.getLogicalEvaluator(t)
          : this.getConditionEvaluator(e);
      };
      getLogicalEvaluator = (e) => ({
        evaluate: async (t, r) => {
          let [, o, s] = t,
            { conditions: i } = o || {};
          if (!Array.isArray(i)) return !1;
          if (!i.length) return !0;
          let a = e === Pe.CORE_OPERATORS.OR,
            c = s === 1;
          for (let l of i) {
            let u = await this.evaluateCondition(l, r);
            if (a ? u : !u) return a ? !c : !!c;
          }
          return a ? !!c : !c;
        },
        observe: (t, r) => {
          let [, o] = t,
            { conditions: s } = o || {};
          if (!Array.isArray(s)) return () => {};
          let i = s.map((a) =>
            this.observeCondition(a, async () =>
              r(await this.evaluateCondition(t))
            )
          );
          return () => i.forEach((a) => a && a());
        },
      });
      evaluateCondition = async (e, t) => {
        let r = this.generateConditionCacheKey(e, t),
          o = Date.now(),
          s = this.conditionCache.get(r);
        if (s && o - s.timestamp < this.CACHE_TTL) return s.result;
        let i = this.getEvaluator(e);
        if (!i)
          return (
            console.warn(`No evaluator found for condition type '${e[0]}'`), !1
          );
        try {
          let a = await i.evaluate(e, t);
          return this.conditionCache.set(r, { result: a, timestamp: o }), a;
        } catch (a) {
          return console.error("Error evaluating condition:", a), !1;
        }
      };
      generateConditionCacheKey = (e, t) => {
        let [r, o, s] = e,
          i = o ? JSON.stringify(o) : "",
          a = s ? ":negate" : "",
          c = t ? `:ctx:${t.id}` : "";
        return `${r}:${i}${a}${c}`;
      };
      invalidateConditionCache = (e) => {
        let [t] = e,
          r = [];
        for (let o of this.conditionCache.keys())
          o.startsWith(`${t}:`) && r.push(o);
        r.forEach((o) => this.conditionCache.delete(o));
      };
      generateObserverKey = (e) => {
        let [t, r, o] = e,
          s = r ? JSON.stringify(r) : "";
        return `${t}:${s}${o ? ":negate" : ""}`;
      };
      getOrCreateSharedObserver = (e, t) => {
        let r = this.generateObserverKey(e),
          o = this.sharedObservers.get(r);
        if (!o) {
          let s = this.getEvaluator(e);
          if (!s?.observe) return () => {};
          let i = new Set(),
            a = s.observe(e, async () => {
              this.invalidateConditionCache(e);
              let c = Array.from(i, async (l) => {
                try {
                  await l();
                } catch (u) {
                  console.error("Error in shared observer callback:", u);
                }
              });
              await Promise.allSettled(c);
            });
          if (!a) return () => {};
          (o = { cleanup: a, refCount: 0, callbacks: i }),
            this.sharedObservers.set(r, o);
        }
        return (
          o.callbacks.add(t),
          o.refCount++,
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
          } catch (s) {
            console.error("Error cleaning up shared observer:", s);
          }
          this.sharedObservers.delete(e);
        }
      };
    };
});
var li = O((Qn) => {
  "use strict";
  Object.defineProperty(Qn, "__esModule", { value: !0 });
  Object.defineProperty(Qn, "ConditionalPlaybackManager", {
    enumerable: !0,
    get: function () {
      return Xn;
    },
  });
  var df = K(),
    Xn = class {
      matchMediaInstances = new Map();
      setupConditionalContext = (e, t, r) => {
        let { conditionalPlayback: o, triggers: s, id: i } = e;
        if (!o || o.length === 0) {
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
        let c = !0,
          l = s.some(
            ([, { controlType: u }]) => u === df.TimelineControlType.LOAD
          );
        a.add(this.buildConditionsObject(o), (u) => {
          if (l && !c) return !1;
          c = !1;
          let f = this.evaluateConditions(u.conditions || {}, o);
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
              (r.breakpoints || []).forEach((s) => {
                let i = pf[s];
                i && (t[`breakpoint_${s}`] = i);
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
              (i.breakpoints || []).some((l) => e[`breakpoint_${l}`]) &&
              r.push({ condition: i, type: "breakpoint" });
        if (r.length === 0) return null;
        let o = r.find(({ condition: i }) => i.behavior === "dont-animate");
        if (o)
          return {
            behavior: "dont-animate",
            matchedConditions: {
              prefersReduced: o.type === "prefers-reduced-motion",
              breakpointMatched: o.type === "breakpoint",
            },
          };
        let s = r[0];
        return {
          behavior: s.condition.behavior,
          matchedConditions: {
            prefersReduced: s.type === "prefers-reduced-motion",
            breakpointMatched: s.type === "breakpoint",
          },
        };
      }
    },
    pf = {
      tiny: "(max-width: 479px) and (min-width: 0px)",
      small: "(max-width: 767px) and (min-width: 480px)",
      medium: "(max-width: 991px) and (min-width: 768px)",
      main: "(min-width: 992px)",
    };
});
var fi = O((Jn) => {
  "use strict";
  Object.defineProperty(Jn, "__esModule", { value: !0 });
  Object.defineProperty(Jn, "PluginRegistry", {
    enumerable: !0,
    get: function () {
      return Zn;
    },
  });
  var hf = gt(),
    Zn = class {
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
          "roleAppliedQuery",
          "triggerContract",
        ].forEach((e) => this.extensionsByPoint.set(e, new Map()));
      }
      async registerPlugin(e) {
        let t = ui(e.manifest.id);
        if (this.plugins.has(t))
          throw new Error(`Plugin ${t} is already registered`);
        let r = Object.entries(e.manifest.dependencies ?? {});
        for (let [o] of r)
          if (!this.plugins.has(o))
            throw new Error(`Missing dependency: ${o} required by ${t}`);
        this.plugins.set(t, e), e.initialize && (await e.initialize());
        for (let o of e.extensions) this.registerExtension(o);
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
        t.set(r, e),
          e.extensionPoint === "triggerContract" &&
            (0, hf.registerTriggerContract)(r, e.implementation);
      }
      async activatePlugin(e) {
        if (this.activePlugins.has(e)) return;
        let t = this.plugins.get(e);
        if (!t) throw new Error(`Cannot activate unknown plugin: ${e}`);
        let r = Object.keys(t.manifest.dependencies ?? {});
        for (let o of r) await this.activatePlugin(o);
        t.activate && (await t.activate()), this.activePlugins.add(e);
      }
      async deactivatePlugin(e) {
        if (!this.activePlugins.has(e)) return;
        let t = this.plugins.get(e);
        if (!t) throw new Error(`Cannot deactivate unknown plugin: ${e}`);
        t.deactivate && (await t.deactivate()), this.activePlugins.delete(e);
      }
      async unregisterPlugin(e, t) {
        let r = ui([e, t]),
          o = this.plugins.get(r);
        if (o) {
          this.activePlugins.has(r) && (await this.deactivatePlugin(r));
          for (let s of o.extensions)
            s.extensionPoint === "condition" &&
              s.implementation.dispose &&
              (await s.implementation.dispose()),
              this.extensionsByPoint
                .get(s.extensionPoint)
                ?.delete(`${r}:${s.id}`);
          o.dispose && (await o.dispose()),
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
      getRoleAppliedQuery(e) {
        return this.getExtensionImpl(e, "roleAppliedQuery");
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
  function ui(n) {
    return `${n[0]}:${n[1]}`;
  }
});
var Ke = O((tr) => {
  "use strict";
  Object.defineProperty(tr, "__esModule", { value: !0 });
  Object.defineProperty(tr, "BaseTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return er;
    },
  });
  var er = class {
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
var pi = O((sr) => {
  "use strict";
  Object.defineProperty(sr, "__esModule", { value: !0 });
  Object.defineProperty(sr, "StandardTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return or;
    },
  });
  var nr = K(),
    gf = Ke();
  function di(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.type === "timeline-role" && typeof e.role == "string";
  }
  function mf(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.type === "playback-control" && typeof e.control == "string";
  }
  function rr(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.target instanceof HTMLElement && typeof e.type != "string";
  }
  var or = class extends gf.BaseTriggerStrategy {
    getTimelineIdsForRole;
    resolveAssignedTimelineIds;
    notifyRoleActivationObservers;
    isInInteractionScope;
    isRoleApplied;
    constructor(e, t, r, o, s, i, a, c) {
      super(e, t, r),
        (this.getTimelineIdsForRole = o),
        (this.resolveAssignedTimelineIds = s),
        (this.notifyRoleActivationObservers = i),
        (this.isInInteractionScope = a),
        (this.isRoleApplied = c);
    }
    bind(e, t, r) {
      let {
          interactionId: o,
          elements: s,
          triggerHandler: i,
          eventManager: a,
          conditionalContext: c,
          cleanupMap: l,
          delay: u,
        } = r,
        f = e[1];
      for (let d of s) {
        if (!d) continue;
        let p = l.get(d);
        p || ((p = new Set()), l.set(d, p));
        let h = new Map(),
          g = (b) => {
            let m = b.settles;
            return (
              (b.settles = []),
              m.length
                ? () => {
                    for (let w of m)
                      try {
                        w();
                      } catch (v) {
                        console.error(
                          "Error in activation completion callback:",
                          v
                        );
                      }
                  }
                : void 0
            );
          },
          y = (b) => {
            if (b)
              try {
                b();
              } catch (m) {
                console.error("Error in activation completion callback:", m);
              }
          },
          S = i(e, d, a, (b) => {
            let m = rr(b) ? b.target : d;
            if (m !== d && !this.isInInteractionScope(t, m)) return;
            let w = mf(b) ? b.control : void 0,
              v = di(b) ? b.onComplete : void 0,
              T,
              E;
            if (di(b))
              (T = b.role), (E = this.getTimelineIdsForRole(t, b.role));
            else {
              let { assignedGroupId: R, assignedTimelineRole: M } = e[1];
              (T = R === null || R ? void 0 : M),
                (E = this.resolveAssignedTimelineIds(e, t));
            }
            let _ = () =>
              rr(b) &&
              b.skipIfActive === !0 &&
              T !== void 0 &&
              this.isRoleApplied(t, T, e, m);
            if (rr(b)) {
              let R =
                  b.firstWins === !0 &&
                  t.triggers.some(
                    (C) => C !== e && (0, nr.hasPageLevelTriggerWon)(C)
                  ),
                M =
                  (E?.length === 0 && T === void 0) ||
                  c?.behavior === "dont-animate";
              if ((!R && !M && (0, nr.claimPageLevelTriggerWin)(e), R || _())) {
                y(v);
                return;
              }
            }
            if (E?.length === 0) {
              this.runTrigger(e, m, o, E, void 0, {
                onComplete: v,
                role: T,
              }).catch((R) => {
                console.error("Error in trigger execution:", R), y(v);
              });
              return;
            }
            if (c !== null) {
              if (c.behavior === "skip-to-end") {
                let R = [],
                  M = !1,
                  C = () => {
                    M ||
                      !T ||
                      ((M = !0),
                      this.notifyRoleActivationObservers(t, T, R, e, m));
                  };
                this.skipToEndState(t, m, f, E, w, C);
                for (let I of R)
                  try {
                    I();
                  } catch (k) {
                    console.error(
                      "Error in role activation settle callback:",
                      k
                    );
                  }
              }
              y(v);
              return;
            }
            let A = (R) => {
              this.runTrigger(e, m, o, E, w, { onComplete: R, role: T }).catch(
                (M) => {
                  console.error("Error in trigger execution:", M), R?.();
                }
              );
            };
            if (f.conditionalLogic || !u) A(v);
            else {
              let R = h.get(m);
              if (R && w === R.control && T === R.role) v && R.settles.push(v);
              else {
                R && (clearTimeout(R.timer), g(R)?.(), h.delete(m));
                let M = {
                  control: w,
                  role: T,
                  settles: v ? [v] : [],
                  timer: setTimeout(() => {
                    if ((h.delete(m), _())) {
                      g(M)?.();
                      return;
                    }
                    A(g(M));
                  }, u * 1e3),
                };
                h.set(m, M);
              }
            }
          });
        S && p.add(S),
          p.add(() => {
            for (let b of h.values()) clearTimeout(b.timer), g(b)?.();
            h.size > 0 && (0, nr.releasePageLevelTriggerFired)(e), h.clear();
          });
      }
    }
  };
});
var hi = O((ar) => {
  "use strict";
  Object.defineProperty(ar, "__esModule", { value: !0 });
  Object.defineProperty(ar, "LoadTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return ir;
    },
  });
  var yf = Ke(),
    ir = class extends yf.BaseTriggerStrategy {
      loadInteractions;
      getTimeline;
      constructor(e, t, r, o, s) {
        super(e, t, r), (this.loadInteractions = o), (this.getTimeline = s);
      }
      bind(e, t, r) {
        if (window.__wf_ix3) return;
        let { conditionalContext: o, delay: s } = r,
          i = e[1];
        this.loadInteractions.push(() => {
          if (o !== null) {
            o.behavior === "skip-to-end" && this.skipToEndState(t, null);
            return;
          }
          let a = () => {
            for (let c of t.timelineIds ?? []) {
              let l = this.getTimeline(c, null);
              l &&
                (l.data.splitLines
                  ? document.fonts.ready.then(() => {
                      this.runTimelineAction(c, i, null);
                    })
                  : this.runTimelineAction(c, i, null));
            }
          };
          s ? setTimeout(a, s * 1e3) : a();
        });
      }
    };
});
var gi = O((lr) => {
  "use strict";
  Object.defineProperty(lr, "__esModule", { value: !0 });
  Object.defineProperty(lr, "ScrollTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return cr;
    },
  });
  var Tf = Ke(),
    cr = class extends Tf.BaseTriggerStrategy {
      setupScrollControls;
      setupScrollDirectionPair;
      constructor(e, t, r, o, s) {
        super(e, t, r),
          (this.setupScrollControls = o),
          (this.setupScrollDirectionPair = s);
      }
      bind(e, t, r) {
        let { interactionId: o, elements: s, conditionalContext: i } = r,
          a = e[1].scrollTriggerConfig;
        if (!a) return;
        if (i !== null) {
          if (i.behavior === "skip-to-end")
            for (let d of s) d && this.skipToEndState(t, d);
          return;
        }
        let c = s.filter((d) => !!d);
        if (!c.length) return;
        if (a.split !== !0) {
          for (let d of c)
            for (let p of t.timelineIds ?? [])
              this.setupScrollControls(p, o, a, [d]);
          return;
        }
        let l = t.timelineIds ?? [],
          [u, f] = l;
        if (a.scrollDirection != null && u && f && l.length === 2) {
          this.setupScrollDirectionPair(u, f, o, a, c);
          return;
        }
        for (let d of l) this.setupScrollControls(d, o, a, c);
      }
    };
});
var mi = O((dr) => {
  "use strict";
  Object.defineProperty(dr, "__esModule", { value: !0 });
  Object.defineProperty(dr, "ContinuousChannelManager", {
    enumerable: !0,
    get: function () {
      return ur;
    },
  });
  var ur = class {
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
        let r = new fr(
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
      hasActions(e) {
        let t = this.resolveRole(e);
        return t ? this.coordinator.hasActions(t) : !1;
      }
      publishChannel(e, t, r) {
        this.coordinator.publishChannel(e, t, r);
      }
      cleanup() {
        for (let e of this.channels.values()) e.destroy();
        this.channels.clear();
      }
    },
    vf = "power2.out",
    fr = class {
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
                ease: vf,
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
var yi = O((hr) => {
  "use strict";
  Object.defineProperty(hr, "__esModule", { value: !0 });
  Object.defineProperty(hr, "ContinuousTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return pr;
    },
  });
  var bf = Ke(),
    Ef = mi();
  function Sf(n) {
    return n != null && "type" in n && n.type === "continuous";
  }
  var pr = class extends bf.BaseTriggerStrategy {
    continuousCleanups;
    triggerCleanupFunctions;
    coordinator;
    getTimelineIdForRole;
    constructor(e, t, r, o, s, i, a) {
      super(e, t, r),
        (this.continuousCleanups = o),
        (this.triggerCleanupFunctions = s),
        (this.coordinator = i),
        (this.getTimelineIdForRole = a);
    }
    bind(e, t, r) {
      let {
        interactionId: o,
        elements: s,
        triggerHandler: i,
        conditionalContext: a,
      } = r;
      for (let c of s) {
        if (!c) continue;
        if (a !== null) {
          a.behavior === "skip-to-end" && this.skipToEndState(t, c);
          continue;
        }
        let l = (d) => this.getTimelineIdForRole(t, d),
          u = new Ef.ContinuousChannelManager(this.coordinator, l),
          f = i(e, c, r.eventManager, (d) => {
            if (Sf(d)) {
              let p = d.setup(u),
                h = this.continuousCleanups.get(o);
              h || ((h = new Map()), this.continuousCleanups.set(o, h)),
                h.set(c, () => {
                  p(), u.cleanup();
                });
            }
          });
        if (f) {
          let d = this.triggerCleanupFunctions.get(o);
          d || ((d = new Map()), this.triggerCleanupFunctions.set(o, d));
          let p = d.get(c);
          p || ((p = new Set()), d.set(c, p)), p.add(f);
        }
      }
    }
  };
});
var Ei = O((gr) => {
  "use strict";
  Object.defineProperty(gr, "__esModule", { value: !0 });
  Object.defineProperty(gr, "IX3", {
    enumerable: !0,
    get: function () {
      return vt;
    },
  });
  var fe = K(),
    wf = Rs(),
    Of = ai(),
    Ti = Sn(),
    Af = ci(),
    _f = li(),
    If = fi(),
    J = ne(),
    Rf = pi(),
    Mf = hi(),
    Cf = gi(),
    Pf = yi();
  function xf(n) {
    if (n === !0) return !0;
    if (!Array.isArray(n)) return !1;
    let e = n[1];
    return (typeof e == "string" || Array.isArray(e)) && e.length > 0;
  }
  function kf(n) {
    let e = n[1].scrollTriggerConfig;
    return e?.split === !0 && xf(e.pin);
  }
  var Lf = 200,
    vi = 210,
    bi = "tl_pinonly_",
    mr = class {
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
          (this.pluginReg = new If.PluginRegistry()),
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
          }, Lf)),
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
          (this.eventMgr = wf.EventManager.getInstance()),
          (this.loadInteractions = []),
          (this.addEventListener = this.eventMgr.addEventListener.bind(
            this.eventMgr
          )),
          (this.emit = this.eventMgr.emit.bind(this.eventMgr)),
          (this.resolveTargets = (t, r, o) => {
            let s = o?.scope?.type === "component" ? o.scope : null,
              i = s?.componentId
                ? this.getComponentScopeSelector(s.componentId)
                : null,
              a = s?.variants?.length ? s.variants : null,
              c = o && r.interaction !== o ? { ...r, interaction: o } : r,
              l = this.resolveTargetsImpl(t, c, o, i),
              u = i ? !!this.pluginReg.getTargetResolver(t)?.isPageLevel : !1,
              f =
                i && r.triggerElement && !u
                  ? this.filterByInstance(l, i, r.triggerElement)
                  : l;
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
            for (let [o, s] of this.interactionTimelineRefs) {
              if (!this.activeInteractionIds.has(o)) continue;
              let i = !1;
              for (let c of t)
                if (s.has(c)) {
                  i = !0;
                  break;
                }
              if (!i) continue;
              let a = this.interactions.get(o);
              a && r.push(a);
            }
            return r;
          }),
          window.addEventListener("resize", this.debouncedWindowResize),
          (this.coordinator = new Of.AnimationCoordinator(
            this.timelineDefs,
            this.pluginReg.getActionHandler.bind(this.pluginReg),
            this.pluginReg.getTargetResolver.bind(this.pluginReg),
            this.resolveTargets,
            this.getInteractionForTimeline,
            this.getInteractionsForTimelines,
            e
          )),
          (this.conditionEval = new Af.ConditionEvaluator(
            this.pluginReg.getConditionEvaluator.bind(this.pluginReg)
          )),
          (this.conditionalPlaybackManager =
            new _f.ConditionalPlaybackManager()),
          (this.triggerStrategies = new Map([
            [
              fe.TimelineControlType.STANDARD,
              new Rf.StandardTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.getTimelineIdsForRole.bind(this),
                this.resolveAssignedTimelineIds.bind(this),
                this.notifyRoleActivationObservers.bind(this),
                this.isInInteractionScope.bind(this),
                this.isRoleApplied.bind(this)
              ),
            ],
            [
              fe.TimelineControlType.LOAD,
              new Mf.LoadTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.loadInteractions,
                this.coordinator.getTimeline.bind(this.coordinator)
              ),
            ],
            [
              fe.TimelineControlType.SCROLL,
              new Cf.ScrollTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.coordinator.setupScrollControls.bind(this.coordinator),
                this.coordinator.setupScrollDirectionPair.bind(this.coordinator)
              ),
            ],
            [
              fe.TimelineControlType.CONTINUOUS,
              new Pf.ContinuousTriggerStrategy(
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
        return (this.instance = new mr(e)), this.instance;
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
            let o = this.withPinOnlyTimeline(r);
            this.interactions.set(o.id, o);
            let s = new Set();
            this.interactionTimelineRefs.set(o.id, s),
              this.conditionalPlaybackManager.setupConditionalContext(
                o,
                (i) => {
                  this.resolversHeld.add(o.id),
                    i?.behavior !== "skip-to-end" &&
                      this.activeInteractionIds.add(o.id);
                  for (let p of o.timelineIds ?? [])
                    s.add(p),
                      this.incrementTimelineRefCount(p),
                      this.timelineToInteractionId.set(p, o.id);
                  let a = new Set(),
                    c = new Set(),
                    l = new Set(o.timelineIds ?? []),
                    u = (p) =>
                      this.coordinator.getReuseAliasesForSource(p).some((h) => {
                        let g = this.timelineRefCounts.get(h) ?? 0,
                          y = l.has(h) ? 1 : 0;
                        return g - y > 0;
                      }),
                    f = (p) => {
                      if (
                        !(
                          (this.timelineRefCounts.get(p) ?? 0) <=
                            (l.has(p) ? 1 : 0) && !u(p)
                        )
                      ) {
                        a.add(p);
                        for (let g of this.coordinator.dissolveSharedGroupForTimeline(
                          p
                        ))
                          c.add(g);
                      }
                    };
                  for (let p of l) {
                    f(p);
                    let h = this.coordinator.resolveSourceTimelineId(p);
                    h !== p && f(h);
                  }
                  let d = (0, Ti.analyzeSharedTimelineGroups)(
                    o,
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
                  for (let p of o.timelineIds ?? [])
                    c.has(p) || this.coordinator.createTimeline(p, o);
                  for (let p of o.triggers ?? []) this.bindTrigger(p, o, i);
                  this.recomputeFlipEaseForOwnSources(o);
                },
                () => {
                  this.cleanupInteractionAnimations(o.id);
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
                vi,
                { leading: !0, trailing: !1 }
              ),
              o = (0, J.debounce)(() => {
                if (
                  !(
                    this.windowSize.h !== this.prevWindowSize.h ||
                    this.windowSize.w !== this.prevWindowSize.w
                  )
                )
                  for (let a of this.coordinator.getScrollTriggers().values())
                    a.refresh();
              }, vi),
              s = (i) => {
                for (let a of i) a.target === document.body && (r(), o());
              };
            (this.bodyResizeObserver = new ResizeObserver(s)),
              document.body && this.bodyResizeObserver.observe(document.body);
          }
        }
        return this;
      }
      withPinOnlyTimeline(e) {
        if (e.timelineIds?.length || !e.triggers?.some(kf)) return e;
        let t = `${bi}${e.id}`;
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
          let o = this.decrementTimelineReferences(r);
          this.cleanupUnusedTimelines(o),
            this.timelineDefs.delete(`${bi}${r}`) &&
              this.coordinator.invalidateReuseAliasIndex();
          let s = this.interactions.get(r);
          for (let c of s?.triggers ?? [])
            this.lastRoutedTimelineIds.delete(c),
              this.lastActivatedRoles.delete(c),
              (0, fe.resetPageLevelTriggerState)(c);
          this.interactions.delete(r),
            this.triggeredElements.delete(r),
            this.interactionTimelineRefs.delete(r),
            this.activeInteractionIds.delete(r),
            s && this.recomputeFlipEaseForOwnSources(s),
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
          o = t ? (Array.isArray(t) ? t : [t]) : [];
        o.length && this.register([], o);
        for (let s of r) {
          let { id: i } = s;
          if (!this.interactions.has(i)) {
            console.warn(
              `Interaction with ID ${i} not found, registering as new.`
            ),
              this.register([s], []);
            continue;
          }
          this.remove(i), this.register([s], []);
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
        let o = t.id,
          s = this.pluginReg.getTriggerHandler(e),
          i = e[1];
        if (!s) {
          console.warn("No trigger handler:", e[0]);
          return;
        }
        let a = this.triggerCleanupFunctions.get(o) || new Map();
        this.triggerCleanupFunctions.set(o, a);
        let { delay: c = 0, controlType: l } = i,
          u = (0, J.toSeconds)(c),
          f = this.eventMgr,
          d = e[2],
          p = [];
        d && (p = this.resolveTargets(d, { trigger: e }, t));
        let h =
            l && (0, J.isValidControlType)(l)
              ? l
              : fe.TimelineControlType.STANDARD,
          g = this.triggerStrategies.get(h);
        g
          ? g.bind(e, t, {
              interactionId: o,
              elements: p,
              triggerHandler: s,
              eventManager: f,
              conditionalContext: r,
              cleanupMap: a,
              delay: u || 0,
            })
          : console.warn("No strategy found for control type:", l),
          i.conditionalLogic && this.setupTriggerReactiveMonitoring(e, t);
      }
      setupTriggerReactiveMonitoring(e, t) {
        let { conditionalLogic: r } = e[1];
        if (!r) return;
        let o = `${t.id}:${t.triggers.indexOf(e)}`;
        try {
          let s = this.conditionEval.observeConditionsForTrigger(
              r.conditions,
              async () => {
                await this.executeReactiveCallbackSafely(t.id, o, async () => {
                  if (
                    e[1].assignedInstances !== void 0 &&
                    !this.lastRoutedTimelineIds.has(e)
                  )
                    return;
                  let c =
                    (await this.conditionEval.evaluateConditionsForTrigger(
                      r.conditions,
                      t
                    ))
                      ? r.ifTrue
                      : r.ifFalse;
                  if (c) {
                    let l = this.triggeredElements.get(t.id);
                    if (!l) return;
                    let u = this.features.timelineGroups === !0,
                      f =
                        u && (0, Ti.triggerRoutesByCallbackRole)(e[0], e[1])
                          ? void 0
                          : this.resolveAssignedTimelineIds(e, t);
                    if (f?.length === 0) return;
                    let d = u ? this.lastRoutedTimelineIds.get(e) : void 0,
                      p = (g) => (u ? d?.get(g) : f ?? t.timelineIds ?? []),
                      h = [];
                    for (let g of l)
                      for (let y of p(g) ?? [])
                        h.push({
                          timelineId: y,
                          element: g,
                          action: "pause-reset",
                        });
                    await this.executeTimelineOperationsAsync(h),
                      l.forEach((g) => {
                        let y = u ? p(g) : f;
                        if (u && !y) return;
                        let { notifyObservers: S, settle: b } =
                          this.makeRoleActivationHooks(t, e, g);
                        this.executeConditionalOutcome(c, g, t, y, b, S);
                      });
                  }
                });
              }
            ),
            i = this.triggerObservers.get(t.id);
          i || ((i = new Map()), this.triggerObservers.set(t.id, i)),
            i.set(o, s);
        } catch (s) {
          console.error("Error setting up trigger reactive monitoring:", s);
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
        for (let [r, o] of e) {
          let s = r.split(":")[0];
          t.has(s) || t.set(s, []),
            t.get(s).push({ triggerKey: r, callback: o });
        }
        for (let [r, o] of t)
          await this.processInteractionReactiveUpdates(r, o);
      }
      async processInteractionReactiveUpdates(e, t) {
        let r = this.reactiveCallbackQueues.get(e);
        if (r)
          try {
            await r;
          } catch (s) {
            console.error("Error waiting for pending reactive callback:", s);
          }
        let o = this.executeInteractionUpdates(t);
        this.reactiveCallbackQueues.set(e, o);
        try {
          await o;
        } finally {
          this.reactiveCallbackQueues.get(e) === o &&
            this.reactiveCallbackQueues.delete(e);
        }
      }
      async executeInteractionUpdates(e) {
        for (let { triggerKey: t, callback: r } of e) {
          this.reactiveExecutionContext.add(t);
          try {
            await r();
          } catch (o) {
            console.error("Error in reactive callback for %s:", t, o);
          } finally {
            this.reactiveExecutionContext.delete(t);
          }
        }
      }
      async executeTimelineOperationsAsync(e) {
        if (e.length)
          return new Promise((t) => {
            Promise.resolve().then(() => {
              e.forEach(({ timelineId: r, element: o, action: s }) => {
                try {
                  if (!this.timelineDefs.has(r)) {
                    console.warn(`Timeline ${r} not found, skipping operation`);
                    return;
                  }
                  if (!o.isConnected) {
                    console.warn(
                      "Element no longer in DOM, skipping timeline operation"
                    );
                    return;
                  }
                  switch (s) {
                    case "pause-reset":
                      this.coordinator.pause(r, o, 0);
                      break;
                    default:
                      console.warn(`Unknown timeline action: ${s}`);
                  }
                } catch (i) {
                  console.error(
                    "Error executing timeline operation: %s, %s",
                    s,
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
          o = r.filter(
            (s) => this.timelineDefs.get(s)?.triggerMetadata?.role === t
          );
        if (o.length === 0 && r.length > 0) {
          let s = r
            .map(
              (i) => this.timelineDefs.get(i)?.triggerMetadata?.role || "none"
            )
            .join(", ");
          console.warn(
            `IX3: No timelines found for role '${t}' in interaction '${e.id}'. Available roles: [${s}]`
          );
        }
        return o;
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
      notifyRoleActivationObservers(e, t, r, o, s, i) {
        let a = this.triggerCleanupFunctions.get(e.id);
        if (!(!a || (i && a !== i)))
          for (let c of e.triggers ?? []) {
            let l = this.pluginReg.getRoleActivationObserver(c[0]);
            if (l)
              try {
                let u = c[2],
                  f = u
                    ? this.resolveTargets(
                        u,
                        s ? { trigger: c, triggerElement: s } : { trigger: c },
                        e
                      )
                    : [];
                if (f.length === 0) continue;
                let d = l(t, {
                  elements: f,
                  trigger: c,
                  causeTrigger: o,
                  causeElement: s,
                });
                d && r.push(d);
              } catch (u) {
                console.error(
                  "Error notifying role activation observer (target resolution or observer):",
                  c[0],
                  u
                );
              }
          }
      }
      isRoleApplied(e, t, r, o) {
        let s = !1;
        for (let i of e.triggers ?? []) {
          let a = this.pluginReg.getRoleAppliedQuery(i[0]),
            c = i[2];
          if (!(!a || !c))
            try {
              let l = this.resolveTargets(
                c,
                { trigger: i, triggerElement: o },
                e
              );
              if (l.length === 0) continue;
              let u = a(t, {
                elements: l,
                trigger: i,
                causeTrigger: r,
                causeElement: o,
              });
              if (u === !1) return !1;
              u === !0 && (s = !0);
            } catch (l) {
              return (
                console.error(
                  "Error asking role applied query (target resolution or query):",
                  i[0],
                  l
                ),
                !1
              );
            }
        }
        return s;
      }
      makeRoleActivationHooks(e, t, r) {
        let { assignedGroupId: o, assignedTimelineRole: s } = t[1],
          i =
            this.lastActivatedRoles.get(t)?.get(r) ??
            (o === null || o ? void 0 : s);
        if (!i || !this.hasRoleActivationObserver(e)) return {};
        let a = [],
          c = this.triggerCleanupFunctions.get(e.id);
        return {
          notifyObservers: () => {
            this.notifyRoleActivationObservers(e, i, a, t, r, c);
          },
          settle: () => {
            for (let l of a)
              try {
                l();
              } catch (u) {
                console.error("Error in role activation settle callback:", u);
              }
          },
        };
      }
      async runTrigger(e, t, r, o, s, i) {
        let a = i?.onComplete,
          c = i?.role,
          l = 0,
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
                } catch (A) {
                  console.error("Error in role activation settle callback:", A);
                }
            }
          };
        if (window.__wf_ix3) {
          d();
          return;
        }
        if (o?.length === 0) {
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
        let y = o ?? g.timelineIds ?? [];
        if (y.length === 0) {
          d();
          return;
        }
        l = y.length;
        let S = this.lastRoutedTimelineIds.get(e);
        S || this.lastRoutedTimelineIds.set(e, (S = new WeakMap())),
          S.set(t, y);
        let b = this.lastActivatedRoles.get(e);
        b || this.lastActivatedRoles.set(e, (b = new WeakMap())),
          c ? b.set(t, c) : b.delete(t);
        let m = !1,
          w = this.triggerCleanupFunctions.get(g.id),
          v = () => {
            m ||
              !c ||
              ((m = !0), this.notifyRoleActivationObservers(g, c, f, e, t, w));
          },
          T = a != null || (c != null && this.hasRoleActivationObserver(g)),
          E = () =>
            T
              ? () => {
                  --l <= 0 && d();
                }
              : void 0;
        try {
          if (p.conditionalLogic)
            try {
              let A = (await this.conditionEval.evaluateConditionsForTrigger(
                p.conditionalLogic.conditions,
                g
              ))
                ? p.conditionalLogic.ifTrue
                : p.conditionalLogic.ifFalse;
              A
                ? this.executeConditionalOutcome(A, t, g, y, T ? d : void 0, v)
                : d();
            } catch (_) {
              console.error("Error evaluating trigger conditional logic:", _);
              let A = E();
              y.forEach((R) => this.runTimelineAction(R, p, t, s, A, v));
            }
          else {
            let _ = E();
            y.forEach((A) => this.runTimelineAction(A, p, t, s, _, v));
          }
        } catch (_) {
          console.error("Error in trigger execution:", _), d();
        }
      }
      skipToEndState(e, t, r, o, s, i) {
        (o ?? e.timelineIds ?? []).forEach((c) => {
          let l =
              s ?? (r ? this.getEffectivePlaybackConfig(c, r).control : void 0),
            u = this.features.timelineGroups === !0,
            f = u ? void 0 : this.coordinator.getTimeline(c, t);
          if (
            (!u && !f) ||
            l === "pause" ||
            l === "stop" ||
            l === "none" ||
            ((f ??= this.coordinator.getTimeline(c, t)), !f)
          )
            return;
          let d;
          switch (l) {
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
              let p = l;
              d = 1;
              break;
            }
          }
          i?.(), this.coordinator.setTotalProgress(c, d, t ?? null);
        });
      }
      executeConditionalOutcome(e, t, r, o, s, i) {
        let {
            control: a,
            targetTimelineId: c,
            speed: l,
            jump: u,
            delay: f = 0,
          } = e,
          d = (0, J.toSeconds)(f);
        if (a === "none") {
          s?.();
          return;
        }
        let p = r.timelineIds ?? [],
          h;
        if (c) {
          if (!p.includes(c)) {
            console.warn(
              `Target timeline '${c}' not found in interaction '${
                r.id
              }'. Available timelines: ${p.join(", ")}`
            ),
              s?.();
            return;
          }
          h = [c];
        } else h = p;
        if (o) {
          let b = new Set(o);
          h = h.filter((m) => b.has(m));
        }
        if (h.length === 0) {
          s?.();
          return;
        }
        let g = h.length,
          y = s
            ? () => {
                --g <= 0 && s();
              }
            : void 0,
          S = () => {
            a !== "pause" && a !== "stop" && i?.(),
              h.forEach((b) => {
                l !== void 0 &&
                  (this.features.timelineGroups !== !0 ||
                    (a !== "pause" && a !== "stop")) &&
                  this.coordinator.setTimeScale(b, l, t);
                let m = (0, J.toSeconds)(u);
                switch (a) {
                  case "play":
                    this.coordinator.play(b, t, m);
                    break;
                  case "pause":
                    this.coordinator.pause(b, t, m);
                    break;
                  case "resume":
                    this.coordinator.resume(b, t, m);
                    break;
                  case "reverse":
                  case "reverseFlipEase":
                    this.coordinator.reverse(b, t, m);
                    break;
                  case "restart":
                    this.coordinator.restart(b, t);
                    break;
                  case "stop":
                    this.coordinator.pause(b, t, m);
                    break;
                  case "togglePlayReverse":
                  case "togglePlayReverseFlipEase":
                    this.coordinator.togglePlayReverse(b, t);
                    break;
                  default: {
                    this.coordinator.restart(b, t);
                    let w = a;
                    break;
                  }
                }
                y && this.notifyOnTimelineSettled(b, t, a, y);
              });
          };
        d
          ? setTimeout(() => {
              S();
            }, d * 1e3)
          : S();
      }
      getEffectivePlaybackConfig(e, t) {
        let r = this.timelineDefs.get(e);
        if (
          r &&
          (this.features.timelineGroups === !0
            ? r.triggerMetadata?.role != null
            : r.triggerMetadata)
        ) {
          let s = r.settings;
          return {
            control: s?.control,
            delay: s?.delay,
            jump: s?.jump,
            speed: s?.speed,
          };
        }
        let o =
          t.controlType && (0, J.isValidControlType)(t.controlType)
            ? t.controlType
            : fe.TimelineControlType.STANDARD;
        if (r?.groupId && o === fe.TimelineControlType.STANDARD) {
          let s = r.settings;
          return {
            control: t.control,
            delay: void 0,
            jump: s?.jump,
            speed: s?.speed,
          };
        }
        return {
          control: t.control,
          delay: void 0,
          jump: t.jump,
          speed: t.speed,
        };
      }
      runTimelineAction(e, t, r, o, s, i) {
        let {
            control: a,
            delay: c,
            jump: l,
            speed: u,
          } = this.getEffectivePlaybackConfig(e, t),
          f = o ?? a,
          d = this.timelineDefs.get(e);
        if (d?.reuse) {
          let y = d.reuse.sourceTimelineId;
          if (!this.timelineDefs.has(y)) {
            console.warn(`Timeline reuse: source '${y}' not found for '${e}'`),
              s?.();
            return;
          }
          e = y;
        }
        let p = () => {
            let y = this.features.timelineGroups === !0;
            if (y && f === "none") return;
            (!y || (f !== "pause" && f !== "stop")) &&
              this.coordinator.setTimeScale(e, u ?? 1, r);
            let S = (0, J.toSeconds)(l);
            switch (f) {
              case "play":
                this.coordinator.play(e, r, S);
                break;
              case "pause":
                this.coordinator.pause(e, r, S);
                break;
              case "resume":
                this.coordinator.resume(e, r, S);
                break;
              case "reverse":
              case "reverseFlipEase":
                this.coordinator.reverse(e, r, S);
                break;
              case "restart":
                this.coordinator.restart(e, r);
                break;
              case "togglePlayReverse":
              case "togglePlayReverseFlipEase":
                this.coordinator.togglePlayReverse(e, r);
                break;
              case "stop":
                this.coordinator.pause(e, r, S);
                break;
              case "none":
                break;
              case void 0:
                this.coordinator.restart(e, r);
                break;
              default: {
                let b = f;
                this.coordinator.restart(e, r);
                break;
              }
            }
          },
          h =
            s || i
              ? () => {
                  f !== "none" && f !== "pause" && f !== "stop" && i?.(),
                    p(),
                    s && this.notifyOnTimelineSettled(e, r, f, s);
                }
              : p,
          g = (0, J.toSeconds)(c);
        g && g > 0 ? setTimeout(h, g * 1e3) : h();
      }
      notifyOnTimelineSettled(e, t, r, o) {
        if (r === "pause" || r === "stop" || r === "none") {
          o();
          return;
        }
        let s = this.coordinator.getTimeline(e, t);
        if (!s) {
          o();
          return;
        }
        let i = s.reversed() ? "onReverseComplete" : "onComplete",
          a = i === "onReverseComplete" ? 0 : 1;
        if (!s.isActive() && s.totalProgress() === a) {
          o();
          return;
        }
        let c = s.eventCallback(i),
          l = !1,
          u,
          f = function (...d) {
            if (l) {
              c?.apply(this, d);
              return;
            }
            (l = !0), u?.(), s.eventCallback(i, c ?? null);
            try {
              c?.apply(this, d);
            } catch (p) {
              console.error(
                "Error in chained timeline completion callback:",
                p
              );
            }
            o();
          };
        s.eventCallback(i, f),
          (u = this.coordinator.registerCleanup(
            e,
            () => {
              l ||
                ((l = !0),
                s.eventCallback(i) === f && s.eventCallback(i, c ?? null),
                o());
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
      resolveTargetsImpl(e, t, r, o) {
        let [s, i, a] = e;
        if (i === "*" && a && a.filterBy) {
          let d = this.resolveUniversalSelectorOptimized(a, t, r, o);
          if (d) return d;
        }
        let c = this.pluginReg.getTargetResolver([s, i]);
        if (!c) return [];
        let l = c.resolve([s, i], t),
          u = o && !c.isPageLevel ? this.filterByScope(l, o) : l;
        if (!u.length || !a || a.relationship === "none" || !a.filterBy)
          return u;
        let f =
          t.anchorFilterToTrigger && t.triggerElement
            ? [t.triggerElement]
            : this.resolveTargetsImpl(a.filterBy, t, r, o);
        return this.applyRelationshipFilter(
          u,
          a.relationship,
          f,
          a.firstMatchOnly
        );
      }
      resolveUniversalSelectorOptimized(e, t, r, o) {
        if (!e.filterBy) return null;
        let s =
            t.anchorFilterToTrigger && t.triggerElement
              ? [t.triggerElement]
              : this.resolveTargetsImpl(e.filterBy, t, r, o),
          i = s.length;
        if (!i) return [];
        let a = !!e.firstMatchOnly;
        switch (e.relationship) {
          case "direct-child-of": {
            let c = [];
            for (let l = 0; l < i; l++) {
              let u = s[l];
              if (!u) continue;
              let f = u.children;
              for (let d = 0; d < f.length; d++)
                if ((c.push(f[d]), a)) return c;
            }
            return c;
          }
          case "within": {
            let c = [];
            for (let l = 0; l < i; l++) {
              let u = s[l];
              if (!u) continue;
              let f = u.querySelectorAll("*");
              for (let d = 0; d < f.length; d++)
                if ((c.push(f[d]), a)) return c;
            }
            return c;
          }
          case "direct-parent-of": {
            let c = new Set(),
              l = [];
            for (let u = 0; u < i; u++) {
              let f = s[u];
              if (!f) continue;
              let d = f.parentElement;
              if (d && !c.has(d) && (c.add(d), l.push(d), a)) break;
            }
            return o ? this.filterByScope(l, o) : l;
          }
          case "next-sibling-of": {
            let c = [];
            for (let l = 0; l < i; l++) {
              let u = s[l];
              if (!u) continue;
              let f = u.nextElementSibling;
              if (f && (c.push(f), a)) break;
            }
            return o ? this.filterByScope(c, o) : c;
          }
          case "prev-sibling-of": {
            let c = [];
            for (let l = 0; l < i; l++) {
              let u = s[l];
              if (!u) continue;
              let f = u.previousElementSibling;
              if (f && (c.push(f), a)) break;
            }
            return o ? this.filterByScope(c, o) : c;
          }
          case "next-to": {
            let c = new Set(),
              l = [];
            for (let u = 0; u < i; u++) {
              let f = s[u];
              if (!f) continue;
              let d = f.parentElement;
              if (d) {
                let p = d.children;
                for (let h = 0; h < p.length; h++) {
                  let g = p[h];
                  if (g !== f && !c.has(g) && (c.add(g), l.push(g), a)) break;
                }
                if (a && l.length) break;
              }
            }
            return o ? this.filterByScope(l, o) : l;
          }
          case "contains": {
            let c = new Set(),
              l = [];
            for (let u = 0; u < i; u++) {
              let f = s[u];
              if (!f) continue;
              let d = f.parentElement;
              for (; d && !(c.has(d) || (c.add(d), l.push(d), a)); )
                d = d.parentElement;
              if (a && l.length) break;
            }
            return o ? this.filterByScope(l, o) : l;
          }
          default:
            return null;
        }
      }
      applyRelationshipFilter(e, t, r, o) {
        if (!e.length || !r.length) return [];
        if (t === "none") return e;
        let s = [],
          i = new Set();
        switch (t) {
          case "direct-child-of": {
            let a = new Set(r);
            for (let c = 0; c < e.length; c++) {
              let l = e[c];
              if (
                !i.has(l) &&
                l.parentElement &&
                a.has(l.parentElement) &&
                (i.add(l), s.push(l), o)
              )
                return s;
            }
            return s;
          }
          case "direct-parent-of": {
            let a = new Set();
            for (let c = 0; c < r.length; c++) {
              let l = r[c].parentElement;
              l && a.add(l);
            }
            for (let c = 0; c < e.length; c++) {
              let l = e[c];
              if (!i.has(l) && a.has(l) && (i.add(l), s.push(l), o)) return s;
            }
            return s;
          }
          case "next-sibling-of": {
            let a = new Set(r);
            for (let c = 0; c < e.length; c++) {
              let l = e[c];
              if (i.has(l)) continue;
              let u = l.previousElementSibling;
              if (u && a.has(u) && (i.add(l), s.push(l), o)) return s;
            }
            return s;
          }
          case "prev-sibling-of": {
            let a = new Set(r);
            for (let c = 0; c < e.length; c++) {
              let l = e[c];
              if (i.has(l)) continue;
              let u = l.nextElementSibling;
              if (u && a.has(u) && (i.add(l), s.push(l), o)) return s;
            }
            return s;
          }
          case "next-to": {
            let a = new Set(r),
              c = new Map();
            for (let l = 0; l < r.length; l++) {
              let u = r[l].parentElement;
              u && c.set(u, (c.get(u) ?? 0) + 1);
            }
            for (let l = 0; l < e.length; l++) {
              let u = e[l];
              if (i.has(u) || !u.parentElement) continue;
              let f = c.get(u.parentElement);
              if (f && !(a.has(u) && f <= 1) && (i.add(u), s.push(u), o))
                return s;
            }
            return s;
          }
          case "within": {
            let a = new Set(r);
            for (let c = 0; c < e.length; c++) {
              let l = e[c];
              if (i.has(l)) continue;
              let u = l.parentElement;
              for (; u; ) {
                if (a.has(u)) {
                  if ((i.add(l), s.push(l), o)) return s;
                  break;
                }
                u = u.parentElement;
              }
            }
            return s;
          }
          case "contains": {
            let a = new Set();
            for (let c = 0; c < r.length; c++) {
              let l = r[c].parentElement;
              for (; l && !a.has(l); ) a.add(l), (l = l.parentElement);
            }
            for (let c = 0; c < e.length; c++) {
              let l = e[c];
              if (!i.has(l) && a.has(l) && (i.add(l), s.push(l), o)) return s;
            }
            return s;
          }
          default:
            return [];
        }
      }
      filterByInstance(e, t, r) {
        if (!e.length) return e;
        let o = r.closest(t);
        if (!o) return e;
        let s = -1;
        for (let a = 0; a < e.length; a++)
          if (e[a]?.closest(t) !== o) {
            s = a;
            break;
          }
        if (s === -1) return e;
        let i = e.slice(0, s);
        for (let a = s + 1; a < e.length; a++) {
          let c = e[a];
          c?.closest(t) === o && i.push(c);
        }
        return i;
      }
      filterByScope(e, t) {
        if (!e.length) return e;
        let r = -1;
        for (let s = 0; s < e.length; s++)
          if (!e[s]?.closest(t)) {
            r = s;
            break;
          }
        if (r === -1) return e;
        let o = e.slice(0, r);
        for (let s = r + 1; s < e.length; s++) {
          let i = e[s];
          i?.closest(t) && o.push(i);
        }
        return o;
      }
      filterByVariant(e, t, r) {
        if (!e.length) return e;
        let o = (a) => {
            let c = a.closest(t);
            if (!c) return !1;
            let l = c.getAttribute("data-wf-variant-state");
            return l != null && r.includes(l);
          },
          s = -1;
        for (let a = 0; a < e.length; a++) {
          let c = e[a];
          if (!c || !o(c)) {
            s = a;
            break;
          }
        }
        if (s === -1) return e;
        let i = e.slice(0, s);
        for (let a = s + 1; a < e.length; a++) {
          let c = e[a];
          c && o(c) && i.push(c);
        }
        return i;
      }
      isInInteractionScope(e, t) {
        let r = e.scope;
        if (r?.type !== "component" || !r.componentId) return !0;
        let o = this.getComponentScopeSelector(r.componentId);
        return (
          (r.variants?.length
            ? this.filterByVariant([t], o, r.variants)
            : this.filterByScope([t], o)
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
        for (let o of r) this.decrementTimelineRefCount(o) === 0 && t.add(o);
        return t;
      }
      unbindAllTriggers(e) {
        let t = this.triggerCleanupFunctions.get(e);
        if (t) {
          for (let [, r] of t)
            for (let o of r)
              try {
                o();
              } catch (s) {
                console.error("Error during trigger cleanup:", s);
              }
          this.triggerCleanupFunctions.delete(e);
        }
      }
      cleanupTriggerObservers(e) {
        let t = this.triggerObservers.get(e);
        if (t) {
          for (let [r, o] of t) {
            try {
              o();
            } catch (s) {
              console.error("Error during trigger observer cleanup:", s);
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
            } catch (o) {
              console.error("Error during continuous control cleanup:", o);
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
          for (let o of t)
            this.decrementTimelineRefCount(o) === 0 &&
              this.destroyTimelineInstance(o);
        let r = this.interactions.get(e);
        r && this.recomputeFlipEaseForOwnSources(r),
          this.resolversHeld.delete(e) &&
            (this.releaseTargetResolvers(e), this.releasedByTeardown.add(e)),
          this.triggeredElements.delete(e);
        for (let o of this.interactions.get(e)?.triggers ?? [])
          this.lastRoutedTimelineIds.delete(o),
            this.lastActivatedRoles.delete(o);
      }
    },
    vt = mr;
  at(vt, "instance");
});
var wi = O((yr) => {
  "use strict";
  Object.defineProperty(yr, "__esModule", { value: !0 });
  function Nf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Nf(yr, {
    EASING_NAMES: function () {
      return Df.EASING_NAMES;
    },
    IX3: function () {
      return Ff.IX3;
    },
    convertEaseConfigToGSAP: function () {
      return Si.convertEaseConfigToGSAP;
    },
    convertEaseConfigToLinear: function () {
      return Si.convertEaseConfigToLinear;
    },
  });
  var Ff = Ei(),
    Df = ne(),
    Si = Mn();
});
var Ai = O((Tr) => {
  "use strict";
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  function Vf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Vf(Tr, {
    BETA_FEATURES: function () {
      return Ye;
    },
    adminRequired: function () {
      return x;
    },
    betaFeaturesTestingLib: function () {
      return Gf;
    },
    getBetaFeatureDefinition: function () {
      return Bf;
    },
    isBetaFeatureFlag: function () {
      return jf;
    },
  });
  var x = [],
    Oi = [],
    Ye = {
      figma: { shortcut: x, scope: ["user"] },
      rssUrl: { shortcut: ["* r s s u r l"], scope: ["user"] },
      disableBlockers: { shortcut: ["* z o o m"], scope: ["user"] },
      peek: { shortcut: Oi, scope: ["user"] },
      ecShipStation: { shortcut: x, scope: ["user"] },
      betaception: { shortcut: Oi, scope: ["user"] },
      fileUpload: { shortcut: x, scope: ["user"] },
      customClassInRichText: { shortcut: ["* c c c"], scope: ["user"] },
      allowCustomSiteHeader: { shortcut: x, scope: ["site"] },
      showFastlyAsEdgeIPs: { shortcut: x, scope: ["site"] },
      useNewBillingSystem: { shortcut: x, scope: ["user"] },
      useUserTaxCollection: { shortcut: x, scope: ["user"] },
      useTeamTaxCollection: { shortcut: x, scope: ["workspace"] },
      auditCorruptedCheckout: { shortcut: ["* a e c o m"], scope: ["user"] },
      auditLazyImage: { shortcut: ["* a l a z y"], scope: ["user"] },
      lab: { shortcut: ["* l a b"], scope: ["user"] },
      logicFlowsV2: { shortcut: x, scope: ["user"] },
      logicDev: { shortcut: x, scope: ["user"] },
      logicEventTriggers: { shortcut: x, scope: ["site"] },
      disableWorkspaceAnnotationEmailNotifications: {
        shortcut: x,
        scope: ["workspace"],
      },
      hasEnterpriseSite: { shortcut: x, scope: ["workspace"] },
      isEnterprisePartner: { shortcut: x, scope: ["workspace"] },
      isEnterprise: { shortcut: x, scope: ["workspace"] },
      isEnterprisePro: { shortcut: x, scope: ["workspace"] },
      isEnterpriseLite: { shortcut: x, scope: ["workspace"] },
      isEnterpriseSite: { shortcut: x, scope: ["site"] },
      disableWorkspaceReviewEmailNotifications: {
        shortcut: x,
        scope: ["workspace"],
      },
      enableUnlimitedWorkspaceLibraries: { shortcut: x, scope: ["workspace"] },
      isEnterpriseLiteSite: { shortcut: x, scope: ["site"] },
      enterpriseCustomSslCert: { shortcut: x, scope: ["site"] },
      testSiteBeta: { shortcut: ["* t s"], scope: ["site"] },
      testWorkspaceBeta: { shortcut: x, scope: ["workspace"] },
      testUserAndWorkspaceBeta: { shortcut: x, scope: ["user", "workspace"] },
      dl: { shortcut: x, scope: ["user", "workspace"], open: !0 },
      rolesNWorkspaces: { shortcut: x, scope: ["user"] },
      reactQueryDevtools: { shortcut: x, scope: ["user"] },
      auditInputLabels: { shortcut: ["* l a b e l"], scope: ["user"] },
      auditFocusStyles: { shortcut: ["* f o c u s"], scope: ["user"] },
      dns01CertValidation: { shortcut: x, scope: ["site"] },
      enableReactDashboard: { shortcut: x, scope: ["user"] },
      focusWithin: { shortcut: ["* w i t h i n"], scope: ["user"] },
      trialSubscription: { shortcut: x, scope: ["site"] },
      pluginComponents: { shortcut: x, scope: ["site"] },
      thirdPartyLibrariesAuthoring: { shortcut: x, scope: ["site"] },
      localization: { shortcut: x, scope: ["site"] },
      localizationCanPublishLocales: { shortcut: x, scope: ["site"] },
      jank: { shortcut: ["* j a n k"], scope: ["user"] },
      aiHelpFollowUps: { shortcut: x, scope: ["workspace"] },
      enterpriseSiteActivityLogBeta: { shortcut: x, scope: ["workspace"] },
      marketplacePaymentsCreator: { shortcut: x, scope: ["workspace"] },
      disableBS: { shortcut: ["* d b s"], scope: ["user"] },
      optimize: { shortcut: x, scope: ["site"] },
      optimizeStandalone: { shortcut: x, scope: ["workspace"] },
      analyze: { shortcut: x, scope: ["site"] },
      testUserBeta: { shortcut: x, scope: ["user"] },
      testUserBeta2: { shortcut: x, scope: ["user"] },
      testOAuthAppBeta: { shortcut: x, scope: ["oauthApplication"] },
    },
    Bf = (n) => Ye[n];
  function jf(n) {
    return n in Ye;
  }
  var Gf = {
    addBetaFlag: function (e, t) {
      Ye[e] = t;
    },
    removeBetaFlag: function (e) {
      delete Ye[e];
    },
  };
});
var _i = O((vr) => {
  "use strict";
  Object.defineProperty(vr, "__esModule", { value: !0 });
  function Uf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Uf(vr, {
    createConstantsStore: function () {
      return $f;
    },
    selectAppName: function () {
      return qf;
    },
    selectReadOnly: function () {
      return Hf;
    },
  });
  var $f = (n) => {
      function e() {
        return n;
      }
      return { initialState: n, reducer: e };
    },
    qf = (n) => n.ConstantsStore.appName,
    Hf = (n) => n.ConstantsStore.readOnly;
});
var Ii = O((br) => {
  "use strict";
  Object.defineProperty(br, "__esModule", { value: !0 });
  Object.defineProperty(br, "WebflowEnvironments", {
    enumerable: !0,
    get: function () {
      return zf;
    },
  });
  var zf = Object.freeze({
    DESIGNER: "designer",
    SSR: "ssr",
    EXPORT: "export",
    LLM: "llm",
  });
});
var Mi = O((Ri) => {
  "use strict";
  Object.defineProperty(Ri, "__esModule", { value: !0 });
});
var Ci = O((Er) => {
  "use strict";
  Object.defineProperty(Er, "__esModule", { value: !0 });
  Object.defineProperty(Er, "TARGET_AI_SITE_GEN_LIBRARY_SLUG", {
    enumerable: !0,
    get: function () {
      return Wf;
    },
  });
  var Wf = "ai-gen-82921b10-4b39-48f0-b346-808cf4903d29";
});
var Ni = O((Sr) => {
  "use strict";
  Object.defineProperty(Sr, "__esModule", { value: !0 });
  function Kf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Kf(Sr, {
    instPathKey: function () {
      return xi;
    },
    instPathSetKey: function () {
      return Xf;
    },
    parseInstPathKey: function () {
      return ki;
    },
    parseInstPathSetKey: function () {
      return Qf;
    },
    readInstPath: function () {
      return Pi;
    },
    readInstPathsFromTriggers: function () {
      return Yf;
    },
  });
  function Pi(n) {
    if (!Array.isArray(n)) return null;
    let e = Array.isArray(n[0]) ? n[0] : n;
    if (!Array.isArray(e)) return null;
    let [t, r] = e;
    return typeof t == "string" && t !== "" && typeof r == "string" && r !== ""
      ? [t, r]
      : null;
  }
  function Yf(n, e, t) {
    let r = [];
    for (let o of n ?? []) {
      if (o[0] !== e) continue;
      let s = o[2];
      if (!Array.isArray(s) || s[0] !== t) continue;
      let i = Pi(s[1]);
      i && r.push(i);
    }
    return r;
  }
  function xi(n, e) {
    return `${n} ${e}`;
  }
  function ki(n) {
    let e = n.split(" ");
    return e.length === 2 && e[0] && e[1] ? [e[0], e[1]] : null;
  }
  var Li = "|";
  function Xf(n) {
    return n.map(([e, t]) => xi(e, t)).join(Li);
  }
  function Qf(n) {
    if (n === "") return [];
    let e = [];
    for (let t of n.split(Li)) {
      let r = ki(t);
      if (!r) return null;
      e.push(r);
    }
    return e;
  }
});
var Fi = O((wr) => {
  "use strict";
  Object.defineProperty(wr, "__esModule", { value: !0 });
  function Zf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Zf(wr, {
    POPOVER_ANIMATED_ATTRIBUTE: function () {
      return sd;
    },
    POPOVER_ANIMATION_CLOSE_COMMAND: function () {
      return ld;
    },
    POPOVER_ANIMATION_OPEN_COMMAND: function () {
      return cd;
    },
    POPOVER_BACKDROP_ANIMATED_ATTRIBUTE: function () {
      return td;
    },
    POPOVER_BACKDROP_ANIMATION_PROPERTY: function () {
      return ed;
    },
    POPOVER_BACKDROP_KEYFRAMES_PREFIX: function () {
      return nd;
    },
    POPOVER_CLASS: function () {
      return Jf;
    },
    POPOVER_COMMAND_EVENT: function () {
      return ad;
    },
    POPOVER_MASK_CLASS: function () {
      return rd;
    },
    POPOVER_MASK_FOR_ATTRIBUTE: function () {
      return od;
    },
    POPOVER_MODE_ATTRIBUTE: function () {
      return id;
    },
  });
  var Jf = "w-popover",
    ed = "--w-backdrop-animation",
    td = "data-w-popover-backdrop-animated",
    nd = "w-bd-",
    rd = "w-popover-mask",
    od = "data-w-popover-mask-for",
    sd = "data-w-popover-animated",
    id = "data-w-popover-mode",
    ad = "webflow:popover-command",
    cd = "animation-open",
    ld = "animation-close";
});
var Di = O((Or) => {
  "use strict";
  Object.defineProperty(Or, "__esModule", { value: !0 });
  function ud(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ud(Or, {
    MODAL_ANIMATED_ATTRIBUTE: function () {
      return hd;
    },
    MODAL_ANIMATION_CLOSE_COMMAND: function () {
      return yd;
    },
    MODAL_ANIMATION_OPEN_COMMAND: function () {
      return md;
    },
    MODAL_CLASS: function () {
      return fd;
    },
    MODAL_COMMAND_EVENT: function () {
      return gd;
    },
    MODAL_LOCK_SCROLL_ATTRIBUTE: function () {
      return pd;
    },
    MODAL_TRIGGER_CLASS: function () {
      return dd;
    },
  });
  var fd = "w-modal",
    dd = "w-modal-trigger",
    pd = "data-w-modal-lock-scroll",
    hd = "data-w-modal-animated",
    gd = "webflow:modal-command",
    md = "animation-open",
    yd = "animation-close";
});
var Xe = O((oe) => {
  "use strict";
  Object.defineProperty(oe, "__esModule", { value: !0 });
  de(Ai(), oe);
  de(_i(), oe);
  de(Ii(), oe);
  de(Mi(), oe);
  de(Ci(), oe);
  de(Ni(), oe);
  de(Fi(), oe);
  de(Di(), oe);
  function de(n, e) {
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
var Et = O((Rr) => {
  "use strict";
  Object.defineProperty(Rr, "__esModule", { value: !0 });
  function Td(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Td(Rr, {
    COMPONENT_INSTANCE_TRIGGER_KEYS: function () {
      return ji;
    },
    COMPONENT_TIMELINE_ROLES: function () {
      return Ud;
    },
    DEFAULT_DURATION_TRIGGER_MODE: function () {
      return Ad;
    },
    DEFAULT_DURATION_TRIGGER_SECONDS: function () {
      return _d;
    },
    DEFAULT_MOUSE_FOLLOW_ANCHOR: function () {
      return Sd;
    },
    DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE: function () {
      return wd;
    },
    DURATION_TRIGGER_MODES: function () {
      return Od;
    },
    DURATION_TRIGGER_SECONDS_RANGE: function () {
      return Ir;
    },
    HOVER_TIMELINE_ROLES: function () {
      return qd;
    },
    INST_PATH_TARGET_KEYS: function () {
      return Bi;
    },
    IX3_MODAL_STATE_EVENT: function () {
      return Md;
    },
    IX3_POPOVER_STATE_EVENT: function () {
      return Rd;
    },
    IX3_WF_EXTENSION_KEYS: function () {
      return Ar;
    },
    MODAL_ANIMATED_ATTRIBUTE: function () {
      return Vi.MODAL_ANIMATED_ATTRIBUTE;
    },
    MODAL_TIMELINE_ROLES: function () {
      return $d;
    },
    MOUSE_MOVE_CHANNELS: function () {
      return jd;
    },
    MOUSE_MOVE_TIMELINE_ROLES: function () {
      return xd;
    },
    POPOVER_ANIMATED_ATTRIBUTE: function () {
      return Vi.POPOVER_ANIMATED_ATTRIBUTE;
    },
    POPOVER_TIMELINE_ROLES: function () {
      return Ui;
    },
    TIMELINE_ROLE_NAMES: function () {
      return j;
    },
    TargetScope: function () {
      return _r;
    },
    VELOCITY_CAPABLE_PROPS: function () {
      return Gi;
    },
    canUseVelocityInfluenceProperty: function () {
      return Ld;
    },
    getEffectiveFollowMode: function () {
      return bd;
    },
    getMouseFollowConfig: function () {
      return vd;
    },
    getMouseMoveTimelineContext: function () {
      return bt;
    },
    getOppositeMouseFollowAxis: function () {
      return Dd;
    },
    getSingleAxisMouseFollowMode: function () {
      return Ed;
    },
    isComponentInstanceTriggerKey: function () {
      return Pd;
    },
    isInstPathTargetKey: function () {
      return Cd;
    },
    isMouseMoveIntervalRole: function () {
      return Nd;
    },
    isVelocityInfluenceEnabled: function () {
      return kd;
    },
    minimumDurationSeconds: function () {
      return Id;
    },
    mouseFollowAxisToRole: function () {
      return Vd;
    },
    mouseFollowRoleToAxis: function () {
      return Fd;
    },
    mouseFollowRoleToSiblingRole: function () {
      return Bd;
    },
    narrowMouseMoveIntervalPayload: function () {
      return Gd;
    },
  });
  var Vi = Xe(),
    Ar;
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
      (n.MODAL_ELEMENT = "wf:modal-element"),
      (n.MODAL_BACKDROP = "wf:modal-backdrop"),
      (n.STYLE = "wf:style"),
      (n.TRANSFORM = "wf:transform"),
      (n.CUSTOM_PROPERTY = "wf:custom-property"),
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
      (n.MODAL = "wf:modal"),
      (n.EXIT_INTENT = "wf:exit-intent"),
      (n.DURATION = "wf:duration"),
      (n.PREFERS_REDUCED_MOTION = "wf:prefersReducedMotion"),
      (n.WEBFLOW_BREAKPOINTS = "wf:webflowBreakpoints"),
      (n.CUSTOM_MEDIA_QUERY = "wf:customMediaQuery"),
      (n.COLOR_SCHEME = "wf:colorScheme"),
      (n.ELEMENT_DATA_ATTRIBUTE = "wf:elementDataAttribute"),
      (n.CURRENT_TIME = "wf:currentTime"),
      (n.ELEMENT_STATE = "wf:elementState");
  })(Ar || (Ar = {}));
  var _r;
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
  })(_r || (_r = {}));
  function vd(n) {
    let e = n?.properties?.["wf:mouse-follow"];
    if (!(typeof e != "object" || e === null || Array.isArray(e))) return e;
  }
  function bd(n) {
    return n?.followMode ?? "full";
  }
  function Ed(n) {
    return n === "x" ? "x-only" : "y-only";
  }
  var Sd = "50% 50%",
    wd = 100,
    Od = ["idle", "timeOnSite"],
    Ad = "timeOnSite",
    _d = 5,
    Ir = { min: 0, max: 3600 },
    Id = (n) => (n === "idle" ? Math.max(1, Ir.min) : Ir.min),
    Rd = "webflow:popover-state",
    Md = "webflow:modal-state",
    Bi = [
      "wf:inst",
      "wf:popover-element",
      "wf:popover-backdrop",
      "wf:modal-element",
      "wf:modal-backdrop",
    ];
  function Cd(n) {
    return Bi.includes(n);
  }
  var ji = ["wf:popover", "wf:modal"];
  function Pd(n) {
    return ji.includes(n);
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
  function bt(n) {
    return n === j.MOUSE_X
      ? { kind: "mouse-x", role: n, axis: "x", siblingRole: j.MOUSE_Y }
      : n === j.MOUSE_Y
      ? { kind: "mouse-y", role: n, axis: "y", siblingRole: j.MOUSE_X }
      : n === j.INTERVAL
      ? { kind: "interval", role: n }
      : { kind: "other", role: n ?? void 0 };
  }
  var xd = {
      MOUSE_X: { role: j.MOUSE_X, label: "Mouse X", usePercentCanvas: !0 },
      MOUSE_Y: { role: j.MOUSE_Y, label: "Mouse Y", usePercentCanvas: !0 },
      INTERVAL: { role: j.INTERVAL, label: "Interval" },
    },
    Gi = new Set([
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
  function kd(n) {
    return (
      n?.pluginConfig?.type === "mouseMove" &&
      !!n.pluginConfig.velocityInfluence
    );
  }
  function Ld(n) {
    return Gi.has(n);
  }
  function Nd(n) {
    return bt(n).kind === "interval";
  }
  function Fd(n) {
    let e = bt(n);
    return e.kind === "mouse-x" || e.kind === "mouse-y" ? e.axis : null;
  }
  function Dd(n) {
    return n === "x" ? "y" : "x";
  }
  function Vd(n) {
    return n === "x" ? j.MOUSE_X : j.MOUSE_Y;
  }
  function Bd(n) {
    let e = bt(n);
    return e.kind === "mouse-x" || e.kind === "mouse-y" ? e.siblingRole : null;
  }
  var jd = { POSITION: "wf:mouse-move:position", LEAVE: "wf:mouse-move:leave" };
  function Gd(n) {
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
  var Ud = {
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
    Ui = {
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
    $d = Ui,
    qd = {
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
var Wi = O((Pr) => {
  "use strict";
  Object.defineProperty(Pr, "__esModule", { value: !0 });
  function Hd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Hd(Pr, {
    createLoadedMouseFollowActionNormalizer: function () {
      return Jd;
    },
    forTestSuite: function () {
      return ep;
    },
    getGroupedMouseFollowConfig: function () {
      return Cr;
    },
    getUnpairedMouseFollowAction: function () {
      return Kd;
    },
    getUnpairedMouseFollowConfig: function () {
      return $i;
    },
    remapMouseFollowActionGroupsInTimelines: function () {
      return Zd;
    },
    setGroupedMouseFollowActionConfig: function () {
      return Wd;
    },
    setMouseFollowActionConfig: function () {
      return qi;
    },
    stripMouseFollowActionInstanceIds: function () {
      return Yd;
    },
    stripMouseFollowConfigInstanceIds: function () {
      return Mr;
    },
  });
  var St = Et();
  function Mr(n) {
    let { groupId: e, syncedActionId: t, ...r } = n;
    return r;
  }
  function zd(n, e) {
    return { ...Mr(n), groupId: e };
  }
  function Cr(n, e, t) {
    let r = zd(n, e);
    return (
      t?.axis !== void 0 && (r.axis = t.axis),
      t?.followMode !== void 0 && (r.followMode = t.followMode),
      r
    );
  }
  function $i(n, e = n.axis) {
    let { syncedActionId: t, ...r } = n,
      o =
        r.followMode === "full" && e
          ? (0, St.getSingleAxisMouseFollowMode)(e)
          : r.followMode;
    return { ...r, ...(o !== void 0 ? { followMode: o } : {}) };
  }
  function wt(n, e) {
    let t = (0, St.getMouseFollowConfig)(n);
    if (!t) return n;
    let r = e(t);
    return r === t
      ? n
      : {
          ...n,
          properties: {
            ...n.properties,
            [St.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: r,
          },
        };
  }
  function qi(n, e) {
    return {
      ...n,
      properties: {
        ...n.properties,
        [St.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: e,
      },
    };
  }
  function Wd(n, e, t, r) {
    return qi(n, Cr(e, t, r));
  }
  function Kd(n, e) {
    return wt(n, (t) => $i(t, e));
  }
  function Yd(n) {
    return wt(n, Mr);
  }
  function Xd(n, e, t) {
    return t[e] ? [n, e].sort().join(":") : `single:${n}`;
  }
  function Qd(n, e, t) {
    return (
      e.groupId ??
      (e.syncedActionId ? Xd(n, e.syncedActionId, t) : `single:${n}`)
    );
  }
  function Hi(n, e) {
    let t = {};
    return (r, o = r.id) =>
      wt(r, (s) => {
        let i = Qd(o, s, e),
          a = t[i] ?? n(i);
        return (t[i] = a), Cr(s, a);
      });
  }
  function zi(n, e, t) {
    let r = t ?? Object.fromEntries(n.map((s) => [s.id, s.id])),
      o = Hi(() => e(), r);
    return (s, i) => o(s, i ?? s.id);
  }
  function Zd(
    n,
    { generateGroupId: e, actionIdMap: t, mapAction: r = (o) => o }
  ) {
    let o = zi(
      n.flatMap((s) => s.actions ?? []),
      e,
      t
    );
    return n.map((s) => {
      let i = !1,
        a = s.actions?.map((c) => {
          let l = c.id,
            u = r(c),
            f = o(u, l);
          return (i = i || f !== c), f;
        });
      return i && a ? { ...s, actions: a } : s;
    });
  }
  function Jd(n) {
    let e = Object.fromEntries(n.map((r) => [r.id, r.id])),
      t = Hi((r) => r, e);
    return (r, o) => {
      let s = t(r);
      return o ? wt(s, (i) => (i.axis ? i : { ...i, axis: o })) : s;
    };
  }
  var ep = { createMouseFollowActionGroupRemapper: zi };
});
var Yi = O((xr) => {
  "use strict";
  Object.defineProperty(xr, "__esModule", { value: !0 });
  function tp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  tp(xr, {
    TRANSIENT_IX3_CLONE_ATTR: function () {
      return Ki;
    },
    isTransientIX3Clone: function () {
      return np;
    },
  });
  var Ki = "data-ix3-clone",
    np = (n) => !!n.closest?.(`[${Ki}]`);
});
var Zi = O((Lr) => {
  "use strict";
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  function rp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  rp(Lr, {
    mapInstTargetPageIds: function () {
      return xe;
    },
    mapIx3RowPageIds: function () {
      return ap;
    },
  });
  var Xi = Et(),
    op = (n) => {
      if (n === null || typeof n != "object") return !1;
      let e = Object.getPrototypeOf(n);
      return e === Object.prototype || e === null;
    };
  function kr(n, e) {
    if (!Array.isArray(n) || typeof n[0] != "string") return n;
    let t = e(n[0]);
    return t && t !== n[0] ? [t, ...n.slice(1)] : n;
  }
  function sp(n, e) {
    let t = !1,
      r = n.map((o) => {
        let s = kr(o, e);
        return (t ||= s !== o), s;
      });
    return t ? r : n;
  }
  function Qi(n, e) {
    if (!Array.isArray(n)) return n;
    if (Array.isArray(n[0])) {
      let t = kr(n[0], e);
      return t === n[0] ? n : [t, ...n.slice(1)];
    }
    return kr(n, e);
  }
  function xe(n, e) {
    if (Array.isArray(n)) {
      if (
        typeof n[0] == "string" &&
        (0, Xi.isInstPathTargetKey)(n[0]) &&
        n.length >= 2
      ) {
        let o = Qi(n[1], e),
          s = n.slice(2),
          i = xe(s, e);
        return o !== n[1] || i !== s ? [n[0], o, ...i] : n;
      }
      let t = !1,
        r = n.map((o) => {
          let s = xe(o, e);
          return (t ||= s !== o), s;
        });
      return t ? r : n;
    }
    if (op(n)) {
      if (
        typeof n.extensionKey == "string" &&
        (0, Xi.isInstPathTargetKey)(n.extensionKey) &&
        "value" in n
      ) {
        let o = n,
          s = Qi(o.value, e),
          i = xe(o.filterContext, e);
        if (s === o.value && i === o.filterContext) return n;
        let a = { ...o, value: s };
        return "filterContext" in o && (a.filterContext = i), a;
      }
      let t = !1,
        r = Object.entries(n).map(([o, s]) => {
          let i =
            o === "assignedInstances" && Array.isArray(s) ? sp(s, e) : xe(s, e);
          return (t ||= i !== s), [o, i];
        });
      return t ? Object.fromEntries(r) : n;
    }
    return n;
  }
  function ip(n, e) {
    return n
      .split("|")
      .map((t) => {
        let r = t.split(" "),
          o = r.length === 2 && r[0] ? e(r[0]) : null;
        return o ? `${o} ${r[1]}` : t;
      })
      .join("|");
  }
  function ap(n, e, { toId: t = (o) => o, unmappedScope: r = "keep" } = {}) {
    let o = { ...xe(n, e) };
    if (n.pageId != null) {
      let a = e(String(n.pageId));
      a && (o.pageId = t(a));
    }
    let s = n.componentSeed;
    typeof s?.setKey == "string" &&
      (o.componentSeed = { ...s, setKey: ip(s.setKey, e) });
    let i = n.scope;
    return (
      i?.type === "pages" &&
        Array.isArray(i.value) &&
        (o.scope = {
          ...i,
          value: i.value.flatMap((a) => {
            let c = a == null ? void 0 : e(String(a));
            return c ? [t(c)] : r === "keep" ? [a] : [];
          }),
        }),
      o
    );
  }
});
var ee = O((ve) => {
  "use strict";
  Object.defineProperty(ve, "__esModule", { value: !0 });
  Object.defineProperty(ve, "CORE_PLUGIN_INFO", {
    enumerable: !0,
    get: function () {
      return cp;
    },
  });
  Ot(Et(), ve);
  Ot(Wi(), ve);
  Ot(Yi(), ve);
  Ot(Zi(), ve);
  function Ot(n, e) {
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
  var cp = { namespace: "wf", pluginId: "core", version: "1.0.0" };
});
var Qe = O((Fr) => {
  "use strict";
  Object.defineProperty(Fr, "__esModule", { value: !0 });
  function lp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  lp(Fr, {
    getScrollY: function () {
      return dp;
    },
    initScrollCache: function () {
      return fp;
    },
    noop: function () {
      return up;
    },
  });
  var up = () => {},
    Nr = 0,
    At = 0,
    ke = null;
  function fp() {
    (At += 1),
      ke ||
        ((ke = () => {
          Nr = window.scrollY;
        }),
        (Nr = window.scrollY),
        window.addEventListener("scroll", ke, { passive: !0 }));
    let n = !1;
    return () => {
      n ||
        ((n = !0),
        (At = Math.max(0, At - 1)),
        At === 0 &&
          ke &&
          (window.removeEventListener("scroll", ke), (ke = null)));
    };
  }
  function dp() {
    return Nr;
  }
});
var Ji = O((Dr) => {
  "use strict";
  Object.defineProperty(Dr, "__esModule", { value: !0 });
  function pp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  pp(Dr, {
    getFirst: function () {
      return hp;
    },
    getSecond: function () {
      return gp;
    },
    pair: function () {
      return mp;
    },
  });
  var hp = (n) => n[0],
    gp = (n) => n[1],
    mp = (n, e) => [n, e];
});
var _t = O((Vr) => {
  "use strict";
  Object.defineProperty(Vr, "__esModule", { value: !0 });
  function yp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  yp(Vr, {
    TRANSIENT_IX3_CLONE_ATTR: function () {
      return ea.TRANSIENT_IX3_CLONE_ATTR;
    },
    isTransientIX3Clone: function () {
      return ea.isTransientIX3Clone;
    },
  });
  var ea = ee();
});
var jr = O((Br) => {
  "use strict";
  Object.defineProperty(Br, "__esModule", { value: !0 });
  function Tp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Tp(Br, {
    elementTargetSelector: function () {
      return Op;
    },
    safeClosest: function () {
      return Sp;
    },
    safeGetElementById: function () {
      return vp;
    },
    safeMatches: function () {
      return wp;
    },
    safeQuerySelector: function () {
      return Ep;
    },
    safeQuerySelectorAll: function () {
      return bp;
    },
  });
  var It = _t(),
    vp = (n) => {
      try {
        let e = document.getElementById(n);
        return e && !(0, It.isTransientIX3Clone)(e) ? e : null;
      } catch {
        return null;
      }
    },
    bp = (n, e) => {
      try {
        let t = e.querySelectorAll(n);
        if (t.length === 0) return [];
        let r = [];
        for (let o of t) (0, It.isTransientIX3Clone)(o) || r.push(o);
        return r;
      } catch {
        return null;
      }
    },
    Ep = (n, e) => {
      try {
        let t = e.querySelector(n);
        if (!t) return null;
        if (!(0, It.isTransientIX3Clone)(t)) return t;
        let r = e.querySelectorAll(n);
        for (let o of r) if (!(0, It.isTransientIX3Clone)(o)) return o;
        return null;
      } catch {
        return null;
      }
    },
    Sp = (n, e) => {
      try {
        return n.closest(e);
      } catch {
        return null;
      }
    },
    wp = (n, e) => {
      try {
        return n.matches(e);
      } catch {
        return null;
      }
    },
    Op = (n) => `[data-wf-target*="${CSS.escape(`[${JSON.stringify(n)}`)}"]`;
});
var ta = O((Gr) => {
  "use strict";
  Object.defineProperty(Gr, "__esModule", { value: !0 });
  Object.defineProperty(Gr, "applyScope", {
    enumerable: !0,
    get: function () {
      return _p;
    },
  });
  var le = ee(),
    Rt = jr(),
    Ap = _t(),
    se = (n) => n.filter((e) => !(0, Ap.isTransientIX3Clone)(e)),
    _p = (n, e) => {
      let t = se(n);
      if (!e) return t;
      if (Array.isArray(e)) {
        let [r, o] = e,
          s = [];
        switch (r) {
          case le.TargetScope.FIRST_ANCESTOR:
            for (let i of t) {
              let a = o ? (0, Rt.safeClosest)(i, o) : null;
              a && s.push(a);
            }
            return se(s);
          case le.TargetScope.FIRST_DESCENDANT:
            for (let i of t) {
              let a = o ? (0, Rt.safeQuerySelector)(o, i) : i.firstElementChild;
              a && s.push(a);
            }
            return se(s);
          case le.TargetScope.DESCENDANTS:
            for (let i of t)
              s.push(...((0, Rt.safeQuerySelectorAll)(o, i) || []));
            return se(s);
          case le.TargetScope.ANCESTORS:
            for (let i of t) {
              let a = i.parentElement;
              for (; a; )
                (!o || (0, Rt.safeMatches)(a, o)) && s.push(a),
                  (a = a.parentElement);
            }
            return se(s);
        }
      }
      switch (e) {
        case le.TargetScope.CHILDREN:
          return se(t.flatMap((r) => [...r.children]));
        case le.TargetScope.PARENT:
          return se(t.map((r) => r.parentElement).filter(Boolean));
        case le.TargetScope.SIBLINGS:
          return se(
            t.flatMap((r) =>
              r.parentElement
                ? [...r.parentElement.children].filter((o) => o !== r)
                : []
            )
          );
        case le.TargetScope.NEXT:
          return se(t.flatMap((r) => r.nextElementSibling || []));
        case le.TargetScope.PREVIOUS:
          return se(t.flatMap((r) => r.previousElementSibling || []));
        default:
          return t;
      }
    };
});
var ia = O((zr) => {
  "use strict";
  Object.defineProperty(zr, "__esModule", { value: !0 });
  function Ip(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Ip(zr, {
    backdropDeclarations: function () {
      return Hr;
    },
    buildBackdropTween: function () {
      return sa;
    },
    buildModalBackdropTween: function () {
      return Lp;
    },
  });
  var Ze = K(),
    Ur = ee(),
    pe = Xe(),
    Je = null,
    Rp = 0,
    qr = new WeakMap(),
    na = /random\(|[+\-*/]=|\/\*|[;{}]/,
    Le = (n, e) => (typeof n == "number" ? n + e : n),
    ra = { rotation: "", rotationZ: "", rotationX: "x ", rotationY: "y " };
  function Hr(n) {
    let e = "",
      t = [[], [], []],
      r = [],
      o = [],
      s,
      i,
      a;
    for (let l in n) {
      let u = n[l];
      if (
        (typeof u != "number" && typeof u != "string") ||
        (typeof u == "string" && na.test(u))
      )
        continue;
      let f = l[0] === "y" ? 1 : l[0] === "z" ? 2 : 0;
      if (l === "x" || l === "y" || l === "z") t[f].push(Le(u, "px"));
      else if (l === "xPercent" || l === "yPercent") t[f].push(Le(u, "%"));
      else if (l === "scale") r[2] = u;
      else if (l === "scaleX" || l === "scaleY") r[l === "scaleY" ? 1 : 0] = u;
      else if (l === "skewX" || l === "skewY")
        o[l === "skewY" ? 1 : 0] = Le(u, "deg");
      else if (l === "transformPerspective") s = Le(u, "px");
      else if (Object.prototype.hasOwnProperty.call(ra, l))
        a ??= { axis: ra[l], angle: Le(u, "deg") };
      else if (l === "width" || l === "height") e += `${l}:${Le(u, "px")};`;
      else {
        let d =
          l === "autoAlpha"
            ? "opacity"
            : l.replace(/[A-Z]/g, (p) => "-" + p.toLowerCase());
        if (na.test(d)) continue;
        e += `${d}:${u};`;
      }
    }
    if (t.some((l) => l.length)) {
      let l = t.map((d) =>
          d.length > 1 ? `calc(${d.join(" + ")})` : d[0] ?? "0"
        ),
        u = t[2].length > 0,
        f = (u ? l : l.slice(0, 2)).join(" ");
      u && s ? (i = `translate3d(${l.join(", ")})`) : (e += `translate:${f};`);
    }
    r.length && (e += `scale:${r[0] ?? r[2] ?? 1} ${r[1] ?? r[2] ?? 1};`),
      a && !s && (e += `rotate:${a.axis}${a.angle};`);
    let c = [
      s && `perspective(${s})`,
      i,
      s && a && `rotate${a.axis.trim().toUpperCase()}(${a.angle})`,
      o.length && `skew(${o[0] ?? 0}, ${o[1] ?? 0})`,
    ]
      .filter(Boolean)
      .join(" ");
    return c && (e += `transform:${c};`), e;
  }
  function Mp() {
    return (
      Je?.isConnected ||
        ((Je = document.createElement("style")), document.head.appendChild(Je)),
      Je.sheet
    );
  }
  function Cp(n) {
    let e = Je?.sheet;
    if (e)
      for (let t = e.cssRules.length - 1; t >= 0; t--)
        e.cssRules[t].name === n && e.deleteRule(t);
  }
  function Pp(n, e, t) {
    let r = Mp();
    if (!r) return !1;
    let o = `@keyframes ${n}{${e ? `from{${e}}` : ""}${t ? `to{${t}}` : ""}}`;
    try {
      r.insertRule(o, r.cssRules.length);
    } catch {
      return !1;
    }
    return !0;
  }
  var xp = (n) => `${n} 1s linear calc(var(--${n}, 1) * -1s) both paused`;
  function oa(n, e) {
    e.length
      ? (n.style.setProperty(
          pe.POPOVER_BACKDROP_ANIMATION_PROPERTY,
          e.map(xp).join(", ")
        ),
        n.setAttribute(pe.POPOVER_BACKDROP_ANIMATED_ATTRIBUTE, ""))
      : (n.style.removeProperty(pe.POPOVER_BACKDROP_ANIMATION_PROPERTY),
        n.removeAttribute(pe.POPOVER_BACKDROP_ANIMATED_ATTRIBUTE));
  }
  function kp(n, e, t) {
    let r = qr.get(n);
    r || qr.set(n, (r = []));
    let o = r.indexOf(e);
    if (o !== -1) {
      if (!t || o === r.length - 1) return;
      r.splice(o, 1);
    }
    r.push(e), oa(n, r);
  }
  function $r(n, e) {
    let t = qr.get(n),
      r = t ? t.indexOf(e) : -1;
    !t || r === -1 || (t.splice(r, 1), oa(n, t));
  }
  function sa(
    { timeline: n, tweenType: e, config: t, vars: r, targets: o, position: s },
    i = !1
  ) {
    let a =
        e === Ze.TweenType.From || e === Ze.TweenType.FromTo ? Hr(t.from) : "",
      c = e === Ze.TweenType.From ? "" : Hr(t.to);
    if (!a && !c) return;
    let l = `${pe.POPOVER_BACKDROP_KEYFRAMES_PREFIX}${++Rp}`;
    if (!Pp(l, a, c)) return;
    let u = `--${l}`,
      f = (m) => {
        for (let w of o)
          w.style.getPropertyValue(u) || w.style.setProperty(u, "0"),
            kp(w, l, m);
      },
      d = 0,
      p = !1,
      { force3D: h, ...g } = r,
      y = {
        ...g,
        onStart() {
          (p = !1), (d = this.progress?.() ?? d), f(!0);
        },
        onUpdate() {
          let m = this.progress?.() ?? d,
            w = m !== d && p !== m < d;
          m !== d && (p = m < d), (d = m), f(w || e === Ze.TweenType.Set);
        },
      };
    e === Ze.TweenType.Set
      ? n.set(o, { ...y, [u]: 1 }, s)
      : n.fromTo(o, { [u]: 0 }, { ...y, [u]: 1 }, s);
    let S = (m) => {
        m.newState === "open" && $r(m.currentTarget, l);
      },
      b = (m) => {
        let w = m.detail;
        (w?.state !== Ur.TIMELINE_ROLE_NAMES.OPEN &&
          w?.type !== pe.MODAL_ANIMATION_OPEN_COMMAND) ||
          $r(m.currentTarget, l);
      };
    for (let m of o)
      m.addEventListener("beforetoggle", S),
        i &&
          (m.addEventListener(Ur.IX3_MODAL_STATE_EVENT, b),
          m.addEventListener(pe.MODAL_COMMAND_EVENT, b));
    return () => {
      for (let m of o)
        m.removeEventListener("beforetoggle", S),
          i &&
            (m.removeEventListener(Ur.IX3_MODAL_STATE_EVENT, b),
            m.removeEventListener(pe.MODAL_COMMAND_EVENT, b)),
          $r(m, l),
          m.style.removeProperty(u);
      Cp(l);
    };
  }
  var Lp = (n) => sa(n, !0);
});
var Jr = O((Zr) => {
  "use strict";
  Object.defineProperty(Zr, "__esModule", { value: !0 });
  function Np(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Np(Zr, {
    build: function () {
      return Dp;
    },
    modalFromTriggerElement: function () {
      return ha;
    },
    popoverFromTriggerElement: function () {
      return pa;
    },
    popoversByPath: function () {
      return Ne;
    },
  });
  var ie = Ji(),
    Fe = ee(),
    G = Xe(),
    q = jr(),
    he = ta(),
    aa = ia();
  function pa(n, e) {
    if (!n) return null;
    let t = n.closest("." + G.POPOVER_MASK_CLASS);
    if (t) {
      let a = t.getAttribute(G.POPOVER_MASK_FOR_ATTRIBUTE),
        c = a ? (0, q.safeGetElementById)(a) : null;
      return c && e(c) ? c : null;
    }
    let o = n.closest("[popovertarget]")?.getAttribute("popovertarget"),
      s = o ? (0, q.safeGetElementById)(o) : null;
    if (s && e(s)) return s;
    let i = n.closest("." + G.POPOVER_CLASS);
    for (; i instanceof HTMLElement; ) {
      if (e(i)) return i;
      i = i.parentElement?.closest("." + G.POPOVER_CLASS) ?? null;
    }
    return null;
  }
  function ha(n, e) {
    if (!n) return null;
    let r = n.closest("[commandfor]")?.getAttribute("commandfor"),
      o = r ? (0, q.safeGetElementById)(r) : null;
    if (o?.classList.contains(G.MODAL_CLASS) && e(o)) return o;
    let s = n.closest("." + G.MODAL_CLASS);
    for (; s instanceof HTMLElement; ) {
      if (e(s)) return s;
      s = s.parentElement?.closest("." + G.MODAL_CLASS) ?? null;
    }
    return null;
  }
  var ca = (n, e) =>
      (0, G.readInstPathsFromTriggers)(
        n?.triggers,
        e,
        Fe.IX3_WF_EXTENSION_KEYS.INST
      ),
    la = {
      triggerKey: Fe.IX3_WF_EXTENSION_KEYS.POPOVER,
      fromTriggerElement: pa,
    },
    ua = { triggerKey: Fe.IX3_WF_EXTENSION_KEYS.MODAL, fromTriggerElement: ha };
  function Fp(n) {
    let e = [];
    for (let t of n?.triggers ?? []) {
      if (
        t[2]?.[0] !== Fe.IX3_WF_EXTENSION_KEYS.POPOVER_BACKDROP ||
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
  var et = new WeakMap(),
    Yr = new Set();
  function Xr(n) {
    let e = n.nextElementSibling;
    return e instanceof HTMLElement &&
      e.classList.contains(G.POPOVER_MASK_CLASS) &&
      e.getAttribute(G.POPOVER_MASK_FOR_ATTRIBUTE) === n.id
      ? e
      : null;
  }
  function fa(n) {
    let e = document.createElement("div");
    return (
      (e.className = G.POPOVER_MASK_CLASS),
      e.setAttribute("popover", "manual"),
      e.setAttribute(G.POPOVER_MASK_FOR_ATTRIBUTE, n.id),
      e.setAttribute("aria-hidden", "true"),
      n.after(e),
      e
    );
  }
  function Wr(n, e) {
    if (!n || !Yr.has(n)) return;
    let t = (0, q.safeQuerySelectorAll)("." + G.POPOVER_MASK_CLASS, document);
    if (t?.length)
      for (let r of t) {
        let o = r.previousElementSibling;
        if (!(o instanceof HTMLElement) || Xr(o) !== r) {
          if (r.hasAttribute(G.POPOVER_MASK_FOR_ATTRIBUTE)) {
            let s = r.getAttribute(G.POPOVER_MASK_FOR_ATTRIBUTE),
              i = s ? (0, q.safeGetElementById)(s) : null;
            i && !Xr(i) && et.get(i)?.clear(), r.remove();
          }
          continue;
        }
        e.indexOf(o) === -1 && et.get(o)?.has(n) && ga(o, n, !1);
      }
    (!e.length || !e.some((r) => et.get(r)?.has(n))) && Yr.delete(n);
  }
  function ga(n, e, t) {
    let r = Xr(n);
    if (!e) return r ?? (t ? fa(n) : null);
    let o = et.get(n) ?? new Set();
    return (
      et.set(n, o),
      t ? (o.add(e), Yr.add(e)) : o.delete(e),
      o.size > 0 ? r ?? fa(n) : (r?.remove(), null)
    );
  }
  function Ne(n, e) {
    let t = (0, q.safeQuerySelectorAll)(
      (0, q.elementTargetSelector)((0, ie.pair)(n, e)),
      document
    );
    return t?.length ? [...t] : [];
  }
  var Qr = (n) => JSON.stringify(n === Fe.TargetScope.ALL ? null : n ?? null),
    Kr = (n) => !!n?.filterBy && n?.relationship !== "none",
    da = (n) => `trigger-parent|${Qr(n)}`;
  function Dp(n) {
    let e = [],
      t = (u) => {
        let f = new Set(),
          d = [];
        for (let [p, h] of u)
          for (let g of Ne(p, h)) f.has(g) || (f.add(g), d.push(g));
        return d;
      },
      r = (u, f) =>
        f != null &&
        (0, q.safeMatches)(
          u,
          (0, q.elementTargetSelector)((0, ie.pair)(f[0], f[1]))
        ) === !0,
      o = (u, f) => u.some((d) => r(f, [d[0], d[1]])),
      s = (u, f, d, p, h, g) => {
        if (d || p || !h || h[0] === g || f.length <= 1) return null;
        let y = new Set(),
          S = [];
        for (let [b, m] of f) {
          let w = r(u, [b, m]) ? [u] : Ne(b, m);
          for (let v of w) y.has(v) || (y.add(v), S.push(v));
        }
        return S;
      },
      i = (u, f, d, p, h, g) => {
        let y = ca(d, g.triggerKey),
          S = (0, G.readInstPath)(u),
          b =
            S && (!y.length || y.some((v) => v[0] === S[0] && v[1] === S[1]))
              ? S
              : null,
          m = (p ?? h)?.[1]?.assignedInstances,
          w = g.fromTriggerElement(
            f,
            (v) => (!m || o(m, v)) && (r(v, b) || y.some((T) => r(v, T)))
          );
        return w
          ? s(w, y, m, p, h, g.triggerKey) ?? [w]
          : m
          ? (y.length ? t(y) : b ? Ne(b[0], b[1]) : e).filter((T) => o(m, T))
          : !p && h && h[0] !== g.triggerKey && y.length
          ? t(y)
          : b
          ? Ne(b[0], b[1])
          : t(y);
      },
      a = (u, f, d, p, h, g, y) => {
        let S = ca(p, u.triggerKey),
          b = u.fromTriggerElement(
            d,
            (w) => (!h || o(h, w)) && S.some((v) => r(w, v))
          );
        if (b) return s(b, S, h, g, y, u.triggerKey) ?? [b];
        if (S.length) return t(S);
        let m = (0, G.readInstPath)(f);
        return m ? Ne(m[0], m[1]) : e;
      },
      c = (u, f) => {
        let d = f?.scope;
        if (d?.type !== "component" || !d.componentId) return !0;
        let p = (0, q.safeClosest)(
          u.parentElement ?? u,
          `[data-wf-component-id="${CSS.escape(d.componentId)}"]`
        );
        if (!p) return !1;
        if (!d.variants?.length) return !0;
        let h = p.getAttribute("data-wf-variant-state");
        return h != null && d.variants.includes(h);
      };
    n.addTargetResolver("id", {
      resolve: ([, u]) => {
        let [f, d] = Array.isArray(u) ? u : [u],
          p = f ? (0, q.safeGetElementById)(f) : null;
        return p ? (0, he.applyScope)([p], d) : e;
      },
    })
      .addTargetResolver("trigger-only", {
        resolve: ([, u], { triggerElement: f }) =>
          f ? (0, he.applyScope)([f], Array.isArray(u) ? u[1] : void 0) : e,
        isDynamic: !0,
        instanceSharingKey: ([, u, f]) => {
          if (Kr(f)) return;
          let d = Array.isArray(u) ? u[1] : void 0;
          return d === Fe.TargetScope.PARENT ? da(void 0) : `trigger|${Qr(d)}`;
        },
      })
      .addTargetResolver("trigger-only-parent", {
        resolve: ([, u], { triggerElement: f }) => {
          if (!f) return e;
          let d = f.parentElement;
          return d instanceof HTMLElement
            ? (0, he.applyScope)([d], Array.isArray(u) ? u[1] : void 0)
            : e;
        },
        isDynamic: !0,
        instanceSharingKey: ([, u, f]) =>
          Kr(f) ? void 0 : da(Array.isArray(u) ? u[1] : void 0),
      })
      .addTargetResolver("inst", {
        resolve: ([, u], { triggerElement: f }) => {
          if (!Array.isArray(u)) return e;
          let [d, p] = u,
            h = Array.isArray(d),
            g = h ? (0, ie.pair)(d[0], d[1]) : (0, ie.pair)(d, p),
            y = (0, q.safeQuerySelectorAll)(
              (0, q.elementTargetSelector)(g),
              document
            );
          if (!y?.length) return e;
          let S = [...y];
          if (!f) return (0, he.applyScope)(S, h ? p : void 0);
          let b = f.dataset.wfTarget;
          if (!b) return S;
          try {
            let m = JSON.parse(b),
              w = (0, ie.getFirst)(g),
              v = m.find((T) => (0, ie.getFirst)((0, ie.getFirst)(T)) === w);
            return v
              ? (0, he.applyScope)(
                  S.filter((T) =>
                    (T.dataset.wfTarget || "").includes(
                      `${JSON.stringify((0, ie.getSecond)(v))}]`
                    )
                  ),
                  h ? p : void 0
                )
              : e;
          } catch {
            return e;
          }
        },
        isDynamic: !0,
        instanceSharingKey: ([, u, f]) => {
          if (Kr(f) || !Array.isArray(u)) return;
          let [d, p] = u,
            h = Array.isArray(d),
            g = h ? (0, ie.pair)(d[0], d[1]) : (0, ie.pair)(d, p);
          return `inst|${JSON.stringify(g)}|${Qr(h ? p : void 0)}`;
        },
      })
      .addTargetResolver("class", {
        resolve: ([, u]) => {
          let [f, d] = Array.isArray(u) ? u : [u],
            p = f ? (0, q.safeQuerySelectorAll)(`.${f}`, document) : null;
          return p ? (0, he.applyScope)([...p], d) : e;
        },
      })
      .addTargetResolver("selector", {
        resolve: ([, u]) => {
          let [f, d] = Array.isArray(u) ? u : [u],
            p = f ? (0, q.safeQuerySelectorAll)(f, document) : null;
          return p ? (0, he.applyScope)([...p], d) : e;
        },
      })
      .addTargetResolver("body", {
        resolve: () => [document.body],
        isPageLevel: !0,
      })
      .addTargetResolver("attribute", {
        resolve: ([, u]) => {
          let [f, d] = Array.isArray(u) ? u : [u],
            p = f ? (0, q.safeQuerySelectorAll)(f, document) : null;
          return p ? (0, he.applyScope)([...p], d) : e;
        },
      })
      .addTargetResolver("any-element", { resolve: () => e })
      .addTargetResolver("viewport", {
        resolve: () => [document.documentElement],
        isPageLevel: !0,
      });
    let l = {
      popover: {
        targets: la,
        backdropResolver: {
          resolve: (
            [, u],
            { triggerElement: f, interaction: d, trigger: p, causeTrigger: h }
          ) => {
            let g = (p ?? h)?.[1]?.assignedInstances,
              y = a(la, u, f, d, g, p, h);
            if (!y.length) return f || Wr(d?.id, []), e;
            let S = Fp(d),
              b = [],
              m = [];
            for (let w of y) {
              if (!w.id || !c(w, d)) continue;
              b.push(w);
              let v = S.some((E) => !E || o(E, w)),
                T = ga(w, d?.id, v);
              T && (!g || o(g, w)) && m.push(T);
            }
            return (
              f || Wr(d?.id, b),
              p ? (m.length ? m : e) : g ? y.filter((w) => o(g, w)) : y
            );
          },
          buildTween: aa.buildBackdropTween,
          release: (u) => Wr(u, []),
          isDynamic: !0,
        },
      },
      modal: {
        targets: ua,
        backdropResolver: {
          resolve: (
            [, u],
            { triggerElement: f, interaction: d, trigger: p, causeTrigger: h }
          ) => {
            let g = (p ?? h)?.[1]?.assignedInstances,
              y = a(ua, u, f, d, g, p, h);
            return g ? y.filter((S) => o(g, S)) : y;
          },
          buildTween: aa.buildModalBackdropTween,
          isDynamic: !0,
        },
      },
    };
    for (let u of Object.keys(l)) {
      let { targets: f, backdropResolver: d } = l[u];
      n.addTargetResolver(`${u}-element`, {
        resolve: (
          [, p],
          { triggerElement: h, interaction: g, trigger: y, causeTrigger: S }
        ) => i(p, h, g, y, S, f),
        isDynamic: !0,
      }).addTargetResolver(`${u}-backdrop`, d);
    }
  }
});
var ya = O((to) => {
  "use strict";
  Object.defineProperty(to, "__esModule", { value: !0 });
  Object.defineProperty(to, "TouchScrollGuard", {
    enumerable: !0,
    get: function () {
      return eo;
    },
  });
  var ma = Qe();
  function Vp(n) {
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
  var eo = class {
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
      let o = (0, ma.initScrollCache)();
      t.addEventListener("abort", o);
      let s = (c) => {
          let l = c.touches[0];
          l &&
            ((this.refX = l.clientX),
            (this.refY = l.clientY),
            (this.lastY = l.clientY),
            (this.locked = null),
            (this.effectFromBoundary = !1),
            (this.isScrolling = !1),
            (this.scroller = Vp(c.target ?? e)),
            (this.maxScroll = this.scroller
              ? this.scroller.scrollHeight - this.scroller.clientHeight
              : document.documentElement.scrollHeight - window.innerHeight));
        },
        i = (c) => {
          let l = c.touches[0];
          if (!l) return;
          let u = l.clientY,
            f = l.clientX - this.refX,
            d = u - this.refY,
            p = u > this.lastY,
            h = u < this.lastY,
            g = this.scroller ? this.scroller.scrollTop : (0, ma.getScrollY)(),
            y = this.maxScroll,
            S = g <= 1 && p,
            b = y > 0 && g >= y - 1 && h;
          this.locked === null && this.decide(f, d, S || b),
            this.locked === "scroll" &&
              (S || b) &&
              ((this.refX = l.clientX),
              (this.refY = u),
              (this.locked = "effect"),
              (this.effectFromBoundary = !0)),
            this.locked === "effect" &&
              this.effectFromBoundary &&
              !(S || b) &&
              ((this.refX = l.clientX),
              (this.refY = u),
              (this.locked = null),
              (this.effectFromBoundary = !1)),
            (this.lastY = u),
            (this.isScrolling =
              this.locked === "scroll" ||
              this.locked === null ||
              (this.locked === "effect" && !c.cancelable && !(S || b))),
            this.locked === "effect" && c.cancelable && c.preventDefault();
        },
        a = () => {
          (this.locked = null), (this.isScrolling = !1);
        };
      e.addEventListener("touchstart", s, { passive: !0, signal: t }),
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
var Ta = O((ro) => {
  "use strict";
  Object.defineProperty(ro, "__esModule", { value: !0 });
  Object.defineProperty(ro, "VelocityController", {
    enumerable: !0,
    get: function () {
      return no;
    },
  });
  var Bp = {
    adaptiveMax: 2800,
    adaptAlpha: 0.05,
    adaptDecay: 0.99,
    hardMin: 600,
    hardMax: 4e3,
  };
  function jp(n, e) {
    let t = Math.max(e.hardMin, Math.min(e.hardMax, n));
    (e.adaptiveMax = Math.max(t, e.adaptiveMax * e.adaptDecay)),
      (e.adaptiveMax += (t - e.adaptiveMax) * e.adaptAlpha),
      (e.adaptiveMax = Math.max(e.hardMin, Math.min(e.hardMax, e.adaptiveMax)));
  }
  var Gp = (n) => n * n;
  function Up(n, e, t, r) {
    let o = Math.hypot(n, e);
    jp(o, t);
    let s = Math.max(1, t.adaptiveMax),
      i = Gp(Math.min(1, o / s)),
      a = 0,
      c = 0;
    return (
      r.x && r.y
        ? o > 0 && ((a = n / o), (c = e / o))
        : r.x
        ? n !== 0 && (a = Math.sign(n))
        : r.y && e !== 0 && (c = Math.sign(e)),
      { n: i, dirX: a, dirY: c }
    );
  }
  var no = class {
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
        (this.velState = { ...Bp }),
        (this.lastDirX = 0),
        (this.lastDirY = 0),
        (this.lastNormVelocity = 0);
    }
    update(e, t) {
      let {
        n: r,
        dirX: o,
        dirY: s,
      } = Up(e, t, this.velState, this.config.axes);
      (this.lastNormVelocity = r), (this.lastDirX = o), (this.lastDirY = s);
    }
    reset() {
      (this.lastDirX = 0), (this.lastDirY = 0), (this.lastNormVelocity = 0);
    }
    destroy() {
      this.reset();
    }
  };
});
var va = O((so) => {
  "use strict";
  Object.defineProperty(so, "__esModule", { value: !0 });
  Object.defineProperty(so, "IntervalController", {
    enumerable: !0,
    get: function () {
      return oo;
    },
  });
  var $p = ee(),
    qp = 16,
    oo = class {
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
        let { x: t, y: r, velocityFactor: o, dirX: s, dirY: i } = e;
        if (!this.initialized) {
          (this.lastX = t), (this.lastY = r), (this.initialized = !0);
          return;
        }
        let a = t - this.lastX,
          c = r - this.lastY;
        (this.lastX = t), (this.lastY = r);
        let { axes: l, distance: u } = this.config;
        l.x && l.y
          ? (this.accum += Math.hypot(a, c))
          : l.x
          ? (this.accum += Math.abs(a))
          : l.y && (this.accum += Math.abs(c));
        let f = 0;
        for (; this.accum >= u && f < qp; ) {
          this.accum -= u;
          let d = {
            cursorPos: { x: t, y: r },
            velocityFactor: o,
            dirX: s,
            dirY: i,
          };
          this.config.channelManager.fireInterval?.(
            $p.TIMELINE_ROLE_NAMES.INTERVAL,
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
var Ra = O((ao) => {
  "use strict";
  Object.defineProperty(ao, "__esModule", { value: !0 });
  Object.defineProperty(ao, "fireMouseMoveInterval", {
    enumerable: !0,
    get: function () {
      return oh;
    },
  });
  var Hp = ee(),
    Ia = _t(),
    io = new Set(["x", "y"]),
    zp = new Set(["scale", "scaleX", "scaleY"]),
    ba = new WeakMap(),
    Ea = new WeakMap();
  function Wp(n) {
    let e = ba.get(n);
    return (
      e ||
        ((e = {
          activeIntervalEls: new Map(),
          intervalClones: new Set(),
          baselineValues: new Map(),
        }),
        ba.set(n, e)),
      e
    );
  }
  function Kp(n, e, t, r) {
    let o = Ea.get(n);
    o || ((o = new Set()), Ea.set(n, o)),
      !o.has(t) &&
        (o.add(t),
        r(() => {
          let s = e.activeIntervalEls.get(t);
          if (s)
            for (let i of s)
              e.intervalClones.has(i) &&
                (i.isConnected && i.remove(), e.intervalClones.delete(i));
          e.activeIntervalEls.delete(t),
            e.baselineValues.delete(t),
            o.delete(t);
        }));
  }
  function Sa(n) {
    if (n)
      for (let e in n) {
        if (!io.has(e)) continue;
        let t = n[e];
        (typeof t == "string" && (t.startsWith("+=") || t.startsWith("-="))) ||
          ((typeof t == "number" || typeof t == "string") && (n[e] = `+=${t}`));
      }
  }
  var Yp = /^random\((.*)\)([a-z%]*)$/i,
    Xp = /^-?\d*\.?\d+$/;
  function Qp(n, e) {
    let t = Yp.exec(n);
    if (!t) return null;
    let r = t[1] ?? "",
      o = t[2] ?? "",
      s = r.startsWith("[") && r.endsWith("]"),
      a = (s ? r.slice(1, -1) : r).split(",").map((l) => l.trim());
    if (!a.every((l) => Xp.test(l))) return null;
    let c = a
      .map((l, u) => {
        let f = Number(l);
        return !s && u >= 2 ? Math.abs(e(f) - e(0)) : e(f);
      })
      .join(", ");
    return `random(${s ? `[${c}]` : c})${o}`;
  }
  function wa(n, e, t, r) {
    if (n)
      for (let o in n) {
        let s = n[o];
        if (typeof s != "number" && typeof s != "string") continue;
        let i = !1,
          a = typeof s == "string" ? s : "";
        typeof s == "string" &&
          (s.startsWith("+=") || s.startsWith("-=")) &&
          ((i = !0), (a = (s.startsWith("-=") ? "-" : "") + s.slice(2)));
        let c, l;
        if (io.has(o)) {
          let p = o === "y" ? r : t;
          (c = (h) => h * e * p), (l = !0);
        } else if (o === "rotation") {
          let p = Math.abs(t) >= Math.abs(r) ? t : -r;
          (c = (h) => h * e * p), (l = i);
        } else
          zp.has(o)
            ? ((c = i ? (p) => p * e : (p) => 1 + (p - 1) * e), (l = i))
            : ((c = (p) => p * e), (l = i));
        if (typeof s == "string" && a.startsWith("random(")) {
          let p = Qp(a, c);
          if (p == null) continue;
          n[o] = l ? `+=${p}` : p;
          continue;
        }
        let u,
          f = "";
        if (typeof s == "number") u = s;
        else {
          if (((u = parseFloat(a)), isNaN(u))) continue;
          f = a.replace(/^-?[\d.]+/, "");
        }
        let d = c(u);
        n[o] = l ? `+=${d}${f}` : d;
      }
  }
  function Zp(n, e) {
    let t = n.getOneShotTimelineContext(e),
      r = t?.timelineDef;
    if (!t || !r?.actions?.length) return null;
    let o = r.triggerMetadata,
      s = o?.pluginConfig?.type === "mouseMove" ? o.pluginConfig : void 0;
    return o?.role !== "interval" && !s
      ? null
      : {
          oneShot: t,
          mouseMoveMeta: s ?? { type: "mouseMove" },
          axes: o?.axes,
        };
  }
  function Jp(n, e, t, r, o) {
    let s = n.cloneNode(!0);
    s.removeAttribute("style"),
      s.removeAttribute("id"),
      s.removeAttribute("data-w-id"),
      s.setAttribute(Ia.TRANSIENT_IX3_CLONE_ATTR, "true"),
      (s.style.position = "absolute"),
      (s.style.margin = "0"),
      (s.style.pointerEvents = "none"),
      n.insertAdjacentElement("beforebegin", s);
    let i = e.baselineValues.get(o)?.get(n);
    return i && r.set(s, { ...i }), e.intervalClones.add(s), t.add(s), s;
  }
  function eh(n, e) {
    let t = [],
      r = new Set();
    for (let o of n.timelineDef.actions)
      for (let s in o.properties) {
        let i = n.getActionTweenConfig(o, s, [e]);
        if (i) {
          for (let a of [i.to, i.from])
            if (a)
              for (let c of Object.keys(a)) io.has(c) ? t.push(c) : r.add(c);
        }
      }
    return { clearProps: t, baselineProps: r };
  }
  function th(n, e, t, r, o) {
    let { clearProps: s, baselineProps: i } = eh(n, t);
    if (i.size > 0) {
      let a = {};
      for (let l of i) a[l] = e.getProperty(t, l);
      let c = r.baselineValues.get(o);
      c || ((c = new WeakMap()), r.baselineValues.set(o, c)), c.set(t, a);
    }
    s.length !== 0 && e.set(t, { clearProps: s.join(",") });
  }
  function Oa(n) {
    if (n)
      for (let e in n) {
        let t = n[e];
        typeof t == "function" &&
          "legacyExpression" in t &&
          (n[e] = t.legacyExpression);
      }
  }
  function nh(n, e, t) {
    return (r, o, s) => {
      Oa(s.to),
        Oa(s.from),
        (
          o.pluginConfig?.type === "mouseMove"
            ? o.pluginConfig.velocityInfluence
            : !1
        )
          ? n != null && (wa(s.to, n, e, t), s.from && wa(s.from, n, e, t))
          : (Sa(s.to), s.from && Sa(s.from));
    };
  }
  function rh(n, e, t, r, o, s, i, a) {
    let [c] = t;
    if (c && (n.set(c, { zIndex: r + 1 + o }, 0), !(!s || (!i && !a))))
      for (let l of t) {
        let u = l.getBoundingClientRect(),
          f = {};
        if (i) {
          let d = Number(e.getProperty(l, "x")) || 0;
          f.x = s.x - (u.left + u.width / 2 - d);
        }
        if (a) {
          let d = Number(e.getProperty(l, "y")) || 0;
          f.y = s.y - (u.top + u.height / 2 - d);
        }
        n.set(l, f, 0);
      }
  }
  function Aa(n) {
    for (let e of n) e();
    n.clear();
  }
  function _a(n, e, t) {
    n.activeIntervalEls.get(e)?.delete(t),
      n.intervalClones.has(t) &&
        (t.isConnected && t.remove(), n.intervalClones.delete(t));
  }
  var oh = ({
    coordinator: n,
    timelineId: e,
    element: t,
    options: r,
    animation: o,
  }) => {
    if (!o.hasGsap()) return;
    let s = r.targetIndex;
    if (s == null) return;
    let i = Zp(n, e);
    if (!i) return;
    let { oneShot: a, mouseMoveMeta: c, axes: l } = i,
      u = Wp(n),
      f = a
        .getFirstActionTargets(t)
        .filter((k) => !(0, Ia.isTransientIX3Clone)(k));
    if (!f.length) return;
    let d = [f[s % f.length]],
      p = d,
      h = d[0],
      g = u.activeIntervalEls.get(e);
    g || ((g = new Set()), u.activeIntervalEls.set(e, g)),
      g.has(h) ? (p = [Jp(h, u, g, o, e)]) : (th(a, o, h, u, e), g.add(h));
    let y = p[0],
      S = l?.x === !1 && l?.y === !1,
      b = S || (l?.x ?? c?.setMouseX ?? !0),
      m = S || (l?.y ?? c?.setMouseY ?? !0),
      w = (0, Hp.narrowMouseMoveIntervalPayload)(r.pluginPayload),
      v = w.cursorPos,
      T = w.velocityFactor,
      E = w.dirX ?? 0,
      _ = w.dirY ?? 0,
      A = new Set(),
      R = a.buildActionTimeline({
        targets: p,
        cleanupBucket: A,
        varsTransform: nh(T, E, _),
        beforeTweens: (k) => {
          rh(k, o, p, f.length, s, v, b, m);
        },
      });
    if (!R) {
      Aa(A), _a(u, e, y);
      return;
    }
    let M = null,
      C = !1,
      I = (k) => {
        C || ((C = !0), M?.(), k && R.kill(), Aa(A), _a(u, e, y));
      };
    (M = a.registerCleanup(() => I(!0))),
      R.eventCallback("onComplete", () => {
        I(!1);
      }),
      Kp(n, u, e, a.registerCleanup);
  };
});
var La = O((uo) => {
  "use strict";
  Object.defineProperty(uo, "__esModule", { value: !0 });
  Object.defineProperty(uo, "buildMouseMove", {
    enumerable: !0,
    get: function () {
      return hh;
    },
  });
  var ae = ee(),
    tt = Qe(),
    sh = ya(),
    ih = Ta(),
    ah = va(),
    ch = Ra(),
    lh = 50,
    Ma = 50,
    co = null;
  function uh() {
    return (
      co === null &&
        (co = "ontouchstart" in window || navigator.maxTouchPoints > 0),
      co
    );
  }
  var xa = 0,
    ka = 0,
    Mt = 0,
    be = null;
  function fh() {
    (Mt += 1),
      be ||
        ((be = () => {
          (xa = window.innerWidth), (ka = window.innerHeight);
        }),
        be(),
        window.addEventListener("resize", be));
    let n = !1;
    return () => {
      n ||
        ((n = !0),
        (Mt = Math.max(0, Mt - 1)),
        Mt === 0 &&
          be &&
          (window.removeEventListener("resize", be), (be = null)));
    };
  }
  var Ct = (n) => Math.max(0, Math.min(1, n));
  function dh(n, e, t) {
    return e === t || n === t || (n < t && e > t) || (n > t && e < t);
  }
  function De(n, e, t) {
    let r = n.tween;
    (n.tween = null),
      (n.takeoverTarget = null),
      (n.proxy.value = e),
      (n.lastValue = e),
      n.channel?.setProgress(e),
      t && r?.kill();
  }
  function Ca(n, e) {
    if (n.tween) {
      if (n.proxy.value === e) {
        De(n, e, !0);
        return;
      }
      let t = n.tweenTarget - n.proxy.value,
        r = e - n.proxy.value;
      if (t * r < 0) {
        De(n, e, !0);
        return;
      }
      if (Math.abs(r) > 2 * Math.abs(t)) {
        De(n, e, !0);
        return;
      }
      n.takeoverTarget = e;
      return;
    }
    (n.proxy.value = e), (n.lastValue = e), n.channel?.setProgress(e);
  }
  function lo(n) {
    let e = n.tween;
    (n.tween = null), (n.takeoverTarget = null), e?.kill();
  }
  function Pa(n, e, t, r) {
    lo(e), (e.lastValue = e.proxy.value), (e.tweenTarget = t);
    let o = n.to(e.proxy, {
      value: t,
      duration: r,
      ease: "power2.out",
      onUpdate: () => {
        let s = e.proxy.value,
          i = e.takeoverTarget;
        if (i != null && dh(e.lastValue, s, i)) {
          De(e, i, !0);
          return;
        }
        (e.lastValue = s), e.channel?.setImmediate(s);
      },
      onComplete: () => {
        let s = e.takeoverTarget;
        (e.tween = null), (e.takeoverTarget = null), s != null && De(e, s, !1);
      },
    });
    if (!o) {
      De(e, t, !1);
      return;
    }
    e.tween = o;
  }
  function ph(n, e) {
    let t = Math.max(n, e);
    return 0.1 + Math.min(t / 0.5, 1) * 0.5;
  }
  function hh(n) {
    n.addTrigger("mouse-move", (e, t, r, o) => {
      let s = e[1].pluginConfig,
        i = e[2]?.[0] === ae.IX3_WF_EXTENSION_KEYS.VIEWPORT;
      return (
        o({
          type: "continuous",
          setup: (a) => {
            let { animation: c } = a;
            if (!c.hasGsap() || !c.hasObserver()) return tt.noop;
            let l = i ? fh() : tt.noop;
            a.registerIntervalHandler(
              ae.IX3_WF_EXTENSION_KEYS.MOUSE_MOVE,
              ch.fireMouseMoveInterval
            );
            let u = s?.smoothness ?? lh,
              f = (s?.restingState?.x ?? Ma) / 100,
              d = (s?.restingState?.y ?? Ma) / 100,
              p = a.registerChannel({
                role: ae.TIMELINE_ROLE_NAMES.MOUSE_X,
                initialValue: f,
                element: t,
                smoothing: u,
              }),
              h = a.registerChannel({
                role: ae.TIMELINE_ROLE_NAMES.MOUSE_Y,
                initialValue: d,
                element: t,
                smoothing: u,
              }),
              g = new AbortController(),
              { signal: y } = g,
              S = a.getMetadata(ae.TIMELINE_ROLE_NAMES.INTERVAL),
              b = {
                x: S?.axes?.x !== !1 || S?.axes?.y === !1,
                y: S?.axes?.y !== !1 || S?.axes?.x === !1,
              },
              m = S
                ? new ah.IntervalController({
                    distance:
                      S.distance ?? ae.DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE,
                    axes: b,
                    channelManager: a,
                    element: t,
                    signal: y,
                  })
                : null,
              w = m ? new ih.VelocityController({ axes: b }) : null,
              v = {
                proxy: { value: f },
                channel: p,
                tween: null,
                takeoverTarget: null,
                lastValue: f,
                tweenTarget: f,
              },
              T = {
                proxy: { value: d },
                channel: h,
                tween: null,
                takeoverTarget: null,
                lastValue: d,
                tweenTarget: d,
              },
              E = !1,
              _ = (V, X) => !!V.channel && a.hasActions(X),
              A = (V, X) => {
                let z = ph(
                  _(v, ae.TIMELINE_ROLE_NAMES.MOUSE_X)
                    ? Math.abs(V - v.proxy.value)
                    : 0,
                  _(T, ae.TIMELINE_ROLE_NAMES.MOUSE_Y)
                    ? Math.abs(X - T.proxy.value)
                    : 0
                );
                Pa(c, v, V, z), Pa(c, T, X, z);
              },
              R = uh(),
              M = i ? document.documentElement : t,
              C = null;
            R && (C = new sh.TouchScrollGuard(M, y));
            let I = null,
              k = () => {
                I = null;
              },
              F = () => (I || (I = t.getBoundingClientRect()), I);
            if (!i) {
              let V = new ResizeObserver(k);
              V.observe(t),
                y.addEventListener("abort", () => V.disconnect()),
                window.addEventListener("scroll", k, {
                  passive: !0,
                  capture: !0,
                  signal: y,
                }),
                window.visualViewport &&
                  window.visualViewport.addEventListener("resize", k, {
                    signal: y,
                  });
            }
            let H;
            try {
              if (
                ((H = c.createObserver({
                  target: M,
                  type: R ? "pointer,touch" : "pointer",
                  tolerance: 0,
                  onMove: (V) => {
                    if (C?.isScrolling || !a.isPreviewEnabled()) return;
                    let X = V.x ?? 0,
                      z = V.y ?? 0,
                      _e,
                      ce;
                    if (i)
                      (_e = Ct(X / Math.max(1, xa))),
                        (ce = Ct(z / Math.max(1, ka)));
                    else {
                      let me = F();
                      (_e = Ct((X - me.left) / Math.max(1, me.width))),
                        (ce = Ct((z - me.top) / Math.max(1, me.height)));
                    }
                    E ? (Ca(v, _e), Ca(T, ce)) : ((E = !0), A(_e, ce)),
                      a.publishChannel(
                        ae.MOUSE_MOVE_CHANNELS.POSITION,
                        { x: X, y: z, triggerEl: t, isViewport: i },
                        t
                      ),
                      w &&
                        (w.update(V.velocityX, V.velocityY),
                        m.update({
                          x: X,
                          y: z,
                          velocityFactor: w.lastNormVelocity,
                          dirX: w.dirX,
                          dirY: w.dirY,
                        }));
                  },
                })),
                !H)
              )
                return m?.destroy(), w?.destroy(), g.abort(), l(), tt.noop;
            } catch {
              return m?.destroy(), w?.destroy(), g.abort(), l(), tt.noop;
            }
            let Q = () => {
              a.isPreviewEnabled() &&
                ((E = !1),
                A(f, d),
                w?.reset(),
                a.publishChannel(ae.MOUSE_MOVE_CHANNELS.LEAVE, void 0, t),
                m?.reset());
            };
            return (
              i
                ? (M.addEventListener("mouseleave", Q, { signal: y }),
                  window.addEventListener("blur", Q, { signal: y }))
                : t.addEventListener("mouseleave", Q, { signal: y }),
              M.addEventListener("touchend", Q, { signal: y, passive: !0 }),
              M.addEventListener("touchcancel", Q, { signal: y, passive: !0 }),
              () => {
                H.kill(),
                  g.abort(),
                  lo(v),
                  lo(T),
                  m?.destroy(),
                  w?.destroy(),
                  l();
              }
            );
          },
        }),
        tt.noop
      );
    });
  }
});
var za = O((go) => {
  "use strict";
  Object.defineProperty(go, "__esModule", { value: !0 });
  function gh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  gh(go, {
    COMPONENT_RUNTIMES: function () {
      return xt;
    },
    MODAL_TRIGGER_CONTRACT: function () {
      return Ua;
    },
    POPOVER_TRIGGER_CONTRACT: function () {
      return Ga;
    },
    build: function () {
      return yh;
    },
    buildTriggerContracts: function () {
      return Ah;
    },
  });
  var nt = K(),
    N = ee(),
    ge = Xe(),
    Ve = Qe(),
    ho = Jr(),
    mh = La();
  function yh(n) {
    Th(n), vh(n), (0, mh.buildMouseMove)(n), bh(n), Eh(n);
    for (let { overlay: t } of Object.values(xt)) Rh(n, t), Ph(n, t);
    Lh(n),
      Dh(n),
      n.addTrigger("load", (t, r, o, s) => {
        let i = t[1],
          a = !1,
          c = () => {
            a || ((a = !0), s({ target: r }));
          };
        switch (i.pluginConfig?.triggerPoint) {
          case "immediate":
            return c(), Ve.noop;
          case "fullyLoaded":
            return document.readyState === "complete"
              ? (c(), Ve.noop)
              : o.addEventListener(window, "load", c);
          case "DOMContentLoaded":
          default:
            return document.readyState === "complete" ||
              document.readyState === "interactive"
              ? (c(), Ve.noop)
              : o.addEventListener(document, "DOMContentLoaded", c);
        }
      }),
      n.addTrigger("focus", (t, r, o, s) => {
        let i = t[1];
        return o.addEventListener(
          r,
          i.pluginConfig?.useFocusWithin ? "focusin" : "focus",
          s,
          { delegate: !i.pluginConfig?.useFocusWithin }
        );
      }),
      n.addTrigger("blur", (t, r, o, s) => {
        let i = t[1];
        return o.addEventListener(
          r,
          i.pluginConfig?.useFocusWithin ? "focusout" : "blur",
          s,
          { delegate: !i.pluginConfig?.useFocusWithin }
        );
      });
    let e = (t, r, o, s) => (s({ target: r }), Ve.noop);
    n.addTrigger("scroll", e),
      n.addTrigger("scroll-scrub", e),
      n.addTrigger("scroll-actions", e),
      n.addTrigger("scroll-direction", e),
      n.addTrigger("custom", (t, r, o, s) => {
        let a = t[1].pluginConfig?.eventName;
        return a
          ? o.addEventListener(r, a, s, { delegate: !1, kind: "custom" })
          : Ve.noop;
      }),
      n.addTrigger("change", (t, r, o, s) =>
        o.addEventListener(r, "change", s)
      );
  }
  function Th(n) {
    let e = new WeakMap();
    n.addTrigger("click", (t, r, o, s) => {
      let [, i] = t,
        a = t[2]?.[0],
        c = Object.values(xt).some(({ elementBackdropKey: d }) => d === a),
        l = !1,
        u = c
          ? o.addEventListener(r, "pointerdown", (d) => {
              l = Na(d, r);
            })
          : Ve.noop,
        f = o.addEventListener(
          r,
          "click",
          (d) => {
            if (c) {
              let S = l;
              if (((l = !1), !S || d.detail === 0 || !Na(d, r))) return;
            }
            let p = i.pluginConfig?.click,
              h = e.get(r) || new WeakMap();
            e.set(r, h);
            let y = (h.get(t) || 0) + 1;
            switch ((h.set(t, y), p)) {
              case "each": {
                s(d);
                break;
              }
              case "first": {
                y === 1 && s(d);
                break;
              }
              case "second": {
                y === 2 && s(d);
                break;
              }
              case "odd": {
                y % 2 === 1 && s(d);
                break;
              }
              case "even": {
                y % 2 === 0 && s(d);
                break;
              }
              case "custom": {
                let S = i.pluginConfig?.custom;
                S && y === S && s(d);
                break;
              }
              default:
                s(d);
            }
          },
          { delegate: !0 }
        );
      return () => {
        f(), u(), e.delete(r);
      };
    });
  }
  function Na(n, e) {
    if (n.target !== e) return !1;
    let { clientX: t, clientY: r } = n,
      o = e.getBoundingClientRect();
    return t < o.left || t > o.right || r < o.top || r > o.bottom;
  }
  function vh(n) {
    let e = new WeakMap();
    n.addTrigger("hover", (t, r, o, s) => {
      let [, i] = t,
        a = [],
        c = i.pluginConfig?.multiTimeline,
        l = i.pluginConfig?.eventMode,
        u = l !== "leave",
        f = l !== "enter";
      if (c === !0)
        return (
          u &&
            a.push(
              o.addEventListener(r, "mouseenter", () =>
                s({
                  type: "timeline-role",
                  role: N.TIMELINE_ROLE_NAMES.MOUSE_ENTER,
                })
              )
            ),
          f &&
            a.push(
              o.addEventListener(r, "mouseleave", () =>
                s({
                  type: "timeline-role",
                  role: N.TIMELINE_ROLE_NAMES.MOUSE_LEAVE,
                })
              )
            ),
          () => {
            a.forEach((p) => p()), (a.length = 0);
          }
        );
      if (c === !1) {
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
                o.addEventListener(r, "mouseenter", () =>
                  s({ type: "playback-control", control: "play" })
                )
              ),
            f)
          ) {
            let g = u ? h : "play";
            a.push(
              o.addEventListener(r, "mouseleave", () =>
                s({ type: "playback-control", control: g })
              )
            );
          }
        } else
          u && a.push(o.addEventListener(r, "mouseenter", (h) => s(h))),
            f && a.push(o.addEventListener(r, "mouseleave", (h) => s(h)));
        return () => {
          a.forEach((h) => h()), (a.length = 0);
        };
      }
      let d = (p, h) => {
        if ((i.pluginConfig?.type ?? "mouseenter") !== h) return;
        let y = i.pluginConfig?.hover || "each",
          S = e.get(r) || new Map();
        e.set(r, S);
        let m = (S.get(h) || 0) + 1;
        switch ((S.set(h, m), y)) {
          case "each": {
            s(p);
            break;
          }
          case "first": {
            m === 1 && s(p);
            break;
          }
          case "second": {
            m === 2 && s(p);
            break;
          }
          case "odd": {
            m % 2 === 1 && s(p);
            break;
          }
          case "even": {
            m % 2 === 0 && s(p);
            break;
          }
          case "custom": {
            let w = i.pluginConfig?.custom;
            w && m === w && s(p);
            break;
          }
          default:
            s(p);
        }
      };
      return (
        a.push(
          o.addEventListener(r, "mouseenter", (p) => {
            d(p, "mouseenter");
          })
        ),
        a.push(
          o.addEventListener(r, "mouseover", (p) => {
            d(p, "mouseover");
          })
        ),
        a.push(
          o.addEventListener(r, "mouseleave", (p) => {
            d(p, "mouseleave");
          })
        ),
        () => {
          a.forEach((p) => p()), (a.length = 0), e.delete(r);
        }
      );
    });
  }
  function Ba(n, e) {
    n.addTrigger(e, (t, r, o, s) => {
      let i = t[1].pluginConfig?.event,
        a =
          i === N.TIMELINE_ROLE_NAMES.OPEN || i === N.TIMELINE_ROLE_NAMES.CLOSE
            ? i
            : void 0,
        c = "IX3_COMPONENT_STATE_CHANGE";
      return o.addEventListener(r, c, (l) => {
        let u = l.detail;
        if (!u || typeof u != "object") return;
        let { component: f, state: d } = u;
        f !== e ||
          !d ||
          (a && d !== a) ||
          s({ type: "timeline-role", role: d });
      });
    });
  }
  function bh(n) {
    Ba(n, "navbar");
  }
  function Eh(n) {
    Ba(n, "dropdown");
  }
  var Ee = new WeakMap();
  function Sh(n, e) {
    let t = (Ee.get(n) ?? 0) + 1;
    Ee.set(n, t), n.setAttribute(e, "");
  }
  function wh(n, e) {
    let t = (Ee.get(n) ?? 1) - 1;
    if (t > 0) {
      Ee.set(n, t);
      return;
    }
    Ee.delete(n), n.removeAttribute(e);
  }
  var Oh = {
      key: "popover",
      stateEvent: N.IX3_POPOVER_STATE_EVENT,
      animatedAttribute: N.POPOVER_ANIMATED_ATTRIBUTE,
      commandEvent: ge.POPOVER_COMMAND_EVENT,
      isShowing: Ch,
      fromTriggerElement: ho.popoverFromTriggerElement,
    },
    ja = (n) => ({
      roles: [N.TIMELINE_ROLE_NAMES.OPEN, N.TIMELINE_ROLE_NAMES.CLOSE],
      emitsRolesAlways: !0,
      ownsRoleSet: !0,
      container: n,
    }),
    Ga = ja("[popover]"),
    Ua = ja("." + ge.MODAL_CLASS);
  function Ah(n) {
    for (let { overlay: e, contract: t } of Object.values(xt))
      n.addTriggerContract(e.key, t);
  }
  var _h = {
      key: "modal",
      stateEvent: N.IX3_MODAL_STATE_EVENT,
      animatedAttribute: N.MODAL_ANIMATED_ATTRIBUTE,
      commandEvent: ge.MODAL_COMMAND_EVENT,
      isShowing: (n) => n.open === !0,
      fromTriggerElement: ho.modalFromTriggerElement,
    },
    xt = {
      popover: { overlay: Oh, contract: Ga },
      modal: {
        overlay: _h,
        contract: Ua,
        elementBackdropKey: N.IX3_WF_EXTENSION_KEYS.MODAL_BACKDROP,
      },
    },
    Fa = new WeakMap();
  function $a(n) {
    n.released || ((n.released = !0), n.done?.());
  }
  function Ih(n, e) {
    let t = Fa.get(n);
    if (t) return t;
    let r = { claims: 0, released: !1, dispatching: !0, done: e };
    return (
      Fa.set(n, r),
      Promise.resolve().then(() => {
        (r.dispatching = !1), r.claims === 0 && $a(r);
      }),
      r
    );
  }
  function qa(n) {
    n.claims++;
    let e = !1;
    return () => {
      e || ((e = !0), --n.claims <= 0 && !n.dispatching && $a(n));
    };
  }
  function Rh(n, e) {
    n.addTrigger(e.key, (t, r, o, s) => {
      let i = t[1].pluginConfig?.event,
        a =
          i === N.TIMELINE_ROLE_NAMES.OPEN || i === N.TIMELINE_ROLE_NAMES.CLOSE
            ? i
            : void 0;
      Sh(r, e.animatedAttribute);
      let c = () => wh(r, e.animatedAttribute),
        l = new Set(),
        u = o.addEventListener(r, e.stateEvent, (f) => {
          let d = f.detail;
          if (!d || typeof d != "object") return;
          let { state: p, done: h } = d,
            g = Ih(f, typeof h == "function" ? h : void 0);
          if (
            p !== N.TIMELINE_ROLE_NAMES.OPEN &&
            p !== N.TIMELINE_ROLE_NAMES.CLOSE
          )
            return;
          if (p === N.TIMELINE_ROLE_NAMES.OPEN) Y.delete(r), Se.delete(r);
          else {
            let S = Y.get(r);
            S?.delete(t), S && S.size === 0 && Y.delete(r);
          }
          if (a && p !== a) return;
          p === N.TIMELINE_ROLE_NAMES.CLOSE && Se.set(r, g);
          let y = qa(g);
          l.add(y),
            s({
              type: "timeline-role",
              role: p,
              onComplete: () => {
                l.delete(y), y();
              },
            });
        });
      return () => {
        Ee.get(r) === 1 &&
          (Y.has(r) || e.isShowing(r)) &&
          (Y.delete(r), po(e, r, ge.POPOVER_ANIMATION_CLOSE_COMMAND)),
          Ee.get(r) === 1 && Se.delete(r),
          c(),
          u();
        for (let f of l) f();
        l.clear();
      };
    });
  }
  function Da(n, e, t) {
    let r = e.length > 1 ? n.fromTriggerElement(t, (o) => e.includes(o)) : null;
    return r ? [r] : e;
  }
  function Mh(n, e) {
    if (!n.isShowing(e) || Y.has(e)) return !1;
    let t = Se.get(e);
    return !t || t.released;
  }
  function Ch(n) {
    try {
      return n.matches(":popover-open");
    } catch {
      return !1;
    }
  }
  function po(n, e, t, r) {
    let o = e.ownerDocument.defaultView;
    if (!o) return;
    let s =
      t === ge.POPOVER_ANIMATION_OPEN_COMMAND
        ? { type: t, source: r }
        : { type: t };
    e.dispatchEvent(new o.CustomEvent(n.commandEvent, { detail: s }));
  }
  function Ph(n, e) {
    n.addRoleAppliedQuery(
      e.key,
      (t, { elements: r, trigger: o, causeTrigger: s, causeElement: i }) => {
        if (!Va(s, o)) return;
        let a = Da(e, r, i),
          c = (l) => Mh(e, l);
        if (t === N.TIMELINE_ROLE_NAMES.OPEN) return a.every(c);
        if (t === N.TIMELINE_ROLE_NAMES.CLOSE) return !a.some(c);
      }
    ),
      n.addRoleActivationObserver(
        e.key,
        (t, { elements: r, trigger: o, causeTrigger: s, causeElement: i }) => {
          if (!Va(s, o)) return;
          let a = Da(e, r, i);
          if (t === N.TIMELINE_ROLE_NAMES.OPEN) {
            for (let f of a)
              Y.delete(f),
                Se.delete(f),
                (!e.isShowing(f) || (s !== void 0 && s !== o)) &&
                  po(e, f, ge.POPOVER_ANIMATION_OPEN_COMMAND, i);
            return;
          }
          if (t !== N.TIMELINE_ROLE_NAMES.CLOSE) return;
          if (s === o) {
            for (let f of a) {
              let d = Y.get(f);
              d?.delete(o), d && d.size === 0 && Y.delete(f);
            }
            return;
          }
          let c = a.filter(e.isShowing);
          if (c.length === 0) return;
          let l = {},
            u = c.map((f) => {
              let d = Se.get(f);
              return d && !d.released ? qa(d) : void 0;
            });
          for (let f of c) {
            let d = Y.get(f);
            d || ((d = new Map()), Y.set(f, d)), d.set(o, l);
          }
          return () => {
            for (let [f, d] of c.entries()) {
              let p = u[f];
              p && Promise.resolve().then(p);
              let h = Y.get(d);
              h?.get(o) === l &&
                (h.delete(o),
                !(h.size > 0) &&
                  Promise.resolve().then(() => {
                    if (Y.get(d) !== h || h.size > 0) return;
                    Y.delete(d);
                    let g = Se.get(d);
                    (g && !g.released) ||
                      po(e, d, ge.POPOVER_ANIMATION_CLOSE_COMMAND);
                  }));
            }
          };
        }
      );
  }
  var Y = new WeakMap(),
    Se = new WeakMap();
  function Va(n, e) {
    if (!n || n === e) return !0;
    if (n[0] === e[0]) return !1;
    let t = n[1]?.assignedInstances;
    if (!t) return !0;
    let r = e[2],
      o = (0, ge.readInstPath)(r?.[1]);
    return o ? t.some(([s, i]) => s === o[0] && i === o[1]) : !1;
  }
  function xh(n, e) {
    let t = n[1]?.assignedInstances;
    return t
      ? t.length
        ? [...new Set(t.flatMap(([r, o]) => (0, ho.popoversByPath)(r, o)))]
        : []
      : [e];
  }
  function Ha(n, e, t) {
    let r = n[1]?.pluginConfig?.firstWins === !0;
    for (let o of xh(n, e)) t({ target: o, skipIfActive: !0, firstWins: r });
  }
  var kh = 10;
  function Lh(n) {
    n.addTrigger("exit-intent", (e, t, r, o) => {
      if ((0, nt.getPageLevelTriggerState)(e).fired) return () => {};
      let s = !1,
        i,
        a = () => {
          i?.(), (i = void 0);
        };
      return (
        (i = r.addEventListener(
          t,
          "mouseout",
          (c) => {
            if (s) return;
            let l = c;
            l.relatedTarget == null &&
              (l.clientY > kh ||
                (l.clientY > 0 &&
                  typeof l.movementY == "number" &&
                  l.movementY >= 0) ||
                ((s = !0),
                ((0, nt.getPageLevelTriggerState)(e).fired = !0),
                a(),
                Ha(e, t, o)));
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
  var Nh = [
      "pointermove",
      "pointerdown",
      "keydown",
      "scroll",
      "wheel",
      "touchstart",
      "touchmove",
    ],
    fo = 100,
    Pt = new WeakMap();
  function Fh(n, e) {
    let t = Pt.get(e);
    if (!t) {
      let o = {
          waiters: new Set(),
          cleanups: [],
          lastResetAt: -fo,
          trailing: void 0,
        },
        s = () => {
          (o.trailing = void 0), (o.lastResetAt = performance.now());
          for (let a of o.waiters) a.restart();
        },
        i = () => {
          let a = performance.now() - o.lastResetAt;
          if (a >= fo) {
            o.trailing !== void 0 && clearTimeout(o.trailing), s();
            return;
          }
          o.trailing === void 0 && (o.trailing = setTimeout(s, fo - a));
        };
      (o.cleanups = Nh.map((a) =>
        e.addEventListener(document.documentElement, a, () => i(), {
          target: "document",
          delegate: !1,
          batch: !1,
          capture: !0,
          passive: !0,
        })
      )),
        Pt.set(e, o),
        (t = o);
    }
    let r = t;
    return (
      r.waiters.add(n),
      () => {
        if ((r.waiters.delete(n), !(r.waiters.size > 0))) {
          for (let o of r.cleanups) o();
          (r.cleanups.length = 0),
            r.trailing !== void 0 && clearTimeout(r.trailing),
            (r.trailing = void 0),
            Pt.get(e) === r && Pt.delete(e);
        }
      }
    );
  }
  function Dh(n) {
    n.addTrigger("duration", (e, t, r, o) => {
      if ((0, nt.getPageLevelTriggerState)(e).fired) return () => {};
      let s = e[1]?.pluginConfig,
        i = s?.mode,
        a =
          i === "idle" || i === "timeOnSite"
            ? i
            : N.DEFAULT_DURATION_TRIGGER_MODE,
        c = s?.duration ?? N.DEFAULT_DURATION_TRIGGER_SECONDS,
        u =
          (Number.isFinite(c)
            ? Math.min(
                Math.max(c, (0, N.minimumDurationSeconds)(a)),
                N.DURATION_TRIGGER_SECONDS_RANGE.max
              )
            : N.DEFAULT_DURATION_TRIGGER_SECONDS) * 1e3,
        f,
        d = !1,
        p = () => {},
        h = () => {
          d ||
            ((d = !0),
            ((0, nt.getPageLevelTriggerState)(e).fired = !0),
            (f = void 0),
            p(),
            Ha(e, t, o));
        };
      if (a === "timeOnSite") {
        let b = Date.now(),
          m = (0, nt.getPageLevelTriggerState)(e),
          w = m.deadline,
          v = typeof window.__wf_design < "u",
          T = w ?? (v ? b + u : b - performance.now() + u);
        return (
          w === void 0 && (m.deadline = T),
          (f = setTimeout(h, Math.max(0, T - b))),
          () => {
            f !== void 0 && clearTimeout(f);
          }
        );
      }
      let g = () => {
        d || (f !== void 0 && clearTimeout(f), (f = setTimeout(h, u)));
      };
      f = setTimeout(h, u);
      let y = Fh({ restart: g }, r),
        S = !1;
      return (
        (p = () => {
          S || ((S = !0), y());
        }),
        () => {
          f !== void 0 && clearTimeout(f), p();
        }
      );
    });
  }
});
var Be = O((mo) => {
  "use strict";
  Object.defineProperty(mo, "__esModule", { value: !0 });
  function Vh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Vh(mo, {
    resolveToNumber: function () {
      return Bh;
    },
    resolveToString: function () {
      return jh;
    },
  });
  function Bh(n, e) {
    if (typeof n == "number") return n;
    if (typeof n == "string") {
      let t = n;
      if (t.startsWith("var(")) {
        let o = t.slice(4, -1).split(",")[0]?.trim() ?? "";
        if (!o || ((t = getComputedStyle(e).getPropertyValue(o).trim()), !t))
          return;
      }
      let r = parseFloat(t);
      return isNaN(r) ? void 0 : r;
    }
  }
  function jh(n, e) {
    if (typeof n == "string") {
      if (n.startsWith("var(")) {
        let t = n.slice(4, -1).split(",")[0]?.trim() ?? "";
        return (t && getComputedStyle(e).getPropertyValue(t).trim()) || void 0;
      }
      return n;
    }
  }
});
var Xa = O((vo) => {
  "use strict";
  Object.defineProperty(vo, "__esModule", { value: !0 });
  function Gh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Gh(vo, {
    buildMouseFollowAction: function () {
      return Wh;
    },
    forTestSuite: function () {
      return Hh;
    },
  });
  var yo = ee(),
    kt = Qe(),
    Uh = 0.5,
    Lt = 50;
  function $h(n) {
    let e = 2166136261;
    for (let t = 0; t < n.length; t++)
      (e ^= n.charCodeAt(t)), (e = Math.imul(e, 16777619));
    return e >>> 0;
  }
  function qh(n) {
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
  function Wa(n, e, t) {
    if (n <= 1) return [0];
    if (typeof e == "number") {
      let r = Math.max(0, Math.min(n - 1, Math.floor(e))),
        o = [r];
      for (let s = 1; o.length < n; s++)
        r + s < n && o.push(r + s), r - s >= 0 && o.push(r - s);
      return o;
    }
    switch (e) {
      case "start":
        return Array.from({ length: n }, (r, o) => o);
      case "center": {
        let r = [],
          o = Math.floor((n - 1) / 2);
        r.push(o);
        for (let s = 1; r.length < n; s++)
          o + s < n && r.push(o + s), o - s >= 0 && r.push(o - s);
        return r;
      }
      case "random": {
        let r = t != null && t !== "" ? qh($h(t)) : Math.random,
          o = Array.from({ length: n }, (s, i) => i);
        for (let s = n - 1; s > 0; s--) {
          let i = Math.floor(r() * (s + 1));
          [o[s], o[i]] = [o[i], o[s]];
        }
        return o;
      }
      case "edges": {
        let r = [],
          o = 0,
          s = n - 1;
        for (; o <= s; ) r.push(o), o !== s && r.push(s), o++, s--;
        return r;
      }
      case "end":
      default:
        return Array.from({ length: n }, (r, o) => n - 1 - o);
    }
  }
  function To(n) {
    if (n == null) return Lt;
    let e = typeof n == "number" ? n * 1e3 : parseFloat(n);
    return Number.isFinite(e) && e >= 0 ? e : Lt;
  }
  var rt = (n) => {
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
    Ka = (n, e) => {
      if (n?.amount != null) {
        let t = To(n.amount),
          r = e > 1 ? t / (e - 1) : Lt;
        return Math.max(1, r);
      }
      return n?.each != null ? Math.max(1, To(n.each)) : 1;
    },
    Ya = (n) => {
      if (!n) return { x: 0.5, y: 0.5 };
      if (typeof n == "string") {
        let [e, t] = n.trim().split(/\s+/);
        return { x: rt(e ?? "50%"), y: rt(t ?? "50%") };
      }
      return { x: rt(n.x), y: rt(n.y) };
    },
    Hh = {
      DEFAULT_STAGGER_MS: Lt,
      computeMouseFollowSmoothingMs: Ka,
      getChainOrder: Wa,
      parseAnchor: Ya,
      parseAnchorAxis: rt,
      staggerEachToMs: To,
    };
  function zh(n, e, t, r) {
    if (!t.length) return;
    let o = r?.animation;
    if (!o?.hasGsap()) return;
    let s =
        typeof window < "u" &&
        typeof window.matchMedia == "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      i = e,
      a = i?.leaveBehavior ?? "return",
      c = i?.onEnter ?? "animate",
      l = r?.timelineRole,
      u = l === "mouseX" ? "x" : l === "mouseY" ? "y" : i?.axis ?? "x",
      f = u,
      d = i?.followMode;
    if (
      d != null &&
      d !== "full" &&
      d !== (0, yo.getSingleAxisMouseFollowMode)(u)
    )
      return;
    let p = Ya(i?.anchor),
      h = u === "x" ? p.x : p.y,
      g = t.map((P) => o.getProperty(P, f)),
      y = t.map((P) => o.quickSetter(P, f, "px"));
    if (y.some((P) => P == null)) return;
    let S = y,
      b = (0, kt.initScrollCache)(),
      m = t.map((P) => {
        let L = P.getBoundingClientRect();
        return u === "x"
          ? L.left + L.width * h
          : L.top + L.height * h + (0, kt.getScrollY)();
      }),
      w = n.timing?.stagger,
      v = t.length,
      T = Ka(w, v),
      E = w?.from,
      A = Wa(
        v,
        typeof E == "number" ||
          E === "start" ||
          E === "center" ||
          E === "edges" ||
          E === "end" ||
          E === "random"
          ? E
          : "end",
        i?.groupId ?? i?.syncedActionId
      );
    if (A.length === 0) return;
    let R = new Float64Array(v),
      M = A[0],
      C = { value: m[M] ?? 0 },
      I = null,
      k = !1,
      F = 0,
      H = null,
      Q = !1,
      V = null,
      X = performance.now(),
      z = 0,
      _e = () => {
        let P = performance.now(),
          L = Math.min(P - X, 100);
        X = P;
        let W = 1 - Math.exp(-L / T),
          U = !1;
        for (let $ = 0; $ < A.length; $++) {
          let B = A[$],
            Ie;
          if ($ === 0) Ie = C.value;
          else {
            let ms = A[$ - 1];
            Ie = m[ms] + R[ms];
          }
          let gs = Ie - m[B],
            Wt = gs - R[B];
          Math.abs(Wt) > Uh
            ? ((R[B] = R[B] + Wt * W), S[B](R[B]), (U = !0))
            : Wt !== 0 && ((R[B] = gs), S[B](R[B]));
        }
        I?.isActive() && (U = !0), U || ce();
      },
      ce = () => {
        Q && (V?.(), (V = null), (Q = !1));
      },
      me = (P) => {
        I?.kill(), (I = null), (z = 0), (C.value = P);
        for (let L = 0; L < A.length; L++) {
          let W = A[L],
            U = P - m[W];
          (R[W] = U), S[W](U);
        }
        ce();
      },
      tl = () => {
        I?.kill(), (I = null), (z = 0), (C.value = m[M] ?? 0);
        for (let P = 0; P < A.length; P++) {
          let L = A[P];
          (R[L] = 0), S[L](0);
        }
        ce();
      },
      ue = () => {
        Q || ((X = performance.now()), (V = o.addTicker(_e)), (Q = !0));
      },
      nl = (P, L) => {
        (H = P),
          (F = L
            ? u === "x"
              ? window.innerWidth
              : window.innerHeight
            : u === "x"
            ? P.offsetWidth
            : P.offsetHeight);
      },
      rl = (P) => {
        H || nl(P.triggerEl, P.isViewport);
        let L = u === "x" ? P.x : P.y + (0, kt.getScrollY)();
        if (s) {
          (k = !0), me(L);
          return;
        }
        if (k)
          if (I) {
            let W = Math.max(z - performance.now(), 50);
            I.kill();
            let U = o.to(C, {
              value: L,
              duration: W / 1e3,
              ease: "power2.out",
              onUpdate: ue,
              onComplete: () => {
                I === U && ((I = null), (z = 0));
              },
            });
            if (!U) {
              (C.value = L), ue();
              return;
            }
            I = U;
          } else C.value = L;
        else {
          if (((k = !0), c === "snap")) {
            me(L);
            return;
          }
          let W = Math.abs(L - C.value),
            $ = 0.1 + Math.min(W / (F || 1), 1) * 0.5;
          (z = performance.now() + $ * 1e3), I?.kill();
          let B = o.to(C, {
            value: L,
            duration: $,
            ease: "power2.out",
            onUpdate: ue,
            onComplete: () => {
              I === B && ((I = null), (z = 0));
            },
          });
          if (!B) {
            (C.value = L), ue();
            return;
          }
          I = B;
        }
        ue();
      },
      ol = () => {
        if (((k = !1), a === "stay")) {
          ue();
          return;
        }
        if (s) {
          tl();
          return;
        }
        let P = m[M] ?? 0,
          L = Math.abs(C.value - P),
          U = 0.1 + Math.min(L / (F || 1), 1) * 0.5;
        I?.kill();
        let $ = o.to(C, {
          value: P,
          duration: U,
          ease: "power2.out",
          onUpdate: ue,
          onComplete: () => {
            I === $ && (I = null);
          },
        });
        if (!$) {
          (C.value = P), ue();
          return;
        }
        I = $;
      },
      sl = r?.subscribeChannel?.(yo.MOUSE_MOVE_CHANNELS.POSITION, rl),
      il = r?.subscribeChannel?.(yo.MOUSE_MOVE_CHANNELS.LEAVE, ol),
      hs = new AbortController(),
      { signal: al } = hs,
      zt = 0,
      cl = () => {
        clearTimeout(zt),
          (zt = window.setTimeout(() => {
            H && (F = u === "x" ? H.offsetWidth : H.offsetHeight);
            for (let P = 0; P < t.length; P++) {
              let L = t[P],
                W = o.getProperty(L, f),
                U = typeof W == "number" ? W : parseFloat(String(W)),
                $ = Number.isFinite(U) ? U : 0,
                B = L.getBoundingClientRect(),
                Ie = u === "x" ? B.left + B.width * h : B.top + B.height * h;
              (m[P] = u === "x" ? Ie - $ : Ie - $ + (0, kt.getScrollY)()),
                (R[P] = $);
            }
            if (!k) {
              let P = m[M];
              P !== void 0 &&
                (I?.isActive() && (I.kill(), (I = null)), (C.value = P));
            }
          }, 250));
      };
    return (
      window.addEventListener("resize", cl, { signal: al }),
      () => {
        I?.kill(), ce(), clearTimeout(zt), hs.abort(), sl?.(), il?.(), b();
        for (let P = 0; P < t.length; P++) o.set(t[P], { [f]: g[P] });
      }
    );
  }
  function Wh(n) {
    n.addAction("mouse-follow", {
      requiresTriggerElementContext: !0,
      createCustomTween: (e, t, r, o, s, i, a) => zh(t, r, s, a),
    });
  }
});
var ec = O((So) => {
  "use strict";
  Object.defineProperty(So, "__esModule", { value: !0 });
  function Kh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Kh(So, {
    applyAdditive: function () {
      return eg;
    },
    formatRandom: function () {
      return Eo;
    },
    formatRandomArray: function () {
      return Za;
    },
    isAdditiveValue: function () {
      return Yh;
    },
    isRandomArrayValue: function () {
      return Xh;
    },
    isRandomValue: function () {
      return bo;
    },
    makeClamp: function () {
      return tg;
    },
    makeRandomArrayPicker: function () {
      return Jh;
    },
    makeRandomPicker: function () {
      return Zh;
    },
  });
  function bo(n) {
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
  function Yh(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-additive" &&
      (typeof e.value == "number" || bo(e.value)) &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function Xh(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-random-array" &&
      Array.isArray(e.values) &&
      e.values.every((t) => typeof t == "number" || typeof t == "string") &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function Eo(n, e) {
    let t = n.unit ?? e ?? "",
      r = n.step != null ? `, ${n.step}` : "";
    return `random(${n.min}, ${n.max}${r})${t}`;
  }
  function Za(n, e) {
    let t = n.unit ?? e ?? "";
    return `random([${n.values.join(", ")}])${t}`;
  }
  function Qa(n) {
    let [e = "", t] = String(n).split("e"),
      r = (e.split(".")[1] || "").length;
    return t === void 0 ? r : Math.max(0, r - Number(t));
  }
  function Qh(n, e) {
    if (n <= 1) return 0;
    if (e === void 0) return Math.floor(Math.random() * n);
    let t = Math.floor(Math.random() * (n - 1));
    return t < e ? t : t + 1;
  }
  function Ja(n, e, t) {
    let r = new WeakMap(),
      o = (s, i) => {
        let a = Qh(n, r.get(i));
        return r.set(i, a), e(a);
      };
    return (o.legacyExpression = t), o;
  }
  function Zh(n) {
    let e = n.unit ?? "",
      t = (u) => (e ? `${u}${e}` : u),
      r = Eo(n);
    if (!n.step) {
      let { min: u, max: f } = n,
        d = (p, h) => t(u + Math.random() * (f - u));
      return (d.legacyExpression = r), d;
    }
    let o = Math.abs(n.step),
      s = Math.min(n.min, n.max),
      i = Math.max(n.min, n.max),
      a = Math.round((i - s) / o),
      c = Math.max(Qa(s), Qa(o)),
      l = 10 ** c;
    return Ja(
      a + 1,
      (u) => {
        let f = s + u * o,
          d = c ? Math.round(f * l) / l : f;
        return t(Math.min(i, Math.max(s, d)));
      },
      r
    );
  }
  function Jh(n) {
    let e = n.unit ?? "",
      t = [...new Set(n.values)];
    return Ja(
      t.length,
      (r) => {
        let o = t[r] ?? 0;
        return typeof o == "number" && e ? `${o}${e}` : o;
      },
      Za(n)
    );
  }
  function eg(n, e) {
    let t = n.unit ?? e ?? "";
    return bo(n.value) ? `+=${Eo(n.value, t)}` : `+=${n.value}${t}`;
  }
  function tg(n, e) {
    let t = (r) => (r < n ? n : r > e ? e : r);
    return (r) => {
      if (typeof r == "number") return t(r);
      let o = parseFloat(r);
      if (Number.isNaN(o)) return r;
      let s = t(o);
      return s === o
        ? r
        : `${s}${r.replace(/^\s*[+-]?[\d.]+(?:e[+-]?\d+)?/i, "")}`;
    };
  }
});
var Oo = O((wo) => {
  "use strict";
  Object.defineProperty(wo, "__esModule", { value: !0 });
  function ng(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ng(wo, {
    build: function () {
      return ag;
    },
    createStyleTweenConfig: function () {
      return oc;
    },
  });
  var ot = Be(),
    rg = Xa(),
    D = ec();
  function tc(n, e) {
    return e != null && typeof n == "string" && n.startsWith("var(")
      ? (0, ot.resolveToString)(n, e) ?? n
      : n;
  }
  var nc = new Set(["opacity", "autoAlpha"]),
    og = new Set(["scale", "scaleX", "scaleY", "z", "transformPerspective"]),
    sg = new Set(["xPercent", "yPercent"]),
    rc = new Set(["width", "height"]);
  function Nt(n) {
    return n.startsWith("+=") || n.startsWith("-=") || n.startsWith("random(");
  }
  function ig(n) {
    if (nc.has(n)) return (0, D.makeClamp)(0, 1);
    if (og.has(n) || rc.has(n)) return (0, D.makeClamp)(0, Number.MAX_VALUE);
  }
  function Ft(n) {
    return (
      (0, D.isRandomValue)(n) ||
      (0, D.isAdditiveValue)(n) ||
      (0, D.isRandomArrayValue)(n)
    );
  }
  function Dt(n, e) {
    let t = nc.has(n) ? 100 : 1,
      r = t !== 1 || sg.has(n),
      o = (s) => ({
        type: "ix3-random",
        min: s.min / t,
        max: s.max / t,
        step: s.step != null ? s.step / t : void 0,
      });
    if ((0, D.isRandomArrayValue)(e)) {
      let s = r
        ? {
            type: "ix3-random-array",
            values: e.values.map((i) => (typeof i == "number" ? i / t : i)),
          }
        : e;
      return (0, D.makeRandomArrayPicker)(s);
    }
    if ((0, D.isRandomValue)(e)) return (0, D.makeRandomPicker)(r ? o(e) : e);
    if (r) {
      let s = (0, D.isRandomValue)(e.value) ? o(e.value) : e.value / t;
      return (0, D.applyAdditive)({ type: "ix3-additive", value: s });
    }
    return (0, D.applyAdditive)(e);
  }
  function oc(n, e) {
    let t = { to: {}, from: {} },
      r = e?.[0];
    for (let o in n) {
      let s = n[o],
        i = Array.isArray(s) ? s[1] : s,
        a = Array.isArray(s) ? s[0] : void 0,
        c = Ft(i) ? Dt(o, i) : tc(i, r),
        l = Ft(a) ? Dt(o, a) : a !== void 0 ? tc(a, r) : void 0;
      c != null && (t.to[o] = c),
        l != null && !(0, D.isAdditiveValue)(i) && (t.from[o] = l),
        rc.has(o) &&
          (Ft(i) || Ft(a)) &&
          (t.modifiers || (t.modifiers = {}),
          (t.modifiers[o] = (0, D.makeClamp)(0, Number.MAX_VALUE)));
    }
    return t;
  }
  function ag(n) {
    (0, rg.buildMouseFollowAction)(n),
      n
        .addAction("class", {
          createCustomTween: (e, t, r, o, s, i) => {
            let a = r.class,
              c = a?.selectors || [],
              l = a?.operation,
              u = c
                ? s.map((d) => ({ element: d, classList: [...d.classList] }))
                : [],
              f = () => {
                if (!(!l || !c))
                  for (let d of s)
                    l === "addClass"
                      ? c.forEach((p) => d.classList.add(p))
                      : l === "removeClass"
                      ? c.forEach((p) => d.classList.remove(p))
                      : l === "toggleClass" &&
                        c.forEach((p) => d.classList.toggle(p));
              };
            return (
              e.to(
                {},
                { duration: 0.001, onComplete: f, onReverseComplete: f },
                !i || i === 0 ? 0.001 : i
              ),
              () => {
                if (c) {
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
        .addAction("style", { createTweenConfig: oc })
        .addAction("transform", {
          createTweenConfig: (e, t) => {
            let r = { to: {}, from: {} },
              o = t?.[0];
            for (let s in e) {
              let i = e[s],
                a = Array.isArray(i) ? i[1] : i,
                c = Array.isArray(i) ? i[0] : void 0,
                l = (0, D.isAdditiveValue)(a),
                u =
                  (0, D.isRandomValue)(a) || (0, D.isRandomArrayValue)(a) || l,
                f =
                  (0, D.isRandomValue)(c) ||
                  (0, D.isRandomArrayValue)(c) ||
                  (0, D.isAdditiveValue)(c);
              if (u || f) {
                let d = ig(s);
                d &&
                  (r.modifiers || (r.modifiers = {}),
                  (r.modifiers[s] = d),
                  s === "autoAlpha" && (r.modifiers.opacity = d),
                  s === "scale" &&
                    ((r.modifiers.scaleX = d), (r.modifiers.scaleY = d))),
                  u && (a = Dt(s, a)),
                  f && (c = Dt(s, c));
              }
              switch (s) {
                case "autoAlpha":
                case "opacity": {
                  if (a != null && typeof a == "string" && !Nt(a)) {
                    let d = o ? (0, ot.resolveToNumber)(a, o) : parseFloat(a);
                    a = d !== void 0 ? d / 100 : a;
                  }
                  if (c != null && typeof c == "string" && !Nt(c)) {
                    let d = o ? (0, ot.resolveToNumber)(c, o) : parseFloat(c);
                    c = d !== void 0 ? d / 100 : c;
                  }
                  break;
                }
                case "transformOrigin": {
                  typeof i == "string"
                    ? ((a = a || i), (c = a))
                    : typeof c == "string"
                    ? (a = c)
                    : typeof a == "string" && (c = a);
                  break;
                }
                case "xPercent":
                case "yPercent": {
                  if (a != null && typeof a == "string" && !Nt(a)) {
                    let d = o ? (0, ot.resolveToNumber)(a, o) : parseFloat(a);
                    a = d !== void 0 ? d : a;
                  }
                  if (c != null && typeof c == "string" && !Nt(c)) {
                    let d = o ? (0, ot.resolveToNumber)(c, o) : parseFloat(c);
                    c = d !== void 0 ? d : c;
                  }
                  break;
                }
              }
              a != null && (r.to[s] = a), c != null && !l && (r.from[s] = c);
            }
            return r;
          },
        });
  }
});
var ac = O((Ao) => {
  "use strict";
  Object.defineProperty(Ao, "__esModule", { value: !0 });
  Object.defineProperty(Ao, "buildLottieAction", {
    enumerable: !0,
    get: function () {
      return lg;
    },
  });
  var cg = Be();
  function lg(n) {
    n.addAction("lottie", {
      createCustomTween: (e, t, r, o, s, i) => {
        let a = r.lottie;
        if (!a || !s.length || !window.Webflow) return;
        let c = window.Webflow.require?.("lottie");
        if (!c) return;
        let l = [],
          u = !1;
        for (let f of s) {
          let d = ic(a.from, f, sc.FROM),
            p = ic(a.to, f, sc.TO),
            h = c.createInstance(f);
          if (!h) continue;
          l.push(h);
          let g = () => {
            if (u) return;
            let y = h.frames,
              S = Math.round(d * y),
              b = Math.round(p * y);
            h.gsapFrame === null && (h.gsapFrame = S);
            let m = o;
            m.ease || (m = { ...m, ease: "none" }),
              e.fromTo(h, { gsapFrame: S }, { gsapFrame: b, ...m }, i || 0);
          };
          h.isLoaded ? g() : h.onDataReady(g);
        }
        return () => {
          u = !0;
          for (let f of l) f.goToFrameAndStop(0), (f.gsapFrame = null);
        };
      },
    });
  }
  var sc = { DURATION: 1, FROM: 0, TO: 1 };
  function ic(n, e, t) {
    if (typeof n == "number") return n;
    let r = (0, cg.resolveToNumber)(n, e);
    return r !== void 0 ? r / 100 : t;
  }
});
var Io = O((_o) => {
  "use strict";
  Object.defineProperty(_o, "__esModule", { value: !0 });
  Object.defineProperty(_o, "RIVE_CONSTANTS", {
    enumerable: !0,
    get: function () {
      return ug;
    },
  });
  var ug = { MINIMUM_TIME: 0.001, MAX_BYTE_VALUE: 255 };
});
var Co = O((Mo) => {
  "use strict";
  Object.defineProperty(Mo, "__esModule", { value: !0 });
  function fg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  fg(Mo, {
    clearSurfaceCache: function () {
      return dg;
    },
    surfaceCache: function () {
      return Ro;
    },
  });
  var Ro = new WeakMap();
  function dg(n, e) {
    if (!e) return;
    let t = `${e.name}:${e.instanceName ?? ""}`,
      r = Ro.get(n);
    r && (r.delete(t), r.size === 0 && Ro.delete(n));
  }
});
var st = O((Po) => {
  "use strict";
  Object.defineProperty(Po, "__esModule", { value: !0 });
  function pg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  pg(Po, {
    parseVmKey: function () {
      return mg;
    },
    vmKey: function () {
      return hg;
    },
  });
  function hg(n, e, t) {
    return `vm:${n}:${e}:${t}`;
  }
  var gg = new Set([
    "string",
    "number",
    "boolean",
    "color",
    "enum",
    "trigger",
    "artboard",
  ]);
  function mg(n) {
    if (!n.startsWith("vm:")) return null;
    let e = n.lastIndexOf(":"),
      t = n.slice(e + 1);
    if (!gg.has(t)) return null;
    let r = n.slice(3, e),
      o = r.indexOf(":");
    return o === -1
      ? null
      : { vmName: r.slice(0, o), propName: r.slice(o + 1), propType: t };
  }
});
var Vt = O((xo) => {
  "use strict";
  Object.defineProperty(xo, "__esModule", { value: !0 });
  function yg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  yg(xo, {
    getVmiProperty: function () {
      return cc;
    },
    storeOriginalValues: function () {
      return vg;
    },
  });
  var Tg = st();
  function vg(n, e) {
    let t = { viewModelProperties: {} };
    for (let r of n) bg(e, r.propertyName, r.propertyType, t);
    return t;
  }
  function bg(n, e, t, r) {
    let o = (0, Tg.vmKey)(n.name, e, t);
    if (!(o in r.viewModelProperties)) {
      if (t === "artboard") {
        let i = n.riveInstance.viewModelInstance?.artboard?.(e)?.name;
        i != null && (r.viewModelProperties[o] = i);
        return;
      }
      let s = n.riveInstance.viewModelInstance
        ? Eg(n.riveInstance.viewModelInstance, t, e)
        : null;
      s != null && (r.viewModelProperties[o] = s);
    }
  }
  function cc(n, e, t) {
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
  function Eg(n, e, t) {
    let r = cc(n, e, t);
    return r ? r.value : void 0;
  }
});
var Lo = O((ko) => {
  "use strict";
  Object.defineProperty(ko, "__esModule", { value: !0 });
  Object.defineProperty(ko, "parseColorToAARRGGBB", {
    enumerable: !0,
    get: function () {
      return wg;
    },
  });
  var Sg = Io();
  function wg(n) {
    let e = n.trim();
    if (!e) return null;
    try {
      let { red: t, green: r, blue: o, alpha: s } = Ag(e);
      return t === void 0 || r === void 0 || o === void 0
        ? null
        : ((Math.round(s * Sg.RIVE_CONSTANTS.MAX_BYTE_VALUE) << 24) |
            (t << 16) |
            (r << 8) |
            o) >>>
            0;
    } catch {
      return null;
    }
  }
  var we = null;
  function Og(n) {
    if (!we) {
      let e = document.createElement("canvas");
      if (((e.width = 1), (e.height = 1), (we = e.getContext("2d")), !we))
        return null;
    }
    return (
      (we.fillStyle = "#000000"),
      (we.fillStyle = n),
      we.fillStyle === "#000000" && n.toLowerCase() !== "black"
        ? null
        : we.fillStyle
    );
  }
  function lc(n, e, t) {
    let r = (1 - Math.abs(2 * t - 1)) * e,
      o = r * (1 - Math.abs(((n / 60) % 2) - 1)),
      s = t - r / 2,
      i,
      a,
      c;
    return (
      n >= 0 && n < 60
        ? ((i = r), (a = o), (c = 0))
        : n >= 60 && n < 120
        ? ((i = o), (a = r), (c = 0))
        : n >= 120 && n < 180
        ? ((i = 0), (a = r), (c = o))
        : n >= 180 && n < 240
        ? ((i = 0), (a = o), (c = r))
        : n >= 240 && n < 300
        ? ((i = o), (a = 0), (c = r))
        : ((i = r), (a = 0), (c = o)),
      {
        red: Math.round((i + s) * 255),
        green: Math.round((a + s) * 255),
        blue: Math.round((c + s) * 255),
      }
    );
  }
  function Ag(n) {
    let e,
      t,
      r,
      o = 1,
      s = n.replace(/\s/g, "").toLowerCase(),
      i = s;
    if (!i.startsWith("#") && !i.startsWith("rgb") && !i.startsWith("hsl")) {
      let a = Og(s);
      a && (i = a);
    }
    if (i.startsWith("#")) {
      let a = i.substring(1);
      a.length === 3 || a.length === 4
        ? ((e = parseInt(a.charAt(0) + a.charAt(0), 16)),
          (t = parseInt(a.charAt(1) + a.charAt(1), 16)),
          (r = parseInt(a.charAt(2) + a.charAt(2), 16)),
          a.length === 4 && (o = parseInt(a.charAt(3) + a.charAt(3), 16) / 255))
        : (a.length === 6 || a.length === 8) &&
          ((e = parseInt(a.substring(0, 2), 16)),
          (t = parseInt(a.substring(2, 4), 16)),
          (r = parseInt(a.substring(4, 6), 16)),
          a.length === 8 && (o = parseInt(a.substring(6, 8), 16) / 255));
    } else if (i.startsWith("rgba")) {
      let a = i.match(/rgba\(([^)]+)\)/)?.[1]?.split(",");
      (e = parseInt(a?.[0] ?? "", 10)),
        (t = parseInt(a?.[1] ?? "", 10)),
        (r = parseInt(a?.[2] ?? "", 10)),
        (o = parseFloat(a?.[3] ?? ""));
    } else if (i.startsWith("rgb")) {
      let a = i.match(/rgb\(([^)]+)\)/)?.[1]?.split(",");
      (e = parseInt(a?.[0] ?? "", 10)),
        (t = parseInt(a?.[1] ?? "", 10)),
        (r = parseInt(a?.[2] ?? "", 10));
    } else if (i.startsWith("hsla")) {
      let a = i.match(/hsla\(([^)]+)\)/)?.[1]?.split(","),
        c = parseFloat(a?.[0] ?? ""),
        l = parseFloat(a?.[1]?.replace("%", "") ?? "") / 100,
        u = parseFloat(a?.[2]?.replace("%", "") ?? "") / 100;
      (o = parseFloat(a?.[3] ?? "")),
        ({ red: e, green: t, blue: r } = lc(c, l, u));
    } else if (i.startsWith("hsl")) {
      let a = i.match(/hsl\(([^)]+)\)/)?.[1]?.split(","),
        c = parseFloat(a?.[0] ?? ""),
        l = parseFloat(a?.[1]?.replace("%", "") ?? "") / 100,
        u = parseFloat(a?.[2]?.replace("%", "") ?? "") / 100;
      ({ red: e, green: t, blue: r } = lc(c, l, u));
    }
    if (
      Number.isNaN(e) ||
      Number.isNaN(t) ||
      Number.isNaN(r) ||
      Number.isNaN(o)
    )
      throw new Error(`Invalid color value: '${n}'`);
    return { red: e, green: t, blue: r, alpha: o };
  }
});
var Fo = O((No) => {
  "use strict";
  Object.defineProperty(No, "__esModule", { value: !0 });
  Object.defineProperty(No, "setVmiValue", {
    enumerable: !0,
    get: function () {
      return Mg;
    },
  });
  var _g = st(),
    Ig = Vt(),
    Rg = Lo();
  function Mg(n, e, t, r, o, s) {
    let i = n.riveInstance.viewModelInstance;
    if (e === "trigger") {
      if (s) return;
      i?.trigger?.(t)?.fire?.();
      return;
    }
    if (!i) return;
    let a = (0, Ig.getVmiProperty)(i, e, t);
    if (!a) return;
    let c = o?.viewModelProperties[(0, _g.vmKey)(n.name, t, e)],
      l = s ? c ?? r : r,
      u = `${e}:${t}`;
    switch (e) {
      case "number":
        typeof l == "number" && ((a.value = l), (n.currentValues[u] = l));
        return;
      case "boolean":
        typeof l == "boolean" && ((a.value = l), (n.currentValues[u] = l));
        return;
      case "string":
        typeof l == "string" && ((a.value = l), (n.currentValues[u] = l));
        return;
      case "enum":
        typeof l == "string" && ((a.value = l), (n.currentValues[u] = l));
        return;
      case "color": {
        let f =
          typeof l == "number"
            ? l
            : typeof l == "string"
            ? (0, Rg.parseColorToAARRGGBB)(l)
            : null;
        f != null && ((a.value = f), (n.currentValues[u] = f));
        return;
      }
      default:
        return;
    }
  }
});
var fc = O((Do) => {
  "use strict";
  Object.defineProperty(Do, "__esModule", { value: !0 });
  function Cg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Cg(Do, {
    createCleanupFunction: function () {
      return Lg;
    },
    restoreViewModelProperties: function () {
      return uc;
    },
  });
  var Pg = st(),
    xg = Fo(),
    kg = Co();
  function uc(n, e, t) {
    let r = n.viewModelInstance ?? null;
    if (r)
      for (let [o, s] of Object.entries(t.viewModelProperties)) {
        let i = (0, Pg.parseVmKey)(o);
        if (!i || i.vmName !== e) continue;
        let a = { name: e, riveInstance: n, currentValues: {} };
        if (i.propType === "artboard") {
          if (typeof s != "string") continue;
          let c = r.artboard?.(i.propName),
            l = n.getArtboard?.(s);
          c && l && (c.value = l);
          continue;
        }
        (0, xg.setVmiValue)(a, i.propType, i.propName, s);
      }
  }
  function Lg(n, e, t) {
    return () => {
      !e || !n || (uc(n, e.name, t), (0, kg.clearSurfaceCache)(n, e));
    };
  }
});
var hc = O((Vo) => {
  "use strict";
  Object.defineProperty(Vo, "__esModule", { value: !0 });
  function Ng(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Ng(Vo, {
    interpolateAARRGGBB: function () {
      return pc;
    },
    setupAnimateTimeline: function () {
      return Vg;
    },
  });
  var Fg = Vt(),
    Dg = Lo(),
    dc = Be();
  function pc(n, e, t) {
    let r = (n >>> 24) & 255,
      o = (n >>> 16) & 255,
      s = (n >>> 8) & 255,
      i = n & 255,
      a = (e >>> 24) & 255,
      c = (e >>> 16) & 255,
      l = (e >>> 8) & 255,
      u = e & 255,
      f = Math.round(r + (a - r) * t),
      d = Math.round(o + (c - o) * t),
      p = Math.round(s + (l - s) * t),
      h = Math.round(i + (u - i) * t);
    return ((f << 24) | (d << 16) | (p << 8) | h) >>> 0;
  }
  function Vg(n, e, t, r, o, s) {
    if (t.length === 0) return;
    let i = e.riveInstance.viewModelInstance;
    if (i)
      for (let a of t) {
        if (
          a.value === null ||
          a.value === void 0 ||
          !(0, Fg.getVmiProperty)(i, a.propertyType, a.propertyName)
        )
          continue;
        let l,
          u = a.value;
        if (typeof u == "string" && u.startsWith("var(")) {
          if (
            (a.propertyType === "number"
              ? (l = (0, dc.resolveToNumber)(u, s))
              : a.propertyType === "color" &&
                (l = (0, dc.resolveToString)(u, s)),
            l === void 0)
          )
            continue;
        } else l = u;
        a.propertyType === "number"
          ? Bg(e, n, a.propertyName, l, r, o)
          : a.propertyType === "color" && jg(e, n, a.propertyName, l, r, o);
      }
  }
  function Bg(n, e, t, r, o, s) {
    let i = n.riveInstance.viewModelInstance;
    if (!i) return;
    let a = i.number(t);
    if (!a) return;
    let c = typeof r == "number" ? r : parseFloat(String(r));
    if (isNaN(c)) return;
    let l = { v: a.value };
    e.to(
      l,
      {
        ...o,
        v: c,
        onStart() {
          let u = n.currentValues[`number:${t}`];
          (l.v = typeof u == "number" ? u : a.value), this.invalidate();
        },
        onUpdate: () => {
          a.value = l.v;
        },
      },
      s ?? 0
    );
  }
  function jg(n, e, t, r, o, s) {
    let i = n.riveInstance.viewModelInstance;
    if (!i) return;
    let a = i.color(t);
    if (!a) return;
    let c = typeof r == "number" ? r : (0, Dg.parseColorToAARRGGBB)(String(r));
    if (c == null) return;
    let l = { fromPacked: a.value },
      u = { t: 0 };
    e.fromTo(
      u,
      { t: 0 },
      {
        ...o,
        t: 1,
        onStart() {
          let f = n.currentValues[`color:${t}`];
          (l.fromPacked = typeof f == "number" ? f : a.value),
            this.invalidate();
        },
        onUpdate: () => {
          a.value = pc(l.fromPacked, c, u.t);
        },
      },
      s ?? 0
    );
  }
});
var vc = O((Go) => {
  "use strict";
  Object.defineProperty(Go, "__esModule", { value: !0 });
  function Gg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Gg(Go, {
    resolveSurfaceArea: function () {
      return jo;
    },
    setupAnimateAnimation: function () {
      return Wg;
    },
    setupAnimation: function () {
      return zg;
    },
    setupTimeline: function () {
      return Tc;
    },
  });
  var gc = Io(),
    Bo = Co(),
    mc = Vt(),
    yc = fc(),
    Ug = Fo(),
    $g = hc(),
    qg = st(),
    Bt = Be();
  function jo(n, e) {
    if (!e) return null;
    let t = `${e.name}:${e.instanceName ?? ""}`,
      r = Bo.surfaceCache.get(n)?.get(t);
    if (r) return r;
    let s =
      (n.viewModelByName?.(e.name) ?? void 0)?.instanceByName?.(
        e.instanceName ?? ""
      ) ?? null;
    n.bindViewModelInstance?.(s);
    let i = { name: e.name, riveInstance: n, currentValues: {} },
      a = Bo.surfaceCache.get(n);
    return a || ((a = new Map()), Bo.surfaceCache.set(n, a)), a.set(t, i), i;
  }
  function Tc(n, e, t, r, o, s) {
    if (t.length === 0) return;
    for (let c of t) {
      if (
        c.propertyType === "trigger" ||
        c.propertyType === "artboard" ||
        c.value === null ||
        c.value === void 0
      )
        continue;
      let l = c.value,
        u;
      typeof l == "string" && l.startsWith("var(")
        ? (u =
            c.propertyType === "number"
              ? (0, Bt.resolveToNumber)(l, s)
              : c.propertyType === "color"
              ? (0, Bt.resolveToString)(l, s)
              : void 0)
        : (u = l),
        u !== void 0 &&
          (e.currentValues[`${c.propertyType}:${c.propertyName}`] = u);
    }
    let i = (c) => {
        for (let l of t) {
          if (
            (l.propertyType !== "trigger" && l.value === null) ||
            l.value === void 0
          )
            continue;
          let u,
            f = l.value;
          if (typeof f == "string" && f.startsWith("var(")) {
            if (
              (l.propertyType === "number"
                ? (u = (0, Bt.resolveToNumber)(f, s))
                : l.propertyType === "color" &&
                  (u = (0, Bt.resolveToString)(f, s)),
              u === void 0)
            )
              continue;
          } else u = f;
          Hg(e, l.propertyName, l.propertyType, u, r, c);
        }
      },
      a = { int: 0 };
    n.to(
      a,
      {
        int: 1,
        duration: gc.RIVE_CONSTANTS.MINIMUM_TIME,
        onStart: () => {
          i(!1);
        },
        onReverseComplete: () => {
          i(!0);
        },
      },
      o ?? gc.RIVE_CONSTANTS.MINIMUM_TIME
    );
  }
  function Hg(n, e, t, r, o, s) {
    if (t === "artboard") {
      if (typeof r != "string") return;
      let i = n.riveInstance.viewModelInstance?.artboard?.(e);
      if (!i) return;
      if (s) {
        let c = (0, qg.vmKey)(n.name, e, t),
          l = o?.viewModelProperties[c];
        if (typeof l == "string") {
          let u = n.riveInstance.getArtboard?.(l);
          u && (i.value = u);
        }
        return;
      }
      let a = n.riveInstance.getArtboard?.(r);
      if (!a) return;
      i.value = a;
      return;
    }
    (0, Ug.setVmiValue)(n, t, e, r, o, s);
  }
  function zg(n, e, t, r, o) {
    let s = e.animationSource,
      i = jo(n, s);
    if (!i) return;
    let a = e.addedProperties ?? {},
      c = Object.values(a),
      l = (0, mc.storeOriginalValues)(c, i);
    return Tc(t, i, c, l, r, o), (0, yc.createCleanupFunction)(n, s, l);
  }
  function Wg(n, e, t, r, o, s) {
    let i = e.animationSource,
      a = jo(n, i);
    if (!a) return;
    let c = e.addedProperties ?? {},
      l = Object.values(c),
      u = (0, mc.storeOriginalValues)(l, a);
    return (
      (0, $g.setupAnimateTimeline)(t, a, l, r, o, s),
      (0, yc.createCleanupFunction)(n, i, u)
    );
  }
});
var Ac = O((Uo) => {
  "use strict";
  Object.defineProperty(Uo, "__esModule", { value: !0 });
  function Kg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Kg(Uo, {
    buildAnimateRiveAction: function () {
      return Qg;
    },
    buildRiveAction: function () {
      return Xg;
    },
  });
  var Sc = vc();
  function bc(n) {
    return (
      typeof n == "object" &&
      n !== null &&
      "loaded" in n &&
      typeof n.loaded == "boolean"
    );
  }
  function Ec(n) {
    !n.isPlaying && n.play && n.play();
  }
  function Yg(n, e, t) {
    let o = e.getInstance(n)?.rive,
      s = bc(o) ? o : null;
    if (s?.loaded) return Ec(s), t(s, n);
    let i,
      a = !1,
      c = () => {
        if (a || !n.isConnected) return;
        let u = e.getInstance(n)?.rive,
          f = bc(u) ? u : null;
        f?.loaded && (Ec(f), (i = t(f, n))),
          n.removeEventListener("w-rive-load", c);
      };
    return (
      n.addEventListener("w-rive-load", c),
      () => {
        (a = !0), n.removeEventListener("w-rive-load", c), i?.();
      }
    );
  }
  function wc(n, e, t) {
    let r = [];
    for (let o of n) {
      let s = Yg(o, e, t);
      s && r.push(s);
    }
    if (r.length !== 0)
      return () => {
        for (let o of r) o();
      };
  }
  function Oc() {
    return window.Webflow ? window.Webflow.require?.("rive") ?? null : null;
  }
  function Xg(n) {
    n.addAction("rive", {
      createCustomTween: (e, t, r, o, s, i) => {
        let a = r.rive;
        if (!a || !s.length) return;
        let c = Oc();
        if (c) return wc(s, c, (l, u) => (0, Sc.setupAnimation)(l, a, e, i, u));
      },
    });
  }
  function Qg(n) {
    n.addAction("animate-rive", {
      createCustomTween: (e, t, r, o, s, i) => {
        let a = r.rive;
        if (!a || !s.length) return;
        let c = Oc();
        if (c)
          return wc(s, c, (l, u) =>
            (0, Sc.setupAnimateAnimation)(l, a, e, o, i, u)
          );
      },
    });
  }
});
var Oe = O(($o) => {
  "use strict";
  Object.defineProperty($o, "__esModule", { value: !0 });
  function Zg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Zg($o, {
    checkTt: function () {
      return rm;
    },
    hasBBoxUpdate: function () {
      return tm;
    },
    hasIntensity: function () {
      return Jg;
    },
    hasMatrixUpdate: function () {
      return nm;
    },
    hasRenderOrder: function () {
      return em;
    },
  });
  var jt = K(),
    Jg = (n) => "intensity" in n,
    em = (n) => "renderOrder" in n,
    tm = (n) => "singleBBoxNeedsUpdate" in n && "recursiveBBoxNeedsUpdate" in n,
    nm = (n) => "updateMatrix" in n && "updateMatrixWorld" in n,
    rm = (n, e) =>
      e === "from"
        ? n === jt.TweenType.From || n === jt.TweenType.FromTo
        : n === jt.TweenType.To || n === jt.TweenType.FromTo;
});
var Ho = O((qo) => {
  "use strict";
  Object.defineProperty(qo, "__esModule", { value: !0 });
  Object.defineProperty(qo, "colorDataToCss", {
    enumerable: !0,
    get: function () {
      return om;
    },
  });
  var om = ({ r: n, g: e, b: t, a: r }) => {
    let o = (l) => Math.round(Math.min(1, Math.max(0, l)) * 255),
      s = o(n),
      i = o(e),
      a = o(t);
    if (r === void 0 || r >= 1) return `rgba(${s}, ${i}, ${a}, 1)`;
    let c = Math.min(1, Math.max(0, r));
    return `rgba(${s}, ${i}, ${a}, ${c})`;
  };
});
var _c = O((zo) => {
  "use strict";
  Object.defineProperty(zo, "__esModule", { value: !0 });
  Object.defineProperty(zo, "storeOriginalState", {
    enumerable: !0,
    get: function () {
      return am;
    },
  });
  var sm = Oe(),
    im = Ho(),
    am = (n, e, t) => {
      let r = n.material,
        o = Array.isArray(r) ? r : r ? [r] : [],
        s = e.spline._scene.entityByUuid[t]?.color,
        i = s ? (0, im.colorDataToCss)(s) : void 0,
        a = n.rotation;
      return {
        position: { ...n.position },
        rotation: { x: a._x ?? 0, y: a._y ?? 0, z: a._z ?? 0 },
        scale: { ...n.scale },
        ...(i ? { color: i } : {}),
        intensity: n.intensity,
        renderOrder: (0, sm.hasRenderOrder)(n) ? n.renderOrder : void 0,
        materials: o?.map((c) => ({
          transparent: c.transparent,
          depthWrite: c.depthWrite,
          alpha: c.alpha,
          layers: (c.layers ?? []).map((l) => ({
            visible: l.visible,
            alpha: l.alpha,
            alphaOverride: l.alphaOverride,
            ior: l.ior,
            thickness: l.thickness,
          })),
        })),
      };
    };
});
var it = O((Wo) => {
  "use strict";
  Object.defineProperty(Wo, "__esModule", { value: !0 });
  Object.defineProperty(Wo, "SPLINE_CONSTANTS", {
    enumerable: !0,
    get: function () {
      return cm;
    },
  });
  var cm = {
    OPACITY_RENDER_ORDER: 999,
    TRANSITION_END_OFFSET: 0.001,
    DEFAULT_TRANSITION_DURATION: 0.5,
    OPACITY_TRANSPARENCY_THRESHOLD: 0.01,
    DEFAULT_TRANSMISSION_IOR: 1.3,
    DEFAULT_TRANSMISSION_THICKNESS: 10,
    MIN_ZOOM_VALUE: 1e-4,
  };
});
var Gt = O((Ko) => {
  "use strict";
  Object.defineProperty(Ko, "__esModule", { value: !0 });
  function lm(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  lm(Ko, {
    getAppZoom: function () {
      return fm;
    },
    setAppZoom: function () {
      return dm;
    },
  });
  var um = it(),
    fm = (n) => {
      let e = n._camera;
      return e._cameraType === "OrthographicCamera"
        ? e.orthoCamera.zoom
        : e.perspCamera.zoom;
    },
    dm = (n, e) => {
      let t = e > 0 ? e : um.SPLINE_CONSTANTS.MIN_ZOOM_VALUE;
      n.setZoom?.(t);
    };
});
var Xo = O((Yo) => {
  "use strict";
  Object.defineProperty(Yo, "__esModule", { value: !0 });
  Object.defineProperty(Yo, "createCleanupFunction", {
    enumerable: !0,
    get: function () {
      return hm;
    },
  });
  var pm = Gt(),
    Ut = Oe(),
    hm = (n, e, t, r, o, s) => () => {
      if (!(!n || !t)) {
        if (
          (s && (n.state = void 0),
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
            (0, Ut.hasIntensity)(n) &&
            (n.intensity = t.intensity),
          r.spline?.zoom && typeof r.spline.zoom == "object")
        ) {
          let i = e.spline;
          typeof i?.setZoom == "function" && (0, pm.setAppZoom)(i, o ?? 1);
        }
        if (t.materials) {
          let i = n.material,
            a = Array.isArray(i) ? i : i ? [i] : [];
          (0, Ut.hasRenderOrder)(n) && (n.renderOrder = t.renderOrder ?? 0);
          let c = Math.min(a.length, t.materials.length);
          for (let l = 0; l < c; l++) {
            let u = a[l],
              f = t.materials[l];
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
        (0, Ut.hasMatrixUpdate)(n) &&
          (n.updateMatrix(), n.updateMatrixWorld(!0)),
          (0, Ut.hasBBoxUpdate)(n) &&
            ((n.singleBBoxNeedsUpdate = !0), (n.recursiveBBoxNeedsUpdate = !0)),
          e.spline.requestRender();
      }
    };
});
var Ic = O((Qo) => {
  "use strict";
  Object.defineProperty(Qo, "__esModule", { value: !0 });
  function gm(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  gm(Qo, {
    warnNoObjectId: function () {
      return mm;
    },
    warnNoObjectsFound: function () {
      return Tm;
    },
    warnObjectNotFound: function () {
      return ym;
    },
  });
  var mm = () => {},
    ym = (n) => {},
    Tm = (n) => {};
});
var Cc = O((Zo) => {
  "use strict";
  Object.defineProperty(Zo, "__esModule", { value: !0 });
  Object.defineProperty(Zo, "animateStateTransitions", {
    enumerable: !0,
    get: function () {
      return bm;
    },
  });
  var Rc = it(),
    vm = Xo(),
    Mc = Oe(),
    bm = (n, e, t, r, o, s, i, a, c, l) => {
      let u = [];
      n.forEach((d) => {
        if (!d.transition) {
          u.push(null);
          return;
        }
        let p = c.duration ?? Rc.SPLINE_CONSTANTS.DEFAULT_TRANSITION_DURATION,
          h = d.transition({
            from:
              e.stateName?.from && (0, Mc.checkTt)(a, "from")
                ? e.stateName.from
                : void 0,
            to:
              e.stateName?.to && (0, Mc.checkTt)(a, "to")
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
            ...c,
            time: p - Rc.SPLINE_CONSTANTS.TRANSITION_END_OFFSET,
            onUpdate: () => {
              h.seek(g.time);
            },
          },
          l || 0
        );
      });
      let f = n.map((d, p) =>
        (0, vm.createCleanupFunction)(d, t, r[p], o, s, u[p])
      );
      return () => f.forEach((d) => d?.());
    };
});
var xc = O((Jo) => {
  "use strict";
  Object.defineProperty(Jo, "__esModule", { value: !0 });
  function Em(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Em(Jo, {
    animateColor: function () {
      return Am;
    },
    animateIntensity: function () {
      return wm;
    },
    animateZoom: function () {
      return Om;
    },
  });
  var Pc = Gt(),
    Sm = Ho(),
    Ae = Oe(),
    wm = (n, e, t, r, o, s) => {
      let i = e.intensity;
      if (!i || typeof i != "object") return;
      let a = n.intensity ?? 0,
        c = i.from && (0, Ae.checkTt)(r, "from") ? i.from : a,
        l = i.to && (0, Ae.checkTt)(r, "to") ? i.to : a,
        u = { v: c };
      t.fromTo(
        u,
        { v: c },
        {
          ...o,
          v: l,
          onUpdate: () => {
            (0, Ae.hasIntensity)(n) && (n.intensity = u.v);
          },
        },
        s || 0
      );
    },
    Om = (n, e, t, r, o, s) => {
      let i = e.zoom;
      if (!i || typeof i != "object" || typeof n.spline?.setZoom != "function")
        return;
      let a = (0, Pc.getAppZoom)(n.spline),
        c = i.from && (0, Ae.checkTt)(r, "from") ? i.from : a,
        l = i.to && (0, Ae.checkTt)(r, "to") ? i.to : a,
        u = { v: c };
      t.fromTo(
        u,
        { v: c },
        {
          ...o,
          v: l,
          onUpdate: () => {
            (0, Pc.setAppZoom)(n.spline, u.v);
          },
        },
        s || 0
      );
    },
    Am = (n, e, t, r, o, s, i, a) => {
      let c = e.color;
      if (!c || typeof c != "object" || (!c.from && !c.to)) return;
      let l = i.spline._scene.entityByUuid[a]?.color,
        u = (0, Sm.colorDataToCss)(l ?? { r: 255, g: 255, b: 255 }),
        f = c.from && (0, Ae.checkTt)(r, "from") ? c.from : u,
        d = c.to && (0, Ae.checkTt)(r, "to") ? c.to : u,
        p = window.gsap.utils.interpolate(f, d),
        h = { t: 0 };
      t.fromTo(
        h,
        { t: 0 },
        {
          ...o,
          t: 1,
          onUpdate: function () {
            n.color = p(h.t);
          },
        },
        s || 0
      );
    };
});
var Lc = O((es) => {
  "use strict";
  Object.defineProperty(es, "__esModule", { value: !0 });
  function _m(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  _m(es, {
    createPropertyObject: function () {
      return kc;
    },
    createTransformTargets: function () {
      return Im;
    },
  });
  var kc = (n, e, t) => {
      let r = {},
        o = t[e];
      return (
        ["X", "Y", "Z"].forEach((s) => {
          let i = `${e}${s}`,
            a = n[i],
            c = s.toLowerCase(),
            l = o[c];
          a &&
            typeof a == "object" &&
            (r[c] = { from: a.from ?? l, to: a.to ?? l });
        }),
        { props: r }
      );
    },
    Im = (n, e) => {
      let t = ["position", "rotation", "scale"],
        r = [];
      return (
        t.forEach((o) => {
          let { props: s } = kc(e, o, n);
          Object.keys(s).length > 0 && r.push({ object: n[o], props: s });
        }),
        r
      );
    };
});
var Nc = O((ns) => {
  "use strict";
  Object.defineProperty(ns, "__esModule", { value: !0 });
  Object.defineProperty(ns, "fadeObject", {
    enumerable: !0,
    get: function () {
      return xm;
    },
  });
  var $t = it(),
    ts = Oe(),
    Rm = (n, e, t, r, o, s) => {
      r.fromTo(n, { alpha: e }, { ...o, alpha: t }, s);
    },
    Mm = (n, e, t, r, o, s) => {
      let i = n.ior ?? $t.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_IOR,
        a = n.thickness ?? $t.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_THICKNESS;
      r.fromTo(
        n,
        { alpha: e, ior: i, thickness: a },
        {
          ...o,
          alpha: 1 - t,
          ior: window.gsap.utils.interpolate(i, 1, 1 - t),
          thickness: window.gsap.utils.interpolate(a, 0, 1 - t),
          onUpdate: () => {
            n.visible =
              n.alpha > $t.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD;
          },
        },
        s
      );
    },
    Cm = (n, e, t, r, o, s) => {
      n.alphaOverride !== void 0 &&
        r.fromTo(n, { alphaOverride: e }, { ...o, alphaOverride: t }, s);
    },
    Pm = (n, e, t, r, o, s) => {
      if (!n.visible) return;
      let i = n.type;
      i === "color" || i === "depth" || i === "outline"
        ? Rm(n, e, t, r, o, s)
        : i === "transmission"
        ? Mm(n, e, t, r, o, s)
        : i === "light" && Cm(n, e, t, r, o, s);
    },
    xm = (n, e, t, r, o, s) => {
      if (!n) return;
      let i = n.material,
        a = i?.layers;
      if (a) {
        (i.transparent = !0),
          (0, ts.hasRenderOrder)(n) &&
            (n.renderOrder = $t.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER);
        for (let c of a) {
          let l = c.type === "light" ? c.alphaOverride ?? 1 : c.alpha ?? 1,
            u = e.from !== void 0 && (0, ts.checkTt)(r, "from") ? e.from : l,
            f = e.to !== void 0 && (0, ts.checkTt)(r, "to") ? e.to : l;
          Pm(c, u, f, t, o, s);
        }
      }
    };
});
var Dc = O((ss) => {
  "use strict";
  Object.defineProperty(ss, "__esModule", { value: !0 });
  Object.defineProperty(ss, "setupAnimation", {
    enumerable: !0,
    get: function () {
      return Bm;
    },
  });
  var km = _c(),
    Lm = Xo(),
    Nm = Gt(),
    rs = Ic(),
    Fm = Cc(),
    os = xc(),
    Dm = Lc(),
    Vm = Nc(),
    qt = Oe(),
    Fc = it(),
    Bm = (n, e, t, r, o, s) => {
      t.ease || (t = { ...t, ease: "none" });
      let { force3D: i, ...a } = t;
      if (((t = { ...a }), !n.spline?.findObjectById)) return;
      let c = e.spline,
        l = (e.objectId || "").split(",").filter(Boolean);
      if (l.length === 0) {
        (0, rs.warnNoObjectId)();
        return;
      }
      let u = l.flatMap((g) => {
        let y = n.spline.findObjectById?.(g);
        return y || ((0, rs.warnObjectNotFound)(g), []);
      });
      if (u.length === 0) {
        (0, rs.warnNoObjectsFound)(l);
        return;
      }
      let f = u.map((g) => (0, km.storeOriginalState)(g, n, l[0] ?? "")),
        d = (0, Nm.getAppZoom)(n.spline);
      if (
        e.animatingState &&
        c?.stateName &&
        (c.stateName.from || c.stateName.to)
      )
        return (0, Fm.animateStateTransitions)(u, c, n, f, e, d, r, o, t, s);
      if (!c) return;
      let p = Object.keys(c);
      if (p.length === 0 || (p.length === 1 && p[0] === "stateName")) return;
      u.forEach((g) => {
        (0, os.animateIntensity)(g, c, r, o, t, s),
          (0, os.animateZoom)(n, c, r, o, t, s),
          (0, os.animateColor)(g, c, r, o, t, s, n, l[0] ?? "");
        let y = c.opacity && typeof c.opacity == "object" ? c.opacity : void 0;
        if (y !== void 0) {
          let b = {
              from: y.from !== void 0 ? y.from / 100 : void 0,
              to: y.to !== void 0 ? y.to / 100 : void 0,
            },
            m =
              t.immediateRender !== !1 &&
              b.from !== void 0 &&
              (0, qt.checkTt)(o, "from")
                ? b.from
                : void 0;
          if (((0, Vm.fadeObject)(g, b, r, o, t, s), m !== void 0)) {
            let w = g.material,
              v = Array.isArray(w) ? w : w ? [w] : [];
            for (let T of v)
              (T.transparent = !0),
                (T.depthWrite =
                  m > Fc.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD);
            (0, qt.hasRenderOrder)(g) &&
              (g.renderOrder = Fc.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER);
          }
        }
        (0, Dm.createTransformTargets)(g, c).forEach(
          ({ object: b, props: m }) => {
            if (Object.keys(m).length === 0) return;
            let w = {},
              v = {};
            Object.keys(m).forEach((T) => {
              let E = m[T];
              E &&
                typeof E == "object" &&
                ((w[T] =
                  (0, qt.checkTt)(o, "from") && E.from ? E.from : b[T] ?? 0),
                (v[T] = (0, qt.checkTt)(o, "to") && E.to ? E.to : b[T] ?? 0));
            }),
              !(Object.keys(w).length === 0 && Object.keys(v).length === 0) &&
                r.fromTo(b, w, { ...t, ...v }, s || 0);
          }
        );
      });
      let h = u.map((g, y) => (0, Lm.createCleanupFunction)(g, n, f[y], e, d));
      return () => h.forEach((g) => g?.());
    };
});
var jc = O((is) => {
  "use strict";
  Object.defineProperty(is, "__esModule", { value: !0 });
  Object.defineProperty(is, "buildSplineAction", {
    enumerable: !0,
    get: function () {
      return qm;
    },
  });
  var Vc = Dc(),
    Ht = Be(),
    jm = new Set(["color", "stateName"]),
    Gm = new Set(["rotationX", "rotationY", "rotationZ"]),
    Bc = Math.PI / 180;
  function Um(n, e) {
    if (!n.spline) return n;
    let t = n.spline,
      r = {},
      o = !1;
    for (let [s, i] of Object.entries(t)) {
      if (!i || typeof i != "object") {
        r[s] = i;
        continue;
      }
      let a = i;
      if (jm.has(s)) {
        let c = a.from !== void 0 ? (0, Ht.resolveToString)(a.from, e) : void 0,
          l = a.to !== void 0 ? (0, Ht.resolveToString)(a.to, e) : void 0;
        (c !== a.from || l !== a.to) && (o = !0), (r[s] = { from: c, to: l });
      } else {
        let c = a.from !== void 0 ? (0, Ht.resolveToNumber)(a.from, e) : void 0,
          l = a.to !== void 0 ? (0, Ht.resolveToNumber)(a.to, e) : void 0,
          u = c !== a.from,
          f = l !== a.to;
        (u || f) && (o = !0),
          Gm.has(s)
            ? (r[s] = {
                from: c !== void 0 && u ? c * Bc : c,
                to: l !== void 0 && f ? l * Bc : l,
              })
            : (r[s] = { from: c, to: l });
      }
    }
    return o ? { ...n, spline: r } : n;
  }
  function $m(n, e, t, r, o, s, i) {
    let a = e.getInstance(n);
    if (a) return (0, Vc.setupAnimation)(a, t, r, o, s, i);
    let c,
      l = () => {
        let u = e.getInstance(n);
        u && (c = (0, Vc.setupAnimation)(u, t, r, o, s, i)),
          n.removeEventListener("w-spline-load", l);
      };
    return (
      n.addEventListener("w-spline-load", l),
      () => {
        n.removeEventListener("w-spline-load", l), c?.();
      }
    );
  }
  function qm(n) {
    n.addAction("spline", {
      createCustomTween: (e, t, r, o, s, i) => {
        let a = t.tt ?? 0;
        if (!s.length || !window.Webflow || !r.objectId) return;
        let c = window.Webflow.require?.("spline");
        if (!c) return;
        let l = [];
        for (let u of s) {
          let f = Um(r, u),
            d = $m(u, c, f, o, e, a, i);
          d && l.push(d);
        }
        if (l.length !== 0)
          return () => {
            for (let u of l) u?.();
          };
      },
    });
  }
});
var cs = O((as) => {
  "use strict";
  Object.defineProperty(as, "__esModule", { value: !0 });
  Object.defineProperty(as, "clearInlineCustomProperties", {
    enumerable: !0,
    get: function () {
      return Hm;
    },
  });
  function Hm(n, e) {
    let t = n.length,
      r = e.length,
      o = new Array(t);
    for (let s = 0; s < t; s++) {
      let i = n[s].style,
        a = new Array(r);
      for (let c = 0; c < r; c++) {
        let l = e[c];
        (a[c] = i.getPropertyValue(l)), i.removeProperty(l);
      }
      o[s] = a;
    }
    return () => {
      for (let s = 0; s < t; s++) {
        let i = n[s].style,
          a = o[s];
        for (let c = 0; c < r; c++) {
          let l = a[c];
          l ? i.setProperty(e[c], l) : i.removeProperty(e[c]);
        }
      }
    };
  }
});
var Wc = O((us) => {
  "use strict";
  Object.defineProperty(us, "__esModule", { value: !0 });
  Object.defineProperty(us, "buildVariableAction", {
    enumerable: !0,
    get: function () {
      return Wm;
    },
  });
  var ls = K(),
    zm = cs();
  function Wm(n) {
    n.addAction("variable", {
      createCustomTween: (e, t, r, o, s, i) => {
        let a = r.variable;
        if (!a) return;
        let c = Object.keys(a),
          l = c.length;
        if (l === 0) return;
        let u = (t.targets?.length ?? 0) > 0;
        if (u && s.length === 0) return;
        let f = u ? Array.from(new Set(s)) : Km(c),
          d = f.length,
          p = (0, zm.clearInlineCustomProperties)(f, c),
          h = t.tt ?? ls.TweenType.To,
          g = i || 0,
          { force3D: y, ...S } = o,
          b = c.some((w) => a[w].startsWith("var(")),
          m = (w) => {
            let v = {};
            for (let T = 0; T < l; T++) {
              let E = c[T],
                _ = a[E];
              v[E] = $c(
                (w &&
                  _.startsWith("var(") &&
                  w.getPropertyValue(_.slice(4, -1)).trim()) ||
                  _
              );
            }
            return v;
          };
        if (u)
          for (let w = 0; w < d; w++) {
            let v = f[w],
              T = m(b ? getComputedStyle(v) : null);
            Gc(e, h, v, { ...T, ...S }, g, c);
          }
        else {
          let v = {
            ...m(b ? getComputedStyle(document.documentElement) : null),
            ...S,
          };
          for (let T = 0; T < d; T++) Gc(e, h, f[T], v, g, c);
        }
        return p;
      },
    });
  }
  function Km(n) {
    let e = [document.documentElement];
    if (n.length === 0) return e;
    let t = Xm(n) ?? Qm(n);
    for (let r = 0; r < t.length; r++) e.push(t[r]);
    return e;
  }
  function $c(n) {
    return n.replace(/(^|[^\d.])\.(\d)/g, "$10.$2");
  }
  function Ym(n, e) {
    let t = getComputedStyle(n),
      r = null;
    for (let o = 0; o < e.length; o++) {
      let s = e[o],
        i = t.getPropertyValue(s).trim(),
        a = $c(i);
      a !== i && ((r ??= {})[s] = a);
    }
    return r;
  }
  function Gc(n, e, t, r, o, s) {
    e === ls.TweenType.From
      ? n.from(t, r, o)
      : e === ls.TweenType.Set
      ? n.set(t, r, o)
      : (n.add(() => {
          let i = Ym(t, s);
          i && window.gsap.set(t, i);
        }, o),
        n.to(t, r, o));
  }
  function Xm(n) {
    let e = new Set([document.documentElement]),
      t = [],
      r = new Map();
    try {
      let o = document.styleSheets;
      for (let s = 0; s < o.length; s++) qc(o[s].cssRules, n, t, e, r);
      return t;
    } catch {
      return null;
    }
  }
  function qc(n, e, t, r, o) {
    for (let s = 0; s < n.length; s++) {
      let i = n[s];
      if (i instanceof CSSMediaRule) {
        let c = i.conditionText,
          l = o.get(c);
        l === void 0 && ((l = matchMedia(c).matches), o.set(c, l)),
          l && qc(i.cssRules, e, t, r, o);
        continue;
      }
      if (!(i instanceof CSSStyleRule)) continue;
      let a = i.style;
      for (let c = 0; c < e.length; c++)
        if (a.getPropertyValue(e[c])) {
          try {
            let l = document.querySelectorAll(i.selectorText);
            for (let u = 0; u < l.length; u++) {
              let f = l[u];
              r.has(f) || (r.add(f), t.push(f));
            }
          } catch {}
          break;
        }
    }
  }
  var Hc = "__ix3__";
  function Qm(n) {
    let e = document.documentElement,
      t = document.body,
      r = [],
      o = n.length,
      s = [],
      i = [];
    zc(e, n, o, s, i), Uc(t, n, o, r, s, i);
    let a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT),
      c;
    for (; (c = a.nextNode()); ) Uc(c, n, o, r, s, i);
    for (let l = 0; l < s.length; l++) {
      let u = s[l].style,
        f = i[l];
      for (let d = 0; d < o; d++) {
        let p = f[d];
        p ? u.setProperty(n[d], p) : u.removeProperty(n[d]);
      }
    }
    return r;
  }
  function zc(n, e, t, r, o) {
    let s = n.style,
      i = new Array(t);
    for (let a = 0; a < t; a++) {
      let c = e[a];
      (i[a] = s.getPropertyValue(c)), s.setProperty(c, Hc);
    }
    r.push(n), o.push(i);
  }
  function Uc(n, e, t, r, o, s) {
    let i = getComputedStyle(n);
    for (let a = 0; a < t; a++)
      if (i.getPropertyValue(e[a]) !== Hc) {
        r.push(n), zc(n, e, t, o, s);
        return;
      }
  }
});
var Kc = O((fs) => {
  "use strict";
  Object.defineProperty(fs, "__esModule", { value: !0 });
  Object.defineProperty(fs, "buildCustomPropertyAction", {
    enumerable: !0,
    get: function () {
      return ey;
    },
  });
  var je = K(),
    Zm = Oo(),
    Jm = cs();
  function ey(n) {
    n.addAction("custom-property", {
      createCustomTween: (e, t, r, o, s, i, a) => {
        let c = Object.keys(r);
        if (c.length === 0 || s.length === 0) return;
        let l = Array.from(new Set(s)),
          u = c.filter(ty),
          f = u.length > 0 ? (0, Jm.clearInlineCustomProperties)(l, u) : void 0,
          d = (0, Zm.createStyleTweenConfig)(r, l),
          p = t.tt ?? je.TweenType.To,
          h = Object.keys(d.from).length > 0,
          g = Object.keys(d.to).length > 0;
        if (
          p === je.TweenType.From
            ? !h
            : p === je.TweenType.FromTo
            ? !h && !g
            : !g
        ) {
          f?.();
          return;
        }
        a?.flagVolatileValues?.(d);
        let y = u.length === c.length ? ny(o) : { ...o };
        return (
          p === je.TweenType.From
            ? e.from(l, { ...y, ...d.from }, i)
            : p === je.TweenType.FromTo
            ? e.fromTo(l, { ...d.from }, { ...y, ...d.to }, i)
            : p === je.TweenType.Set
            ? e.set(l, { ...y, ...d.to }, i)
            : e.to(l, { ...y, ...d.to }, i),
          f
        );
      },
    });
  }
  function ty(n) {
    return n.charCodeAt(0) === 45 && n.charCodeAt(1) === 45;
  }
  function ny(n) {
    let { force3D: e, ...t } = n;
    return t;
  }
});
var Qc = O((ds) => {
  "use strict";
  Object.defineProperty(ds, "__esModule", { value: !0 });
  Object.defineProperty(ds, "plugin", {
    enumerable: !0,
    get: function () {
      return fy;
    },
  });
  var Yc = za(),
    ry = Oo(),
    oy = ac(),
    Xc = Ac(),
    sy = jc(),
    iy = Wc(),
    ay = Kc(),
    cy = Jr(),
    ly = K(),
    uy = ee(),
    te = new ly.RuntimeBuilder(uy.CORE_PLUGIN_INFO);
  (0, Yc.build)(te);
  (0, Yc.buildTriggerContracts)(te);
  (0, ry.build)(te);
  (0, oy.buildLottieAction)(te);
  (0, Xc.buildRiveAction)(te);
  (0, Xc.buildAnimateRiveAction)(te);
  (0, sy.buildSplineAction)(te);
  (0, iy.buildVariableAction)(te);
  (0, ay.buildCustomPropertyAction)(te);
  (0, cy.build)(te);
  var fy = te.buildRuntime();
});
var Zc = O((ps) => {
  "use strict";
  Object.defineProperty(ps, "__esModule", { value: !0 });
  Object.defineProperty(ps, "plugin", {
    enumerable: !0,
    get: function () {
      return dy.plugin;
    },
  });
  var dy = Qc();
});
var Jc = ys(wi()),
  el = ys(Zc());
async function py() {
  try {
    let n = await Jc.IX3.init({ doc: document, win: window });
    return (
      await n.registerPlugin(el.plugin),
      { register: (e, t) => n.register(e, t), destroy: () => n.destroy() }
    );
  } catch (n) {
    throw (console.error("[Devlink IX3] Engine initialization failed:", n), n);
  }
}
var ov = { createIX3Engine: py };
export { py as createIX3Engine, ov as default };
