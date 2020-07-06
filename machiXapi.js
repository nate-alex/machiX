module.exports = async function (context, req) {
  const { id } = req.query;
  const digits = Array.from(Array(10), (x, i) => (id.match(new RegExp(i, 'g')) || []).length);
  const sum = digits.reduce((sum, x, i) => sum + x * i, 0);
  const number = BigInt(id);
  const colorMax = BigInt(0xffffff);
  var Web3 = require('web3')
  var provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/46aac655d58d4fc198a43792d193fd70");
  var web3 = new Web3(provider);


  let address = '0xd0c402bcbcb5e70157635c41b2810b42fe592bb0';
  
  let abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenID","type":"uint256"},{"indexed":false,"internalType":"string","name":"fileIPFSHash","type":"string"},{"indexed":false,"internalType":"string","name":"fileArweaveHash","type":"string"}],"name":"NewArtImageRefs","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenID","type":"uint256"},{"indexed":false,"internalType":"string","name":"artTitle","type":"string"},{"indexed":false,"internalType":"string","name":"artistName","type":"string"},{"indexed":false,"internalType":"string","name":"artistNote","type":"string"},{"indexed":false,"internalType":"uint256","name":"editionNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalCap","type":"uint256"},{"indexed":false,"internalType":"string","name":"fileType","type":"string"}],"name":"NewArtMetadata","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"royaltyFee","type":"uint256"},{"indexed":false,"internalType":"address","name":"artistAddress","type":"address"}],"name":"NewArtRoyaltyInfo","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"addApprovedAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"alphaGalleryCapacity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"fileIPFSHash","type":"string"},{"internalType":"string","name":"fileArweaveHash","type":"string"},{"internalType":"string","name":"artTitle","type":"string"},{"internalType":"string","name":"artistName","type":"string"},{"internalType":"string","name":"artistNote","type":"string"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"},{"internalType":"address","name":"artistAddress","type":"address"},{"internalType":"uint256","name":"totalCap","type":"uint256"},{"internalType":"string","name":"fileType","type":"string"}],"name":"createForArtist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"fileIPFSHash","type":"string"},{"internalType":"string","name":"fileArweaveHash","type":"string"},{"internalType":"string","name":"artTitle","type":"string"},{"internalType":"string","name":"artistName","type":"string"},{"internalType":"string","name":"artistNote","type":"string"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"},{"internalType":"uint256","name":"totalCap","type":"uint256"},{"internalType":"string","name":"fileType","type":"string"}],"name":"createNewArt","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"fileArweaveReferenceURL","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fileIPFSReferenceURL","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"getCoreMetadata","outputs":[{"internalType":"string","name":"fileIPFSHashByID","type":"string"},{"internalType":"string","name":"fileArweaveHashByID","type":"string"},{"internalType":"string","name":"artTitleByID","type":"string"},{"internalType":"string","name":"artistNameByID","type":"string"},{"internalType":"string","name":"artistNoteByID","type":"string"},{"internalType":"uint256","name":"editionNumberByID","type":"uint256"},{"internalType":"uint256","name":"totalEditionsByID","type":"uint256"},{"internalType":"string","name":"fileTypeByID","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"getImageLink","outputs":[{"internalType":"string","name":"fileIPFSURL","type":"string"},{"internalType":"string","name":"fileArweaveURL","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"getRoyaltyData","outputs":[{"internalType":"address","name":"artistAddressByID","type":"address"},{"internalType":"uint256","name":"royaltyFeeByID","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenReferenceURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalArtPieces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"newArweaveURL","type":"string"}],"name":"updateArweaveLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"newIPFSURL","type":"string"}],"name":"updateIPFSLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"newURI","type":"string"}],"name":"updateURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]


  let contract = new web3.eth.Contract(abi, address)
  
  async function getAllMaData () {
    let [ data1, data2, data3, data4] = await Promise.all([
      contract.methods.getCoreMetadata(id).call({from: '0xd0c402bcbcb5e70157635c41b2810b42fe592bb0'}),
      contract.methods.ownerOf(id).call({from: '0xd0c402bcbcb5e70157635c41b2810b42fe592bb0'}),
      contract.methods.getRoyaltyData(id).call({from: '0xd0c402bcbcb5e70157635c41b2810b42fe592bb0'}),
      contract.methods.getImageLink(id).call({from: '0xd0c402bcbcb5e70157635c41b2810b42fe592bb0'})
    ])
return {data1, data2, data3, data4}
  }
  
  myData = await getAllMaData()

  let {fileIPFSHashByID, fileArweaveHashByID, artTitleByID, artistNameByID, artistNoteByID, editionNumberByID, totalEditionsByID, fileTypeByID} = myData.data1;
  let {artistAddressByID, royaltyFeeByID} = myData.data3; 
  let {fileIPFSURL, fileArweaveURL} = myData.data4; 


  if ( fileTypeByID == "mp4") {
    animationFile = fileIPFSURL;
  }
  else if ( fileTypeByID == "glb") {
    animationFile = fileArweaveURL+".glb"; 
  }
  else {
    animationFile = "";
  }


  if (id == 2) {
    imageFile = "https://gateway.pinata.cloud/ipfs/QmSyFPuJE4C8s9UfHViKEiCGdkzzNTtPSMY4vzso9iTpfp";
  }
  else if (id == 5) {
    imageFile = "https://gateway.pinata.cloud/ipfs/QmfPAYa66jds9oJqsj2ZHKbum67UxCEdDRjivPvXZyPAGv";
  }
  else if (id == 6) {
    imageFile = "https://gateway.pinata.cloud/ipfs/QmdHEQMM98iPMXa8Y1Jv4YyXGVP8bbeBgXe6hYD4g4Eohj";
  }
  else {
    imageFile = fileIPFSURL;
  }  

  let externalURL = "https://www.infinft.com/view.html?token=" + id

  context.res = {
    body: {
      image: imageFile, 
      description: 'This piece was created by ' + artistNameByID + '. \n\nArtist Note: ' + artistNoteByID + '\n\nAll InfiNFT art pieces have their metadata stored directly on chain. The file is stored on the Arweave blockchain as well as IPFS, and the hashes from both platforms are written to the token upon minting. The Alpha Art pieces are the first NFTs stored on Arweave. Only 10 special edition pieces were created by artists for the Alpha Launch. \n\n Arweave Reference Link: ' + fileArweaveURL + '\n\n IPFS Reference Link: ' + fileIPFSURL,
      animation_url: animationFile,
      external_url: externalURL, 
      name: artTitleByID, 
      attributes: [

        {
          trait_type: 'artist name',
          value: artistNameByID
        },
        {
          trait_type: 'edition number',
          value: editionNumberByID + ' of ' + totalEditionsByID
        },    
        {
          trait_type: 'file type',
          value: fileTypeByID
        },
        {
          trait_type: 'royalty fee',
          value: royaltyFeeByID
        },                       
      ],
    }
  };
}
