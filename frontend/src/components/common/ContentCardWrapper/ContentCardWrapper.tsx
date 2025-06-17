
import ContentCard from "../ContentCard/ContentCard";
import "./ContentCardWrapper.css";

const ContentCardWrapper = () => {
  const dummyData = new Array(10).fill(0).map((_, i) => ({
    title: `講座${i + 1}`,
    tag: "# タグ",
    description: "ここにテキストが入りますここにテキストが入ります...",
    theme: "テーマ例",
    target: "対象例",
    format: "形式例",
    price: "123,456 -",
  }));

  return (
    <div className="course-card-wrapper">
      {dummyData.map((card, i) => (
        <ContentCard key={i} {...card} />
      ))}
    </div>
  );
}

export default ContentCardWrapper;