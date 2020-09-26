import React from 'react';
import { Collapse, Image, Tag } from 'antd';
import ImageTagColor from '../../../icons/settings/color-palette.svg';
import { ColorState as IColorState, GithubPicker } from 'react-color';
import { pickerColors, tags } from '../../../utils/settingsData';

const SettingsTagColor: React.FC = ({ userPreferences, changeTagColor }: any) => {
  const { Panel } = Collapse;

  const changeUserTagColor = (colorState: IColorState, name: string) => {
    changeTagColor({ ...userPreferences.tagColor, [name]: colorState.hex });
  };

  const collapseTags = (
    <Collapse accordion ghost>
      {tags.map((item) => {
        return (
          <Panel
            header={
              <Tag
                style={{
                  cursor: 'pointer',
                  borderColor: userPreferences.tagColor[item.type],
                  color: userPreferences.tagColor[item.type],
                  backgroundColor: `${userPreferences.tagColor[item.type]}10`,
                }}
              >
                {item.name}
              </Tag>
            }
            key={item.type}
          >
            <GithubPicker
              colors={pickerColors}
              triangle="hide"
              width={'140px'}
              onChange={(e) => changeUserTagColor(e, item.type)}
            />
          </Panel>
        );
      })}
    </Collapse>
  );

  return (
    <Collapse expandIcon={() => <Image preview={false} src={ImageTagColor} width={20} height={20} />}>
      <Panel header="Change Tag Color" key="tags">
        {collapseTags}
      </Panel>
    </Collapse>
  );
};

export default SettingsTagColor;
