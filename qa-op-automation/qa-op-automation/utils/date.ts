/**
 * Get epoch time from date
 * @param date - string or date object representing date; default value is current date
 * @returns number of seconds since epoch
 */
export const epochTime = (date?: Date | string) => Math.floor(new Date(date ?? new Date()).getTime() / 1000)

export const tomorrow = () => {
  const date = new Date()

  date.setDate(date.getDate() + 1)

  return date
}

export const yesterday = () => {
  const date = new Date()

  date.setDate(date.getDate() - 1)

  return date
}

export const today = () => {
  const date = new Date()

  date.setDate(date.getDate())

  return date
}

export const addDays = (days: number) => {
  const date = new Date()

  date.setDate(date.getDate() + days)

  return date
}

export const subtractDays = (days: number) => {
  const date = new Date()

  date.setDate(date.getDate() - days)

  return date
}

export const addMonths = (month: number) => {
  const date = new Date()

  date.setMonth(date.getMonth() + month)

  return date
}

export const getUSCurrentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${month}${day}${year}`;
}

export const getUSCurrentDatePlusMonth = (month: number) => {
  const date = new Date();
  const day = date.getDate();
  const nextMonth = date.getMonth() + month;
  const year = date.getFullYear();

  return `${nextMonth}${day}${year}`;
}

export const getTodayTime = (addHours?: number, addMinutes?: number, timePeriod?:string) => {
  const hours = addHours
  const minutes = addMinutes
  const timePeriods = timePeriod

  return `${hours}${minutes}${timePeriods}`;
}

export const currentTime = new Date().getTime()
export const currentDate = new Date()
export const timestamp = currentDate.getTime()
export const currentMonth = new Date().getMonth()
export const year = new Date().getFullYear()
