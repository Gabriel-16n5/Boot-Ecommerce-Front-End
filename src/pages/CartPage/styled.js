import styled from "styled-components"
import {blue, gray, green} from "../../constants/colors"
export const CartContainer = styled.main`
      padding: 25px;
`

export const ResumeContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    div {
        background-color: #424242;
    }
    p {
        margin-left: 10px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #FFFFFF;
        background-color: #424242;
    }
    h3 {
        margin-left: 10px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #FFFFFF;
        background-color: #424242;
    }
    h4 {
        margin-left: 10px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        background-color: #424242;
    }
    img {
        margin-left: 10px;
        margin-right: 20px;
        width: 120px;
        height: 120px;
    }
    span {
    display:flex;
    justify-content: space-around;
    background-color: #424242;
    align-items: center;
    width: 90vw;
    height: 50vw;
    }
    h2 {
        margin-left: 10px;
        width: 90vw;
        height: 10vw;
        background-color: #424242;
        display:flex;
        justify-content: start;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 32px;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
button {
    margin-bottom:20px;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 10vw;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: ${gray};
    font-size: 14px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    margin-top: 40px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    }
`

export const CartProducts = styled.section`
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-left: 300px;
    div {
        background-color: #424242;
    }
    p {
        margin-left: 10px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #FFFFFF;
        background-color: #424242;
    }
    h3 {
        margin-left: 10px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #FFFFFF;
        background-color: #424242;
    }
    h4 {
        margin-left: 10px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        background-color: #424242;
    }
    img {
        margin-left: 10px;
        margin-right: 20px;
        width: 120px;
        height: 120px;
    }
    span {
    display:flex;
    background-color: #424242;
    width: 90vw;
    height: 50vw;
    }
    h2 {
        margin-left: 10px;
        width: 90vw;
        height: 10vw;
        background-color: #424242;
        display:flex;
        justify-content: start;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 32px;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
button {
    margin-bottom:10px;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 10vw;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: ${gray};
    font-size: 14px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    margin-top: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    }
`

export const FinalizeOrder = styled.section`
    margin-top: 10px;
    button {
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: ${green};
    font-size: 20px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    padding: 12px;
    width: 90vw;
    }
`
export const FinalizeOrderData = styled.section`
    display:flex;
    padding-right: 10px;
    h5 {
    width: 90vw;
    background-color: #424242;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    }
    span {
    align-items:center;
    justify-content: space-between;
    display:flex;
    border:box-sizing;
    background-color: #424242;
    width: 90vw;
    height: 35vw;
    padding-left: 10px;
    padding-right: 10px;
    }
    div{
    display:flex;
    flex-direction: column;
    border:box-sizing;
    background-color: #424242;
    width: 90vw;
    height: 35vw;
    padding-left: 10px;
    padding-right: 10px;
    }
    input {
    margin-top: 40px;
    width: 46vw;
    height: 3vw;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: start;
    color: #FFFFFF;
    margin-bottom:10px;
    }
    button {
    margin-bottom:10px;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 10vw;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: ${gray};
    font-size: 20px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    padding: 12px;
    margin-top: 40px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    }
`