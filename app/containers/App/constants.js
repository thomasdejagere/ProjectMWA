/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

import {
  prefixObjectValues
} from '../../utils';

export const PREFIX = "@@GLOBAL/";

let types = {
    SELECT_SERIE: "SELECT_SERIE",
    REQUEST_SAVE_SEEN: "REQUEST_SAVE_SEEN",
    RECEIVE_SAVE_SEEN: "RECEIVE_SAVE_SEEN",
    FAILURE_SAVE_SEEN: "FAILURE_SAVE_SEEN",

    REQUEST_SAVE_BOOKMARKED: "REQUEST_SAVE_BOOKMARKED",
    RECEIVE_SAVE_BOOKMARKED: "RECEIVE_SAVE_BOOKMARKED",
    FAILURE_SAVE_BOOKMARKED: "FAILURE_SAVE_BOOKMARKED",

    BOOKMARK_SERIE: "BOOKMARK_SERIE",
    SEEN_SERIE: "SEEN_SERIE"
};

export default prefixObjectValues(types, PREFIX);
