import * as THREE from "three";
import _LOAD from "./load.js";
import GUI from "lil-gui";

export default {
    ground: (obj) => createGround(obj),
    house1: (obj) => createHouse1(obj),
    house2: (obj) => createHouse2(obj),
    fence: (obj) => createFence(obj),
    lamp: (obj) => createLamp(obj),
    sidewalk: (obj) => createSidewalk(obj),
    ladder: (obj) => createLadder(obj),
    garden: (obj) => createGarden(obj),
    well: (obj) => createWell(obj),
    buckets: (obj) => createBuckets(obj),
    trees: (obj) => createTrees(obj),
    toilet: (obj) => createToilet(obj),
    lane: (obj) => createLane(obj),
    solidwall: (obj) => createSolidWall(obj),
    floralbow: (obj) => createFloralBow(obj),
    stones: (obj) => createStones(obj),
    bush: (obj) => createBush(obj),
    minifence: (obj) => createMiniFence(obj),
    pool: (obj) => createPool(obj),
    sandbox: (obj) => createSandbox(obj)
}

const myGUI = new GUI();

function createGround(sceneOrGroup) {
    const ground_Textures = _LOAD.getGroundTextures();
    const floorGeo = new THREE.Mesh(
        new THREE.PlaneGeometry(36, 36, 16, 16),
        new THREE.MeshStandardMaterial({
            alphaMap: ground_Textures.alphaMap,
            transparent: true,
            aoMap: ground_Textures.armMap,
            map: ground_Textures.colorMap,
            normalMap: ground_Textures.normalMap,
            roughnessMap: ground_Textures.armMap,
            metalnessMap: ground_Textures.armMap,
            displacementMap: ground_Textures.heightMap,
            displacementScale: 0.25,
            displacementBias: -0.12
        })
    );

    floorGeo.renderOrder = 1;

    myGUI.add(floorGeo.material, "displacementBias").min(-1).max(1).step(0.01);

    floorGeo.rotation.x = Math.PI * -0.50;

    sceneOrGroup.add(floorGeo);
    return floorGeo;
}

function createHouse1(sceneOrGroup) {
    const house1_Textures = _LOAD.getHouse1Textures();

    const [wallsWidth, wallsHeight, wallsDepth] = [5, 5, 5];
    const wallsGeo = new THREE.Mesh(
        new THREE.BoxGeometry(wallsWidth, wallsHeight, wallsDepth),
        new THREE.MeshStandardMaterial({ 
            /* color: 0xbbb, */
            aoMap: house1_Textures.walls.armMap,
            roughnessMap: house1_Textures.walls.armMap,
            metalnessMap: house1_Textures.walls.armMap,
            map: house1_Textures.walls.colorMap,
            normalMap: house1_Textures.walls.normalMap,
        })
    );
    wallsGeo.position.y = wallsHeight / 2;

    const [roofRadius, roofHeight, roofRadialSegments, roofHeightSegments] = [5, 2.25, 4, 1];
    const roofGeo = new THREE.Mesh(
        new THREE.ConeGeometry(roofRadius, roofHeight, roofRadialSegments, roofHeightSegments),
        new THREE.MeshStandardMaterial({
            aoMap: house1_Textures.roof.armMap,
            roughnessMap: house1_Textures.roof.armMap,
            metalnessMap: house1_Textures.roof.armMap,
            map: house1_Textures.roof.colorMap,
            normalMap: house1_Textures.roof.normalMap,
        })
    )
    roofGeo.position.y = (roofHeight / 2) + wallsHeight;
    roofGeo.rotation.y = Math.PI * 0.25;

    const [doorWidth, doorHeight, doorDepth] = [3, 3.1, 0.15];
    const doorGeo = new THREE.Mesh(
        new THREE.PlaneGeometry(doorWidth, doorHeight, 60, 60),
        new THREE.MeshStandardMaterial({ 
            /* color: "#554635", */
            alphaMap: house1_Textures.door.alphaMap,
            transparent: true,
            aoMap: house1_Textures.door.aoMap,
            map: house1_Textures.door.colorMap,
            metalnessMap: house1_Textures.door.metalnessMap,
            normalMap: house1_Textures.door.normalMap,
            roughnessMap: house1_Textures.door.roughnessMap,
            displacementMap: house1_Textures.door.heightMap,
            displacementScale: 0.2,
            displacementBias: -0.04
        })
    )
    doorGeo.position.y = (doorHeight / 2) - 0.1;
    doorGeo.position.z = wallsWidth / 2; /* wallsGeo.position.z +  wallsGeo.z / 2; */

    // Position the group across the scene
    sceneOrGroup.position.set(-5, 0, -5);

    sceneOrGroup.add(wallsGeo, roofGeo, doorGeo);
}

