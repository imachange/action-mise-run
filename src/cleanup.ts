/**
 * `imachange/action-mise-run` の `post` ライフサイクルクリーンアップ処理。
 *
 * @remarks
 * ステップ開始時に `core.saveState('temp_dir', ...)` で記録された一時作業ディレクトリを、ジョブの成否に関わらず破棄する。
 *
 * @packageDocumentation
 */

import * as core from '@actions/core';
import * as io from '@actions/io';

/**
 * 一時作業ディレクトリを削除する。
 *
 * @returns クリーンアップ完了時に解決される Promise
 */
export async function runCleanup(): Promise<void> {
  const tempDir = core.getState('temp_dir');
  if (!tempDir) {
    return;
  }

  try {
    await io.rmRF(tempDir);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    core.warning(`一時ディレクトリの削除に失敗しました (${tempDir}): ${message}`);
  }
}

void runCleanup();