import { Button } from "antd";
import React, { useState, useTransition } from "react";

const testCache = 'testCache';

function UseTransition() {
  const [showContent, setShowContent] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      setShowContent(!showContent);
    });
  };

  console.log(`testCache -- `, testCache);

  return (
    <div>
      <Button type="default" onClick={handleClick} disabled={isPending}>
        {showContent ? "Hide Content" : "Show Content"}
      </Button>
      {isPending ? " Loading..." : null}
      {showContent ? <ContentComponent /> : null}
    </div>
  );
}

function ContentComponent() {
  // 渲染内容组件...
  return <div>Content</div>;
}

export default UseTransition;
