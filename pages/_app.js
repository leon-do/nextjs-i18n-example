// https://github.com/isaachinman/next-i18next#3-project-setup
// https://github.com/isaachinman/next-i18next/blob/master/examples/simple/pages/_app.js
import App from "next/app";
import { appWithTranslation } from "../i18n";

class MyApp extends App {}

export default appWithTranslation(MyApp);
