import mysql from "mysql";

const User = {
  username: {
    type: "VARCHAR(255)",
    required: true,
  },
  email: {
    type: "VARCHAR(255)",
    required: true,
  },
  password: {
    type: "VARCHAR(255)",
    required: true,
  },
};

export default User;
