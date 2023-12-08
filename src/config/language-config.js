export const LANGUAGES_AVAILABLE = {
  python: {
    id: 0,
    language: "python",
    color: "#008BFF",
  },
  csharp: {
    id: 1,
    language: "csharp",
    color: "#FF92F8",
  },
  java: {
    id: 2,
    language: "java",
    color: "#FF5559",
  },
  javascript: {
    id: 3,
    language: "javascript",
    color: "#FFE052",
  },
};

const { csharp, java, javascript, python } = LANGUAGES_AVAILABLE;

export const LANGUAGE_CONFIG = [
  {
    id: python.id,
    language: python.language,
    color: python.color
  },
  {
    id: csharp.id,
    language: csharp.language,
    color: csharp.color
  },
  {
    id: java.id,
    language: java.language,
    color: java.color
  },
  {
    id: javascript.id,
    language: javascript.language,
    color: javascript.color,
  },
];