function createHouse2(sceneOrGroup) {
    const house2_Textures = _LOAD.getHouse2Textures();

    const [wallsWidth, wallsHeight, wallsDepth] = [6.5, 5, 4.5];
    const wallsGeo = new THREE.Mesh(
        new THREE.BoxGeometry(wallsWidth, wallsHeight, wallsDepth),
        new THREE.MeshStandardMaterial({
            /* color: "hsl(12, 50%, 65%)", */
            aoMap: house2_Textures.walls.armMap,
            roughnessMap: house2_Textures.walls.armMap,
            metalnessMap: house2_Textures.walls.armMap,
            map: house2_Textures.walls.colorMap,
            normalMap: house2_Textures.walls.normalMap
        })
    );
    wallsGeo.position.y = wallsHeight / 2;

    const [extraWallWidth, extraWallHeight, extraWallDepth] = [6.5, 5, 2.5];
    const extraWallGeo = new THREE.Mesh(
        new THREE.BoxGeometry(extraWallWidth, extraWallHeight, extraWallDepth),
        new THREE.MeshStandardMaterial({
            /* color: "hsl(52, 50%, 65%)" */
            aoMap: house2_Textures.extraWall.armMap,
            roughnessMap: house2_Textures.extraWall.armMap,
            metalnessMap: house2_Textures.extraWall.armMap,
            map: house2_Textures.extraWall.colorMap,
            normalMap: house2_Textures.extraWall.normalMap
        })
    );
    extraWallGeo.position.y = wallsHeight / 2;
    extraWallGeo.position.x = 0;
    extraWallGeo.position.z = 3.5;
    

    const [roofRadius, roofHeight, roofRadialSegments, roofHeightSegments] = [5, 2.25, 4, 1];
    const roofGeo = new THREE.Mesh(
        new THREE.ConeGeometry(roofRadius, roofHeight, roofRadialSegments, roofHeightSegments),
        new THREE.MeshStandardMaterial({ 
            /* color: "#3a3bc1" */
            aoMap: house2_Textures.roof.armMap,
            roughnessMap: house2_Textures.roof.armMap,
            metalnessMap: house2_Textures.roof.armMap,
            map: house2_Textures.roof.colorMap,
            normalMap: house2_Textures.roof.normalMap
        })
    )
    roofGeo.position.y = (roofHeight / 2) + wallsHeight;
    roofGeo.position.z = 5 / 4;
    roofGeo.rotation.y = Math.PI * 0.25;

    const [doorWidth, doorHeight, doorDepth] = [2.45, 2.9, 0.35];
    const doorGeo = new THREE.Mesh(
        new THREE.PlaneGeometry(doorWidth, doorHeight, 60, 60),
        new THREE.MeshStandardMaterial({ 
            /* color: "#298444", */
            alphaMap: house2_Textures.door.alphaMap,
            transparent: true,
            aoMap: house2_Textures.door.aoMap,
            map: house2_Textures.door.colorMap,
            metalnessMap: house2_Textures.door.metalnessMap,
            normalMap: house2_Textures.door.normalMap,
            roughnessMap: house2_Textures.door.roughnessMap,
            displacementMap: house2_Textures.door.heightMap,
            displacementScale: 0.14,
            displacementBias: 0.06
        })
    )
    doorGeo.rotation.y = Math.PI;
    doorGeo.position.y = (doorHeight / 2) - 0.1;
    doorGeo.position.x = 0;
    doorGeo.position.z = -2.15;


    const [stairsWidth, stairsMaxHeight, stairsDepth] = [0.55, 0.9, 1.8];
    const stairsAmount = 3;

    for(let stair_no = 1; stair_no <= stairsAmount; stair_no++) {
        const heightExpression = ((stairsAmount + 1) - stair_no)  * (stairsMaxHeight / stairsAmount);
        const stair = new THREE.Mesh(
            new THREE.BoxGeometry(stairsWidth, heightExpression, stairsDepth),
            new THREE.MeshStandardMaterial({ 
                /* color: "hsl(19, 40%, 30%)" */
                aoMap: house2_Textures.stairs.armMap,
                roughnessMap: house2_Textures.stairs.armMap,
                metalnessMap: house2_Textures.stairs.armMap,
                map: house2_Textures.stairs.colorMap,
                normalMap: house2_Textures.stairs.normalMap
            })
        );
        stair.position.y = heightExpression / 2;
        stair.position.x = ((wallsWidth + extraWallWidth) / 4) + (stairsWidth / 2) + (stairsWidth * (stair_no - 1));
        stair.position.z = (wallsDepth + extraWallDepth) / 2;
        sceneOrGroup.add(stair);
    }

    const [door2Width, door2Height, door2Depth] = [2.1, 2.6, 0.3];
    const door2Geo = new THREE.Mesh(
        new THREE.PlaneGeometry(door2Width, door2Height, 60, 60),
        new THREE.MeshStandardMaterial({ 
            /* color: "hsl(199, 50%, 65%)", */ 
            alphaMap: house2_Textures.door2.alphaMap,
            transparent: true,
            aoMap: house2_Textures.door2.aoMap,
            map: house2_Textures.door2.colorMap,
            metalnessMap: house2_Textures.door2.metalnessMap,
            normalMap: house2_Textures.door2.normalMap,
            roughnessMap: house2_Textures.door2.roughnessMap,
            displacementMap: house2_Textures.door2.heightMap,
            displacementScale: 0.14,
            displacementBias: 0.06
        })
    );

    door2Geo.rotation.y = Math.PI * 0.5;
    door2Geo.position.y = stairsMaxHeight + (door2Height / 2) - 0.1;
    door2Geo.position.x = (wallsWidth + extraWallWidth - door2Depth) / 4;
    door2Geo.position.z = (wallsDepth + extraWallDepth) / 2;

    // Create bulb torchlight
    const bulbTorchLight_Group = new THREE.Group();
    const [bulbRadius, bulbWidthSegments, bulbHeightSegments] = [0.25, 16, 16];
    const lightBulb = new THREE.Mesh(
        new THREE.SphereGeometry(bulbRadius, bulbWidthSegments, bulbHeightSegments),
        new THREE.MeshStandardMaterial({ 
            color: new THREE.Color("hsl(50, 75%, 75%)"),
            metalness: 0.2,
            roughness: 0.5,
            transmission: 0.2,
            ior: 1,
            thickness: 0.5
        })
    );
    const [wlhWidth, wlhHeight, wlhDepth] = [0.4, 0.15, 0.2];
    const woodenLightHolder = new THREE.Mesh(
        new THREE.BoxGeometry(wlhWidth, wlhHeight, wlhDepth),
        new THREE.MeshStandardMaterial({ 
            /* color: "hsl(25, 25%, 25%)" */
            aoMap: house2_Textures.lightBulb.armMap,
            roughnessMap: house2_Textures.lightBulb.armMap,
            metalnessMap: house2_Textures.lightBulb.armMap,
            map: house2_Textures.lightBulb.colorMap,
            normalMap: house2_Textures.lightBulb.normalMap
        })
    );
    woodenLightHolder.position.y = wlhHeight + 0.3;
    woodenLightHolder.position.x = -(wlhWidth * 0.4);

    const [lrWidth, lrHeight, lrDepth] = [0.025, 0.3, 0.025];
    const lightRope = new THREE.Mesh(
        new THREE.BoxGeometry(lrWidth, lrHeight, lrDepth),
            new THREE.MeshStandardMaterial({ 
            /* color: "hsl(25, 25%, 25%)" */
            aoMap: house2_Textures.lightBulb.armMap,
            roughnessMap: house2_Textures.lightBulb.armMap,
            metalnessMap: house2_Textures.lightBulb.armMap,
            map: house2_Textures.lightBulb.colorMap,
            normalMap: house2_Textures.lightBulb.normalMap
        })
    );
    lightRope.position.y = bulbRadius;

    bulbTorchLight_Group.position.y = 3;
    bulbTorchLight_Group.position.x = 3.6;

    bulbTorchLight_Group.add(lightBulb, woodenLightHolder, lightRope);


    // Create rectangular light appliance
    const rectangularLEDLight_Group = new THREE.Group();
    const [llWidth, llHeight, llDepth] = [0.25, 0.15, 0.6];
    const LEDLight = new THREE.Mesh(
        new THREE.BoxGeometry(llWidth, llHeight, llDepth),
        new THREE.MeshStandardMaterial({ 
            /* color: "#bbb" */
            aoMap: house2_Textures.rectangularLED.armMap,
            roughnessMap: house2_Textures.rectangularLED.armMap,
            metalnessMap: house2_Textures.rectangularLED.armMap,
            map: house2_Textures.rectangularLED.colorMap,
            normalMap: house2_Textures.rectangularLED.normalMap
        })
    );
    const [lsWidth, lsDepth, lsWidthSegments, lsDepthSegments] = [0.25, 0.6, 4, 4];
    const lightSource = new THREE.Mesh(
        new THREE.PlaneGeometry(lsWidth, lsDepth, lsWidthSegments, lsDepthSegments),
        new THREE.MeshStandardMaterial({ color: "#fff" })
    );
    lightSource.rotation.x = Math.PI * 0.5;
    lightSource.position.y = -0.01 - (llHeight / 2);

    const [msWidth, msHeight, msDepth] = [0.025, 0.45, 0.025];
    const metalStringConfig = [
        {zPos: -llDepth * 0.4},
        {zPos: llDepth * 0.4}
    ];

    for(let metalString_no = 0; metalString_no < metalStringConfig.length; metalString_no++) {
        const metalString = new THREE.Mesh(
            new THREE.BoxGeometry(msWidth, msHeight, msDepth),
            new THREE.MeshStandardMaterial({ 
                /* color: "#bbb" */
                aoMap: house2_Textures.rectangularLED.armMap,
                roughnessMap: house2_Textures.rectangularLED.armMap,
                metalnessMap: house2_Textures.rectangularLED.armMap,
                map: house2_Textures.rectangularLED.colorMap,
                normalMap: house2_Textures.rectangularLED.normalMap
            })
        );
        metalString.position.z = metalStringConfig[metalString_no].zPos;
        metalString.position.x = llWidth / 2;
        metalString.position.y = msHeight / 2;
        metalString.rotation.z = Math.PI * 0.75;
        rectangularLEDLight_Group.add(metalString);
    }

    rectangularLEDLight_Group.add(LEDLight, lightSource);
    rectangularLEDLight_Group.position.x = -3.5;
    rectangularLEDLight_Group.position.z = 1.75;
    rectangularLEDLight_Group.position.y = 3.25;

    // Position the group across the scene
    sceneOrGroup.rotation.y = Math.PI * 0.5
    sceneOrGroup.position.set(7, 0, 7);

    sceneOrGroup.add(wallsGeo, extraWallGeo, roofGeo, doorGeo, door2Geo, bulbTorchLight_Group, rectangularLEDLight_Group);
}

