// Column.js

type CardProps = {
    id: number; // idプロパティを追加、これは一意のキーとして使用します。
    content: string; // contentプロパティの型を定義します。
  };

type ColumnProps = {
    title: string;
    cards: CardProps[]; // CardProps は Card コンポーネントの型を指すものとします
  };

const Column = ({ title, cards }: ColumnProps) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      {/* {cards.map((card) => (
        <Card key={card.id} content={card.content} />
      ))} */}
      {/* 新しいカードを追加するロジックをここに実装 */}
    </div>
  );
};

export default Column;