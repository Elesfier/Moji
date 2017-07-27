
import { archive } from './archive.route';
import { archiveNote } from './archive-note.route';
import { archiveFiles } from './archive-files.route';
import { archiveExtensions } from './archive-extensions.route';

export let archiveRoute = [];

archiveRoute.push(archiveExtensions);
archiveRoute.push(archiveFiles);
archiveRoute.push(archiveNote);
archiveRoute.push(archive);
