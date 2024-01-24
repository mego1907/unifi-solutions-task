const Error = ({ error }: { error: boolean }) => {
  if (error) {
    return <div>Error</div>;
  }
};

export default Error;