function createFence(sceneOrGroup) {
    const fence_Textures = _LOAD.getFenceTextures();

    const [base_x_pos, base_z_pos] = [1.5, 3];
    const [fcWidth, fcHeight, fcDepth] = [0.55, 1.15, 0.25];
    const [fence_sides, fence_row_size] = [4, 10];
    const fenceSpacing = 0.3;
    const fenceItemsCount = 36;

    const fenceMaterial = new THREE.MeshStandardMaterial({ 
        aoMap: fence_Textures.armMap,
        roughnessMap: fence_Textures.armMap,
        metalnessMap: fence_Textures.armMap,
        map: fence_Textures.colorMap,
        normalMap: fence_Textures.normalMap
    });

    for(let i=0; i<fenceItemsCount; i++) {
        const fenceGroup = new THREE.Group();
        const fenceComponent = new THREE.Mesh(
            new THREE.BoxGeometry(fcWidth, fcHeight, fcDepth),
            fenceMaterial
        );
        const fenceHorizontalPart1 = new THREE.Mesh(
            new THREE.BoxGeometry(fenceSpacing, fcHeight / 4, fcDepth),
            fenceMaterial
        );
        const fenceHorizontalPart2 = new THREE.Mesh(
            new THREE.BoxGeometry(fenceSpacing, fcHeight / 4, fcDepth),
            fenceMaterial
        );

        fenceComponent.position.y = fcHeight / 2;
        fenceHorizontalPart1.position.y = (fcHeight / 4);
        fenceHorizontalPart1.position.x = fenceGroup.position.x + (fcWidth / 2) + (fenceSpacing / 2);
        fenceHorizontalPart2.position.y = (fcHeight / 1.5);
        fenceHorizontalPart2.position.x = fenceGroup.position.x + (fcWidth / 2) + (fenceSpacing / 2);

        fenceGroup.add(fenceComponent, fenceHorizontalPart1, fenceHorizontalPart2);

        if(i < fenceItemsCount * 0.25) { fenceGroup.position.x = (i % 9) * (fcWidth + fenceSpacing); }
        else if(i < fenceItemsCount * 0.50) { 
            fenceGroup.position.z = ((i % 9) * -(fcWidth + fenceSpacing)) - (fcWidth + fenceSpacing - fcDepth / 2);
            fenceGroup.position.x = -fcWidth / 2 + fenceSpacing / 2;
            fenceGroup.rotation.y = Math.PI * 1.5;
        }
        else if(i < fenceItemsCount * 0.75) {
            fenceGroup.position.x = (i % 9) * (fcWidth + fenceSpacing);
            fenceGroup.position.z = -9 * (fcWidth + fenceSpacing);
        }
        else if(i < fenceItemsCount) {
            fenceGroup.position.z = ((i % 9) * -(fcWidth + fenceSpacing)) - (fcWidth + fenceSpacing - fcDepth / 2);
            fenceGroup.position.x = 9 * (fcWidth + fenceSpacing) - (fenceSpacing / 2);
            fenceGroup.rotation.y = Math.PI * 1.5;

            if(i === Math.floor(fenceItemsCount * 0.75)) {
                fenceHorizontalPart1.scale.x = 2;
                fenceHorizontalPart1.position.x = fenceHorizontalPart1.position.x + (fenceSpacing / 2);
                fenceHorizontalPart2.scale.x = 2;
                fenceHorizontalPart2.position.x = fenceHorizontalPart2.position.x + (fenceSpacing / 2);
            }
        }
        

        sceneOrGroup.add(fenceGroup);
    }
    
    sceneOrGroup.position.set(base_x_pos, 0, base_z_pos);
}

function createLamp(sceneOrGroup) {
    const lamp_Textures = _LOAD.getLampTextures();

    const [baseRadiusTop, baseRadiusBottom, baseHeight, baseRadialSegments, baseHeightSegments] = [0.175, 1, 0.75, 16, 4]
    const base = new THREE.Mesh(
        new THREE.CylinderGeometry(baseRadiusTop, baseRadiusBottom, baseHeight, baseRadialSegments, baseHeightSegments),
        new THREE.MeshStandardMaterial({ 
            aoMap: lamp_Textures.base.armMap,
            roughnessMap: lamp_Textures.base.armMap,
            metalnessMap: lamp_Textures.base.armMap,
            map: lamp_Textures.base.colorMap,
            normalMap: lamp_Textures.base.normalMap
        })
    );
    base.position.y = baseHeight / 2;


    const [poleRadiusTop, poleRadiusBottom, poleHeight, poleRadialSegments, poleHeightSegments] = [0.175, 0.175, 4, 8, 1]
    const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(poleRadiusTop, poleRadiusBottom, poleHeight, poleRadialSegments, poleHeightSegments),
        new THREE.MeshStandardMaterial({ 
            aoMap: lamp_Textures.pole.armMap,
            roughnessMap: lamp_Textures.pole.armMap,
            metalnessMap: lamp_Textures.pole.armMap,
            map: lamp_Textures.pole.colorMap,
            normalMap: lamp_Textures.pole.normalMap
        })
    );
    pole.position.y = (poleHeight / 2) + baseHeight;


    const [lbRadius, lbWidthSegments, lbHeightSegments] = [0.75, 64, 64];
    const lightBulb = new THREE.Mesh(
        new THREE.SphereGeometry(lbRadius, lbWidthSegments, lbHeightSegments),
        new THREE.MeshPhysicalMaterial({ 
            color: new THREE.Color("#eeeeee"),
            metalness: 0.4,
            roughness: 0.8,
            transmission: 0.2,
            ior: 1,
            thickness: 0.5
        })
    );
    lightBulb.position.y = (lbRadius / 2) + baseHeight + poleHeight;
        
    sceneOrGroup.add(base, pole, lightBulb);
    sceneOrGroup.position.set(-10, 0, 10);
}

