import React from "react"
import "./App.css"
import {Table} from "semantic-ui-react"



export default function Coin({name,price,image,volume,symbol,priceChange,marketCap}){
    return(
    <div className="container">
    <Table inverted unstackable>
    <Table.Header>
        <Table.Row className="head">
            <Table.HeaderCell  width={6}><p className="headContent" >Image</p></Table.HeaderCell>
            <Table.HeaderCell   width={6}><p className="headContent" >Name</p></Table.HeaderCell>
            <Table.HeaderCell   width={6}><p className="headContent" >Symbol</p></Table.HeaderCell>
            <Table.HeaderCell   width={6}><p className="headContent" >Price</p></Table.HeaderCell>
            <Table.HeaderCell   width={6}><p className="headContent" >Total Volume</p></Table.HeaderCell>
            <Table.HeaderCell   width={6}><p className="headContent" >Price Change</p></Table.HeaderCell>
            <Table.HeaderCell   width={6}><p className="headContent" >Market Cap</p></Table.HeaderCell>
        </Table.Row>
    </Table.Header>
    <Table.Body >
    <Table.Row className="row">
     <Table.Cell  width={7}><img className="image" src={image} /></Table.Cell>
     <Table.Cell  width={8}><h1>{name}</h1></Table.Cell>
     <Table.Cell width={6}><h3>{symbol}</h3></Table.Cell>
     <Table.Cell width={7}><p>${price.toLocaleString()}</p></Table.Cell>
     <Table.Cell width={8}><p>${volume.toLocaleString()}</p></Table.Cell>
     <Table.Cell width={6}>{priceChange < 0 ? ( 
        <p style={{color:"red"}}>{priceChange.toFixed(2)}</p>
    )
     :(
        <p style={{color:"green"}}>{priceChange.toFixed(2)}</p>  
     )
    }</Table.Cell>
    <Table.Cell width={8}> <p> ${marketCap.toLocaleString()}</p></Table.Cell>
    </Table.Row>

    </Table.Body>
    </Table>

    </div>
    )
    
}