import {useEffect, useState} from 'react';

export const useConvertDate = (timestamp: Date) => {
  const [pubDate, setPubDate] = useState('');

  useEffect(() => {
    const temp = new Date(timestamp);
    const year = temp.getFullYear();
    const month =
      temp.getMonth() + 1 >= 10
        ? temp.getMonth() + 1
        : `0${temp.getMonth() + 1}`;

    const date = temp.getDate() >= 10 ? temp.getDate() : `0${temp.getDate()}`;

    setPubDate(`${year}.${month}.${date}`);
  }, [pubDate, timestamp, setPubDate]);

  return pubDate;
};
