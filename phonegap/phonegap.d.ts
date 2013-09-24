// Type definitions for PhoneGap 2.3
// Project: http://phonegap.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface EventTarget {
    result: any;
}

interface GeolocationError {
    code: number;
    message: string;
}

interface Acceleration {
    x: number;
    y: number;
    z: number;
    timestamp: number; //DOMTimeStamp;
}
declare var Acceleration: {
    new(): Acceleration;
}

interface AccelerometerOptions {
    frequency?: number;
}

interface Accelerometer {
    getCurrentAcceleration(accelerometerSuccess: (acceleration: Acceleration) => void , accelerometerError: () => void ): void;
    watchAcceleration(accelerometerSuccess: (acceleration: Acceleration) => void , accelerometerError: () => void , accelerometerOptions?: AccelerometerOptions): void;
    clearWatch(watchID: number): void;
}

interface CameraPopoverOptions {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    arrowDir?: number;
}
declare var CameraPopoverOptions: {
    new(x: number, y: number, width: number, height: number, arrowDir: number): CameraPopoverOptions;
}

interface CameraOptions {
    quality?: number;
    destinationType?: number;
    sourceType?: number;
    allowEdit?: boolean;
    encodingType?: number;
    targetWidth?: number;
    targetHeight?: number;
    mediaType?: number;
    correctOrientation?: boolean;
    saveToPhotoAlbum?: boolean;
    popoverOptions?: number;
}

interface CameraPictureSourceTypeObject {
    CAMERA: number;
    PHOTOLIBRARY: number;
    SAVEDPHOTOALBUM: number;
}

interface CameraDestinationTypeObject {
    FILE_URI: number;
    DATA_URL: number;
}

interface CameraEncodingTypeObject {
    JPEG: number;
    PNG: number;
}

interface CameraMediaTypeObject {
    PICTURE: number;
    VIDEO: number;
    ALLMEDIA: number;
}

interface CameraPopoverArrowDirectionObject {
    ARROW_UP: number;
    ARROW_DOWN: number;
    ARROW_LEFT: number;
    ARROW_RIGHT: number;
    ARROW_ANY: number;
}

interface Camera {
    sourceType: any;
    PictureSourceType: CameraPictureSourceTypeObject;
    DestinationType: CameraDestinationTypeObject;
    EncodingType: CameraEncodingTypeObject;
    MediaType: CameraMediaTypeObject;
    PopoverArrowDirection: CameraPopoverArrowDirectionObject;
    getPicture(cameraSuccess: (imageData: string) => void , cameraError: (message: string) => void , cameraOptions?: CameraOptions): void;
    cleanup(cameraSuccess: (imageData: string) => void , cameraError: (message: string) => void ): void;
}

interface CaptureAudioOptions {
    limit?: number;
    duration?: number;
    mode?: number;
}

interface CaptureImageOptions {
    limit?: number;
    mode?: number;
}

interface MediaFile {
    name: string;
    fullPath: string;
    type: string;
    lastModifiedDate: Date;
    size: number;

    getFormatData(successCallback: Function, errorCallback?: Function): void;
}

interface CaptureError {
    code: number;
    message: string;
}

interface Capture {
    captureAudio(captureSuccess: (mediaFiles: MediaFile[]) => void , captureError: (error: CaptureError) =>void , options?: CaptureAudioOptions);
    captureImage(captureSuccess: (mediaFiles: MediaFile[]) => void , captureError: (error: CaptureError) =>void , options?: CaptureImageOptions);
    captureVideo(captureSuccess: (mediaFiles: MediaFile[]) => void , captureError: (error: CaptureError) =>void , options?: CaptureImageOptions);
}

interface Connection {
    UNKNOWN: number;
    ETHERNET: number;
    WIFI: number;
    CELL_2G: number;
    CELL_3G: number;
    CELL_4G: number;
    NONE: number;
}
declare var Connection: Connection;

interface Connection {
    type: number;
}

interface Device {
    capture: Capture;
}

/* Defined in lib.d.ts
interface File {
    fullPath: string;
    type: string;
    size: number;
}
*/

interface FileWriter {
    readyState: any;
    fileName: string;
    length: number;
    position: number;
    error: FileError;

    onwritestart: Function;
    onprogress: Function;
    onwrite: Function;
    onabort: Function;
    onerror: Function;
    onwriteend: Function;

    abort();
    seek();
    truncate();
    write();
}

interface FileSystem {
    name: string;
    root: DirectoryEntry;
}
declare var DirectoryEntry: {
    new(name: string, root: DirectoryEntry): DirectoryEntry;
}

interface FileSystemEntry {
    isFile: boolean;
    isDirectory: boolean;
    name: string;
    fullPath: string;
    filesystem: FileSystem;

    getMetadata(onSuccess?: (arg) => any, onError?: (arg) => any);
    setMetadata(onSuccess?: (arg) => any, onError?: (arg) => any, options?);
    toURL();
    remove(onSuccess?: (arg) => any, onError?: (arg) => any);
    getParent(onSuccess?: (arg) => any, onError?: (arg) => any);
}

interface FileEntry extends FileSystemEntry {
    moveTo(parentEntry: DirectoryEntry, file: string, onSuccess: (arg) => any, onError: (arg) => any);
    copyTo(parentEntry: DirectoryEntry, file: string, onSuccess: (arg) => any, onError: (arg) => any);
    createWriter(onSuccess?: (arg) => any, onError?: (arg) => any);
    file(onSuccess?: (arg) => any, onError?: (arg) => any);
}

