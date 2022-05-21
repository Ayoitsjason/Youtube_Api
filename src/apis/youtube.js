import axios from "axios";

const KEY = "AIzaSyCwx2CtqOQRBn8RmvSexCp2L8O3In3MR18";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
