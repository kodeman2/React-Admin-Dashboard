import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },

    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
  ];

  const rows = [
    {
      id: 1,
      username: "chad bosewick",
      avatar:
        "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "chad@gmail.com",
      status: "active",
      transaction: "$122.00",
    },
    {
      id: 2,
      username: "chad bosewick",
      avatar:
        "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "chad@gmail.com",
      status: "active",
      transaction: "$122.00",
    },
    {
      id: 3,
      username: "chad bosewick",
      avatar:
        "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "chad@gmail.com",
      status: "active",
      transaction: "$122.00",
    },
    {
      id: 4,
      username: "chad bosewick",
      avatar:
        "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "chad@gmail.com",
      status: "active",
      transaction: "$122.00",
    },
    {
      id: 5,
      username: "chad bosewick",
      avatar:
        "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "chad@gmail.com",
      status: "active",
      transaction: "$122.00",
    },
    {
      id: 6,
      username: "chad bosewick",
      avatar:
        "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "chad@gmail.com",
      status: "active",
      transaction: "$122.00",
    },
    {
      id: 7,
      username: "chad bosewick",
      avatar:
        "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "chad@gmail.com",
      status: "active",
      transaction: "$122.00",
    },
    {
      id: 8,
      username: "chad bosewick",
      avatar:
        "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "chad@gmail.com",
      status: "active",
      transaction: "$122.00",
    },
    {
      id: 9,
      username: "chad bosewick",
      avatar:
        "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "chad@gmail.com",
      status: "active",
      transaction: "$122.00",
    },

    {
      id: 10,
      username: "chad bosewick",
      avatar:
        "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "chad@gmail.com",
      status: "active",
      transaction: "$122.00",
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}
