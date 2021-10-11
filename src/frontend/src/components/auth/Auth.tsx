import AuthContext from "../../context";
import React, { Component } from "react";
import { SignInModal, SignOutModal } from "./modals";
import apiUser, { apiUsersMap } from "../../conf/axios.conf";

export default class Auth extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    apiUser
      .get("/users")
      .then((response: any) => response.data)
      .then((usersApi: any) => {
        const users = usersApi.map(apiUsersMap);
        this.context.updateUsers({ users });
      })
      .catch((err: any) => console.log(err));
  }
  render() {
    return <>{this.context.auth.isLoggedIn ? SignOutModal() : SignInModal()}</>;
  }
}
