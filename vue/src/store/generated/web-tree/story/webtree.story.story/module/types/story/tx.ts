/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "webtree.story.story";

export interface MsgCreateEvent {
  creator: string;
  giverId: string;
  takerId: string;
  giverSign: string;
  takerSign: string;
  unionId: string;
  typeId: string;
  body: string;
}

export interface MsgCreateEventResponse {
  id: number;
}

export interface MsgUpdateEvent {
  creator: string;
  id: number;
  giverId: string;
  takerId: string;
  giverSign: string;
  takerSign: string;
  unionId: string;
  typeId: string;
  body: string;
}

export interface MsgUpdateEventResponse {}

export interface MsgDeleteEvent {
  creator: string;
  id: number;
}

export interface MsgDeleteEventResponse {}

const baseMsgCreateEvent: object = {
  creator: "",
  giverId: "",
  takerId: "",
  giverSign: "",
  takerSign: "",
  unionId: "",
  typeId: "",
  body: "",
};

export const MsgCreateEvent = {
  encode(message: MsgCreateEvent, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateEvent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateEvent } as MsgCreateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateEvent {
    const message = { ...baseMsgCreateEvent } as MsgCreateEvent;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgCreateEvent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.giverId !== undefined && (obj.giverId = message.giverId);
    message.takerId !== undefined && (obj.takerId = message.takerId);
    message.giverSign !== undefined && (obj.giverSign = message.giverSign);
    message.takerSign !== undefined && (obj.takerSign = message.takerSign);
    message.unionId !== undefined && (obj.unionId = message.unionId);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateEvent>): MsgCreateEvent {
    const message = { ...baseMsgCreateEvent } as MsgCreateEvent;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgCreateEventResponse: object = { id: 0 };

export const MsgCreateEventResponse = {
  encode(
    message: MsgCreateEventResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateEventResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateEventResponse } as MsgCreateEventResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateEventResponse {
    const message = { ...baseMsgCreateEventResponse } as MsgCreateEventResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateEventResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateEventResponse>
  ): MsgCreateEventResponse {
    const message = { ...baseMsgCreateEventResponse } as MsgCreateEventResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateEvent: object = {
  creator: "",
  id: 0,
  giverId: "",
  takerId: "",
  giverSign: "",
  takerSign: "",
  unionId: "",
  typeId: "",
  body: "",
};

export const MsgUpdateEvent = {
  encode(message: MsgUpdateEvent, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.giverId !== "") {
      writer.uint32(26).string(message.giverId);
    }
    if (message.takerId !== "") {
      writer.uint32(34).string(message.takerId);
    }
    if (message.giverSign !== "") {
      writer.uint32(42).string(message.giverSign);
    }
    if (message.takerSign !== "") {
      writer.uint32(50).string(message.takerSign);
    }
    if (message.unionId !== "") {
      writer.uint32(58).string(message.unionId);
    }
    if (message.typeId !== "") {
      writer.uint32(66).string(message.typeId);
    }
    if (message.body !== "") {
      writer.uint32(74).string(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateEvent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateEvent } as MsgUpdateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.giverId = reader.string();
          break;
        case 4:
          message.takerId = reader.string();
          break;
        case 5:
          message.giverSign = reader.string();
          break;
        case 6:
          message.takerSign = reader.string();
          break;
        case 7:
          message.unionId = reader.string();
          break;
        case 8:
          message.typeId = reader.string();
          break;
        case 9:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateEvent {
    const message = { ...baseMsgUpdateEvent } as MsgUpdateEvent;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateEvent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.giverId !== undefined && (obj.giverId = message.giverId);
    message.takerId !== undefined && (obj.takerId = message.takerId);
    message.giverSign !== undefined && (obj.giverSign = message.giverSign);
    message.takerSign !== undefined && (obj.takerSign = message.takerSign);
    message.unionId !== undefined && (obj.unionId = message.unionId);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateEvent>): MsgUpdateEvent {
    const message = { ...baseMsgUpdateEvent } as MsgUpdateEvent;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateEventResponse: object = {};

export const MsgUpdateEventResponse = {
  encode(_: MsgUpdateEventResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateEventResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateEventResponse } as MsgUpdateEventResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateEventResponse {
    const message = { ...baseMsgUpdateEventResponse } as MsgUpdateEventResponse;
    return message;
  },

  toJSON(_: MsgUpdateEventResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateEventResponse>): MsgUpdateEventResponse {
    const message = { ...baseMsgUpdateEventResponse } as MsgUpdateEventResponse;
    return message;
  },
};

const baseMsgDeleteEvent: object = { creator: "", id: 0 };

export const MsgDeleteEvent = {
  encode(message: MsgDeleteEvent, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteEvent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteEvent } as MsgDeleteEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteEvent {
    const message = { ...baseMsgDeleteEvent } as MsgDeleteEvent;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteEvent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteEvent>): MsgDeleteEvent {
    const message = { ...baseMsgDeleteEvent } as MsgDeleteEvent;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteEventResponse: object = {};

export const MsgDeleteEventResponse = {
  encode(_: MsgDeleteEventResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteEventResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteEventResponse } as MsgDeleteEventResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteEventResponse {
    const message = { ...baseMsgDeleteEventResponse } as MsgDeleteEventResponse;
    return message;
  },

  toJSON(_: MsgDeleteEventResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteEventResponse>): MsgDeleteEventResponse {
    const message = { ...baseMsgDeleteEventResponse } as MsgDeleteEventResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateEvent(request: MsgCreateEvent): Promise<MsgCreateEventResponse>;
  UpdateEvent(request: MsgUpdateEvent): Promise<MsgUpdateEventResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteEvent(request: MsgDeleteEvent): Promise<MsgDeleteEventResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateEvent(request: MsgCreateEvent): Promise<MsgCreateEventResponse> {
    const data = MsgCreateEvent.encode(request).finish();
    const promise = this.rpc.request(
      "webtree.story.story.Msg",
      "CreateEvent",
      data
    );
    return promise.then((data) =>
      MsgCreateEventResponse.decode(new Reader(data))
    );
  }

  UpdateEvent(request: MsgUpdateEvent): Promise<MsgUpdateEventResponse> {
    const data = MsgUpdateEvent.encode(request).finish();
    const promise = this.rpc.request(
      "webtree.story.story.Msg",
      "UpdateEvent",
      data
    );
    return promise.then((data) =>
      MsgUpdateEventResponse.decode(new Reader(data))
    );
  }

  DeleteEvent(request: MsgDeleteEvent): Promise<MsgDeleteEventResponse> {
    const data = MsgDeleteEvent.encode(request).finish();
    const promise = this.rpc.request(
      "webtree.story.story.Msg",
      "DeleteEvent",
      data
    );
    return promise.then((data) =>
      MsgDeleteEventResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
