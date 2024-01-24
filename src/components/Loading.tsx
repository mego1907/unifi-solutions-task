const Loading = ({ loading }: { loading: boolean }) => {
  if (loading) {
    return <div className="flex justify-center p-9">Loading</div>;
  }
};

export default Loading;
