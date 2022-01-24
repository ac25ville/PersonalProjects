const express = require ('express');
const app = express();
const port = 3000;

const { MerkleTree } = require('merkletreejs');
const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(prevBlock=null, data = ['A sent 100 to B', 'H sent 100 to J', 'Z sent 200 to X']) { //prevBlock if it exists, and the new data. 
                                                                                                    //Old data will be retrevied from the old block
        const d = new Date();
        this.data = data;
        this.nonce = nonce;
        this.timestamp = d.getTime();
        this.prevHash = '';
        if(prevBlock!=null && typeof(prevBlock).equals(typeof(Block))){
            this.prevHash = prevBlock.hash;
            this.data = prevBlock.getData().concat(data);
        }
        this.hash = this.calcuateHash();
        console.log(this.hash);
    };

    getData(){
        return this.data;
    }

    calcuateHash(){
        if (this.data){
            const leaves = this.data.map(x=>SHA256(x));
            const tree = new MerkleTree(leaves, SHA256);
            const root = tree.getRoot().toString('hex');        
            return SHA256(root+this.timestamp+this.prevHash).toString();
        }
    }


}

class Blockchain {
    constructor(){
        this.chain = [this.chainGenesis()];
    }
    chainGenesis(){
        return new Block(0, ['Genesis Block']);
    }

    getTailBlock(){
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock){

    }

}

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/pages/home.html');
});

app.listen(port, () => {});


