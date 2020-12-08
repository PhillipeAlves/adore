import '../../Stylesheets/Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <img
        src={process.env.PUBLIC_URL + '/logo-adore-beauty.png'}
        alt='Adore Logo'
      />
    </header>
  );
};
