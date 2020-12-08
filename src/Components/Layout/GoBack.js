import { withRouter } from 'react-router-dom';
import '../../Stylesheets/GoBack.css';

const GoBack = ({ history }) => {
  return (
    <div className='go-back'>
      <p onClick={history.goBack}>&lt; Back to list</p>
    </div>
  );
};

export default withRouter(GoBack);
