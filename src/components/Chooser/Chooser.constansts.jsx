import PY_BRAND from "../../assets/images/py_icon.svg";
import CS_BRAND from "../../assets/images/cs_icon.svg";
import JS_BRAND from "../../assets/images/js_icon.svg";

export const ITEMS_CONFIG = [
    {
      id: 0,
      preset: "python",
      type: "Language",
      title: "Python",
      status: <i className="ri-arrow-right-s-line"></i>,
      image: PY_BRAND,
    },
    {
      id: 1,
      preset: "csharp",
      type: "Language",
      title: "CSharp",
      status: "Em breve",
      image: CS_BRAND,
    },
    {
      id: 2,
      preset: "javascript",
      type: "Language",
      title: "Javascript",
      status: "Em breve",
      image: JS_BRAND,
    }
];