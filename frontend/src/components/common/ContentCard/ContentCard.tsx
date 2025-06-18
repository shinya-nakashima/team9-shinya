import { Lecture } from "../../../types/Lecture";
import "./ContentCard.css";

type Props = {
  lecture: Lecture;
};

const ContentCard = ({ lecture }: Props) => {
  const {
    title,
    course_name,
    target,
    theme,
    format,
    price,
    tags,
    image_url,
    url
  } = lecture;

  return (
    <div className="course-card">
      {/* 上部画像エリア */}
      <div
        className="course-card__image"
        style={{
          backgroundImage: `url(${image_url || "/placeholder.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 講座名とタグ */}
      <div className="course-card__header">
        <span className="course-card__title">{course_name || title}</span>
        <span className="course-card__tag">
          {tags && tags.length > 0
            ? tags.map((tag) => `#${tag.name}`).join(" ")
            : "#タグなし"}
        </span>
      </div>

      {/* テーマ・対象・形式 */}
      <ul className="course-card__info">
        <li>[テーマ] {theme || "未設定"}</li>
        <li>[対象] {target || "未設定"}</li>
        <li>[形式] {format || "未設定"}</li>
      </ul>

      {/* 金額エリア */}
      <p className="course-card__price">
        {price !== undefined ? `¥${price.toLocaleString()}` : "価格未定"}
      </p>

      {/* 詳細ボタン */}
      <a href={url || "#"} target="_blank" rel="noopener noreferrer">
        <button className="course-card__button">詳細を見る</button>
      </a>
    </div>
  );
};

export default ContentCard;
