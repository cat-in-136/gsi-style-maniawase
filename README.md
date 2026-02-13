# gsi-style-maniawase

国土地理院のベクトルタイル（実験用）を、Open Color ベースの配色でモダンかつ軽量にレンダリングするための MapLibre GL JS 向けの地図スタイル定義です。

ビルド済みスタイル JSON は下記からアクセスできます。

* ライトテーマ <https://cat-in-136.github.io/gsi-style-maniawase/gsi-style-maniawase.json>
* ダークテーマ <https://cat-in-136.github.io/gsi-style-maniawase/gsi-style-maniawase-dark.json>


## 思想：間に合わせ (Maniawase)

このプロジェクトは、その名の通り **「間に合わせ」** であることを第一に設計されています。

* **軽量性**: 複雑なフィルタリングを避け、必要最低限のレイヤー構成で軽快に動作します。
* **即時性**: 開発中のモックアップや、急ぎで地図タイルを確認したいシーンで「とりあえずこれを使えば見栄えが良い」状態を提供します。
* **汎用性**: 特殊な依存関係を排除し、標準的な MapLibre GL JS / Mapbox GL JS 環境でそのまま利用可能です。

## ビルド

```bash
npm install
npm run build
```

以下のファイルが `dist/` ディレクトリに出力されます：

* `gsi-style-maniawase.json` - ライトテーマ
* `gsi-style-maniawase-dark.json` - ダークテーマ

## カラーパレット

視認性が高くモダンな **Open Color** をベースに採用し、地形表現に欠かせない茶色系については独自のカスタムカラー（Brown）を定義して適用しています。

### テーマ対応

ライトテーマとダークテーマの2種類を提供しています。どちらも同じ Open Color パレットをベースに、背景色に合わせて調整されています。

### カスタム Brown (Open Color 拡張)

等高線や地名などの自然・地形要素に使用しています。

* `oc-brown-3`: `#d9c8b6`（細等高線）
* `oc-brown-4`: `#ba9f89`（計曲線）
* `oc-brown-7`: `#664d3c`（自然地名・歩道）

### 主要レイヤーの配色（ライトテーマ）

| カテゴリ | 色名 (Open Color) | コード | 適用対象 |
| --- | --- | --- | --- |
| **Water** | `blue 1` | `#d0ebff` | 水域、河川 |
| **Road (Expressway)** | `teal 5` / `green 2` | `#20c997` / `#d3f9d8` | 高速道路（縁 / 塗り） |
| **Road (National)** | `orange 5` / `orange 2` | `#ff922b` / `#ffe8cc` | 国道（縁 / 塗り） |
| **Road (Prefectural)** | `yellow 5` / `yellow 2` | `#fcc419` / `#fff3bf` | 都道府県道（縁 / 塗り） |
| **Railway** | `gray 8` | `#343a40` | 鉄道線路 |
| **Station** | `red 9` | `#c92a2a` | 駅舎 |
| **Label** | `gray 9` | `#212529` | 一般注記 |
| **Boundary** | `grape 6` | `#be4bdb` | 国界・都道府県界 |

## 技術仕様

* **ソース**: 国土地理院ベクトルタイル（`gsibv-vectortile-source-1-4-16`）
* **フォントスタック**: `NotoSansCJKjp-Regular`, `NotoSansCJKjp-Bold`
* **ズーム対応**: 最大 zoom 16 までカバー

## 導入方法

MapLibre GL JS 等で `style` オプションに JSON ファイルを指定してください。

### ライトテーマ

```javascript
const map = new maplibregl.Map({
  container: 'map',
  style: 'https://cat-in-136.github.io/gsi-style-maniawase/gsi-style-maniawase.json',
  center: [139.767, 35.681],
  zoom: 13
});
```

### ダークテーマ

```javascript
const map = new maplibregl.Map({
  container: 'map',
  style: 'https://cat-in-136.github.io/gsi-style-maniawase/gsi-style-maniawase-dark.json',
  center: [139.767, 35.681],
  zoom: 13
});
```

## ソース構成

* `src/colors.ts` - テーマ別カラー定義（light / dark）
* `src/style.ts` - スタイル生成関数
* `src/build.ts` - JSON ファイル生成スクリプト
* `src/opencolor-ex.ts` - Open Color 拡張（Brown）
* `src/validate.ts` - 生成された JSON の検証

---

**出典**: このスタイルは国土地理院のベクトルタイル提供に基づいています。利用の際は国土地理院のコンテンツ利用規約を遵守してください。
