//Rock 0
import RockMap from '../assets/textures/rock/aerial_rocks_02_diff_4k.jpg' //MAIN TEXTURE
import DisplacementRockMap from '../assets/textures/rock/aerial_rocks_02_disp_4k.jpg' //Displacement TEXTURE
import AORockMap from '../assets/textures/rock/aerial_rocks_02_arm_4k.jpg'
import normalRockMap from '../assets/textures/rock/aerial_rocks_02_nor_gl_4k.jpg'

//Earth 1
import EarthDayMap from '../assets/textures/earth/8k_earth_daymap.jpg'
import EarthNormalMap from '../assets/textures/earth/8k_earth_normal_map.jpg'
import EarthSpecularMap from '../assets/textures/earth/8k_earth_specular_map.jpg'
import EarthCloudsMap from '../assets/textures/earth/8k_earth_clouds.jpg'

//Grass 2
import GrassMap from '../assets/textures/grass/grass_bermuda_01_diff_4k.jpg' //MAIN TEXTURE
import DisplacementGrassMap from '../assets/textures/grass/grass_bermuda_01_arm_4k.jpg' //Displacement TEXTURE
import AOGrassMap from '../assets/textures/grass/grass_bermuda_01_ao_4k.jpg'
import normalGrassMap from '../assets/textures/grass/grass_bermuda_01_nor_gl_4k.jpg'
import roughnessGrassMap from '../assets/textures/grass/grass_bermuda_01_rough_4k.jpg'

//Concrete 3
import ConcreteMap from '../assets/textures/concrete/concrete_wall_006_diff_4k.jpg' //MAIN TEXTURE
import DisplacementConcreteMap from '../assets/textures/concrete/concrete_wall_006_disp_4k.jpg' //Displacement TEXTURE
import AOConcreteMap from '../assets/textures/concrete/concrete_wall_006_ao_4k.jpg'
import normalConcreteMap from '../assets/textures/concrete/concrete_wall_006_arm_4k.jpg'

//Bark_brown
import BarkBrownMap from '../assets/textures/bark_brown/bark_brown_02_diff_4k.jpg'
import DisplacementBarkBrownMap from '../assets/textures/bark_brown/bark_brown_02_disp_4k.jpg'
import AOConcreteBarkBrownMap from '../assets/textures/bark_brown/bark_brown_02_arm_4k.jpg'
import normalBarkBrownMap from '../assets/textures/bark_brown/bark_brown_02_nor_gl_4k.jpg'

//brown_mud_dry
import BrownMudDryMap from '../assets/textures/brown_mud_dry/brown_mud_dry_diff_4k.jpg'
import DisplacementBrownMudDryMap from '../assets/textures/brown_mud_dry/brown_mud_dry_disp_4k.jpg'
import AOConcreteBarkBrownMudDryMap from '../assets/textures/brown_mud_dry/brown_mud_dry_arm_4k.jpg'
import normalBrownMudDryMap from '../assets/textures/brown_mud_dry/brown_mud_dry_nor_gl_4k.jpg'


export const Textures = [
    { 
        map: BrownMudDryMap,
        displacementMap: DisplacementBrownMudDryMap,
        aoMap: AOConcreteBarkBrownMudDryMap,
        roughnessMap: AOConcreteBarkBrownMudDryMap,
        metalnessMap: AOConcreteBarkBrownMudDryMap,
        normalMap: normalBrownMudDryMap
    },
    { 
        map: BarkBrownMap,
        displacementMap: DisplacementBarkBrownMap,
        aoMap: AOConcreteBarkBrownMap,
        roughnessMap: AOConcreteBarkBrownMap,
        metalnessMap: AOConcreteBarkBrownMap,
        normalMap: normalBarkBrownMap
    },
    { 
        map: RockMap,
        displacementMap: DisplacementRockMap,
        aoMap: AORockMap,
        roughnessMap: AORockMap,
        metalnessMap: AORockMap,
        normalMap: normalRockMap
    },
    {
        map: ConcreteMap,
        displacementMap: DisplacementConcreteMap,
        aoMap: AOConcreteMap,
        roughnessMap: roughnessGrassMap,
        metalnessMap: normalConcreteMap,
        normalMap: normalConcreteMap
    },
];

