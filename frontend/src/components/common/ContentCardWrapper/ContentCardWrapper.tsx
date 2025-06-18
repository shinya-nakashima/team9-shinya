
import { Lecture } from "../../../types/Lecture";
import ContentCard from "../ContentCard/ContentCard";
import "./ContentCardWrapper.css";

type Props = {
  lectures: Lecture[];
}

const ContentCardWrapper = ({ lectures }: Props) => {
  const dummyData: Lecture[] = new Array(5).fill(0).map((_, i) => ({
    id: i + 1,
    title: `ダミー講座${i + 1}`,
    course_name: `ダミーコース${i + 1}`,
    theme: "ダミーテーマ",
    target: "ダミー対象",
    format: "オンライン",
    price: 5000 + i * 1000,
    tags: [{ id: 1, name: "ダミータグ" }],
    image_url: "https://via.placeholder.com/300x180.png?text=Dummy+Image",
    url: "#",
    description: "これはダミーの講座説明です。",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }));

  return (
    <div className="course-card-wrapper">
      {dummyData.map((lecture) => (
        <ContentCard key={`dummy-${lecture.id}`} lecture={lecture} />
      ))}
      {lectures.map((lecture) => (
        <ContentCard key={`real-${lecture.id}`} lecture={lecture} />
      ))}
    </div>
  );
};

export default ContentCardWrapper;