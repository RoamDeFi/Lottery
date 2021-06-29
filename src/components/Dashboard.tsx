import { Container, Row, Col } from 'react-bootstrap';
import FancyButton from './FancyButton';
import GIF from '../assets/ROAM.gif';

import '../styling/Dashboard.css';

interface Props {
  walletConnected: boolean,
  enterFunction: any,
  drawFunction: any,
  getPaidFunction: any,
  userBalance: any,
  viewWinningsFunction: any,
}

function Dashboard(props:Props) {
  return (
    <Container>
      <div className="dash-container">
        <Row>
          <Col>
            {/* enter: displays ticket number */}
            <FancyButton text={"BUY TICKET"} onButtonClick={props.enterFunction} disabled={!props.walletConnected}/>
          </Col>
          <Col>
            {/* draw: displays winning addresses */}
            <FancyButton text={"DRAW WINNER"} onButtonClick={props.drawFunction} disabled={!props.walletConnected}/>
            {/*<div><p>Text</p></div>*/}
          </Col>
        </Row>
        {/*}
        <Row>
          <Col>
          {/*
            <div>User Balance: {props.userBalance}</div>
            *
            <FancyButton text={"View Winnings"} onButtonClick={props.viewWinningsFunction}/>
            
          </Col>
        </Row>
        */}
        <Row>
          <Col>
            <img src={GIF} alt={"trippy ROAM gif"}/>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div>{props.userBalance}</div>
            {/* enable: once winner is drawn */}
            <FancyButton text={"CLAIM PRIZE"} onButtonClick={props.getPaidFunction} disabled={!props.walletConnected}/>
          </Col>
        </Row>
      </div>
     </Container>
  );
}

export default Dashboard;