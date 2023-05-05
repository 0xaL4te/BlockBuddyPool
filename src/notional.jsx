import './App.css';
import a from "/home/vexecute/pooltogether/src/img/logo.jpeg";
import b from "/home/vexecute/pooltogether/src/img/BlockBuddy.png";

export default function notional() {
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
      <h1>Notional</h1>
    </div>
    <div className="hell">
    <div className="info">
      <h1>About Notional</h1>
      <p>Notional is a decentralized protocol built on Ethereum that enables users to create, trade, and manage fixed-rate, fixed-term lending markets for crypto assets. The protocol allows users to lend and borrow without being exposed to the volatility of cryptocurrency markets.
         Notional provides users with the ability to take out loans or lend assets at a fixed interest rate for a set term, providing predictability and stability to users.</p>  
      <p>Additionally, Notional utilizes a unique system of liquidity pools that enables instant execution of trades and minimizes slippage. Overall, Notional offers a secure 
         and efficient platform for users to participate in fixed-rate lending markets for cryptocurrencies.</p>
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
            <iframe width="300" height="200" src="https://www.youtube.com/embed/dD3tVNp2uq0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

