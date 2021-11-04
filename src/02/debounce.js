//디바운스
//디바운스는 어떤 내용을 입력하다가 특정 시간 동안 대기하고 있으면 마지막에 입력된 내용을 바탕으로 서버 요청을 하는 방법이다. 연관 검색어 창이 대표적이다.
//debounce.js를 실행하려면 export를 삭제해야 한다.
//실행 후 다시 export를 넣어준다.
export function debounce(fucn,delay){
    let inDebounce;
    return function(...args){
        if(inDebounce){
            clearTimeout(inDebounce);
        }
        inDebounce = setTimeout(
            () => func(...args),delay);
    }
}

const run = debounce(val => console.log(val),100);
run('a');
run('b');
run(2);
//100ms 이후
//2