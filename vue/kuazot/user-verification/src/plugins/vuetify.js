import Vue from "vue";
// import Vuetify from 'vuetify';
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

// import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: {
        primary: "#0060a9", // blue
        secondary: "#9C27B0", // #FFCDD2
        accent: "#009688", // #3F51B5
      },
    },
  },
});
