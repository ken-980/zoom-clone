import jwt from "jsonwebtoken";

export const jwtToken = () => {
  console.log(process.env.JWT_SECRET);
  const token = jwt.sign({ user_id: "ken_walker" }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};