function createSidewalk(sceneOrGroup) {
    const sidewalk_Textures = _LOAD.getSideWalkTextures();

    const [ swWidth, swHeight, swWidthSegments, swHeightSegments ] = [3, 7, 8, 8];
    const sidewalk1 = new THREE.Mesh(
        new THREE.PlaneGeometry(swWidth, swHeight, swWidthSegments, swHeightSegments),
        new THREE.MeshStandardMaterial({ 
            /* color: "hsl(144, 30%, 60%)", */
            transparent: true,
            alphaMap: sidewalk_Textures.sidewalk1.alphaMap,
            aoMap: sidewalk_Textures.sidewalk1.armMap,
            roughnessMap: sidewalk_Textures.sidewalk1.armMap,
            metalnessMap: sidewalk_Textures.sidewalk1.armMap,
            map: sidewalk_Textures.sidewalk1.colorMap,
            normalMap: sidewalk_Textures.sidewalk1.normalMap
        })
    );
    sidewalk1.renderOrder = 2;
    sidewalk1.position.y = 0.02;
    sidewalk1.rotation.x = Math.PI * 1.5;


    const [ sw2Width, sw2Height, sw2WidthSegments, sw2HeightSegments ] = [2.5, 8, 8, 8];
    const sidewalk2 = new THREE.Mesh(
        new THREE.PlaneGeometry(sw2Width, sw2Height, sw2WidthSegments, sw2HeightSegments),
        new THREE.MeshStandardMaterial({ 
            /* color: "hsl(102, 60%, 60%)", */
            transparent: true,
            alphaMap: sidewalk_Textures.sidewalk2.alphaMap,
            aoMap: sidewalk_Textures.sidewalk2.armMap,
            roughnessMap: sidewalk_Textures.sidewalk2.armMap,
            metalnessMap: sidewalk_Textures.sidewalk2.armMap,
            map: sidewalk_Textures.sidewalk2.colorMap,
            normalMap: sidewalk_Textures.sidewalk2.normalMap
        })
    );
    sidewalk2.renderOrder = 2;
    sidewalk2.position.y = 0.03;
    sidewalk2.position.z = 6;
    sidewalk2.position.x = 6;
    sidewalk2.rotation.x = Math.PI * 1.5;
    sidewalk2.rotation.z = Math.PI * 0.5;

    const [swcRadius, swcSegments, swcThetaStart, swcThetaLength] = [2.4, 32, 0, Math.PI * 2];
    const sidewalkCircle = new THREE.Mesh(
        new THREE.CircleGeometry(swcRadius, swcSegments, swcThetaStart, swcThetaLength),
        new THREE.MeshStandardMaterial({ 
            transparent: true,
            alphaMap: sidewalk_Textures.sidewalk2.alphaMap,
            aoMap: sidewalk_Textures.sidewalk2.armMap,
            roughnessMap: sidewalk_Textures.sidewalk2.armMap,
            metalnessMap: sidewalk_Textures.sidewalk2.armMap,
            map: sidewalk_Textures.sidewalk2.colorMap,
            normalMap: sidewalk_Textures.sidewalk2.normalMap
        })
    );
    sidewalkCircle.renderOrder = 2;
    sidewalkCircle.rotation.x = Math.PI * 1.5;
    sidewalkCircle.position.y = 0.01;
    sidewalkCircle.position.z = (swHeight / 2) + swcRadius * 0.75;

    sceneOrGroup.add(sidewalk1, sidewalk2, sidewalkCircle);
    sceneOrGroup.position.set(-5, 0, 1);
}

function createLadder(sceneOrGroup) {
    const ladder_Textures = _LOAD.getLadderTextures();

    const [ladderSideWidth, ladderSideHeight, ladderSideDepth] = [0.35, 4, 0.25];
    const [ladderStepWidth, ladderStepHeight, ladderStepDepth] = [1, 0.2, 0.25];

    const ladderSideL = new THREE.Mesh(
        new THREE.BoxGeometry(ladderSideWidth, ladderSideHeight, ladderSideDepth),
        new THREE.MeshStandardMaterial({
            aoMap: ladder_Textures.sides.armMap,
            roughnessMap: ladder_Textures.sides.armMap,
            metalnessMap: ladder_Textures.sides.armMap,
            map: ladder_Textures.sides.colorMap,
            normalMap: ladder_Textures.sides.normalMap,
        })
    );
    ladderSideL.position.z = -0.5;

    const ladderSideR = new THREE.Mesh(
        new THREE.BoxGeometry(ladderSideWidth, ladderSideHeight, ladderSideDepth),
        new THREE.MeshStandardMaterial({
            aoMap: ladder_Textures.sides.armMap,
            roughnessMap: ladder_Textures.sides.armMap,
            metalnessMap: ladder_Textures.sides.armMap,
            map: ladder_Textures.sides.colorMap,
            normalMap: ladder_Textures.sides.normalMap,
        })
    );
    ladderSideR.position.z = 0.5;

    for(let ladder_step_no = 1; ladder_step_no <= 6; ladder_step_no++) {
        const ladderStep = new THREE.Mesh(
            new THREE.BoxGeometry(ladderStepWidth, ladderStepHeight, ladderStepDepth),
            new THREE.MeshStandardMaterial({
                aoMap: ladder_Textures.steps.armMap,
                roughnessMap: ladder_Textures.steps.armMap,
                metalnessMap: ladder_Textures.steps.armMap,
                map: ladder_Textures.steps.colorMap,
                normalMap: ladder_Textures.steps.normalMap,
            })
        )
        ladderStep.position.y = (-ladderSideHeight / 2) + (0.55 * ladder_step_no);
        ladderStep.rotation.y = Math.PI * 0.5;
        sceneOrGroup.add(ladderStep);
    }

    sceneOrGroup.add(ladderSideL, ladderSideR);
    sceneOrGroup.rotation.set(0, 0, Math.PI * 0.9);
    sceneOrGroup.position.set(-8.3, (ladderSideHeight / 2) - 0.1, -5.5);
}

