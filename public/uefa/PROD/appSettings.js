var appSettings = {
    'realm-settings': {
        "settings": {
            "PRIMARY_COLOR": "#00E2FF",
            "MAIN_TITLE": "UEFA.tv",
            "LOGO_WEB": "https://static-stag.diceplatform.com/stag/original/dce.uefa/settings/UEFA_Tv_logo.tV9uU.png?ts=1636390122"
        },
        "authenticationProviders": [
            {
                "name": "GIGYA",
                "fields": [],
                "order": 0
            }
        ],
        "fullGuestAccess": "ALLOWED"
    },
    'label': {
        'translations': {
            'en_GB': {
                'email': "Email:",
                'password': "Password:",
                'broadcasters': "Broadcasters",
            },
        },
    },
    'menu-items': [{
        "id": 2188,
        "title": "Callum Test Section",
        "enabled": true,
        "order": 0,
        "featured": true,
        "externalDataTable": {
            "type": "SECTION",
            "id": 2081,
            "title": "Callum Test Section",
            "deviceRestriction": {"restrictionType": "BLACKLIST", "restrictedDevices": []},
            "section": "cricketaustralia"
        }
    }, {
        "id": 11,
        "title": "Standings",
        "enabled": true,
        "order": 1,
        "featured": true,
        "externalDataTable": {
            "type": "LINK_IN_CONTAINER",
            "id": 25,
            "title": "PBR Standings (iframe)",
            "deviceRestriction": {"restrictionType": "BLACKLIST", "restrictedDevices": []},
            "outboundLink": "https://embed.ridepass.com/prod/index.html"
        }
    }, {
        "id": 12,
        "title": "News",
        "enabled": true,
        "order": 2,
        "featured": true,
        "externalDataTable": {
            "type": "SECTION",
            "id": 18,
            "title": "News",
            "deviceRestriction": {"restrictionType": "BLACKLIST", "restrictedDevices": []},
            "section": "news"
        }
    }, {
        "id": 13,
        "title": "Favourites",
        "enabled": true,
        "order": 3,
        "featured": true,
        "externalDataTable": {
            "type": "VIEW",
            "id": 19,
            "title": "Favourites",
            "deviceRestriction": {"restrictionType": "BLACKLIST", "restrictedDevices": []},
            "view": "Favourites"
        }
    }, {
        "id": 14,
        "title": "Hisotry",
        "enabled": true,
        "order": 4,
        "featured": true,
        "externalDataTable": {
            "type": "VIEW",
            "id": 20,
            "title": "History",
            "deviceRestriction": {"restrictionType": "BLACKLIST", "restrictedDevices": []},
            "view": "History"
        }
    }, {
        "id": 15,
        "title": "PBR Rewards",
        "enabled": true,
        "order": 5,
        "featured": false,
        "externalDataTable": {
            "type": "OUTBOUND_LINK",
            "id": 21,
            "title": "PBR Rewards",
            "deviceRestriction": {"restrictionType": "BLACKLIST", "restrictedDevices": []},
            "outboundLink": "https://pbr.fanmaker.com/"
        }
    }, {
        "id": 16,
        "title": "PBR Shop",
        "enabled": true,
        "order": 6,
        "featured": false,
        "externalDataTable": {
            "type": "OUTBOUND_LINK",
            "id": 22,
            "title": "PBR Shop",
            "deviceRestriction": {"restrictionType": "BLACKLIST", "restrictedDevices": []},
            "outboundLink": "https://pbrshop.com/"
        }
    }, {
        "id": 17,
        "title": "PBR Visa",
        "enabled": true,
        "order": 7,
        "featured": false,
        "externalDataTable": {
            "type": "OUTBOUND_LINK",
            "id": 23,
            "title": "PBR Visa",
            "deviceRestriction": {"restrictionType": "BLACKLIST", "restrictedDevices": []},
            "outboundLink": "https://www.usb-offer.com/mmaffinity/begin.controller?partner=PBR&offer=pbroffer19&source=38400"
        }
    }, {
        "id": 18,
        "title": "Preferences",
        "enabled": true,
        "order": 8,
        "featured": false,
        "externalDataTable": {
            "type": "VIEW",
            "id": 26,
            "title": "Preferences",
            "deviceRestriction": {"restrictionType": "BLACKLIST", "restrictedDevices": []},
            "view": "Preferences"
        }
    }, {
        "id": 19,
        "title": "Notifications",
        "enabled": true,
        "order": 9,
        "featured": false,
        "externalDataTable": {
            "type": "VIEW",
            "id": 27,
            "title": "Notifications",
            "deviceRestriction": {"restrictionType": "BLACKLIST", "restrictedDevices": []},
            "view": "Notifications"
        }
    }, {
        "id": 20,
        "title": "Privacy Policy",
        "enabled": true,
        "order": 10,
        "featured": false,
        "externalDataTable": {
            "type": "OUTBOUND_LINK",
            "id": 24,
            "title": "Google Link",
            "deviceRestriction": {"restrictionType": "BLACKLIST", "restrictedDevices": []},
            "outboundLink": "https://www.google.co.uk/"
        }
    }, {
        "id": 60,
        "title": "DAYSHEET",
        "enabled": true,
        "order": 11,
        "featured": true,
        "externalDataTable": {
            "type": "OUTBOUND_LINK",
            "id": 56,
            "title": "Daysheets link",
            "deviceRestriction": {"restrictionType": "BLACKLIST", "restrictedDevices": []},
            "outboundLink": "http://www.pbr.com/en/daysheet"
        }
    }, {
        "id": 22,
        "title": "Account",
        "enabled": true,
        "order": 12,
        "featured": false,
        "externalDataTable": {
            "type": "VIEW",
            "id": 29,
            "title": "Account",
            "deviceRestriction": {"restrictionType": "BLACKLIST", "restrictedDevices": []},
            "view": "Account"
        }
    }]
}