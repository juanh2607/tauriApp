// This file works as documentation and is used to improve the programming experience

/**
 * @typedef {Object} ComponentsData - Object that stores the data of all the user's components
 * @property {TimerData[]} timer_data - An array of timer data.
 * @property {string} last_reset
 */

/**
 * @typedef {Object} TimerData
 * @property {string} title - The title of the timer.
 * @property {number} starting_time - The starting time of the timer in seconds.
 * @property {number} remaining_time - The remaining time of the timer in seconds.
 * @property {boolean} paused - Whether the timer is paused.
 * @property {number} left_offset - The left offset of the timer in pixels.
 * @property {number} top_offset - The top offset of the timer in pixels.
 */