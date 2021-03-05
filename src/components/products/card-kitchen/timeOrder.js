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

const timeDifferenceMinutes = (updatedAt,createdAt) => { 
  let difference = (updatedAt - createdAt) / 60;
  difference = Math.abs(Math.round(difference / 1000));
  return difference;
};

const convertMinutesToHours = (totalMinutes)=> {
  const hours = (totalMinutes / 60);
  const rhours = Math.floor(hours);
  const minutes = Math.round((hours - rhours) * 60);
  return [rhours, minutes];
};

export const formatHour = (updatedAt, createdAt) => {
  const dateTime = convertMinutesToHours(timeDifferenceMinutes(updatedAt, createdAt));
  console.log(dateTime);
  let formatDate = '';
  if (dateTime[0]) {
    formatDate += `${dateTime[0]} hora(s)`;
  }
  if (dateTime[1]) {
    formatDate += `${dateTime[1]} minuto(s)`;
  }
  return formatDate;
}