function createGarden(sceneOrGroup) {
    const garden_Textures = _LOAD.getGardenTextures();

    const plantsConfigObj = [
        { xPos: 2.75, zPos: 2, color: "hsl(133, 90%, 70%)" },
        { xPos: 2.75, zPos: 0.5, color: "hsl(3, 90%, 70%)" },
        { xPos: 2.75, zPos: -1, color: "hsl(21, 90%, 70%)" },
        { xPos: 2.75, zPos: -2.5, color: "hsl(50, 90%, 70%)" },
        { xPos: 1.5, zPos: 1.125, color: "hsl(50, 90%, 70%)" },
        { xPos: 1.5, zPos: -0.25, color: "hsl(133, 90%, 70%)" },
        { xPos: 1.5, zPos: -1.75, color: "hsl(21, 90%, 70%)" },
        /* */
        { xPos: -2.75, zPos: 2, color: "hsl(133, 90%, 70%)" },
        { xPos: -2.75, zPos: 0.5, color: "hsl(33, 90%, 70%)" },
        { xPos: -2.75, zPos: -1, color: "hsl(3, 90%, 70%)" },
        { xPos: -2.75, zPos: -2.5, color: "hsl(50, 90%, 70%)" },
        { xPos: -1.5, zPos: 1.125, color: "hsl(3, 90%, 70%)" },
        { xPos: -1.5, zPos: -0.25, color: "hsl(50, 90%, 70%)" },
        { xPos: -1.5, zPos: -1.75, color: "hsl(133, 90%, 70%)" },
    ];

    const [gdWidth, gdHeight, gdDepth] = [1.4, 0.5, 7.4];

    const gardenDivider = new THREE.Mesh(
        new THREE.BoxGeometry(gdWidth, gdHeight, gdDepth),
        new THREE.MeshStandardMaterial({ 
            /* color: 'hsl(19, 30%, 30%)', */
            aoMap: garden_Textures.divider.armMap,
            roughnessMap: garden_Textures.divider.armMap,
            metalnessMap: garden_Textures.divider.armMap,
            map: garden_Textures.divider.colorMap,
            normalMap: garden_Textures.divider.normalMap
        })
    );
    gardenDivider.position.y = gdHeight / 2;


    const [gfWidth, gfHeight, gfWidthSegments, gfHeightSegments] = [7.4, 7.4, 8, 8];

    const gardenFloor = new THREE.Mesh(
        new THREE.PlaneGeometry(gfWidth, gfHeight, gfWidthSegments, gfHeightSegments),
        new THREE.MeshStandardMaterial({ 
            /* color: new THREE.Color('hsl(19, 20%, 20%)'), */
            aoMap: garden_Textures.ground.armMap,
            roughnessMap: garden_Textures.ground.armMap,
            metalnessMap: garden_Textures.ground.armMap,
            map: garden_Textures.ground.colorMap,
            normalMap: garden_Textures.ground.normalMap
        })
    );
    gardenFloor.rotation.x = Math.PI * -0.50;
    gardenFloor.position.y = 0.01;


    const [plantRadius, plantWidthSegments, plantHeightSegments, plantPhiStart, plantPhiLength] = [0.15, 4, 4, 0, Math.PI];

    for(let plantNo=0; plantNo < plantsConfigObj.length; plantNo++) {
        const radius_random = (Math.random() * 0.20) + 0.15;
        const segments_random = Math.floor(Math.random() * 4) + 1;
        const gardenPlant = new THREE.Mesh(
            new THREE.SphereGeometry(radius_random, segments_random, segments_random, plantPhiStart, plantPhiLength),
            new THREE.MeshStandardMaterial({ 
                color: new THREE.Color(plantsConfigObj[plantNo].color),
                aoMap: garden_Textures.plants.aoMap,
                roughnessMap: garden_Textures.plants.roughMap,
                map: garden_Textures.plants.colorMap,
                normalMap: garden_Textures.plants.normalMap
            })
        );
        /* gardenPlant.position.y = plantRadius / 2; */
        gardenPlant.rotation.x = Math.PI * 1.5;
        gardenPlant.position.x = plantsConfigObj[plantNo].xPos;
        gardenPlant.position.z = plantsConfigObj[plantNo].zPos;
        sceneOrGroup.add(gardenPlant);
    }

    sceneOrGroup.add(gardenDivider, gardenFloor);
    sceneOrGroup.position.set(5.2, 0, -0.84);
}

function createWell(sceneOrGroup) {
    const well_Textures = _LOAD.getWellTextures();

    const [wellRadiusTop, wellRadiusBottom, wellHeight, wellRadialSegments, wellHeightSegments] = [2.1, 2.1, 1.65, 32, 4];

    const wellBase = new THREE.Mesh(
        new THREE.CylinderGeometry(wellRadiusTop, wellRadiusBottom, wellHeight, wellRadialSegments, wellHeightSegments),
        new THREE.MeshStandardMaterial({ 
            color: "#ddd",
            transparent: true,
            aoMap: well_Textures.armMap,
            roughnessMap: well_Textures.armMap,
            metalnessMap: well_Textures.armMap,
            map: well_Textures.colorMap,
            normalMap: well_Textures.normalMap
        })
    );
    wellBase.position.y = wellHeight / 2;

    
    const [holeRadius, holeSegments] = [1.15, 32];

    const hole = new THREE.Mesh(
        new THREE.CircleGeometry(holeRadius, holeSegments),
        new THREE.MeshBasicMaterial({ color: "#000" })
    );
    hole.rotation.x = Math.PI * 1.5;
    hole.position.y = (wellHeight) + 0.01;


    const [wcoverRadiusTop, wcoverRadiusBottom, wcoverHeight, wcoverRadialSegments, wcoverHeightSegments] = [1.2, 1.2, 0.65, 32, 4];

    const wellCover = new THREE.Mesh(
        new THREE.CylinderGeometry(wcoverRadiusTop, wcoverRadiusBottom, wcoverHeight, wcoverRadialSegments, wcoverHeightSegments),
        new THREE.MeshStandardMaterial({
            color: "#eee",
            transparent: true,
            aoMap: well_Textures.armMap,
            roughnessMap: well_Textures.armMap,
            metalnessMap: well_Textures.armMap,
            map: well_Textures.colorMap,
            normalMap: well_Textures.normalMap
        })
    )
    wellCover.rotation.y = Math.PI;
    wellCover.position.y = wellHeight;
    wellCover.position.x = 0.2;
    wellCover.position.z = 0.2;


    sceneOrGroup.add(wellBase, hole, wellCover);
    sceneOrGroup.position.set(-5.2, 0, 6.6);
}


