/**
 * Pack all of our packages so we can "install" them later.
 * We do this here rather than per test so that we only have
 * to do it once per test run as it takes a decent chunk of
 * time to do.
 * This also ensures all of the tests are guaranteed to run
 * against the exact same version of the package.
 */
import type { TestProject } from 'vitest/node';
import * as child_process from 'node:child_process';
export declare const execFile: typeof child_process.execFile.__promisify__;
export declare const FIXTURES_DESTINATION_DIR: string;
export declare const setup: (project: TestProject) => Promise<void>;
export declare const teardown: () => Promise<void>;
