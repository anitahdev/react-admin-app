import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellActiom">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add new user
        <Link to="/users/new" className="link">
          add new
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
