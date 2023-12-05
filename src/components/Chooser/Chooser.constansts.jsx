import PY_BRAND from "../../assets/images/py_icon.svg";
import CS_BRAND from "../../assets/images/cs_icon.svg";
import JS_BRAND from "../../assets/images/js_icon.svg";
import JV_BRAND from "../../assets/images/jv_icon.svg";
import { LANGUAGES_AVAILABLE } from "../../config/language-config";

const { csharp, java, javascript, python } = LANGUAGES_AVAILABLE;

export const ITEMS_CONFIG = [
  {
    id: python.id,
    preset: python.language,
    type: "Language",
    title: "Python",
    status: <i className="ri-arrow-right-s-line"></i>,
    image: PY_BRAND,
    color: python.color,
  },
  {
    id: csharp.id,
    preset: csharp.language,
    type: "Language",
    title: "CSharp",
    status: <i className="ri-arrow-right-s-line"></i>,
    image: CS_BRAND,
    color: csharp.color,
  },
  {
    id: java.id,
    preset: java.language,
    type: "Language",
    title: "Java",
    status: <i className="ri-arrow-right-s-line"></i>,
    image: JV_BRAND,
    color: java.color,
  },
  {
    id: javascript.id,
    preset: javascript.language,
    type: "Language",
    title: "Javascript",
    status: <i className="ri-arrow-right-s-line"></i>,
    image: JS_BRAND,
    color: javascript.color,
  },
];