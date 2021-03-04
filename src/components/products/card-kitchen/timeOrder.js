export const convertDate = (apiDate) => {
  const date = new Date(apiDate);
  let day = date.getDay();
  let month = date.getMonth()+1;
  const year = date.getFullYear();

  if (day < 10) { day = `0${day}`; }
  if (month < 10) { month = `0${month}`; }

  const correctDate = `${day}/${month}/${year}`;

  return correctDate;
};

export const convertTime = (apiDate) => {
  const date = new Date(apiDate);
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }

  const correctTime = `${hours}:${minutes}`;

  return correctTime;
};

/*export const timeDifference = (updatedAt,createdAt) => { 
  //const total = Math.abs(updatedAt) - createdAt;
  //const difference = Math.floor(total / 1000 / 60);
  const difference = Math.abs(updatedAt - createdAt) / 36e5;
  return difference;
}*/