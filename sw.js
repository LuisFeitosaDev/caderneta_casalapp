// Service worker mínimo — só existe para o navegador considerar o app
// "instalável". Não faz cache agressivo pra não te prender numa versão
// antiga do app depois de eu mandar atualizações.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', () => {
  // Deixa passar direto pra rede — sem cache offline por enquanto.
});
