import type { RouteLocationNormalizedLoadedGeneric } from "vue-router";
import { DAYS_SHORTENED, MONTHS } from "../constants";
import { isPage, type Page } from "./types";

function getDaySuffix(day: number): string {
  if (day >= 11 && day <= 13) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function toDate(value: Date | null): string {
  // Ex: Tues, March 4th, 2026
  if (value === null) return "No Date Found";
  const date = value instanceof Date ? value : new Date(value);
  const day = date.getDate();
  return `${DAYS_SHORTENED[date.getDay()]}, ${MONTHS[date.getMonth()]} ${day}${getDaySuffix(day)}, ${date.getFullYear()}`;
}

export function getDaysAgo(value: Date | null): string {
  if (value === null) return "A million days ago";
  const date = value instanceof Date ? value : new Date(value);
  const currentDate = new Date();
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysAgo = Math.floor((currentDate.getTime() - date.getTime()) / millisecondsPerDay);
  return daysAgo === 0 ? "Today" : `${daysAgo} days ago`;
}

export const getPageName = (route: RouteLocationNormalizedLoadedGeneric): Page | undefined =>
  route.path.split("/").find((e) => isPage(e));
