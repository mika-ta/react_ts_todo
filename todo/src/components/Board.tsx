// Board.js
import React from 'react';
// import Column from "./Column";

const Board = () => {
  // ここには状態管理のロジックやデータフェッチングのロジックを追加する
  const columns = [
    { id: 1, title: 'Todo', cards: [/* ...タスクカードのデータ... */] },
    { id: 2, title: 'Doing', cards: [/* ... */] },
    { id: 3, title: 'Done', cards: [/* ... */] },
    // 他のカラムも同様に
  ];

//   return (
//     <div className="board">
//       {columns.map((column) => (
//         <Column key={column.id} title={column.title} cards={column.cards} />
//       ))}
//     </div>
//   );
};

export default Board;