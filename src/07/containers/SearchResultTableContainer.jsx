////7-5. 검색 기능 만들면서 리덕스 복습하기

///7-5-3. 검색 결과 목록 만들기

////7-5-3-2. 데이터 컴포넌트 만들기

/*
    스토어와 연동하여 검색 목록을 추출하도록 mapStateToProps() 함수를 구성한다. 코드를 보면 검색을 위해 Object.values(searchFilter).reduce(...)가 작성되어 있다.

    이 내용은 검색 항목 객체의 값들(values)을 확인하여 값이 포함된 경우 (Boolean(value))에는 true를 반환하는 과정을 거쳐 검색 항목 포함 여부를 반환한다.
*/

import { connect } from 'react-redux';
import SearchResultTable from '../SearchResultTable';

const mapStateToProps = state => {
  const { collection, searchFilter } = state;
  const hasFilter = Object.values(searchFilter).reduce((result, value) => result || Boolean(value), false);//검색 항목이 있는지 검색한다.
  const { ids, entities } = collection;
  const items = ids
    .map(id => entities[id])//해시맵 형태로 되어 있는 그래프 DB를 객체 배열로 변환한다.
    .filter(
      entity =>
        !hasFilter || //검색 단어에 대한 데이터가 없으면 모든 목록을 반환한다.
        Object.entries(searchFilter).reduce(//filter() 함수는 참값인 데이터만을 추출해준다. reduce() 함수를 사용하여 데이터 항목 id, name, age의 조건을 모두 만족하는 경우에만 참값을 반환하여 검색 결과에 해당하는 목록을 추출한다.
          (result, [key, value]) => result && (!value || `${entity[key]}` === `${value}`),
          true,
        ),
    );

  return { items };
};

export default connect(mapStateToProps)(SearchResultTable);