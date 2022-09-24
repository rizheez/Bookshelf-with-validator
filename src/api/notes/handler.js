const ClientError = require('../../exceptions/ClientError');

class NotesHandler {
    constructor (service, validator) {
        this._service = service;
        this._validator = validator;

        this.postNoteHandler = this.postNoteHandler.bind(this);
        this.getNotesHandler = this.getNotesHandler.bind(this);
        this.getNoteByIdHandler = this.getNoteByIdHandler.bind(this);
        this.putNoteByIdHandler = this.putNoteByIdHandler.bind(this);
        this.deleteNoteByIdHandler = this.deleteNoteByIdHandler.bind(this);
    }

<<<<<<< HEAD
    async postNoteHandler(request, h) {
=======
    postNoteHandler(request, h) {
>>>>>>> e9986cf1d65fa07c4492099a90202e7ee29daf18
        try {
            this._validator.validateNotePayload(request.payload);
            const { title = 'untitled', body, tags } = request.payload;

<<<<<<< HEAD
            const noteId = await this._service.addNote({ title, body, tags });
=======
            const noteId = this._service.addNote({ title, body, tags });
>>>>>>> e9986cf1d65fa07c4492099a90202e7ee29daf18

            const response = h.response({
                status: 'success',
                message: 'Catatan berhasil ditambahkan',
                data: {
                    noteId,
                },
            });
            response.code(201);
            return response;
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }

            // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }

<<<<<<< HEAD
    async getNotesHandler() {
        const notes = await this._service.getNotes();
=======
    getNotesHandler() {
        const notes = this._service.getNotes();
>>>>>>> e9986cf1d65fa07c4492099a90202e7ee29daf18
        return {
            status: 'success',
            data: {
                notes,
            },
        };
    }

<<<<<<< HEAD
    async getNoteByIdHandler(request, h) {
        try {
            const { id } = request.params;
            const note = await this._service.getNoteById(id);
=======
    getNoteByIdHandler(request, h) {
        try {
            const { id } = request.params;
            const note = this._service.getNoteById(id);
>>>>>>> e9986cf1d65fa07c4492099a90202e7ee29daf18
            return {
                status: 'success',
                data: {
                    note,
                },
            };
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }

            // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }

<<<<<<< HEAD
    async putNoteByIdHandler(request, h) {
        try {
            this._validator.validateNotePayload(request.payload);
            const { id } = request.params;
            const { title, body, tags } = request.payload

            await this._service.editNoteById(id, { title, body, tags })
=======
    putNoteByIdHandler(request, h) {
        try {
            this._validator.validateNotePayload(request.payload);
            const { id } = request.params;

            this._service.editNoteById(id, request.payload);
>>>>>>> e9986cf1d65fa07c4492099a90202e7ee29daf18

            return {
                status: 'success',
                message: 'Catatan berhasil diperbarui',
            };
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }

            // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }

<<<<<<< HEAD
    async deleteNoteByIdHandler(request, h) {
        try {
            const { id } = request.params;
            await this._service.deleteNoteById(id);
=======
    deleteNoteByIdHandler(request, h) {
        try {
            const { id } = request.params;
            this._service.deleteNoteById(id);
>>>>>>> e9986cf1d65fa07c4492099a90202e7ee29daf18

            return {
                status: 'success',
                message: 'Catatan berhasil dihapus',
            };
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }

            // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }
}

module.exports = NotesHandler;