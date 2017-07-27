
import { getAllowed } from './allowed';
import { getNotifications } from './notifications';

export let gets = {};

//[FIXME]: this should be different
gets['notifications'] = getNotifications;
gets['allowed'] = getAllowed;
