import FancyTextField from './FancyTextField.jsx';

function App() {
  return (
    <>
    <h1 data-cy="title">This is getting fancy now</h1>
    <div>
      <FancyTextField label="nice label" />
      <FancyTextField label="another nice label" limit={50} />
    </div>
    </>
  );
}

export default App;
