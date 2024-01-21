import { useState, useEffect } from 'react';

export function useRt(squares) {
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    if (squares) {
      const data = squares.reduce((a, c, i) => {
        a[i+""] = c ? c : "";
        return a;
      }, {})

      fetch("...", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(response => setMoves(response["#annotations#"] ? response["#annotations#"] : []));
    }
  }, [squares]);

  return moves;
}
