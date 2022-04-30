/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "webtree.story.story";

export interface Event {
  id: number;
  giverId: string;
  takerId: string;
  giverSign: string;
  takerSign: string;
  unionId: string;
  typeId: string;
  body: string;
  creator: string;
}

const baseEvent: object = {
  id: 0,
  giverId: "",
  takerId: "",
  giverSign: "",
  takerSign: "",
  unionId: "",
  typeId: "",
  body: "",
  creator: "",
};

export const Event = {
  encode(message: Event, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.giverId !== "") {
      writer.uint32(18).string(message.giverId);
    }
    if (message.takerId !== "") {
      writer.uint32(26).string(message.takerId);
    }
    if (message.giverSign !== "") {
      writer.uint32(34).string(message.giverSign);
    }
    if (message.takerSign !== "") {
      writer.uint32(42).string(message.takerSign);
    }
    if (message.unionId !== "") {
      writer.uint32(50).string(message.unionId);
    }
    if (message.typeId !== "") {
      writer.uint32(58).string(message.typeId);
    }
    if (message.body !== "") {
      writer.uint32(66).string(message.body);
    }
    if (message.creator !== "") {
      writer.uint32(74).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEvent } as Event;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.giverId = reader.string();
          break;
        case 3:
          message.takerId = reader.string();
          break;
        case 4:
          message.giverSign = reader.string();
          break;
        case 5:
          message.takerSign = reader.string();
          break;
        case 6:
          message.unionId = reader.string();
          break;
        case 7:
          message.typeId = reader.string();
          break;
        case 8:
          message.body = reader.string();
          break;
        case 9:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    const message = { ...baseEvent } as Event;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.giverId !== undefined && object.giverId !== null) {
      message.giverId = String(object.giverId);
    } else {
      message.giverId = "";
    }
    if (object.takerId !== undefined && object.takerId !== null) {
      message.takerId = String(object.takerId);
    } else {
      message.takerId = "";
    }
    if (object.giverSign !== undefined && object.giverSign !== null) {
      message.giverSign = String(object.giverSign);
    } else {
      message.giverSign = "";
    }
    if (object.takerSign !== undefined && object.takerSign !== null) {
      message.takerSign = String(object.takerSign);
    } else {
      message.takerSign = "";
    }
    if (object.unionId !== undefined && object.unionId !== null) {
      message.unionId = String(object.unionId);
    } else {
      message.unionId = "";
    }
    if (object.typeId !== undefined && object.typeId !== null) {
      message.typeId = String(object.typeId);
    } else {
      message.typeId = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.giverId !== undefined && (obj.giverId = message.giverId);
    message.takerId !== undefined && (obj.takerId = message.takerId);
    message.giverSign !== undefined && (obj.giverSign = message.giverSign);
    message.takerSign !== undefined && (obj.takerSign = message.takerSign);
    message.unionId !== undefined && (obj.unionId = message.unionId);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.body !== undefined && (obj.body = message.body);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Event>): Event {
    const message = { ...baseEvent } as Event;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.giverId !== undefined && object.giverId !== null) {
      message.giverId = object.giverId;
    } else {
      message.giverId = "";
    }
    if (object.takerId !== undefined && object.takerId !== null) {
      message.takerId = object.takerId;
    } else {
      message.takerId = "";
    }
    if (object.giverSign !== undefined && object.giverSign !== null) {
      message.giverSign = object.giverSign;
    } else {
      message.giverSign = "";
    }
    if (object.takerSign !== undefined && object.takerSign !== null) {
      message.takerSign = object.takerSign;
    } else {
      message.takerSign = "";
    }
    if (object.unionId !== undefined && object.unionId !== null) {
      message.unionId = object.unionId;
    } else {
      message.unionId = "";
    }
    if (object.typeId !== undefined && object.typeId !== null) {
      message.typeId = object.typeId;
    } else {
      message.typeId = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
