import { Injectable } from '@angular/core';
import * as animationData from './tutorialData.json';

let json = animationData;

@Injectable({
  providedIn: 'root',
})
export class SelfInstallTutorialServiceService {
  constructor() {}

  getAnimationFor(equipmentType: EquipmentType) {
    switch (equipmentType) {
      case EquipmentType.Modem: {
        return json.animations[0];
      }
      case EquipmentType.Router: {
        return json.animations[0];
      }
      case EquipmentType.Stb: {
        return json.animations[0];
      }
    }
  }
}

export enum EquipmentType {
  Modem,
  Router,
  Stb,
}

export class CharterAnimationSegment {
  body: string;
}
