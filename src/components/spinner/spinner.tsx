export const SpinnerComponent = (): JSX.Element => {
  return (
    <div className="isLoading">
      <div className="isLoading__cancel"></div>
      <div className="isLoading__loader"></div>
    </div>
  );
};