function createBuckets(sceneOrGroup) {
    const buckets_Textures = _LOAD.getBucketsTextures();

    const [bucketLG_RadiusTop, bucketLG_RadiusBottom, bucketLG_Height, bucketLG_RadialSegments, bucketLG_HeightSegments, bucketLG_isOpenEnded, bucketLG_thetaStart, bucketLG_thetaLength] = [0.4, 0.4, 0.75, 12, 3, false, 0, Math.PI * 2];
    const [ringRadius, ringRadialSegments] = [0.4, 16];

    const bucketsConfig = [
        { size: 1, xPosDiff: 0, zPosDiff: 0, yRotate: 0, ringTube: 0.0125},
        { size: 1.5, xPosDiff: -0.6, zPosDiff: 1.25, yRotate: Math.PI * 1.15, ringTube: 0.0225},
        { size: 1, xPosDiff: 0, zPosDiff: 2.5, yRotate: Math.PI * 0.4, ringTube: 0.0175}
    ];

    const metalRingMaterial = new THREE.MeshStandardMaterial({ 
        color: "#aaa",
        transparent: true,
        /* aoMap: buckets_Textures.metalicPart.armMap, */
        roughnessMap: buckets_Textures.metalicPart.roughMap,
        metalnessMap: buckets_Textures.metalicPart.metalMap,
        map: buckets_Textures.metalicPart.colorMap,
        normalMap: buckets_Textures.metalicPart.normalMap
    });

    for(let bucketNo = 0; bucketNo < bucketsConfig.length; bucketNo++) {
        
        const bucket = new THREE.Mesh(
            new THREE.CylinderGeometry(bucketLG_RadiusTop, bucketLG_RadiusBottom, bucketLG_Height, bucketLG_RadialSegments, bucketLG_HeightSegments, bucketLG_isOpenEnded, bucketLG_thetaStart, bucketLG_thetaLength),
            new THREE.MeshStandardMaterial({
                /*  transparent: true, 
                color: "hsl(21, 42%, 35%)", */
                aoMap: buckets_Textures.woodenPart.armMap,
                roughnessMap: buckets_Textures.woodenPart.armMap,
                metalnessMap: buckets_Textures.woodenPart.armMap,
                map: buckets_Textures.woodenPart.colorMap,
                normalMap: buckets_Textures.woodenPart.normalMap
            })
        );
        bucket.position.y = bucketLG_Height / 2;

        
    
        const metalRing1 = new THREE.Mesh(
            new THREE.TorusGeometry(ringRadius, bucketsConfig[bucketNo].ringTube, ringRadialSegments),
            metalRingMaterial
        );
        metalRing1.rotation.x = Math.PI * 0.5;
        metalRing1.position.y = bucketLG_Height * 0.75;

        const metalRing2 = new THREE.Mesh(
            new THREE.TorusGeometry(ringRadius, bucketsConfig[bucketNo].ringTube, ringRadialSegments),
            metalRingMaterial
        )
        metalRing2.rotation.x = Math.PI * 0.5;
        metalRing2.position.y = bucketLG_Height * 0.25;
    
        const bucketGroup = new THREE.Group();
        bucketGroup.add(bucket, metalRing1, metalRing2);
        bucketGroup.position.x = bucketsConfig[bucketNo].xPosDiff;
        bucketGroup.position.z = bucketsConfig[bucketNo].zPosDiff;
        bucketGroup.rotation.y = bucketsConfig[bucketNo].yRotate;
        bucketGroup.scale.setScalar(bucketsConfig[bucketNo].size);

        sceneOrGroup.add(bucketGroup);
    }
    
    sceneOrGroup.position.set(-8.2, 0, 5.6);
}

async function createTrees(sceneOrGroup) {
    const trees_Textures = _LOAD.getTreesTextures();

    const [trunk_RadiusTop, trunk_RadiusBottom, trunk_Height, trunk_RadialSegments, trunk_HeightSegments] = [0.6, 0.6, 2.25, 32, 2];
    const [leaves_radius, leaves_height, leaves_radialSegments, leaves_heightSegments] = [2.3, 5, 32, 4];

    const treesConfig = [
        {scale: 1, zPos: 0, repeatStrength: 5, yRotate: 0},
        {scale: 0.56, zPos: -4.5, repeatStrength: 2, yRotate: Math.PI * 0.75},
        {scale: 0.33, zPos: -7.8, repeatStrength: 1, yRotate: Math.PI * 1.25}
    ];


    for(let tree_no = 0; tree_no < treesConfig.length; tree_no++) {
        const treeTrunk = new THREE.Mesh(
            new THREE.CylinderGeometry(trunk_RadiusTop, trunk_RadiusBottom, trunk_Height, trunk_RadialSegments, trunk_HeightSegments),
            new THREE.MeshStandardMaterial({ 
                /* color: "hsl(21, 20%, 25%)", */
                aoMap: trees_Textures.trunk.armMap,
                roughnessMap: trees_Textures.trunk.armMap,
                metalnessMap: trees_Textures.trunk.armMap,
                map: trees_Textures.trunk.colorMap,
                normalMap: trees_Textures.trunk.normalMap
            })
        );
        treeTrunk.position.y = (trunk_Height * treesConfig[tree_no].scale) / 2;


        const [armLeavesT, colorLeavesT, normalLeavesT]  = [await trees_Textures.leaves.dynamicLoaders.arm(), await trees_Textures.leaves.dynamicLoaders.color(), await trees_Textures.leaves.dynamicLoaders.normal()];
        armLeavesT.repeat.set(treesConfig[tree_no].repeatStrength, treesConfig[tree_no].repeatStrength);
        colorLeavesT.repeat.set(treesConfig[tree_no].repeatStrength, treesConfig[tree_no].repeatStrength);
        normalLeavesT.repeat.set(treesConfig[tree_no].repeatStrength, treesConfig[tree_no].repeatStrength);

        const treeLeaves = new THREE.Mesh(
            new THREE.ConeGeometry(leaves_radius, leaves_height, leaves_radialSegments, leaves_heightSegments),
            new THREE.MeshStandardMaterial({ 
                /* color: "hsl(127, 20%, 25%)", */
                aoMap: armLeavesT,
                roughnessMap: armLeavesT,
                metalnessMap: armLeavesT,
                map: colorLeavesT,
                normalMap: normalLeavesT,
            })
        );
        treeLeaves.position.y = ((trunk_Height) + (leaves_height / 2)) * treesConfig[tree_no].scale;
        
        treeTrunk.position.z = treesConfig[tree_no].zPos;
        treeLeaves.position.z = treesConfig[tree_no].zPos;
        treeTrunk.scale.setScalar(treesConfig[tree_no].scale);
        treeLeaves.scale.setScalar(treesConfig[tree_no].scale);
        treeTrunk.rotation.y = treesConfig[tree_no].yRotate;
        treeLeaves.rotation.y = treesConfig[tree_no].yRotate;

        sceneOrGroup.add(treeTrunk, treeLeaves);
    }

    sceneOrGroup.position.set(-1, 0, 3);
}

