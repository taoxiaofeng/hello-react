import React, { useRef, useMemo, useEffect } from "react";
import { Form, Input, Switch, Divider, Button, Space, InputNumber } from "antd";
import { WindowScroller } from "react-virtualized";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList } from "react-window";
import ResizeObserver from "rc-resize-observer";
// import { v4 as uuidv4 } from 'uuid';
// import { isEqual } from 'lodash';
// import {
//   PlusOutlined,
//   PlusCircleOutlined,
//   DeleteOutlined,
//   CaretDownOutlined,
//   CaretUpOutlined
// } from "@ant-design/icons";
import { mockData, indicatorData } from "./data";
import "./index.css";
const { List: FormList, Item } = Form;
// const { TextArea } = Input;

const formLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};

const requiredRule = [
  {
    required: true,
    message: "标结果值不能为空"
  }
];

export default function App() {
  const [form] = Form.useForm();
  const listRef = useRef(null);
  const rowHeights = useRef({});
  // eslint-disable-next-line no-undef
  // const [list, setList] = useState([]);

  useEffect(() => {
    // form.setFieldsValue(mockData());
    form.setFieldsValue({
      questions: [...indicatorData.PERFORMANCE, ...indicatorData.TASK]
    });

    console.log(`form -- `, form)
  }, [form]);

  const list = useMemo(() => {
    return [...indicatorData.PERFORMANCE, ...indicatorData.TASK];
  }, [JSON.stringify(indicatorData)]);


  // useEffect(() => {
  //   if (indicatorData?.PERFORMANCE?.length) {
  //     setNewScoreList(indicatorData.PERFORMANCE);
  // form.setFieldsValue({
  //   scoreList: indicatorData.PERFORMANCE,
  //   taskList: indicatorData.TASK
  // })
  // }
  // }, [JSON.stringify(indicatorData)])
  // console.log(`indicatorData.PERFORMANCE -- `, indicatorData.PERFORMANCE)


  const setRowHeight = (index, size) => {
    // console.log(index, size)
    rowHeights.current = { ...rowHeights.current, [index]: size };
    listRef.current.resetAfterIndex(0);
  };
  const getRowHeight = (index) => {
    return rowHeights.current[index] || 200;
  };
  const Row = ({
    index,
    data: { fields, addQuestion, removeQuestion, moveQuestion },
    style: rowStyle
  }) => {
    const rowRef = useRef(null);
    useEffect(() => {
      if (rowRef?.current) {
        setRowHeight(index, rowRef.current.clientHeight);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rowRef]);
    if (!fields) return null;
    const { name } = fields[index];
    // console.log(index, index === (indicatorData.PERFORMANCE.length + 1))
    return (
      <ResizeObserver
        onResize={() => {
          if (rowRef?.current)
            setRowHeight(index, rowRef.current.clientHeight);
        }}
      >
        <div ref={rowRef} style={{ ...rowStyle, height: "auto" }}>
          {/* <div className="form-row"> */}
          {/* <div className="flex-between">
              <span>题目{index + 1}</span>
              <span>
                <Button
                  disabled={index === 0}
                  icon={<CaretUpOutlined />}
                  onClick={() => moveQuestion(index, index - 1)}
                />
                <Button
                  disabled={index === fields.length - 1}
                  icon={<CaretDownOutlined />}
                  onClick={() => moveQuestion(index, index + 1)}
                />
                <Button
                  icon={<DeleteOutlined />}
                  onClick={() => removeQuestion(name)}
                />
              </span>
            </div> */}
          {/* <Item label="题目">
              <div className="inline-form-item">
                <Item name={[name, "title"]} rules={requiredRule}>
                  <TextArea
                    maxLength={50}
                    showCount
                    placeholder="请输入题目内容，50字以内"
                    style={{ width: 500 }}
                  />
                </Item>
              </div>
            </Item>
            <Item
              name={[name, "optionRandom"]}
              label="选项随机"
              valuePropName="checked"
            >
              <Switch />
            </Item> */}
          {/* <FormList name={[name, "options"]}>
              {(options, { add: addOption, remove: removeOption }) => {
                return (
                  <>
                    {options.map(({ name: n, key: k }, idx) => {
                      return (
                        <Item key={k} label={`选项${idx + 1}`}>
                          <div className="inline-form-item">
                            <Item name={[n, "title"]} rules={requiredRule}>
                              <TextArea
                                style={{ width: 300 }}
                                maxLength={30}
                                showCount
                                rows={1}
                                placeholder="请输入选项内容，30字以内"
                              />
                            </Item>
                            {options.length > 1 && (
                              <Button
                                type="text"
                                icon={<DeleteOutlined />}
                                onClick={() => removeOption(n)}
                              />
                            )}
                          </div>
                        </Item>
                      );
                    })}
                    <Item label=" " colon={false}>
                      <Button
                        ghost
                        type="primary"
                        icon={<PlusCircleOutlined />}
                        onClick={() => addOption()}
                      >
                        添加选项
                      </Button>
                    </Item>
                  </>
                );
              }}
            </FormList> */}
          {index === 0 && (
            <>
              {/* <div className="mg20">
                <Button
                  block
                  size="large"
                  type="dashed"
                  icon={<PlusOutlined />}
                  onClick={() => addQuestion()}
                >
                  添加题目
                </Button>
              </div> */}
              <Space style={{ marginBottom: 20 }}>
                <Button htmlType="reset">重置</Button>
                <Button type="primary" htmlType="submit">
                  确定
                </Button>
              </Space>
            </>
          )}
          {index === 0 && <div className="lineTitle">评分基础指标</div>}
          {index === (indicatorData.PERFORMANCE.length + 1) && <div className="lineTitle">任务基础指标</div>}
          <Item label="基础指标名称">
            <span>{list[name].name}</span>
          </Item>
          <Item label="指标结果值" name={[name, 'value']} rules={requiredRule}>
            <InputNumber placeholder="请输入指标结果" style={{ width: 320 }} />
          </Item>
          {/* <FormList name={[name, "options"]}>
            {(options) => {
              return options.map((filed) => {
                const item = newScoreList[filed.key];
                return (
                  <div key={uuidv4()}> */}
          {/* <Item label='基础指标名称'>
                      <span>{item?.name}</span>
                    </Item>
                    <Item noStyle shouldUpdate={(prevValues, curValues) => !isEqual(prevValues, curValues)}>
                      {() => (
                        <Item label="指标结果值" name={[filed.name, 'value']} rules={requiredRule}>
                          <InputNumber placeholder="请输入指标结果" style={{ width: 320 }} />
                        </Item>
                      )}
                    </Item> */}
          {/* </div>
                );
              });
            }}
          </FormList> */}
          {/* </div> */}
        </div>
      </ResizeObserver>
    );
  };

  const scrollToQuestion = (index) => {
    listRef.current.scrollToItem(index, "smart");
    // 触发校验
    form.validateFields().catch(({ errorFields }) => {
      // 校验失败滚动至第一个错误字段
      form.scrollToField(errorFields[0].name);
    });
  };

  const onFinish = (values) => {
    const { questions } = values;
    if (!Array.isArray(questions)) return;

    let question;
    for (let i = 0, len = questions.length; i < len; i++) {
      question = questions[i];
      if (!question.value) return scrollToQuestion(i);
      const { options } = question;
      if (Array.isArray(options)) {
        for (const option of options) {
          if (!option.value) return scrollToQuestion(i);
        }
      }
    }

    console.log(`questions -- `, questions)
  };

  return (
    <Form
      form={form}
      {...formLayout}
      onFinish={onFinish}
      scrollToFirstError
      className="app-container"
    >
      <FormList name="questions" >
        {(
          fields,
          { add: addQuestion, remove: removeQuestion, move: moveQuestion }
        ) => {
          return (
            <WindowScroller>
              {({ height }) => (
                <AutoSizer disableHeight>
                  {({ width }) => {
                    return (
                      <VariableSizeList
                        ref={listRef}
                        width={width}
                        height={height}
                        itemCount={fields.length}
                        itemSize={getRowHeight}
                        itemData={{
                          fields,
                          addQuestion,
                          removeQuestion,
                          moveQuestion
                        }}
                      >
                        {Row}
                      </VariableSizeList>
                    );
                  }}
                </AutoSizer>
              )}
            </WindowScroller>
          );
        }}
      </FormList>
    </Form>
  );
}
