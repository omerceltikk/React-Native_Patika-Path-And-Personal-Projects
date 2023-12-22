const caloryNeeded = data => {
  let formule = 0;
  if ((data.gender = 'male')) {
    formule =
      66.5 +
      13.75 * Number(data.weight) +
      5 * Number(data.height) -
      6.77 * Number(data.age);
  } else {
    formule =
      655.1 +
      9.56 * Number(data.weight) +
      1.85 * Number(data.height) -
      4.67 * Number(data.age);
  }
  return formule
};
export default caloryNeeded;
