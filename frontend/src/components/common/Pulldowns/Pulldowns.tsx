// src/components/PulldownGroup.js
import React, { useState } from 'react';
import axios from 'axios';
import './Pulldowns.css';
import { Lecture } from '../../../types/Lecture';

const Pulldowns = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [lectures, setLectures] = useState<Lecture[]>([]);

  const categories = [
    { value: '', label: 'カテゴリを選択' },
    { value: 'リーダーシップ', label: 'リーダーシップ' },
    { value: 'ビジネスマナー', label: 'ビジネスマナー' },
    { value: '営業力', label: '営業力' }
  ];

  const areas = [
    { value: '', label: 'エリアを選択' },
    { value: '新人研修', label: '新人研修' },
    { value: '中堅社員', label: '中堅社員' },
    { value: '管理職', label: '管理職' }
  ];

  const priceRanges = [
    { value: '', label: '価格帯を選択' },
    { value: '無料', label: '無料' },
    { value: '1万円以下', label: '1万円以下' },
    { value: '高価格', label: '高価格' }
  ];

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:8000/mainpage/api/search_by_tags/', {
        tag1: selectedCategory,
        tag2: selectedArea,
        tag3: selectedPrice
      });
      setLectures(response.data);
    } catch (error) {
      console.error('検索に失敗しました:', error);
    }
  };

  const handleReset = () => {
    setSelectedCategory('');
    setSelectedArea('');
    setSelectedPrice('');
    setLectures([]);
  };

  return (
    <div className="pulldown-group">
      <div className="pulldown-container">
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

      <div className="button-group">
        <button className="search-btn" onClick={handleSearch}>
          検索
        </button>
        <button className="reset-btn" onClick={handleReset}>
          リセット
        </button>
      </div>

      <div className="selected-info">
        <p>選択中: カテゴリ={selectedCategory || '未選択'}, エリア={selectedArea || '未選択'}, 価格={selectedPrice || '未選択'}</p>
      </div>


      {/* 今のところは検索結果を同一コンポーネントにしていますが
          本来はContentCardWrapperに保存します
      */}
      <div className="lecture-results">
        {lectures.length > 0 ? (
          <ul>
            {lectures.map((lecture) => (
              <li key={lecture.id} className="lecture-card">
                <h3>{lecture.course_name}</h3>
                <p>{lecture.title}</p>
                <p>対象: {lecture.target}</p>
                <p>形式: {lecture.format}</p>
                <p>価格: ¥{lecture.price}</p>
                <a href={lecture.url} target="_blank" rel="noopener noreferrer">
                  詳細を見る
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>検索結果はありません。</p>
        )}
      </div>
    </div>
  );
};

export default Pulldowns;
