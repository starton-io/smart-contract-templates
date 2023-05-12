// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract StartonERC1155 is AccessControl, Pausable, ERC1155Burnable {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");
    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");


    string private _contractUriSuffix;
    string private _baseContractUri;

    bool private _isMintAllowed;

    constructor(string memory name, string memory baseUri, string memory contractUriSuffix, address ownerOrMultiSigContract) ERC1155(name) {
        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);
        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);
        _setupRole(MINTER_ROLE, ownerOrMultiSigContract);
        _setupRole(URI_SETTER_ROLE, ownerOrMultiSigContract);
        _setupRole(LOCKER_ROLE, ownerOrMultiSigContract);

        _setURI(baseUri);
        _contractUriSuffix = contractUriSuffix;
        _baseContractUri = "https://ipfs.io/ipfs/";
        _isMintAllowed = true;
    }

    function setURI(string memory newuri) public {
        require(hasRole(URI_SETTER_ROLE, msg.sender));
        _setURI(newuri);
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

    function pause() public {
        require(hasRole(PAUSER_ROLE, msg.sender));
        _pause();
    }

    function unpause() public {
        require(hasRole(PAUSER_ROLE, msg.sender));
        _unpause();
    }

    function lockMint() public {
        require(hasRole(LOCKER_ROLE, msg.sender));
        _isMintAllowed = false;
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
    {
        require(hasRole(MINTER_ROLE, msg.sender));
        require(_isMintAllowed);

        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
    {
        require(hasRole(MINTER_ROLE, msg.sender));
        require(_isMintAllowed);

        _mintBatch(to, ids, amounts, data);
    }

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
