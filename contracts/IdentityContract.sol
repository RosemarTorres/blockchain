// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentityContract {
    struct Identity {
        string name;
        uint256 age;
    }

    mapping(address => Identity) public identities;
    
    function registerIdentity(string memory _name, uint256 _age) public {
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(_age > 0, "Age must be greater than zero");

        Identity storage identity = identities[msg.sender];
        identity.name = _name;
        identity.age = _age;
    }

    function authenticateIdentity() public view returns (bool) {
        Identity storage identity = identities[msg.sender];
        return bytes(identity.name).length > 0 && identity.age > 0;
    }
}