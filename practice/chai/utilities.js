import { colors } from "./colors.js";

//#region  //*=========== box shadows ===========
const shadows = {
  sm: "0 1px 2px rgba(0,0,0,.05)",
  md: "0 4px 6px rgba(0,0,0,.1)",
  lg: "0 10px 15px rgba(0,0,0,.1)",
  xl: "0 20px 25px rgba(0,0,0,.15)",
};
//#endregion  //*=========== box shadows ===========

//#region  //*=========== special sizes ===========
const specialSizes = {
  auto: "auto",
  full: "100%",
  screen: "100vw",
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
};
//#endregion  //*=========== special sizes ===========

const utilityRules = [
  //#region  //*=========== background color ===========
  {
    pattern: /^chai-bg-([a-z]+)-(\d{2,3})$/,
    compile: ([_, color, shade]) => ({
      "background-color": colors[color][shade],
    }),
  },

  {
    pattern: /^chai-bg-([a-z]+)$/,
    compile: ([_, color]) => ({ "background-color": color }),
  },
  //#endregion  //*=========== background color ===========

  //#region  //*=========== text color ===========
  {
    pattern: /^chai-text-([a-z]+)-(\d{2,3})$/,
    compile: ([_, color, shade]) => ({ color: colors[color][shade] }),
  },

  {
    pattern: /^chai-text-([a-z]+)$/,
    compile: ([_, color]) => ({ color: color }),
  },

  {
    pattern: /^chai-text-(\d+)$/,
    compile: ([_, val]) => ({ "font-size": `${val * 4}px` }),
  },

  {
    pattern: /^chai-text-\[(.+)\]$/,
    compile: ([_, val]) => ({ color: val }),
  },
  //#endregion  //*=========== text color ===========

  //#region  //*=========== text decoration ===========
  {
    pattern: /^chai-decoration-([a-z]+)-(\d{2,3})$/,
    compile: ([_, color, shade]) => ({
      "text-decoration": colors[color][shade],
    }),
  },

  {
    pattern: /^chai-decoration-([a-z]+)$/,
    compile: ([_, color]) => ({
      "text-decoration": color,
    }),
  },
  //#endregion  //*=========== text decoration ===========

  //#region  //*=========== border color ===========
  {
    pattern: /^chai-border-([a-z]+)-(\d{2,3})$/,
    compile: ([_, color, shade]) => ({ "border-color": colors[color][shade] }),
  },

  {
    pattern: /^chai-border-([a-z]+)$/,
    compile: ([_, color]) => ({ "border-color": color }),
  },
  //#endregion  //*=========== border color ===========

  //#region  //*=========== outline color ===========
  {
    pattern: /^chai-outline-([a-z]+)-(\d{2,3})$/,
    compile: ([_, color, shade]) => ({ "outline-color": colors[color][shade] }),
  },

  {
    pattern: /^chai-outline-([a-z]+)$/,
    compile: ([_, color]) => ({ "outline-color": color }),
  },
  //#endregion  //*=========== outline color ===========

  //#region  //*=========== pre define shadows ===========
  {
    pattern: /^chai-shadow-([a-z]{2})$/,
    compile: ([_, size]) => ({ "shadow-color": shadows[size] }),
  },
  //#endregion  //*=========== pre define shadows ===========

  //#region  //*=========== spacing ===========
  {
    pattern: /^chai-p-(\d+)$/,
    compile: ([_, padValue]) => ({ padding: `${padValue * 4}px` }),
  },

  {
    pattern: /^chai-px-(\d+)$/,
    compile: ([_, padValue]) => ({
      "padding-left": `${padValue * 4}px`,
      "padding-right": `${padValue * 4}px`,
    }),
  },

  {
    pattern: /^chai-py-(\d+)$/,
    compile: ([_, padValue]) => ({
      "padding-top": `${padValue * 4}px`,
      "padding-bottom": `${padValue * 4}px`,
    }),
  },

  {
    pattern: /^chai-pt-(\d+)$/,
    compile: ([_, padValue]) => ({ "padding-top": `${padValue * 4}px` }),
  },

  {
    pattern: /^chai-pr-(\d+)$/,
    compile: ([_, padValue]) => ({ "padding-right": `${padValue * 4}px` }),
  },

  {
    pattern: /^chai-pb-(\d+)$/,
    compile: ([_, padValue]) => ({ "padding-bottom": `${padValue * 4}px` }),
  },

  {
    pattern: /^chai-pl-(\d+)$/,
    compile: ([_, padValue]) => ({ "padding-left": `${padValue * 4}px` }),
  },

  {
    pattern: /^chai-m-(\d+)$/,
    compile: ([_, marValue]) => ({ margin: `${marValue * 4}px` }),
  },

  {
    pattern: /^chai-mx-(\d+)$/,
    compile: ([_, marValue]) => ({
      "margin-left": `${marValue * 4}px`,
      "margin-right": `${marValue * 4}px`,
    }),
  },

  {
    pattern: /^chai-my-(\d+)$/,
    compile: ([_, marValue]) => ({
      "margin-top": `${marValue * 4}px`,
      "margin-bottom": `${marValue * 4}px`,
    }),
  },

  {
    pattern: /^chai-mt-(\d+)$/,
    compile: ([_, marValue]) => ({
      "margin-top": `${marValue * 4}px`,
    }),
  },

  {
    pattern: /^chai-mr-(\d+)$/,
    compile: ([_, marValue]) => ({
      "margin-right": `${marValue * 4}px`,
    }),
  },

  {
    pattern: /^chai-mb-(\d+)$/,
    compile: ([_, marValue]) => ({
      "margin-bottom": `${marValue * 4}px`,
    }),
  },

  {
    pattern: /^chai-ml-(\d+)$/,
    compile: ([_, marValue]) => ({
      "margin-left": `${marValue * 4}px`,
    }),
  },

  //#endregion  //*=========== spacing ===========

  //#region  //*=========== sizing (height and width) ===========
  {
    pattern: /^chai-w-(\d+)$/,
    compile: ([_, val]) => ({ width: val }),
  },

  {
    pattern: /^chai-w-([a-z]{3,6})$/,
    compile: ([_, namedVal]) => {
      if (!specialSizes.hasOwnProperty(namedVal)) return null;
      return { width: specialSizes[namedVal] };
    },
  },

  {
    pattern: /^chai-w-\[(.+)\]$/,
    compile: ([_, val]) => ({ width: val }),
  },

  {
    pattern: /^chai-min-w-([a-z]{3,6})$/,
    compile: ([_, namedVal]) => {
      if (!specialSizes.hasOwnProperty(namedVal)) return null;
      return { "min-width": specialSizes[namedVal] };
    },
  },

  {
    pattern: /^chai-min-w-\[(.+)\]$/,
    compile: ([_, val]) => {
      return { "min-width": val };
    },
  },

  {
    pattern: /^chai-max-w-([a-z]{3,6})$/,
    compile: ([_, namedVal]) => {
      if (!specialSizes.hasOwnProperty(namedVal)) return null;
      return { "max-width": specialSizes[namedVal] };
    },
  },

  {
    pattern: /^chai-max-w-\[(.+)\]$/,
    compile: ([_, val]) => {
      return { "max-width": val };
    },
  },

  {
    pattern: /^chai-h-(\d+)$/,
    compile: ([_, val]) => ({ height: val }),
  },

  {
    pattern: /^chai-h-([a-z]{3,6})$/,
    compile: ([_, namedVal]) => {
      if (!specialSizes.hasOwnProperty(namedVal)) return null;
      return { height: specialSizes[namedVal] };
    },
  },

  {
    pattern: /^chai-h-\[(.+)\]$/,
    compile: ([_, val]) => ({ height: val }),
  },

  {
    pattern: /^chai-min-h-([a-z]{3,6})$/,
    compile: ([_, namedVal]) => {
      if (!specialSizes.hasOwnProperty(namedVal)) return null;
      return { "min-height": specialSizes[namedVal] };
    },
  },

  {
    pattern: /^chai-min-h-\[(.+)\]$/,
    compile: ([_, val]) => {
      return { "min-height": val };
    },
  },

  {
    pattern: /^chai-max-h-([a-z]{3,6})$/,
    compile: ([_, namedVal]) => {
      if (!specialSizes.hasOwnProperty(namedVal)) return null;
      return { "max-height": specialSizes[namedVal] };
    },
  },

  {
    pattern: /^chai-max-h-\[(.+)\]$/,
    compile: ([_, val]) => {
      return { "max-height": val };
    },
  },
  //#endregion  //*=========== height and width ===========

  //#region  //*=========== gap ===========
  {
    pattern: /^chai-gap-(\d+)$/,
    compile: ([_, val]) => ({ gap: `${val * 4}px` }),
  },

  {
    pattern: /^chai-gap-x-(\d+)$/,
    compile: ([_, val]) => ({
      "gap-left": `${val * 4}px`,
      "gap-right": `${val * 4}px`,
    }),
  },

  {
    pattern: /^chai-gap-y-(\d+)$/,
    compile: ([_, val]) => ({
      "gap-top": `${val * 4}px`,
      "gap-bottom": `${val * 4}px`,
    }),
  },

  //#endregion  //*=========== gap ===========

  //#region  //*=========== grid ===========
  {
    pattern: /^chai-grid$/,
    compile: ([_]) => ({ display: "grid" }),
  },

  {
    pattern: /^chai-grid-cols-(\d+)$/,
    compile: ([_, val]) => ({
      "grid-template-columns": `repeat(${val}, minmax(0, 1fr))`,
    }),
  },

  {
    pattern: /^chai-grid-rows-(\d+)$/,
    compile: ([_, val]) => ({
      "grid-template-rows": `repeat(${val}, minmax(0, 1fr))`,
    }),
  },

  {
    pattern: /^chai-col-span-(\d+)$/,
    compile: ([_, val]) => ({ "grid-column": `span ${val} / span ${val}` }),
  },

  {
    pattern: /^chai-row-span-(\d+)$/,
    compile: ([_, val]) => ({ "grid-row": `span ${val} / span ${val}` }),
  },

  {
    pattern: /^chai-col-start-(\d+)$/,
    compile: ([_, val]) => ({ "grid-column-start": val }),
  },

  {
    pattern: /^chai-col-end-(\d+)$/,
    compile: ([_, val]) => ({ "grid-column-end": val }),
  },

  {
    pattern: /^chai-grid-flow-(row|col)$/,
    compile: ([_, val]) => {
      const value = val === row ? row : column;
      return { "grid-auto-flow": value };
    },
  },

  {
    pattern: /^chai-grid-cols-\[(.+)\]$/,
    compile: (_, val) => {
      const arrOfVal = val.split("_").filter(Boolean);
      if (!arrOfVal.length) return null;
      return { "grid-template-columns": arrOfVal.join(" ") };
    },
  },

  {
    pattern: /^chai-grid-rows-\[(.+)\]$/,
    compile: (_, val) => {
      const arrOfVal = val.split("_").filter(Boolean);
      if (!arrOfVal.length) return null;
      return { "grid-template-rows": arrOfVal.join(" ") };
    },
  },
  //#endregion  //*=========== grid ===========

  //#region  //*=========== position ===========
  {
    pattern: /^chai-(static|relative|absolute|fixed|sticky)/,
    compile: ([_, val]) => ({ positon: val }),
  },

  {
    pattern: /^chai-top-\[(.+)\]$/,
    compile: (_, value) => ({
      top: value,
    }),
  },

  {
    pattern: /^chai-left-\[(.+)\]$/,
    compile: (_, value) => ({
      left: value,
    }),
  },

  {
    pattern: /^chai-right-\[(.+)\]$/,
    compile: (_, value) => ({
      right: value,
    }),
  },

  {
    pattern: /^chai-bottom-\[(.+)\]$/,
    compile: (_, value) => ({
      bottom: value,
    }),
  },

  {
    pattern: /^chai-z-(\d+)$/,
    compile: ([_, val]) => ({ "z-index": val }),
  },

  {
    pattern: /^chai-z-\[(.+)\]$/,
    compile: (_, value) => ({
      "z-index": value,
    }),
  },
  //#endregion  //*=========== position ===========
];

export default function compileClasses(cls) {
  for (const rule of utilityRules) {
    const pattern = cls.match(rule.pattern);

    if (!pattern) continue;

    const style = rule.compile(pattern);
    return style;
  }
}
