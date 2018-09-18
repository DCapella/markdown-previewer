import marked from "marked";

const defaultInput = `
  # Hello World!\n
  ## Welcome to my React Redux Markdown Previewer!\n
  Here's a link to my GitHub code! [DCapella](https://github.com/DCapella/markdown-previewer)\n
  You can do anything you would do for markdown. Even ticks for code \`<div />\`\n
  Or a code block:\n
  \`\`\`
  const thisIsAwesome = "This is awesome!";
  console.log(thisIsAwesome);
  // That IS a lot of awesome!
  \`\`\`
  * Erase all of this
  * Type whatever you want
  * Watch it display in a markdown awesome sort of way
  As **Temple Grandin** says:
  > People are always looking for the single magic bullet\n
  > that will totally change everything.\n
  > There is *no* single magic bullet.\n
  ![programming](https://cdn-images-1.medium.com/max/1200/0*ngXgBNNdx6iiWP8q.png)
`;

const defaultState = {
  input: defaultInput,
  markdown: { __html: marked(defaultInput, {sanitize: true}) },
}

const mainReducer = (state=defaultState, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {...state, input: action.input, markdown: action.markdown};
    default:
      return {...state};
  }
}

export default mainReducer;
