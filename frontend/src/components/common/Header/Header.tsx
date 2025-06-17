// src/components/common/Header/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* ロゴ */}
        <div className="logo">
          <h1>MyApp</h1>
        </div>

        {/* ナビゲーション */}
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="/">ホーム</a></li>
            <li><a href="/about">会社概要</a></li>
            <li><a href="/services">サービス</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
          </ul>
        </nav>

        {/* ユーザーメニュー */}
        <div className="user-menu">
          <button className="login-btn">ログイン</button>
          <button className="signup-btn">新規登録</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
