const { Router } = require('express');
const { getUsuarios, 
  postUsuarios, 
  putUsuarios, 
  patchUsuarios, 
  deleteUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuarios);

router.put('/:id', putUsuarios);

router.post('/', postUsuarios );

router.patch('/', patchUsuarios);

router.delete('/', deleteUsuarios);
module.exports = router;