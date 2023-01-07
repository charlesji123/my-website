import React, { Component } from 'react'
import { FaEthereum, FaShip,  FaBitcoin, FaChartLine, FaUserSecret, FaPeopleArrows, FaTwitter, FaLinkedin, FaMailBulk} from 'react-icons/fa';
import pfp from '../images/pfp.jpg';
import animepfp from '../images/anime_pfp.png';

export default class About extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: false
      };
    this.show = this.show.bind(this);
   }
    show() {
      this.setState(state => ({
        display: !state.display
      }));
    }

    render() {
      return (
        <div style={{margin: "50px", fontSize: 16.5}}>
            <div>
                <h1 align="center">Greetings - Welcome to Bofan's Website!</h1>
                <div style={{color:'darkslateblue', fontWeight: 'bold'}}>
                  <img src={animepfp} alt="profile photo" width={300} height={300} style={{float:"right", padding: '0px'}}/>
                  <p> I am Bofan Ji, a computer science and economics student at Princeton University. </p>
                  <p> In the past, I worked as a DeFi venture analyst and data researcher at Dragonfly Capital. <FaUserSecret size={20}/></p>
                  <p> I spent the last year building an EdTech startup called <a href="https://peerexpress.org/">PeerExpress</a> that matches Asian high school applicants with alike-majors college tutors. <FaPeopleArrows size={20}/></p>
                  <p> While at Princeton, I co-founded <a href="https://twitter.com/pton_blockchain">the Princeton Blockchain Club</a> curating a group of 100+ crypto enthusiasts and <a href="https://princetoneclub.com/tigertrek-crypto">Crypto Tigertrek</a>, a program that brings student builders to visit leading crypto entrepreneurs and investors in New York City. <FaBitcoin size={20}/></p>
                  <p>I'm currently working on a <a href='https://drive.google.com/file/d/1Xkt9e4HDTQLdDIGXIsxbx1yAIdvnH6J7/view?usp=sharing'>DL-based trading bot</a> that utilizes LSTM model to predict prices based on complex on-chain market signals such as whales' movements, AMM LP behavior, and interest rates, implementing a L1 contract to hold assets and execute trades on Uniswap.
                    I'm also conducting econometrics research on the impact of endogenously determined on-chain lending yields on the credit market equilibrium of crypto assets as my junior paper. <FaEthereum size={20}/></p>
                  <p>I'm an avid hackathon goer as well - planning for the Solana Chicago Bootcamp, Miami Hack, and ETHDenver this year! </p>
                </div>
            </div>
            {/* <button onClick={this.show} > {this.state.display ? 'https://github.com/charlesji123/bitcoin-client' : 'show github link'}</button> */}
            <div>
                <h2 align="left">My Past Projects: </h2>
                <div class="flexbox-container" style={{color:'darkslateblue', fontSize: 16.5, fontWeight: 'bold'}}>
                  <div>Built a <a href='https://github.com/charlesji123/bitcoin-client'>bitcoin client</a> with full node functionality in Rust </div>
                  <div>Published pieces in <a href='https://twitter.com/JiBofan/status/1551714529167323136?s=20&t=mphB407yAcOPLd8GEHGOIQ'>Uniswap-Curve War</a>, Decentralized Perpetuals, and <a href='https://mirror.xyz/0x210a210d86712722F7c7639EE87d2636F53f1Dfe/jDDNPnB9gFkEFgmxorEbaDqPCL1btI1cHJtCklWGqZ0'>NFT Financialization</a> </div>
                  <div>Created a <a href='https://github.com/charlesji123/CryptoPuzzle'>Crypto Puzzle</a> project for LionHack </div>
                </div>
            </div>
            {/* addd a photo of myself here */}
            <div>
                <h2 align="left">You got cool ideas? Let's chat! </h2>
                <p style={{color:'darkslateblue', fontSize: 18, fontWeight: 'bold'}}>I can be reached at 
                <div class="flexbox-container" style={{color:'darkslateblue', fontSize: 18, fontWeight: 'bold', justifyContent: 'space-evenly'}}>
                    <a href="https://twitter.com/JiBofan" target="_blank" rel="noopener noreferrer"><FaTwitter size={30}/>     </a>
                    <a href="https://www.linkedin.com/in/bofan-ji-b74148198/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30}/>     </a>
                    <a href="mailto:bofanj@princeton.edu" target="_blank" rel="noopener noreferrer"><FaMailBulk size={30}/></a>
                </div>
                </p>
            </div>
        </div>
      );
    }
  };
