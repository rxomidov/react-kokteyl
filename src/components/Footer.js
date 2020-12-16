import React from 'react';
import styled from "styled-components";
import {socialData} from './socialData';

export default function Footer(props) {
    return <FooterWrapper>
        <div className="container py-3">
            <div className="row">
                <div className="col-md-6 text-uppercase text-center">
                    copyright &copy; cocktail db {new Date().getFullYear()}.
                    all rights reserved by RX{" "}
                </div>
                <div className="col-md-6 d-flex justify-content-around mb-3">
                    {socialData.map(item =>
                        <a href={item.url} key={item.id}>
                            {item.icon}
                        </a>)}
                </div>
            </div>
        </div>
    </FooterWrapper>
}


const FooterWrapper = styled.footer`
  background: #afafaf;
  color: #f7f7f7;
  .icon{
  font-size: 1.5rem;
  color: #f7f7f7;
  transition: 0.3s;
  }
  .icon:hover{
  color: #7effb8;
  cursor:pointer;
  }
`