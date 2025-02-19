/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IEvent } from 'common/EventEmitter';
import { IBuffer, IBufferSet } from 'common/buffer/Types';
import { IDecPrivateModes } from 'common/Types';
import { createDecorator } from 'common/services/ServiceRegistry';

export const IBufferService = createDecorator<IBufferService>('BufferService');
export interface IBufferService {
  serviceBrand: any;

  readonly cols: number;
  readonly rows: number;
  readonly buffer: IBuffer;
  readonly buffers: IBufferSet;

  // TODO: Move resize event here

  resize(cols: number, rows: number): void;
  reset(): void;
}

export const ICoreService = createDecorator<ICoreService>('CoreService');
export interface ICoreService {
  serviceBrand: any;

  readonly decPrivateModes: IDecPrivateModes;

  readonly onData: IEvent<string>;
  readonly onUserInput: IEvent<void>;

  reset(): void;

  /**
   * Triggers the onData event in the public API.
   * @param data The data that is being emitted.
   * @param wasFromUser Whether the data originated from the user (as opposed to
   * resulting from parsing incoming data). When true this will also:
   * - Scroll to the bottom of the buffer.s
   * - Fire the `onUserInput` event (so selection can be cleared).
    */
  triggerDataEvent(data: string, wasUserInput?: boolean): void;
}

export const IDirtyRowService = createDecorator<IDirtyRowService>('DirtyRowService');
export interface IDirtyRowService {
  serviceBrand: any;

  readonly start: number;
  readonly end: number;

  clearRange(): void;
  markDirty(y: number): void;
  markRangeDirty(y1: number, y2: number): void;
  markAllDirty(): void;
}

export interface IServiceIdentifier<T> {
  (...args: any[]): void;
  type: T;
}

export interface IConstructorSignature0<T> {
  new(...services: { serviceBrand: any; }[]): T;
}

export interface IConstructorSignature1<A1, T> {
  new(first: A1, ...services: { serviceBrand: any; }[]): T;
}

export interface IConstructorSignature2<A1, A2, T> {
  new(first: A1, second: A2, ...services: { serviceBrand: any; }[]): T;
}

export interface IConstructorSignature3<A1, A2, A3, T> {
  new(first: A1, second: A2, third: A3, ...services: { serviceBrand: any; }[]): T;
}

export interface IConstructorSignature4<A1, A2, A3, A4, T> {
  new(first: A1, second: A2, third: A3, fourth: A4, ...services: { serviceBrand: any; }[]): T;
}

export interface IConstructorSignature5<A1, A2, A3, A4, A5, T> {
  new(first: A1, second: A2, third: A3, fourth: A4, fifth: A5, ...services: { serviceBrand: any; }[]): T;
}

export interface IConstructorSignature6<A1, A2, A3, A4, A5, A6, T> {
  new(first: A1, second: A2, third: A3, fourth: A4, fifth: A5, sixth: A6, ...services: { serviceBrand: any; }[]): T;
}

export interface IConstructorSignature7<A1, A2, A3, A4, A5, A6, A7, T> {
  new(first: A1, second: A2, third: A3, fourth: A4, fifth: A5, sixth: A6, seventh: A7, ...services: { serviceBrand: any; }[]): T;
}

export interface IConstructorSignature8<A1, A2, A3, A4, A5, A6, A7, A8, T> {
  new(first: A1, second: A2, third: A3, fourth: A4, fifth: A5, sixth: A6, seventh: A7, eigth: A8, ...services: { serviceBrand: any; }[]): T;
}

export const IInstantiationService = createDecorator<IInstantiationService>('InstantiationService');
export interface IInstantiationService {
  setService<T>(id: IServiceIdentifier<T>, instance: T): void;

