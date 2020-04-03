// https://github.com/isaachinman/next-i18next/blob/master/examples/simple/pages/index.js
import { withTranslation, i18n } from "../i18n";
import PropTypes from "prop-types";

const Home = ({ t }) => {
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("en")}> en </button>
      <button onClick={() => i18n.changeLanguage("de")}> de </button>
      {t("hello")}
    </div>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Home);
