import React from "react";

function Users(props) {
  const userRole = props.userRole;
  const username = props.username;
  const userImg = props.userImg;
  const email = props.email;
  const updateUser = props.updateUser;
  const deleteUser = props.deleteUser;
  const id = props.id;
  const getUser = props.getUser;
  const setRole = props.setRole;
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body text-center ribbon">
            <div className="ribbon-box green">{userRole}</div>
            <img
              className="rounded-circle img-thumbnail w100"
              src={userImg}
              alt=""
            />
            <h6 className="mt-3 mb-0">{username}</h6>
            <span>
              <a className="__cf_email__">{email}</a>
            </span>
            <div className="row text-center mt-4">
              <form onSubmit={updateUser}>
                <div className="form-group">
                  <label>Role :</label>
                  <select
                    className="form-select"
                    onChange={(e) => setRole(e.target.value)}
                    onClick={() => getUser(id)}
                  >
                    <option defaultValue>Select a Role</option>
                    <option value="0000">UnAuthorized</option>
                    <option value="1010">Client</option>
                    <option value="2020">Employee</option>
                    <option value="3030">Project Manager</option>
                    <option value="4040">Admin</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-sm w-100"
                  style={{ color: "darkblue" }}
                >
                  <i className="fa fa-pen-to-square"></i> Assign Role
                </button>
              </form>
              <form onSubmit={deleteUser}>
                <div className="form-group">
                  <label>Delete :</label>
                  <select
                    className="form-select hidden"
                    onClick={() => getUser(id)}
                  >
                    <option defaultValue>Delete The User</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-sm"
                  style={{ color: "red" }}
                >
                  <i className="fa fa-trash"></i> Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
