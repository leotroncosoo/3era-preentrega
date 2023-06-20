//Array de JUEGOS

const juegosPs4 = [
    {id:1, nombre: "Ark: Survival Evolved Ps4 Juego Físico Sellado Original", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_760895-MLA52858690630_122022-O.webp", precio: 17899},
    {id:2, nombre: "Assassin's Creed Odyssey Standard Edition Ubisoft PS4 Físico", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_674942-MLA43440632433_092020-O.webp", precio: 14999},
    {id:3, nombre: "Call of Duty: Modern Warfare Modern Warfare Standard Edition Activision PS4 Físico", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_871811-MLA52352354314_112022-O.webp", precio: 33948},
    {id:4, nombre: "Destiny 2 Standard Edition Activision PS4 Digital", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_758937-MLA44507797267_012021-O.webp", precio: 1500},
    {id:5, nombre: "Dragon Ball Z: Kakarot Dragon Ball Z Standard Edition Bandai Namco PS4 Físico", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_886820-MLA53641317027_022023-O.webp", precio: 15999},
    {id:6, nombre: "Far Cry 6 Standard Edition Ubisoft PS4 Físico", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_689108-MLA48240587927_112021-O.webp", precio: 12999},
    {id:7, nombre: "FiFA 23 Standard Edition Electronic Arts PS4 Físico", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_816165-MLA53018854453_122022-O.webp", precio: 23999},
    {id:8, nombre: "Tom Clancy's Ghost Recon Wildlands Ghost Rekon Standard Edition Ubisoft PS4 Físico", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_604407-MLA51169507135_082022-O.webp", precio: 8999},
    {id:9, nombre: "Grand Theft Auto V Standard Edition Rockstar Games PS4 Digital", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_607593-MLA51163335974_082022-O.webp", precio: 7989},
    {id:10, nombre: "Horizon Forbidden West Standard Edition Sony PS4 Digital", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_837292-MLA52350716855_112022-O.webp", precio: 7000},
    {id:11, nombre: "Just Cause 4 Ps4 Juego Fisico Sellado Nuevo Originall", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_617491-MLA69242602430_052023-O.webp", precio: 9897},
    {id:12, nombre: "Mortal Kombat 11 Ultimate Ultimate Edition Warner Bros. PS4 Físico", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_802018-MLA50224269005_062022-O.webp", precio: 19000},
    {id:13, nombre: "Tom Clancy's Rainbow Six Siege Rainbow Six Standard Edition Ubisoft PS4 Físico", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_603034-MLA44446083994_122020-O.webp", precio: 8000},
    {id:14, nombre: "Red Dead Redemption 2 Standard Edition Rockstar Games PS4 Físico", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_667696-MLA46792682054_072021-O.webp", precio: 17498},
    {id:15, nombre: "Resident Evil 4 Standard Edition Capcom PS4 Físico", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_853461-MLA40918850385_022020-O.webp", precio: 11698},
    {id:16, nombre: "The Last of Us Remastered Standard Edition Sony PS4 Digital", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_855798-MLA43429424442_092020-O.webp", precio: 7500},
    {id:17, nombre: "Uncharted 4: A Thief's End Standard Edition Sony PS4 Físico", plataforma: "ps4", imagen: "https://http2.mlstatic.com/D_NQ_NP_689345-MLA43437746181_092020-O.webp", precio: 12215},
];

const juegosNintendo = [
    {id:18, nombre: "Crash Team Racing: Nitro-Fueled Crash Team Racing Standard Edition Activision Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_603086-MLA40860808775_022020-O.webp", precio: 16100},
    {id:19, nombre: "Just Dance 2021 Standard Edition Ubisoft Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_610765-MLA44341693704_122020-O.webp", precio: 28999},
    {id:20, nombre: "Luigi's Mansion 3 Luigi's Mansion Standard Edition Nintendo Switch Digital",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_719807-MLA40862930062_022020-O.webp", precio: 12000},
    {id:21, nombre: "Mario+rabbids Kingdom Battle - Switch Fisico/ Mipowerdestiny",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_942236-MLA31351970091_072019-O.webp", precio: 24449},
    {id:22, nombre: "Mario + Rabbids Sparks of Hope Standard Edition Ubisoft Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_650347-MLA51804564539_102022-O.webp", precio: 40999},
    {id:23, nombre: "Super Mario Maker 2 Super Mario Maker Standard Edition Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_757148-MLA40917205776_022020-O.webp", precio: 35000},
    {id:24, nombre: "Super Mario Odyssey Super Mario Standard Edition Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_958303-MLA40864140097_022020-O.webp", precio: 35000},
    {id:25, nombre: "Super Smash Bros. Ultimate Standard Edition Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_805062-MLA40861843559_022020-O.webp", precio: 35000},
    {id:26, nombre: "Yoshi's Crafted World Yoshi Standard Edition Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_887285-MLA44340079815_122020-O.webp", precio: 34999},
];

const juegos = juegosPs4.concat(juegosNintendo);

guardarJuegosLS();

