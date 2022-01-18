//06-1. 컨텍스트의 기초 개념 알아보기

//5. 컴포넌트에서 공급자 분리하기

//5-2. HomePageComponent 에서 공급자 코드 삭제하기

import React, { PureComponent } from 'react';
import LoadingProvider from './LoadingProvider';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';//소비자를 임포트한다.
import Button from '../04/Button';

function RowBComponent() {
  return <Button>버튼</Button>;
}

function RowCComponent() {
  return <ButtonWithLoadingContext label="버튼" />;
}

function TableComponent() {
  return (
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}

//TabelComponent를 배치하고 소비자를 공급자 아래에 배치한다.
class HomePageComponent extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent />
        <ButtonWithLoadingContext label="상태 변경" />
      </LoadingProvider>
    );
  }
}

export default HomePageComponent;