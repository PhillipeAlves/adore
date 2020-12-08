import { useHistory } from 'react-router-dom';
import '../../Stylesheets/GoBack.css';

export const GoBack = () => {
  const history = useHistory();
  return (
    <div className='go-back'>
      <p onClick={() => history.goBack()}>&lt; Back to list</p>
    </div>
  );
};
