import React from "react";
//import Reflux from 'reflux'

//import LanguageStore from './LanguageStore'

export class Localizer {
  static get = (i18key, languageKey) => {
    console.warn("Localizer not yet implemented");
    return {
      search_fld: {
        placeholder: languageKey + "Find reports and more"
      }
    };
  };
}

class Msg extends React.Component {
  //mixins: [Reflux.listenTo(LanguageStore, '_onChangeLanguage')],
  //languageKey: LanguageStore.getData().language.key,

  _onChangeLanguage = data => {
    if (data.language.key !== this.languageKey) {
      this.languageKey = data.language.key;
      this.forceUpdate();
    }
  };

  render() {
    let { phrase } = this.props;
    //let phrase = LanguageStore.getData().phrases[this.props.phrase] || this.props.phrase;
    return <span>{phrase}</span>;
  }
}

export default Msg;
