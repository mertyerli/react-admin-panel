import React from "react";
import SideBarMenuItem from "./SideBarMenuItem";

class SideBarMenuItems extends React.Component {
  selectedItem=Item=>{
    console.log(Item);
    
  }

  render() {
    let { items, ...props } = this.props;

    const menuItems = items.map((item, ndx) => {
      return <SideBarMenuItem item={item} key={ndx} selectedItem={this.selectedItem}/>;
    });
    return <ul {...props}>{menuItems}</ul>;
  }
}

export default SideBarMenuItems;
