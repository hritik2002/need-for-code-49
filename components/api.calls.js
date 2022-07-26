import axios from "axios";

const API_METHOD_GET = async ({ url, params }) => {
  return await axios(url, params).then((res) => res);
};

export {
    API_METHOD_GET
}
