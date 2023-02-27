/**
 * Example1:
 */
const fetchedUserData ={
  id: 'u1',
  name: 'Max',
  // job: {title: "CEO", description: "My own copany"}
  job: {}
}
console.log(fetchedUserData && fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?.title);
