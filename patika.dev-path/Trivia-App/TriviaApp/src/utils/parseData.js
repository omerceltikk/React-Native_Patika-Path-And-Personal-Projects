export default function(data){
 return Object.keys(data).map((key) => {
    return {
      id: key,
      ...data[key],
    }
  }).sort((a,b) => {
  return  a.point > b.point ? -1: a.point > b.point ? 1 : 0;
  })
}