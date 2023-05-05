import './aave.css';
import a from "/home/vexecute/pooltogether/src/img/logo.jpeg";
import b from "/home/vexecute/pooltogether/src/img/BlockBuddy.png";

export default function aave() {
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
      <h1>Aave</h1>
    </div>
    <div className="hell">
    <div className="info">
      <h1>About Aave</h1>
      <p>Aave is a decentralized lending and borrowing protocol that allows users to earn interest on their crypto holdings while also being able to borrow other cryptocurrencies. 
        The platform operates through a pool of funds contributed by lenders, and borrowers can take out loans from these funds by offering collateral in the form of other 
        cryptocurrencies.</p>
      <p>Aave offers users flexibility in setting their own interest rates and loan terms, and the protocol uses a system of liquidation to protect lenders' funds in case borrowers 
        are unable to repay their loans. Overall, Aave provides a secure and decentralized platform for users to earn interest on their crypto holdings and access borrowing 
        opportunities.</p>
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
            <iframe width="300" height="200" src="https://www.youtube.com/embed/dTCwssZ116A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

    <div class="clearfix"></div>
  </div>
  </div>
  <div className="form-card" id="form-card">
  <form className = "invest">
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
  <form className = "withdraw">
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
