async function getRemoteData() {
  //GET /data
  const response = await fetch("http://ensmn.herokuapp.com/messages?page=0");
  const responseJson = await response.json(); //[0,4,3]
  //.map(counter => counter + 1)
  return responseJson.map((counter) => counter + 1);
}
export default getRemoteData;
