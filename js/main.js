import App from "../component/App.js";
import { attach } from "../my-lib/store.js";
attach(App, document.getElementById("root"));
