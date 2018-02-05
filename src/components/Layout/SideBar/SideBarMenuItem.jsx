import React from "react";
import { Link } from "react-router-dom";
import SideBarMenuItems from "./SideBarMenuItems";
import Msg from "../../i18n/Msg";
import classnames from "classnames";

class SideBarMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  selectedItem = Item => {
    // console.log(Item);
    this.props.selectedItem(Item);
  };

  componentDidMount() {
    this.setState({
      isOpen: this.props.item.isOpen
    });
  }

  _handleClick = e => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.props.selectedItem(this.props.item.route);
   // console.log(this.props.item.route);

  };

  render() {
    const { item } = this.props;
    item.isOpen = this.state.isOpen;

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
        selectedItem={this.selectedItem}
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

export default SideBarMenuItem;