function createToilet(sceneOrGroup) {
    const toilet_Textures = _LOAD.getToiletTextures();

    const [toilet_Width, toilet_Height, toilet_Depth] = [2.6, 3.8, 2.6];
    const toiletBuilding = new THREE.Mesh(
        new THREE.BoxGeometry(toilet_Width, toilet_Height, toilet_Depth),
        new THREE.MeshStandardMaterial({ 
            /* color: "hsl(32, 40%, 20%)", */
            aoMap: toilet_Textures.building.armMap,
            roughnessMap: toilet_Textures.building.armMap,
            metalnessMap: toilet_Textures.building.armMap,
            map: toilet_Textures.building.colorMap,
            normalMap: toilet_Textures.building.normalMap
        })
    );
    toiletBuilding.position.y = toilet_Height / 2;


    const [roof_Width, roof_Height, roof_Depth] = [2.8, 0.6, 3.2]; 
    const toiletRoof = new THREE.Mesh(
        new THREE.BoxGeometry(roof_Width, roof_Height, roof_Depth),
        new THREE.MeshStandardMaterial({ 
            /* color: "hsl(32, 30%, 30%)", */
            aoMap: toilet_Textures.roof.armMap,
            roughnessMap: toilet_Textures.roof.armMap,
            metalnessMap: toilet_Textures.roof.armMap,
            map: toilet_Textures.roof.colorMap,
            normalMap: toilet_Textures.roof.normalMap
        })
    );
    toiletRoof.position.y = toilet_Height + (roof_Height / 2);
    toiletRoof.position.z = (roof_Depth - roof_Width) / 2;


    const [doorWidth, doorHeight, doorDepth] = [2, 2.7, 0.25];
    const toiletDoor = new THREE.Mesh(
        new THREE.PlaneGeometry(doorWidth, doorHeight, 60, 60),
        new THREE.MeshStandardMaterial({ 
            /* color: "hsl(27, 40%, 25%)", */
            alphaMap: toilet_Textures.door.alphaMap,
            transparent: true,
            aoMap: toilet_Textures.door.aoMap,
            map: toilet_Textures.door.colorMap,
            metalnessMap: toilet_Textures.door.metalnessMap,
            normalMap: toilet_Textures.door.normalMap,
            roughnessMap: toilet_Textures.door.roughnessMap,
            displacementMap: toilet_Textures.door.heightMap,
            displacementScale: 0.2,
            displacementBias: 0.04
        })
    );
    toiletDoor.position.y = (doorHeight / 2) + 0.01;
    toiletDoor.position.z = (toilet_Depth / 2) - 0.1;

    sceneOrGroup.add(toiletBuilding, toiletRoof, toiletDoor);
    sceneOrGroup.rotation.x = Math.PI * 0.05;
    sceneOrGroup.position.set(10.5, -0.1, -9.75);

}


function createLane(sceneOrGroup) {
    const lane_Textures = _LOAD.getLaneTextures();

    const [laneWidth, laneHeight, laneWidthSegments, laneHeightSegments] = [2, 12.5, 4, 4];
    const lane = new THREE.Mesh(
        new THREE.PlaneGeometry(laneWidth, laneHeight, laneWidthSegments, laneHeightSegments),
        new THREE.MeshStandardMaterial({ 
            /* color: "hsl(44, 60%, 60%)", */
            transparent: true,
            alphaMap: lane_Textures.alphaMap,
            aoMap: lane_Textures.armMap,
            roughnessMap: lane_Textures.armMap,
            metalnessMap: lane_Textures.armMap,
            map: lane_Textures.colorMap,
            normalMap: lane_Textures.normalMap
        })
    );
    lane.renderOrder = 2;
    lane.position.y = -0.05;
    lane.rotation.x = Math.PI * 1.5;    

    sceneOrGroup.add(lane);
    sceneOrGroup.position.set(10.5, 0, -2.5);
}


function createSolidWall(sceneOrGroup) {
    const solidWall_Textures = _LOAD.getSolidWallTextures();

    const [swHeight, swDepth] = [2.75, 1.4];

    const solidWallConfig = [
        {swWidth: 12, xPos: 0, zPos: 0, yRotate: 0},
        {swWidth: 7, xPos: -5.3, zPos: 4.2, yRotate: 0.5}
    ]

    for(let wallNo = 0; wallNo < solidWallConfig.length; wallNo++) {
        const solidWall = new THREE.Mesh(
            new THREE.BoxGeometry(solidWallConfig[wallNo].swWidth, swHeight, swDepth),
            new THREE.MeshStandardMaterial({ 
                /* color: "#666", */
                aoMap: solidWall_Textures.armMap,
                map: solidWall_Textures.colorMap,
                normalMap: solidWall_Textures.normalMap,
                roughnessMap: solidWall_Textures.armMap,
                metalnessMap: solidWall_Textures.armMap,
            })
        );
        solidWall.position.y = swHeight / 2;
        solidWall.position.x = solidWallConfig[wallNo].xPos;
        solidWall.position.z = solidWallConfig[wallNo].zPos;
        solidWall.rotation.y = Math.PI * solidWallConfig[wallNo].yRotate;

        sceneOrGroup.add(solidWall);
    }

    sceneOrGroup.position.set(-6, 0, -11);
}


function createStones(sceneOrGroup) {
    const stones_Textures = _LOAD.getStonesTextures();

    const [stoneWidthSegments, stoneHeightSegments, stonePhiStart, stonePhiLength, stoneThetaStart, stoneThetaLength] = [16, 8, 0, Math.PI * 2, 0, Math.PI * 0.5];
    const stonesConfig = [
        {size: 0.7, xPos: 0.75, zPos: 0.5, yRotate: Math.PI * 1.1},
        {size: 0.35, xPos: 0.05, zPos: 0.05, yRotate: 1.6},
        {size: 0.5, xPos: 0.55, zPos: -0.6, yRotate: Math.PI * 0}
    ];

    for(let stone_no = 0; stone_no < stonesConfig.length; stone_no++) {
        const stone = new THREE.Mesh(
            new THREE.SphereGeometry(stonesConfig[stone_no].size, stoneWidthSegments, stoneHeightSegments, stonePhiStart, stonePhiLength, stoneThetaStart, stoneThetaLength),
            new THREE.MeshStandardMaterial({ 
                /* color: "#888",  */
                aoMap: stones_Textures.armMap,
                roughnessMap: stones_Textures.armMap,
                metalnessMap: stones_Textures.armMap,
                map: stones_Textures.colorMap,
                normalMap: stones_Textures.normalMap
            })
        );
        stone.position.x = stonesConfig[stone_no].xPos;
        stone.position.z = stonesConfig[stone_no].zPos;
        stone.rotation.y = stonesConfig[stone_no].yRotate;
        sceneOrGroup.add(stone);
    }

    sceneOrGroup.position.set(3.75, 0, 4.75);
}

function createBush(sceneOrGroup) {
    const bush_Textures = _LOAD.getBushTextures();

    const [bushRadius, bushHeight, bushCapSegments, bushRadialSegments, bushHeightSegments] = [1.1, 0.75, 8, 16, 4];
    const bush = new THREE.Mesh(
        new THREE.CapsuleGeometry(bushRadius, bushHeight, bushCapSegments, bushRadialSegments, bushHeightSegments),
        new THREE.MeshStandardMaterial({ 
            /* color: "hsl(128, 50%, 60%)", */
            aoMap: bush_Textures.aoMap,
            roughnessMap: bush_Textures.roughMap,
            map: bush_Textures.colorMap,
            normalMap: bush_Textures.normalMap
        })
    );
    bush.position.y = bushHeight / 2;
    
    sceneOrGroup.add(bush);
    sceneOrGroup.position.set(3.75, 0, 9.25)
}

