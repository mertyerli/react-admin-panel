import React from "react";
import { Dropdown, MenuItem } from "react-bootstrap";
import rawData_projects from "../../data/projects.json";
import _ from "lodash";

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle = e => {
    e.preventDefault();
    this.props.onClick(e);
  };

  render() {
    return (
      <div className="project-context hidden-xs">
        <span className="label">Projects:</span>
        <span
          className="project-selector dropdown-toggle"
          onClick={this.onToggle}
        >
          Recent projects <i className="fa fa-angle-down" />
        </span>
      </div>
    );
  }
}

class ProjectDropdown extends React.Component {
  render() {
    let projects = rawData_projects;
    const footerJson = [
      {
        href: "-",
        title: "-"
      },
      {
        href: "/",
        title: "Clear",
        icon: "fa-power-off"
      }
    ];
    projects = _.concat(projects, footerJson);

    const items = projects.map((item, i) => {
      return item.title === "-" ? (
        <MenuItem key={i} divider />
      ) : (
        <MenuItem key={i}>
          {item.icon !== "undefined" ? <i className={"fa " + item.icon} /> : ""}
          &nbsp;{item.title}
        </MenuItem>
      );
    });

    return (
      <Dropdown id="dropdown-project-context">
        <CustomToggle bsRole="toggle" />
        <Dropdown.Menu>{items}</Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default ProjectDropdown;
