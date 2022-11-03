import React, { Component } from 'react'

export default class About extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: false
      };
    this.increment = this.increment.bind(this);
   }
    increment() {
      this.setState(state => ({
        display: !state.display
      }));
    }
    render() {
      return (
        <div style={{fontSize: 16}}>
            <div align="left">
                <h2>myInformation.show()</h2>
                <p> My name is...<span style={{fontWeight: 'bold'}}>Bofan Ji</span></p>
                <p> I'm studying at...<span style={{fontWeight: 'bold'}}>Princeton</span></p>
                <p> I'm interested in...<span style={{fontWeight: 'bold'}}>blockchain, tech, and finance</span></p>
            </div>
            <div align="left">
                <h2>myJourney.show()</h2>
                <p>Summer 2021: I worked at a blockchain fund in Asia with focus on enterprise blockchain solutions (y'all know all that end up)</p>
                <p>Fall 2021: I co-founded a Edtech startup called <a href="https://peerexpress.org/">PeerExpress</a> to connect high school applicants with college tutors</p>
                <p>Winter 2022: I co-founded <a href="https://twitter.com/pton_blockchain">the first blockchain club</a> at Princeton</p>
                <p>Summer 2022: I worked at Dragonfly Capital on DeFi research/investment, with focus on <a href="https://mirror.xyz/0x210a210d86712722F7c7639EE87d2636F53f1Dfe/jDDNPnB9gFkEFgmxorEbaDqPCL1btI1cHJtCklWGqZ0">NFT lending</a>, <a href="https://twitter.com/JiBofan/status/1551714529167323136?s=20&t=4y4ClRMr1Qyia2Aff7ETew">DeFi AMMs</a>, Decentralized Perpetuals, and App Chains</p>
                <p>Now, I'm taking a bunch of cs classes and building projects with friends! </p>
            </div>
            <div align="left">
                <h2>mySocial.show()</h2>
                <nav id="colorlib-main-menu">
                    <ul>
                        <li><a href="https://twitter.com/JiBofan" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/in/bofan-ji-b74148198/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="mailto:bofanj@princeton.edu" target="_blank" rel="noopener noreferrer">Email</a></li>
                    </ul>
                </nav>
            </div>
        </div>
      );
    }
  };