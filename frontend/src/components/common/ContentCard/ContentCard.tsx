
import "./ContentCard.css";

type CardData = {
  title:string,
  tag:string,
  description:string,
  theme:string,
  target:string,
  format:string,
  price:string
}

const ContentCard = ({ title = "講座名", tag = "# ここに文章", description, theme, target, format, price = "XXX,XXX -" }:CardData) => {
  return (
    <div className="course-card">
      {/* 上部画像エリア */}
      <div className="course-card__image"></div>

      {/* 説明テキスト */}
      <p className="course-card__description">
        {description || "ここにテキストが入りますここにテキストが入りますここにテキストが入りますここにテキストが入ります"}
      </p>

      {/* 講座名とタグ */}
      <div className="course-card__header">
        <span className="course-card__title">{title}</span>
        <span className="course-card__tag">{tag}</span>
      </div>

      {/* テーマ・対象・形式 */}
      <ul className="course-card__info">
        <li>[テーマ] {theme || "ここにテキストが入ります"}</li>
        <li>[対象] {target || "ここにテキストが入ります"}</li>
        <li>[形式] {format || "ここにテキストが入ります"}</li>
      </ul>

      {/* 金額エリア（仮） */}
      <p className="course-card__price">{price}</p>

      {/* ボタン */}
      <button className="course-card__button">
        すべてのコースを見る
      </button>
    </div>
  );
}
export default ContentCard;