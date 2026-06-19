import { useCallback, useState, useMemo, memo } from "react";

 function MemoComponent(props) {
  const [count, setCount] = useState(0);

  const huge_operation = useCallback(
    (n) => {
      let num = n;

      for (let i = 0; i < n; i++) {
        num = Math.floor(Math.random() * n);
      }

      return num;
    },
    [count],
  );

  const resultHugeOperation = useMemo(() => {
    return huge_operation(count);
  }, []);


  console.log("child component render")



  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
      <p>{resultHugeOperation}</p>
    </div>
  );
}


export default memo(MemoComponent)