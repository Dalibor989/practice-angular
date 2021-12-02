import {Injectable} from "@angular/core";
import {Guidebook} from "./guidebook.model";

@Injectable()
export class GuidebookService {
  private guidebooks: Guidebook[] = [
    new Guidebook(
      'First guidebook',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, tenetur!'
    ),
    new Guidebook(
      'Second guidebook',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi consequuntur cum natus porro, quo.'
    ),
    new Guidebook(
      'Third guidebook',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet eaque exercitationem ipsam magni molestiae neque officia perferendis sed voluptatibus?'
    )
  ]

  getGuidebook() {
    return this.guidebooks.slice();
  }
}
