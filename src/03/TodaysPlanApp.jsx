//03-7 함수형 컴포넌트

//함수형 컴포넌트와 클래스형 컴포넌트 비교

//클래스형 컴포넌트

class TodaysPlanApp extends React.Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;

    return (
      <div className="body">
        {hasPlan ? <TodaysPlan /> : null}
        <button onClick={onButtonClick}>계획없음</button>
      </div>
    );
  }
}
