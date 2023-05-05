import './App.css';
import a from "/home/vexecute/pooltogether/src/img/logo.jpeg";
import b from "/home/vexecute/pooltogether/src/img/BlockBuddy.png";

function App() {
  const handleOpenForm = () => {
    const formCard = document.getElementById("form-card");
  
    if (formCard.classList.contains("slide-in")) {
      formCard.classList.remove("slide-in");
    } else {
      formCard.classList.add("slide-in");
    }
  };
  return (
    <div>

<div class="landing-page">
  <div class="container">
    <div class="header-area">
    <a href="#" class="logo"><img src={b}></img></a>
      <ul class="links">
        <li>Home</li>
      </ul>
    </div>
    <div className="pool">
      <h1>PoolTogether</h1>
    </div>
    <div className="hell">
    <div className="info">
      <h1>About PoolTogether</h1>
      <p>PoolTogether is a no-loss lottery that allows users to earn interest on their savings while participating in a lottery-style drawing for a chance to win a big prize. The more you save, the better your chances of winning!</p>
      <p>With PoolTogether, you never lose your principal deposit. Instead, your deposit earns interest, and the interest earned is pooled with other users' deposits to fund the prize pool for the lottery. At the end of each lottery round, one lucky winner is chosen to receive the entire prize pool, while all other participants get their original deposits back plus the interest they earned.</p>
    </div>
    <div class="button1">  
      <button onClick={handleOpenForm}>Open Form</button>
    </div>
    <div class="button2"> 
      <button>Learn More</button>
    </div>
    
    <div className="main__video">
        <div className="card">
          <div className="card__video">
            <iframe width="300" height="200" src="https://www.youtube.com/embed/3dIYFjNUWq8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

    <div class="clearfix"></div>
  </div>
  </div>
  <div className="form-card" id="form-card">
  <form className='invest'>
    <div className="form-group">
    <b><p class= 'title'>Invest / Withdraw</p></b>
      <label htmlFor="invest">Invest:</label>
      <select className="form-control" id="invest">
        <option>USDC</option>
        <option>Ethereum</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="amount">Amount:</label>
      <input type="text" className="form-control" id="amount" />
    </div>
    <button type="submit" className="btn btn-primary">Invest</button>
  </form>
  <form className='withdraw'>
    <div className="form-group">
      <label htmlFor="withdraw">Withdraw:</label>
      <select className="form-control" id="withdraw">
        <option>USDC</option>
        <option>Ethereum</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="amount">Amount:</label>
      <input type="text" className="form-control" id="amount" />
    </div>
    <button type="submit" className="btn btn-primary">Withdraw</button>
  </form>
</div>

  
</div>
<footer className="footer">
      <div className="cont">
        <span className="text-muted">© 2023 BlockBuddy, Inc. All rights reserved.</span>
      </div>
    </footer>
    </div>
  );
}

export default App;
