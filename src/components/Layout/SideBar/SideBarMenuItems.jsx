import React from "react";
import SideBarMenuItem from "./SideBarMenuItem";
import _ from "lodash";

class SideBarMenuItems extends React.Component {

  selectedItem = Item => {
    this.props.selectedItem(Item);
  };

  render() {
    let { items, ...props } = this.props;
    const menuItems = items.map((item, ndx) => {
      return (
        <SideBarMenuItem
          item={item}
          key={ndx}
          selectedItem={this.selectedItem}
        />
      );
    });
    return <ul {..._.omit(props, "selectedItem")}>{menuItems}</ul>;
  }
}

export default SideBarMenuItems;
