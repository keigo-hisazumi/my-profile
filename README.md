# My Profile

Vue.jsで構築された個人プロフィールページです。GitHub Pagesでホスティングされています。

## 🚀 機能

- 📝 自己紹介セクション
- 💼 スキル表示
- 🎨 ポートフォリオギャラリー
- 📧 お問い合わせフォーム
- 📱 レスポンシブデザイン
- 🔗 SNSリンク

## 🛠️ 技術スタック

- Vue 3
- Vite
- CSS3
- GitHub Pages

## 📦 セットアップ

### 前提条件

- Node.js 18.x 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/hkmm0401-code/my-profile.git

# プロジェクトディレクトリに移動
cd my-profile

# 依存関係をインストール
npm install
```

## 🚀 開発

### 開発サーバーを起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

### プレビュー

```bash
npm run preview
```

## 📤 デプロイ

このプロジェクトは GitHub Pages に自動デプロイされます。

1. リポジトリの Settings > Pages に移動
2. Source を "GitHub Actions" に設定
3. `main` ブランチにプッシュすると自動的にデプロイされます

デプロイされたサイト: `https://hkmm0401-code.github.io/my-profile/`

## 📝 カスタマイズ

### プロフィール情報の変更

以下のファイルを編集してください：

- `src/components/Hero.vue` - 名前、職業、プロフィール写真
- `src/components/About.vue` - 自己紹介文、基本情報
- `src/components/Skills.vue` - スキルセット
- `src/components/Portfolio.vue` - ポートフォリオ項目
- `src/components/Contact.vue` - 連絡先情報

### スタイルの変更

- `src/style.css` - グローバルスタイル、カラースキーム
- 各コンポーネントの `<style scoped>` セクション

## 📄 ライセンス

ISC

## 👤 作成者

山田 太郎