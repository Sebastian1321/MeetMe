import Vue from "nativescript-vue";

//not use login everytime for testing
import App from "./components/App";
new Vue({
    render: h => h("frame", [h(App)])
}).$start();

