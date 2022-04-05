import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

interface ITab {
  isFocused: boolean;
  label: string;
  onPress: () => void;
  setToValue: (params: number) => void;
  setWidth: (params: number) => void;
}

const TabButton = styled.TouchableOpacity<{isFocused: boolean}>`
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 0px 16px;
`;

const TabText = styled.Text<{isFocused: boolean}>`
  font-weight: 800;
  color: ${props => (props.isFocused ? 'black' : '#bebebe')};
`;

export const Tab = ({
  isFocused,
  label,
  onPress,
  setToValue,
  setWidth,
}: ITab) => {
  const [layout, setLayout] = useState<any>(null);
  useEffect(() => {
    if (isFocused && layout) {
      setToValue(layout.x);
      setWidth(layout.width);
    }
  }, [isFocused, layout, setToValue, setWidth]);

  // TODO 제스처할 때도 움직이도록 수정
  const onLayout = (e: any) => {
    const {x, width} = e.nativeEvent.layout;
    setLayout({x, width});
  };

  return (
    <TabButton isFocused={isFocused} onPress={onPress} onLayout={onLayout}>
      <TabText isFocused={isFocused}>{label}</TabText>
    </TabButton>
  );
};
