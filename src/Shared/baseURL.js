const token = localStorage.getItem("userToken");

export const baseURL = "";
export const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};
