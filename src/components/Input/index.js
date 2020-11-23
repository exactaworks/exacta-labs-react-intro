import React from 'react';

import * as S from './styles';

const Input = ({ onClear, ...inputProps }) => {
  return (
    <S.InputWrapper>
      <S.Input {...inputProps} />
      <S.CancelIcon onClick={onClear} />
    </S.InputWrapper>
  );
};

export default Input;