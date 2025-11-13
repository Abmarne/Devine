import Devine_Tree from '../../src/assets/Devine_Tree.png';

const Home = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '50vh',
        backgroundImage: `url(${Devine_Tree})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
            fontFamily: "'Kaushan Script', cursive",
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          Devine
        </h1>

        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            padding: '0 10%',
            fontFamily: "'Lexend', sans-serif",
            fontSize: '1.25rem',
            color: 'black',
            position: 'relative',
            top: '200px',
          }}
        >
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div>Set Goals</div>
            <div style={{ fontSize: '1rem', color: 'gray', marginTop: '0.5rem' }}>
              Establish objectives for self-improvement.
            </div>
          </div>

          <div style={{ textAlign: 'center', flex: 1 }}>
            <div>Train The Mind</div>
            <div style={{ fontSize: '1rem', color: 'gray', marginTop: '0.5rem' }}>
              Dementia can take its toll.<br />
              Let us help you impede it's<br />
              effects with our suite of<br />
              brain training games.
            </div>
          </div>

          <div style={{ textAlign: 'center', flex: 1 }}>
            <div>Verify Progress</div>
            <div style={{ fontSize: '1rem', color: 'gray', marginTop: '0.5rem' }}>
              See the hard earned results<br />
              of your training visually.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;