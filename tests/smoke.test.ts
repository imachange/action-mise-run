/**
 * プロジェクト基盤およびアクション定義ファイルの整合性を検証するスモークテスト。
 *
 * @packageDocumentation
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as fs from 'node:fs';
import * as path from 'node:path';

describe('action-mise-run scaffold', () => {
  it('action.yml が存在し node24 ランタイムが指定されていること', () => {
    const actionYamlPath = path.resolve(process.cwd(), 'action.yml');
    const content = fs.readFileSync(actionYamlPath, 'utf8');

    assert.match(content, /using:\s*'node24'/);
    assert.match(content, /main:\s*'dist\/index\.js'/);
    assert.match(content, /post:\s*'dist\/cleanup\.js'/);
  });
});