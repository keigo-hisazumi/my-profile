# my-profile

久積奎吾のサウンドエンジニア（レコーディング / ミックス / マスタリング）としてのプロフィールページです。GitHub Pages でホスティングしています。

**公開 URL**: <https://keigo-hisazumi.github.io/my-profile/>

## 主な機能

- 名前・職業を表示するヒーローセクション
- 自己紹介と SNS リンク（Discord・X・Bluesky・YouTube の再生リスト）
- 料金表（画像）
- ポートフォリオ（YouTube 動画の埋め込みとタグ）
- 所持機材の一覧
- ヘッダーのナビゲーションから各セクションへ移動（スマートフォンではハンバーガーメニュー）
- スマートフォンでも見やすいレスポンシブデザイン

## カスタマイズ

### プロフィール情報の変更

表示する内容は `src/data/profiles.ts` にまとめています。公開ページ（`/` と `/sound`）は `soundEngineer` のデータを表示します（`/dev` は `/sound` へリダイレクトします）。

- `hero` - 名前、職業、説明
- `about` - 自己紹介文、SNS リンク
- `pricing` - 料金表の画像
- `portfolio` - ポートフォリオ項目（YouTube の動画 ID など）
- `equipment` - 所持機材

データの型は `src/types.ts`、各セクションの表示は `src/components/` の各コンポーネントで定義しています。

### スタイルの変更

- `src/style.css` - グローバルスタイル、カラースキーム
- `src/App.module.css` と `src/components/*.module.css` - 各コンポーネントのスタイル（CSS Modules）

## 技術スタック

- TypeScript
- React
- React Router
- Vite
- CSS Modules
- GitHub Pages（ホスティング）

## 開発

### 必要な環境

- Node.js 22

### コマンド

```bash
npm ci                # 依存関係のインストール
npm run dev           # 開発サーバーを起動
npm run build         # 型チェック（tsc）と dist/ への本番ビルド
npm run build-only    # 型チェックなしで dist/ に本番ビルド
npm run preview       # ビルド結果をプレビュー
npm run type-check    # TypeScript の型チェック
npm run lint          # ESLint（src/ が対象）
```

## ディレクトリ構成

```text
src/
  main.tsx          エントリーポイント
  App.tsx           ルーティングとヘッダー・フッターのレイアウト
  views/            プロフィールページ（各セクションの組み立て）
  components/       ヘッダー・ヒーロー・自己紹介・料金表・ポートフォリオ・機材などのセクション
  data/profiles.ts  表示するプロフィールのデータ
  types.ts          プロフィールデータの型定義
  style.css         グローバルスタイル
public/
  404.html          GitHub Pages で SPA のパスを index.html へ戻すリダイレクト
  profile.png       プロフィール画像
index.html          HTML テンプレート
vite.config.ts      Vite の設定（GitHub Pages 用の base パス）
```

## デプロイ

- `main` への PR マージ時に `.github/workflows/deploy.yml` が GitHub Pages（`gh-pages` ブランチ）へデプロイします
- PR ごとに `.github/workflows/pr-preview.yml` がプレビューを `gh-pages` の `pr-<番号>/` に公開し、PR に URL をコメントします（PR を閉じると削除）

## 開発ルール

開発ルールは [AGENTS.md](./AGENTS.md) を参照してください。
貢献の手順は [CONTRIBUTING.md](./CONTRIBUTING.md) を参照してください。

## ライセンス

ISC
