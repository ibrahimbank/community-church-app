import axios from "axios";

const API_URL = "/api/contact";

const contactMessage = async (userData) => {
  const response = await axios.post(
    "http://localhost:6000/api/contact",
    userData
  );

  if (response.data) {
    localStorage.setItem("message", JSON.stringify(response.data));

    return response.data;
  }
};

const contactService = {
  contactMessage,
};

export default contactService;
