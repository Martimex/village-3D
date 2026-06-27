import * as THREE from "three";
import { color, texture } from "three/tsl";

const textureLoader = new THREE.TextureLoader();

export default {
    textMatcap: () => {
        const matcapTexture = textureLoader.load("./matcaps/1.png");
        matcapTexture.colorSpace = THREE.SRGBColorSpace;
        return matcapTexture;
    },
    getGroundTextures: () => {
        /*  const alphaMap = textureLoader.load("./textures/ground/alpha.webp");
        const aoMap = textureLoader.load("../textures/ground/Grass004_1K-PNG_AmbientOcclusion.png");
        const colorMap = textureLoader.load("../textures/ground/Grass004_1K-PNG_Color.png");
        const heightMap = textureLoader.load("../textures/ground/Grass004_1K-PNG_Displacement.png");
        const normalMap = textureLoader.load("../textures/ground/Grass004_1K-PNG_NormalGL.png");
        const roughnessMap = textureLoader.load("../textures/ground/Grass004_1K-PNG_Roughness.png");

        aoMap.repeat.set(8, 8); aoMap.wrapS = THREE.RepeatWrapping; aoMap.wrapT = THREE.RepeatWrapping;
        colorMap.repeat.set(8, 8); colorMap.wrapS = THREE.RepeatWrapping; colorMap.wrapT = THREE.RepeatWrapping;
        colorMap.colorSpace = THREE.SRGBColorSpace;
        heightMap.repeat.set(8, 8); heightMap.wrapS = THREE.RepeatWrapping; heightMap.wrapT = THREE.RepeatWrapping;
        normalMap.repeat.set(8, 8); normalMap.wrapS = THREE.RepeatWrapping; normalMap.wrapT = THREE.RepeatWrapping;
        roughnessMap.repeat.set(8, 8); roughnessMap.wrapS = THREE.RepeatWrapping; roughnessMap.wrapT = THREE.RepeatWrapping;
    
        return { alphaMap, aoMap, colorMap, heightMap, normalMap, roughnessMap }; */

        const alphaMap = textureLoader.load("./textures/ground/alpha.webp");
        const armMap = textureLoader.load("../textures/ground/brown_mud_leaves_01_arm_1k.jpg");
        const colorMap = textureLoader.load("../textures/ground/brown_mud_leaves_01_diff_1k.jpg");
        const heightMap = textureLoader.load("../textures/ground/brown_mud_leaves_01_disp_1k.jpg");
        const normalMap = textureLoader.load("../textures/ground/brown_mud_leaves_01_nor_gl_1k.jpg");

        armMap.repeat.set(8, 8); armMap.wrapS = THREE.RepeatWrapping; armMap.wrapT = THREE.RepeatWrapping;
        colorMap.repeat.set(8, 8); colorMap.wrapS = THREE.RepeatWrapping; colorMap.wrapT = THREE.RepeatWrapping;
        colorMap.colorSpace = THREE.SRGBColorSpace;
        heightMap.repeat.set(8, 8); heightMap.wrapS = THREE.RepeatWrapping; heightMap.wrapT = THREE.RepeatWrapping;
        normalMap.repeat.set(8, 8); normalMap.wrapS = THREE.RepeatWrapping; normalMap.wrapT = THREE.RepeatWrapping;
    
        return { alphaMap, armMap, colorMap, heightMap, normalMap };
    },
    getSolidWallTextures: () => {
        const armMap = textureLoader.load("../textures/solidwall/cracked_concrete_02_arm_1k.jpg");
        const colorMap = textureLoader.load("../textures/solidwall/cracked_concrete_02_diff_1k.jpg");
        colorMap.colorSpace = THREE.SRGBColorSpace;
        const normalMap = textureLoader.load("../textures/solidwall/cracked_concrete_02_nor_gl_1k.jpg");

        armMap.repeat.set(1.5, 0.85); armMap.wrapS = THREE.RepeatWrapping; armMap.wrapT = THREE.RepeatWrapping;
        colorMap.repeat.set(1.5, 0.85); colorMap.wrapS = THREE.RepeatWrapping; colorMap.wrapT = THREE.RepeatWrapping;
        normalMap.repeat.set(1.5, 0.85); normalMap.wrapS = THREE.RepeatWrapping; normalMap.wrapT = THREE.RepeatWrapping;

        return { armMap, colorMap, normalMap };
    },
    getHouse1Textures: () => {
        return {
            walls: getWalls(),
            roof: getRoof(),
            door: getDoor(),
        }

        function getWalls() {
            const armMap = textureLoader.load("../textures/house1/walls/brown_planks_08_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/house1/walls/brown_planks_08_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/house1/walls/brown_planks_08_nor_gl_1k.jpg");

            return {armMap, colorMap, normalMap}
        }

        function getRoof() {
            /* TODO */
            const armMap = textureLoader.load("../textures/house1/roof/grey_roof_tiles_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/house1/roof/grey_roof_tiles_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/house1/roof/grey_roof_tiles_nor_gl_1k.jpg");

            colorMap.repeat.set(6, 2);
            colorMap.wrapS = THREE.RepeatWrapping;
            colorMap.wrapT = THREE.RepeatWrapping;
            
            armMap.repeat.set(6, 2);
            armMap.wrapS = THREE.RepeatWrapping;
            armMap.wrapT = THREE.RepeatWrapping;
            
            normalMap.repeat.set(6, 2);
            normalMap.wrapS = THREE.RepeatWrapping;
            normalMap.wrapT = THREE.RepeatWrapping;

            return {armMap, colorMap, normalMap}
        }

        function getDoor() {
            const alphaMap = textureLoader.load("../textures/_shared/door_universal/alpha.jpg");
            const aoMap = textureLoader.load("../textures/_shared/door_universal/ambientOcclusion.jpg");
            const colorMap = textureLoader.load("../textures/house1/door/color5.png");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const metalnessMap = textureLoader.load("../textures/_shared/door_universal/metalness.jpg");
            const normalMap = textureLoader.load("../textures/_shared/door_universal/normal.jpg");
            const heightMap = textureLoader.load("../textures/_shared/door_universal/height.jpg");
            const roughnessMap = textureLoader.load("../textures/_shared/door_universal/roughness.jpg");

            return {alphaMap, aoMap, colorMap, heightMap, metalnessMap, normalMap, roughnessMap};
        }
    },
    getLadderTextures: () => {
        return {
            sides: getSides(),
            steps: getSteps()
        }

        function getSteps() {
            const armMap = textureLoader.load("../textures/ladder/weathered_brown_planks_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/ladder/weathered_brown_planks_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/ladder/weathered_brown_planks_nor_gl_1k.jpg");

            armMap.repeat.set(3, 1);
            armMap.wrapS = THREE.RepeatWrapping;
            armMap.wrapT = THREE.RepeatWrapping;

            colorMap.repeat.set(3, 1);
            colorMap.wrapS = THREE.RepeatWrapping;
            colorMap.wrapT = THREE.RepeatWrapping;

            normalMap.repeat.set(3, 1);
            normalMap.wrapS = THREE.RepeatWrapping;
            normalMap.wrapT = THREE.RepeatWrapping;

            return {armMap, colorMap, normalMap};
        }

        function getSides() {
            const armMap = textureLoader.load("../textures/ladder/weathered_brown_planks_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/ladder/weathered_brown_planks_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/ladder/weathered_brown_planks_nor_gl_1k.jpg");

            armMap.repeat.set(1, 1);
            armMap.wrapS = THREE.RepeatWrapping;
            armMap.wrapT = THREE.RepeatWrapping;

            colorMap.repeat.set(1, 10);
            colorMap.wrapS = THREE.RepeatWrapping;
            colorMap.wrapT = THREE.RepeatWrapping;

            normalMap.repeat.set(1, 1);
            normalMap.wrapS = THREE.RepeatWrapping;
            normalMap.wrapT = THREE.RepeatWrapping;

            return {armMap, colorMap, normalMap};
        }
    },
    getSandboxTextures: () => {
        return {
            surface: getSurface(),
            mound: getMound(),
            frames: getFrames()
        };

        function getSurface() {
            const armMap = textureLoader.load("../textures/sandbox/playground_sand_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/sandbox/playground_sand_diff_1k.jpg");
            /* colorMap.colorSpace = THREE.SRGBColorSpace; */
            const normalMap = textureLoader.load("../textures/sandbox/playground_sand_nor_gl_1k.jpg");

            return { armMap, colorMap, normalMap};
        }

        function getMound() {
            const armMap = textureLoader.load("../textures/sandbox/playground_sand_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/sandbox/playground_sand_diff_1k.jpg");
            /* colorMap.colorSpace = THREE.SRGBColorSpace; */
            const normalMap = textureLoader.load("../textures/sandbox/playground_sand_nor_gl_1k.jpg");

            armMap.repeat.set(3, 1);
            armMap.wrapS = THREE.RepeatWrapping;
            armMap.wrapT = THREE.RepeatWrapping;

            colorMap.repeat.set(3, 1);
            colorMap.wrapS = THREE.RepeatWrapping;
            colorMap.wrapT = THREE.RepeatWrapping;

            normalMap.repeat.set(3, 1);
            normalMap.wrapS = THREE.RepeatWrapping;
            normalMap.wrapT = THREE.RepeatWrapping;

            return { armMap, colorMap, normalMap};
        }

        function getFrames() {
            const armMap = textureLoader.load("../textures/sandbox/exterior_wall_cladding_03_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/sandbox/exterior_wall_cladding_03_diff_1k.jpg");
            const normalMap = textureLoader.load("../textures/sandbox/exterior_wall_cladding_03_nor_gl_1k.jpg");

            armMap.repeat.set(0.225, 0.225);
            armMap.wrapS = THREE.RepeatWrapping;
            armMap.wrapT = THREE.RepeatWrapping;

            colorMap.repeat.set(0.225, 0.225);
            colorMap.wrapS = THREE.RepeatWrapping;
            colorMap.wrapT = THREE.RepeatWrapping;

            normalMap.repeat.set(0.225, 0.225);
            normalMap.wrapS = THREE.RepeatWrapping;
            normalMap.wrapT = THREE.RepeatWrapping;

            return { armMap, colorMap, normalMap };
        }

    },
    getBucketsTextures: () => {
        return {
            woodenPart: getWoodenPart(),
            metalicPart: getMetalicPart()
        }

        function getWoodenPart() {
            const armMap = textureLoader.load("../textures/buckets/wood_cabinet_worn_long_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/buckets/wood_cabinet_worn_long_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/buckets/wood_cabinet_worn_long_nor_gl_1k.jpg");

            return { armMap, colorMap, normalMap };
        }

        function getMetalicPart() {
            const roughMap = textureLoader.load("../textures/buckets/Metal062C_1K-JPG_Roughness.jpg");
            const metalMap = textureLoader.load("../textures/buckets/Metal062C_1K-JPG_Metalness.jpg")
            const colorMap = textureLoader.load("../textures/buckets/Metal062C_1K-JPG_Color.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/buckets/Metal062C_1K-JPG_NormalGL.jpg");

            roughMap.minFilter = THREE.LinearMipMapNearestFilter;
            metalMap.minFilter = THREE.LinearMipMapNearestFilter;
            colorMap.minFilter = THREE.LinearMipMapNearestFilter;
            normalMap.minFilter = THREE.LinearMipMapNearestFilter;

            return { roughMap, metalMap, colorMap, normalMap };
        }
    },
    getWellTextures: () => {
        const armMap = textureLoader.load("../textures/well/plastered_stone_wall_arm_1k.jpg");
        const colorMap = textureLoader.load("../textures/well/plastered_stone_wall_diff_1k.jpg");
        /* colorMap.colorSpace = THREE.SRGBColorSpace; */
        const normalMap = textureLoader.load("../textures/well/plastered_stone_wall_nor_gl_1k.jpg");

        armMap.repeat.set(1, 0.33);
        armMap.wrapT = THREE.RepeatWrapping;

        colorMap.repeat.set(1, 0.33);
        colorMap.wrapT = THREE.RepeatWrapping;

        normalMap.repeat.set(1, 0.33);
        normalMap.wrapT = THREE.RepeatWrapping;

        return { armMap, colorMap, normalMap };
    },
    getMinifenceTextures: () => {
        const armMap = textureLoader.load("../textures/minifence/rosewood_veneer1_arm_1k.jpg");
        const colorMap = textureLoader.load("../textures/minifence/rosewood_veneer1_diff_1k.jpg");
        colorMap.colorSpace = THREE.SRGBColorSpace;
        const normalMap = textureLoader.load("../textures/minifence/rosewood_veneer1_nor_gl_1k.jpg");

        return { armMap, colorMap, normalMap };
    },
    getFenceTextures: () => {
        const armMap = textureLoader.load("../textures/_shared/fine_grained_wood/fine_grained_wood_arm_1k.jpg");
        const colorMap = textureLoader.load("../textures/_shared/fine_grained_wood/fine_grained_wood_col_1k.jpg");
        colorMap.colorSpace = THREE.SRGBColorSpace;
        const normalMap = textureLoader.load("../textures/_shared/fine_grained_wood/fine_grained_wood_nor_gl_1k.jpg");

        return { armMap, colorMap, normalMap };
    },
    getGardenTextures: () => {
        return {
            ground: getGround(),
            divider: getDivider(),
            plants: getPlants()
        };

        function getGround() {
            const armMap = textureLoader.load("../textures/garden/ground/dirt_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/garden/ground/dirt_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/garden/ground/dirt_nor_gl_1k.jpg");
        
            return { armMap, colorMap, normalMap };
        }

        function getDivider() {
            const armMap = textureLoader.load("../textures/_shared/fine_grained_wood/fine_grained_wood_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/_shared/fine_grained_wood/fine_grained_wood_col_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/_shared/fine_grained_wood/fine_grained_wood_nor_gl_1k.jpg");

            return { armMap, colorMap, normalMap };
        }
        
        function getPlants() {
            const aoMap = textureLoader.load("../textures/garden/plants/Sponge001_1K-JPG_AmbientOcclusion.jpg");
            const roughMap = textureLoader.load("../textures/garden/plants/Sponge001_1K-JPG_Roughness.jpg");
            const colorMap = textureLoader.load("../textures/garden/plants/Sponge001_1K-JPG_Color.jpg");
            /* colorMap.colorSpace = THREE.SRGBColorSpace; */
            const normalMap = textureLoader.load("../textures/garden/plants/Sponge001_1K-JPG_NormalGL.jpg");

            return { aoMap, roughMap, colorMap, normalMap };
        }

    },
    getTreesTextures() {
        return {
            trunk: getTrunk(),
            leaves: getLeaves()
        }

        function getTrunk() {
            const armMap = textureLoader.load("../textures/trees/trunk/pine_bark_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/trees/trunk/pine_bark_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/trees/trunk/pine_bark_nor_gl_1k.jpg");

            return { armMap, colorMap, normalMap };
        }

        function getLeaves() {

            const dynamicLoaders = {
                arm: async function() { 
                    const clonedARMTexture = await textureLoader.load("../textures/trees/leaves/forest_leaves_03_arm_1k.jpg", (texture) => cloneTexture(texture));
                    return clonedARMTexture;
                },
                color: async function() {
                    const clonedColorTexture = await textureLoader.load("../textures/trees/leaves/forest_leaves_03_diff_1k.jpg", (texture) => cloneTexture(texture));
                    clonedColorTexture.colorSpace = THREE.SRGBColorSpace;
                    return clonedColorTexture;
                },
                normal: async function() {
                    const clonedNormalTexture = await textureLoader.load("../textures/trees/leaves/forest_leaves_03_nor_gl_1k.jpg", (texture) => cloneTexture(texture));
                    return clonedNormalTexture;
                }

            }

            function cloneTexture(texture) {
                const clonedTexture = texture.clone();
                clonedTexture.needsUpdate = true;
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
                return clonedTexture;
            }

            return { dynamicLoaders };
        }

    },
    getPoolTextures() {
        return {
            cover: getCover(),
            water: getWater()
        };

        function getCover() {
            const armMap = textureLoader.load("../textures/pool/cover/painted_concrete_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/pool/cover/painted_concrete_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/pool/cover/painted_concrete_nor_gl_1k.jpg");

            return { armMap, colorMap, normalMap };
        }

        function getWater() {

            return {};
        }
    },
    getToiletTextures() {
        return {
            building: getBuilding(),
            roof: getRoof(),
            door: getDoor()
        }

        function getBuilding() {
            const armMap = textureLoader.load("../textures/_shared/blue_metal_plate/blue_metal_plate_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/_shared/blue_metal_plate/blue_metal_plate_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/_shared/blue_metal_plate/blue_metal_plate_nor_gl_1k.jpg");
            
            return { armMap, colorMap, normalMap };
        }

        function getRoof() {
            const armMap = textureLoader.load("../textures/_shared/blue_metal_plate/blue_metal_plate_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/_shared/blue_metal_plate/blue_metal_plate_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/_shared/blue_metal_plate/blue_metal_plate_nor_gl_1k.jpg");

            armMap.repeat.set(1, 0.33);
            armMap.wrapT = THREE.RepeatWrapping;

            colorMap.repeat.set(1, 0.33);
            colorMap.wrapT = THREE.RepeatWrapping;

            normalMap.repeat.set(1, 0.33);
            normalMap.wrapT = THREE.RepeatWrapping;

            return { armMap, colorMap, normalMap };
        }

        function getDoor() {
            const alphaMap = textureLoader.load("../textures/_shared/door_universal/alpha.jpg");
            const aoMap = textureLoader.load("../textures/_shared/door_universal/ambientOcclusion.jpg");
            const colorMap = textureLoader.load("../textures/toilet/door/color1.jpg");
            /* colorMap.colorSpace = THREE.SRGBColorSpace; */
            const metalnessMap = textureLoader.load("../textures/_shared/door_universal/metalness.jpg");
            const normalMap = textureLoader.load("../textures/_shared/door_universal/normal.jpg");
            const heightMap = textureLoader.load("../textures/_shared/door_universal/height.jpg");
            const roughnessMap = textureLoader.load("../textures/_shared/door_universal/roughness.jpg");

            return {alphaMap, aoMap, colorMap, heightMap, metalnessMap, normalMap, roughnessMap};
        }
    },
    getLampTextures() {
        return {
            base: getBase(),
            pole: getPole(),
            lightbulb: getLightbulb()
        }

        function getBase() {

            const armMap = textureLoader.load("../textures/lamp/base/rock_01_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/lamp/base/rock_01_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/lamp/base/rock_01_nor_gl_1k.jpg");

            armMap.repeat.set(4, 2);
            armMap.wrapS = THREE.RepeatWrapping;
            armMap.wrapT = THREE.RepeatWrapping;

            colorMap.repeat.set(4, 2);
            colorMap.wrapS = THREE.RepeatWrapping;
            colorMap.wrapT = THREE.RepeatWrapping;


            normalMap.repeat.set(4, 2);
            normalMap.wrapS = THREE.RepeatWrapping;
            normalMap.wrapT = THREE.RepeatWrapping;

            return { armMap, colorMap, normalMap };
        }

        function getPole() {

            const armMap = textureLoader.load("../textures/lamp/pole/corrugated_iron_02_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/lamp/pole/corrugated_iron_02_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/lamp/pole/corrugated_iron_02_nor_gl_1k.jpg");

            armMap.repeat.set(2, 1);
            armMap.wrapS = THREE.RepeatWrapping;

            colorMap.repeat.set(2, 1);
            colorMap.wrapS = THREE.RepeatWrapping;


            normalMap.repeat.set(2, 1);
            normalMap.wrapS = THREE.RepeatWrapping;

            return { armMap, colorMap, normalMap };
        }

        function getLightbulb() {

            return {};
        }
    },
    getBushTextures() {
        const aoMap = textureLoader.load("../textures/bush/Grass003_1K-JPG_AmbientOcclusion.jpg")
        const roughMap = textureLoader.load("../textures/bush/Grass003_1K-JPG_Roughness.jpg");
        const colorMap = textureLoader.load("../textures/bush/Grass003_1K-JPG_Color.jpg");
        colorMap.colorSpace = THREE.SRGBColorSpace;
        const normalMap = textureLoader.load("../textures/bush/Grass003_1K-JPG_NormalGL.jpg");

        return { aoMap, roughMap, colorMap, normalMap };
    },
    getStonesTextures() {

        const armMap = textureLoader.load("../textures/stones/mossy_rock_arm_1k.jpg");
        const colorMap = textureLoader.load("../textures/stones/mossy_rock_diff_1k.jpg");
        colorMap.colorSpace = THREE.SRGBColorSpace;
        const normalMap = textureLoader.load("../textures/stones/mossy_rock_nor_gl_1k.jpg");

        armMap.repeat.set(2, 1);
        armMap.wrapS = THREE.RepeatWrapping;

        colorMap.repeat.set(2, 1);
        colorMap.wrapS = THREE.RepeatWrapping;

        normalMap.repeat.set(2, 1);
        normalMap.wrapS = THREE.RepeatWrapping;


        return { armMap, colorMap, normalMap };
    },
    getHouse2Textures() {

        return {
            walls: getWalls(),
            extraWall: getExtraWall(),
            roof: getRoof(),
            stairs: getStairs(),
            door: getDoor(),
            door2: getDoor2(),
            lightBulb: getLightBulb(),
            rectangularLED: getRectangularLED()
        }

        function getWalls() {
            const armMap = textureLoader.load("../textures/_shared/exterior_wall_cladding_02/exterior_wall_cladding_02_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/_shared/exterior_wall_cladding_02/exterior_wall_cladding_02_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/_shared/exterior_wall_cladding_02/exterior_wall_cladding_02_nor_gl_1k.jpg");

/*             armMap.repeat.set(3, 1);
            armMap.wrapS = THREE.RepeatWrapping;

            colorMap.repeat.set(3, 1);
            colorMap.wrapS = THREE.RepeatWrapping;

            normalMap.repeat.set(3, 1);
            normalMap.wrapS = THREE.RepeatWrapping; */

            return { armMap, colorMap, normalMap };
        }

        function getExtraWall() {
            const armMap = textureLoader.load("../textures/_shared/exterior_wall_cladding_02/exterior_wall_cladding_02_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/_shared/exterior_wall_cladding_02/exterior_wall_cladding_02_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/_shared/exterior_wall_cladding_02/exterior_wall_cladding_02_nor_gl_1k.jpg");

/*             armMap.repeat.set(1.5, 1);
            armMap.wrapS = THREE.RepeatWrapping;

            colorMap.repeat.set(1.5, 1);
            colorMap.wrapS = THREE.RepeatWrapping;

            normalMap.repeat.set(1.5, 1);
            normalMap.wrapS = THREE.RepeatWrapping; */

            return { armMap, colorMap, normalMap };
        }

        function getRoof() {
            const armMap = textureLoader.load("../textures/house2/roof/bitumen_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/house2/roof/bitumen_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/house2/roof/bitumen_nor_gl_1k.jpg");

            colorMap.repeat.set(0.125, 0.125);
            colorMap.wrapS = THREE.RepeatWrapping;
            colorMap.wrapT = THREE.RepeatWrapping;
            
            armMap.repeat.set(0.125, 0.125);
            armMap.wrapS = THREE.RepeatWrapping;
            armMap.wrapT = THREE.RepeatWrapping;
            
            normalMap.repeat.set(0.125, 0.125);
            normalMap.wrapS = THREE.RepeatWrapping;
            normalMap.wrapT = THREE.RepeatWrapping;

        
            return { armMap, colorMap, normalMap };
        }

        function getStairs() {
            const [repeatXModifier, repeatYModifier] = [0.18, 0.27];

            const armMap = textureLoader.load("../textures/house2/stairs/plank_flooring_04_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/house2/stairs/plank_flooring_04_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/house2/stairs/plank_flooring_04_nor_gl_1k.jpg"); 
            
            colorMap.repeat.set(repeatXModifier, repeatYModifier);
            colorMap.wrapS = THREE.RepeatWrapping;
            colorMap.wrapT = THREE.RepeatWrapping;
            
            armMap.repeat.set(repeatXModifier, repeatYModifier);
            armMap.wrapS = THREE.RepeatWrapping;
            armMap.wrapT = THREE.RepeatWrapping;
            
            normalMap.repeat.set(repeatXModifier, repeatYModifier);
            normalMap.wrapS = THREE.RepeatWrapping;
            normalMap.wrapT = THREE.RepeatWrapping;

            return { armMap, colorMap, normalMap };
        }

        function getDoor() {
            const alphaMap = textureLoader.load("../textures/_shared/door_universal/alpha.jpg");
            const aoMap = textureLoader.load("../textures/_shared/door_universal/ambientOcclusion.jpg");
            const colorMap = textureLoader.load("../textures/house2/door/color8.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const metalnessMap = textureLoader.load("../textures/_shared/door_universal/metalness.jpg");
            const normalMap = textureLoader.load("../textures/_shared/door_universal/normal.jpg");
            const heightMap = textureLoader.load("../textures/_shared/door_universal/height.jpg");
            const roughnessMap = textureLoader.load("../textures/_shared/door_universal/roughness.jpg");

            return {alphaMap, aoMap, colorMap, heightMap, metalnessMap, normalMap, roughnessMap};
        }

        function getDoor2() {
            const alphaMap = textureLoader.load("../textures/_shared/door_universal/alpha.jpg");
            const aoMap = textureLoader.load("../textures/_shared/door_universal/ambientOcclusion.jpg");
            const colorMap = textureLoader.load("../textures/house2/door2/color9.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const metalnessMap = textureLoader.load("../textures/_shared/door_universal/metalness.jpg");
            const normalMap = textureLoader.load("../textures/_shared/door_universal/normal.jpg");
            const heightMap = textureLoader.load("../textures/_shared/door_universal/height.jpg");
            const roughnessMap = textureLoader.load("../textures/_shared/door_universal/roughness.jpg");

            return {alphaMap, aoMap, colorMap, heightMap, metalnessMap, normalMap, roughnessMap};
        }

        function getLightBulb() {
            const armMap = textureLoader.load("../textures/house2/lightbulb/fine_grained_wood_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/house2/lightbulb/fine_grained_wood_col_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/house2/lightbulb/fine_grained_wood_nor_gl_1k.jpg");

            return { armMap, colorMap, normalMap };
        }

        function getRectangularLED() {
            const armMap = textureLoader.load("../textures/house2/rectangularLED/corrugated_iron_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/house2/rectangularLED/corrugated_iron_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/house2/rectangularLED/corrugated_iron_nor_gl_1k.jpg");

            return { armMap, colorMap, normalMap };
        }

    },

    getLaneTextures() {
        const alphaMap = textureLoader.load("../textures/_shared/_alphas/alpha.png");

        const armMap = textureLoader.load("../textures/lane/wood_chip_path_arm_1k.jpg");
        const colorMap = textureLoader.load("../textures/lane/wood_chip_path_diff_1k.jpg");
        colorMap.colorSpace = THREE.SRGBColorSpace;
        const normalMap = textureLoader.load("../textures/lane/wood_chip_path_nor_gl_1k.jpg"); 

        /* alphaMap.repeat.set(1, 4);
        alphaMap.wrapS = THREE.RepeatWrapping;
        alphaMap.wrapT = THREE.RepeatWrapping; */

        armMap.repeat.set(1, 4);
        armMap.wrapS = THREE.RepeatWrapping;
        armMap.wrapT = THREE.RepeatWrapping;

        colorMap.repeat.set(1, 4);
        colorMap.wrapS = THREE.RepeatWrapping;
        colorMap.wrapT = THREE.RepeatWrapping;


        normalMap.repeat.set(1, 4);
        normalMap.wrapS = THREE.RepeatWrapping;
        normalMap.wrapT = THREE.RepeatWrapping;

        return { alphaMap, armMap, colorMap, normalMap };
    },

    getSideWalkTextures() {
        return {
            sidewalk1: getSideWalk1(),
            sidewalk2: getSidewalk2(),
            sidewalkCircle: getSidewalkCircle()
        }

        function getSideWalk1() {
            const alphaMap = textureLoader.load("../textures/_shared/_alphas/alpha.jpg");
            const armMap = textureLoader.load("../textures/_shared/rocky_terrain_02/rocky_terrain_02_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/_shared/rocky_terrain_02/rocky_terrain_02_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/_shared/rocky_terrain_02/rocky_terrain_02_nor_gl_1k.jpg"); 

            armMap.repeat.set(1, 2);
            armMap.wrapS = THREE.RepeatWrapping;
            armMap.wrapT = THREE.RepeatWrapping;

            colorMap.repeat.set(1, 2);
            colorMap.wrapS = THREE.RepeatWrapping;
            colorMap.wrapT = THREE.RepeatWrapping;

            normalMap.repeat.set(1, 2);
            normalMap.wrapS = THREE.RepeatWrapping;
            normalMap.wrapT = THREE.RepeatWrapping;

            return { alphaMap, armMap, colorMap, normalMap };

        }

        function getSidewalk2() {

            const alphaMap = textureLoader.load("../textures/_shared/_alphas/alpha.jpg");
            const armMap = textureLoader.load("../textures/_shared/rocky_terrain_02/rocky_terrain_02_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/_shared/rocky_terrain_02/rocky_terrain_02_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/_shared/rocky_terrain_02/rocky_terrain_02_nor_gl_1k.jpg"); 

            armMap.repeat.set(1, 3);
            armMap.wrapS = THREE.RepeatWrapping;
            armMap.wrapT = THREE.RepeatWrapping;

            colorMap.repeat.set(1, 3);
            colorMap.wrapS = THREE.RepeatWrapping;
            colorMap.wrapT = THREE.RepeatWrapping;

            normalMap.repeat.set(1, 3);
            normalMap.wrapS = THREE.RepeatWrapping;
            normalMap.wrapT = THREE.RepeatWrapping;

            return { alphaMap, armMap, colorMap, normalMap };

        }

        function getSidewalkCircle() {

            const alphaMap = textureLoader.load("../textures/ground/alpha.webp");
            const armMap = textureLoader.load("../textures/_shared/rocky_terrain_02/rocky_terrain_02_arm_1k.jpg");
            const colorMap = textureLoader.load("../textures/_shared/rocky_terrain_02/rocky_terrain_02_diff_1k.jpg");
            colorMap.colorSpace = THREE.SRGBColorSpace;
            const normalMap = textureLoader.load("../textures/_shared/rocky_terrain_02/rocky_terrain_02_nor_gl_1k.jpg"); 

            armMap.repeat.set(2, 2);
            armMap.wrapS = THREE.RepeatWrapping;
            armMap.wrapT = THREE.RepeatWrapping;

            colorMap.repeat.set(2, 2);
            colorMap.wrapS = THREE.RepeatWrapping;
            colorMap.wrapT = THREE.RepeatWrapping;

            normalMap.repeat.set(2, 2);
            normalMap.wrapS = THREE.RepeatWrapping;
            normalMap.wrapT = THREE.RepeatWrapping;

            return { alphaMap, armMap, colorMap, normalMap };
        }

    }
};