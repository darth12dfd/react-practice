//7-3. 그래프 데이터베이스 도입하기

///7-3-1. 객체 배열 형태의 자료를 스토어에 저장하도록 앱 수정하기

////7-3-1-3. 그래프 DB 구조 만들기

/*
    리듀서에서 객체 배열을 그래프 DB 구조로 변환한다. 이때 검색에 대한 속도를 최적화하기 위해 '해시맵'구조를 도입할 것이며, 해시맵은 데이터의 순서를 따지지 않으므로 이를 보완하기 위해 '그래프에 저장되는 데이터의 순서'를 따로 배열로 저장한다.

    우선 빈 그래프 DB를 initState에 구성한다.
*/  

const initState = {
    ids: [],
    entities: [],
};

export default (state = initState, action ) => {
    const { type, payload } = action;
    
    switch(type){
        default: 
            return state;
    }
};