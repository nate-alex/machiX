module.exports = async function (context, req) {
  const { id } = req.query;
  const digits = Array.from(Array(10), (x, i) => (id.match(new RegExp(i, 'g')) || []).length);
  const sum = digits.reduce((sum, x, i) => sum + x * i, 0);
  const number = BigInt(id);
  const colorMax = BigInt(0xffffff);
  var Web3 = require('web3')
  var provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/46aac655d58d4fc198a43792d193fd70");
  var web3 = new Web3(provider);


  let address = '0x56074ac10eef4c63428e0be4853e5bcfebd42bd0';
  
  let abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenID","type":"uint256"},{"indexed":false,"internalType":"string","name":"fileIPFSHash","type":"string"},{"indexed":false,"internalType":"string","name":"fileArweaveHash","type":"string"}],"name":"NewArtImageRefs","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenID","type":"uint256"},{"indexed":false,"internalType":"string","name":"artistName","type":"string"},{"indexed":false,"internalType":"string","name":"artTitle","type":"string"},{"indexed":false,"internalType":"string","name":"artistNote","type":"string"},{"indexed":false,"internalType":"uint256","name":"editionNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalCap","type":"uint256"}],"name":"NewArtMetadata","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"royaltyFee","type":"uint256"},{"indexed":false,"internalType":"address","name":"artistAddress","type":"address"}],"name":"NewArtRoyaltyInfo","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenID","type":"uint256"},{"indexed":false,"internalType":"string","name":"mediaTag","type":"string"},{"indexed":false,"internalType":"string","name":"mediaCopyright","type":"string"},{"indexed":false,"internalType":"string","name":"creationDate","type":"string"},{"indexed":false,"internalType":"string","name":"fileType","type":"string"}],"name":"newArtAddtData","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"fileIPFSHash","type":"string"},{"internalType":"string","name":"fileArweaveHash","type":"string"},{"internalType":"string","name":"artistName","type":"string"},{"internalType":"string","name":"artTitle","type":"string"},{"internalType":"string","name":"artistNote","type":"string"},{"internalType":"string","name":"mediaTag","type":"string"},{"internalType":"string","name":"mediaCopyright","type":"string"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"},{"internalType":"uint256","name":"totalCap","type":"uint256"},{"internalType":"string","name":"fileType","type":"string"},{"internalType":"string","name":"creationDate","type":"string"}],"name":"createForArtist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"fileArweaveReferenceURL","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fileIPFSReferenceURL","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"getAdditionalMetadata","outputs":[{"internalType":"string","name":"mediaTagByID","type":"string"},{"internalType":"string","name":"mediaCopyrightByID","type":"string"},{"internalType":"string","name":"creationDate","type":"string"},{"internalType":"string","name":"fileTypeByID","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"getCoreMetadata","outputs":[{"internalType":"string","name":"fileIPFSHashByID","type":"string"},{"internalType":"string","name":"fileArweaveHashByID","type":"string"},{"internalType":"string","name":"artistNameByID","type":"string"},{"internalType":"string","name":"artTitleByID","type":"string"},{"internalType":"string","name":"artistNoteByID","type":"string"},{"internalType":"uint256","name":"editionNumberByID","type":"uint256"},{"internalType":"uint256","name":"totalEditionsByID","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"getImageLink","outputs":[{"internalType":"string","name":"fileIPFSURL","type":"string"},{"internalType":"string","name":"fileArweaveURL","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"getRoyaltyData","outputs":[{"internalType":"address","name":"machiXAddress","type":"address"},{"internalType":"uint256","name":"royaltyFeeByID","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenReferenceURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalArtPieces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"newArweaveURL","type":"string"}],"name":"updateArweaveLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"newIPFSURL","type":"string"}],"name":"updateIPFSLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"newURI","type":"string"}],"name":"updateURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]


  let contract = new web3.eth.Contract(abi, address)
  
  async function getAllMaData () {
    let [ data1, data2, data3] = await Promise.all([
      contract.methods.getCoreMetadata(id).call({from: '0x56074ac10eef4c63428e0be4853e5bcfebd42bd0'}),
      contract.methods.getAdditionalMetadata(id).call({from: '0x56074ac10eef4c63428e0be4853e5bcfebd42bd0'}),
      contract.methods.getImageLink(id).call({from: '0x56074ac10eef4c63428e0be4853e5bcfebd42bd0'})
    ])
return {data1, data2, data3}
  }
  
  myData = await getAllMaData()

  let {fileIPFSHashByID, fileArweaveHashByID, artistNameByID, artTitleByID, artistNoteByID, editionNumberByID, totalEditionsByID} = myData.data1;
  let {mediaTagByID, mediaCopyrightByID, creationDate, fileTypeByID} = myData.data2;
  let {fileIPFSURL, fileArweaveURL} = myData.data3; 

  

  if ( fileTypeByID == "mp4") {
    animationFile = fileIPFSURL;
  }
  else {
    animationFile = "";
  }

  if (id == 1) {
    imageFile = "https://gateway.pinata.cloud/ipfs/QmXztKiNUAujxWC5qEbCfjAMZoH5KbF9yTAXaK9wQhVe3v";
  }
  else if (id == 2) {
    imageFile = "https://gateway.pinata.cloud/ipfs/QmR3uQ6xByAd2nyybk6PGSf1wLq8jag7T2fJNFEeXCKMyX";
  }
  else if (id == 3) {
    imageFile = "https://gateway.pinata.cloud/ipfs/Qmai9S9UryYv4FSVqhSwYS5E3f2mCko2Pyxemx66uQANVe";
  }
  else if (id == 4) {
    imageFile = "https://gateway.pinata.cloud/ipfs/QmYCeUwPpUnWXRjVGe72oXv6vkd3pqetonMzPLmNqfi673";
  }
  else if (id == 5) {
    imageFile = "https://gateway.pinata.cloud/ipfs/Qmf3gaLhAqN31bgk6JtQXJn6td3J92gwWk7CGztunyruTi";
  }
  else if (id == 6) {
    imageFile = "https://gateway.pinata.cloud/ipfs/Qme3jkqnH2kwi32qFSJj5Jnqxabt9i2SJynAoghcB1yjAr";
  }
  else if (id == 7) {
    imageFile = "https://gateway.pinata.cloud/ipfs/QmRMJj6p1pJFcWngCqWiUt4QyrRNxYq2GH9FUuRbEjLwWk";
  }
  else if (id == 8) {
    imageFile = "https://gateway.pinata.cloud/ipfs/QmaFocsSTS53m2kPDjLYDr3JxYQGrekqHtPZjXtAKx4erv";
  }
  else if (id == 9) {
    imageFile = "https://gateway.pinata.cloud/ipfs/QmYWuhdac9HuAodZXUGDz7ySCb9Uq4T96iA5DKxF4j6GFe";
  }
  else if (id == 10) {
    imageFile = "https://gateway.pinata.cloud/ipfs/QmTxUyN3QsUmTU2B7F3KwoFPDNLdp8HcqKPt6Ps5CP3X6u";
  }
  else if (id == 13) {
    imageFile = "https://gateway.pinata.cloud/ipfs/QmZnd1dPwwZ5suf47c5N14Lz7DCkNHFhiQ5D3JhNDozNRY";
  }
  else if (id == 14) {
    imageFile = "https://gateway.pinata.cloud/ipfs/Qmd64Cmb9qW87FBKfCKHZTo21w5oWY5S4Tqxavk7QSpfqL";
  }
  else {
    imageFile = fileIPFSURL;
  }

  console.log(animationFile);

  context.res = {
    body: {
      image: imageFile, description: 'Machi X is a collective of artists and patrons, curating and trading digital art. The Machi X DAO is a member-directed organization where members pool resources, create proposals to improve Machi X, and approve governance changes for the Machi X ecosystem. \n\nArtist Note: ' + artistNoteByID,
      animation_url: animationFile,
      external_url: fileIPFSURL, 
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
          trait_type: 'tag',
          value: mediaTagByID
        }, 
        {
          trait_type: 'copyright',
          value: mediaCopyrightByID
        }, 
        {
          trait_type: 'creation date',
          value: creationDate
        },  
        {
          trait_type: 'file type',
          value: fileTypeByID
        },                             
      ],
    }
  };
}
