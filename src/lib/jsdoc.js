// This file works as documentation and is used to improve the programming experience

/**
 * @typedef {Object} ComponentsData - Object that stores the data of all the user's components
 * @property {TimerData[]} timerData - An array of timer data.
 */

/**
 * @typedef {Object} TimerData
 * @property {string} title - The title of the timer.
 * @property {number} startingTime - The starting time of the timer in seconds.
 * @property {number} remainingTime - The remaining time of the timer in seconds.
 * @property {boolean} paused - Whether the timer is paused.
 * @property {number} leftOffset - The left offset of the timer in pixels.
 * @property {number} topOffset - The top offset of the timer in pixels.
 */