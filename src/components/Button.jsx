export default function App() {
    const handleClick = event => {
      // 👇️ toggle class on click
      //event.currentTarget.classList.toggle('bg-salmon');
  
      // 👇️ add class on click
       event.currentTarget.classList.add('bg-dark');
  
      // 👇️ remove class on click
      // event.currentTarget.classList.remove('bg-salmon');
    };
  
    return (
      <div>
        <button onClick={handleClick}>Click</button>
      </div>
    );
  }