export default `
.loader {
  width: 80px;
  height: 75px;
  --c:no-repeat radial-gradient(farthest-side, #f7b261 85%,#b97850,#0000);
  --b:no-repeat radial-gradient(farthest-side, #734b46 94%,#0000);
  --s:8px 8px,8px 8px,8px 8px,40px 40px;
  --e:0 0, 0 0,0 0, 0 0;
  background:
    var(--b) 55% 47%,
    var(--b) 60% 66%,
    var(--b) 37% 43%,
    var(--c) 50% 50%,
    var(--b) 15px 4px,
    var(--b) 4px  14px,
    var(--b) 27px 18px,
    var(--c) 0    0,
    var(--b) calc(100% - 15px)  4px,
    var(--b) calc(100% - 4px)  14px,
    var(--b) calc(100% - 27px) 18px,
    var(--c) 100% 0/40px 40px,
    var(--b) 24px 47px,
    var(--b) 50%  43px,
    var(--b) 60%  58px,
    var(--c) 50%  100%;
  animation: l5 3s infinite;
}
@keyframes l5 {
  0%    ,20% {background-size: var(--s),var(--s),var(--s),var(--s)}
  20.01%,40% {background-size: var(--e),var(--s),var(--s),var(--s)}
  40.01%,60% {background-size: var(--e),var(--e),var(--s),var(--s)}
  60.01%,80% {background-size: var(--e),var(--e),var(--e),var(--s)}
  80.01%,100%{background-size: var(--e),var(--e),var(--e),var(--e)}
}`;