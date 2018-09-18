import marked from "marked";

function getMarkdownText(input) {
  const rawMarkup = marked(input, {sanitize: true});
  return { __html: rawMarkup };
}

export function updateInput(e) {
  return {
    type: "UPDATE_INPUT",
    input: e.target.value,
    markdown: getMarkdownText(e.target.value),
  }
}
