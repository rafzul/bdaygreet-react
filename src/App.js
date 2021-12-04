import Cards from './components/membercard.js'



const App = () => {



const loadData = require('./data/members.json');
const [Jin, Suga, Jhope, Rm, Jimin, Vee, Jungkook] = loadData["members"]
console.log(Jin)


  return (
    <div className="grid place-items-center h-screen mx-4 center">
      <header className="">
        <h1 className="font-headline leading-tight text-gray-900 text-7xl text-center mt-8">HBD NISAA</h1>
        <p className="font-mono text-center text-xl">Berikut adalah ucapan dari member member BTS untuk kamu (beneran dari member)</p>
      </header>
      <ul className="grid place-items-center mt-16">
          <Cards props={Jin}/>
          <Cards props={Suga}/>
          <Cards props={Jhope}/>
          <Cards props={Rm}/>
          <Cards props={Jimin}/>
          <Cards props={Vee}/>
          <Cards props={Jungkook}/>
      </ul>
    </div>
  );
}

export default App;
