import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0x99d41d631bf53a07bffdbb4d8e4482baf810b02528c83d60003e9b572d2080ad",
    "language": "ink! 4.3.0",
    "compiler": "rustc 1.72.0",
    "build_info": {
      "build_mode": "Debug",
      "cargo_contract_version": "3.2.0",
      "rust_toolchain": "stable-x86_64-unknown-linux-gnu",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "vrf_consumer",
    "version": "0.0.1",
    "authors": [
      "GuiGou"
    ]
  },
  "spec": {
    "constructors": [
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "new",
        "payable": false,
        "returnType": {
          "displayName": [
            "ink_primitives",
            "ConstructorResult"
          ],
          "type": 9
        },
        "selector": "0x9bae9d5e"
      }
    ],
    "docs": [],
    "environment": {
      "accountId": {
        "displayName": [
          "AccountId"
        ],
        "type": 0
      },
      "balance": {
        "displayName": [
          "Balance"
        ],
        "type": 6
      },
      "blockNumber": {
        "displayName": [
          "BlockNumber"
        ],
        "type": 3
      },
      "chainExtension": {
        "displayName": [
          "ChainExtension"
        ],
        "type": 54
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 7
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 8
      }
    },
    "events": [
      {
        "args": [
          {
            "docs": [
              " id of the requestor"
            ],
            "indexed": false,
            "label": "requestor_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "docs": [
              " nonce of the requestor"
            ],
            "indexed": false,
            "label": "requestor_nonce",
            "type": {
              "displayName": [
                "u128"
              ],
              "type": 6
            }
          },
          {
            "docs": [
              " minimum value requested"
            ],
            "indexed": false,
            "label": "min",
            "type": {
              "displayName": [
                "u128"
              ],
              "type": 6
            }
          },
          {
            "docs": [
              " maximum value requested"
            ],
            "indexed": false,
            "label": "max",
            "type": {
              "displayName": [
                "u128"
              ],
              "type": 6
            }
          },
          {
            "docs": [
              " when the value has been requested"
            ],
            "indexed": false,
            "label": "timestamp",
            "type": {
              "displayName": [
                "u64"
              ],
              "type": 8
            }
          }
        ],
        "docs": [
          "Events emitted when a random value is requested"
        ],
        "label": "RandomValueRequested"
      },
      {
        "args": [
          {
            "docs": [
              " id of the requestor"
            ],
            "indexed": false,
            "label": "requestor_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "docs": [
              " nonce of the requestor"
            ],
            "indexed": false,
            "label": "requestor_nonce",
            "type": {
              "displayName": [
                "u128"
              ],
              "type": 6
            }
          },
          {
            "docs": [
              " random_value"
            ],
            "indexed": false,
            "label": "random_value",
            "type": {
              "displayName": [
                "u128"
              ],
              "type": 6
            }
          },
          {
            "docs": [
              " when the value has been received"
            ],
            "indexed": false,
            "label": "timestamp",
            "type": {
              "displayName": [
                "u64"
              ],
              "type": 8
            }
          }
        ],
        "docs": [
          "Events emitted when a random value is received"
        ],
        "label": "RandomValueReceived"
      },
      {
        "args": [
          {
            "docs": [
              " id of the requestor"
            ],
            "indexed": false,
            "label": "requestor_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "docs": [
              " nonce of the requestor"
            ],
            "indexed": false,
            "label": "requestor_nonce",
            "type": {
              "displayName": [
                "u128"
              ],
              "type": 6
            }
          },
          {
            "docs": [
              " error number"
            ],
            "indexed": false,
            "label": "err_no",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 5
            }
          },
          {
            "docs": [
              " when the error has been received"
            ],
            "indexed": false,
            "label": "timestamp",
            "type": {
              "displayName": [
                "u64"
              ],
              "type": 8
            }
          }
        ],
        "docs": [
          "Events emitted when an error is received"
        ],
        "label": "ErrorReceived"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": false,
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 3
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "data",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 5
            }
          }
        ],
        "docs": [
          "Events emitted when a message is pushed in the queue"
        ],
        "label": "MessageQueued"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": false,
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 3
            }
          }
        ],
        "docs": [
          "Events emitted when a message is proceed"
        ],
        "label": "MessageProcessedTo"
      },
      {
        "args": [],
        "docs": [
          "Events emitted when a meta transaction is decoded"
        ],
        "label": "MetaTxDecoded"
      }
    ],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 10
    },
    "messages": [
      {
        "args": [
          {
            "label": "requestor",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "get_requestor_nonce",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 11
        },
        "selector": "0xaa7331f5"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "get_last_value",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 17
        },
        "selector": "0x3da74faa"
      },
      {
        "args": [
          {
            "label": "min",
            "type": {
              "displayName": [
                "u128"
              ],
              "type": 6
            }
          },
          {
            "label": "max",
            "type": {
              "displayName": [
                "u128"
              ],
              "type": 6
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "request_random_value",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 21
        },
        "selector": "0x8467986a"
      },
      {
        "args": [
          {
            "label": "account_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "register_attestor",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 23
        },
        "selector": "0x8f3a95f4"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "get_attestor_role",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 25
        },
        "selector": "0x760a2625"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "get_manager_role",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 25
        },
        "selector": "0x91aa3500"
      },
      {
        "args": [
          {
            "label": "conditions",
            "type": {
              "displayName": [
                "rollupanchor_external",
                "RollupCondEqInput1"
              ],
              "type": 26
            }
          },
          {
            "label": "updates",
            "type": {
              "displayName": [
                "rollupanchor_external",
                "RollupCondEqInput2"
              ],
              "type": 26
            }
          },
          {
            "label": "actions",
            "type": {
              "displayName": [
                "rollupanchor_external",
                "RollupCondEqInput3"
              ],
              "type": 29
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "RollupAnchor::rollup_cond_eq",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 31
        },
        "selector": "0x95233d74"
      },
      {
        "args": [
          {
            "label": "key",
            "type": {
              "displayName": [
                "rollupanchor_external",
                "GetValueInput1"
              ],
              "type": 5
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "RollupAnchor::get_value",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 33
        },
        "selector": "0xdfec736d"
      },
      {
        "args": [
          {
            "label": "from",
            "type": {
              "displayName": [
                "metatransaction_external",
                "PrepareInput1"
              ],
              "type": 0
            }
          },
          {
            "label": "data",
            "type": {
              "displayName": [
                "metatransaction_external",
                "PrepareInput2"
              ],
              "type": 5
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "MetaTransaction::prepare",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 34
        },
        "selector": "0x3ecc267e"
      },
      {
        "args": [
          {
            "label": "request",
            "type": {
              "displayName": [
                "metatransaction_external",
                "MetaTxRollupCondEqInput1"
              ],
              "type": 37
            }
          },
          {
            "label": "signature",
            "type": {
              "displayName": [
                "metatransaction_external",
                "MetaTxRollupCondEqInput2"
              ],
              "type": 38
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "MetaTransaction::meta_tx_rollup_cond_eq",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 39
        },
        "selector": "0x8eb77024"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "Ownable::renounce_ownership",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 41
        },
        "selector": "0x5e228753"
      },
      {
        "args": [
          {
            "label": "new_owner",
            "type": {
              "displayName": [
                "ownable_external",
                "TransferOwnershipInput1"
              ],
              "type": 44
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "Ownable::transfer_ownership",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 41
        },
        "selector": "0x11f43efd"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "Ownable::owner",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 45
        },
        "selector": "0x4fa43c8c"
      },
      {
        "args": [
          {
            "label": "role",
            "type": {
              "displayName": [
                "accesscontrol_external",
                "HasRoleInput1"
              ],
              "type": 3
            }
          },
          {
            "label": "address",
            "type": {
              "displayName": [
                "accesscontrol_external",
                "HasRoleInput2"
              ],
              "type": 44
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "AccessControl::has_role",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 46
        },
        "selector": "0xc1d9ac18"
      },
      {
        "args": [
          {
            "label": "role",
            "type": {
              "displayName": [
                "accesscontrol_external",
                "RevokeRoleInput1"
              ],
              "type": 3
            }
          },
          {
            "label": "account",
            "type": {
              "displayName": [
                "accesscontrol_external",
                "RevokeRoleInput2"
              ],
              "type": 44
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "AccessControl::revoke_role",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 48
        },
        "selector": "0x6e4f0991"
      },
      {
        "args": [
          {
            "label": "role",
            "type": {
              "displayName": [
                "accesscontrol_external",
                "GetRoleAdminInput1"
              ],
              "type": 3
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "AccessControl::get_role_admin",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 25
        },
        "selector": "0x83da3bb2"
      },
      {
        "args": [
          {
            "label": "role",
            "type": {
              "displayName": [
                "accesscontrol_external",
                "RenounceRoleInput1"
              ],
              "type": 3
            }
          },
          {
            "label": "account",
            "type": {
              "displayName": [
                "accesscontrol_external",
                "RenounceRoleInput2"
              ],
              "type": 44
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "AccessControl::renounce_role",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 48
        },
        "selector": "0xeaf1248a"
      },
      {
        "args": [
          {
            "label": "role",
            "type": {
              "displayName": [
                "accesscontrol_external",
                "GrantRoleInput1"
              ],
              "type": 3
            }
          },
          {
            "label": "account",
            "type": {
              "displayName": [
                "accesscontrol_external",
                "GrantRoleInput2"
              ],
              "type": 44
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "AccessControl::grant_role",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 48
        },
        "selector": "0x4ac062fd"
      },
      {
        "args": [
          {
            "label": "new_code_hash",
            "type": {
              "displayName": [
                "upgradeable_external",
                "SetCodeHashInput1"
              ],
              "type": 7
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "Upgradeable::set_code_hash",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 50
        },
        "selector": "0x1700ae80"
      }
    ]
  },
  "storage": {
    "root": {
      "layout": {
        "struct": {
          "fields": [
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "enum": {
                              "dispatchKey": "0x6f713913",
                              "name": "Option",
                              "variants": {
                                "0": {
                                  "fields": [],
                                  "name": "None"
                                },
                                "1": {
                                  "fields": [
                                    {
                                      "layout": {
                                        "leaf": {
                                          "key": "0x6f713913",
                                          "ty": 0
                                        }
                                      },
                                      "name": "0"
                                    }
                                  ],
                                  "name": "Some"
                                }
                              }
                            }
                          },
                          "root_key": "0x6f713913"
                        }
                      },
                      "name": "owner"
                    }
                  ],
                  "name": "Data"
                }
              },
              "name": "ownable"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0x1f2cf4ac",
                              "ty": 3
                            }
                          },
                          "root_key": "0x1f2cf4ac"
                        }
                      },
                      "name": "admin_roles"
                    },
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0x8150f558",
                              "ty": 4
                            }
                          },
                          "root_key": "0x8150f558"
                        }
                      },
                      "name": "members"
                    }
                  ],
                  "name": "Data"
                }
              },
              "name": "access"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0xdd3d1ad8",
                              "ty": 5
                            }
                          },
                          "root_key": "0xdd3d1ad8"
                        }
                      },
                      "name": "kv_store"
                    }
                  ],
                  "name": "Data"
                }
              },
              "name": "rollup_anchor"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0x9ec46f1a",
                              "ty": 6
                            }
                          },
                          "root_key": "0x9ec46f1a"
                        }
                      },
                      "name": "nonces"
                    }
                  ],
                  "name": "Data"
                }
              },
              "name": "meta_transaction"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x57b70a49",
                      "ty": 6
                    }
                  },
                  "root_key": "0x57b70a49"
                }
              },
              "name": "requestor_nonces"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0xed665d65",
                      "ty": 7
                    }
                  },
                  "root_key": "0xed665d65"
                }
              },
              "name": "hash_requests"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "struct": {
                      "fields": [
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xc0da9a99",
                              "ty": 8
                            }
                          },
                          "name": "0"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xc0da9a99",
                              "ty": 6
                            }
                          },
                          "name": "1"
                        }
                      ],
                      "name": "(A, B)"
                    }
                  },
                  "root_key": "0xc0da9a99"
                }
              },
              "name": "last_values"
            }
          ],
          "name": "VrfClient"
        }
      },
      "root_key": "0x00000000"
    }
  },
  "types": [
    {
      "id": 0,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 1,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "AccountId"
        ]
      }
    },
    {
      "id": 1,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 2
          }
        }
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "primitive": "u8"
        }
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "primitive": "u32"
        }
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 5,
      "type": {
        "def": {
          "sequence": {
            "type": 2
          }
        }
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 1,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "Hash"
        ]
      }
    },
    {
      "id": 8,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 9,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 4
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 4
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 10,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 1,
                "name": "CouldNotReadInput"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "LangError"
        ]
      }
    },
    {
      "id": 11,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 12
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 12,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 6
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 13
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 6
          },
          {
            "name": "E",
            "type": 13
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 13,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 14,
                    "typeName": "AccessControlError"
                  }
                ],
                "index": 0,
                "name": "AccessControlError"
              },
              {
                "fields": [
                  {
                    "type": 15,
                    "typeName": "RollupAnchorError"
                  }
                ],
                "index": 1,
                "name": "RollupAnchorError"
              },
              {
                "fields": [
                  {
                    "type": 16,
                    "typeName": "MetaTransactionError"
                  }
                ],
                "index": 2,
                "name": "MetaTransactionError"
              },
              {
                "index": 3,
                "name": "FailedToDecode"
              },
              {
                "index": 4,
                "name": "IncorrectMinMaxValues"
              }
            ]
          }
        },
        "path": [
          "vrf_consumer",
          "vrf_consumer",
          "ContractError"
        ]
      }
    },
    {
      "id": 14,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "InvalidCaller"
              },
              {
                "index": 1,
                "name": "MissingRole"
              },
              {
                "index": 2,
                "name": "RoleRedundant"
              }
            ]
          }
        },
        "path": [
          "openbrush_contracts",
          "traits",
          "errors",
          "access_control",
          "AccessControlError"
        ]
      }
    },
    {
      "id": 15,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "InvalidPopTarget"
              },
              {
                "index": 1,
                "name": "ConditionNotMet"
              },
              {
                "index": 2,
                "name": "FailedToDecode"
              },
              {
                "index": 3,
                "name": "UnsupportedAction"
              },
              {
                "fields": [
                  {
                    "type": 14,
                    "typeName": "AccessControlError"
                  }
                ],
                "index": 4,
                "name": "AccessControlError"
              }
            ]
          }
        },
        "path": [
          "phat_rollup_anchor_ink",
          "traits",
          "rollup_anchor",
          "RollupAnchorError"
        ]
      }
    },
    {
      "id": 16,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "InvalidDestination"
              },
              {
                "index": 1,
                "name": "NonceTooLow"
              },
              {
                "index": 2,
                "name": "IncorrectSignature"
              },
              {
                "index": 3,
                "name": "PublicKeyNotMatch"
              },
              {
                "index": 4,
                "name": "PublicKeyIncorrect"
              },
              {
                "fields": [
                  {
                    "type": 15,
                    "typeName": "RollupAnchorError"
                  }
                ],
                "index": 5,
                "name": "RollupAnchorError"
              }
            ]
          }
        },
        "path": [
          "phat_rollup_anchor_ink",
          "traits",
          "meta_transaction",
          "MetaTransactionError"
        ]
      }
    },
    {
      "id": 17,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 18
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 18
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 18,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 19
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 13
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 19
          },
          {
            "name": "E",
            "type": 13
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 19,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 20
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 20
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 20,
      "type": {
        "def": {
          "tuple": [
            8,
            6
          ]
        }
      }
    },
    {
      "id": 21,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 22
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 22
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 22,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 3
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 13
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 3
          },
          {
            "name": "E",
            "type": 13
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 23,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 24
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 24
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 24,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 4
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 13
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 4
          },
          {
            "name": "E",
            "type": 13
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 25,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 3
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 3
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 26,
      "type": {
        "def": {
          "sequence": {
            "type": 27
          }
        }
      }
    },
    {
      "id": 27,
      "type": {
        "def": {
          "tuple": [
            5,
            28
          ]
        }
      }
    },
    {
      "id": 28,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 5
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 5
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 29,
      "type": {
        "def": {
          "sequence": {
            "type": 30
          }
        }
      }
    },
    {
      "id": 30,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 5,
                    "typeName": "Vec<u8>"
                  }
                ],
                "index": 0,
                "name": "Reply"
              },
              {
                "fields": [
                  {
                    "type": 3,
                    "typeName": "QueueIndex"
                  }
                ],
                "index": 1,
                "name": "SetQueueHead"
              },
              {
                "fields": [
                  {
                    "type": 0,
                    "typeName": "AccountId"
                  }
                ],
                "index": 2,
                "name": "GrantAttestor"
              },
              {
                "fields": [
                  {
                    "type": 0,
                    "typeName": "AccountId"
                  }
                ],
                "index": 3,
                "name": "RevokeAttestor"
              }
            ]
          }
        },
        "path": [
          "phat_rollup_anchor_ink",
          "traits",
          "rollup_anchor",
          "HandleActionInput"
        ]
      }
    },
    {
      "id": 31,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 32
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 32
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 32,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 4
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 15
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 4
          },
          {
            "name": "E",
            "type": 15
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 33,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 28
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 28
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 34,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 35
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 35
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 35,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 36
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 16
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 36
          },
          {
            "name": "E",
            "type": 16
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 36,
      "type": {
        "def": {
          "tuple": [
            37,
            7
          ]
        }
      }
    },
    {
      "id": 37,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "from",
                "type": 0,
                "typeName": "AccountId"
              },
              {
                "name": "to",
                "type": 0,
                "typeName": "AccountId"
              },
              {
                "name": "nonce",
                "type": 6,
                "typeName": "Nonce"
              },
              {
                "name": "data",
                "type": 5,
                "typeName": "Vec<u8>"
              }
            ]
          }
        },
        "path": [
          "phat_rollup_anchor_ink",
          "traits",
          "meta_transaction",
          "ForwardRequest"
        ]
      }
    },
    {
      "id": 38,
      "type": {
        "def": {
          "array": {
            "len": 65,
            "type": 2
          }
        }
      }
    },
    {
      "id": 39,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 40
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 40
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 40,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 4
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 16
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 4
          },
          {
            "name": "E",
            "type": 16
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 41,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 42
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 42
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 42,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 4
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 43
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 4
          },
          {
            "name": "E",
            "type": 43
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 43,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "CallerIsNotOwner"
              },
              {
                "index": 1,
                "name": "NewOwnerIsNotSet"
              }
            ]
          }
        },
        "path": [
          "openbrush_contracts",
          "traits",
          "errors",
          "ownable",
          "OwnableError"
        ]
      }
    },
    {
      "id": 44,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 0
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 0
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 45,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 44
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 44
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 46,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 47
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 47
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 47,
      "type": {
        "def": {
          "primitive": "bool"
        }
      }
    },
    {
      "id": 48,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 49
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 49
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 49,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 4
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 14
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 4
          },
          {
            "name": "E",
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 50,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 51
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 51
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 51,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 4
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 52
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 4
          },
          {
            "name": "E",
            "type": 52
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 52,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 53,
                    "typeName": "String"
                  }
                ],
                "index": 0,
                "name": "Custom"
              },
              {
                "index": 1,
                "name": "SetCodeHashFailed"
              },
              {
                "fields": [
                  {
                    "type": 43,
                    "typeName": "OwnableError"
                  }
                ],
                "index": 2,
                "name": "OwnableError"
              },
              {
                "fields": [
                  {
                    "type": 14,
                    "typeName": "AccessControlError"
                  }
                ],
                "index": 3,
                "name": "AccessControlError"
              }
            ]
          }
        },
        "path": [
          "openbrush_contracts",
          "traits",
          "errors",
          "upgradeable",
          "UpgradeableError"
        ]
      }
    },
    {
      "id": 53,
      "type": {
        "def": {
          "primitive": "str"
        }
      }
    },
    {
      "id": 54,
      "type": {
        "def": {
          "variant": {}
        },
        "path": [
          "ink_env",
          "types",
          "NoChainExtension"
        ]
      }
    }
  ],
  "version": "4"
}

