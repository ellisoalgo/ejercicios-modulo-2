"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.jp/150x150.png";
// avatar que eligió el usuario al registrarse
let userAvatar = "https://dev.adalab.es/gato-siames.webp";

const loadAvatar = document.querySelector('.user__avatar');

loadAvatar.src = userAvatar || DEFAULT_AVATAR;