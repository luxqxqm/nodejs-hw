import { Router } from 'express';
import {
  getNoteById,
  getAllNotes,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  createNoteSchema,
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

// GET всі нотатки
const router = Router();

router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
router.post(
  '/notes',
  celebrate(createNoteSchema, { abortEarly: false }),
  createNote,
);
router.delete('/notes/:noteId', celebrate(updateNoteSchema), deleteNote);
router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);
export default router;
