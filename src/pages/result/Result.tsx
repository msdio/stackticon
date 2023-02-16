const Result = () => {
  const clickCopyUrl = () => {
    console.log('temp');
  };
  return (
    <div>
      <div>image</div>
      <div>
        <button onClick={clickCopyUrl}>url 복사하기</button>
        <button>다시 만들기</button>
      </div>
    </div>
  );
};

export default Result;
