const head = React.createElement("h1", {}, "hello Dilshad");
const head2 = React.createElement("h2", {}, "heading2");
const container = React.createElement("div", { className: "container" }, [
  head,
  head2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
