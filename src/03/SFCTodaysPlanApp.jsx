//03-7 함수형 컴포넌트

//함수형 컴포넌트와 클래스형 컴포넌트 비교

//함수형 컴포넌트

function TodaysPlanApp(props) {
  const { onButtonClick, hasPlan } = props;
  return (
    <div className="body">
      {hasPlan ? <TodaysPlan /> : null}
      <button onClick={onButtonClick}>계획없음</button>
    </div>
  );
}
