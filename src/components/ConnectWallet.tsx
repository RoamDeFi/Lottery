import FancyButton from './FancyButton';

interface Props {
	connectWallet: any,
	walletConnected: boolean,
	walletAddress: any,
}

function ConnectWallet(props:Props) {
  let addressFormatted = "";

  if (typeof props.walletAddress !== "undefined"){
    if (props.walletAddress.length === 42 ) {
      addressFormatted = props.walletAddress.substring(0,6) + "..." + props.walletAddress.substring(38,42);
    }
  }

  return (
    <FancyButton text={props.walletConnected ? addressFormatted : "FANTOM CONNECT"} onButtonClick={props.connectWallet}/>
  );
  
}

export default ConnectWallet;