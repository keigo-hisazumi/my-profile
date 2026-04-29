# GitHub Copilot 作業指示書

このリポジトリにおける開発ルールの **正本は [`AGENTS.md`](../AGENTS.md)** です。GitHub Copilot で作業する場合も、原則として `AGENTS.md` のルールに従ってください。

ルール変更が必要な場合は本ファイルではなく `AGENTS.md` を更新してください。

## 最低限守ること（要約）

詳細は [`AGENTS.md`](../AGENTS.md) を必ず読んでください。

### 言語

- すべてのコミュニケーション・コメント・ドキュメントは **日本語** で記述する
- 変数名・関数名は適切な英語を使用（業界標準に従う）
- 技術用語（API、HTTP、JSON など）、コマンド、URL、ライブラリ名は英語のまま

### コード例

```javascript
// 良い例：コメントは日本語
/**
 * ユーザー情報を取得する
 *
 * @param {string} userId ユーザー ID
 * @returns {Promise<User>} ユーザー情報
 */
async function getUserInfo(userId) {
  // データベースから検索
  return await database.find(userId)
}
```

### ブランチ運用

- `main` ブランチへの直接コミット／プッシュは **絶対に禁止**
- 作業ブランチ命名規則: `feature/` / `fix/` / `docs/` / `refactor/` / `test/`

### コミットメッセージ

- プレフィックスは英語、本文は日本語
- 主なプレフィックス: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`, `style`, `build`, `ci`

例:
```
feat: ユーザー一覧画面を追加

- ユーザー検索機能を実装
- ページネーション機能を追加
```

### PR

- PR タイトル・本文・レビュー返信はすべて日本語
- `.github/PULL_REQUEST_TEMPLATE.md` のテンプレートに沿って記述する
- ドラフトから Ready for review に変更してからレビューを依頼すること
