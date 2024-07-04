import {allTasks, atom} from 'nanostores';
import GithubSlugger from 'github-slugger';

export const $slugger = atom(new GithubSlugger());