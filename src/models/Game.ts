import { AbstractModel } from "./AbstractModel";
import { Helptext } from "./Helptext";
import { GameSetting } from "./GameSetting";
import { Errortext } from "./Errortext";

export class Game extends AbstractModel<Game> {
  private _name: string;
  private _description: string;

  private _helptexts: Helptext[] = [];
  private _gameSettings: GameSetting[] = [];
  private _errortexts: Errortext[] = [];

  private _component: string;

  /**
   * helptext array converted to helptext map
   */
  private _helptextMap: Map<string, Helptext> = undefined;

  public constructor() {
    super();
  }

  public deserialize(input: any) {
    Object.assign(this, input);
    this.helptexts = this.helptexts.map(helptext => {
      return new Helptext().deserialize(helptext);
    });

    this.gameSettings = this.gameSettings.map(gameSetting => {
      return new GameSetting().deserialize(gameSetting);
    });
    return this;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get helptexts(): Helptext[] {
    return this._helptexts;
  }

  set helptexts(value: Helptext[]) {
    this._helptexts = value;
  }

  get gameSettings(): GameSetting[] {
    return this._gameSettings;
  }

  set gameSettings(value: GameSetting[]) {
    this._gameSettings = value;
  }

  get component(): string {
    return this._component;
  }

  set component(value: string) {
    this._component = value;
  }

  /**
   * reads helptexts[] into map
   */
  public createHelptextMap(): void {
    this._helptextMap = new Map<string, Helptext>();

    for (const helpText of this._helptexts) {
      this._helptextMap.set(helpText.name, helpText);
    }
  }

  get helptextMap(): Map<string, Helptext> {
    return this._helptextMap;
  }
}
