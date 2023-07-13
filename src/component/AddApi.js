import axios from "axios";

export async function addVersion(newData) {
  const data = await axios.post(`http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/vercontrol/save`, newData, {
  });

  return data.data;
}
