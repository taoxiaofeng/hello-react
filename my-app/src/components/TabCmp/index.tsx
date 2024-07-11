import { Tabs } from "antd-mobile";
import React, { useMemo, useState } from "react";
import store from "store";

const TabCmp = () => {
  const [activeKey, setActiveKey] = useState(() => {
    return store.get("tmpKey") || "fruits";
  });
  const heightMap: {
    [key: string]: string;
  } = {
    fruits: "194px",
    vegetables: "240px",
    animals: "158px",
  };

  const tabs = [
    {
      title: "水果",
      key: "fruits",
      content: "菠萝",
    },
    {
      title: "蔬菜",
      key: "vegetables",
      content: "西红柿",
    },
    {
      title: "动物",
      key: "animals",
      content: "蚂蚁",
    },
  ];

  const height = useMemo(() => {
    console.log("activeKey -- ", activeKey);
    return heightMap[activeKey] || "100%";
  }, [activeKey]);

  console.log("height -- ", height);
  return (
    <div>
      <Tabs
        activeKey={activeKey}
        onChange={(key) => {
          setActiveKey(key);
          store.set("tmpKey", key);
        }}
        style={{
          "--active-line-border-radius": "12px",
          "--active-line-color": "hsl(var(--hi5-primary))",
          "--active-line-height": "3px",
          "--fixed-active-line-width": "34px",
          background: "rgba(232,226,255,0.6)",
          borderRadius: "24px",
          padding: "0 16px 16px 16px",
          height,
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Tab title={tab.title} key={tab.key}>
            {tab.content}
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default TabCmp;
