import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SideBarMenuItems from "./SideBarMenuItems";
import Msg from "../../i18n/Msg";
import classnames from "classnames";
import { uiActions } from "../../../_actions";

class SideBarMenuItem extends React.Component {
  _handleClick = e => {
    e.preventDefault();
    let { item } = this.props;

    this.props.dispatch(uiActions.activateMenuItem(item));
    //NavigationActions.activate(item);
  };

  render() {
    const { item } = this.props;

    var title = !item.parent ? (
      <span className="menu-item-parent">
        <Msg phrase={item.title} />
      </span>
    ) : (
      <Msg phrase={item.title} />
    );
    var badge = item.badge ? (
      <span className={item.badge.class}>{item.badge.label || ""}</span>
    ) : null;
    var childItems = item.items ? (
      <SideBarMenuItems
        style={{ display: item.isOpen ? "block" : "none" }}
        istop={false.toString()}
        items={item.items}
      />
    ) : null;
    var icon = item.icon ? (
      item.counter ? (
        <i className={item.icon}>
          <em>{item.counter}</em>
        </i>
      ) : (
        <i className={item.icon} />
      )
    ) : null;
    var collapseSign = item.items ? (
      item.isOpen ? (
        <b className="collapse-sign">
          <em className="fa fa-minus-square-o" />
        </b>
      ) : (
        <b className="collapse-sign">
          <em className="fa fa-plus-square-o" />
        </b>
      )
    ) : null;
    let link = item.route ? (
      <Link to={item.route} title={item.title} onClick={this._handleClick}>
        {icon} {title} {badge}
      </Link>
    ) : (
      <a href={item.href || "#"} onClick={this._handleClick} title={item.title}>
        {icon} {title} {badge}
        {collapseSign}
      </a>
    );
    // let link = (
    //   <a href={item.href || "#"} onClick={this._handleClick} title={item.title}>
    //     {icon} {title} {badge}
    //     {collapseSign}
    //   </a>
    // );
    let itemClasses = classnames({
      open: item.isOpen,
      active: item.isActive
    });

    return (
      <li className={itemClasses}>
        {link}
        {childItems}
      </li>
    );
  }
}
/*
function mapStateToProps(state) {
  return {
    activeLanguage: state.language.activeLanguage,
    languages: state.language.items
  };
}
*/
/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleLanguage }, dispatch);
}
*/

export default connect()(SideBarMenuItem);
//export default connect(mapStateToProps, null)(SideBarMenuItem);
//export default SideBarMenuItem;