interface DirectoryEntry extends FileSystemEntry {
    createReader();
    getDirectory();
    getFile();
    removeRecursively();
}

interface DirectoryReader {
    readEntries(successCallback: (entries: FileSystemEntry) => void , errorCallback: (error: FileError) => void );
}

interface FileTransfer {
    onprogress: Function;

    //upload(filePath: string, server: string, successCallback: (metadata: Metadata) => void , errorCallback: (error: FileError) => void , options?: any): void;
    upload(filePath: string, server: string, successCallback: (result: FileUploadResult) => void , errorCallback: (error: FileError) => void , options?: any): void;
    download(source: string, target: string, successCallback: (fileEntry: FileEntry) => void , errorCallback: (error: FileError) => void, options?: any): void;
    abort(): void;
}
declare var FileTransfer: {
    new(): FileTransfer;
}

interface FileUploadOptions {
    fileKey?: string;
    fileName?: string;
    mimeType?: string;
    params?: any;
    chunkedMode?: boolean;
    headers?: any;
}
declare var FileUploadOptions: {
    new(): FileUploadOptions;
}

interface FileUploadResult {
    bytesSent: number;
    responseCode: number;
    response: string;
}

// TODO Flags

/*
interface LocalFileSystem {
    requestFileSystem: Function;
    resolveLocalFileSystemURI: Function;
}*/

interface LocalFileSystem {
    PERSISTENT: number;
    TEMPORARY: number;
}
declare var LocalFileSystem: LocalFileSystem;

interface Metadata {
    modificationTime: Date;
}

interface FileError {
    code: number;
}
declare var FileError: {
    NOT_FOUND_ERR: number;
    SECURITY_ERR: number;
    ABORT_ERR: number;
    NOT_READABLE_ERR: number;
    ENCODING_ERR: number;
    NO_MODIFICATION_ALLOWED_ERR: number;
    INVALID_STATE_ERR: number;
    SYNTAX_ERR: number;
    INVALID_MODIFICATION_ERR: number;
    QUOTA_EXCEEDED_ERR: number;
    TYPE_MISMATCH_ERR: number;
    PATH_EXISTS_ERR: number;
}

interface FileTransferError {
    code: number;
    source: string;
    target: string;
    http_status: number;
}
declare var FileTransferError: {
    FILE_NOT_FOUND_ERR: number;
    INVALID_URL_ERR: number;
    CONNECTION_ERR: number;
    ABORT_ERR: number;
}

interface GeolocationOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
}

interface GlobalizationError {
    code: number;
    message: string;
}

declare var GlobalizationError: {
    UNKNOWN_ERROR: number;
    FORMATTING_ERROR: number;
    PARSING_ERROR: number;
    PATTERN_ERROR: number;
}

interface Globalization {
    getPreferredLanguage(successCB, errorCB): void;
    getLocaleName(successCB, errorCB): void;
    dateToString(date, successCB, errorCB, options): void;
    stringToDate(dateString, successCB, errorCB, options): void;
    getDatePattern(successCB, errorCB, options): void;
    getDateNames(successCB, errorCB, options): void;
    isDayLightSavingsTime(date, successCB, errorCB): void;
    getFirstDayOfWeek(successCB, errorCB): void;
    numberToString(number, successCB, errorCB, options): void;
    stringToNumber(string, successCB, errorCB, options): void;
    getNumberPattern(successCB, errorCB, options): void;
    getCurrencyPattern(currencyCode, successCB, errorCB): void;
}

/*
interface InAppBrowser {
    addEventListener(eventname: string, callback): void;
    removeEventListener(eventname: string, callback): void;
    open(url?: string, target?: string, features?: string, replace?: boolean): Window;
    close(): void;
}
*/

interface Media {
    new (src: string, mediaSuccess: Function, mediaError?: (mediaError: MediaError) => any, mediaStatus?: Function);
    getCurrentPosition(mediaSuccess: Function, mediaError?: (mediaError: MediaError) => any): void;
    getDuration(): any;
    play(): void;
    pause(): void;
    release(): void;
    seekTo(milliseconds: number): void;
    startRecord(): void;
    stopRecord(): void;
    stop(): void;
}
declare var Media: {
    new(src: string, onSuccess: (arg) => any, onError: (arg) => any): Media;
}

interface Notification {
    alert(message: string, alertCallback: Function, title?: string, buttonName?: string): void;
    confirm(message: string, confirmCallback: Function, title?: string, buttonLabels?: string): void;
    beep(times: number): void;
    vibrate(milliseconds: number): void;
}

interface Database {
    transaction(populateDB?: (tx: SQLTransaction) => any, errorCB?: (err) => any, successCB?: () => any);
    changeVersion(var1: string, var2: string);
}

interface SQLResultSetRowList {
    length: number;
    item(index: number): any;
}

interface SQLError {
    code: number;
    message: string;
}

interface SQLResultSet {
    insertId: number;
    rowsAffected: number;
    rows: SQLResultSetRowList;
}

interface SQLTransaction {
    executeSql(sql: string): SQLResultSet;
}

/* Defined in lib.d.ts

interface LocalStorage {
    key;
    getItem;
    setItem;
    removeItem;
    clear;
}
*/

interface /*PhoneGapNavigator extends*/ Navigator {
    accelerometer: Accelerometer;
    camera: Camera;
    capture: Capture;
    connection: Connection;
    globalization: Globalization;
    notification: Notification;
}

interface Window {
    requestFileSystem: any;
    openDatabase(database_name: string, database_version: string, database_displayname: string, database_size: number): Database;
}

declare var phoneGapNavigator: Navigator /*PhoneGapNavigator*/;
