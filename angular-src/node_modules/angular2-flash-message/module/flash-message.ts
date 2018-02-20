export type FlashMessagePositioning = 'top-centre' | 'top-right' | 'bottom'

export interface FlashMessageInterface {
  message: string;
  timeoutInMS: number;
  isSuccess: boolean;
  isError: boolean;
  isWarning: boolean;
  isInfo: boolean;
  uuid: string;
}

export class FlashMessage implements FlashMessageInterface {
  private _message: string;
  private _timeoutInMS: number;
  private _isSuccess: boolean;
  private _isError: boolean;
  private _isWarning: boolean;
  private _isInfo: boolean;
  private _uuid: string;

  constructor() {
    this._uuid = this.getUUId();
  }

  private getUUId() {
    return this.randomizer() + this.randomizer() + '-' + this.randomizer() + '-' + this.randomizer() + '-' +
      this.randomizer() + '-' + this.randomizer() + this.randomizer() + this.randomizer();
  }

  private randomizer() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  public get message(): string {
    return this._message;
  }

  public set message(value: string) {
    this._message = value;
  }

  public get timeoutInMS(): number {
    return this._timeoutInMS;
  }

  public set timeoutInMS(value: number) {
    this._timeoutInMS = value;
  }

  public get isSuccess(): boolean {
    return this._isSuccess;
  }

  public set isSuccess(value: boolean) {
    this._isSuccess = value;
  }

  public get isError(): boolean {
    return this._isError;
  }

  public set isError(value: boolean) {
    this._isError = value;
  }

  public get isWarning(): boolean {
    return this._isWarning;
  }

  public set isWarning(value: boolean) {
    this._isWarning = value;
  }

  public get isInfo(): boolean {
    return this._isInfo;
  }

  public set isInfo(value: boolean) {
    this._isInfo = value;
  }

  public get uuid(): string {
    return this._uuid;
  }
}
