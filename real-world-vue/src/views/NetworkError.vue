<template>
  <div class="NetworkError">
    <h1>Uh-Oh</h1>
    <h3>
      Parece ser que estamos teniendo unos problemas internos de red, porfavor danos un respiro y
      <a href="#" @click="$router.go(-1)">Pulse aqui</a>
      para volver a intentarlo
    </h3>
  </div>
</template>
