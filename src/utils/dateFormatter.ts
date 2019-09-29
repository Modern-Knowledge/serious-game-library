/*
 * Copyright (c) 2019 Florian Mold
 * All rights reserved.
 */

import moment from "moment";

/**
 * format the passed Date as date time
 * e.g. 01.01.1970 12:00
 * @param date
 */
export function formatDateTime(date: Date = new Date()): string {
  return moment(date).format("L LT");
}

/**
 * format the passed Date as date
 * e.g. 01.01.1970
 * @param date
 */
export function formatDate(date: Date = new Date()): string {
  return moment(date).format("L");
}

/**
 * format the passed Date as time
 * e.g. 12:00
 * @param date
 */
export function formatTime(date: Date = new Date()): string {
  return moment(date).format("LT");
}