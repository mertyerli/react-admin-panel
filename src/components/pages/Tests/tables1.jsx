import React from "react";
import { makeData } from "./utils";
import ReactTable from "react-table";
import { Widget } from "../../Layout/Widgets";

export default class Tables1 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(100)
    };
  }

  render = () => {
    const { data } = this.state;
    return (
      <div id="content" style={{ opacity: 1 }}>
        <article className="col-xs-12 col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
          <Widget color="greenLight">
            <header icon="fa fa-edit">I'm Here</header>
            <content>qwer</content>
          </Widget>

          <Widget color="teal">
            <header icon="fa fa-table">Normal Table</header>
            <content>
              <div className="table-responsive">
                <ReactTable
                  data={data}
                  columns={[
                    {
                      Header: "Name",
                      columns: [
                        {
                          Header: "First Name",
                          accessor: "firstName"
                        },
                        {
                          Header: "Last Name",
                          id: "lastName",
                          accessor: d => d.lastName
                        }
                      ]
                    },
                    {
                      Header: "Info",
                      columns: [
                        {
                          Header: "Age",
                          accessor: "age"
                        },
                        {
                          Header: "Status",
                          accessor: "status"
                        }
                      ]
                    },
                    {
                      Header: "Stats",
                      columns: [
                        {
                          Header: "Visits",
                          accessor: "visits"
                        }
                      ]
                    }
                  ]}
                  defaultPageSize={10}
                  className="-striped -highlight"
                />
              </div>
            </content>
          </Widget>
        </article>
      </div>
    );
  };
}
