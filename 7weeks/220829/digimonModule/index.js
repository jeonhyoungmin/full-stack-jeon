import docInit from "./docInit.js";
import nimChange from "./nimChange.js";
import creatLiTag from './creatLiTag.js'

docInit.body.append(docInit.digimonUl)

creatLiTag(docInit.digimon, docInit.digimonUl, nimChange(docInit.digimonNim, docInit.digimon))