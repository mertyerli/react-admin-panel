import React from "react";
import SideBarMenuItem from "./SideBarMenuItem";

class SideBarMenuItems extends React.Component {
  render() {
    let { items, ...props } = this.props;

    const menuItems = items.map((item, ndx) => {
      return <SideBarMenuItem item={item} key={ndx} />;
    });
    return <ul {...props}>{menuItems}</ul>;
  }
}

export default SideBarMenuItems;
