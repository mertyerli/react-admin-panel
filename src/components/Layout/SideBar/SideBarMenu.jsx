import React from "react";
//import { connect } from "react-redux";
//import axios from "axios";
//import _ from "lodash";
import classnames from "classnames";
import rawData_menu from "../../../data/menu-items.json";
import Msg from "../../i18n/Msg";

class SideBarMenuItem extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
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
        isTop={false}
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
    // let link = item.route ? (
    //   <Link to={item.route} title={item.title} onClick={this._handleClick}>
    //     {icon} {title} {badge}
    //   </Link>
    // ) : (
    //   <a href={item.href || "#"} onClick={this._handleClick} title={item.title}>
    //     {icon} {title} {badge}
    //     {collapseSign}
    //   </a>
    // );
    let link = (
      <a href={item.href || "#"} onClick={this._handleClick} title={item.title}>
        {icon} {title} {badge}
        {collapseSign}
      </a>
    );
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

class SideBarMenuItems extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    const items = this.props.items.map((item, ndx) => {
      return <SideBarMenuItem item={item} key={ndx} />;
    });

    return <ul>{items}</ul>;
  }
}

class SideBarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      activeItem: null
    };
  }
  componentWillMount() {
    this.setState({
      items: rawData_menu.items
    });
  }
  render() {
    //const root = rawData_menu;

    return (
      <nav>
        {/* 
              NOTE: Notice the gaps after each icon usage <i></i>..
              Please note that these links work a bit different than
              traditional href="" links. See documentation for details.
              */}
        <SideBarMenuItems items={this.state.items} />
        {this.props.childen}
      </nav>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     items: state.items
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addTodo }, dispatch);
// }
// export default connect(mapStateToProps)(SideBarMenu);
export default SideBarMenu;
