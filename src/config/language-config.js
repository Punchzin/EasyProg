export const LANGUAGES_AVAILABLE = {
  python: {
    id: 0,
    language: "python",
    color: "#008BFF",
    extension: "py",
  },
  csharp: {
    id: 1,
    language: "csharp",
    color: "#FF92F8",
    extension: "cs",
  },
  java: {
    id: 2,
    language: "java",
    color: "#FF5559",
    extension: "java",
  },
  javascript: {
    id: 3,
    language: "javascript",
    color: "#FFE052",
    extension: "js",
  },
};

const { csharp, java, javascript, python } = LANGUAGES_AVAILABLE;

export const LANGUAGE_CONFIG = [
  {
    id: python.id,
    language: python.language,
    color: python.color,
    extension: python.extension,
  },
  {
    id: csharp.id,
    language: csharp.language,
    color: csharp.color,
    extension: csharp.extension,
  },
  {
    id: java.id,
    language: java.language,
    color: java.color,
    extension: java.extension,
  },
  {
    id: javascript.id,
    language: javascript.language,
    color: javascript.color,
    extension: javascript.extension,
  },
];