  createInstance<T>(ctor: IConstructorSignature0<T>): T;
  createInstance<A1, T>(ctor: IConstructorSignature1<A1, T>, first: A1): T;
  createInstance<A1, A2, T>(ctor: IConstructorSignature2<A1, A2, T>, first: A1, second: A2): T;
  createInstance<A1, A2, A3, T>(ctor: IConstructorSignature3<A1, A2, A3, T>, first: A1, second: A2, third: A3): T;
  createInstance<A1, A2, A3, A4, T>(ctor: IConstructorSignature4<A1, A2, A3, A4, T>, first: A1, second: A2, third: A3, fourth: A4): T;
  createInstance<A1, A2, A3, A4, A5, T>(ctor: IConstructorSignature5<A1, A2, A3, A4, A5, T>, first: A1, second: A2, third: A3, fourth: A4, fifth: A5): T;
  createInstance<A1, A2, A3, A4, A5, A6, T>(ctor: IConstructorSignature6<A1, A2, A3, A4, A5, A6, T>, first: A1, second: A2, third: A3, fourth: A4, fifth: A5, sixth: A6): T;
  createInstance<A1, A2, A3, A4, A5, A6, A7, T>(ctor: IConstructorSignature7<A1, A2, A3, A4, A5, A6, A7, T>, first: A1, second: A2, third: A3, fourth: A4, fifth: A5, sixth: A6, seventh: A7): T;
  createInstance<A1, A2, A3, A4, A5, A6, A7, A8, T>(ctor: IConstructorSignature8<A1, A2, A3, A4, A5, A6, A7, A8, T>, first: A1, second: A2, third: A3, fourth: A4, fifth: A5, sixth: A6, seventh: A7, eigth: A8): T;
}

export const ILogService = createDecorator<ILogService>('LogService');
export interface ILogService {
  serviceBrand: any;

  debug(message: any, ...optionalParams: any[]): void;
  info(message: any, ...optionalParams: any[]): void;
  warn(message: any, ...optionalParams: any[]): void;
  error(message: any, ...optionalParams: any[]): void;
}

export const IOptionsService = createDecorator<IOptionsService>('OptionsService');
export interface IOptionsService {
  serviceBrand: any;

  readonly options: ITerminalOptions;

  readonly onOptionChange: IEvent<string>;

  setOption<T>(key: string, value: T): void;
  getOption<T>(key: string): T | undefined;
}

export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'off';
export type RendererType = 'dom' | 'canvas';

export interface IPartialTerminalOptions {
  allowTransparency?: boolean;
  bellSound?: string;
  bellStyle?: 'none' /*| 'visual'*/ | 'sound' /*| 'both'*/;
  cols?: number;
  cursorBlink?: boolean;
  cursorStyle?: 'block' | 'underline' | 'bar';
  disableStdin?: boolean;
  drawBoldTextInBrightColors?: boolean;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: FontWeight;
  fontWeightBold?: FontWeight;
  letterSpacing?: number;
  lineHeight?: number;
  logLevel?: LogLevel;
  macOptionIsMeta?: boolean;
  macOptionClickForcesSelection?: boolean;
  rendererType?: RendererType;
  rightClickSelectsWord?: boolean;
  rows?: number;
  screenReaderMode?: boolean;
  scrollback?: number;
  tabStopWidth?: number;
  theme?: ITheme;
  windowsMode?: boolean;
  wordSeparator?: string;
}

export interface ITerminalOptions {
  allowTransparency: boolean;
  bellSound: string;
  bellStyle: 'none' /*| 'visual'*/ | 'sound' /*| 'both'*/;
  cols: number;
  cursorBlink: boolean;
  cursorStyle: 'block' | 'underline' | 'bar';
  disableStdin: boolean;
  drawBoldTextInBrightColors: boolean;
  fontSize: number;
  fontFamily: string;
  fontWeight: FontWeight;
  fontWeightBold: FontWeight;
  letterSpacing: number;
  lineHeight: number;
  logLevel: LogLevel;
  macOptionIsMeta: boolean;
  macOptionClickForcesSelection: boolean;
  rendererType: RendererType;
  rightClickSelectsWord: boolean;
  rows: number;
  screenReaderMode: boolean;
  scrollback: number;
  tabStopWidth: number;
  theme: ITheme;
  windowsMode: boolean;
  wordSeparator: string;

  [key: string]: any;
  cancelEvents: boolean;
  convertEol: boolean;
  screenKeys: boolean;
  termName: string;
  useFlowControl: boolean;
}

export interface ITheme {
  foreground?: string;
  background?: string;
  cursor?: string;
  cursorAccent?: string;
  selection?: string;
  black?: string;
  red?: string;
  green?: string;
  yellow?: string;
  blue?: string;
  magenta?: string;
  cyan?: string;
  white?: string;
  brightBlack?: string;
  brightRed?: string;
  brightGreen?: string;
  brightYellow?: string;
  brightBlue?: string;
  brightMagenta?: string;
  brightCyan?: string;
  brightWhite?: string;
}
