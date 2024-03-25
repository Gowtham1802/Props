const FunctionClick = () => {
  const clickHandler = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      <button
        className="w-[6rem] h-[3rem] bg-gray-400 m-10"
        onClick={clickHandler}
      >
        Click Here!
      </button>
    </div>
  );
};

export default FunctionClick;