function createMiniFence(sceneOrGroup) {
    const minifence_Textures = _LOAD.getMinifenceTextures();

    const [fsRadiusTop, fsRadiusBottom, fsHeight, fsRadialSegments, fsHeightSegments] = [0.25, 0.25, 1.4, 16, 4];
    const [fSegment_width, fSegment_height, fSegment_depth] = [2, 0.3, 0.5];
    const fenceSticksConfig = [
        {xPos: 0},
        {xPos: -2},
        {xPos: -4}
    ];

    for(let fenceStick_no = 0; fenceStick_no < fenceSticksConfig.length; fenceStick_no++) {
        const fenceGroup = new THREE.Group();
        const fenceStick = new THREE.Mesh(
            new THREE.CylinderGeometry(fsRadiusTop, fsRadiusBottom, fsHeight, fsRadialSegments, fsHeightSegments),
            new THREE.MeshStandardMaterial({ 
                /* color: "hsl(19, 25%, 20%)" */
                aoMap: minifence_Textures.armMap,
                roughnessMap: minifence_Textures.armMap,
                metalnessMap: minifence_Textures.armMap,
                map: minifence_Textures.colorMap,
                normalMap: minifence_Textures.normalMap
            })
        );
        const fenceSegment = new THREE.Mesh(
            new THREE.BoxGeometry(fSegment_width, fSegment_height, fSegment_depth),
            new THREE.MeshStandardMaterial({ 
                /* color: "hsl(19, 25%, 20%)" */
                aoMap: minifence_Textures.armMap,
                roughnessMap: minifence_Textures.armMap,
                metalnessMap: minifence_Textures.armMap,
                map: minifence_Textures.colorMap,
                normalMap: minifence_Textures.normalMap
            })
        );
        fenceSegment.position.y = fsHeight / 2;

        fenceGroup.add(fenceStick, fenceSegment);

        fenceGroup.position.y = fsHeight / 2;
        fenceGroup.position.x = fenceSticksConfig[fenceStick_no].xPos;

        sceneOrGroup.add(fenceGroup);
    }
    sceneOrGroup.position.set(1.25, 0, 8.75);
}

function createPool(sceneOrGroup) {
    const pool_Textures = _LOAD.getPoolTextures();

    const [poolRadius, poolTube, poolRadialSegments, poolTabularSegments, poolArc] = [2.5, 0.4, 12, 36, Math.PI * 2];
    const pool = new THREE.Mesh(
        new THREE.TorusGeometry(poolRadius, poolTube, poolRadialSegments, poolTabularSegments, poolArc),
        new THREE.MeshStandardMaterial({ 
            /* color: "hsl(49, 70%, 70%)" */
            aoMap: pool_Textures.cover.armMap,
            roughnessMap: pool_Textures.cover.armMap,
            metalnessMap: pool_Textures.cover.armMap,
            map: pool_Textures.cover.colorMap,
            normalMap: pool_Textures.cover.normalMap
        })
    );
    pool.position.y = poolTube;
    pool.rotation.x = Math.PI * 0.5;

    const [pbRadius, pbSegments, pbThetaStart, pbThetaLength] = [poolRadius, 16, 0, Math.PI * 2];
    const poolBase = new THREE.Mesh(
        new THREE.CircleGeometry(pbRadius, pbSegments, pbThetaStart, pbThetaLength),
        new THREE.MeshBasicMaterial({
            color: "#335041"
        })
    );
    poolBase.rotation.x = Math.PI * 1.5;
    poolBase.position.y = 0.015;


    const [pwRadiusTop, pwRadiusBottom, pwHeight, pwRadialSegments, pwHeightSegments] = [2.5, 2.5, 0.1, 36, 2];
    const poolWater = new THREE.Mesh(
        new THREE.CylinderGeometry(pwRadiusTop, pwRadiusBottom, pwHeight, pwRadialSegments, pwHeightSegments),
        new THREE.MeshStandardMaterial({ 
            color: new THREE.Color("hsl(222, 70%, 72%)"),
            transparent: true,
            opacity: 0.52
        })
    )
    poolWater.position.y = 0;

    sceneOrGroup.add(pool, poolBase, poolWater);
    sceneOrGroup.position.set(4.5, 0, -9);
}

function createSandbox(sceneOrGroup) {
    const sandbox_Textures = _LOAD.getSandboxTextures(); 

    const [sfWidth, sfHeight, sfDepth] = [4, 0.4, 0.3];
    const sandboxFramesConfig = [
        {xPos: 0, zPos: 0, yRotate: 0},
        {xPos: 2, zPos: 2, yRotate: Math.PI * 0.5},
        {xPos: 0, zPos: 4, yRotate: 0},
        {xPos: -2, zPos: 2, yRotate: Math.PI * 0.5}
    ];

    for(let sandboxFrame_no = 0; sandboxFrame_no < sandboxFramesConfig.length; sandboxFrame_no++) {
        const sandboxFrame = new THREE.Mesh(
            new THREE.BoxGeometry(sfWidth, sfHeight, sfDepth),
            new THREE.MeshStandardMaterial({ 
                transparent: true,
                color: "#ddd",
                aoMap: sandbox_Textures.frames.armMap,
                roughnessMap: sandbox_Textures.frames.armMap,
                metalnessMap: sandbox_Textures.frames.armMap,
                map: sandbox_Textures.frames.colorMap,
                normalMap: sandbox_Textures.frames.normalMap
            })
        );
        sandboxFrame.position.y = (sfHeight / 2) - 0.05;
        sandboxFrame.position.x = sandboxFramesConfig[sandboxFrame_no].xPos;
        sandboxFrame.position.z = sandboxFramesConfig[sandboxFrame_no].zPos;
        sandboxFrame.rotation.y = sandboxFramesConfig[sandboxFrame_no].yRotate;
        sceneOrGroup.add(sandboxFrame);
    }

    //const sandMaterial = new THREE.MeshStandardMaterial({ color: "hsl(40, 50%, 60%)" });
    /* const sandTestMaterial = new THREE.MeshStandardMaterial({ color: "hsl(40, 50%, 65%)" }); */

    const [ssWidth, ssHeight, ssDepth] = [4, 0.2, 4];
    const sandSurface = new THREE.Mesh(
        new THREE.BoxGeometry(ssWidth, ssHeight, ssDepth),
        new THREE.MeshStandardMaterial({
            color: new THREE.Color("hsl(40, 70%, 85%)"),
            aoMap: sandbox_Textures.surface.armMap,
            roughnessMap: sandbox_Textures.surface.armMap,
            metalnessMap: sandbox_Textures.surface.armMap,
            map: sandbox_Textures.surface.colorMap,
            normalMap: sandbox_Textures.surface.normalMap
        })
    ); 
    sandSurface.position.z = 2;

    const [smRadiusTop, smRadiusBottom, smHeight, smRadialSegments, smHeightSegments] = [0.3, 1.5, 1, 12, 4];
    const sandMound = new THREE.Mesh(
        new THREE.CylinderGeometry(smRadiusTop, smRadiusBottom, smHeight, smRadialSegments, smHeightSegments),
        new THREE.MeshStandardMaterial({
            color: new THREE.Color("hsl(40, 80%, 85%)"),
            aoMap: sandbox_Textures.mound.armMap,
            roughnessMap: sandbox_Textures.mound.armMap,
            metalnessMap: sandbox_Textures.mound.armMap,
            map: sandbox_Textures.mound.colorMap,
            normalMap: sandbox_Textures.mound.normalMap
        })
    );
    sandMound.position.y = smHeight / 2;
    sandMound.position.z = 2;

    sceneOrGroup.add(sandSurface, sandMound);
    sceneOrGroup.position.set(-9.5, 0, -0.5);
}