import{j as e,T as x,i as f,B as d,q as h,r as p,f as a,x as m,t as b,S as k,A as l}from"./index-b3e74ef1.js";import{q as u,B as w,H as C}from"./BackgroundWithCircle-cade9291.js";const v=({children:t})=>{const o=u("(max-width: 900px)");return e(x,{textAlign:"center",p:5,fontWeight:"800",fontSize:o?"2rem":"4.375rem",color:"cg.1",children:t})},y=f(d)(({theme:t})=>({cursor:"pointer",position:"relative","&:hover":{outline:`7px solid ${t.palette.p[3]}`,borderRadius:"8px",h1:{opacity:1}},zIndex:1})),H=h.div`
  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  z-index: 5;

  background-color: rgba(10, 19, 32, 0.5);

  border-radius: 8px;
`,M=h.h1`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  color: white;

  z-index: 10;
`,c=({children:t,onClick:o,label:r,color:i})=>{const s=u("(max-width: 900px)"),[g,n]=p.useState(!1);return a(y,{onClick:o,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),sx:{scale:s?"0.5":"1",transform:s?"translateY(-10rem)":"0"},children:[t,g&&e(H,{}),e(M,{color:i,children:r.toUpperCase()})]})},S=()=>{const t=m(),o=p.useRef(null),{stacks:r}=b(),i=s=>{s&&t(`/loading/${s}`)};return a(w,{sx:{overflow:"hidden"},children:[e(C,{isMain:!1}),a(d,{width:"100vw",height:"100%",minHeight:"100vh",justifyContent:"center",paddingTop:"8.125rem",position:"relative",zIndex:"5",children:[e(v,{children:"Choose Color"}),a(k,{alignItems:"center",spacing:9,mt:"2.8125rem",children:[e(c,{label:"black",color:"black",onClick:()=>i("black"),children:e(l,{ref:o,selecteds:r,color:"black"})}),e(c,{label:"white",color:"white",onClick:()=>i("white"),children:e(l,{ref:o,selecteds:r,color:"white"})})]})]})]})},j=S;export{j as default};
