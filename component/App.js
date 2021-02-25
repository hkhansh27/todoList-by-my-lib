import html from "../my-lib/core.js";
import { connect } from "../my-lib/store.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import Footer from "./Footer.js";
function App({ todos }) {
  return html`
    <section class="todoapp">
      ${Header()} ${todos.length > 0 && TodoList()}
      ${todos.length > 0 && Footer()}
    </section>
  `;
}
export default connect()(App);
