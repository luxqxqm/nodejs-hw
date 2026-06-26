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

const router = Router();

router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
router.get('/notes/:noteId', celebrate(updateNoteSchema), getNoteById);
router.post(
  '/notes',
  celebrate(createNoteSchema),
  celebrate(noteIdSchema),
  createNote,
);
router.delete('/notes/:noteId', celebrate(updateNoteSchema), deleteNote);
router.patch('/notes/:noteId', celebrate(noteIdSchema), updateNote);
export default router;
