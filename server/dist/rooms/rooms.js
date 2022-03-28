"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaveRoom = exports.joinRoom = exports.createRoom = exports.getRooms = exports.setVideoOnPlay = void 0;
var rooms = [];
var setVideoOnPlay = function (videoOnPlay, roomId) {
    rooms.forEach(function (room) { return (room.roomId === roomId) && (room.onPlay = videoOnPlay); });
    return { videoOnPlay: videoOnPlay, roomId: roomId };
};
exports.setVideoOnPlay = setVideoOnPlay;
var getRooms = function () {
    return rooms;
};
exports.getRooms = getRooms;
var createRoom = function (newRoom) {
    // check if the new room's ID does not already exist
    if (!rooms.some(function (r) { return r.roomId === newRoom.roomId; })) {
        rooms.push(newRoom);
    }
    /**
     * TODO: add error handling (case: the ID already exists)
     * this task is not important in the near future
     * given how unlikely it is to have duplicate room IDs
     */
    return newRoom;
};
exports.createRoom = createRoom;
var joinRoom = function (_a) {
    var userId = _a.userId, roomId = _a.roomId;
    /**
     * roomId: ID of the room the user wish to join
     * below, we check if a room with that ID exists
     * if yes, add the userId to the room's list of members (ie. the user joins the room)
     */
    rooms.forEach(function (room) {
        if (room.roomId === roomId) {
            room.members.push(userId);
        }
        // TODO: add error handling (case: roomId doesn't exist)
    });
    var roomInfo = rooms.filter(function (room) { return room.roomId === roomId; })[0];
    return { userId: userId, roomInfo: roomInfo };
};
exports.joinRoom = joinRoom;
var leaveRoom = function (_a) {
    var userId = _a.userId, roomId = _a.roomId;
};
exports.leaveRoom = leaveRoom;
