import { useEffect } from "react";

export default function TestUseEffect() {
  useEffect(() => {
    console.log("child component did mount");
  }, []);
  return <div>child component</div>;
}