const _abi = new Abi(metadata)

export function decodeEvent(hex: string): Event {
    return _abi.decodeEvent(hex)
}

export function decodeMessage(hex: string): Message {
    return _abi.decodeMessage(hex)
}

export function decodeConstructor(hex: string): Constructor {
    return _abi.decodeConstructor(hex)
}

export interface Chain {
    client: {
        call: <T=any>(method: string, params?: unknown[]) => Promise<T>
    }
}

export interface ChainContext {
    _chain: Chain
}

export class Contract {
    constructor(private ctx: ChainContext, private address: string, private blockHash?: string) { }

    get_attestor_role(): Promise<Result<number, LangError>> {
        return this.stateCall('0x760a2625', [])
    }

    get_manager_role(): Promise<Result<number, LangError>> {
        return this.stateCall('0x91aa3500', [])
    }

    RollupAnchor_get_value(key: Uint8Array): Promise<Result<(Uint8Array | undefined), LangError>> {
        return this.stateCall('0xdfec736d', [key])
    }

    MetaTransaction_prepare(from: Uint8Array, data: Uint8Array): Promise<Result<Result<[ForwardRequest, SetCodeHashInput1], MetaTransactionError>, LangError>> {
        return this.stateCall('0x3ecc267e', [from, data])
    }

