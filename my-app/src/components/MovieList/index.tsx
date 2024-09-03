import React from 'react'
import { Avatar, List, Empty } from 'antd';

export interface Data {
  id: string;
  name: string;
  alternate_names?: (string | null)[] | null;
  species: string;
  gender: string;
  house: string;
  dateOfBirth?: string | null;
  yearOfBirth?: number | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors?: (string | null)[] | null;
  alive: boolean;
  image: string;
}
export interface Wand {
  wood: string;
  core: string;
  length?: number | null;
}

interface Props {
  data: Data[];
  emptyTips?: string;
}

const MovieList = ({ data, emptyTips }: Props) => {
  return (
    <div className='p-6'>
      {data?.length > 0 ? <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size={32} src={item?.image ? item.image : '@/assets/images/default_avatar.png'} />}
              title={<a href={item.image}>{item.name}</a>}
              description={item.actor}
            />
          </List.Item>
        )}
      /> : <Empty description={emptyTips} />}
    </div>

  )
}

export default MovieList
