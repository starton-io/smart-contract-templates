// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract StartonERC721 is ERC721Enumerable, ERC721URIStorage, Pausable, AccessControl, ERC721Burnable {
    using Counters for Counters.Counter;

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");
    Counters.Counter private _tokenIdCounter;
    
    string private _uri;
    string private _contractUriSuffix;
    string private _baseContractUri;

    bool private _isMintAllowed;

    constructor(string memory name, string memory symbol, string memory baseUri, string memory contractUriSuffix, address ownerOrMultiSigContract) ERC721(name, symbol) {
        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);
        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);
        _setupRole(MINTER_ROLE, ownerOrMultiSigContract);
        _setupRole(LOCKER_ROLE, ownerOrMultiSigContract);
        _uri = baseUri;
        _contractUriSuffix = contractUriSuffix;
        _baseContractUri = "https://ipfs.io/ipfs/";
        _isMintAllowed = true;
    }

    function lockMint() public {
        require(hasRole(LOCKER_ROLE, msg.sender));
        _isMintAllowed = false;
    }

    function contractURI() public view returns (string memory) {
        return bytes(_baseContractUri).length > 0
            ? string(abi.encodePacked(_baseContractUri, _contractUriSuffix))
            : '';
    }

    function setBaseContractURI(string memory newBaseContractUri) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));
        
        _baseContractUri = newBaseContractUri;
    }

    function _baseURI() internal view override returns (string memory) {
        return _uri;
    }

    function safeMint(address to, string memory metadataURI) public {
        require(hasRole(MINTER_ROLE, msg.sender));
        require(_isMintAllowed);

        _safeMint(to, _tokenIdCounter.current());
        _setTokenURI(_tokenIdCounter.current(), metadataURI);
        _tokenIdCounter.increment();
    }

    function pause() public {
        require(hasRole(PAUSER_ROLE, msg.sender));
        _pause();
    }

    function unpause() public {
        require(hasRole(PAUSER_ROLE, msg.sender));
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

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
        override(ERC721, ERC721Enumerable, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
