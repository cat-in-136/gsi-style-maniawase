# gsi-style-maniawase

国土地理院のベクトルタイル（実験用）を、Open Color ベースの配色でモダンかつ軽量にレンダリングするための地図スタイル定義です。

## 思想：間に合わせ (Maniawase)

このプロジェクトは、その名の通り **「間に合わせ」** であることを第一に設計されています。

* **軽量性**: 複雑なフィルタリングを避け、必要最低限のレイヤー構成で軽快に動作します。
* **即時性**: 開発中のモックアップや、急ぎで地図タイルを確認したいシーンで「とりあえずこれを使えば見栄えが良い」状態を提供します。
* **汎用性**: 特殊な依存関係を排除し、標準的な MapLibre GL JS / Mapbox GL JS 環境でそのまま利用可能です。

## カラーパレット

視認性が高くモダンな **Open Color** をベースに採用し、地形表現に欠かせない茶色系については独自のカスタムカラー（Brown）を定義して適用しています。

### カスタム Brown (Open Color 拡張)

等高線や地名などの自然・地形要素に使用しています。

* `oc-brown-3`: `#d9c8b6`（細等高線）
* `oc-brown-4`: `#ba9f89`（計曲線）
* `oc-brown-7`: `#664d3c`（自然地名・歩道）

```css
/* OpenColor Extension: Brown */
  --oc-brown-0: #f8f6f2;
  --oc-brown-1: #f2ede4;
  --oc-brown-2: #e8ddd0;
  --oc-brown-3: #d9c8b6;
  --oc-brown-4: #ba9f89;
  --oc-brown-5: #9c7f68;
  --oc-brown-6: #826651;
  --oc-brown-7: #664d3c;
  --oc-brown-8: #4a3528;
  --oc-brown-9: #2e1f16;
```

### 主要レイヤーの配色

| カテゴリ | 色名 (Open Color) | コード | 適用対象 |
| --- | --- | --- | --- |
| **Water** | `blue 1` | `#d0ebff` | 水域、河川 |
| **Road (Expressway)** | `teal 6` | `#20c997` | 高速道路 |
| **Road (National)** | `orange 5` | `#ff922b` | 国道 |
| **Road (Prefectural)** | `yellow 5` | `#fcc419` | 都道府県道 |
| **Railway** | `gray 8` | `#343a40` | 鉄道線路 |
| **Station** | `red 9` | `#c92a2a` | 駅舎 |
| **Label** | `gray 9` | `#212529` | 一般注記 |
| **Boundary** | `grape 6` | `#be4bdb` | 国界・都道府県界 |

## 技術仕様

* **ソース**: 国土地理院ベクトルタイル（`gsibv-vectortile-source-1-4-16`）
* **フォントスタック**: `NotoSansCJKjp-Regular`, `NotoSansCJKjp-Bold`
* **ズーム対応**: 最大 zoom 16 までカバー

## 導入方法

MapLibre GL JS 等で `style` オプションに `gsi-style-maniawase.json` を指定してください。

```javascript
const map = new maplibregl.Map({
  container: 'map',
  style: './gsi-style-maniawase.json',
  center: [139.767, 35.681],
  zoom: 13
});
```

---

**出典**: このスタイルは国土地理院のベクトルタイル提供に基づいています。利用の際は国土地理院のコンテンツ利用規約を遵守してください。
