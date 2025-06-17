// src/components/PulldownGroup.js
import React, { useState } from 'react';
import './Pulldowns.css';

const Pulldowns = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  // ダミーデータ
  const categories = [
    { value: '', label: 'カテゴリを選択' },
    { value: 'restaurant', label: 'レストラン' },
    { value: 'cafe', label: 'カフェ' },
    { value: 'bar', label: 'バー' },
    { value: 'fastfood', label: 'ファストフード' }
  ];

  const areas = [
    { value: '', label: 'エリアを選択' },
    { value: 'shibuya', label: '渋谷' },
    { value: 'shinjuku', label: '新宿' },
    { value: 'ginza', label: '銀座' },
    { value: 'harajuku', label: '原宿' },
    { value: 'roppongi', label: '六本木' }
  ];

  const priceRanges = [
    { value: '', label: '価格帯を選択' },
    { value: 'low', label: '〜1,000円' },
    { value: 'medium', label: '1,000円〜3,000円' },
    { value: 'high', label: '3,000円〜5,000円' },
    { value: 'premium', label: '5,000円〜' }
  ];

  const handleSearch = () => {
    console.log('検索条件:', {
      category: selectedCategory,
      area: selectedArea,
      price: selectedPrice
    });
    // ここで検索処理を実装
  };

  const handleReset = () => {
    setSelectedCategory('');
    setSelectedArea('');
    setSelectedPrice('');
  };

  return (
    <div className="pulldown-group">
      <div className="pulldown-container">
        {/* カテゴリ選択 */}
        <div className="pulldown-item">
          <label htmlFor="category">カテゴリ</label>
          <select
            id="category"
            className="pulldown-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* エリア選択 */}
        <div className="pulldown-item">
          <label htmlFor="area">エリア</label>
          <select
            id="area"
            className="pulldown-select"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            {areas.map((area) => (
              <option key={area.value} value={area.value}>
                {area.label}
              </option>
            ))}
          </select>
        </div>

        {/* 価格帯選択 */}
        <div className="pulldown-item">
          <label htmlFor="price">価格帯</label>
          <select
            id="price"
            className="pulldown-select"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            {priceRanges.map((price) => (
              <option key={price.value} value={price.value}>
                {price.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ボタンエリア */}
      <div className="button-group">
        <button className="search-btn" onClick={handleSearch}>
          検索
        </button>
        <button className="reset-btn" onClick={handleReset}>
          リセット
        </button>
      </div>

      {/* 選択状態表示（デバッグ用） */}
      <div className="selected-info">
        <p>選択中: カテゴリ={selectedCategory || '未選択'}, エリア={selectedArea || '未選択'}, 価格={selectedPrice || '未選択'}</p>
      </div>
    </div>
  );
};

export default Pulldowns;
