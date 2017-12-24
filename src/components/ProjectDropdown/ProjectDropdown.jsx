import React from "react";

const ProjectDropdown = () => {
  return (
    <div className="project-context hidden-xs">
      <span className="label">Projects:</span>
      <span className="project-selector dropdown-toggle" data-toggle="dropdown">
        Recent projects <i className="fa fa-angle-down" />
      </span>
      {/* Suggestion: populate this list with fetch and push technique */}
      <ul className="dropdown-menu">
        <li>
          <a>
            Online e-merchant management system - attaching integration with the
            iOS
          </a>
        </li>
        <li>
          <a>Notes on pipeline upgradee</a>
        </li>
        <li>
          <a>Assesment Report for merchant account</a>
        </li>
        <li className="divider" />
        <li>
          <a>
            <i className="fa fa-power-off" /> Clear
          </a>
        </li>
      </ul>
      {/* end dropdown-menu*/}
    </div>
  );
};

export default ProjectDropdown;
