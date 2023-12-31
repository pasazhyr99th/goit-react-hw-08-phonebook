import { LoaderPosition } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => (
  <LoaderPosition>
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </LoaderPosition>
);

export default Loader;