    Ownable_owner(): Promise<Result<(Uint8Array | undefined), LangError>> {
        return this.stateCall('0x4fa43c8c', [])
    }

    AccessControl_has_role(role: number, address: (Uint8Array | undefined)): Promise<Result<boolean, LangError>> {
        return this.stateCall('0xc1d9ac18', [role, address])
    }

    AccessControl_get_role_admin(role: number): Promise<Result<number, LangError>> {
        return this.stateCall('0x83da3bb2', [role])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.client.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Event = Event_RandomValueRequested | Event_RandomValueReceived | Event_ErrorReceived | Event_MessageQueued | Event_MessageProcessedTo | Event_MetaTxDecoded

export interface Event_RandomValueRequested {
    __kind: 'RandomValueRequested'
    /**
     *  id of the requestor
     */
    requestorId: Uint8Array
    /**
     *  nonce of the requestor
     */
    requestorNonce: u128
    /**
     *  minimum value requested
     */
    min: u128
    /**
     *  maximum value requested
     */
    max: u128
    /**
     *  when the value has been requested
     */
    timestamp: u64
}

export interface Event_RandomValueReceived {
    __kind: 'RandomValueReceived'
    /**
     *  id of the requestor
     */
    requestorId: Uint8Array
    /**
     *  nonce of the requestor
     */
    requestorNonce: u128
    /**
     *  random_value
     */
    randomValue: u128
    /**
     *  when the value has been received
     */
    timestamp: u64
}

export interface Event_ErrorReceived {
    __kind: 'ErrorReceived'
    /**
     *  id of the requestor
     */
    requestorId: Uint8Array
    /**
     *  nonce of the requestor
     */
    requestorNonce: u128
    /**
     *  error number
     */
    errNo: Uint8Array
    /**
     *  when the error has been received
     */
    timestamp: u64
}

export interface Event_MessageQueued {
    __kind: 'MessageQueued'
    id: number
    data: Uint8Array
}

export interface Event_MessageProcessedTo {
    __kind: 'MessageProcessedTo'
    id: number
}

export interface Event_MetaTxDecoded {
    __kind: 'MetaTxDecoded'
}

export type Message = Message_get_requestor_nonce | Message_get_last_value | Message_request_random_value | Message_register_attestor | Message_get_attestor_role | Message_get_manager_role | Message_RollupAnchor_rollup_cond_eq | Message_RollupAnchor_get_value | Message_MetaTransaction_prepare | Message_MetaTransaction_meta_tx_rollup_cond_eq | Message_Ownable_renounce_ownership | Message_Ownable_transfer_ownership | Message_Ownable_owner | Message_AccessControl_has_role | Message_AccessControl_revoke_role | Message_AccessControl_get_role_admin | Message_AccessControl_renounce_role | Message_AccessControl_grant_role | Message_Upgradeable_set_code_hash

export interface Message_get_requestor_nonce {
    __kind: 'get_requestor_nonce'
    requestor: Uint8Array
}

export interface Message_get_last_value {
    __kind: 'get_last_value'
}

export interface Message_request_random_value {
    __kind: 'request_random_value'
    min: u128
    max: u128
}

export interface Message_register_attestor {
    __kind: 'register_attestor'
    accountId: Uint8Array
}

export interface Message_get_attestor_role {
    __kind: 'get_attestor_role'
}

export interface Message_get_manager_role {
    __kind: 'get_manager_role'
}

export interface Message_RollupAnchor_rollup_cond_eq {
    __kind: 'RollupAnchor_rollup_cond_eq'
    conditions: [Uint8Array, (Uint8Array | undefined)][]
    updates: [Uint8Array, (Uint8Array | undefined)][]
    actions: RollupCondEqInput3
}

export interface Message_RollupAnchor_get_value {
    __kind: 'RollupAnchor_get_value'
    key: Uint8Array
}

export interface Message_MetaTransaction_prepare {
    __kind: 'MetaTransaction_prepare'
    from: Uint8Array
    data: Uint8Array
}

export interface Message_MetaTransaction_meta_tx_rollup_cond_eq {
    __kind: 'MetaTransaction_meta_tx_rollup_cond_eq'
    request: ForwardRequest
    signature: MetaTxRollupCondEqInput2
}

export interface Message_Ownable_renounce_ownership {
    __kind: 'Ownable_renounce_ownership'
}

export interface Message_Ownable_transfer_ownership {
    __kind: 'Ownable_transfer_ownership'
    newOwner: (Uint8Array | undefined)
}

export interface Message_Ownable_owner {
    __kind: 'Ownable_owner'
}

export interface Message_AccessControl_has_role {
    __kind: 'AccessControl_has_role'
    role: number
    address: (Uint8Array | undefined)
}

export interface Message_AccessControl_revoke_role {
    __kind: 'AccessControl_revoke_role'
    role: number
    account: (Uint8Array | undefined)
}

export interface Message_AccessControl_get_role_admin {
    __kind: 'AccessControl_get_role_admin'
    role: number
}

export interface Message_AccessControl_renounce_role {
    __kind: 'AccessControl_renounce_role'
    role: number
    account: (Uint8Array | undefined)
}

export interface Message_AccessControl_grant_role {
    __kind: 'AccessControl_grant_role'
    role: number
    account: (Uint8Array | undefined)
}

export interface Message_Upgradeable_set_code_hash {
    __kind: 'Upgradeable_set_code_hash'
    newCodeHash: SetCodeHashInput1
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export interface ForwardRequest {
    from: Uint8Array
    to: Uint8Array
    nonce: u128
    data: Uint8Array
}

export type SetCodeHashInput1 = Uint8Array

export type MetaTransactionError = MetaTransactionError_InvalidDestination | MetaTransactionError_NonceTooLow | MetaTransactionError_IncorrectSignature | MetaTransactionError_PublicKeyNotMatch | MetaTransactionError_PublicKeyIncorrect | MetaTransactionError_RollupAnchorError

export interface MetaTransactionError_InvalidDestination {
    __kind: 'InvalidDestination'
}

export interface MetaTransactionError_NonceTooLow {
    __kind: 'NonceTooLow'
}

export interface MetaTransactionError_IncorrectSignature {
    __kind: 'IncorrectSignature'
}

export interface MetaTransactionError_PublicKeyNotMatch {
    __kind: 'PublicKeyNotMatch'
}

export interface MetaTransactionError_PublicKeyIncorrect {
    __kind: 'PublicKeyIncorrect'
}

export interface MetaTransactionError_RollupAnchorError {
    __kind: 'RollupAnchorError'
    value: RollupAnchorError
}

export type u128 = bigint

export type u64 = bigint

export type HandleActionInput = HandleActionInput_Reply | HandleActionInput_SetQueueHead | HandleActionInput_GrantAttestor | HandleActionInput_RevokeAttestor

export interface HandleActionInput_Reply {
    __kind: 'Reply'
    value: Uint8Array
}

export interface HandleActionInput_SetQueueHead {
    __kind: 'SetQueueHead'
    value: number
}

export interface HandleActionInput_GrantAttestor {
    __kind: 'GrantAttestor'
    value: Uint8Array
}

export interface HandleActionInput_RevokeAttestor {
    __kind: 'RevokeAttestor'
    value: Uint8Array
}

export type RollupCondEqInput3 = HandleActionInput[]

export type MetaTxRollupCondEqInput2 = Uint8Array

export type RollupAnchorError = RollupAnchorError_InvalidPopTarget | RollupAnchorError_ConditionNotMet | RollupAnchorError_FailedToDecode | RollupAnchorError_UnsupportedAction | RollupAnchorError_AccessControlError

export interface RollupAnchorError_InvalidPopTarget {
    __kind: 'InvalidPopTarget'
}

export interface RollupAnchorError_ConditionNotMet {
    __kind: 'ConditionNotMet'
}

export interface RollupAnchorError_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface RollupAnchorError_UnsupportedAction {
    __kind: 'UnsupportedAction'
}

export interface RollupAnchorError_AccessControlError {
    __kind: 'AccessControlError'
    value: AccessControlError
}

export type AccessControlError = AccessControlError_InvalidCaller | AccessControlError_MissingRole | AccessControlError_RoleRedundant

export interface AccessControlError_InvalidCaller {
    __kind: 'InvalidCaller'
}

export interface AccessControlError_MissingRole {
    __kind: 'MissingRole'
}

export interface AccessControlError_RoleRedundant {
    __kind: 'RoleRedundant'
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
