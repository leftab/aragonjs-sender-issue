pragma solidity ^0.4.4;

import "@aragon/os/contracts/apps/AragonApp.sol";

contract CounterApp is AragonApp {

    function getSender() external returns (address sender) {
        return msg.sender;
    }


}
