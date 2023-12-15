// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { ERC721Upgradeable } from "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import { ERC721URIStorageUpgradeable } from "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import { OwnableUpgradeable } from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import { Initializable } from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import { UUPSUpgradeable } from "openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.aol";


contract FiredGuys is Initializable, ERC721Upgradeable, ERC721URIStorageUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    

}