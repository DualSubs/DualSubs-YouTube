// @generated by protobuf-ts 2.8.2 with parameter long_type_string,output_javascript
// @generated from protobuf file "player.request.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * https://youtubei.googleapis.com/youtubei/v1/player
 *
 * @generated from protobuf message Player
 */
export interface Player {
    /**
     * @generated from protobuf field: Player.Context context = 1;
     */
    context?: Player_Context;
    /**
     * Context context = 1 [json_name = "responseContext"];
     *
     * @generated from protobuf field: string videoId = 2;
     */
    videoId: string;
    /**
     * optional int32 startTimeSecs = 3;
     *
     * @generated from protobuf field: Player.PlaybackContext playbackContext = 4;
     */
    playbackContext?: Player_PlaybackContext;
}
/**
 * @generated from protobuf message Player.Context
 */
export interface Player_Context {
    /**
     * @generated from protobuf field: Player.Context.Client client = 1;
     */
    client?: Player_Context_Client;
}
/**
 * @generated from protobuf message Player.Context.Client
 */
export interface Player_Context_Client {
    /**
     * @generated from protobuf field: string hl = 1;
     */
    hl: string;
    /**
     * @generated from protobuf field: string gl = 2;
     */
    gl: string;
    /**
     * @generated from protobuf field: string deviceMake = 12;
     */
    deviceMake: string;
    /**
     * @generated from protobuf field: string deviceModel = 13;
     */
    deviceModel: string;
    /**
     * string visitorData = 14 [json_name = "visitorData"];
     * string userAgent = 15 [json_name = "userAgent"];
     * string clientName = 16 [json_name = "clientName"];
     *
     * @generated from protobuf field: string clientVersion = 17;
     */
    clientVersion: string;
    /**
     * string browserVersion = 17 [json_name = "browserVersion"];
     *
     * @generated from protobuf field: string osName = 18;
     */
    osName: string;
    /**
     * @generated from protobuf field: string osVersion = 19;
     */
    osVersion: string;
    /**
     * int32 screenWidthPoints = 37; //??
     * int32 screenHeightPoints = 38; //??
     * optional int32 screenPixelDensity = 41 //??
     * int32 screenWidthPoints = 55; //??
     * int32 screenHeightPoints = 56; //??
     * configInfo configInfo = 62;
     * optional int32 screenDensityFloat = 65; //??
     * optional int32 utcOffsetMinutes = 63;
     * userInterfaceThemType userInterfaceTheme = 78; //??
     *
     * @generated from protobuf field: string timeZone = 80;
     */
    timeZone: string;
}
/**
 * @generated from protobuf message Player.PlaybackContext
 */
export interface Player_PlaybackContext {
    /**
     * @generated from protobuf field: Player.PlaybackContext.ContentPlaybackContext contentPlaybackContext = 1;
     */
    contentPlaybackContext?: Player_PlaybackContext_ContentPlaybackContext;
}
/**
 * @generated from protobuf message Player.PlaybackContext.ContentPlaybackContext
 */
export interface Player_PlaybackContext_ContentPlaybackContext {
    /**
     * optional string currentUrl = 1; //??
     *
     * @generated from protobuf field: optional int32 id4 = 4;
     */
    id4?: number;
    /**
     * @generated from protobuf field: optional int32 id6 = 6;
     */
    id6?: number;
    /**
     * @generated from protobuf field: optional int32 id8 = 8;
     */
    id8?: number;
    /**
     * @generated from protobuf field: optional int32 id9 = 9;
     */
    id9?: number;
}
declare class Player$Type extends MessageType<Player> {
    constructor();
    create(value?: PartialMessage<Player>): Player;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Player): Player;
    internalBinaryWrite(message: Player, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Player
 */
export declare const Player: Player$Type;
declare class Player_Context$Type extends MessageType<Player_Context> {
    constructor();
    create(value?: PartialMessage<Player_Context>): Player_Context;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Player_Context): Player_Context;
    internalBinaryWrite(message: Player_Context, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Player.Context
 */
export declare const Player_Context: Player_Context$Type;
declare class Player_Context_Client$Type extends MessageType<Player_Context_Client> {
    constructor();
    create(value?: PartialMessage<Player_Context_Client>): Player_Context_Client;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Player_Context_Client): Player_Context_Client;
    internalBinaryWrite(message: Player_Context_Client, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Player.Context.Client
 */
export declare const Player_Context_Client: Player_Context_Client$Type;
declare class Player_PlaybackContext$Type extends MessageType<Player_PlaybackContext> {
    constructor();
    create(value?: PartialMessage<Player_PlaybackContext>): Player_PlaybackContext;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Player_PlaybackContext): Player_PlaybackContext;
    internalBinaryWrite(message: Player_PlaybackContext, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Player.PlaybackContext
 */
export declare const Player_PlaybackContext: Player_PlaybackContext$Type;
declare class Player_PlaybackContext_ContentPlaybackContext$Type extends MessageType<Player_PlaybackContext_ContentPlaybackContext> {
    constructor();
    create(value?: PartialMessage<Player_PlaybackContext_ContentPlaybackContext>): Player_PlaybackContext_ContentPlaybackContext;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Player_PlaybackContext_ContentPlaybackContext): Player_PlaybackContext_ContentPlaybackContext;
    internalBinaryWrite(message: Player_PlaybackContext_ContentPlaybackContext, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Player.PlaybackContext.ContentPlaybackContext
 */
export declare const Player_PlaybackContext_ContentPlaybackContext: Player_PlaybackContext_ContentPlaybackContext$Type;
export {};
