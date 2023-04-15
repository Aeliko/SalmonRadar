function returnWaveTimeline(hazardLevel, waveNumber) {
    let waveTimelines = [
        {
            60: [
                {
                    Boss: 'Big Shot',
                    Timing: 100,
                    Spawn: 'Right Docks'
                },
                {
                    Boss: 'Scrapper',
                    Timing: 82,
                    Spawn: 'Left Docks'
                },
                {
                    Boss: 'Maws',
                    Timing: 64,
                    Spawn: 'Right Docks'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 52,
                    Spawn: 'Right Docks'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 46,
                    Spawn: 'Left Docks'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 45,
                    Spawn: 'Left Docks'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 28,
                    Spawn: 'Docks'
                }
            ]
        },
        {
            60: [
                {
                    Boss: 'Griller',
                    Timing: 100,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Griller',
                    Timing: 82,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Griller',
                    Timing: 64,
                    Spawn: 'Beach'
                },
                {
                    Boss: 'Griller',
                    Timing: 46,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Griller',
                    Timing: 28,
                    Spawn: 'Beach'
                }
            ],
            90: [
                {
                    Boss: 'Griller',
                    Timing: 100,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Griller',
                    Timing: 82,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Griller',
                    Timing: 64,
                    Spawn: 'Beach'
                },
                {
                    Boss: 'Griller',
                    Timing: 46,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Griller',
                    Timing: 28,
                    Spawn: 'Beach'
                }
            ],
            120: [
                {
                    Boss: 'Griller',
                    Timing: 100,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Griller',
                    Timing: 82,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Griller',
                    Timing: 64,
                    Spawn: 'Beach'
                },
                {
                    Boss: 'Griller',
                    Timing: 46,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Griller',
                    Timing: 28,
                    Spawn: 'Beach'
                }
            ]
        },
        {
            60: [
                {
                    Boss: 'Flyfish',
                    Timing: 100,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 97,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Flipper-Flopper',
                    Timing: 82,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 76,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 64,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 59,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 54,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Maws',
                    Timing: 46,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 37,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Maws',
                    Timing: 34,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 28,
                    Spawn: 'Left of Basket'
                }
            ],
            90: [
                {
                    Boss: 'Flyfish',
                    Timing: 100,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 97,
                    Spawn: 'Perch'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 94,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 82,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 80,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 76,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 64,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 59,
                    Spawn: 'Left of Basket'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 54,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 46,
                    Spawn: 'Right of Basket'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 37,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 36,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Flipper-Flopper',
                    Timing: 34,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Stinger',
                    Timing: 28,
                    Spawn: 'Perch'
                }
            ],
            120: [
                {
                    Boss: 'Flyfish',
                    Timing: 100,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 96,
                    Spawn: 'Perch'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 90,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 85,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 83,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 78,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 71,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 67,
                    Spawn: 'Left of Basket'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 66,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 56,
                    Spawn: 'Right of Basket'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 55,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 53,
                    Spawn: 'Steps'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 42,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Stinger',
                    Timing: 35,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Stinger',
                    Timing: 34,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Scrapper',
                    Timing: 28,
                    Spawn: 'Steps'
                }
            ],
            150: [
                {
                    Boss: 'Flyfish',
                    Timing: 100,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 94,
                    Spawn: 'Perch'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 93,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 88,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 86,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 80,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 76,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 74,
                    Spawn: 'Left of Basket'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 72,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 64,
                    Spawn: 'Right of Basket'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 60,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 57,
                    Spawn: 'Steps'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 52,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Stinger',
                    Timing: 49,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Stinger',
                    Timing: 48,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Scrapper',
                    Timing: 40,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Maws',
                    Timing: 39,
                    Spawn: 'Steps'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 34,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 28,
                    Spawn: 'Steps'
                }
            ],
            180: [
                {
                    Boss: 'Flyfish',
                    Timing: 100,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 94,
                    Spawn: 'Perch'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 93,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 88,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 86,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 80,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 76,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 74,
                    Spawn: 'Left of Basket'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 72,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 64,
                    Spawn: 'Right of Basket'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 62,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 60,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Flipper-Flopper',
                    Timing: 57,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Stinger',
                    Timing: 52,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Stringer',
                    Timing: 49,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 48,
                    Spawn: 'Perch'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 45,
                    Spawn: 'Perch'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 40,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Flipper-Flopper',
                    Timing: 39,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 34,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Maws',
                    Timing: 31,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Scrapper',
                    Timing: 28,
                    Spawn: 'Perch'
                }
            ]
        },
        {
            60: [],
            90: [],
            120: [],
            150: [],
            180: [],
            210: [],
            240: []
        },
        {
            60: [
                {
                    Boss: 'Drizzler',
                    Timing: 100,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Maws',
                    Timing: 82,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 82,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 71,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 64,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 62,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Flipper-Flopper',
                    Timing: 54,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 46,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Stinger',
                    Timing: 37,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 37,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Scrapper',
                    Timing: 28,
                    Spawn: 'Shore'
                }
            ],
            90: [
                {
                    Boss: 'Drizzler',
                    Timing: 100,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Maws',
                    Timing: 95,
                    Spawn: 'Shore'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 82,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 82,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 76,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Maws',
                    Timing: 71,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 64,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 62,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 54,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 46,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 44,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Stinger',
                    Timing: 37,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 37,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 28,
                    Spawn: 'Shore'
                }
            ],
            120: [
                {
                    Boss: 'Drizzler',
                    Timing: 100,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Maws',
                    Timing: 93,
                    Spawn: 'Shore'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 91,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 85,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 84,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Maws',
                    Timing: 71,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 71,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 67,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 62,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 56,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 55,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Stinger',
                    Timing: 52,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 42,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Scrapper',
                    Timing: 35,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Flipper-Flopper',
                    Timing: 34,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 28,
                    Spawn: 'Left Beach'
                }
            ],
            150: [
                {
                    Boss: 'Drizzler',
                    Timing: 100,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Maws',
                    Timing: 93,
                    Spawn: 'Shore'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 93,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 88,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 83,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Maws',
                    Timing: 82,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 76,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 69,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 64,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 64,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 62,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Stinger',
                    Timing: 56,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 52,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Scrapper',
                    Timing: 51,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Flipper-Flopper',
                    Timing: 49,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 40,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 36,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 34,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Maws',
                    Timing: 28,
                    Spawn: 'Right Beach'
                }
            ],
            180: [
                {
                    Boss: 'Drizzler',
                    Timing: 100,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Maws',
                    Timing: 93,
                    Spawn: 'Shore'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 93,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 88,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 83,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Maws',
                    Timing: 82,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 76,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 69,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 64,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 64,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 62,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Stinger',
                    Timing: 61,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 56,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 52,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Flipper-Flopper',
                    Timing: 51,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 50,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 49,
                    Spawn: 'Shore'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 40,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 36,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 34,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 29,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 28,
                    Spawn: 'Left Beach'
                }
            ],
            210: [
                {
                    Boss: 'Drizzler',
                    Timing: 100,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Maws',
                    Timing: 98,
                    Spawn: 'Shore'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 97,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 89,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 84,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Maws',
                    Timing: 80,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 79,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 74,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 73,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 69,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 65,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Stinger',
                    Timing: 59,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 58,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Scrapper',
                    Timing: 53,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Flipper-Flopper',
                    Timing: 52,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 48,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 48,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 47,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 40,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Flipper-Flopper',
                    Timing: 38,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 35,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Maws',
                    Timing: 35,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 33,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 28,
                    Spawn: 'Right of Basket'
                }
            ],
            240: [
                {
                    Boss: 'Drizzler',
                    Timing: 100,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Maws',
                    Timing: 98,
                    Spawn: 'Shore'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 97,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 89,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 84,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Maws',
                    Timing: 80,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 79,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 74,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 73,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 73,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 69,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Stinger',
                    Timing: 65,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 64,
                    Spawn: 'Left of Basket'
                },
                {
                    Boss: 'Stinger',
                    Timing: 59,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 58,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Maws',
                    Timing: 53,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 53,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 52,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 48,
                    Spawn: 'Steps'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 48,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 47,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 40,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 38,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Maws',
                    Timing: 35,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 35,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 33,
                    Spawn: 'Left of Basket'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 28,
                    Spawn: 'Left Beach'
                }
            ],
            270: [
                {
                    Boss: 'Drizzler',
                    Timing: 100,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Maws',
                    Timing: 97,
                    Spawn: 'Shore'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 93,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 91,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 88,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Maws',
                    Timing: 88,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 82,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 80,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 77,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 73,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 68,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Stinger',
                    Timing: 65,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 64,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Scrapper',
                    Timing: 59,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Flipper-Flopper',
                    Timing: 55,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Scrapper',
                    Timing: 55,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 55,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 51,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 49,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 49,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 46,
                    Spawn: 'Right of Basket'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 45,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 41,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 40,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 37,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Stinger',
                    Timing: 36,
                    Spawn: 'Shore'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 32,
                    Spawn: 'Shore'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 31,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 28,
                    Spawn: 'Right Beach'
                }
            ],
            300: [
                {
                    Boss: 'Drizzler',
                    Timing: 100,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Maws',
                    Timing: 97,
                    Spawn: 'Shore'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 93,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 91,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 88,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Maws',
                    Timing: 88,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 88,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 82,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 80,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 77,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Stinger',
                    Timing: 74,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Maws',
                    Timing: 73,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 68,
                    Spawn: 'Left of Basket'
                },
                {
                    Boss: 'Stinger',
                    Timing: 65,
                    Spawn: 'Shore'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 65,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Stinger',
                    Timing: 64,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Flyfish',
                    Timing: 59,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 55,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Flipper-Flopper',
                    Timing: 55,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Maws',
                    Timing: 55,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Scrapper',
                    Timing: 51,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 49,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: 'Steelhead',
                    Timing: 49,
                    Spawn: 'Left Beach'
                },
                {
                    Boss: "Slammin' Lid",
                    Timing: 46,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Stinger',
                    Timing: 45,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Drizzler',
                    Timing: 41,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 40,
                    Spawn: 'Right Beach'
                },
                {
                    Boss: 'Fish Stick',
                    Timing: 37,
                    Spawn: 'Pit'
                },
                {
                    Boss: 'Big Shot',
                    Timing: 36,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Steel Eel',
                    Timing: 32,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Stinger',
                    Timing: 31,
                    Spawn: 'Shore'
                },
                {
                    Boss: 'Maws',
                    Timing: 28,
                    Spawn: 'Left Beach'
                }
            ]
        }
    ];
    return waveTimelines[waveNumber - 1][hazardLevel];
}
export default returnWaveTimeline;
