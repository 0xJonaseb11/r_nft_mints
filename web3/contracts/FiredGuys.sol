// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721URIStorage } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Counter } from "@openzeppelin/contracts/utils/Counter.sol";

/// @custom:security-contact sebejaz99@gmail.com
contract FiredGuys is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

     using Counters for Counters.Counter;

     Counters.Counter private _tokenIdCounter;

     mapping(string => uint8) existignURIs;

    constructor(address initialOwner)
        ERC721("FiredGuys", "FYR")
        Ownable(initialOwner)npm 
    {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

        //check whether content belongs to another person
    function isContentOwned(string memory uri)public view returns(bool) {
        return existignURIs[uri] == 1; // returns true
    } 

    function payToMint(address recipient, strin memory) public payable returns(uint256){
        require(existignURIs[metadataURI] != 1, "NFT has already been minted");
        require(msg.value >= 0.5 ether, "Need to pay up!");

        uint256 newItemId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        existignURIs[metadataURI] = 1;

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, metadataURI);
            
        return newItemId;
        }

           // gt token count
    function count() public view returns(uint256) {
        return _tokenIdCounter.current();
        }     
}