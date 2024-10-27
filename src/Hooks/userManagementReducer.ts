import saveToLocalStorage from "../Functions/saveToLocalStorage";
import { User } from "../Types/User";

export type UserManagementState = User[];

export type UserManagementAction = {
  type: "ADD_USER" | "REMOVE_USER" | "UPDATE_USER";
  user: User;
};

export default function userManagementReducer(
  prevState: UserManagementState,
  action: UserManagementAction
) {
  let updatedState: UserManagementState;

  switch (action.type) {
    case "ADD_USER": {
      console.log("ADD_USER SUCCESSFUL");
      updatedState = [...prevState, action.user];
      break;
    }
    case "REMOVE_USER": {
      console.log("REMOVE_USER SUCCESSFUL");
      updatedState = prevState.filter((user) => user.id !== action.user.id);
      break;
    }
    case "UPDATE_USER": {
      console.log("UPDATE_USER SUCCESSFUL");
      updatedState = prevState.map((user) =>
        user.id === action.user.id ? action.user : user
      );
      break;
    }
    default: {
      updatedState = prevState;
      break;
    }
  }
  saveToLocalStorage(updatedState);
  return updatedState;
}
