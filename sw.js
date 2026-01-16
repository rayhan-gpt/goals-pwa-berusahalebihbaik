self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>self.clients.claim());

self.addEventListener("push",e=>{
  const data=e.data?.json()||{};
  self.registration.showNotification(
    data.title||"Pengingat",
    {body:data.body||"Saatnya beraktivitas",icon:"icon-192.png"}
  );
});