const Menu =[{
    "principal" : [
        {id : 0, name: "artists"},
        {id : 1, name: "albums"},
        {id : 2, name: "songs"},
        {id : 3, name: "settings"},
    ],
    "artists" : [
      {id: 0, name: "aerosmith"},
      {id: 1, name: "eagles"},
      {id: 2, name: "led zeppelin"}
    ],
    "albums" : [
        {   id: 0, 
            name: "get your wings", 
        },
        {   id: 1, 
            name: "hotel california", 
        },
        {   id: 1, 
            name: "physical graffiti", 

        },

    ],
    "songs": [
        {id : 0, name: "hotel california"},
        {id : 1, name: "houses of the holy"},
        {id : 2, name: "in my time of dying"},
        {id : 3, name: "pretty maids all in a row"},
        {id : 4, name: "same old song and dance"},
        {id : 5, name: "train kept a-rollin"},
    ],
    "settings": [
        {id : 0, name: "profile"},
        {id: 1, name: "player"}
    ],
    "player": [
        {id : 0, name: "equalizer"},
        {id : 1, name: "volume"},
    ], 
    "aerosmith" : [
        {id : 0, name: "get your wings"}
    ],
    "eagles" :[
        {id : 0, name: "hotel california"}
    ],
    "led zeppelin": [
        {id : 0, name: "physical graffiti"}
    ],
    "get your wings" : [
        {id : 0, name: "same old song and dance"},
        {id : 1, name: "train kept a-rollin"}
    ],
    "hotel california" : [
        {id : 0, name: "hotel california"},
        {id : 1, name: "train kept a-rollin"}
    ],
    "physical graffiti": [
        {id : 0, name: "houses of the holy"},
        {id : 1, name: "in my time of dying"} 
    ]
   
}]

export const dataKey = Menu.map(item => Object.keys(item))

export default Menu