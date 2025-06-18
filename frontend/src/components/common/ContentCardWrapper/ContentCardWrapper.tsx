
import { Lecture } from "../../../types/Lecture";
import ContentCard from "../ContentCard/ContentCard";
import "./ContentCardWrapper.css";
import { useEffect, useRef, useState } from "react";

type Props = {
  lectures: Lecture[];
}

const ContentCardWrapper = ({ lectures }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [cardsPerRow, setCardsPerRow] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const card = wrapper.querySelector(".course-card") as HTMLElement;
    if (!card) return;

    const wrapperWidth = wrapper.clientWidth;
    const gap = parseFloat(getComputedStyle(wrapper).gap) || 0;
    const cardWidth = card.offsetWidth;

    const perRow = Math.floor((wrapperWidth + gap) / (cardWidth + gap));
    setCardsPerRow(perRow);

    const totalCards = lectures.length;
    const lastRowCount = totalCards % perRow;

    // 全カード要素を取得
    const cards = Array.from(wrapper.children) as HTMLElement[];

    // いったん全カードから last-row クラスを除去
    cards.forEach(card => card.classList.remove("last-row"));

    // 割り切れない場合のみ最後の行にクラスを付ける
    if (lastRowCount !== 0) {
      for (let i = totalCards - lastRowCount; i < totalCards; i++) {
        cards[i].classList.add("last-row");
      }
    }

  }, [lectures]);

  return (
    <div ref={wrapperRef} className="course-card-wrapper">
      {lectures.map((lecture) => (
        <ContentCard key={`real-${lecture.id}`} lecture={lecture} />
      ))}
    </div>
  );
};


export default ContentCardWrapper;