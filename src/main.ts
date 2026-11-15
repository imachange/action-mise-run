/**
 * `imachange/action-mise-run` のメインエントリポイント。
 *
 *
 * @packageDocumentation
 */

import * as core from '@actions/core';

/**
 * アクションのメイン処理を実行する。
 *
 * @returns 処理完了時に解決される Promise
 */
export async function run(): Promise<void> {
  try {
    core.info('action-mise-run scaffold initialized.');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    core.setFailed(message);
  }
}

void run();