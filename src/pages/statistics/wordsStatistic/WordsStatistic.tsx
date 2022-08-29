import React, { FC } from 'react';
import {
  Space, Typography, List, Divider, Progress,
} from 'antd';

const WordsStatistics: FC = (props) => {
  const { Text } = Typography;
  const { Item } = List;

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    width: '60%',
    margin: '0 auto',
  };

  return (
    <Space style={contentStyle}>
      <Divider>Today learned:</Divider>
      <List>
        <Item>
          <Text strong>New words: </Text>
          <Text> 0</Text>
        </Item>
        <Item>
          <Text strong>Learned words: </Text>
          <Text> 0</Text>
        </Item>
        <Item>
          <Text strong>Played games: </Text>
          <Text> 0</Text>
        </Item>
      </List>
      <Item>
        <Progress type="dashboard" percent={30} />
      </Item>
    </Space>
  );
};

export default WordsStatistics;
