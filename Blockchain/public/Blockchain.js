const { MerkleTree } = require('merkletreejs');
const SHA256 = require('crypto-js/sha256');

class Block {
    prevHash;
    hash;
    data = ["Transaction A", "Transaction B", "Transaction C"];
    timestamp;
    nonce;
    constructor(prevBlock = null) {
        this.prevHash = "";
        this.hash = "";
        
        if(prevBlock){
            this.prevHash = prevBlock.hash;
        }
        
    };

    calcuateHash(){
        if (this.data){
            const leaves = this.data.map(x=>SHA256(x));
            const tree = new MerkleTree(leaves, SHA256);
            const root = tree.getRoot().toString('hex');
            const leaf = SHA256(this.data[0]);
            const proof = tree.getProof(leaf);
            console.log(tree.verify(proof,leaf,root));
        }
    }
}

class Blockchain {

    

    createChain() {

    }

}