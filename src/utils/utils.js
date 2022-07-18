/* eslint-disable no-param-reassign */
export const formatTimeWithSeconds = (seconds) => {
    if (!seconds) {
        return '0分钟';
    }
    const day = Math.floor(seconds / 86400);
    const hour = Math.floor((seconds % 86400) / 3600);
    const minute = Math.round((seconds % 3600) / 60);

    return appendTimeString(day, hour, minute);
};
export const formatTimeWithSecondsTemp = (seconds) => {
    if (!seconds) {
        return '0分钟';
    }
    const day = Math.floor(seconds / 86400);
    const hour = Math.floor((seconds % 86400) / 3600);
    const minute = Math.floor((seconds % 3600) / 60);

    return appendTimeStringTemp(day, hour, minute);
};

export const formatTimeWithSecondsToSeconds = (seconds) => {
    if (!seconds) {
        return '0分';
    }
    const day = Math.floor(seconds / 86400);
    const hour = Math.floor((seconds % 86400) / 3600);
    const minute = Math.floor((seconds % 3600) / 60);
    const second = Math.floor(seconds % 60);
    return appendTimeString(day, hour, minute, second);
};

// 将一个秒数转为几时几分
export const formatTimeToMinute = (seconds, keepminute) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = toDouble(Math.floor((seconds % 3600) / 60));
    let timeValue = '';
    if (Number(hours) === 0) {
        timeValue = minutes + '分';
    } else if (Number(minutes) === 0) {
        if (keepminute) {
            timeValue = hours + '时0分';
        } else {
            timeValue = hours + '时';
        }
    } else {
        timeValue = hours + '时' + minutes + '分';
    }
    return timeValue;
};

// 24h内的小时的值
export const getHoursWithSeconds = (seconds) => {
    if (seconds === 86400) {
        return 24;
    }
    return Math.floor((seconds % 86400) / 3600);
};

// 24h内的小时的值(四舍五入到分钟)
export const getHoursWithSecondsRound = (seconds) => {
    if (seconds === 86400) {
        return 24;
    }
    if (seconds % 60 > 30) {
        seconds = Math.floor(seconds / 60) * 60 + 60;
    } else {
        seconds = Math.floor(seconds / 60) * 60;
    }
    return Math.floor((seconds % 86400) / 3600);
};

// 1h内的分钟的值
export const getMinutesWithSeconds = (seconds) => {
    return Math.floor((seconds % 3600) / 60);
};

// 1h内的分钟的值（四舍五入）
export const getMinutesWithSecondsRound = (seconds) => {
    if (seconds % 60 > 30) {
        seconds = Math.floor(seconds / 60) * 60 + 60;
    } else {
        seconds = Math.floor(seconds / 60) * 60;
    }
    return Math.round((seconds % 3600) / 60);
};

// 几点几个小时,如:3.22
export const getHour = (seconds, accuracy = 2) => {
    return ((seconds % 86400) / 3600).toFixed(accuracy);
};

export const appendTimeString = (day, hour, minute, second) => {
    if ((day || hour || minute) && !second) {
        const dayStr = day ? `${day}天` : '';
        const hourStr = hour ? `${hour}时` : '';
        const minuteStr = minute ? `${minute}分` : '';
        return `${dayStr}${hourStr}${minuteStr}`;
    } else if (day || hour || minute || second) {
        const dayStr = day ? `${day}天` : '';
        const hourStr = hour ? `${hour}时` : '';
        const minuteStr = minute ? `${minute}分` : '';
        const secondStr = second ? `${second}秒` : '';
        return `${dayStr}${hourStr}${minuteStr}${secondStr}`;
    }
    return '0分';
};
export const appendTimeStringTemp = (day, hour, minute, second) => {
    if ((day || hour || minute) && !second) {
        const dayStr = day ? `${day}天` : '';
        const hourStr = hour ? `${hour}小时` : '';
        const minuteStr = minute ? `${minute}分钟` : '';
        return `${dayStr}${hourStr}${minuteStr}`;
    } else if (day || hour || minute || second) {
        const dayStr = day ? `${day}天` : '';
        const hourStr = hour ? `${hour}小时时` : '';
        const minuteStr = minute ? `${minute}分钟` : '';
        const secondStr = second ? `${second}秒` : '';
        return `${dayStr}${hourStr}${minuteStr}${secondStr}`;
    }
    return '0分';
};

export const autoAddZero = (number) => {
    if (parseInt(number, 10) < 10) {
        return `0${number}`;
    }
    return number;
};

export const toDouble = (value) => {
    if (value < 10) {
        return '0' + value;
    } else {
        return value;
    }
};

export const timeStingFromTimestampSimple = (stamp) => {
    const date = new Date(parseInt(stamp, 10) * 1000);
    return `${autoAddZero(date.getHours())}:${autoAddZero(date.getMinutes())}:${autoAddZero(
        date.getSeconds(),
    )}`;
};
