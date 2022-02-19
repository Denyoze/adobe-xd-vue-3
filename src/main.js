global.SVGElement = global.Element;

import { createApp } from "vue";
import App from "./App.vue";

const { entrypoints } = require("uxp");

//

let app = createApp(App);

entrypoints.setup({
	panels: {
		"vue3panel": {
			show(event) {
				console.log("Show", event);
				app.mount("#app");
			},
			update(event) {
				console.log("Update", event);
			}
		}
	}
});