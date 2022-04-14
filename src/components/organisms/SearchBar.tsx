import React, {useState} from 'react';
import styled from 'styled-components/native';
import {SearchIcon} from '@components/atoms/Icon';

export const SearchBar = () => {
  const [value, setValue] = useState('');

  return (
    <SearchBarWrapper>
      <SearchIcon />
      <SearchInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setValue}
        placeholder="검색어를 입력해 주세요."
        returnKeyType="search"
        returnKeyLabel="search"
        value={value}
      />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #efefef;
  border-radius: 4px;
  padding: 10px 14px 10px 12px;
  margin: 20px 20px;
  display: flex;
`;

const SearchInput = styled.TextInput`
  margin-left: 15px;
  padding: 0px;
  font-size: 16px;
`;
